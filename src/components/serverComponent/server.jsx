import React, { useState, useReducer, useEffect, useCallback, useMemo } from "react";

// --- Reducer complexe pour gérer l’état du tableau de bord ---
function dashboardReducer(state, action) {
    switch (action.type) {
        case "ADD_LOG":
            return { ...state, logs: [...state.logs, action.payload] };
        case "UPDATE_METRIC":
            return { ...state, metrics: { ...state.metrics, [action.key]: action.value } };
        case "RESET":
            return { logs: [], metrics: {} };
        default:
            throw new Error("Action non reconnue: " + action.type);
    }
}

// --- Hook personnalisé interne ---
function useAutoRefresh(interval, callback) {
    useEffect(() => {
        const id = setInterval(callback, interval);
        return () => clearInterval(id);
    }, [interval, callback]);
}

export default function SmartDashboard() {
    const [state, dispatch] = useReducer(dashboardReducer, {
        logs: [],
        metrics: { cpu: 0, memory: 0 },
    });

    const [loading, setLoading] = useState(false);

    // --- Fonction asynchrone pour simuler une API ---
    const fetchMetrics = useCallback(async () => {
        setLoading(true);
        await new Promise((r) => setTimeout(r, 1000)); // simulation réseau
        const newMetrics = {
            cpu: Math.floor(Math.random() * 100),
            memory: Math.floor(Math.random() * 100),
        };
        dispatch({ type: "UPDATE_METRIC", key: "cpu", value: newMetrics.cpu });
        dispatch({ type: "UPDATE_METRIC", key: "memory", value: newMetrics.memory });
        dispatch({ type: "ADD_LOG", payload: `Métriques mises à jour à ${new Date().toLocaleTimeString()}` });
        setLoading(false);
    }, []);

    // --- Rafraîchissement automatique toutes les 5 secondes ---
    useAutoRefresh(5000, fetchMetrics);

    // --- Calcul mémoïsé (optimisation) ---
    const averageLoad = useMemo(() => {
        const { cpu, memory } = state.metrics;
        return ((cpu + memory) / 2).toFixed(2);
    }, [state.metrics]);

    // --- Fonction interne pour reset le tableau de bord ---
    function handleReset() {
        dispatch({ type: "RESET" });
    }

    // --- Fonction utilitaire pour formater l’affichage ---
    function renderMetric(name, value) {
        const color = value > 75 ? "red" : value > 50 ? "orange" : "green";
        return (
            <div style={{ color }}>
                {name.toUpperCase()}: {value}%
            </div>
        );
    }

    return (
        <div style={{ fontFamily: "sans-serif", padding: "1rem" }}>
            <h2>🧠 Smart Dashboard</h2>

            {loading ? <p>⏳ Chargement des métriques...</p> : <p>✅ Données à jour</p>}

            <div>{renderMetric("cpu", state.metrics.cpu)}</div>
            <div>{renderMetric("memory", state.metrics.memory)}</div>
            <div>Moyenne de charge : {averageLoad}%</div>

            <button onClick={fetchMetrics}>🔁 Mettre à jour</button>
            <button onClick={handleReset}>♻️ Réinitialiser</button>

            <h3>📜 Logs :</h3>
            <ul>
                {state.logs.map((log, i) => (
                    <li key={i}>{log}</li>
                ))}
            </ul>
        </div>
    );
}

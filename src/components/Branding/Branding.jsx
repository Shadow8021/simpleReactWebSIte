import "./Branding.css"
import { donnees } from "../../assets/images/partenaire/partenaires"

export default function Branding() {
    return (

        <div className="branding">
            <h3>ils nous font confiance</h3>

            <div className="contain">
                {donnees.map((donnee) => (
                    <div className="logopart">
                        <img className="logoimg" src={donnee.image} alt="logo" />
                    </div>
                ))}


            </div>

        </div>
    )

}
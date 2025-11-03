import "./Branding.css"
import image3 from "../../assets/images/services/img3.png"

export default function Branding() {
    return (
        <div className="branding">
            <h3>ils nous font confiance</h3>
            <div className="contain">
                <div className="logopart">
                    <img className="logoimg" src={image3} alt="logo" />
                </div>
                <div className="logopart"></div>
                <div className="logopart"></div>
                <div className="logopart"></div>
            </div>
        </div>
    )
}
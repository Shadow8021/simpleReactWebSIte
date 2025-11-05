import "./Contact.css"
import Button from "../Button/Button"
import { FaInstagram, FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6"


export default function Contact() {
    return (
        <div className="footer">
            <div className="formulaire">
                <form method="post">
                    <textarea name="message" id="" placeholder="Ecrivez votre message ici..." required></textarea><br />
                    <Button type="submit" value="envoyer" className="loginBtn" />
                </form>
            </div>
            <div className="information">
                <div className="Box1">
                    <h4>Contacts</h4>
                    <p>+242 0687047456</p>
                    <p>04 RUE NGUIE Makabandzilou/Brazzaville</p>
                    <p>gregoroyaga@gmail.com</p>

                </div>
                <div className="Box2">
                    <a href="" ><FaInstagram color="#E13O6C" className="icon" /></a>
                    <a href="" ><FaFacebook className="icon" /></a>
                    <a href="" ><FaXTwitter className="icon" /></a>
                    <a href="" ><FaLinkedin className="icon" /></a>
                </div>
            </div>
        </div>
    )
}
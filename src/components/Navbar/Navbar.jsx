import style from "./Navbar.module.css"
import Button from "../Button"
import logo from "../../assets/images/logo.png"
export default function NavBar() {
    return (
        <div className={style.navDiv}>
            <div className={style.logo}><img src={logo} alt="logo" /></div>
            <div className={style.menu}>
                <div className={style.ligne1}></div>
                <div className={style.ligne2}></div>
                <div className={style.ligne3}></div>
            </div>
            <nav>
                <ul>
                    <li className={style.item}>Home</li>
                    <li className={style.item}>Contact</li>
                    <li className={style.item}>Newsletter</li>
                    <Button value="Login" className={style.loginBtn} />
                </ul>

            </nav>
        </div>
    )
}
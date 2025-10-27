import style from "./Navbar.module.css"
import Button from "../Button/Button"
import logo from "../../assets/images/logo.png"
import { useState } from "react"



export default function NavBar() {
    const [active, setActive] = useState(true)

    function handleClick() {
        setActive(!active)
        console.log(active)
    }

    return (
        <>
            <div className={active ? style.menu : style.activeMenu} onClick={handleClick} >
                <div className={style.ligne1}></div>
                <div className={style.ligne2}></div>
                <div className={style.ligne3}></div>
            </div>


            <div className={active ? style.navDiv : style.navDivActive}>
                <div className={style.logo}><img src={logo} alt="logo" /></div>

                <nav>
                    <ul>
                        <li className={style.item} onClick={active == false ? handleClick : ""}>Acceuil</li>
                        <li className={style.item} onClick={active == false ? handleClick : ""}>A propos</li>
                        <li className={style.item} onClick={active == false ? handleClick : ""}>Academie</li>
                        <li className={style.item} onClick={active == false ? handleClick : ""}>Nos Services</li>
                        <li className={style.item} onClick={active == false ? handleClick : ""}>Contacts</li>
                        <Button value="Login" className={style.loginBtn} onClick={active == false ? handleClick : ""} />
                    </ul>

                </nav>
            </div>
        </>
    )
}
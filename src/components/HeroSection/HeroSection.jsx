import style from "./HeroSection.module.css"
import Button from "../Button/Button"
import hacker from "../../assets/images/hacker.png"
export default function HeroSection() {
    return (
        <div className={style.hero}>
            <div className={style.heropart}>
                <h1>Restez toujours connecté</h1>
                <Button value="Decouvrir nos services" className={style.actionBtn} />
            </div>
            <div className={`${style.heropart} ${style.heropart1}`}>
                <img className={style.imageHero} src={hacker} alt="image" />
            </div>
        </div>
    )
}
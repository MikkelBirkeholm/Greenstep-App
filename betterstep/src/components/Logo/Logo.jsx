import styles from "./logo.module.css"
import Image from "next/image"
import logo from "../../public/logo-small.svg"

export default function Logo() {
    <div>
    <Image className={styles.logo} src={logo} alt="logo" width={115} height={115}/>
    </div>
}
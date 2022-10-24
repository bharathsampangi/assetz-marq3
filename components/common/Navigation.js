import React from "react"
import styles from "./styles/Navigation.module.css"

export default function Navigation() {
    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <img src="/images/Assetz-header-logo.png" alt="Assetz Marq" className={styles.logo}/>
                <ul>
                    <li className={styles.link}>About</li>
                    <li className={styles.link}>The Township</li>
                    <li className={styles.link}>The Park</li>
                    <li className={styles.link}>Amenities</li>
                    <li className={styles.link}>Contact</li>
                </ul>
            </nav>
            <img src="/images/marq-footer-logo.png" alt="Assetz Marq" className={styles.logoHeader} />
        </header>
    )
}
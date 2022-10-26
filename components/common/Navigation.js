import React from "react"
import styles from "./styles/Navigation.module.css"
import Link from "next/link"

export default function Navigation() {
    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <img src="/images/Assetz-header-logo.webp" alt="Assetz Marq" className={styles.logo}/>
                <ul>
                    <li className={styles.link}>About</li>
                    <li className={styles.link}>
                        <Link href="/#township" scroll={false} passHref>
                            <a>The Township</a>
                        </Link>
                    </li>
                    <li className={styles.link}>The Park</li>
                    <li className={styles.link}>Amenities</li>
                    <li className={styles.link}>
                        <Link href="/#contact" scroll={false} passHref>
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <img src="/images/marq-footer-logo.webp" alt="Assetz Marq" className={styles.logoHeader} />
        </header>
    )
}
import React from "react"
import styles from "./styles/Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerOne}>
                <div className={styles.footerColumn1}>
                    <img src="./images/marq-footer-logo.webp" alt="Footer" />
                </div>
                <div className={styles.footerColumn2}>
                    <img src="./images/EBrochureDownload-Button.webp" alt="E-Brochure" />
                </div>
                <div className={styles.footerColumn3}>
                    <p>
                        This site is built solely for professional experience.
                    </p>
                </div>
            </div>
            <div className={styles.footerTwo}>
                &copy; 2022-2023 ABC Realtors. This is not built for marketing. This site is built solely to gain professional experience.
            </div>
        </footer>
    )
}

export default Footer
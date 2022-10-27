import React from "react";
import styles from "./styles/Contact.module.css"

export default function Contact() {
    return (
        <section className={styles.container} id='contact'>
            <div className={styles.header}>
                <span>Contact Us</span>
                <div className={styles.borderBottom}></div>
            </div>
            <div className={styles.contactContainer}>
                <form className={styles.inputContainer} action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" value="ec20fcf4-3183-4ea2-b3cb-2f8096c34440" />
                    <input type="text" placeholder="Name" name="name" required />
                    <input type="email" placeholder="Email Id" name="email" required />
                    <input type="number" placeholder="Phone Number" name="phone" required />
                    <input type="text" placeholder="Message" name="message" required />
                    <div>
                        <input type="checkbox" name="updates" defaultChecked/> I agree to recieve updates on Whatsapp
                    </div>
                    <input type="submit" className={styles.button} value="Submit"/>
                </form>
                <div className={styles.addressContainer}>
                    <p>
                        Assetz Marq, <br/>
                        (Next to Sai Laxmi industries),<br/>
                        Whitefield-Hoskote Main Road,<br/>
                        Kannamangala,<br/>
                        Bengaluru - 560067<br/>
                        <br/>
                        <br/>
                        enquiries@assetzproperty.com<br/>
                        +91 78295 54411
                    </p>
                </div>
                <div className={styles.address}>
                    <div className={styles.addressBox}>
                        <img src="/images/contact-assetz.png" alt="Assetz" />
                        <span>Assetz Property Group</span><br/>
                        <p>
                            No.30 Crescent Road, Bengaluru,<br/>
                            Bengaluru – 560 001.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
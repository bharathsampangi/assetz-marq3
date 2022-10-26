import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./styles/Modal.module.css"

function Modal({ onClose }) {
    const [isBrowser, setIsBrowser] = useState(false);
  
    useEffect(() => {
      setIsBrowser(true);
    }, []);

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    }

    const modalContent = (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.modalHeader}>
                    <h2>DISCLAIMER</h2>    
                </div>
                <div className={styles.modalBody}>
                    <p>Thank you for visiting the Assetz Property Group website.</p>
                    <p>Please be informed that by using or accessing the website you agree 
                    with the disclaimer without any qualification or limitation. 
                    Assetz Property Group (“Assetz”) including all its companies, 
                    partnerships, affiliates and all its associates reserve the 
                    right to add, alter or delete material from the website at any 
                    time and may, at any time, revise these terms without notifying you. 
                    You are bound by any such amendments and Assetz therefore advises  
                    you to periodically visit this page to review the current Terms.
                    </p>
                    <p>The websites and all its content is provided with all faults on an “as is” 
                    and “as available” basis. No information given in this website 
                    creates a warranty or expands the scope of any warranty that 
                    cannot be disclaimed under the applicable laws. 
                    Your use of the website is solely at your own risk. This website is for guidance only. 
                    It does not constitute part of an offer or contract. Design and specifications are 
                    subject to change without prior notice. Computer generated images are the artist&apos;s 
                    impression and are an indication of the actual designs. Further the actual 
                    design/construction may vary in fit and finish from the one displayed in the information 
                    and material displayed on this website.</p>                
                    <p>You are therefore, required to verify all the details, including area, amenities, services, terms of sales, payments and other relevant terms independently with Assetz  prior to concluding any decision for buying any unit(s) in any of our projects/developments. Till such time the details are fully updated, the said information will not be construed as an advertisement. To find out more about our projects/developments, please call our enquiry helpline or visit our sales office and speak to our authorised sales representatives.</p>                <p>In no event will Assetz, its management, its associate companies, its affiliates and/or its employees will be liable for claims made by the users, including seeking any cancellation for any of the inaccuracies in the information provided in this website, though all efforts have to be made to ensure accuracy. Assetz under no circumstances will be liable for any expense, loss or damage including, without limitation, indirect or consequential loss or damage, or any expense, loss or damage whatsoever arising from use, or loss of use, of data, arising out of or in connection with the use of this website.</p>                <p className="add_mbott">This website is currently being updated. While enough care is taken by Assetz to ensure that information in the website is up to date, accurate and correct, readers are requested to make their independent enquiry before relying upon the same. All content, including brochures, are purely for general informational purposes only. It is not meant to constitute an offer or solicitation. No furniture or accessories or any other item of personalised nature shown in any of the visuals are provided with the unit. All intending purchaser/s in any of the projects shall be governed by the terms and conditions envisaged under The Real Estate (Regulation and Development) Act 2016. Nothing on the website should be misconstrued as advertising, marketing, booking, selling or an offer for sale or invitation to purchase a unit in any project by the company/firm. Assetz is not responsible for the consequences of any action taken by the viewer relying on such material/information on this website. To find out more about projects/developments, please call  080 46114611 or visit our sales office during working hours and get in touch with authorised sales representatives.</p>   
                    <div className={styles.modalCenter}>
                        <button id="agree_btn" onClick={handleCloseClick}>I AGREE</button>
                    </div>
                </div>
            </div>
        </div>  
    )

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent, 
            document.getElementById("modal-root")
        );
      } else {
        return null;
      }    
  
}

export default Modal;
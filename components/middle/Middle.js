import React from "react"
import MiddleIFrame from "./MiddleIFrame"
import styles from "./styles/Middle.module.css"
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const DynamicIFrame = dynamic(() => import('./MiddleIFrame'), {
  suspense: true,
})

const Middle = () => {
    return (
        <section className={styles.middleContainer}>
            <img alt="Middle" src="/images/Middle-Pic.webp" className={styles.image} />
            <div className={styles.textContainer}>
                <div className={styles.header}>
                    <h1>
                        From old Bangalore to<br/>
                        our modern metro,<br/>
                        live the best of both<br/>
                        worlds.<br/>
                    </h1>
                    <div className={styles.borderBottom}></div>
                    <p className={styles.text}>
                        Discover the township with that cradles the<br/>
                        old charm with the modern day progress.
                    </p>
                </div>
            </div>
            <div className={styles.video}>
                <Suspense fallback={`Loading...`}>
                    <DynamicIFrame />
                </Suspense>
            </div>
        </section>
    )
}

export default Middle
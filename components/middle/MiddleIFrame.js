import styles from "./styles/Middle.module.css"

const MiddleIFrame = () => {
    return (
        <>
            <iframe className={styles.videoDesktop}
                width="818"
                height="460"
                src="https://www.youtube.com/embed/17CLxxZf6a8"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>
            <iframe className={styles.videoMobile}
                width="380"
                height="250"
                src="https://www.youtube.com/embed/17CLxxZf6a8"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>
        </>
    )
}

export default MiddleIFrame
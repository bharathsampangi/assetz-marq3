import React, { useState, useEffect } from "react";
import Contact from "../contact/Contact";
import Gallery from "../gallery/Gallery";
import Hero from "../hero/Hero";
import Location from "../location/Location";
import Middle from "../middle/Middle";
import Preview from "../preview/Preview";
import Township from "../township/Township";
import Modal from '../modal/Modal'

export default function Main() {
    const [showModal, setshowModal] = useState(false)

    useEffect(() => {
        setshowModal(true)
        setTimeout(() => {
            setshowModal(false)
        }, 2000)
    }, [])

    return (
        <>
            <Hero />
            <Township />
            <Middle />
            <Gallery />
            <Preview />
            <Location />
            <Contact />
            {showModal && <Modal onClose={() => setshowModal(false)}/>}
        </>
    )
}
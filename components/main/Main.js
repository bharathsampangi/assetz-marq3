import React from "react";
import Contact from "../contact/Contact";
import Gallery from "../gallery/Gallery";
import Hero from "../hero/Hero";
import Location from "../location/Location";
import Middle from "../middle/Middle";
import Preview from "../preview/Preview";
import Township from "../township/Township";

export default function Main() {
    return (
        <>
            <Hero />
            <Township />
            <Middle />
            <Gallery />
            <Preview />
            <Location />
            <Contact />
        </>
    )
}
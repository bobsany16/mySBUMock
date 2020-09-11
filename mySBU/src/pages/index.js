import React from "react"

// import Heading from "../components/Typography/Heading";
import { Heading, Body } from "../components/Typography"
import NavBar from "../components/NavBar"
import {Footer} from "../components/Footer";

export default function Home() {
  return (
    <div className="mainWrapper">
      <NavBar />
      <div className="introWrapper">
        <Body medium>Hello,</Body>
        <Heading>I'M LINH</Heading>
       <br/>
        <Body medium>
          I’m a <b className={"blueText"}>software developer</b> with a passion
          for UI/UX. I’m very career-driven and determined. Super involved in
          the <b className="pinkText">LGBTQIA+ community </b>
          and social justice issues.
        </Body>
      </div>
      <Footer />
    </div>
  )
}

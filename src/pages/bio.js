import React from "react"
import { css } from "@emotion/core"

import BioSection from "../components/bioSection"
import Layout from "../components/layout"
import SEO from "../components/seo"

import booksPic from "../images/books.jpg"
import cameraPic from "../images/camera.jpg"
import workoutPic from "../images/workout.jpg"
import computerPic from "../images/computer.jpg"


const styles = {
  mainContainer: css`
    display: flex;
    flex-wrap: wrap;
    & > * { 
      margin: 0 16px ${225 / 3}px; 
    }}
  `
}

const BioPage = () => {
  const sections = [
    {
      position: "left",
      alt: "počítač",
      image: computerPic,
      text: "Programování není jen rozhraní mezi člověkem a počítačem - je to jazyk. Pomáhá mi formovat myšlenky, zhmotňovat koncepty do reality a sdílet nápady s ostatními."
    },
    {
      position: "right",
      alt: "nástroje na cvičení",
      image: workoutPic,
      text: "Sport je moje každodenní palivo. Dostávám při něm většinu svých nápadů a rovnám si myšlenky. Cvičení je vlastně taková meditace, jen se u ní trochu zapotíte."
    },
    {
      position: "left",
      alt: "foťák",
      image: cameraPic,
      text: "Foťák je moje třetí oko. Baví mě dívat se na svět skrz hledáček a nacházet neobyčejnosti v obyčejných každodenních věcech. Nejlepší fotky, stejně jako nápady, přichází, právě když je nečekáš."
    },
    {
      position: "right",
      alt: "hromada knih",
      image: booksPic,
      text: "Bez písma by lidstvo pořád rozdělávalo oheň kamenem. Ani já se nechci zaseknout v pravěku, a proto si chodím pro inspiraci a motivaci do knih. Rád si čtu přiběhy druhých a učím se z nich. Na romány mě ale moc neužije."
    }
  ]

  return (
    <Layout heading="Bio">
      <SEO title="Bio" />
      <div css={styles.mainContainer}>
        {sections.map(({ position, image, text, alt }, index) =>
          <BioSection key={index} picPosition={position} image={image} text={text} index={index} alt={alt} />
        )}
      </div>
    </Layout>
  )
}

export default BioPage

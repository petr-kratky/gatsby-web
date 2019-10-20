import React from "react"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Paper from "../components/paper"

import profilePic from "../images/profile_pic.jpg"
import cameraPic from "../images/camera.jpg"
import workoutPic from "../images/workout.jpg"
import computerPic from "../images/computer.jpg"

import { slideInLeft, slideInRight } from "../utils/animations"

const picSize = 225
const flexMargin = 16

const styles = {
  mainContainer: css`
    display: flex;
    flex-wrap: wrap;
    & > * { 
      margin: 0 ${flexMargin}px ${picSize / 3}px; 
    }
  `,
  paperBase: css`
  	transition: box-shadow .5s ease-out;
  	&:hover {
  	  box-shadow: 0 0 15px 8px rgba(0,0,0,0.45);
  	}
  `,
  bioWrapperBase: css`
    width: calc(50% - ${flexMargin * 2}px);
    min-width: min-content;
    flex-grow: 1;
    transition: box-shadow .5s ease-out, transform .5s ease-out;
  	&:hover #profilePicWrapper {
  	  box-shadow: 0 0 15px 8px rgba(0,0,0,0.45);
  	}
  	&:hover #profilePic {
  	  transform: scale(1.05) translateX(5px);
  	}
    
  `,
  bioContainer: css`
  	position: relative;
  	display: flex;
  	flex-wrap: wrap;
  	width: 100%;
  	min-width: 450px;
  `,
  bioTextBase: css`
  	font-size: 18px;
  	font-weight: 500;
  	margin: 0;
  `,
  profilePicWrapperBase: css`
  	display: inline-block;
  	overflow: hidden;
  	border-radius: 50%;
  	width: ${picSize}px;
  	height: ${picSize}px;
  	z-index: 2;
  	position: absolute;
  	top: calc(50% - ${picSize / 2}px);
  	box-shadow: 0 0 15px 5px rgba(0,0,0,0.25);
  	transition: box-shadow .5s ease-out;
  `,
  profilePic: css`
  	vertical-align: middle;
  	transition: transform .5s ease-out;
  	&:hover {
  	  transform: scale(1.05) translateX(5px);
  	}
  `
}

const BioSection = ({ picPosition, image, text, index }) => {
  const animationDelay = (index + 1) / 3.5

  const leftStyles = {
    bioWrapper: css`
      ${styles.bioWrapperBase};
  	  ${slideInLeft()};
      padding-left: ${picSize / 2}px;
      animation-delay: ${animationDelay}s;
    `,
    paper: css`
      ${styles.paperBase};
  	  ${slideInLeft()};
    `,
    bioText: css`
      ${styles.bioTextBase};
      text-align: left;
      padding: 16px 16px 16px ${picSize / 2 + 10}px;
    `,
    profilePicWrapper: css`
      ${styles.profilePicWrapperBase};
      left: calc(-${picSize / 2}px);
    `
  }

  const rightStyles = {
    bioWrapper: css`
      ${styles.bioWrapperBase};
      ${slideInRight()};
      padding-right: ${picSize / 2}px;
      animation-delay: ${animationDelay}s;
    `,
    paper: css`
      ${styles.paperBase};
  	  ${slideInRight()};
    `,
    bioText: css`
      ${styles.bioTextBase};
      text-align: right;
      padding: 16px ${picSize / 2 + 10}px 16px 16px;
    `,
    profilePicWrapper: css`
      ${styles.profilePicWrapperBase};
      right: calc(-${picSize / 2}px);
    `
  }

  const localStyles = picPosition === "left" ? leftStyles : rightStyles

  return (
    <div css={localStyles.bioWrapper}>
      <div css={styles.bioContainer}>
        <div css={localStyles.profilePicWrapper} id="profilePicWrapper">
          <img src={image} alt="profilová fotka" css={styles.profilePic} id="profilePic" />
        </div>
        <Paper addCss={localStyles.paper}>
          <p css={localStyles.bioText}>
            {text}
          </p>
        </Paper>
      </div>
    </div>
  )
}

const BioPage = () => {
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolore eius enim esse facilis illum porro quam. Atque consectetur deleniti id ipsam laboriosam molestiae nobis quaerat quam, totam vel, voluptates?"

  const sections = [
    {
      position: "left",
      image: profilePic,
      text: lorem
    },
    {
      position: "right",
      image: computerPic,
      text: lorem
    },
    {
      position: "left",
      image: workoutPic,
      text: lorem
    },
    {
      position: "right",
      image: cameraPic,
      text: lorem
    }
  ]

  return (
    <Layout heading="Bio">
      <SEO title="Bio" />
      <div css={styles.mainContainer}>
        {sections.map(({ position, image, text }, index) =>
          <BioSection key={index} picPosition={position} image={image} text={text} index={index}/>
        )}
      </div>
    </Layout>
  )
}

export default BioPage

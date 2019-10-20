import React from "react"
import { css } from "@emotion/core"

import heartIcon from "../images/heart.png"
import jsIcon from "../images/js_logo.svg"
import pyIcon from "../images/py_logo.png"
import profilePic from "../images/profile_pic.jpg"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Paper from "../components/paper"

import { slideInTop, padLeft, padRight } from "../utils/animations"
import { BioSection } from "./bio"

const styles = {
  nameContainer: css`
  	display: flex;
  	justify-content: center;
  	
  	& > h2 {
      margin: 0;
      padding: 25px 30px;
      font-size: 82px;
      text-transform: uppercase;
      background-color: #ffffff;
      color: #343434;
      position: relative;
      ${slideInTop()};
      animation-delay: 0.5s;
      box-shadow: 0 0 15px 10px rgba(0,0,0,0.15);
      border-radius: 10px;
      @media (max-width: 1280px) {
        font-size: 68px;
        padding: 25px 30px;
      }
      @media (max-width: 1024px) {
        font-size: 56px;
        padding: 15px 20px;
      }
      
      .name-pad {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 160px;
        height: 130%;
        position: absolute;
        background-color: #343434;
        top: -20px;
        color: #ffffff;
        font-size: 130px;
        font-weight: 600;
        box-shadow: 0 0 15px 5px rgba(0,0,0,0.25);
        border-radius: 9px;
        @media (max-width: 1280px) {
          font-size: 100px;
          width: 140px;
          top: -20px;
        }
        @media (max-width: 1024px) {
          font-size: 72px;
          width: 110px;
          top: -12px;
        }
      }
      
      #name-pad-left {
        ${padLeft};
        left: -155px;
        @media (max-width: 1280px) {
          left: -130px;
        }
        @media (max-width: 1024px) {
          left: -100px;
        }
      }
      
      #name-pad-right {
        ${padRight};
        right: -155px;
        @media (max-width: 1280px) {
          right: -130px;
        }
        @media (max-width: 1024px) {
          right: -100px;
        }
      }
      
      #first-name {
        font-weight: 300;
      }
      
      #last-name {
        font-weight: 500;
      }
      
      #slash {
        font-size: 90px;
        font-weight: 700;
        margin-left: 5px;
        @media (max-width: 1280px) {
          font-size: 80px;
        }
        @media (max-width: 1024px) {
          font-size: 56px;
        }
        
      }
  	}
  `,
  mainContainer: css`
  	display: flex;
  	flex-grow: 1;
  	justify-content: center;
  `,
  sectionContainer: css`
  	margin-top: 9%;
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-shrink: 1;
    & > * { margin: 100px auto; }
    
  `,
  sectionHeading: css`
    ${slideInTop()};
    animation-delay: 1.2s;
    margin: 0;
    border-radius: 10px;
    padding: 8px 16px;
    text-transform: uppercase;
    color: #ffffff;
    background-color: #343434;
    box-shadow: 3px 3px 12px 3px rgba(0,0,0,0.3);
    line-height: 28px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    
    img {
      margin: 0 9px;
      width: 23px;
      height: 23px;
      vertical-align: text-top;
    }
  `,
  bioWrapper: css`
  	width: 60%;
  	@media (max-width: 1440px) { width: 70%; }
  	@media (max-width: 1024px) { width: 90%; }
  `,
  sectionText: css`
    font-weight: 600;
    font-size: 18px;
    margin: 0;
  `
}

const IndexPage = () => {
  return (
    <Layout heading="Kdo jsem?">
      <SEO title="Kdo jsem" />
      <div css={styles.nameContainer}>
        <h2>
          <div id="name-pad-left" className="name-pad">
            <span>{"<"}</span>
          </div>
          <span id="first-name">Petr</span>
          <span id="last-name">Krátký</span>
          <div id="name-pad-right" className="name-pad">
            <span id="slash">{"/"}</span>
            <span>{">"}</span>
          </div>
        </h2>
      </div>
      <div css={styles.mainContainer}>
        <section css={styles.sectionContainer}>
          <h3 css={styles.sectionHeading}>
            <span>full-</span>
            <span>stack</span>
            <img src={jsIcon} alt="Javascript" />
            <span>&</span>
            <img src={pyIcon} alt="Python" />
            <span>vývojář&nbsp;</span>
            <span>s</span>
            <img src={heartIcon} alt="Love" />
            <span>pro&nbsp;</span>
            <span>design</span>
          </h3>
          <BioSection
            picPosition="left"
            image={profilePic}
            text="Miluju tvořit! Naplňujě mě přivádět na svět hezké a zároveň funkční věci, ať už je to webová aplikace nebo designový systém."
            index={4}
            classes={{ bioWrapper: styles.bioWrapper }}
          />
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage

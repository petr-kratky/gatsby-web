import React from "react"
import { css } from "@emotion/core"

import heartIcon from "../images/heart.png"
import jsIcon from "../images/js_logo.svg"
import pyIcon from "../images/py_logo.svg"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { slideInTop, padLeft, padRight } from "../utils/animations"

const styles = {
  headerContainer: css`
    ${slideInTop()};
  	background-color: #343434;
  	color: #eaeaec;
  	margin-top: 100px;
  	margin-left: 150px;
  	display: inline-block;
  	padding: 30px;
  	box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.15);
  	
    h1 {
      text-transform: uppercase;
      font-size: 72px;
      margin: 0;
  	}
  `,
  nameContainer: css`
  	display: flex;
  	margin-top: 200px;
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
      }
      
      #name-pad-left {
        ${padLeft};
        left: -155px;
      }
      
      #name-pad-right {
        ${padRight};
        right: -155px;
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
      }
  	}
  `,
  contentContainer: css`
  	margin-top: 150px;
  	display: flex;
  	justify-content: center;
  	
  	#article-header {
  	  ${slideInTop("skew(20deg)")};
  	  animation-delay: 1.2s;
      background-color: #343434;
      display: flex;
      align-items: center;
      padding: 10px 20px;
      
      h3 {
        transform: skew(-20deg);
        margin: 0;
        text-transform: uppercase;
        color: #ffffff;
        display: flex;
        align-items: center;
        
        img {
          margin: 0 9px;
        }
      }
  	}
  `
}

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Kdo jsem" />
      <div css={styles.headerContainer}>
        <h1>Kdo jsem?</h1>
      </div>
      <div css={styles.nameContainer}>
        <h2>
          <div id="name-pad-left" className="name-pad">
            <span>{"<"}</span>
          </div>
          <span id="first-name">Petr </span>
          <span id="last-name">Krátký</span>
          <div id="name-pad-right" className="name-pad">
            <span id="slash">{"/"}</span>
            <span>{">"}</span>
          </div>
        </h2>
      </div>
      <div css={styles.contentContainer}>
        <div id="article-header">
          <h3>
            <span>full-stack</span>
            <img src={jsIcon} width="22" alt="Javascript" />
            <span>&</span>
            <img src={pyIcon} width="22" alt="Python"/>
            <span>vývojář s</span>
            <img src={heartIcon} width="23" alt="Love" />
            <span>pro design</span>
          </h3>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

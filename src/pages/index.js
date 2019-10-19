import React from "react"
import { css } from "@emotion/core"

import heartIcon from "../images/heart.png"
import jsIcon from "../images/js_logo.svg"
import pyIcon from "../images/py_logo.png"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { slideInTop, padLeft, padRight } from "../utils/animations"

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
  contentContainer: css`
  	margin-top: 7%;
  	display: flex;
  	align-items: center;
  	flex-direction: column;
    @media (max-width: 1280px) {
      margin-top: 10%;
    }
    @media (max-width: 1024px) {
      margin-top: 8%;
    }
    
  	#article-header {
  	  box-shadow: 3px 3px 12px 3px rgba(0,0,0,0.3);
  	  ${slideInTop("skew(0deg)")};
  	  animation-delay: 1.2s;
      background-color: #343434;
      display: flex;
      align-items: center;
      padding: 10px 20px;
      z-index: 1;
      position: relative;
      border-radius: 10px;
      
      h3 {
        transform: skew(-0deg); 
        margin: 0;
        text-transform: uppercase;
        color: #ffffff;
        display: flex;
        align-items: center;
        font-size: 25px;
        @media (max-width: 1280px) {
          font-size: 20px;
        }
        @media (max-width: 1024px) {
          font-size: 18px;
        }
        
        img {
          margin: 0 9px;
          width: 25px;
          @media (max-width: 1280px) {
            width: 22px;
          }
          @media (max-width: 1024px) {
            width: 20px;
          }
        }
      }
  	}
  	
  	#p-container {
      background-color: #ffffff;
      margin: -20px 0 0 50px;
      width: 100%;
      padding: 30px 18px 15px 18px;
      box-shadow: 0 0 15px 5px rgba(0,0,0,0.25);
      z-index: -1;
      border-radius: 8px;
      ${padRight};
      animation-delay: 1.8s;
      @media (max-width: 1280px) {
        margin: -20px 0 0 40px;
      }
      @media (max-width: 1024px) {
        margin: -20px 0 0 30px;
      }
      
      p {
        font-weight: 600;
        font-size: 25px;
        margin: 0;
        color: #232323;
        max-width: fit-content;
        line-height: 1.6;
        position: relative;
        @media (max-width: 1280px) {
          font-size: 20px;
        }
        @media (max-width: 1024px) {
          font-size: 18px;
        }
      }
      
    }
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
      <article css={styles.contentContainer}>
        <div>
          <div id="article-header">
            <h3>
              <span>full-stack</span>
              <img src={jsIcon} alt="Javascript" />
              <span>&</span>
              <img src={pyIcon} alt="Python" />
              <span>vývojář s</span>
              <img src={heartIcon} alt="Love" />
              <span>pro design</span>
            </h3>
          </div>
          <div id="p-container">
            <p><span id="first-word">Miluju</span> tvořit! Naplňujě mě přivádět na svět hezké a zároveň funkční věci, ať už je to webová aplikace nebo designový systém.</p>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export default IndexPage

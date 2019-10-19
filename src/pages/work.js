import React from "react"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Paper from "../components/paper"

import pyLogo from "../images/py_logo.png"
import gqlLogo from "../images/graphql_logo.png"
import reactLogo from "../images/react_logo.png"
import nodeLogo from "../images/node_logo.png"
import { slideInTop } from "../utils/animations"

const styles = {
  mainContainer: css`
  	display: flex;
  	max-width: 100%;
  	flex-wrap: wrap;
  	justify-content: center;
  	margin-top: -32px;
  `,
  paper: css`
  	width: 500px;
  	margin: 32px;
  	display: flex;
  	justify-content: center;
    ${slideInTop()};
    position: relative;
  `,
  paperTitle: css`
  	position: absolute;
  	top: -15px;
  	left: -17px;
  	z-index: 2;
  	background-color: #343434;
  	color: #ffffff;
  	padding: 12px;
  	border-radius: 8px;
  	font-weight: 600;
  `,
  paperContent: css`
  	display: flex;
  	flex-direction: column;
  	align-items: center;
  	width: 100%;
  `,
  paperText: css`
  	font-size: 18px;
  	font-weight: 500;
  	text-align: center;
  	padding: 0 30px;
  `,
  separator: css`
  	height: 1px;
  	width: 85%;
  	background-color: rgba(0, 0 , 0, .25);
  `,
  logoContainer: css`
  	max-width: 250px;
  	padding: 3%;
  	height: 300px;
  	display: flex;
  	align-items: center;
  	justify-content: center;
  `,
  logo: css`
  `
}

const WorkPage = () => {
  const lorem = "In a professional context it often happens that private or corporate clients order a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled."

  const images = [
    {
      image: reactLogo,
      alt: "react logo",
      title: "React",
      text: lorem
    },
    {
      image: nodeLogo,
      alt: "node JS logo",
      title: "Node.js",
      text: lorem
    },
    {
      image: gqlLogo,
      alt: "graph QL logo",
      title: "GraphQL",
      text: lorem
    },
    {
      image: pyLogo,
      alt: "python logo",
      title: "Python",
      text: lorem
    }
  ]

  return (
    <Layout heading="Co dělám?">
      <SEO title="Co dělám" />
      <div css={styles.mainContainer}>
        {images.map(({ image, text, alt, title }, index) =>
          <Paper key={title} addCss={css`
          	${styles.paper};
          	animation-delay: ${(index + 1) / 3}s;
          `}>
            <h2 css={styles.paperTitle}>{title}</h2>
            <div css={styles.paperContent}>
              <div css={styles.logoContainer}>
                <img src={image} alt={alt} css={styles.logo} />
              </div>
              {/*<hr css={styles.separator} />*/}
              <p css={styles.paperText}>{text}</p>
            </div>
          </Paper>
        )}
      </div>
    </Layout>
  )
}

export default WorkPage

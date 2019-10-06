import React from "react"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { slideInTop } from "../utils/animations"

const styles = {
  headerContainer: css`
    ${slideInTop};
  	background-color: #343434;
  	color: #eaeaec;
  	margin-top: 100px;
  	margin-left: 150px;
  	display: inline-block;
  	padding: 30px;
  `,
  header: css`
    text-transform: uppercase;
    font-size: 72px;
    margin: 0;
  `,
  mainContainer: css`
    ${slideInTop};
    animation-delay: 0.5s;
  	background-color: #ffffff;
  	height: 300px;
  	margin: 0 150px;
  `,
  firstName: css`
  `,
  lastName: css`
  `
}

const BioPage = () => {
  return (
    <Layout>
      <SEO title="Bio" />
      <div css={styles.headerContainer}>
        <h1 css={styles.header}>bio</h1>
      </div>
      <div css={styles.mainContainer}>dss</div>
    </Layout>
  )
}

export default BioPage

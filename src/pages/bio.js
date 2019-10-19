import React from "react"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { slideInTop } from "../utils/animations"

const styles = {
  mainContainer: css`
    ${slideInTop()};
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
    <Layout heading="Bio">
      <SEO title="Bio" />
      <div css={styles.mainContainer}>dss</div>
    </Layout>
  )
}

export default BioPage

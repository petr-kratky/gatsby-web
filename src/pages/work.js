import React from "react"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Paper from "../components/paper"

const styles = {
  mainContainer: css`
  	display: flex;
  	
  `
}

const WorkPage = () => {
  return (
    <Layout heading="Co dělám?">
      <SEO title="Moje práce" />
      <div css={styles.mainContainer}>
        <Paper>
          ddadada
        </Paper>
      </div>
    </Layout>
  )
}

export default WorkPage

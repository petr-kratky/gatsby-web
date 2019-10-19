import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import Header from "./header"
import Footer from "./footer"


const styles = {
  body: css`
    background: rgb(22,123,237);
    background: linear-gradient(180deg, rgba(22,123,237,1) 0%, rgba(141,83,165,1) 30%, rgba(254,50,93,1) 100%);
    min-height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
  `,
  content: css`
  	flex: 1;
  	margin: auto 10%;
  	@media (max-width: 1024px) {
  	  margin: auto 7%;
  	}
  `
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  const { title, author } = data.site.siteMetadata

  return (
    <>
      <Header title={title} />
      <div css={styles.body}>
        <main css={styles.content}>
          {children}
        </main>
        <Footer author={author} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout

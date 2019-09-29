import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import Header from "./header"


const styles = {
  layout: css`
    background: rgb(22,123,237);
    background: -moz-linear-gradient(180deg, rgba(22,123,237,1) 0%, rgba(141,83,165,1) 30%, rgba(254,50,93,1) 100%);
    background: -webkit-linear-gradient(180deg, rgba(22,123,237,1) 0%, rgba(141,83,165,1) 30%, rgba(254,50,93,1) 100%);
    background: linear-gradient(180deg, rgba(22,123,237,1) 0%, rgba(141,83,165,1) 30%, rgba(254,50,93,1) 100%);
    min-height: 100vh;
  `
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header title={data.site.siteMetadata.title}/>
      <main css={styles.layout}>
        {children}
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout

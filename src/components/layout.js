import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import Header from "./header"
import Footer from "./footer"
import { slideInTop } from "../utils/animations"


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
  `,
  headerContainer: css`
    ${slideInTop()};
  	background-color: #343434;
  	color: #eaeaec;
  	margin-top: 3%;
  	display: inline-block;
  	padding: 30px;
  	box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.15);
  	border-radius: 15px;
    @media (max-width: 1280px) {
      margin-top: 7%;
    }
    @media (max-width: 1024px) {
      margin-top: 6%;
      padding: 20px
    }
  	
    h1 {
      text-transform: uppercase;
      font-size: 72px;
      margin: 0;
      @media (max-width: 1280px) {
        font-size: 50px;
      }
      @media (max-width: 1024px) {
        font-size: 42px;
      }
  	}
  `,
}

const Layout = ({ children, heading }) => {
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
          <div css={styles.headerContainer}>
            <h1>{heading}</h1>
          </div>
          {children}
        </main>
        <Footer author={author} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.node.isRequired
}

export default Layout

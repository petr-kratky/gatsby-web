import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"


const styles = {
  container: css`
  	height: 28px;
  	color: #eaeaec;
  	font-size: 14px;
  	display: flex;
  	justify-content: center;
  `,
  copyright: css`
  	font-weight: 700;
  `
}

const Footer = ({ author }) => {

  return (
    <footer css={styles.container}>
      <span css={styles.copyright}>©&nbsp;</span>
      <span>{new Date().getFullYear()}&nbsp;{author}</span>
    </footer>
  )
}

Footer.propTypes = {
  author: PropTypes.node.isRequired
}

Footer.defaultProps = {
  author: ``
}

export default Footer

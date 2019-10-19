import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"


const styles = {
  container: css`
  	height: 40px;
  	color: #ffffff;
  	font-size: 14px;
  	display: flex;
  	justify-content: center;
  	align-items: flex-end;
  	margin-bottom: 5px;
  	font-weight: 500;
  	@media (max-width: 1024px) {
      font-size: 12px;
  	}
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

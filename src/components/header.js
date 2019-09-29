import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { css } from "@emotion/core"

const linkStyleBase = css`
  padding: 0 2px;
  text-decoration: none;
  font-size: 18px;
  position: relative;
  :visited { color: #eaeaec }
  :before {
    content: '';
    height: 1px;
    transition: width 200ms ease-out;
    background-color: #eaeaec;
    display: block;
    position: absolute;
    bottom: -2px;
    left: 0;
  }
`

const styles = {
  container: css`
    background: #343434;
    min-height: 60px;
    display: flex;
    align-items: center;
    color: #eaeaec;
    padding: 0 20px;
  `,
  heading: css`
  	margin: 0;
  	text-transform: uppercase;
  	display: inline-block;
  `,
  menu: css`
    display: flex;
    width: 400px;
    justify-content: space-between;
  	margin-left: auto;
  	& a {
  	  ${linkStyleBase}
  	  :before { width: 0 }
  	  :hover:before { width: 100%}
  	}
  	.activeLink {
  	  ${linkStyleBase};
  	  text-shadow: 0 0 .35px #eaeaec, 0 0 .35px #eaeaec;
  	  :before { width: 100% }
  	}
  `
}

const Header = ({ title }) => {

  return (
    <header css={styles.container}>
      <h1 css={styles.heading}>{title}</h1>
      <nav css={styles.menu}>
        <Link activeClassName="activeLink" to="/">O mně</Link>
        <Link activeClassName="activeLink" to="/work">Moje práce</Link>
        <Link activeClassName="activeLink" to="/bio">Bio</Link>
        <Link activeClassName="activeLink" to="/contact">Kontakt</Link>
      </nav>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.node.isRequired
}

Header.defaultProps = {
  title: ``
}

export default Header

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
  	margin-left: auto;
  	& a {
  	  ${linkStyleBase}
  	  :before { width: 0 }
  	  :hover:before { width: 100%}
  	}
  	.activeLink {
  	  ${linkStyleBase};
  	  //text-shadow: 0 0 .65px #eaeaec, 0 0 .65px #eaeaec;
  	  -webkit-text-stroke: .9px #eaeaec;
  	}
  	& ul {
      display: flex;
      width: 400px;
      justify-content: space-between;
  	  list-style-type: none;
  	  height: 100%;
  	  margin: 0;
  	  > li {
  	    display: inline;
  	    margin: 0;
  	  }
  	}
  `
}

const Header = ({ title }) => {

  return (
    <header css={styles.container}>
      <h1 css={styles.heading}>{title}</h1>
      <nav css={styles.menu}>
        <ul>
          <li>
            <Link activeClassName="activeLink" to="/">O mně</Link>
          </li>
          <li>
            <Link activeClassName="activeLink" to="/work">Moje práce</Link>
          </li>
          <li>
            <Link activeClassName="activeLink" to="/bio">Bio</Link>
          </li>
          <li>
            <Link activeClassName="activeLink" to="/contact">Kontakt</Link>
          </li>
        </ul>
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

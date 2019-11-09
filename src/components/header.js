import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { css } from "@emotion/core"

const linkStyleBase = css`
  padding: 0 2px;
  text-decoration: none;
  font-size: 18px;
  position: relative;
  color: #eaeaec;
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
    position: relative;
    z-index: 10;
    box-shadow: 0 0 20px 15px rgba(0,0,0,.2);
  `,
  heading: css`
  	margin: 0;
  	text-transform: uppercase;
  	display: inline-block;
  	text-decoration: none;
  	color: #eaeaec;
  	:visited { color: #eaeaec }
  	font-weight: bold;
  	font-size: 26px;
  	
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
  	  -webkit-text-stroke: 1px #eaeaec;
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
      <a href="/" css={styles.heading}>{title}</a>
      <nav css={styles.menu}>
        <ul>
          <li>
            <Link activeClassName="activeLink" to="/">Kdo jsem</Link>
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

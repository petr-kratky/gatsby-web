import React from "react"
import { css } from "@emotion/core"


const Paper = ({ children, addCss }) => {
  const styles = {
    paperContainer: css`
      background-color: #ffffff;
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0 0 15px 5px rgba(0,0,0,0.25);
      ${addCss}
    `
  }

  return (
    <div css={styles.paperContainer}>
      {children}
    </div>
  )
}


export default Paper

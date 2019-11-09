import React from "react"
import { css } from "@emotion/core"

import Paper from "./paper"

import { slideInLeft, slideInRight } from "../utils/animations"


const BioSection = ({ picPosition, image, text, index, classes, picSize, flexMargin, alt }) => {
  const animationDelay = (index + 1) / 3.5
  const picSizeLocal = picSize ? picSize : 225
  const flexMarginLocal = flexMargin ? flexMargin : 16

  const baseStyles = {
    paperBase: css`
      transition: box-shadow .5s ease-out;
      width: 100%;
      height: 100%;
      &:hover {
        box-shadow: 0 0 15px 8px rgba(0,0,0,0.45);
  	  }
    `,
    bioWrapperBase: css`
      width: calc(50% - ${flexMarginLocal * 2}px);
      min-width: min-content;
      flex-grow: 1;
      transition: box-shadow .5s ease-out, transform .5s ease-out;
      &:hover #profilePicWrapper {
        box-shadow: 0 0 15px 8px rgba(0,0,0,0.45);
      }
      &:hover #profilePic {
        transform: scale(1.05) translateX(5px);
  	  }
    `,
    bioContainer: css`
      position: relative;
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      height: 100%;
      min-width: 450px;
    `,
    bioTextBase: css`
      font-size: 18px;
      font-weight: 500;
      margin: 0;
      height: 100%;
      width: 100%;
    `,
    profilePicWrapperBase: css`
      display: inline-block;
      overflow: hidden;
      border-radius: 50%;
      width: ${picSizeLocal}px;
      height: ${picSizeLocal}px;
      z-index: 2;
      position: absolute;
      top: calc(50% - ${picSizeLocal / 2}px);
      box-shadow: 0 0 15px 5px rgba(0,0,0,0.25);
      transition: box-shadow .5s ease-out;
    `,
    profilePic: css`
      vertical-align: middle;
      transition: transform .5s ease-out;
      &:hover {
        transform: scale(1.05) translateX(5px);
      }
      ${classes && classes.profilePic ? classes.profilePic : null};
    `
  }

  const leftStyles = {
    bioWrapper: css`
      ${baseStyles.bioWrapperBase};
  	  ${slideInLeft()};
      padding-left: ${picSizeLocal / 2}px;
      animation-delay: ${animationDelay}s;
      ${classes && classes.bioWrapper ? classes.bioWrapper : null};
    `,
    paper: css`
      ${baseStyles.paperBase};
  	  ${slideInLeft()};
  	  animation-delay: ${animationDelay + 0.05}s;
      ${classes && classes.paper ? classes.paper : null};
    `,
    bioText: css`
      ${baseStyles.bioTextBase};
      text-align: left;
      padding: 16px 16px 16px ${picSizeLocal / 2 + 10}px;
      ${classes && classes.bioText ? classes.bioText : null};
    `,
    profilePicWrapper: css`
      ${baseStyles.profilePicWrapperBase};
      left: calc(-${picSizeLocal / 2}px);
      ${classes && classes.profilePicWrapper ? classes.profilePicWrapper : null};
    `
  }

  const rightStyles = {
    bioWrapper: css`
      ${baseStyles.bioWrapperBase};
      ${slideInRight()};
      padding-right: ${picSizeLocal / 2}px;
      animation-delay: ${animationDelay}s;
      ${classes && classes.bioWrapper ? classes.bioWrapper : null};
    `,
    paper: css`
      ${baseStyles.paperBase};
  	  ${slideInRight()};
  	  animation-delay: ${animationDelay + 0.05}s;
      ${classes && classes.paper ? classes.paper : null};
    `,
    bioText: css`
      ${baseStyles.bioTextBase};
      text-align: right;
      padding: 16px ${picSizeLocal / 2 + 10}px 16px 16px;
      ${classes && classes.bioText ? classes.bioText : null};
    `,
    profilePicWrapper: css`
      ${baseStyles.profilePicWrapperBase};
      right: calc(-${picSizeLocal / 2}px);
      ${classes && classes.profilePicWrapper ? classes.profilePicWrapper : null};
    `
  }

  const finalStyles = picPosition === "left" ? leftStyles : rightStyles

  return (
    <div css={finalStyles.bioWrapper}>
      <div css={baseStyles.bioContainer}>
        <div css={finalStyles.profilePicWrapper}>
          <img src={image} alt={alt} css={baseStyles.profilePic} />
        </div>
        <Paper addCss={finalStyles.paper}>
          <p css={finalStyles.bioText}>
            {text}
          </p>
        </Paper>
      </div>
    </div>
  )
}


export default BioSection

import { css } from "@emotion/core"

export const slideInTop = (transformStatic) => {
  const id = transformStatic ? transformStatic.replace(/\W/g,'-') : "default"
  const staticProps = transformStatic ? transformStatic : ""

  return css`
    animation: slide-in-top-${id} 1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    @keyframes slide-in-top-${id} {
      0% {
        transform: translateY(-50px) ${staticProps};
        opacity: 0;
      }
      100% {
        transform: translateY(0) ${staticProps};
        opacity: 1;
      }
    }
  `
}

export const padLeft = css`
  animation: pad-left 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  animation-delay: .8s;
  @keyframes pad-left {
    0% {
      transform: translateX(-50px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`

export const padRight = css`
  animation: pad-right 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  animation-delay: .8s;
  @keyframes pad-right {
    0% {
      transform: translateX(50px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`

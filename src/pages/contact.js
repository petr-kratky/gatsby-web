import React from "react"
import { css } from "@emotion/core"

import BioSection from "../components/bioSection"
import Layout from "../components/layout"
import SEO from "../components/seo"

import fbIcon from "../images/fb-logo.svg"
import mailIcon from "../images/mail-icon.png"
import phoneIcon from "../images/phone-icon.png"
import githubIcon from "../images/github-logo.png"
import lnkdnIcon from "../images/linkedin-logo.png"
import instaIcon from "../images/instagram-logo.svg"


const styles = {
  mainContainer: css`
    display: flex;
    flex-wrap: wrap;
    & > * { 
      margin: 0 16px ${225 / 3}px; 
    }}
  `,
  profilePicWrapper: css`
  	background-color: #ffffff;
  `,
  bioText: css`
  	font-weight: 500;
  	font-size: 21px;
  	letter-spacing: 0.3px;
  `
}


const ContactPage = () => {
  const contacts = [
    {
      icon: phoneIcon,
      text: "+420 739 925 323",
      alt: "phone icon"
    },
    {
      icon: mailIcon,
      text: "kratky.pete@gmail.com",
      alt: "email icon"
    },
    {
      icon: githubIcon,
      text: 'github.com/petr-kratky',
      alt: "github logo",
      padded: true
    },
    {
      icon: lnkdnIcon,
      text: 'linkedin.com/in/petr-kratky',
      alt: "linkedin logo",
      padded: true
    },
    {
      icon: fbIcon,
      text: 'facebook.com/petr.kratky.cz',
      alt: "facebook logo"
    },
    {
      icon: instaIcon,
      text: 'instagram.com/petr_kratky_cz',
      alt: "instagram logo"
    }

  ]


  return (
    <Layout heading="Kontakt">
      <SEO title="Kontakt" />
      <div css={styles.mainContainer}>
        {contacts.map(({ icon, text, alt, padded }, index) =>
          <BioSection
            key={index}
            index={index}
            alt={alt}
            image={icon}
            picSize={115}
            text={text}
            picPosition={(index + 1) % 2 ? "left" : "right"}
            classes={{
              profilePic: css`
              	${padded ? null : "transform: scale(1.15)"};
              	${padded ? "&:hover { transform: scale(1.125)" : "&:hover { transform: scale(1.25)"};
              `,
              bioWrapper: css`
                @media (max-width: 1350px) {
                  flex-grow: 0;
                  ${(index + 1) % 2 ? null : "margin-left: auto"};
                }
              `,
              profilePicWrapper: styles.profilePicWrapper,
              bioText: styles.bioText
            }}
          />
        )}
      </div>
    </Layout>
  )
}
export default ContactPage

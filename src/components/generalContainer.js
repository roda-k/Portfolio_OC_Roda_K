import React from "react";
import { styled } from "@mui/material/styles";
import kasa from '../assets/LOGO_KASA.png'
import grimoire from '../assets/MON_GRIMOIRE_ICON.png'
import debug from '../assets/DEBUG_ICON.png'
import { ReactComponent as CssIcon } from '../assets/CSS3_ICON.svg'
import TextBox from "./textBox";
import WorkCard from "./workCard";


const PREFIX = 'blurredContainerBox'

const classes = {
  container: `${PREFIX}-container`,
  titlePlacement: `${PREFIX}-titlePlacement`,
  worksContainer: `${PREFIX}-worksContainer`,
  svgContainer: `${PREFIX}-svgContainer`,
  svgStyling: `${PREFIX}-svgStyling`,
  hidden: `${PREFIX}-hidden`,
  logoWrapperFilterCss: `${PREFIX}-logoWrapperFilterCss`,
}

const BlurredContainerBox = styled('div')((
  {
    theme
  }
) => {
  return {
    [`& .${classes.container}`]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'absolute',
      left: '10%',
      top: '64px',
      width: '80vw',
      height: 'calc(100vh - 64px)',
      zIndex: '10',
    },
    [`& .${classes.titlePlacement}`]: {
      display: 'flex',
      justifyContent: 'flex-start',
    },
    [`& .${classes.worksContainer}`]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      width: '100%',
      marginTop: '4rem',
    },
    [`& .${classes.svgContainer}`]: {
      position: 'relative',
      display: 'flex',
      width: '70px',
      height: '70px',
      transform: 'skew(-5deg, 0deg)',
      marginBottom: '2rem',
      marginTop: '2rem',
    },
    [`& .${classes.logoWrapperFilterCss}`]: {
      position: 'absolute',
      width: '90%',
      height: '100%',
      backgroundImage: `url(${CssIcon})`,
      zIndex: 12,
    },
  }
})

function BlurredContainer() {

  const nonVisibleElements = document.querySelectorAll('.hidden')
  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      } else {
        entry.target.classList.remove('show')
      }
      // use the else to make animations repeatable or not

    })
  })

  nonVisibleElements.forEach((element) => animationObserver.observe(element))

  return (
    <BlurredContainerBox>
      <div className={classes.container}>
        <TextBox
          title={"Bonjour,"}
          firstLine={"je suis Kévin Roda"}
          secondLine={"et je vous présente ici mon parcours de Développeur Web"}
        />
        <TextBox
          title={"Présentation"}
          firstLine={"Développeur récemment passioné du web,"}
          secondLine={"j'ai suivi une formation en alternance pour en faire mon métier. Grâce à celle-ci et à mon expérience en entreprise, je conçois désormais des sites web"}
        />
        <div className={`${classes.titlePlacement} hidden`}>
          <TextBox
            title={"Mes projets:"}
          />
        </div>
        <div id="myprojects" className={classes.worksContainer}>
          <WorkCard
            title={'KASA'}
            logo={kasa}
            description={'Création d\'une application de location immobilière avec React'}
            projectUrl={'https://github.com/roda-k/KasaProject'}
          />
          <WorkCard
            title={'MON VIEUX GRIMOIRE'}
            logo={grimoire}
            description={'Développement du back-end d\'un site de notation de livres'}
            projectUrl={'https://github.com/roda-k/MonVieuxGrimoire'}
          />
          <WorkCard
            title={'DEBUG'}
            logo={debug}
            description={'Débugger et optimiser un site de photographe'}
            projectUrl={'https://github.com/roda-k/Nindacarducci'}
          />
        </div>
        <div id="skills" className={`${classes.titlePlacement} hidden`}>
          <TextBox
            title={"Mes compétences:"}
          />
        </div>
        <div className="logo-container hidden">
          <div className={`${classes.svgContainer} hidden`}>
            <div className="logo-wrapper-filter-css"></div>
            <div className="logo-wrapper-css"></div>
          </div>
          <div className={`${classes.svgContainer} hidden`}>
            <div className="logo-wrapper-filter-html"></div>
            <div className="logo-wrapper-html"></div>
          </div>
          <div className={`${classes.svgContainer} hidden`}>
            <div className="logo-wrapper-filter-js"></div>
            <div className="logo-wrapper-js"></div>
          </div>
          <div className={`${classes.svgContainer} hidden`}>
            <div className="logo-wrapper-filter-react"></div>
            <div className="logo-wrapper-react"></div>
          </div>
          <div className={`${classes.svgContainer} hidden`}>
            <div className="logo-wrapper-filter-material"></div>
            <div className="logo-wrapper-material"></div>
          </div>
          <div className={`${classes.svgContainer} hidden`}>
            <div className="logo-wrapper-filter-nodejs"></div>
            <div className="logo-wrapper-nodejs"></div>
          </div>
          <div className={`${classes.svgContainer} hidden`}>
            <div className="logo-wrapper-filter-mongodb"></div>
            <div className="logo-wrapper-mongodb"></div>
          </div>
        </div>
      </div>
    </BlurredContainerBox>
  )

}

export default BlurredContainer
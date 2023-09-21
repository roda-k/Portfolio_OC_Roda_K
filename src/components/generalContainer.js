import React from "react";
import { styled } from "@mui/material/styles";
import kasa from '../assets/LOGO_KASA.png'
import { ReactComponent as CssIcon } from '../assets/CSS3_ICON.svg'
import { ReactComponent as HtmlIcon } from '../assets/HTML5_ICON.svg'
import { ReactComponent as GithubIcon } from '../assets/GITHUB_ICON.svg'
import { ReactComponent as JsIcon } from '../assets/JS_ICON.svg'
import { ReactComponent as MaterialIcon } from '../assets/MATERIAL_ICON.svg'
import { ReactComponent as MongodbIcon } from '../assets/MONGODB_ICON.svg'
import { ReactComponent as NodejsIcon } from '../assets/NODEJS_ICON.svg'
import { ReactComponent as ReactIcon } from '../assets/REACT_ICON.svg'
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
      width: '100%',
      transform: 'skew(-15deg, -5deg)'
    },
    [`& .${classes.worksContainer}`]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      width: '100%',
      marginTop: '4rem',
    },
    // [`& .${classes.svgContainer}`]: {
    //   display: 'flex',
    //   justifyContent: 'space-around',
    //   flexWrap: 'wrap',
    //   width: '100%',
    //   marginTop: '4rem',
    //   background: 'rgba(0, 0, 0, 0.5)',
    //   backdropFilter: 'blur(10px)',
    //   transform: 'skew(5deg, 0deg)',
    //   padding: '20px',
    // },
    [`& .${classes.svgStyling}`]: {
      width: '60px',
      height: '60px',
      transform: 'skew(-5deg, 0deg)',
      marginBottom: '2rem',
      marginTop: '2rem',
    },
  }
})

function BlurredContainer() {

  const nonVisibleElements = document.querySelectorAll('.hidden')
  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      } 
      // use this to make animations repeatable
      // else {
      //   entry.target.classList.remove('show')
      // }
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
        <div className={classes.worksContainer}>
          <WorkCard
            title={'KASA'}
            logo={kasa}
            description={'Création d\'une application de location immobilière avec React'}
            projectUrl={'https://github.com/roda-k/KasaProject'}
          />
          <WorkCard
            title={'KASA'}
            logo={kasa}
            description={'Création d\'une application de location immobilière avec React'}
            projectUrl={'https://github.com/roda-k/KasaProject'}
          />
          <WorkCard
            title={'KASA'}
            logo={kasa}
            description={'Création d\'une application de location immobilière avec React'}
            projectUrl={'https://github.com/roda-k/KasaProject'}
          />
        </div>
        <div className={`${classes.titlePlacement} hidden`}>
          <TextBox
            title={"Mes compétences:"}
          />
        </div>
        <div className="logo-container hidden">
          <CssIcon className={`${classes.svgStyling} hidden`}/>
          <HtmlIcon className={`${classes.svgStyling} hidden`}/>
          <JsIcon className={`${classes.svgStyling} hidden`}/>
          <ReactIcon className={`${classes.svgStyling} hidden`}/>
          <MaterialIcon className={`${classes.svgStyling} hidden`}/>
          <NodejsIcon className={`${classes.svgStyling} hidden`}/>
          <MongodbIcon className={`${classes.svgStyling} hidden`}/>
          <GithubIcon className={`${classes.svgStyling} hidden`}/>
        </div>
      </div>
    </BlurredContainerBox>
  )

}

export default BlurredContainer
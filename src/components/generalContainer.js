import React from "react";
import { styled } from "@mui/material/styles";
import kasa from '../assets/LOGO_KASA.png'
import TextBox from "./textBox";
import WorkCard from "./workCard";


const PREFIX = 'blurredContainerBox'

const classes = {
  container: `${PREFIX}-container`,
  titlePlacement: `${PREFIX}-titlePlacement`,
  worksContainer: `${PREFIX}-worksContainer`,
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
  }
})

function BlurredContainer() {

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
        <div className={classes.titlePlacement}>
          <TextBox
            title={"Mes projets:"}
          />
        </div>
        <div className={classes.worksContainer}>
          <WorkCard 
            title={'KASA'}
            logo={kasa}
            description={'Création d\'une application de location immobilière avec React' }
            projectUrl={'https://github.com/roda-k/KasaProject'}
          />
           <WorkCard 
            title={'KASA'}
            logo={kasa}
            description={'Création d\'une application de location immobilière avec React' }
            projectUrl={'https://github.com/roda-k/KasaProject'}
          />
           <WorkCard 
            title={'KASA'}
            logo={kasa}
            description={'Création d\'une application de location immobilière avec React' }
            projectUrl={'https://github.com/roda-k/KasaProject'}
          />
        </div>
      </div>
    </BlurredContainerBox>
  )

}

export default BlurredContainer
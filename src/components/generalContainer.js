import React from "react";
import { styled } from "@mui/material/styles";
import TextBox from "./textBox";

const PREFIX = 'blurredContainerBox'

const classes = {
  container: `${PREFIX}-container`,
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
      </div>
    </BlurredContainerBox>
  )

}

export default BlurredContainer
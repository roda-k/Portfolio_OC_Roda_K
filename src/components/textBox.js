import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const PREFIX = 'TextBox'

const classes = {
  boxDefaultStyle: `${PREFIX}-boxDefaultStyle`,
  coloring: `${PREFIX}-coloring`,
  presentationText: `${PREFIX}-presentationText`,
  alignTextContainer: `${PREFIX}-alignTextContainer`,
  unskew: `${PREFIX}-unskew`,
  hidden: `${PREFIX}-hidden`,
}

const TextBoxContainer = styled('div')((
  {
    theme
  }
) => {
  return {
    [`& .${classes.boxDefaultStyle}`]: {
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '250px',
      maxWidth: '450px',
      padding: '20px 15px 15px 25px',
      transform: 'skewX(10deg)',
      background: 'rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(10px)',
      zIndex: '10',
      marginTop: '2rem',
    },
    [`& .${classes.coloring}`]: {
      color: '#FFFFFF'
    },
    [`& .${classes.unskew}`]: {
      transform: 'skewX(-10deg)',
    },
    [`& .${classes.alignTextContainer}`]: {
      display: 'flex',
      justifyContent: 'center',
    },
    [`& .${classes.presentationText}`]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: 'fit-content',
      margin: '10px 0 10px 0',
      transform: 'skewX(-10deg)'
    },
  }
})

function TextBox({ title, firstLine = "", secondLine = "" }) {

  return (
    <TextBoxContainer style={{ display: 'flex', justifyContent: 'center' }}>
      <Box className={`${classes.boxDefaultStyle} hidden`}>
        <Typography variant="h3" color="primary" className={classes.unskew}>{title}</Typography>
        <div className={classes.alignTextContainer}>
          <div className={classes.presentationText}>
            <Typography variant="h5" className={classes.coloring}>{firstLine}</Typography>
            <Typography variant="body1" className={classes.coloring}>{secondLine}</Typography>
          </div>
        </div>
      </Box>
    </TextBoxContainer>
  )

}

export default TextBox
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Backdrop, IconButton, Typography } from "@mui/material";
import { GitHub, Info } from '@mui/icons-material';
import mockData from "../mockdata";

const PREFIX = 'WorkCard'

const classes = {
  workCardStyle: `${PREFIX}-workCardStyle`,
  coloring: `${PREFIX}-coloring`,
  unskew: `${PREFIX}-unskew`,
  iconButtonContainer: `${PREFIX}-iconButtonContainer`,
  hidden: `${PREFIX}-hidden`,
  backdropContainer: `${PREFIX}-backdropContainer`,
  backdropLogoStyle: `${PREFIX}-backdropLogoStyle`,
  backdropTextContainer: `${PREFIX}-backdropTextContainer`,
  backdropTextStyle: `${PREFIX}-backdropTextStyle`,
  imgWidth: `${PREFIX}-imgWidth`,
}

const WorkCardContainer = styled('div')((
  {
    theme
  }
) => {
  return {
    [`& .${classes.workCardStyle}`]: {
      width: '100%',
      maxWidth: '390px',
      padding: '20px',
      minHeight: '150px',
      background: 'rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(10px)',
    },
    [`& .${classes.coloring}`]: {
      color: '#FFFFFF'
    },
    [`& .${classes.unskew}`]: {
      transform: 'skew(-6deg, 0deg)',
    },
    [`& .${classes.iconButtonContainer}`]: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-around',
      transform: 'skew(-6deg, 0deg)',
      marginTop: '10px'
    },
    [`& .${classes.imgWidth}`]: {
      maxWidth: '100%',
    },
  }
})

const BackdropRoot = styled('div')((
  {
    theme
  }
) => {
  return {
    [`& .${classes.backdropContainer}`]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '80%',
      padding: '20px',
      background: '#323232',
      zIndex: '20',
    },
    [`& .${classes.backdropLogoStyle}`]: {
      marginBottom: '2rem',
    },
    [`& .${classes.backdropTextStyle}`]: {
      display: 'flex',
      justifyContent: 'center',
      color: 'rgba(255, 255, 255, 0.7)',
      marginBottom: '2rem',
    },
    [`& .${classes.backdropTextContainer}`]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxHeight: '400px',
      width: '100%',
      marginTop: '1rem',
      overflowY: 'auto'
    },
  }
})

function WorkCard({ title, logo, description, projectUrl }) {

  const [openBackdropInfo, setOpenBackdropInfo] = useState(false)

  return (
    <>
      <BackdropRoot sx={{ zIndex: '20' }}>
        <Backdrop
          open={openBackdropInfo}
          onClick={() => {
            setOpenBackdropInfo(false)
          }}
        >
          <div className={classes.backdropContainer}>
            <img src={logo} className={classes.backdropLogoStyle} alt="work-logo" />
            <div className={classes.backdropTextContainer}>
              <Typography variant="body1" className={classes.backdropTextStyle}>
                {mockData[title].description}
              </Typography>
              <Typography variant="body1" className={classes.backdropTextStyle}>
                {mockData[title].problems}
              </Typography>
              <Typography variant="body1" className={classes.backdropTextStyle}>
                {mockData[title].learned}
              </Typography>
            </div>
          </div>
        </Backdrop>
      </BackdropRoot>
      <WorkCardContainer style={{ display: 'flex', justifyContent: 'center', width: '100%', transform: 'skew(6deg, 0deg)', marginBottom: '4rem' }}>
        <div className={`${classes.workCardStyle} hidden`}>
          <img src={logo} className={`${classes.unskew} ${classes.imgWidth}`} alt="kasa-logo" />
          <Typography variant="h6" color="primary" className={classes.unskew}>{title}</Typography>
          <Typography variant="body1" className={`${classes.coloring} ${classes.unskew}`}>{description}</Typography>
          <div className={classes.iconButtonContainer}>
            <IconButton
              color="primary"
              onClick={() => {
                window.open(projectUrl, '_blank')
              }}>
              <GitHub />
            </IconButton>
            <IconButton
              color="primary"
              onClick={() => {
                setOpenBackdropInfo(true)
              }}>
              <Info />
            </IconButton>
          </div>
        </div>
      </WorkCardContainer>
    </>
  )

}

export default WorkCard
import React from "react";
import { styled } from "@mui/material/styles";
import { IconButton, Typography } from "@mui/material";
import { GitHub, Info } from '@mui/icons-material';

const PREFIX = 'WorkCard'

const classes = {
  workCardStyle: `${PREFIX}-workCardStyle`,
  coloring: `${PREFIX}-coloring`,
  unskew: `${PREFIX}-unskew`,
  iconButtonContainer: `${PREFIX}-iconButtonContainer`,
  hidden: `${PREFIX}-hidden`,
}

const WorkCardContainer = styled('div')((
  {
    theme
  }
) => {
  return {
    [`& .${classes.workCardStyle}`]: {
      width: '100%',
      padding: '20px',
      minHeight: '150px',
      background: 'rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(10px)',
    },
    [`& .${classes.coloring}`]: {
      color: '#FFFFFF'
    },
    [`& .${classes.unskew}`]: {
      transform: 'skew(-15deg, -5deg)',
    },
    [`& .${classes.iconButtonContainer}`]: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-around',
      transform: 'skew(-15deg, -5deg)',
      marginTop: '10px'
    },
  }
})

function WorkCard({ title, logo, description, projectUrl }) {

  return (
    <WorkCardContainer style={{ width: '45%', transform: 'skew(15deg, 5deg)', padding: '15px' }}>
      <div className={`${classes.workCardStyle} hidden`}>
        <img src={logo} className={classes.unskew} alt="kasa-logo" />
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

            }}>
            <Info />
          </IconButton>
        </div>
      </div>
    </WorkCardContainer>
  )

}

export default WorkCard
import React, { useEffect, useRef, useState } from 'react';
import { styled } from "@mui/material/styles";
import * as THREE from 'three'
import NET from 'vanta/src/vanta.net'
import BlurredContainer from '../components/generalContainer';

const PREFIX = 'Home'

const classes = {
  home: `${PREFIX}-home`,
  background: `${PREFIX}-background`,
}

const HomeContainer = styled('div')((
  {
    theme
  }
) => {
  return {
    [`& .${classes.home}`]: {
      // width: '100vw',
      height: 'calc(100vh - 64px)',
    },
    [`& .${classes.background}`]: {
      position: 'fixed',
      display: 'block',
      width: '100%',
      // height: 'calc(100vh - 64px)',
      height: '100vh',
      zIndex: '1',
    },
  }
})

function Home() {
  const [vantaEffect, setVantaEffect] = useState()
  const backgroundRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: backgroundRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x452278,
        backgroundColor: 0x23153C,
        vertexColors: true,
        points: 12.00,
        maxDistance: 23.00,
        spacing: 20.00,
      }))
    }
    return () => {
      if (vantaEffect)
        vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <HomeContainer>
      <div className={classes.home}>
        <div className={classes.background} ref={backgroundRef}>
        </div>
        <BlurredContainer />
      </div>
    </HomeContainer>
  );
}

export default Home;
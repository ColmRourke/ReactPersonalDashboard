import React, {useState} from 'react'
import WelcomeMessage from '../../Components/WelcomeComponent/WelcomeMessage';
import LoginForm from '../../Components/WelcomeComponent/LoginForm'

//react spring for animation
import {useSpring, animated} from 'react-spring'

function WelcomePage() {
    const fadeIn = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: {duration: 1000},
        delay:2700
      })
      const fadeOut = useSpring({
        opacity: 0,
        from: { opacity: 1 },
        config: {duration: 700},
        delay: 2000
      })

      return( 
          <div>
        <animated.div style={fadeOut}><WelcomeMessage /></animated.div>
        <animated.h1 style={fadeIn}><LoginForm /> </animated.h1>
        </div>
      )
}

export default WelcomePage;
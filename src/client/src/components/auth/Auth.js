import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { auth } from '../../redux'

const Auth = (SpecificComponent, option, adminRoute = null) => {
  const history = useHistory()
  //option
  //null    =>  Public
  //true    =>  Logged in user
  //false   =>  Logged out user
  function AuthenticationCheck(props) {
    const dispatch = useDispatch()

    useEffect(() => {
      ;(async () => {
        const response = await dispatch(auth())
        // Logged out
        console.log('auth response.result.isAuth', response.result.isAuth)
        if (!response.result.isAuth) {
          if (option) {
            history.push('/login')
          }
        } else {
          // Logged in
          if (adminRoute && !response.isAdmin) {
          } else {
            if (option === false) props.history.push('/')
          }
        }
      })()
    }, [])

    return <SpecificComponent {...props} />
  }

  return AuthenticationCheck
}

export default Auth

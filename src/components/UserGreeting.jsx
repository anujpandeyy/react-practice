import React from 'react'
import PropTypes from 'prop-types'
function UserGreeting(props){
    const welcomeMessage = <h2 className='welcome-h2'>Welcome {props.username}</h2>
    const loginPrompt = <h2 className='login-h2'>Please Login</h2>

    return(props.isLoggedIn ? welcomeMessage : loginPrompt)

}

UserGreeting.prototype = {
    isLoggedIn : PropTypes.bool,
    username : PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn : false,
    username : "Guest"
}


export default UserGreeting;
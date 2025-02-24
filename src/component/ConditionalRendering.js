import {useState} from 'react'

const ConditionalRendering = () => {
    const [isLoggedIn, setLoggedInState] = useState(false)

    let message = ''
    if (isLoggedIn) {
        message = 'Welcome User'
    } else {
        message = 'Please Login'
    }

    function handleLoggedIn() {
        setLoggedInState(!isLoggedIn)
    }

    return (
        <div>
            <h1>{message}</h1>
            <button onClick={handleLoggedIn}>
                {isLoggedIn ? 'Logout' : 'Login'}
            </button>
        </div>
    )
}

export default ConditionalRendering
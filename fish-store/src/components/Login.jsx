import React from 'react'

const Login = (props) => {
    return (
        <nav className='login'>
            <h2>Inventory Login</h2>
            <p>Sign in to manage your store's inventory.</p>
            <button
                className="github"
                onClick={() => { props.authenticate('Github') }}
            >
                Log In with Github
            </button>
        </nav>
    )
}

export default Login

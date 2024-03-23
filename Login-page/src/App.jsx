import React from 'react'
import "./App.css";

const App = () => {
  return (
    <div className='App'>
      <div className="logo-box">
        <img src="/logo.png
        " alt="logo" className='logo'/>
        <h2>Sign In to Twitter</h2>
        <button>
          <img src="/google.png" alt="google" />
          Sign in with Google
        </button>
        <button>
          <img src="/apple.png" alt="apple" />
          Sign in with Apple
        </button>
        <hr />
        <span>Or</span>
        <form >
          <input type="text" placeholder="Phone email or username" />
          <button>Next</button>
        </form>
        <button>Forget Password</button>
        <p>Don't have an Account <a>Sign Up</a></p>
      </div>
    </div>
  )
}
export default App
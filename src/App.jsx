import "./App.css"
import logo from "./assets/logo.png"
import { IoChevronBack } from "react-icons/io5"

function App() {
  return (
    <>
      <div className='wrapper'>
        <div className='left-side'>
          <div className='signin-wrapper'>
            <div className='back-section'>
              <IoChevronBack />
              <p className='back-button'>Back</p>
            </div>

            <div className='login-form'>
              <form action=''>
                <div className='header'>
                  <h1 className='header-banner'>SignIn</h1>
                  <p className='info'>
                    Enter your email and password to sign in!
                  </p>
                </div>

                <div className='separator'>
                  <span className='line'></span>
                  <span className='or'>or</span>
                  <span className='line'></span>
                </div>

                <div className='credentials'>
                  <label htmlFor='email'>
                    Email <span className='required'>*</span>
                  </label>
                  <input
                    type='email'
                    placeholder='mail@simmmple'
                    id='email'
                    className='email-input'
                  />
                  <label htmlFor='password'>
                    Password <span className='required'>*</span>
                  </label>
                  <input
                    type='password'
                    id='password'
                    placeholder='Min, 8 characters'
                    className='password-input'
                  />
                </div>

                <div className='login-options'>
                  <label htmlFor='keep-logged-in'>
                    <input
                      type='checkbox'
                      className='keep-logged-in'
                      id='keep-logged-in'
                    />
                    Keep me logged in
                  </label>
                  <p className='forget-password'>Forget Password?</p>
                </div>

                <div>
                  <button type='submit' className='signin-button'>
                    Sign In
                  </button>
                </div>

                <div className='register-link'>
                  Not yet registered?{" "}
                  <span className='create-account'>Create an account</span>
                </div>
              </form>
            </div>

            <div className='footer-left'>
              © 2023 Spark Drive. All Rights Reserved.
            </div>
          </div>
        </div>

        <div className='right-side'>
          <div className='header-right'>
            <img src={logo} className='logo' alt='' />
            <button className='spark-button'>Spark</button>
          </div>
          <div className='middle-content'>
            <p className='middle-content-heading'>
              Learn more about Air Drive on
            </p>
            <h3>Spark.pl</h3>
          </div>
          <div className='footer-right'>
            <div>Licence</div>
            <div>Terms of use</div>
            <div>Blog</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

import React from 'react'
import '../styles/Home.css'
import ReactDOM from 'react-dom'
import Login from './Login'

class Home extends React.Component {

  handleClick=(e)=>{
    ReactDOM.render(<Login />, document.getElementById('app'))
  }

  render(){
    return(
      <div>
      <header className='header'>
            <div className="header__logo-box">
            <img src="img/logo-white.png" alt="Logo" className="header__logo"/>
            </div>
            <div className="header__text-box">
              <h1 className="heading-primary">
                <span className="heading-primary--main">Friendly</span>
                <span className="heading-primary--sub">Where life happens</span>
              </h1>
              <a href="#" onClick={this.handleClick}className="btn btn--white btn--animated">Discover Friendship</a>
            </div>
            </header>
        </div>
    )
  }
}

export default Home

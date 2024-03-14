import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import "./home.css"

const Home = () => {
  return (
    <div className='home-div'>
        <header>
        <p id="muni">Munyia</p>
        <p id="web">Web Developer</p>
            <nav id="navi">
                <Link to={'./'} >About</Link>
                <Link to={'./skills'}>Skills</Link>
                <Link to={'./work'}>Work</Link>
                <Link to={'./blog'}>Blog</Link>
            </nav>
            <div id="h-img"> 
                <a href="https://github.com/Munyia">
               <img src="res/github.png" alt=""/>
                </a>
                <a href="mailto:ndidiranjo@gmail.com?subject=Web design&body=Web design">
               <img src="res/gmail.png" alt=""/>
               </a>
                <a href="https://www.linkedin.com/YourPageURL">
               <img src="res/linkedin.png" alt=""/>
               </a>
               <a href="https://api.whatsapp.com/send?phone=2348174965032&text=Hello, how may i help you?">
               <img src="res/whatsapp.png" alt=""/>
               </a>
                <a href="https://www.twitter.com/YourPageURL">
               <img src="res/twitter.png" alt=""/>
                </a>
                <a href="https://www.facebook.com/YourPageURL">
                <img src="res/facebook.png" alt=""/>
               </a>
           </div>
    </header>
    <div className='home-inner'>
        <Routes>
            <Route path='/' element={<p>About</p>}/>
            <Route path='/skills' element={<p>Skills</p>}/>
            <Route path='/works' element={<p>Works</p>}/>
            <Route path='/blog' element={<p>Blog</p>}/>
        </Routes>
    </div>
    </div>
  )
}

export default Home
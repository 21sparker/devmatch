import Head from 'next/head';
import React from 'react';
import TextInput from '../components/TextInput';
import Navbar from '../components/Navbar/Navbar';
import Button from '../components/Button';

export default function Home() {
  return (
    <div className="h-screen">
      <Head>
        <title>DevMatch</title>
      </Head>
      <Navbar />
      <div id="landing-page-container"
        className="flex justify-evenly h-full items-baseline">
        <div id="content"
          className="flex flex-col justify-evenly w-2/4 h-2/3">
          <h1 className="text-primary text-5xl">DevMatch</h1>
          <p className="text-xl w-3/4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quod?</p>
          <img
            style={{ width: '300px' }}
            src="https://comps.gograph.com/web-developer-design_gg79291551.jpg" />
        </div>
        <div id="forms"
          className="flex flex-col justify-evenly w-1/4 h-2/3">
          <div id="sign-in"
            className="flex flex-col justify-evenly h-1/3">
            <h2 className="text-lg font-semibold">Sign In</h2>
            <TextInput placeholder='Username' name="username" />
            <TextInput type='password' placeholder='Password' name="password" />
            <Button>Login</Button>
          </div>
          <div id="sign-up"
            className="flex flex-col justify-evenly h-2/4">
            <h2 className="text-lg font-semibold">Sign Up</h2>
            <TextInput placeholder='Username' name="username" />
            <TextInput type='email' placeholder='Email' name="email" />
            <TextInput type='password' placeholder='Password' name="username" />
            <TextInput type='password' placeholder='Confirm Password' name="username" />
            <Button>Register</Button>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="1" d="M0,0L60,21.3C120,43,240,85,360,85.3C480,85,600,43,720,48C840,53,960,107,1080,112C1200,117,1320,75,1380,53.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
    </div>
  )
}

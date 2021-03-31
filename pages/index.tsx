import Head from 'next/head';
import React from 'react';
import TextInput from '../components/TextInput';

export default function Home() {
  return (
    <div>
      <Head>
        <title>DevMatch</title>
      </Head>
      <h1 className="text-primary text-xl">LANDING PAGE</h1>
      <TextInput type='text' placeholder='Username' name="username" />
      <TextInput type='text' placeholder='Email' name="username" />
      <TextInput type='password' placeholder='Password' name="username" />
    </div>
  )
}

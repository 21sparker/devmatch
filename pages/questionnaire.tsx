import React from 'react';
import Checkbox from '../components/Checkbox';
import Header from '../components/Header';
import Navbar from '../components/Navbar/Navbar';
import TextInput from '../components/TextInput';
interface questionnaireProps {

}

const questionnaire: React.FC<questionnaireProps> = ({}) => {
    return (
      <>
        <Navbar/>
        <div className="flex justify-center mb-24">
        <form id="questionnaire-container"
          className="flex flex-col mt-16 items-center w-2/4">
          <div id="question"
            className="flex flex-col w-full">
            <Header size="4xl" center>What languages do you use?</Header>
            <div className="grid grid-cols-4 gap-4 mt-8 ml-6">
              <Checkbox label="Javascript" />
              <Checkbox label="Python" />
              <Checkbox label="Java" />
              <Checkbox label="Ruby" />
              <Checkbox label="C#" />
              <Checkbox label="Golang" />
              <Checkbox label="PHP" />
              <Checkbox label="C++" />
            </div>
          </div>
          <div id="question"
            className="flex flex-col mt-24 w-full">
            <Header size="4xl" center>Where do you live?</Header>
            <div className="mt-8">
              <TextInput placeholder="San Francisco, CA" name="location"/>
            </div>
          </div>
          <div id="question"
            className="flex flex-col mt-24 justify-center w-full">
            <Header size="4xl">Describe your experience coding.</Header>
            <div className="mt-8">
              <Checkbox label="I've never programmed before." />
              <Checkbox label="I've built a few small projects." />
              <Checkbox label="I've built a few full stack projects." />
              <Checkbox label="I am a professional in the field." />
            </div>
          </div>
          <div id="question"
            className="flex flex-col mt-24 justify-center w-full">
            <Header size="4xl">What are your programming goals?</Header>
            <div className="mt-8">
              <Checkbox label="I want to get a job as a programmer." />
              <Checkbox label="I want to learn a new langague or technology." />
              <Checkbox label="I want to build something interesting and fun." />
            </div>
          </div>
        </form>
        </div>
      </>
    );
}

export default questionnaire;
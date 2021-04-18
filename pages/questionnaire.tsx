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
        <form id="questionnaire-container"
          className="flex flex-col mt-16">
          <div id="question"
            className="flex w-full">
            <Header size="4xl" center>What languages do you use?</Header>
            <div className="grid grid-cols-4 gap-4 mt-8">
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
            className="flex flex-col mt-24">
            <Header size="4xl" center>Where do you live?</Header>
            <div className="mt-8">
              <TextInput placeholder="San Francisco, CA" name="location"/>
            </div>
          </div>
          <div id="question"
            className="flex flex-col mt-24 justify-center">
            <Header size="4xl" center>Describe your experience as a programmer.</Header>
            <div className="mt-8">
              <Checkbox label="I've never programmed before." />
              <Checkbox label="I've built a few small projects." />
              <Checkbox label="I've built a few full stack projects." />
              <Checkbox label="I am a professional in the field." />
            </div>
          </div>
        </form>
      </>
    );
}

export default questionnaire;
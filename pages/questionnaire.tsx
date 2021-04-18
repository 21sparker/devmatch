import React from 'react';
import Checkbox from '../components/Checkbox';
import Header from '../components/Header';
import Navbar from '../components/Navbar/Navbar';

interface questionnaireProps {

}

const questionnaire: React.FC<questionnaireProps> = ({}) => {
    return (
      <>
        <Navbar/>
        <div id="questionnaire-container"
          className="flex flex-col items-center mt-16">
          <div id="question flex w-full justify-center">
            <Header size="4xl" center>What languages do you use?</Header>
            <div className="grid grid-cols-4 gap-4 mt-8">
              <Checkbox label="Javascript" />
              <Checkbox label="Javascript" />
              <Checkbox label="Javascript" />
              <Checkbox label="Javascript" />
              <Checkbox label="Javascript" />
              <Checkbox label="Javascript" />
              <Checkbox label="Javascript" />
              <Checkbox label="Javascript" />
            </div>
          </div>
        </div>
      </>
    );
}

export default questionnaire;
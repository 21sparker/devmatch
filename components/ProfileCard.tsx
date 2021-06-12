import { faExternalLinkAlt, faSmile, faSmileBeam } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Javascript from './icons/Javascript';
import Python from './icons/Python';

interface ProfileCardProps {

}

const ProfileCard: React.FC<ProfileCardProps> = ({}) => {
    return (
        <div className="w-48 h-64 bg-white border-gray-300 border-2 m-10 rounded-md shadow-xl pt-1">
          <div className="h-2/4 ">
            <img
              className="object-conatin w-full mt-2" 
              src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" />
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex w-full justify-between mt-2">
              <div className="flex flex-col">
                <h1>Robert</h1>
                <h1>Boston, MA</h1>
              </div>
              <div className="flex h-2/4">
                <Javascript size={7} />
                <Python size={7} />
              </div>
            </div>
            <div className="mt-5 w-full">
              <div className="h-10 w-10 bg-primary rounded -ml-px">
                <FontAwesomeIcon icon={faSmile} className="h-full w-full"></FontAwesomeIcon>
              </div>
            </div>
          </div>
        </div>
    );
}

export default ProfileCard;
import React from 'react';

interface ProfileCardProps {

}

const ProfileCard: React.FC<ProfileCardProps> = ({}) => {
    return (
        <div className="w-48 h-64 bg-white border border-gray-300 m-10 rounded-md shadow-xl pt-1">
          <div className="h-2/4 ">
            <img
              className="object-conatin w-full mt-2" 
              src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" />
          </div>
        </div>
    );
}

export default ProfileCard;
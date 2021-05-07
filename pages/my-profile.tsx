import React from 'react';
import Header from '../components/Header';
import Chat from '../components/icons/Chat';
import UserAdd from '../components/icons/UserAdd';
import Navbar from '../components/Navbar/Navbar';
import Javascript from '../components/icons/Javascript';
import Python from '../components/icons/Python';
import Ruby from '../components/icons/Ruby';
import Java from '../components/icons/Java';
import Golang from '../components/icons/Golang';
import CSharp from '../components/icons/CSharp';
import CPlusPlus from '../components/icons/CPlusPlus';
import PHP from '../components/icons/PHP';
interface MyProfileProps {

}

const MyProfile: React.FC<MyProfileProps> = ({}) => {
    return (
        <div>
          <Navbar/>
          <div className="flex">
            <div className="mt-4 ml-24 w-2/4">
              <Header size="6xl">My Profile:</Header>
              <div className="my-10 w-2/4" >
                <img 
                  className="object-contain rounded-md h-52"
                  src="https://images.unsplash.com/photo-1611432579699-484f7990b127?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhlYWRzaG90fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
              </div>
              <div>
                <Header size="4xl">Robert Ludwig</Header>
                <Header size="2xl">Boston, MA</Header>
              </div>
              <div className="flex mt-10 justify-between w-1/6">
                <Chat />
                <UserAdd />
              </div>
            </div>
            <div className="mt-24 w-2/4 mr-34">
              <div>
                <Header size="4xl">Languages I use:</Header>
                <div className="flex mt-4">
                  <Javascript />
                  <Python />
                  <Ruby />
                  <Java />
                  <Golang />
                  <CSharp />
                  <CPlusPlus />
                  <PHP />
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default MyProfile;
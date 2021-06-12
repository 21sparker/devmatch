import { NextPage } from 'next';
import Navbar from '../components/Navbar/Navbar';
import SearchBar from '../components/Search/SearchBar/SearchBar';


const homepage: NextPage = () => {
  return (
    <>
      <Navbar />
      <SearchBar />
    </>
  )
}

export default homepage;
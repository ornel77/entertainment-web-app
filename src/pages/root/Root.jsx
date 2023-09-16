import Navbar from '../../components/navbar/Navbar';
import { Outlet } from 'react-router-dom';

import './Root.scss';
import SearchBar from '../../components/searchbar/SearchBar';
const Root = () => {
  return (
    <section className='root'>
      <Navbar />
      <main className='pages'>
        <SearchBar />
        <Outlet />
      </main>
    </section>
  );
};

export default Root;

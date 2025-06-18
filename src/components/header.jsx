import React from 'react';
import forestSvg from '../../img/forest.svg';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div>
      <div className="flex py-4 gap-1 items-center *:text-verde-300 justify-center md:justify-start">
        <div className="flex items-center bg-verde-900 px-4 py-2 capitalize relative">
          <span className="inline-block size-2 rounded-full neon absolute left-[-4px]"></span>
          segunda
        </div>
        <div className="bg-verde-900 px-4 py-2">25</div>
        <div className="bg-verde-900 px-4 py-2">#</div>
      </div>

      <header className="max-sm:grid max-sm:grid-cols-2 flex flex-col lg:flex-row py-4 gap-8 items-center justify-between ">
        <div>
          <img src={forestSvg} />
        </div>
        <nav>
          <ul className="max-sm:grid max-sm:text-end flex gap-4 text-xl text-white *:hover:underline *:hover:underline-offset-10">
            <li className="">
              <Link to="lista" smooth={true} offset={-60} duration={500}>acomodacoes</Link>
            </li>
            <li>
              <Link to="planos" smooth={true} offset={-80} duration={700}>eventos</Link>
            </li>
            <li>
              <Link to="experiencias" smooth={true} offset={-80} duration={900}>experiencias</Link>
            </li>
            <li>
              <Link to="contato" smooth={true} offset={-80} duration={1200}>contato</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;

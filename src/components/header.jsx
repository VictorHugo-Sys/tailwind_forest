import React from 'react';
import forestSvg from '../../img/forest.svg';

const Header = () => {
  return (
    <div>
      <div className="flex py-4 gap-1 items-center *:text-verde-300 justify-center md:justify-start">
        <div className="flex items-center bg-verde-900 px-4 py-2 capitalize relative">
          <span className="inline-block size-2 rounded-full bg-verde-300 absolute left-[-4px]"></span>
          segunda
        </div>
        <div className="bg-verde-900 px-4 py-2">25</div>
        <div className="bg-verde-900 px-4 py-2">#</div>
      </div>

      <header className="flex py-4 gap-8 items-center justify-between">
        <div>
          <img src={forestSvg} />
        </div>
        <nav>
          <ul className="flex gap-4 text-xl text-white *:hover:underline *:hover:underline-offset-10">
            <li className="">
              <a href="#">acomodações</a>
            </li>
            <li>
              <a href="#">eventos</a>
            </li>
            <li>
              <a href="#">experiencias</a>
            </li>
            <li>
              <a href="#">contato</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;

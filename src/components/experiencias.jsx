import React from 'react';
import img1 from '../../img/canoagem.jpg';
import img2 from '../../img/observacao-noturna.jpg';
import img3 from '../../img/vida-selvagem.jpg';

const Experiencias = () => {
  return (
    <section className="grid grid-cols-[1fr_1fr] max-lg:flex flex-col rounded-2xl gap-8 my-28">
      <div
        className="bg-verde-900 p-4 flex flex-col
      gap-8 rounded-2xl"
      >
        <p className="capitalize text-verde-400 text-2xl">
          experiencias exclusivas
        </p>
        <h2 className="text-white capitalize text-balance max-w-[700px] mx-auto text-5xl">
          escolha sua proxima aventura.
        </h2>
        <ul className="text-white flex flex-col gap-6">
          <li>
            <div className="flex items-center gap-4">
              <span className="h-1 w-8 bg-verde-400"></span>
              <h3 className="text-2xl capitalize font-serif">
                observacao noturna
              </h3>
            </div>
            <p className="text-xl text-gray-300 pl-12 text-balance">
              explore a vida selvagem em seu habitat natural sob as estrelas.
            </p>
          </li>
          <li>
            <div className="flex items-center gap-4">
              <span className="h-1 w-8 bg-verde-400"></span>
              <h3 className="text-2xl capitalize font-serif">vida selvagem</h3>
            </div>
            <p className="text-xl text-gray-300 pl-12 text-balance">
              observe a vida selvagem em seu habitat natural.
            </p>
          </li>
          <li>
            <div className="flex items-center gap-4">
              <span className="h-1 w-8 bg-verde-400"></span>
              <h3 className="text-2xl capitalize font-serif">canoagem</h3>
            </div>
            <p className="text-xl text-gray-300 pl-12 text-balance">
              conquiste novos horizontes com nossa equipe especializada.
            </p>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-[1fr_1fr] grid-rows-2 gap-4">
        <div className="relative hover:scale-105 transition-all">
          <img src={img1} className="size-full object-cover rounded-2xl" />
          <div className='absolute bg-gradient-to-t from-verde-900 inset-0 opacity-0 hover:opacity-100 rounded-2xl'>
            <span className='m-2 text-white text-sm'>
              canoagem
            </span>
          </div>
        </div>
        <div className="relative hover:scale-105 transition-all row-span-2">
          <img src={img2} className="size-full object-cover rounded-2xl" />
          <div className='absolute bg-gradient-to-t from-verde-900 inset-0 opacity-0 hover:opacity-100 rounded-2xl'>
            <span className='m-2 text-white text-sm'>
              observacao noturna
            </span>
          </div>
        </div>
       <div className="relative hover:scale-105 transition-all">
          <img src={img3} className="size-full object-cover rounded-2xl" />
          <div className='absolute bg-gradient-to-t from-verde-900 inset-0 opacity-0 hover:opacity-100 rounded-2xl'>
            <span className='m-2 text-white text-sm'>
              vida selvagem
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiencias;

import React from 'react';
import casa1 from '../../img/casa1.jpg';
import casa2 from '../../img/casa2.jpg';
import casa3 from '../../img/casa3.jpg';

const Lista = () => {
  return (
    <div>
      <section className='bg-[url("../img/padrao.svg")] bg-no-repeat bg-contain bg-top-left my-28 max-lg:flex max-lg:flex-col grid grid-cols-[2fr_3fr] gap-8 min-lg:items-end min-lg:mb-8'>
        <div className="mb-16 min-lg:mb-0">
          <h2 className="capitalize text-5xl text-white mb-8 font-serif">
            refugio natural
          </h2>
          <ul className="space-y-2 text-white">
            <li className="flex items-center gap-4 text-2xl">
              <span className="w-6 h-0.5 neon inline-block"></span>
              Experimente a natureza de perto
            </li>
            <li className="flex items-center gap-4 text-2xl">
              <span className="w-6 h-0.5 neon inline-block"></span>
              Conecte-se com a natureza
            </li>
            <li className="flex items-center gap-4 text-2xl">
              <span className="w-6 h-0.5 neon inline-block"></span>
              Desconecte-se do digital
            </li>
            <li className="flex items-center gap-4 text-2xl">
              <span className="w-6 h-0.5 neon inline-block"></span>
              Observe a vida selvagem
            </li>
            <li className="flex items-center gap-4 text-2xl">
              <span className="w-6 h-0.5 neon inline-block"></span>
              Escolha sua cabine preferida
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-[3fr_2fr] gap-6 **:rounded-2xl">
          <div className="col-span-full relative hover:scale-105 transition-all">
            <img src={casa1} alt="" className="object-cover h-52 w-full" />
            <span className="absolute top-0 right-0 bg-verde-950/50 px-4 py-2 rounded-full text-sm/none text-white m-2">
              cabana
            </span>
          </div>
          <div className="relative hover:scale-105 transition-all">
            <img src={casa2} alt="" className="size-full object-cover" />
            <span className="absolute top-0 right-0 bg-verde-950/50 px-4 py-2 rounded-full text-sm/none text-white m-2">
              suite
            </span>
          </div>
          <div className="relative hover:scale-105 transition-all">
            <img src={casa3} alt="" className="size-full object-cover" />
            <span className="absolute top-0 right-0 bg-verde-950/50 px-4 py-2 rounded-full text-sm/none text-white m-2">
              chalé
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lista;

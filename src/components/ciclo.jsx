import React from 'react';
import svg1 from '../../img/manha.svg';
import svg2 from '../../img/dia.svg';
import svg3 from '../../img/noite.svg';

const Ciclo = () => {
  return (
    <section className='my-40 flex flex-col bg-[url("../img/padrao.svg")] bg-no-repeat bg-contain bg-center'>
      <div className='mx-auto text-center mb-20'>
        <p className="capitalize text-verde-400 text-2xl">
          ciclo natural
        </p>
        <h2 className="text-white capitalize text-balance max-w-[700px] mx-auto text-5xl">
          ritmo da floresta
        </h2>
      </div>
      <div className='grid grid-cols-3 gap-6 max-lg:flex max-lg:flex-col'>
        <div className='bg-verde-900 rounded-2xl text-white p-4 flex flex-col gap-4 lg:hover:translate-y-2 transition-all'>
          <div>
            <img src={svg1} className='neon rounded-full p-2'/>
          </div>
          <h3 className='text-3xl font-serif capitalize'>  
            amanhecer
          </h3>
          <p className='text-xl text-gray-300'>
            Desperte com o canto dos passaros e partice da nossa caminhada ao ar livre.
          </p>
          <span className='text-verde-400 text-2xl font-serif'>
            6h - 8h
          </span>
        </div>
        <div className='bg-verde-900 rounded-2xl text-white p-4 flex flex-col gap-4 lg:translate-y-12 lg:hover:translate-y-10 transition-all'>
          <div>
            <img src={svg2} className='neon rounded-full p-2'/>
          </div>
          <h3 className='text-3xl font-serif capitalize'>
            meio-dia
          </h3>
          <p className='text-xl text-gray-300'>
            Explore nossas trilhas e desfrute de um piquenique gourmet na natureza.
          </p>
          <span className='text-verde-400 text-2xl font-serif'>
            11h - 13h
          </span>
        </div>
        <div className='bg-verde-900 rounded-2xl text-white p-4 flex flex-col gap-4 lg:hover:translate-y-2 transition-all'>
          <div>
            <img src={svg3} className='neon rounded-full p-2'/>
          </div>
          <h3 className='text-3xl font-serif capitalize'>
            anoitecer
          </h3>
          <p className='text-xl text-gray-300'>
            Termine seu dia observando as estrelas.
          </p>
          <span className='text-verde-400 text-2xl font-serif'>
            9h - 11h
          </span>
        </div>
      </div>
    </section>
  );
};

export default Ciclo;

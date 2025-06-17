import React from 'react';
import main from '../../img/floresta.jpg';
import wildbeast from '../../img/parceiros/wildbeast.svg';

const Apresentacao = () => {
  return (
    <div>
      <section className="bg-gradient-to-t from-verde-950 rounded-2xl">
        <div className="relative pt-64 pb-8 px-8 text-white max-sm:pt-24 max-sm:flex max-sm:flex-col max-sm:justify-center">
          <img
            className="absolute z-[-10] inset-0 h-full object-cover rounded-2xl"
            src={main}
          />
          <div className="bg-verde-950 inline-flex items-center rounded-full mb-6 py-1 pr-1 pl-4 gap-8 text-xl max-sm:flex-col max-sm:bg-verde-950/50 max-sm:rounded-2xl max-sm:p-4">
            vagas para dezembro abertas
            <a href="#" className="bg-verde-300 text-black p-2 rounded-full">
              reserve ja
            </a>
          </div>
          <h1 className="text-5xl text-balance max-w-[500px] mb-28 max-sm:text-4xl">
            venha experimentar a vida na floresta
          </h1>
          <div className="flex justify-between items-end max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:text-center">
            <p className="text-2xl max-sm:mb-4">
              melhores lugares para visitar
            </p>
            <div>
              <p className="text-2xl">recomendado por</p>
              <div className="inline-flex">
                <img className="w-28 border-r-3 pr-2" src={wildbeast} />
                <p className="pl-2">revista nacional</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apresentacao;

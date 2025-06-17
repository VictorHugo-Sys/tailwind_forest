import React from 'react';

const Planos = () => {
  return (
    <div className="bg-verde-900 p-4 mt-28 mb-28 rounded-2xl">
      <div className="flex flex-col gap-8 text-center mb-10">
        <p className="capitalize text-verde-400 text-2xl">
          conecte-se com a natureza
        </p>
        <h2 className="text-white capitalize text-balance max-w-[700px] mx-auto text-5xl">
          cada som, cada momento,uma nova descoberta
        </h2>
      </div>
      <div className="overflow-x-auto grid grid-cols-[repeat(3,minmax(300px,1fr))] p-4 gap-4 snap-x snap-mandatory">
        <div className="flex flex-col gap-4 bg-verde-800 p-4 w-[300px] text-white rounded-2xl snap-center mx-auto hover:scale-102 transition-all">
          <h2 className="text-verde-400 text-3xl">aurora boreal</h2>
          <div className="text-3xl font-serif">
            <h3>15</h3>
            <p>abril 2026</p>
          </div>
          <p className="text-gray-100 text-balance">
            Melhor periodo para observação da aurora boreal, o céu estará
            iluminado pelas estrelas
          </p>
          <div className="mt-4">
            <a
              href="#"
              className="bg-verde-400 rounded-full text-black font-bold text-xl/none px-4 py-2"
            >
              reservar 15/04
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-verde-800 p-4 w-[300px] text-white rounded-2xl snap-center mx-auto hover:scale-102 transition-all">
          <h2 className="text-verde-400 text-3xl">aurora boreal</h2>
          <div className="text-3xl font-serif">
            <h3>15</h3>
            <p>abril 2026</p>
          </div>
          <p className="text-gray-100 text-balance">
            Melhor periodo para observação da aurora boreal, o céu estará
            iluminado pelas estrelas
          </p>
          <div className="mt-4">
            <a
              href="#"
              className="bg-verde-400 rounded-full text-black font-bold text-xl/none px-4 py-2"
            >
              reservar 15/04
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-verde-800 p-4 w-[300px] text-white rounded-2xl snap-center mx-auto hover:scale-102 transition-all">
          <h2 className="text-verde-400 text-3xl">aurora boreal</h2>
          <div className="text-3xl font-serif">
            <h3>15</h3>
            <p>abril 2026</p>
          </div>
          <p className="text-gray-100 text-balance">
            Melhor periodo para observação da aurora boreal, o céu estará
            iluminado pelas estrelas
          </p>
          <div className="mt-4">
            <a
              href="#"
              className="bg-verde-400 rounded-full text-black font-bold text-xl/none px-4 py-2"
            >
              reservar 15/04
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planos;

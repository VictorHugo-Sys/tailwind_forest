import React from 'react';
import parc1 from '../../img/parceiros/wildbeast.svg';
import parc2 from '../../img/parceiros/caravan.svg';
import parc3 from '../../img/parceiros/lescone.svg';
import parc4 from '../../img/parceiros/surfbot.svg';
import parc5 from '../../img/parceiros/dogs.svg';

const ParceirosFooter = () => {
  return (
    <section>
      <div
        className="flex
      flex-col gap-8 lg:flex-row *:max-w-40 border-y-4 border-verde-400 p-10 items-center justify-center"
      >
        <div>
          <img src={parc1} />
        </div>
        <div>
          <img src={parc2} />
        </div>
        <div>
          <img src={parc3} />
        </div>
        <div>
          <img src={parc4} />
        </div>
        <div>
          <img src={parc5} />
        </div>
      </div>
      <footer className="text-verde-400 text-xl text-center mt-22 p-8">
        <p>@todos os direitos reservados</p>
      </footer>
    </section>
  );
};

export default ParceirosFooter;

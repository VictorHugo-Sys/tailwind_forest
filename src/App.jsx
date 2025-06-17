import React from 'react';
import Header from './components/header.jsx';
import Apresentacao from './components/apresentacao.jsx';
import Lista from './components/lista.jsx';
import Planos from './components/planos.jsx';
import Experiencias from './components/experiencias.jsx';
import Ciclo from './components/ciclo.jsx';
import Contato from './components/contato.jsx';
import ParceirosFooter from './components/parceirosFooter.jsx';
import { Element } from 'react-scroll';

const App = () => {
  return (
    <main className="h-[100vh] px-8 max-w-[1200px] mx-auto mb-64">
      <Header />
      <Apresentacao />
      <Element name='lista'>
        <Lista />
      </Element>
      <Element name='planos'>
        <Planos />
      </Element>
      <Element name='experiencias'>
        <Experiencias />
      </Element>
      <Ciclo />
      <Element name='contato'>
        <Contato />
      </Element>
      <ParceirosFooter />
    </main>
  );
};

export default App;

import React from 'react'

const Contato = () => {
  return (
    <section className='flex flex-col gap-8 mb-28 lg:grid grid-cols-2'>
      <div className='bg-verde-900 p-4 rounded-2xl'>
        <div className='flex flex-col gap-6 mb-12'>
          <h2 className='text-5xl text-verde-400 capitalize '>nossos contatos</h2>
          <p className='text-gray-300 text-xl text-balance'>
            Tem interesse em passar uma temporada na floreta fora da vida rotineira na cidade? Não espere mais! Entre em contato com um de nossos especialistas para planejar a melhor experiencia possivel para voce e sua familia.
          </p>
        </div>
        <ul>
          <li>
            <h3 className='flex gap-4 items-center text-3xl text-white capitalize'><span className='h-1 w-8 bg-verde-400'></span>base</h3>
            <p className='text-gray-300 pl-12 mb-8'>rua logo-ali, 123 - SP</p>
          </li>
          <li>
            <h3 className='flex gap-4 items-center text-3xl text-white capitalize'><span className='h-1 w-8 bg-verde-400'></span>email</h3>
            <p className='text-gray-300 pl-12 mb-8'>acomodacoespremium@gmail.com</p>
          </li>
          <li>
            <h3 className='flex gap-4 items-center text-3xl text-white capitalize'><span className='h-1 w-8 bg-verde-400'></span>telefone</h3>
            <p className='text-gray-300 pl-12 mb-8'>19 - 99999-9999</p>
          </li>
        </ul>
      </div>
      <div className='bg-verde-900 p-4 rounded-2xl flex flex-col justify-center'>
        <form>
          <div className='flex flex-col gap-3 text-white mb-8'>
            <label htmlFor='nome' className='text-2xl'>nome</label>
            <input type="text" id="nome" className='bg-verde-800 rounded-2xl text-md/none p-3 focus:outline-none focus:border-2 focus:border-verde-400'/>
          </div>
          <div className='grid grid-cols-2 gap-8 mb-8'>
            <div className='flex flex-col gap-3 text-white'>
              <label htmlFor='email' className='text-2xl'>email</label>
              <input type="text" id="email" className='bg-verde-800 rounded-2xl text-md/none p-3 focus:outline-none focus:border-2 focus:border-verde-400'/>
            </div>
            <div className='flex flex-col gap-3 text-white'>
              <label htmlFor='tel' className='text-2xl'>tel</label>
              <input type="text" id="tel" className='bg-verde-800 rounded-2xl text-md/none p-3 focus:outline-none focus:border-2 focus:border-verde-400'/>
            </div>
          </div>
          <div className='flex flex-col gap-3 text-white'>
            <label htmlFor='mensagem' className='text-2xl'>mensagem</label>
            <input type="text" id="mensagem" className='bg-verde-800 rounded-2xl text-md/none px-3 h-32 focus:outline-none focus:border-2 focus:border-verde-400'/>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contato
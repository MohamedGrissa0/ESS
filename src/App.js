import React, { useEffect, useState } from 'react';

export default function App() {
  const [searchQueryRojla, setSearchQueryRojla] = useState('');
  const [searchQueryRojlaaaa, setSearchQueryRojlaaaa] = useState('');

  const rojla = [
    {
      name: "Oussema Baccouche",
      numero: 99149542,
    },
    {
      name: "Fedy mabrouk",
      numero: 95812283
    },
    {
      name: "Ahmed  Baccouche",
      numero: 50428822
    },
    {
      name: "Adem chtioui ",
      numero: 53704660
    }
  ];
  
  const filteredRojla = rojla.filter(item =>
    item.name.toLowerCase().includes(searchQueryRojla.toLowerCase())
  );

  const rojlaaaa = [
    {
      name: "Brigade Rouge - Section Ouardanine",
      numero: 500,
    },
    {
      name: "Montassar daoued",
      numero: 100,
    },
    {
      name: "Ahmed el 7emi",
      numero: 160 ,
    },
    {
      name: "Aziz mansour",
      numero: 100,
    },
    {
      name: "Habib mabrouk",
      numero: 100,
    },
    {
      name: "Aziz boumaiza",
      numero: 50,
    },
    {
      name: "Yahya bechir ben mohamed beli",
      numero: 180,
    },
    
    
  ];


  const [montant,setmontant]=useState(0)
  const [memebre,setmembre]=useState(0)

useEffect(()=>{

  setmembre(rojlaaaa.length)

},[rojlaaaa])


useEffect(() => {
  const totalMontant = rojlaaaa.reduce((acc, item) => acc + item.numero, 0);
  setmontant(totalMontant);
}, [rojlaaaa]);


  const filteredRojlaaaa = rojlaaaa.filter(item =>
    item.name.toLowerCase().includes(searchQueryRojlaaaa.toLowerCase())
  );

  return (
    <div className='flex flex-col py-8 items-center justify-center w-full min-h-screen px-4 sm:px-6 lg:px-8'>
      <h1 className='mt-14 text-4xl font-bold text-center'>حملة مساهمات أحباء النجم الساحلي بالوردانين</h1>
      <div className='flex flex-col md:flex-row mt-12 md:mt-24 items-center justify-center w-full space-y-8 md:space-y-0 md:space-x-16'>
        {/* First section */}
        <div className='text-center'>
          <p className='text-5xl font-bold'>دينار {montant} </p>
          <p className='text-lg mt-4'>حصيلة المساهمات</p>
        </div>
        <div className='flex justify-center'>
          <img src='https://maddeha.github.io/ess-litiges-sahline/static/media/etoile.f7704617ad7f6defa947.png' width={350} alt='' />
        </div>
        <div className='text-center'>
          <p className='text-5xl font-bold'>{memebre}</p>
          <p className='text-lg mt-4'>عدد المساهمين
</p>
        </div>
      </div>
      <div className='mt-12'>
        <p className='text-2xl font-bold text-center mt-8'>للمساهمة يمكنكم الإتّصال بكلّ من</p>
        {/* Search input for rojla */}
     
        {/* List of rojla */}
        <div className='flex flex-col items-center'>
          <ul>
            {filteredRojla.map((item, index) => (
              <li key={index} className='flex items-center justify-between my-4'>
                <div className='flex items-center'>
                  <img src="https://maddeha.github.io/ess-litiges-sahline/static/media/user.4e7acd21ce70331b78dd.png" className='mx-4 rounded-full' width={50} alt='' />
                  <p className='mx-2'>{item.name}</p>
                </div>
                <p>{item.numero}</p>
              </li>
            ))}
          </ul>
        </div>
        {/* Search input for rojlaaaa */}
        <p className='text-2xl font-bold text-center mt-8'>قائمة المساهمين</p>
        <div className='flex flex-col items-center mt-4'>
          <input 
            type='text' 
            placeholder='ابحث هنا...' 
            className='border border-gray-300 rounded-md px-4 py-2 mb-4'
            value={searchQueryRojlaaaa}
            onChange={(e) => setSearchQueryRojlaaaa(e.target.value)}
          />
        </div>
        {/* List of rojlaaaa */}
        <div className='flex flex-col items-center text-center'>
          <ul>
            {filteredRojlaaaa.map((item, index) => (
              <li key={index} className='flex items-center justify-between my-4'>
                <div className='flex items-center'>
                  <img src="https://maddeha.github.io/ess-litiges-sahline/static/media/user.4e7acd21ce70331b78dd.png" className='mx-4 rounded-full' width={50} alt='' />
                  <p className='mx-2'>{item.name}</p>
                </div>
                <p className> {" "+item.numero + "د"}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

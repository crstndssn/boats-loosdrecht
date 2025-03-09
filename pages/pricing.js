"use client"

import Header from '@/components/header';
import '../src/app/globals.css';
import Navigation from '@/components/navigation';

const Menu = () => {
  const menuItems = [
    {
      categoria: "Kaas arrangement voor 10 personen",
      items: [
        { nombre: "Mini kaasfondue", precio: "" },
        { nombre: "Kaasplank", precio: "" },
        { nombre: "Stokbrood", precio: "" }
      ],
    },
    {
      categoria: "BBQ arrangement voor 10 personen",
      items: [
        { nombre: "Kip Saté", precio: "" },
        { nombre: "Satésaus", precio: "" },
        { nombre: "Stokbrood", precio: "" }
      ],
    },
    {
      categoria: "Kaasplankje (te bestellen vanaf 5 personen)",
      precio: ""
    },
    {
      categoria: "Mini fondue (te bestellen vanaf 5 personen)",
      precio: ""
    },
    {
      categoria: "Warme dranken",
      items: [
        { nombre: "Koffie", precio: "" },
        { nombre: "Thee", precio: "" }
      ],
    },
    {
      categoria: "Gebak",
      items: [
        { nombre: "Appeltaart", precio: "" }
      ],
    },
    {
      categoria: "Alcoholische dranken",
      items: [
        { nombre: "Bier", precio: "" },
        { nombre: "Wijn", precio: "" },
        { nombre: "Champagne", precio: "" },
      ],
    }
  ];

  return (
    <>
      <Navigation />

      <Header />
      <div className='container mx-auto py-6 bg-[#FEFCF2] z-10 px-6 border-b-4 border-blue-800 mt-0 md:mt-10'>
        <h1 className='text-2xl font-bold text-blue-800 mb-4'>Menu opties</h1>
        <ul className='space-y-6'>
          {menuItems.map((menu, index) => (
            <li key={index} className='bg-white shadow-md p-4 rounded-lg'>
              <strong className='text-lg text-gray-800'>{menu.categoria}</strong>
              {menu.items && (
                <ul className='mt-2 ml-4 list-none text-gray-600'>
                  {menu.items.map((item, itemIndex) => (
                    <li key={itemIndex} className='flex justify-between'>
                      <span>{item.nombre}</span>
                      <span>{item.precio}</span>
                    </li>
                  ))}
                </ul>
              )}
              {menu.precio && (
                <p className='mt-2 text-sm text-gray-800 font-medium flex justify-between'>
                  <span>{menu.categoria}</span>
                  <span>{menu.precio}</span>
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;

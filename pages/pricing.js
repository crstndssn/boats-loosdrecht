"use client"

import '../src/app/globals.css';
import Navigation from '../src/components/navigation';

const Pricing = () => {
  const menuItems = [
    {
      categoria: "Kaas arrangement voor 12 personen",
      items: [
        { nombre: "Mini kaasfondue", precio: "€25,50 p.p" },
        { nombre: "Kaasplank", precio: "€25,50 p.p" },
        { nombre: "Stokbrood", precio: "€25,50 p.p" }
      ],
    },
    {
      categoria: "BBQ arrangement voor 12 personen",
      items: [
        { nombre: "Kip Saté", precio: "€18,00 p.p" },
        { nombre: "Satésaus", precio: "€18,00 p.p" },
        { nombre: "Stokbrood", precio: "€18,00 p.p" }
      ],
    },
    {
      categoria: "Kaasplankje (te bestellen vanaf 5 personen)",
      precio: "€14,50 p.p"
    },
    {
      categoria: "Mini fondue (te bestellen vanaf 5 personen)",
      precio: "€10,50 p.p"
    },
    {
      categoria: "Warme dranken",
      items: [
        { nombre: "Koffie", precio: "€2,00" },
        { nombre: "Thee", precio: "€2,00" }
      ],
    },
    {
      categoria: "Gekoelde frisdranken",
      items: [
        { nombre: "Frisdranken", precio: "€3,00" }
      ],
    },
    {
      categoria: "Alcoholische dranken",
      items: [
        { nombre: "Bier", precio: "€3,50" },
        { nombre: "Wijn", precio: "€4,50" }
      ],
    }
  ];

  return (
    <>
      <Navigation />
      <div className='container mx-auto py-6 bg-[#FEFCF2] z-10 px-6 border-b-4 border-blue-800 mt-10'>
        <h1 className='text-2xl font-bold text-blue-800 mb-4'>Menu Prijzen</h1>
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

export default Pricing;

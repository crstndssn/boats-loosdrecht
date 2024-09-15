// /pages/precios.js
import React from 'react';

const Precios = () => {
  const menuItems = [
    {
      categoria: "Kaas arrangement voor 12 personen",
      items: [
        "Mini kaasfondue",
        "Kaasplank",
        "Stokbrood"
      ],
      precio: "€25,50 p.p"
    },
    {
      categoria: "BBQ arrangement voor 12 personen",
      items: [
        "Kip Saté",
        "Satésaus",
        "Stokbrood"
      ],
      precio: "€18,00 p.p"
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
        "Koffie",
        "Thee"
      ],
      precio: "€2,00"
    },
    {
      categoria: "Gekoelde frisdranken",
      items: [
        "Frisdranken"
      ],
      precio: "€3,00"
    },
    {
      categoria: "Alcoholische dranken",
      items: [
        "Bier",
        "Wijn"
      ],
      precios: ["€3,50", "€4,50"]
    }
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Menu Prijzen</h1>
      <ul style={styles.list}>
        {menuItems.map((menu, index) => (
          <li key={index} style={styles.listItem}>
            <strong>{menu.categoria}</strong>
            {menu.items && (
              <ul>
                {menu.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            )}
            {menu.precio && <p>Prijs: {menu.precio}</p>}
            {menu.precios && (
              <ul>
                {menu.precios.map((precio, priceIndex) => (
                  <li key={priceIndex}>{precio}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Estilos en línea
const styles = {
  container: {
    width: '80%',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    textAlign: 'left',
    marginBottom: '10px',
  },
};

export default Precios;

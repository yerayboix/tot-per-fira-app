export const productosPorCategoria = {
  // BEBIDAS ALCOHÓLICAS
  alcohol: [
    // GINEBRA
    { nombre: 'Seagrams 0.7L', categoria: 'Ginebra' },
    { nombre: 'Seagrams 1L', categoria: 'Ginebra' },
    { nombre: 'Beefeater 0.7L', categoria: 'Ginebra' },
    { nombre: 'Beefeater 1L', categoria: 'Ginebra' },
    { nombre: 'Larios 0.7L', categoria: 'Ginebra' },
    { nombre: 'Larios 1L', categoria: 'Ginebra' },
    { nombre: 'Puerto de Indias 0.7L', categoria: 'Ginebra' },
    { nombre: 'Puerto de Indias 1L', categoria: 'Ginebra' },
    { nombre: 'Larios Rose 0.7L', categoria: 'Ginebra' },
    { nombre: 'Larios Rose 1L', categoria: 'Ginebra' },
    
    // WHISKY
    { nombre: 'Red Label 0.7L', categoria: 'Whisky' },
    { nombre: 'Red Label 1L', categoria: 'Whisky' },
    { nombre: 'Ballantines 0.7L', categoria: 'Whisky' },
    { nombre: 'Ballantines 1L', categoria: 'Whisky' },
    { nombre: 'Cutty Sark 0.7L', categoria: 'Whisky' },
    { nombre: 'Cutty Sark 1L', categoria: 'Whisky' },
    
    // RON
    { nombre: 'Negrita 0.7L', categoria: 'Ron' },
    { nombre: 'Negrita 1L', categoria: 'Ron' },
    { nombre: 'Barceló 0.7L', categoria: 'Ron' },
    { nombre: 'Barceló 1L', categoria: 'Ron' },
    { nombre: 'Brugal 0.7L', categoria: 'Ron' },
    { nombre: 'Brugal 1L', categoria: 'Ron' },
    
    // VODKA
    { nombre: 'Smirnoff 0.7L', categoria: 'Vodka' },
    { nombre: 'Smirnoff 1L', categoria: 'Vodka' },
    { nombre: 'Absolut 0.7L', categoria: 'Vodka' },
    { nombre: 'Absolut 1L', categoria: 'Vodka' },
    { nombre: 'Eristoff 0.7L', categoria: 'Vodka' },
    { nombre: 'Eristoff 1L', categoria: 'Vodka' },
    { nombre: 'Vodka Sabores 0.7L', categoria: 'Vodka' },
    { nombre: 'Vodka Sabores 1L', categoria: 'Vodka' },
    
    // LICORES
    { nombre: 'Jägermeister 0.7L', categoria: 'Licores' },
    { nombre: 'Jägermeister 1L', categoria: 'Licores' },
    { nombre: 'Tequila 0.7L', categoria: 'Licores' },
    { nombre: 'Tequila Sabores 0.7L', categoria: 'Licores' },
    { nombre: 'Licor de Arroz 1L', categoria: 'Licores' },
    { nombre: 'Licor de Arroz 3L', categoria: 'Licores' },
    { nombre: 'Licor de Arroz 5L', categoria: 'Licores' },
    { nombre: 'Limoncello 1L', categoria: 'Licores' },
    { nombre: 'Limoncello 3L', categoria: 'Licores' },
    { nombre: 'Limoncello 5L', categoria: 'Licores' },
    { nombre: 'Baileys 0.7L', categoria: 'Licores' },
    { nombre: 'Peché 0.7L', categoria: 'Licores' },
    { nombre: 'Fireball 0.7L', categoria: 'Licores' },
    { nombre: 'Malibú 0.7L', categoria: 'Licores' },
    { nombre: 'Malibú 1L', categoria: 'Licores' },
  ],
  
  // BEBIDAS SIN ALCOHOL
  bebida: [
    { nombre: 'Coca Cola 330ml' },
    { nombre: 'Coca Cola 500ml' },
    { nombre: 'Coca Cola 1.5L' },
    { nombre: 'Coca Cola 2L' },
    { nombre: 'Fanta Naranja 330ml' },
    { nombre: 'Fanta Naranja 500ml' },
    { nombre: 'Fanta Naranja 1.5L' },
    { nombre: 'Fanta Naranja 2L' },
    { nombre: 'Sprite 330ml' },
    { nombre: 'Sprite 500ml' },
    { nombre: 'Sprite 1.5L' },
    { nombre: 'Sprite 2L' },
    { nombre: 'Nestea 330ml' },
    { nombre: 'Nestea 500ml' },
    { nombre: 'Nestea 1.5L' },
    { nombre: 'Agua La Serreta 0.5L' },
    { nombre: 'Agua La Serreta 1.5L' },
  ],
  
  // CERVEZAS
  cervezas: [
    { nombre: 'Lata Estrella Galicia (Pack 24)' },
    { nombre: 'Quintos Estrella Galicia (Pack 24)' },
    { nombre: 'Cuartos Estrella Galicia (Pack 24)' },
    { nombre: 'Tercios Estrella Galicia (Pack 24)' },
    { nombre: 'Barril Estrella Damm 50L' },
    { nombre: 'Cerveza con Limón - Lata (Pack 24)' },
    { nombre: 'Cerveza con Limón - Quintos (Pack 24)' },
    { nombre: 'Cerveza con Limón - Cuartos (Pack 24)' },
    { nombre: 'Cerveza con Limón - Tercios (Pack 24)' },
  ],

  // CATEGORÍAS EXISTENTES NO BEBIDAS
  congelador: [
    { nombre: 'Congelador + 05 sacos de hielos (25 bolsas)', precio: 85 },
    { nombre: 'Congelador + 10 sacos de hielos (50 bolsas)', precio: 145 },
    { nombre: 'Congelador + 15 sacos de hielos (75 bolsas)', precio: 165 },
    { nombre: 'Congelador + 20 sacos de hielos (100 bolsas)', precio: 195 },
  ],
  hielo: [
    { nombre: '1 saca (5 bolsas)', precio: 6 },
    { nombre: '5 sacas (25 bolsas)', precio: 30 },
    { nombre: '10 sacas (50 bolsas)', precio: 60 },
    { nombre: '15 sacas (75 bolsas)', precio: 90 },
    { nombre: '20 sacas (120 bolsas)', precio: 120 },
  ],
  altavoces: [
    { nombre: 'Equipo de 500W', precio: 200 },
    { nombre: 'Equipo de 1.000W', precio: 275 },
    { nombre: 'Equipo de 1.500W', precio: 425 },
    { nombre: 'Equipo de 2.000W', precio: 450 },
    { nombre: 'Equipo de 3.000W', precio: 550 },
    { nombre: 'Equipo de 4.000W', precio: 625 },
    { nombre: 'Equipo de 5.000W', precio: 700 },
    { nombre: 'Equipo de 6.000W', precio: 800 },
  ],
  pack_limpieza: [
    { nombre: 'Pack de Limpieza', precio: 40 },
  ],
  pack_menaje: [
    { nombre: 'Pack de Menaje', precio: 50 },
  ],
  vasos: [
    { nombre: 'Vasos 0.22L (1000 uds.)' },
    { nombre: 'Vasos 0.33L (1000 uds.)' },
    { nombre: 'Vasos 0.50L (1000 uds.)' },
  ]
};
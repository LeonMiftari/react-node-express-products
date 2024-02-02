const express = require('express');


const app = express();
app.get("/api", (req, res) => {
  const data = [
    { id: 1, title: 'iPhone 13 Pro', description: 'Powerful smartphone with a stunning camera system.' },
    { id: 2, title: 'MacBook Air', description: 'Ultra-thin and lightweight laptop for everyday use.' },
    { id: 3, title: 'Apple Watch Series 7', description: 'Stay connected with the latest Apple Watch.'},
    { id: 4, title: 'iPad Pro', description: 'Versatile tablet for work and creativity.' },
    { id: 5, title: 'AirPods Pro', description: 'Immersive sound with active noise cancellation.' },
    { id: 6, title: 'iMac', description: 'All-in-one desktop with a sleek design.' },
    { id: 7, title: 'Apple Pencil', description: 'Precision stylus for creative tasks on iPad.'},
    { id: 8, title: 'Mac Mini', description: 'Compact desktop with impressive performance.' },
    { id: 9, title: 'HomePod Mini', description: 'Smart speaker with impressive sound quality.'},
    { id: 10, title: 'Apple TV 4K', description: 'High-quality streaming device for your entertainment.' }
  ];
  res.json(data);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

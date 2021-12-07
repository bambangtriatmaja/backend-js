// Import data fruits dari data.js
const fruits = require("./data.js");

// Membuat method list fruit
const listFruit = () => {
  for (const fruit of fruits) {
    console.log(fruit);
  }
};

// Membuat method index
const index = () => {
  console.log(`Method index - Menampilkan Buah`);
  listFruit();
};

// Membuat method store
const store = (name) => {
  fruits.push(name);
  console.log(`Method Store - Menambahkan buah ${name}`);
  listFruit();
};

// Membuat method update
const update = (position, name) => {
  fruits[position] = name;
  console.log(`Method Update - Update data ${position} Menjadi ${name}`);
  listFruit();
};

// Membuat method destroy
const destroy = (position) => {
  fruits.pop(position);
  console.log(`Method Delete - Menghapus data ${position} `);
  listFruit();
};

module.exports = { index, store, update, destroy };

// Import method index dan store
const { index, store, update, destroy } = require("./FruitController.js");

const main = () => {
  index();
  store("Alpukat");
  update(3, "Melon");
  destroy(3);
};

main();

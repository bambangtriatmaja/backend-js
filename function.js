/**
 * Membuat fungsi menghitung luas lingkaran
 * Fungsi dibuat dengan gaya Function Declaration
 */

/* function luasLingkaran(radius) {
  const PHI = 3.14;
  const area = PHI * radius * radius;
  return area;
} */

// Function Expression
/* const luasLingkaran = function (radius) {
  const PHI = 3.14;
  const area = PHI * radius * radius;
  return area;
}; */

// Arrow function
/* const luasLingkaran = (radius) => {
  const PHI = 3.14;
  const area = PHI * radius * radius;
  return area;
}; */

// atau
const luasLingkaran = (jarijari) => 3.14 * jarijari * jarijari;

console.log(luasLingkaran(3));

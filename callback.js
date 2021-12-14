const formatName = (nama) => nama.toUpperCase();

const getName = (nama, callFormatName) => console.log(callFormatName(nama));

getName("bambang", formatName);

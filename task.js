function download() {
  return new Promise(function (resolve, reject) {
    const status = true;
    setTimeout(() => {
      if (status) {
        resolve("Download berhasil");
      } else {
        reject("Download Gagal");
      }
    }, 3000);
  });
}

async function main() {
  console.log(await download());
}
main();

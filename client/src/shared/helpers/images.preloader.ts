export async function ImagesPreloader(images: string[]) {
  const promises = images.map((src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      resolve(img.onload);
      reject(img.onerror);
    });
  });

  await Promise.all(promises);
}

export default async function loadBalancer(promise1, promise2) {
  let settled = false;

  // Race between two promises
  const result = await Promise.race([
    promise1.then(() => {
      if (!settled) {
        settled = true;
        return 'Downloading from UK is faster';
      }
    }),
    promise2.then(() => {
      if (!settled) {
        settled = true;
        return 'Downloading from FR is faster';
      }
    })
  ]);

  return result;
}

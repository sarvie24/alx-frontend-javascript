export default function uploadPhoto(fileName) {
  return Promise.reject(`promise { <rejected> 'Error: ${fileName} cannot be processed' }`);
}

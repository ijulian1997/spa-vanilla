// slice => get rid of the first character
const getHash = () => location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

export default getHash;
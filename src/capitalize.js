export const capitalize = (text) => {
  if(typeof(text) !== 'string') return null;
  const [firstSymmbol = '', ...restSymbol] = text;
  return `${firstSymmbol.toUpperCase()}${restSymbol.join('')}`
};




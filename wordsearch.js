const wordSearch = (letters, word) => {
        
  if (word === "" || letters.length === 0 || letters[0].length === 0 || typeof word !== `string`) {
    return false;
  }
    
  word = word.toUpperCase();

  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word))
      return true;
  }
  
  for (let i = 0; i < letters[0].length; i++) {
    const verticalJoin = letters.map(ls => ls[i]).join('');
    if (verticalJoin.includes(word))
      return true;
  }

  return false;
};


module.exports = wordSearch;

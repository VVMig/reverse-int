module.exports = function reverse (n) {
  return parseFloat(new String(n).split('').reverse().join(''));  
}

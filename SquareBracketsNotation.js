const color = 'black';
const hexCode = '#000';

const colors = {
  'yellow Color': '#ff0',
  blue: "#f00",
  orange: "#f60",
  //one way of adding properties using square brackets
  [color]: hexCode
};

//another way of adding properties using square brackets
// colors[color] = hexCode;
console.log(colors);

exports.stringCalculator = input => {
  if (input.length === 0) return 0;

  const { regex, str } = getDelimiter(input);
  const nums = str.replace(regex, ' ');
  return sum(nums.split(' '));
};

const sum = nums =>
  nums.reduce(
    (acc, cur) => (acc += parseInt(cur || 0)),
    0)

const getDelimiter = str => {
  let regex = /[,\\n]/g;

  if(str.slice(0, 2) === '//') {
    [delimiter, str] = str.replace('//', '').split('\n');
    delimiter = delimiter.match(/([^(\[|\])]+)/g)[0];
    regex = new RegExp(delimiter, "g"); 
  }

  return { regex, str };
}
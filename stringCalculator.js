exports.stringCalculator = input => {
  if (input.length === 0) return 0;

  const { regex, str } = getDelimiter(input);
  const nums = throwNegativeNums(str.replace(regex, ' ').split(' '));
  
  return sum(nums);
};

const sum = nums => {
  const limit = 1000;
  let result = 0;

  nums.forEach(num => {
    if(num < limit) result += (parseInt(num) || 0);
  });
  
  return result;
}

const getDelimiter = str => {
  let regex = /[,\\n]/g;

  if(str.slice(0, 2) === '//') {
    [delimiter, str] = str.replace('//', '').split('\n');
    delimiter = delimiter.match(/([^(\[|\])]+)/g)[0];
    regex = new RegExp(delimiter, "g"); 
  }

  return { regex, str };
}

const throwNegativeNums = nums => {
  const negativeNums = nums.filter(num => {
    if(num < 0) {
      return num
    }
  });

  if(negativeNums.length > 0) {
    throw new Error(`음수는 지원하지 않습니다.(${negativeNums.join()})`);
  }

  return nums;
}
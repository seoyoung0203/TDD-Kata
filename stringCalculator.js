exports.stringCalculator = (str) => {
  if (str.length === 0) return 0;
  const num = str.split(/[,\\n]/g);
  
  let result = 0;
  for (let i = 0; i < num.length; i++) {
    if(num[i]) {
      result += parseInt(num[i]);
    }
  }
  return result;
};
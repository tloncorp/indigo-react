const isOdd = (n:number) => Math.abs(n % 2) == 1;

const sequence = (num:number) => Array.from(Array(num), (_, i) => i);

const randomInt = (mn:number, mx:number) => {
  return Math.floor(Math.random() * (mx - mn + 1) + mn)
};

export { 
    isOdd,
    sequence,
    randomInt
}
const isUndef = (v: any) => typeof v === 'undefined';

const isDef = (v: any) => !isUndef(v);

const isFalse = (v: any) => v === false;

const isTrue = (v: any) => v === true;

const isNull = (v: any) => v === null;

const notNull = (v: any) => !isNull(v);

const isOdd = (n: number) => Math.abs(n % 2) === 1;

const isEven = (n: number) => n % 2 === 0;

const sequence = (num: number) => Array.from(Array(num), (_, i) => i);

export {isUndef, isDef, isFalse, isTrue, notNull, isOdd, isEven, sequence};

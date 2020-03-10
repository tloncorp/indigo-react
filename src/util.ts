const isUndef = (v: any) => typeof v === 'undefined';

const isDef = (v: any) => !isUndef(v);

const isFalse = (v: any) => v === false;

const isTrue = (v: any) => v === true;

const isNull = (v: any) => v === null;

const notNull = (v: any) => !isNull(v);

export {isUndef, isDef, isFalse, isTrue, notNull};

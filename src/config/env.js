export const ENV = process.env.NODE_ENV
export const IS_DEV = ENV === 'development' && true
export const IS_PROD = ENV !== 'development' && true

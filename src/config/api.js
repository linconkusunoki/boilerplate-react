import { IS_DEV } from './env'

const BASE_DEV_URL = 'http://localhost:3000'
const PROD_DEV_URL = 'http://localhost:3000'

export const BASE_URL = IS_DEV ? BASE_DEV_URL : PROD_DEV_URL
export const REQUEST_TIMEOUT = 15000

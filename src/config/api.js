import { IS_DEV } from './env'

const BASE_DEV_URL = 'https://api.github.com'
const PROD_DEV_URL = 'https://api.github.com'

export const API_ROOT = IS_DEV ? BASE_DEV_URL : PROD_DEV_URL
export const REQUEST_TIMEOUT = 15000

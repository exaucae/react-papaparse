import PapaParse from 'papaparse'

export { readString } from './readString'
export { default as CSVReader } from './CSVReader'
export { jsonToCSV } from './jsonToCSV'
export { readRemoteFile } from './readRemoteFile'

export const BAD_DELIMITERS = PapaParse.BAD_DELIMITERS
export const RECORD_SEP = PapaParse.RECORD_SEP
export const UNIT_SEP = PapaParse.UNIT_SEP
export const WORKERS_SUPPORTED = PapaParse.WORKERS_SUPPORTED

export const LocalChunkSize = PapaParse.LocalChunkSize
export const DefaultDelimiter = PapaParse.DefaultDelimiter

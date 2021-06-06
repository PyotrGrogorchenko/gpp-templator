import { ParserTypes } from './ParserTypes'

export type Node = {
  type: ParserTypes,
  content: string,
  uid: number,
  deleteMark: boolean
}

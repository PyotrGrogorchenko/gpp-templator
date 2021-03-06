import { Node } from '../types'
import { getUid } from '../../utils'
import { ParserTypes } from '../ParserTypes'

export function parserNoREGEXP(str: string): Array<Node> {
  const res: Array<Node> = Array<Node>()

  str = str.replace(/{%/g, '<{%')
  str = str.replace(/%}/g, '%}>')

  const addItem = (type: ParserTypes, content: string): void => {
    const uid = type === ParserTypes.BEGIN ? getUid() : 0
    res.push({
      type, content, uid, deleteMark: false
    })
  }

  str = str.split(/\n/g).reduce((result, current) => {
    const currentClean = current.replace(/\s/g, '')
    if (currentClean.startsWith('//')) {
      return result
    }
    return `${result}\n${current}`
  }, '').trim()

  while (str) {
    const beginTagPos: number = str.indexOf('<')
    let endTagPos: number = str.indexOf('>')

    const isCode: boolean = str.startsWith('<{%')
    endTagPos = isCode ? str.indexOf('%}>') + 2 : endTagPos

    const tagContent: string = str.slice(beginTagPos + 1, endTagPos).trim().replace(/[\r\n]+/g, '')

    const isEndTag: boolean = tagContent.startsWith('/')

    if (isCode) {
      addItem(ParserTypes.CODE, tagContent)
    } else {
      addItem(isEndTag ? ParserTypes.END : ParserTypes.BEGIN, isEndTag ? tagContent.slice(1) : tagContent)
    }

    str = str.slice(endTagPos + 1).trim()

    if (str.indexOf('<') >= 0) {
      const content = str.substring(0, str.indexOf('<'))
      if (content) {
        addItem(ParserTypes.TEXT, content)
      }
      str = str.slice(str.indexOf('<')).trim()
    }
  }

  return res
}

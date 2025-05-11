interface Dock {
  id: string
  text: string
}

export function search(docks: Dock[], str: string) {
  const docksIdsWithStr: string[] = []
  for (const dock of docks) {
    for (let i = 0; i < dock.text.length - str.length; i++) {
      let substr = ''
      for (let j = 0; j < str.length; j++) {
        substr += dock.text[i + j]
      }
      if (substr === str) {
        docksIdsWithStr.push(dock.id)
        break
      }
    }
  }
  return docksIdsWithStr
}

export default search

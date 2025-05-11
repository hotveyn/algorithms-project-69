import { describe, expect, it } from 'vitest'
import { search } from '../src'

describe('Search engine', () => {
  it('Should return ids of docs with substr', () => {
    const doc1 = { id: 'doc1', text: 'I can\'t shoot straight unless I\'ve had a pint!' }
    const doc2 = { id: 'doc2', text: 'Don\'t shoot shoot shoot that thing at me.' }
    const doc3 = { id: 'doc3', text: 'I\'m your shoter.' }
    const docs = [doc1, doc2, doc3]

    const result = search(docs, 'shoot')
    expect(result).toStrictEqual(['doc1', 'doc2'])
  })
})

import { newFlashCard } from '../src/cards/flashcard'
import { newCardStatus } from '../src/cards/cardstatus'

describe('CardStatus', () => {
  const card = newFlashCard('What is AI?', 'Artificial Intelligence')
  const status = newCardStatus(card)

  test('getCard returns the associated flashcard', () => {
    expect(status.getCard().getQuestion()).toBe('What is AI?')
    expect(status.getCard().getAnswer()).toBe('Artificial Intelligence')
  })

  test('recordResult and getResults track success history', () => {
    status.recordResult(true)
    status.recordResult(false)
    status.recordResult(true)
    expect(status.getResults()).toEqual([true, false, true])
  })

  test('getResults returns a copy, not original array', () => {
    const results = status.getResults()
    results.push(false) // modify copy
    expect(status.getResults()).toEqual([true, false, true]) // original unchanged
  })

  test('clearResults resets the success history', () => {
    status.clearResults()
    expect(status.getResults()).toEqual([])
  })
})

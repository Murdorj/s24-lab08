import { newFlashCard } from '../src/cards/flashcard'

describe('FlashCard', () => {
  const card = newFlashCard('What is AI?', 'Artificial Intelligence')

  test('getQuestion returns the correct question', () => {
    expect(card.getQuestion()).toBe('What is AI?')
  })

  test('getAnswer returns the correct answer', () => {
    expect(card.getAnswer()).toBe('Artificial Intelligence')
  })

  test('checkSuccess matches correct response (case-insensitive, trims)', () => {
    expect(card.checkSuccess(' artificial intelligence ')).toBe(true)
    expect(card.checkSuccess('Artificial Intelligence')).toBe(true)
    expect(card.checkSuccess('artificial Intelligence')).toBe(true)
  })

  test('checkSuccess fails for incorrect response', () => {
    expect(card.checkSuccess('Machine Learning')).toBe(false)
  })

  test('toString returns expected string', () => {
    expect(card.toString()).toBe('FlashCard[What is AI?, Artificial Intelligence]')
  })

  test('equals returns true for identical card', () => {
    const anotherCard = newFlashCard('What is AI?', 'Artificial Intelligence')
    expect(card.equals(anotherCard)).toBe(true)
  })

  test('equals returns false for different question or answer', () => {
    const diffCard1 = newFlashCard('What is ML?', 'Artificial Intelligence')
    const diffCard2 = newFlashCard('What is AI?', 'Machine Learning')
    expect(card.equals(diffCard1)).toBe(false)
    expect(card.equals(diffCard2)).toBe(false)
  })
})

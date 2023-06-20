import { expect, test } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'

test('Create an answer', () => {
  const answerQuestionUseCase = new AnswerQuestionUseCase()

  const answer = answerQuestionUseCase.execute({
    questionId: '1',
    instructorId: '1',
    content: 'New response to a question',
  })

  expect(answer.content).toBe('New response to a question')
})
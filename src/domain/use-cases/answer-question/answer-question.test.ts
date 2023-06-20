import { expect, test } from 'vitest'
import { AnswersRepository } from '../../repositories/answers-repository'
import { AnswerQuestionUseCase } from './answer-question'

const answersRepositoryMock: AnswersRepository = {
  create: async () => {}
}

test('Create an answer', async () => {
  const answerQuestionUseCase = new AnswerQuestionUseCase(answersRepositoryMock)

  const answer = await answerQuestionUseCase.execute({
    questionId: '1',
    instructorId: '1',
    content: 'New response to a question',
  })

  expect(answer.content).toBe('New response to a question')
})
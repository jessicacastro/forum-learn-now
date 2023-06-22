import { Slug } from './slug'

test('should be able to create a new slug from text', () => {
  const slug = Slug.createFromText(
    'Example question title with special characters!',
  )

  expect(slug.value).toEqual('example-question-title-with-special-characters')
})

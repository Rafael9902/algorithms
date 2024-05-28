import { reversedString } from './reversed-string';

describe('reversed string suit test', () => {
  test('successfull reverse string', () => {
    const text: string = 'hello world';

    const result = reversedString(text);

    // expect(result).toBe('dlrow olleh');
  });
});

import { getWordCount } from '../algorithm/getWordCount';

it('should count duplicate word frequency properly', () => {
    expect(getWordCount('world world')).toMatchObject({world: 2});
})

it('should handle uppercase and lowercase as the same', () => {
    expect(getWordCount('this that the World world and the state.')).toMatchObject({ state: 1, world: 2});
})

it('should treat the same word similarly independent of its case', () => {
    expect(getWordCount('REACTJS reactJS ReactJS is a web development framework')).toMatchObject({reactjs: 3, web: 1, development: 1, framework: 1});
})
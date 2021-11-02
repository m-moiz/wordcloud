import { removePunctuation } from '../algorithm/removePunctuation';

it('should remove all the consecutive symbols', () => {
    expect(removePunctuation(',.*...*,to')).toBe('to');
})

it('should remove duplicate symbols', () => {
    expect(removePunctuation('(())')).toBe('');
})

it('should remove all the numbers', () => {
    expect(removePunctuation('123-123Capital')).toBe('Capital');
})

it('should handle empty input gracefully', () => {
    expect(removePunctuation("")).toBe('');
})



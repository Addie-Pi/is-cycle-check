const solution = require('./index');

describe('Cycle Check', () => {
    it('should return true for a simple cycle', () => {
        const A = [3, 1, 2];
        const B = [2, 3, 1];
        expect(solution(A, B)).toBe(true);
    });

    it('should return false cause one edge direction is wrong', () => {
        const A = [1, 2, 1];
        const B = [2, 3, 3];
        expect(solution(A, B)).toBe(false);
    });

    it('should return false for a non-cycle graph', () => {
        const A = [1, 2, 2, 3, 3];
        const B = [2, 3, 3, 4, 5];
        expect(solution(A, B)).toBe(false);
    });

    it('should return false for a non-cycle graph', () => {
        const A = [1, 2, 3, 4];
        const B = [2, 3, 4, 4]; 
        expect(solution(A, B)).toBe(false);
    });


    it('should return false for a graph consist of two disjoint cycles', () => {
        const A = [1, 2, 3, 4];
        const B = [2, 1, 4, 3];
        expect(solution(A, B)).toBe(false);
    });

    it('should return true for a larger cycle', () => {
        const A = [1, 2, 3, 4];
        const B = [2, 3, 4, 1];
        expect(solution(A, B)).toBe(true);
    });

    it('should return false if any vertex has more than one edge', () => {
        const A = [1, 2, 3];
        const B = [2, 3, 2]; 
        expect(solution(A, B)).toBe(false);
    });
});
/**
 * Creates a pseudo-random value generator. The seed must be an integer.
 * https://gist.github.com/blixt/f17b47c62508be59987b
 * 
 * Uses an optimized version of the Park-Miller PRNG.
 * http://www.firstpr.com.au/dsp/rand31/
 */
export class Random {
    seed: number
    
    constructor(newSeed) {
      this.seed = newSeed % 2147483647;
      if (this.seed <= 0) {
        this.seed += 2147483646;
      }
    }

    /**
     * Returns a pseudo-random value between 1 and 2147483646 (inclusive).
     */
    next() {
      return this.seed = this.seed * 16807 % 2147483647;
    };


    /**
     * Returns a pseudo-random floating point number in range [0, 1).
     */
    nextFloat(opt_minOrMax, opt_max) {
      // We know that result of next() will be 1 to 2147483646 (inclusive).
      return (this.next() - 1) / 2147483646;
    };
}
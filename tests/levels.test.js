import { levels, currentLevel, nextLevel, resetLevels, getLevelConfig } from '../src/levels.js';

describe('levels.js', () => {
  beforeEach(() => {
    resetLevels();
  });

  it('inizia dal livello 0', () => {
    expect(currentLevel).toBe(0);
    expect(getLevelConfig()).toEqual(levels[0]);
  });

  it('passa al livello successivo', () => {
    const hasNext = nextLevel();
    expect(hasNext).toBe(true);
    expect(currentLevel).toBe(1);
    expect(getLevelConfig()).toEqual(levels[1]);
  });

  it('non supera l’ultimo livello', () => {
    nextLevel();
    const hasNext = nextLevel();
    expect(hasNext).toBe(false);
    expect(currentLevel).toBe(1);
  });

  it('resetLevels riporta al primo livello', () => {
    nextLevel();
    resetLevels();
    expect(currentLevel).toBe(0);
  });
});

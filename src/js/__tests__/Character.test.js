import { Undead } from '../Undead';

test('should damage and levelUp Undead', () => {
  const result = new Undead('Zergul');
  result.damage(10);
  result.levelUp();

  expect(result).toEqual({
    name: 'Zergul',
    type: 'Undead',
    health: 100,
    attack: 30,
    defence: 30,
    level: 2,
  });
});

test('should throw error', () => {
  function result() {
    const zergul = new Undead('Zergul');
    zergul.damage(10000000);
    zergul.levelUp();
  }

  expect(result).toThrow();
});

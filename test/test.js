import { findBy } from '../src/function.js';

test('Поиск по массиву', () => {
  const finder = findBy('type', 'atack');

  const expected = [{
    name: 'заклинание',
    type: 'atack',
    description: 'Атака магическим заклинанием',
  }];

  const received = [

    {
      name: 'маг',
      type: 'character',
      description: 'Персонаж, обладающий магическими способностями',
    },

    {
      name: 'заклинание',
      type: 'atack',
      description: 'Атака магическим заклинанием',
    },

    {
      name: 'урон',
      type: 'help',
      description: 'Страница описания элемента интерфейса',
    },

  ].filter(finder);

  expect(received).toEqual(expected);
});

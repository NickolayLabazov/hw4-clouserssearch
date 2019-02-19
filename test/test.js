import findBy from '../src/function';

test('Один результат', () => {
  const finder = findBy('type', 'atack');

  const expected = [
    { name: 'заклинание', type: 'atack', description: 'Атака магическим заклинанием' },
  ];

  const received = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'atack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ].filter(finder);

  expect(received).toEqual(expected);
});

test('Нет результатов', () => {
  const finder = findBy('type', 'заклинание');

  const expected = [];

  const received = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'atack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ].filter(finder);

  expect(received).toEqual(expected);
});

test('Нет результатов', () => {
  const finder = findBy('name', 'type');

  const expected = [];

  const received = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'atack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ].filter(finder);

  expect(received).toEqual(expected);
});

test('Два результата', () => {
  const finder = findBy('type', 'atack');

  const expected = [
    { name: 'заклинание', type: 'atack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'atack', description: 'Страница описания элемента интерфейса' },
  ];

  const received = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'atack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'atack', description: 'Страница описания элемента интерфейса' },
  ].filter(finder);

  expect(received).toEqual(expected);
});

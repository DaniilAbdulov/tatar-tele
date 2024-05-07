import {describe, expect, test} from '@jest/globals';
import {getChangedNoun} from '../src/utils';

describe('Noun test', () => {
  test('авыл во множественном', () => {
    expect(getChangedNoun(1, 1, 1, 1)).toBe('Авылларым');
    expect(getChangedNoun(1, 2, 1, 2)).toBe('Авылларыңның');
    expect(getChangedNoun(1, 3, 1, 3)).toBe('Авылларыга');
    expect(getChangedNoun(1, 4, 1, 4)).toBe('Авылларыбызны');
    expect(getChangedNoun(1, 5, 1, 5)).toBe('Авылларыгызда');
    expect(getChangedNoun(1, 6, 1, 6)).toBe('Авылларыдан');
  });
  test('авыл в ед.ч', () => {
    expect(getChangedNoun(1, 1, 2, 1)).toBe('Авылым');
    expect(getChangedNoun(1, 2, 2, 2)).toBe('Авылыңның');
    expect(getChangedNoun(1, 3, 2, 3)).toBe('Авылыга');
    expect(getChangedNoun(1, 4, 2, 4)).toBe('Авылыбызны');
    expect(getChangedNoun(1, 5, 2, 5)).toBe('Авылыгызда');
    expect(getChangedNoun(1, 6, 2, 6)).toBe('Авылыдан');
  });
  test('өй в ед.ч', () => {
    expect(getChangedNoun(2, 1, 2, 1)).toBe('Өем');
    expect(getChangedNoun(2, 2, 2, 2)).toBe('Өеңнең');
    expect(getChangedNoun(2, 3, 2, 3)).toBe('Өегә');
    expect(getChangedNoun(2, 4, 2, 4)).toBe('Өебезне');
    expect(getChangedNoun(2, 5, 2, 5)).toBe('Өегездә');
    expect(getChangedNoun(2, 6, 2, 6)).toBe('Өедән');
  });
  test('өй во множественном', () => {
    expect(getChangedNoun(2, 1, 1, 1)).toBe('Өйләрем');
    expect(getChangedNoun(2, 2, 1, 2)).toBe('Өйләреңнең');
    expect(getChangedNoun(2, 3, 1, 3)).toBe('Өйләрегә');
    expect(getChangedNoun(2, 4, 1, 4)).toBe('Өйләребезне');
    expect(getChangedNoun(2, 5, 1, 5)).toBe('Өйләрегездә');
    expect(getChangedNoun(2, 6, 1, 6)).toBe('Өйләредән');
  });
  test('кунак во множественном', () => {
    expect(getChangedNoun(3, 1, 1, 1)).toBe('Кунакларым');
    expect(getChangedNoun(3, 2, 1, 2)).toBe('Кунакларыңның');
    expect(getChangedNoun(3, 3, 1, 3)).toBe('Кунакларыга');
    expect(getChangedNoun(3, 4, 1, 4)).toBe('Кунакларыбызны');
    expect(getChangedNoun(3, 5, 1, 5)).toBe('Кунакларыгызда');
    expect(getChangedNoun(3, 6, 1, 6)).toBe('Кунакларыдан');
  });
  test('кунак в ед.ч', () => {
    expect(getChangedNoun(3, 1, 2, 1)).toBe('Кунагым');
    expect(getChangedNoun(3, 2, 2, 2)).toBe('Кунагыңның');
    expect(getChangedNoun(3, 3, 2, 3)).toBe('Кунагыка');
    expect(getChangedNoun(3, 4, 2, 4)).toBe('Кунагыбызны');
    expect(getChangedNoun(3, 5, 2, 5)).toBe('Кунагыгызта');
    expect(getChangedNoun(3, 6, 2, 6)).toBe('Кунагытан');
  });
  test('икмәк во множественном', () => {
    expect(getChangedNoun(4, 1, 1, 1)).toBe('Икмәкләрем');
    expect(getChangedNoun(4, 2, 1, 2)).toBe('Икмәкләреңнең');
    expect(getChangedNoun(4, 3, 1, 3)).toBe('Икмәкләрегә');
    expect(getChangedNoun(4, 4, 1, 4)).toBe('Икмәкләребезне');
    expect(getChangedNoun(4, 5, 1, 5)).toBe('Икмәкләрегездә');
    expect(getChangedNoun(4, 6, 1, 6)).toBe('Икмәкләредән');
  });
  test('Икмәк в ед.ч', () => {
    expect(getChangedNoun(4, 1, 2, 1)).toBe('Икмәгем');
    expect(getChangedNoun(4, 2, 2, 2)).toBe('Икмәгеңнең');
    expect(getChangedNoun(4, 3, 2, 3)).toBe('Икмәгекә');
    expect(getChangedNoun(4, 4, 2, 4)).toBe('Икмәгебезне');
    expect(getChangedNoun(4, 5, 2, 5)).toBe('Икмәгегезтә');
    expect(getChangedNoun(4, 6, 2, 6)).toBe('Икмәгетән');
    expect(getChangedNoun(4, 1, 2)).toBe('Икмәк');
    expect(getChangedNoun(4, 2, 2)).toBe('Икмәкнең');
    expect(getChangedNoun(4, 3, 2)).toBe('Икмәккә');
    expect(getChangedNoun(4, 4, 2)).toBe('Икмәкне');
    expect(getChangedNoun(4, 5, 2)).toBe('Икмәктә');
    expect(getChangedNoun(4, 6, 2)).toBe('Икмәктән');
  });
  test('Ел в ед.ч', () => {
    expect(getChangedNoun(5, 3, 2, 1)).toBe('Елымга');
  });
  test('Кеше в ед.ч', () => {
    expect(getChangedNoun(6, 3, 2, 2)).toBe('Кешеңгә');
  });
  test('Эш в ед.ч', () => {
    expect(getChangedNoun(7, 3, 2, 3)).toBe('Эшекә');
  });
  test('Көн в ед.ч', () => {
    expect(getChangedNoun(8, 3, 2, 4)).toBe('Көнебезгә');
  });
  test('Бала в ед.ч', () => {
    expect(getChangedNoun(9, 3, 2, 5)).toBe('Балагызга');
  });
  test('Вакыт в ед.ч', () => {
    expect(getChangedNoun(11, 3, 2, 1)).toBe('Вакытымка');
  });
  test('Баш в ед.ч', () => {
    expect(getChangedNoun(12, 3, 2, 2)).toBe('Башыңка');
  });
  test('шәһәр во мн.ч', () => {
    expect(getChangedNoun(14, 1, 1, 1)).toBe('Шәһәрләрем');
    expect(getChangedNoun(14, 2, 1, 2)).toBe('Шәһәрләреңнең');
    expect(getChangedNoun(14, 3, 1, 3)).toBe('Шәһәрләрегә');
    expect(getChangedNoun(14, 4, 1, 4)).toBe('Шәһәрләребезне');
    expect(getChangedNoun(14, 5, 1, 5)).toBe('Шәһәрләрегездә');
    expect(getChangedNoun(14, 6, 1, 6)).toBe('Шәһәрләредән');
  });
  test('шәһәр в ед.ч', () => {
    expect(getChangedNoun(14, 1, 2, 1)).toBe('Шәһәрем');
    expect(getChangedNoun(14, 2, 2, 2)).toBe('Шәһәреңнең');
    expect(getChangedNoun(14, 3, 2, 3)).toBe('Шәһәрегә');
    expect(getChangedNoun(14, 4, 2, 4)).toBe('Шәһәребезне');
    expect(getChangedNoun(14, 5, 2, 5)).toBe('Шәһәрегездә');
    expect(getChangedNoun(14, 6, 2, 6)).toBe('Шәһәредән');
  });
  test('Мәктәп в ед.ч', () => {
    expect(getChangedNoun(17, 1, 2, 1)).toBe('Мәктәбем');
    expect(getChangedNoun(17, 1, 2, 2)).toBe('Мәктәбең');
    expect(getChangedNoun(17, 1, 2, 3)).toBe('Мәктәбе');
    expect(getChangedNoun(17, 1, 2, 4)).toBe('Мәктәбебез');
    expect(getChangedNoun(17, 1, 2, 5)).toBe('Мәктәбегез');
    expect(getChangedNoun(17, 1, 2, 6)).toBe('Мәктәбе');
    expect(getChangedNoun(17, 1, 2)).toBe('Мәктәп');
    expect(getChangedNoun(17, 2, 2)).toBe('Мәктәпнең');
    expect(getChangedNoun(17, 3, 2)).toBe('Мәктәпкә');
    expect(getChangedNoun(17, 4, 2)).toBe('Мәктәпне');
    expect(getChangedNoun(17, 5, 2)).toBe('Мәктәптә');
    expect(getChangedNoun(17, 6, 2)).toBe('Мәктәптән');
  });
  test('Китап', () => {
    expect(getChangedNoun(55, 4, 1, 1)).toBe('Китапларымны');
  });
  test('Күз', () => {
    expect(getChangedNoun(35, 3, 1, 2)).toBe('Күзләреңә');
  });
  test('Урам в ед.ч', () => {
    expect(getChangedNoun(92, 1, 2, 1)).toBe('Урамым');
    expect(getChangedNoun(92, 2, 2, 2)).toBe('Урамыңның');
    expect(getChangedNoun(92, 3, 2, 3)).toBe('Урамыга');
    expect(getChangedNoun(92, 4, 2, 4)).toBe('Урамыбызны');
    expect(getChangedNoun(92, 5, 2, 5)).toBe('Урамыгызда');
    //expect(getChangedNoun(92, 6, 2, 6)).toBe('Урамынан');
    expect(getChangedNoun(92, 1, 2)).toBe('Урам');
    expect(getChangedNoun(92, 2, 2)).toBe('Урамның');
    expect(getChangedNoun(92, 3, 2)).toBe('Урамга');
    expect(getChangedNoun(92, 4, 2)).toBe('Урамны');
    expect(getChangedNoun(92, 5, 2)).toBe('Урамда');
    expect(getChangedNoun(92, 6, 2)).toBe('Урамнан');
  });
  test('Урам во мн.ч', () => {
    expect(getChangedNoun(92, 1, 1, 1)).toBe('Урамнарым');
    expect(getChangedNoun(92, 2, 1, 2)).toBe('Урамнарыңның');
    expect(getChangedNoun(92, 3, 1, 3)).toBe('Урамнарыга');
    expect(getChangedNoun(92, 4, 1, 4)).toBe('Урамнарыбызны');
    expect(getChangedNoun(92, 5, 1, 5)).toBe('Урамнарыгызда');
    expect(getChangedNoun(92, 6, 1, 6)).toBe('Урамнарыдан');
  });
  test('Машина в ед.ч', () => {
    expect(getChangedNoun(102, 1, 2, 1)).toBe('Машинам');
    expect(getChangedNoun(102, 1, 2, 2)).toBe('Машинаң');
    expect(getChangedNoun(102, 1, 2, 3)).toBe('Машинасы');
    expect(getChangedNoun(102, 1, 2, 4)).toBe('Машинабыз');
    expect(getChangedNoun(102, 1, 2, 5)).toBe('Машинагыз');
    expect(getChangedNoun(102, 1, 2, 6)).toBe('Машинасы');
  });
  test('Булмә в ед.ч', () => {
    expect(getChangedNoun(103, 1, 2, 1)).toBe('Булмәм');
    expect(getChangedNoun(103, 1, 2, 2)).toBe('Булмәң');
    expect(getChangedNoun(103, 1, 2, 3)).toBe('Булмәсе');
    expect(getChangedNoun(103, 1, 2, 4)).toBe('Булмәбез');
    expect(getChangedNoun(103, 1, 2, 5)).toBe('Булмәгез');
    expect(getChangedNoun(103, 1, 2, 6)).toBe('Булмәсе');
    expect(getChangedNoun(103, 1, 2)).toBe('Булмә');
    expect(getChangedNoun(103, 2, 2)).toBe('Булмәнең');
    expect(getChangedNoun(103, 3, 2)).toBe('Булмәгә');
    expect(getChangedNoun(103, 4, 2)).toBe('Булмәне');
    expect(getChangedNoun(103, 5, 2)).toBe('Булмәдә');
    expect(getChangedNoun(103, 6, 2)).toBe('Булмәдән');
  });
  test('Сорау в ед.ч', () => {
    expect(getChangedNoun(101, 1, 2, 1)).toBe('Соравым');
    expect(getChangedNoun(101, 1, 2, 2)).toBe('Соравың');
    expect(getChangedNoun(101, 1, 2, 3)).toBe('Соравы');
    expect(getChangedNoun(101, 1, 2, 4)).toBe('Соравыбыз');
    expect(getChangedNoun(101, 1, 2, 5)).toBe('Соравыгыз');
    expect(getChangedNoun(101, 1, 2, 6)).toBe('Соравы');
    expect(getChangedNoun(101, 1, 2)).toBe('Сорау');
    expect(getChangedNoun(101, 2, 2)).toBe('Сорауның');
    expect(getChangedNoun(101, 3, 2)).toBe('Сорауга');
    expect(getChangedNoun(101, 4, 2)).toBe('Сорауны');
    expect(getChangedNoun(101, 5, 2)).toBe('Сорауда');
    expect(getChangedNoun(101, 6, 2)).toBe('Сораудан');
  });
});

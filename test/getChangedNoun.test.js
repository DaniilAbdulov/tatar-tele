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
    expect(getChangedNoun(1, 1, 2)).toBe('Авыл');
    expect(getChangedNoun(1, 2, 2)).toBe('Авылның');
    expect(getChangedNoun(1, 3, 2)).toBe('Авылга');
    expect(getChangedNoun(1, 4, 2)).toBe('Авылны');
    expect(getChangedNoun(1, 5, 2)).toBe('Авылда');
    expect(getChangedNoun(1, 6, 2)).toBe('Авылдан');
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
    expect(getChangedNoun(5, 3, 2, 1)).toBe('Елыма');
  });
  test('Кеше в ед.ч', () => {
    expect(getChangedNoun(6, 3, 2, 2)).toBe('Кешеңә');
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
  test('Баш в ед.ч', () => {
    expect(getChangedNoun(12, 3, 2, 2)).toBe('Башыңа');
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
    expect(getChangedNoun(14, 3, 2, 1)).toBe('Шәһәремә');
  });
  test('Мәктәп в ед.ч', () => {
    expect(getChangedNoun(17, 1, 2, 1)).toBe('Мәктәбем');
    expect(getChangedNoun(17, 1, 2, 2)).toBe('Мәктәбең');
    expect(getChangedNoun(17, 1, 2, 3)).toBe('Мәктәбе');
    expect(getChangedNoun(17, 1, 2, 4)).toBe('Мәктәбебез');
    expect(getChangedNoun(17, 1, 2, 5)).toBe('Мәктәбегез');
    expect(getChangedNoun(17, 1, 2, 6)).toBe('Мәктәпләре');
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
  test('Ай', () => {
    expect(getChangedNoun(56, 1, 1)).toBe('Айлар');
    expect(getChangedNoun(56, 2, 1)).toBe('Айларның');
    expect(getChangedNoun(56, 3, 1)).toBe('Айларга');
    expect(getChangedNoun(56, 4, 1)).toBe('Айларны');
    expect(getChangedNoun(56, 5, 1)).toBe('Айларда');
    expect(getChangedNoun(56, 6, 1)).toBe('Айлардан');
    expect(getChangedNoun(56, 1, 2)).toBe('Ай');
    expect(getChangedNoun(56, 2, 2)).toBe('Айның');
    expect(getChangedNoun(56, 3, 2)).toBe('Айга');
    expect(getChangedNoun(56, 4, 2)).toBe('Айны');
    expect(getChangedNoun(56, 5, 2)).toBe('Айда');
    expect(getChangedNoun(56, 6, 2)).toBe('Айдан');
    expect(getChangedNoun(56, 1, 2, 1)).toBe('Аем');
    expect(getChangedNoun(56, 1, 2, 2)).toBe('Аең');
    expect(getChangedNoun(56, 1, 2, 3)).toBe('Ае');
    expect(getChangedNoun(56, 1, 2, 4)).toBe('Аебыз');
    expect(getChangedNoun(56, 1, 2, 5)).toBe('Аегыз');
    expect(getChangedNoun(56, 1, 2, 6)).toBe('Айлары');
    expect(getChangedNoun(56, 3, 2, 1)).toBe('Аема');
  });
  test('өй в ед.ч', () => {
    expect(getChangedNoun(2, 1, 2, 1)).toBe('Өем');
    expect(getChangedNoun(2, 1, 2, 2)).toBe('Өең');
    expect(getChangedNoun(2, 1, 2, 3)).toBe('Өе');
    expect(getChangedNoun(2, 1, 2, 4)).toBe('Өебез');
    expect(getChangedNoun(2, 1, 2, 5)).toBe('Өегез');
    expect(getChangedNoun(2, 1, 2, 6)).toBe('Өйләре');
  });
  test('Күз', () => {
    expect(getChangedNoun(35, 3, 1, 2)).toBe('Күзләреңә');
  });
  test('әби в ед.ч', () => {
    expect(getChangedNoun(88, 1, 1)).toBe('Әбиләр');
    expect(getChangedNoun(88, 2, 1)).toBe('Әбиләрнең');
    expect(getChangedNoun(88, 3, 1)).toBe('Әбиләргә');
    expect(getChangedNoun(88, 4, 1)).toBe('Әбиләрне');
    expect(getChangedNoun(88, 5, 1)).toBe('Әбиләрдә');
    expect(getChangedNoun(88, 6, 1)).toBe('Әбиләрдән');
    expect(getChangedNoun(88, 1, 2)).toBe('Әби');
    expect(getChangedNoun(88, 2, 2)).toBe('Әбинең');
    expect(getChangedNoun(88, 3, 2)).toBe('Әбигә');
    expect(getChangedNoun(88, 4, 2)).toBe('Әбине');
    expect(getChangedNoun(88, 5, 2)).toBe('Әбидә');
    expect(getChangedNoun(88, 6, 2)).toBe('Әбидән');
    expect(getChangedNoun(88, 1, 2, 1)).toBe('Әбием');
    expect(getChangedNoun(88, 1, 2, 2)).toBe('Әбиең');
    expect(getChangedNoun(88, 1, 2, 3)).toBe('Әбисе');
    expect(getChangedNoun(88, 1, 2, 4)).toBe('Әбиебез');
    expect(getChangedNoun(88, 1, 2, 5)).toBe('Әбиегез');
    expect(getChangedNoun(88, 1, 2, 6)).toBe('Әбиләре');
  });
  test('Урам в ед.ч', () => {
    expect(getChangedNoun(92, 1, 2, 1)).toBe('Урамым');
    expect(getChangedNoun(92, 2, 2, 2)).toBe('Урамыңның');
    expect(getChangedNoun(92, 3, 2, 3)).toBe('Урамыга');
    expect(getChangedNoun(92, 4, 2, 4)).toBe('Урамыбызны');
    expect(getChangedNoun(92, 5, 2, 5)).toBe('Урамыгызда');
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
    expect(getChangedNoun(102, 1, 2, 6)).toBe('Машиналары');
  });
  test('Булмә в ед.ч', () => {
    expect(getChangedNoun(103, 1, 2, 1)).toBe('Булмәм');
    expect(getChangedNoun(103, 1, 2, 2)).toBe('Булмәң');
    expect(getChangedNoun(103, 1, 2, 3)).toBe('Булмәсе');
    expect(getChangedNoun(103, 1, 2, 4)).toBe('Булмәбез');
    expect(getChangedNoun(103, 1, 2, 5)).toBe('Булмәгез');
    expect(getChangedNoun(103, 1, 2, 6)).toBe('Булмәләре');
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
    expect(getChangedNoun(101, 1, 2, 6)).toBe('Сораулары');
    expect(getChangedNoun(101, 1, 2)).toBe('Сорау');
    expect(getChangedNoun(101, 2, 2)).toBe('Сорауның');
    expect(getChangedNoun(101, 3, 2)).toBe('Сорауга');
    expect(getChangedNoun(101, 4, 2)).toBe('Сорауны');
    expect(getChangedNoun(101, 5, 2)).toBe('Сорауда');
    expect(getChangedNoun(101, 6, 2)).toBe('Сораудан');
  });
  test('Сәгать в ед.ч', () => {
    expect(getChangedNoun(107, 1, 2, 1)).toBe('Сәгатем');
    expect(getChangedNoun(107, 1, 2, 2)).toBe('Сәгатең');
    expect(getChangedNoun(107, 1, 2, 3)).toBe('Сәгате');
    expect(getChangedNoun(107, 1, 2, 4)).toBe('Сәгатебез');
    expect(getChangedNoun(107, 1, 2, 5)).toBe('Сәгатегез');
    expect(getChangedNoun(107, 1, 2, 6)).toBe('Сәгатьләре');
    expect(getChangedNoun(107, 1, 2)).toBe('Сәгать');
    expect(getChangedNoun(107, 2, 2)).toBe('Сәгатьнең');
    expect(getChangedNoun(107, 3, 2)).toBe('Сәгатькә');
    expect(getChangedNoun(107, 4, 2)).toBe('Сәгатьне');
    expect(getChangedNoun(107, 5, 2)).toBe('Сәгатьтә');
    expect(getChangedNoun(107, 6, 2)).toBe('Сәгатьтән');
    expect(getChangedNoun(107, 1, 1)).toBe('Сәгатьләр');
    expect(getChangedNoun(107, 2, 1)).toBe('Сәгатьләрнең');
    expect(getChangedNoun(107, 3, 1)).toBe('Сәгатьләргә');
    expect(getChangedNoun(107, 4, 1)).toBe('Сәгатьләрне');
    expect(getChangedNoun(107, 5, 1)).toBe('Сәгатьләрдә');
    expect(getChangedNoun(107, 6, 1)).toBe('Сәгатьләрдән');
  });
  test('Су в ед.ч', () => {
    expect(getChangedNoun(51, 1, 2, 1)).toBe('Суым');
    expect(getChangedNoun(51, 1, 2, 2)).toBe('Суың');
    expect(getChangedNoun(51, 1, 2, 3)).toBe('Суы');
    expect(getChangedNoun(51, 1, 2, 4)).toBe('Суыбыз');
    expect(getChangedNoun(51, 1, 2, 5)).toBe('Суыгыз');
    expect(getChangedNoun(51, 1, 2, 6)).toBe('Сулары');
    expect(getChangedNoun(51, 1, 2)).toBe('Су');
    expect(getChangedNoun(51, 2, 2)).toBe('Суның');
    expect(getChangedNoun(51, 3, 2)).toBe('Суга');
    expect(getChangedNoun(51, 4, 2)).toBe('Суны');
    expect(getChangedNoun(51, 5, 2)).toBe('Суда');
    expect(getChangedNoun(51, 6, 2)).toBe('Судан');
    expect(getChangedNoun(51, 1, 1)).toBe('Сулар');
    expect(getChangedNoun(51, 2, 1)).toBe('Суларның');
    expect(getChangedNoun(51, 3, 1)).toBe('Суларга');
    expect(getChangedNoun(51, 4, 1)).toBe('Суларны');
    expect(getChangedNoun(51, 5, 1)).toBe('Суларда');
    expect(getChangedNoun(51, 6, 1)).toBe('Сулардан');
  });
  test('Елмаю в ед.ч', () => {
    expect(getChangedNoun(108, 1, 2, 1)).toBe('Елмаюым');
    expect(getChangedNoun(108, 1, 2, 2)).toBe('Елмаюың');
    expect(getChangedNoun(108, 1, 2, 3)).toBe('Елмаюы');
    expect(getChangedNoun(108, 1, 2, 4)).toBe('Елмаюыбыз');
    expect(getChangedNoun(108, 1, 2, 5)).toBe('Елмаюыгыз');
    expect(getChangedNoun(108, 1, 2, 6)).toBe('Елмаюлары');
    expect(getChangedNoun(108, 1, 2)).toBe('Елмаю');
    expect(getChangedNoun(108, 2, 2)).toBe('Елмаюның');
    expect(getChangedNoun(108, 3, 2)).toBe('Елмаюга');
    expect(getChangedNoun(108, 4, 2)).toBe('Елмаюны');
    expect(getChangedNoun(108, 5, 2)).toBe('Елмаюда');
    expect(getChangedNoun(108, 6, 2)).toBe('Елмаюдан');
    expect(getChangedNoun(108, 1, 1)).toBe('Елмаюлар');
    expect(getChangedNoun(108, 2, 1)).toBe('Елмаюларның');
    expect(getChangedNoun(108, 3, 1)).toBe('Елмаюларга');
    expect(getChangedNoun(108, 4, 1)).toBe('Елмаюларны');
    expect(getChangedNoun(108, 5, 1)).toBe('Елмаюларда');
    expect(getChangedNoun(108, 6, 1)).toBe('Елмаюлардан');
  });
});

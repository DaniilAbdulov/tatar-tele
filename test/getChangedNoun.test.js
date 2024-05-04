import {describe, expect, test} from '@jest/globals';
import {getChangedNoun} from '../src/utils';

describe('Noun test', () => {
  test('авыл во множественном', () => {
    expect(getChangedNoun(1, 1, 1)).toBe('Авыллар');
    expect(getChangedNoun(1, 2, 1)).toBe('Авылларның');
    expect(getChangedNoun(1, 3, 1)).toBe('Авылларга');
    expect(getChangedNoun(1, 4, 1)).toBe('Авылларны');
    expect(getChangedNoun(1, 5, 1)).toBe('Авылларда');
    expect(getChangedNoun(1, 6, 1)).toBe('Авыллардан');
  });
  test('авыл в ед.ч', () => {
    expect(getChangedNoun(1, 1, 2)).toBe('Авыл');
    expect(getChangedNoun(1, 2, 2)).toBe('Авылның');
    expect(getChangedNoun(1, 3, 2)).toBe('Авылга');
    expect(getChangedNoun(1, 4, 2)).toBe('Авылны');
    expect(getChangedNoun(1, 5, 2)).toBe('Авылда');
    expect(getChangedNoun(1, 6, 2)).toBe('Авылдан');
  });
  test('өй в ед.ч', () => {
    expect(getChangedNoun(2, 1, 2)).toBe('Өй');
    expect(getChangedNoun(2, 2, 2)).toBe('Өйнең');
    expect(getChangedNoun(2, 3, 2)).toBe('Өйгә');
    expect(getChangedNoun(2, 4, 2)).toBe('Өйне');
    expect(getChangedNoun(2, 5, 2)).toBe('Өйдә');
    expect(getChangedNoun(2, 6, 2)).toBe('Өйдән');
  });
  test('өй во множественном', () => {
    expect(getChangedNoun(2, 1, 1)).toBe('Өйләр');
    expect(getChangedNoun(2, 2, 1)).toBe('Өйләрнең');
    expect(getChangedNoun(2, 3, 1)).toBe('Өйләргә');
    expect(getChangedNoun(2, 4, 1)).toBe('Өйләрне');
    expect(getChangedNoun(2, 5, 1)).toBe('Өйләрдә');
    expect(getChangedNoun(2, 6, 1)).toBe('Өйләрдән');
  });
  test('кунак во множественном', () => {
    expect(getChangedNoun(3, 1, 1)).toBe('Кунаклар');
    expect(getChangedNoun(3, 2, 1)).toBe('Кунакларның');
    expect(getChangedNoun(3, 3, 1)).toBe('Кунакларга');
    expect(getChangedNoun(3, 4, 1)).toBe('Кунакларны');
    expect(getChangedNoun(3, 5, 1)).toBe('Кунакларда');
    expect(getChangedNoun(3, 6, 1)).toBe('Кунаклардан');
  });
  test('кунак в ед.ч', () => {
    expect(getChangedNoun(3, 1, 2)).toBe('Кунак');
    expect(getChangedNoun(3, 2, 2)).toBe('Кунакның');
    expect(getChangedNoun(3, 3, 2)).toBe('Кунакка');
    expect(getChangedNoun(3, 4, 2)).toBe('Кунакны');
    expect(getChangedNoun(3, 5, 2)).toBe('Кунакта');
    expect(getChangedNoun(3, 6, 2)).toBe('Кунактан');
  });
  test('икмәк во множественном', () => {
    expect(getChangedNoun(4, 1, 1)).toBe('Икмәкләр');
    expect(getChangedNoun(4, 2, 1)).toBe('Икмәкләрнең');
    expect(getChangedNoun(4, 3, 1)).toBe('Икмәкләргә');
    expect(getChangedNoun(4, 4, 1)).toBe('Икмәкләрне');
    expect(getChangedNoun(4, 5, 1)).toBe('Икмәкләрдә');
    expect(getChangedNoun(4, 6, 1)).toBe('Икмәкләрдән');
  });
  test('икмәк в ед.ч', () => {
    expect(getChangedNoun(4, 1, 2)).toBe('Икмәк');
    expect(getChangedNoun(4, 2, 2)).toBe('Икмәкнең');
    expect(getChangedNoun(4, 3, 2)).toBe('Икмәккә');
    expect(getChangedNoun(4, 4, 2)).toBe('Икмәкне');
    expect(getChangedNoun(4, 5, 2)).toBe('Икмәктә');
    expect(getChangedNoun(4, 6, 2)).toBe('Икмәктән');
  });
  test('шәһәр во мн.ч', () => {
    expect(getChangedNoun(14, 1, 1)).toBe('Шәһәрләр');
    expect(getChangedNoun(14, 2, 1)).toBe('Шәһәрләрнең');
    expect(getChangedNoun(14, 3, 1)).toBe('Шәһәрләргә');
    expect(getChangedNoun(14, 4, 1)).toBe('Шәһәрләрне');
    expect(getChangedNoun(14, 5, 1)).toBe('Шәһәрләрдә');
    expect(getChangedNoun(14, 6, 1)).toBe('Шәһәрләрдән');
  });
  test('шәһәр в ед.ч', () => {
    expect(getChangedNoun(14, 1, 2)).toBe('Шәһәр');
    expect(getChangedNoun(14, 2, 2)).toBe('Шәһәрнең');
    expect(getChangedNoun(14, 3, 2)).toBe('Шәһәргә');
    expect(getChangedNoun(14, 4, 2)).toBe('Шәһәрне');
    expect(getChangedNoun(14, 5, 2)).toBe('Шәһәрдә');
    expect(getChangedNoun(14, 6, 2)).toBe('Шәһәрдән');
  });
  test('Урам в ед.ч', () => {
    expect(getChangedNoun(93, 1, 2)).toBe('Урам');
    expect(getChangedNoun(93, 2, 2)).toBe('Урамның');
    expect(getChangedNoun(93, 3, 2)).toBe('Урамга');
    expect(getChangedNoun(93, 4, 2)).toBe('Урамны');
    expect(getChangedNoun(93, 5, 2)).toBe('Урамда');
    expect(getChangedNoun(93, 6, 2)).toBe('Урамнан');
  });
  test('Урам во мн.ч', () => {
    expect(getChangedNoun(93, 1, 1)).toBe('Урамнар');
    expect(getChangedNoun(93, 2, 1)).toBe('Урамнарның');
    expect(getChangedNoun(93, 3, 1)).toBe('Урамнарга');
    expect(getChangedNoun(93, 4, 1)).toBe('Урамнарны');
    expect(getChangedNoun(93, 5, 1)).toBe('Урамнарда');
    expect(getChangedNoun(93, 6, 1)).toBe('Урамнардан');
  });
});

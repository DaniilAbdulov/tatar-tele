import {TAT_NUMBERS} from '../data/index.js';
const isNull = strNum => !parseInt(strNum);
export const getTatarNumber = num => {
  if (!num || isNull(num)) {
    return;
  }
  const splittedNumbers = num
    .toString()
    .replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')
    .split(' ');

  let answer = '';

  function getTatPart(part) {
    switch (part?.length) {
      case 1:
        return TAT_NUMBERS.ONES[`${part[0]}`];
      case 2:
        return isNull(part[1])
          ? TAT_NUMBERS.TENS[`${part[0]}`]
          : TAT_NUMBERS.TENS[`${part[0]}`] +
              ' ' +
              TAT_NUMBERS.ONES[`${part[1]}`];
      case 3:
        const a = isNull(part[0])
          ? ''
          : part[0] === '1'
            ? TAT_NUMBERS.HUNDRED
            : TAT_NUMBERS.ONES[`${part[0]}`] + ' ' + TAT_NUMBERS.HUNDRED;
        const b = isNull(part[1]) ? '' : TAT_NUMBERS.TENS[`${part[1]}`];
        const c = isNull(part[2]) ? '' : TAT_NUMBERS.ONES[`${part[2]}`];
        return a + ' ' + b + ' ' + c;
      default:
        return '';
    }
  }

  answer += getTatPart(splittedNumbers[0]);

  if (splittedNumbers.length === 2) {
    answer += ' ' + TAT_NUMBERS.THOUSAND + ' ';
  }

  answer += getTatPart(splittedNumbers[1]);

  const answerWithoutSpaces = answer.replace(/ +/g, ' ').trim();

  return answerWithoutSpaces;
};

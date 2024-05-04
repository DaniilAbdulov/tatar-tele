//generals
export const GENERAL = {
    I: 1,
    YOU: 2,
    HS: 3,
    WE: 4,
    YOUBIG: 5,
    THEY: 6
  };

  export const PART_SPEACH = {
    NOUN: 1, //Существительное
    ADJECTIVE: 2, //Прилагательное
    NUMERAL: 3, //Числительное
    PRONOUN: 4, //Местоимение
    VERB: 5, //Глагол
    ADVERB: 6 //Наречие
  }

  export const LESSONS = {
    FIRST: 1, 
    SECOND: 2, 
    THIRD: 3,
    FOURTH: 4
  }
  
  export const PRONOUNS = [
    {
      id: 1,
      value: 'Мин',
      rus_value: 'Я'
    },
    {
      id: 2,
      value: 'Син',
      rus_value: 'Ты'
    },
    {
      id: 3,
      value: 'Ул',
      rus_value: 'Он/Она'
    },
    {
      id: 4,
      value: 'Без',
      rus_value: 'Мы'
    },
    {
      id: 5,
      value: 'Сез',
      rus_value: 'Вы'
    },
    {
      id: 6,
      value: 'Алар',
      rus_value: 'Они'
    }
  ];
  
  export const TIMES = {
    PAST: 1,
    NOW: 2,
    FUTURE: 3
  };
  
  export const NEGATIVE = {
    ON: 1,
    OFF: 2
  };
  
  export const VOICE = {
    CONSONANT: 1, //согласный. Глухой
    VOWEL: 2 //гласный. Звонкий
  };
  
  export const STATE = {
    SOLID: 1, //твердый
    SOFT: 2 //мягкий
  };
  
  export const CASES = {
    NOMINATIVE: 1, //Именительный
    POSSESSIVE: 2, //Притяжательный
    DIRECTIONAL: 3, //Направительный
    ACCUSATIVE: 4, //Винительный
    LOCAL: 5, //Местный
    ORIGINAL: 6 //Исходный
  };

  export const RUSSIAN_CASES_PART = {
    [CASES.NOMINATIVE]: '',
    [CASES.POSSESSIVE]: 'Кого ? Чей ?',
    [CASES.DIRECTIONAL]: 'Куда? Кому?',
    [CASES.ACCUSATIVE]: 'Кого? Чего? (Вин. падеж)',
    [CASES.LOCAL]: 'Где ?',
    [CASES.ORIGINAL]: 'Откуда ? Из чего ?'
  }

  export const RUSSIAN_NOUNS_PART = {
    [CASES.NOMINATIVE]: {
      [GENERAL.I]: '',
      [GENERAL.YOU]: '',
      [GENERAL.HS]: '',
      [GENERAL.WE]: '',
      [GENERAL.YOUBIG]: '',
      [GENERAL.THEY]: ''
    },
    [CASES.POSSESSIVE]: {
      [GENERAL.I]: 'мой',
      [GENERAL.YOU]: 'твой',
      [GENERAL.HS]: 'его/её',
      [GENERAL.WE]: 'наш',
      [GENERAL.YOUBIG]: 'ваш',
      [GENERAL.THEY]: 'их'
    },
    [CASES.DIRECTIONAL]: {
      [GENERAL.I]: 'мой',
      [GENERAL.YOU]: 'твой',
      [GENERAL.HS]: 'его/её',
      [GENERAL.WE]: 'наш',
      [GENERAL.YOUBIG]: 'ваш',
      [GENERAL.THEY]: 'их'
    },
    [CASES.ACCUSATIVE]: {
      [GENERAL.I]: '',
      [GENERAL.YOU]: '',
      [GENERAL.HS]: '',
      [GENERAL.WE]: '',
      [GENERAL.YOUBIG]: '',
      [GENERAL.THEY]: ''
    },
    [CASES.LOCAL]: {
      [GENERAL.I]: 'мой',
      [GENERAL.YOU]: 'твой',
      [GENERAL.HS]: 'его/её',
      [GENERAL.WE]: 'наш',
      [GENERAL.YOUBIG]: 'ваш',
      [GENERAL.THEY]: 'их'
    },
    [CASES.ORIGINAL]: {
      [GENERAL.I]: 'моего',
      [GENERAL.YOU]: 'твоего',
      [GENERAL.HS]: 'его/её',
      [GENERAL.WE]: 'нашего',
      [GENERAL.YOUBIG]: 'вашего',
      [GENERAL.THEY]: 'их'
    },

  }

export const RUSSIAN_NEGATIVE = {
    [NEGATIVE.ON]: 'не',
    [NEGATIVE.OFF]: ''
}

export const RUSSIAN_TIME_PART = {
  [TIMES.PAST]: {
    [GENERAL.I]: 'ранее',
    [GENERAL.YOU]: 'ранее',
    [GENERAL.HS]: 'ранее',
    [GENERAL.WE]: 'ранее',
    [GENERAL.YOUBIG]: 'ранее',
    [GENERAL.THEY]: 'ранее'
  },
  [TIMES.NOW]: {
    [GENERAL.I]: '',
    [GENERAL.YOU]: '',
    [GENERAL.HS]: '',
    [GENERAL.WE]: '',
    [GENERAL.YOUBIG]: '',
    [GENERAL.THEY]: ''
  },
  [TIMES.FUTURE]: {
    [GENERAL.I]: 'буду',
    [GENERAL.YOU]: 'будешь',
    [GENERAL.HS]: 'будет',
    [GENERAL.WE]: 'будем',
    [GENERAL.YOUBIG]: 'будете',
    [GENERAL.THEY]: 'будут'
  }
}

export const VOWELS_LETTERS = ['А','Ә','У', 'Ү','О', 'Ө','И','Э','Ы','Я','Ю','Е','Ё'];
export const CONSONANT_LETTERS = ['Б', 'В', 'Г', 'Д', 'Ж', 'Җ', 'З', 'Й', 'К', 'Л', 'М', 'Н', 'Ң','Һ','П', 'Р', 'С', 'Т', 'Ф', 'Х', 'Ч', 'Ц', 'Ш', 'Щ'];
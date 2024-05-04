import React from 'react';
import {AnsVans} from '../AnsVans';

export const Variants = ({variants, store}) => {
  const variantClick = value => {
    store.setUserAnswer(value);
  };

  return <AnsVans array={variants} handler={variantClick} />;
};

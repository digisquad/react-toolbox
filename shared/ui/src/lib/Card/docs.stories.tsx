import React from 'react';
import Card from './index';

export default {
  title: 'Components/Card',
};

export const Default = () => {
  return (
    <Card
      buttonText={'text'}
      title={'title'}
      content={'content'}
      onButtonClick={() => {}}
    />
  );
};

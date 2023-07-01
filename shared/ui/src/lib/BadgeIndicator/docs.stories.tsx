import React, { useState } from 'react';

import { Button } from '@chakra-ui/button';
import { Wrap } from '@chakra-ui/layout';
import { FaUnlock } from 'react-icons/fa';
import { FiPrinter } from 'react-icons/fi';
import BadgeIndicator from '.';

export default {
  title: 'Components/BadgeIndicator',
};

export const Default = () => (
  <Wrap spacing={2}>
    <BadgeIndicator icon={FaUnlock} label="Badge" count={0} />
    <BadgeIndicator icon={FaUnlock} label="Badge" count={1} />
  </Wrap>
);

export const WithoutIcon = () => <BadgeIndicator label="Badge" count={0} />;

export const WithCustomColorScheme = () => (
  <Wrap spacing={2}>
    <BadgeIndicator label="Badge" count={1} colorScheme="brand" />
    <BadgeIndicator icon={FaUnlock} label="Badge" count={1} colorScheme="red" />
    <BadgeIndicator
      icon={FaUnlock}
      label="Badge"
      count={1}
      colorScheme="green"
    />
  </Wrap>
);

export const ImpressionsCase = () => {
  const [count, setCount] = useState(0);
  const [isError, setIsError] = useState(false);

  return (
    <Wrap>
      <BadgeIndicator
        icon={FiPrinter}
        label="Impressions"
        count={count}
        colorScheme={isError ? 'error' : 'brandSecondary'}
      />
      <Button
        onClick={() => setCount((value) => (value === 0 ? 1 : 0))}
        size="xs"
      >
        Toggle count
      </Button>
      {count > 0 && (
        <Button onClick={() => setIsError(!isError)} size="xs">
          Toggle error
        </Button>
      )}
    </Wrap>
  );
};

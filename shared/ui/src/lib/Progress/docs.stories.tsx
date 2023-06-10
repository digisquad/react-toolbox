import React from 'react';

import { Progress, ProgressBar, ProgressLabel } from '.';

export default {
  title: 'Components/Progress',
};

export const Default = () => {
  const maximum = 50;
  return (
    <Progress completed={10} total={30}>
      <ProgressLabel fontSize="sm">
        {({ completed, total }) => `you have  ${completed}  completed task for ${total} (${maximum} all)`}
      </ProgressLabel>
      <ProgressBar />
    </Progress>
  );
};

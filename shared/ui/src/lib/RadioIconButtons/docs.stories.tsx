import { useState } from 'react';

import { FiAlignCenter, FiAlignLeft, FiAlignRight } from 'react-icons/fi';
import { IoMdPhoneLandscape, IoMdPhonePortrait } from 'react-icons/io';

import { Option, RadioIconButtons } from '.';

export default {
  title: 'Components/RadioIconButtons',
};

export const Default = () => {
  const [orientation, setOrientation] = useState('portrait');

  const options: Option[] = [
    { icon: IoMdPhonePortrait, value: 'portrait' },
    { icon: IoMdPhoneLandscape, value: 'landscape' },
  ];

  return <RadioIconButtons options={options} name="orientation" value={orientation} onChange={setOrientation} />;
};

export const RealWorldExample = () => {
  const [alignment, setAlignment] = useState('center');

  const options: Option[] = [
    { icon: FiAlignLeft, value: 'left' },
    { icon: FiAlignCenter, value: 'center' },
    { icon: FiAlignRight, value: 'right' },
  ];

  return <RadioIconButtons options={options} name="align" value={alignment} onChange={setAlignment} />;
};

import { useState } from 'react';
import { ReactNode } from 'react';
import { FiAlignCenter, FiAlignLeft, FiAlignRight } from 'react-icons/fi';
import { IoMdPhoneLandscape, IoMdPhonePortrait } from 'react-icons/io';

import { Option, RadioIconButtons } from '.';
import { As } from '@chakra-ui/react';

export default {
  title: 'Components/RadioIconButtons',
};

export const Default = () => {
  const [orientation, setOrientation] = useState('portrait');

  const options: Option[] = [
    { icon: <IoMdPhonePortrait /> as ReactNode & As, value: 'portrait' },
    { icon: <IoMdPhoneLandscape /> as ReactNode & As, value: 'landscape' },
  ];

  return <RadioIconButtons options={options} name="orientation" value={orientation} onChange={setOrientation} />;
};

export const RealWorldExample = () => {
  const [alignment, setAlignment] = useState('center');

  const options: Option[] = [
    { icon: <FiAlignLeft /> as ReactNode & As, value: 'left' },
    { icon: <FiAlignCenter /> as ReactNode & As, value: 'center' },
    { icon: <FiAlignRight /> as ReactNode & As, value: 'right' },
  ];

  return <RadioIconButtons options={options} name="align" value={alignment} onChange={setAlignment} />;
};

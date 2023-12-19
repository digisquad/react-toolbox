import React, { FC } from 'react';
import { colors } from './colors';

export default {
  title: 'Foundations/Colors',
};

interface ColorBoxProps {
  colorName: string;
  colorValue: string;
}

const ColorBox: FC<ColorBoxProps> = ({ colorName, colorValue }) => (
  <div style={{     backgroundColor: colorValue,
    color: '#000',
    padding: '20px',
    margin: '10px',
    border: '1px solid #000',
    borderRadius: '5px' }}>
    <p>{colorName}: {colorValue}</p>
  </div>
);

export const ColorPalette: FC = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '10px' }}>
    {Object.entries(colors).map(([colorName, colorValues]) => (
      Object.entries(colorValues).map(([shade, colorValue]) => (
        <ColorBox key={`${colorName}${shade}`} colorName={`${colorName} ${shade}`} colorValue={colorValue} />
      ))
    ))}
  </div>
);

import { colors } from './colors/colors';
import { layers } from './layers';
import { layout } from './layout';
import { shadows } from './shadows';
import { spacing } from './spacing';
import { typography } from './typography';
import { zIndices } from './z-index';

const foundations = {
  colors,
  ...typography,
  shadows,
  zIndices,
  space: spacing,
  layout,
  layerStyles: layers,
};

export default foundations;

import { CSSProperties } from 'react';
import tailwind from '@theme/foundations/colors/tailwind';
import { colors } from '@theme/foundations/colors/colors';

type HexLetter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

type HexDigit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

type HexPart = HexLetter | HexDigit;


// This means we can have type safety defining a number from 0 to 255 in HEX format.

/** Length: 3 */
type HexCodeShort = `${HexPart}${HexPart}${HexPart}`;

// FIXME: check this tupe HexCodeClassic => to long to compile
//type HexEncodedNumber = `${HexPart}${HexPart}`;
/** Length: 6 */
// type HexCodeClassic = `${HexEncodedNumber}${HexEncodedNumber}${HexEncodedNumber}`; //! Expression produces a union type that is too complex to represent. ts(2590)
// HexCodeClassic evaluates to 'any' type.
/** Length: 8 */
// type HexCodeWithAlpha = `${HexCodeClassic}${HexEncodedNumber}`; // So this is `${any}aa` | `${any}ab` etc.
/** Length: 3 (short) | 6 (classic) | 8 (alpha) */
// type HexCodeModern = HexCodeShort | HexCodeClassic | HexCodeWithAlpha; // Just 'any'.

type HEX = `#${HexCodeShort}`


type ColorParams = `${number}, ${number}, ${number}`
type ColorParamsAlpha = `${ColorParams}, ${number}`
type RGB = `rgb(${ColorParams})`
type RGBA = `rgba(${ColorParamsAlpha})`
type HSL = `hsl(${ColorParams})`
type HSLA = `hsla(${ColorParamsAlpha})`

export type CssGlobals = 'inherit' | 'initial' | 'revert' | 'unset'

// FIXME: why this CSSProperties['color'] accept all strings
export type CssColor = 'currentColor' | 'transparent' | RGB | RGBA | HEX | HSL | HSLA | CssGlobals | CSSProperties['color']

// TODO: why this type is not working
// export type CssColor = Omit<React.ComponentProps<'div'>,'color'>

export type Scheme = keyof typeof colors | keyof typeof tailwind
export type Variant = `${Scheme}.${number}`
export type Color = Variant | CssColor
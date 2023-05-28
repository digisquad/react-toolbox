import {Scheme} from '@theme/types/css';


interface ColorScheme {
    colorScheme: Scheme,

}
const colorScheme = (colorSchemes : Record<Scheme, string>) => ({ colorScheme }: ColorScheme) =>  colorSchemes[colorScheme]  ?? colorSchemes['brand']

export default colorScheme
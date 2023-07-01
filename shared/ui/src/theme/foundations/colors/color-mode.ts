interface ColorMode {
    colorMode: 'light' | 'dark',

}
const colorMode = (colors : string[]) => ({ colorMode }: ColorMode) =>  {
    console.log('colorMode >>', colorMode)
    const modes = {
        [colorMode]: colors[0],
        light: colors[0],
        dark: colors[1] ?? colors[0]
    }

    return modes[colorMode]
}

export default colorMode
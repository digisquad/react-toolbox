import React from 'react';

import { ChakraProvider,  } from '@chakra-ui/react';
import type { ChakraProviderProps } from '@chakra-ui/react'

import theme from '@theme';

const ThemeProvider: React.FC<ChakraProviderProps> = ({ children }) => {
    console.log('here >>', children)
    return (
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>
    );
};


export default ThemeProvider

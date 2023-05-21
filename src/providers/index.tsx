import React from 'react';

import { ChakraProvider, ChakraProviderProps } from '@chakra-ui/react';
import theme from '@theme';

const Providers: React.FC<ChakraProviderProps> = ({ children }) => {
    return (
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>
    );
};

export default Providers

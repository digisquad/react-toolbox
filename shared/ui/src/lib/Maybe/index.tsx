import { FC, ReactElement } from 'react';

interface Props {
    condition: boolean;
    fallback: ReactElement<never, never> | null;
    children: ReactElement
}

const Maybe: FC<Props> = ({ condition, fallback = null, children }) => {
    if (condition) return fallback;

    return children;
};


export default Maybe;

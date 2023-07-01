import { FC, ReactElement } from 'react';

interface Props {
    condition: boolean;
    fallback: ReactElement | null;
}

const withCondition = (Component: FC<any>) => ({ condition, fallback = null, ...props }: Props)  => {
    if (!condition) return fallback;

    return <Component {...props} />;
};


export default withCondition;

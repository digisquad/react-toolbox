import { FC, ReactElement, ReactNode } from 'react';

interface Props {
    condition: boolean;
    fallback?: ReactElement | null;
    children?: ReactNode;
}

const Maybe: FC<Props> = ({ condition, fallback = null, children = null }) => {
    if (!condition) return fallback;

    return <>{children}</>;
};

export default Maybe;

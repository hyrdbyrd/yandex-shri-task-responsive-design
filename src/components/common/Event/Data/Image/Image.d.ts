import { IClassNameProps } from '@bem-react/core';

export interface IDataImage {
    image?: string;
}

export interface IDataImageProps extends
    IDataImage,
    IClassNameProps {
    type: string
}

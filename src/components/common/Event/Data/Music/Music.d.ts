import { IClassNameProps } from '@bem-react/core';

export interface IDataMusic {
    albumcover?: string;
    artist?: string;
    track?: {
        name: string;
        length: string;
    },
    volume?: number;
}

export interface IDataMusicProps extends
    IDataMusic,
    IClassNameProps {
    type: string;
}

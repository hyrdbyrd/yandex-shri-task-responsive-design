import { IClassNameProps } from '@bem-react/core';

export interface IDataTemperature {
    temperature?: number;
    humidity?: number;
}

export interface IDataTemperatureProps extends
    IDataTemperature,
    IClassNameProps {
    type: string;
}

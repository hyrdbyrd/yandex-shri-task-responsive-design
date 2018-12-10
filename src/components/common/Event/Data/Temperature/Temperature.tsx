import * as React from 'react';

import './Temperature.sss';
import { IDataTemperatureProps } from './Temperature.d';
import { ModBody } from '@bem-react/core';

export type TemperatureType = ModBody<IDataTemperatureProps>;
export const Temperature: TemperatureType = (Base, props: IDataTemperatureProps) => {
    const { humidity, temperature } = props;
    return <div className='State'>
        <div className='Temperature'>
            Температура:
            <b>{`${temperature} C`}</b>
        </div>
        <div className='Humidity'>
            Влажность: <b>{`${humidity}%`}</b>
        </div>
    </div>
}

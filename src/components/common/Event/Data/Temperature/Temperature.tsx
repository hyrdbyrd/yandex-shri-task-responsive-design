import * as React from 'react';

import './Temperature.sss';
import { IDataTemperature } from './Temperature.d';

export function Temperature(props: { obj: IDataTemperature }) {
    const { obj: data } = props;
    return <div className='State'>
        <div className='Temperature'>
            Температура:
            <b>{`${data.temperature} C`}</b>
        </div>
        <div className='Humidity'>
            Влажность: <b>{`${data.humidity}%`}</b>
        </div>
    </div>
}

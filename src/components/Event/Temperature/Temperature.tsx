import * as React from 'react';
import { IDataTemperature } from './../Event.d';

import './Temperature@simple.sss';

export function Temperature(props: { obj: IDataTemperature }) {
    const { obj: data } = props;

    return <div className='state'>
        <div className='temperature'>
            Температура:
            <b>
                { ` ${data.temperature} C` }
            </b>
        </div>
        <div className='humidity'>
            Влажность:
            <b>
                { ` ${data.humidity}%` }
            </b>
        </div>
    </div>
}
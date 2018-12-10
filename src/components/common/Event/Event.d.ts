import { ReactPropTypes } from 'react';
import { IClassNameProps } from '@bem-react/core';

import { IDataImage } from './Data/Image/Image.d';
import { IDataMusic } from './Data/Music/Music.d';
import { IDataGraph } from './Data/Stats/Stats.d';
import { IDataButtons } from './Data/Buttons/Buttons.d';
import { IDataTemperature } from './Data/Temperature/Temperature.d';

export interface IEventData extends
    IDataGraph,
    IDataImage,
    IDataMusic,
    IDataTemperature,
    IDataButtons {}

export interface IEvent {
    type: string;
    title: string;
    size: string;
    source: string;
    icon: string;
    time: string;
    description?: string;
    data?: IEventData;
}

export interface IEventProps extends
    IEvent,
    IClassNameProps {}

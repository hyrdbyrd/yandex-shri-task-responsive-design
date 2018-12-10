import * as React from 'react';

import './Buttons.sss';
import { IDataButtonsProps } from './Buttons.d';
import { cn } from '@bem-react/classname';
import { ModBody } from '@bem-react/core';

export type ButtonsType = ModBody<IDataButtonsProps>;

export const Buttons: ButtonsType = (Base, props: IDataButtonsProps) => {
    const { buttons } = props;
    const cnButton = cn('Button');

    return <div className='Buttons'>
        <div className={cnButton({ type: 'confirm' })}>
            { buttons[0] }
        </div>
        <div className={cnButton({ type: 'close' })}>
            { buttons[1] }
        </div>
    </div>
}

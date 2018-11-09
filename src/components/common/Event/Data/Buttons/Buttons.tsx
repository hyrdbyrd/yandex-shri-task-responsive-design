import * as React from 'react';

import './Buttons.sss';
import { IDataButtons } from './Buttons.d';
import { cn } from '@bem-react/classname';

export function Buttons(props: { obj: IDataButtons }) {
    const { obj: data } = props;
    const cnButton = cn('Button');

    return <div className='Buttons'>
        <div className={cnButton({ type: 'confirm' })}>
            { data.buttons[0] }
        </div>
        <div className={cnButton({ type: 'close' })}>
            { data.buttons[1] }
        </div>
    </div>
}

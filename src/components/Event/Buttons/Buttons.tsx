import * as React from 'react';
import { IDataButtons } from './../Event.d';

import './Buttons.sss';

export function Buttons(props: { obj: IDataButtons }) {
    const { obj: data } = props;

    return <div className="buttons">
        <div className="button button_type_confirm">
            { data.buttons[0] }
        </div>
        <div className="button button_type_close">
            { data.buttons[1] }
        </div>
    </div>
}

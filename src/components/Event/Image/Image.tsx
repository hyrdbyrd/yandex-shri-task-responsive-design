import * as React from 'react';

import './Image.sss';

export function Image() {
    return <div className="box">
        <div className="box-image-wrapper" style={{ backgroundImage: 'url(assets/cam@x3.png)' }} touch-action='none'>
            <img src="assets/cam@x3.png" className="box__image"/>
        </div>
        <div className="box-options">
            <div className="options__zoom">
                Приближение: 100%
            </div>
            <div className="options__brightness">
                Яркость: 100%
            </div>
            <div className="options__rotate">
                Поворот: 0°
            </div>
        </div>
    </div>
}

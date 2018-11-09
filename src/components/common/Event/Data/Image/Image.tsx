import * as React from 'react';

import './Image.sss';
import { cn } from '@bem-react/classname';

export function Image() {
    const cnImage = cn('Box');
    return <div className={cnImage()}>
        <div className={cnImage() + 'ImageWrapper'} style={{ backgroundImage: 'url(assets/cam@x3.png)' }} touch-action='none'>
            <img src="assets/cam@x3.png" className={cnImage('Image')}/>
        </div>
    </div>
}

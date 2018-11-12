import * as React from 'react';

import '../Video/Video.sss';
import mediaInit from '../Video/Media';
import { cn } from '@bem-react/classname';

// Static page (all dinamic part int function - mediaInit)
export class VideoPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        mediaInit();
    }

    render() {
        // Classnames
        const cnSubNav = cn('SubNav');
        const cnNavs = cn('Navigations');

        return <>
            <div className='Content-Title'>Камеры</div>,
            <div className='Videos'>
                <div className='VideosNavigations'>
                    <div className={cnSubNav()}>
                        <p className={cnSubNav('Title')}>
                            Яркость
                        </p>
                        <input
                            type='range'
                            min='50'
                            max='150'
                            className={cnSubNav('Elem', [cnNavs('Bright')])}
                        />
                        <p className={cnSubNav('Title')}>
                            Контрастность
                        </p>
                        <input
                            type='range'
                            min='50'
                            max='150'
                            className={cnSubNav('Elem', [cnNavs('Contrast')])}
                        />
                        <p className={cnSubNav('Title')}>
                            Уровень освещенности
                        </p>
                        <p className={cnSubNav('Elem', [cnNavs('Brigtness')])}></p>
                    </div>
                    <div className='AllCams'>
                        Все видео
                    </div>
                    <canvas className='Analyser'></canvas>
                </div>
                <video className='video-1 Video' autoPlay={true} muted={true}></video>
                <video className='video-2 Video' autoPlay={true} muted={true}></video>
                <video className='video-3 Video' autoPlay={true} muted={true}></video>
                <video className='video-4 Video' autoPlay={true} muted={true}></video>
            </div>
        </>;
    }
}

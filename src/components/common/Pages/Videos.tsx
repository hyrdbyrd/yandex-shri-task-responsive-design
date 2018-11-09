import * as React from 'react';

import '../Video/Video.sss';
import mediaInit from '../Video/Media';

export class VideoPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        mediaInit();
    }

    render() {
        return <>
            <div className='Content-Title'>Камеры</div>,
            <div className='Videos'>
                <div className='VideosNavigations'>
                    <div className='SubNav'>
                        <p className='SubNav-Title'>
                            Яркость
                        </p>
                        <input
                            type='range'
                            min='50'
                            max='150'
                            className='SubNav-Elem Navigations-Bright'
                        />
                        <p className='SubNav-Title'>
                            Контрастность
                        </p>
                        <input
                            type='range'
                            min='50'
                            max='150'
                            className='SubNav-Elem Navigations-Contrast'
                        />
                        <p className="SubNav-Title">
                            Уровень освещенности
                        </p>
                        <p className="SubNav-Elem Navigations-Brigtness"></p>
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

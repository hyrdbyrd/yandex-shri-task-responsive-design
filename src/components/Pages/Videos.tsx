import * as React from 'react';

import '../Video/Video@simple.sss';
import mediaInit from '../Video/Media';

export default class VideoPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        mediaInit();
    }

    render() {
        return <div className='videos'>
            <div className='videos-navigations'>
                <div className='sub-nav'>
                    <p className='sub-nav__title'>
                        Яркость
                    </p>
                    <input
                        type='range'
                        min='50'
                        max='150'
                        className='sub-nav__elem navigations__bright'
                    />
                    <p className='sub-nav__title'>
                        Контрастность
                    </p>
                    <input
                        type='range'
                        min='50'
                        max='150'
                        className='sub-nav__elem navigations__contrast'
                    />
                    <p className="sub-nav__title">
                        Уровень освещенности
                    </p>
                    <p className="sub-nav__elem navigations__brigtness"></p>
                </div>
                <div className='all-cams'>
                    Все видео
                </div>
                <canvas className='analyser'></canvas>
            </div>
            <video className='video-1 video' autoPlay={true} muted={true}></video>
            <video className='video-2 video' autoPlay={true} muted={true}></video>
            <video className='video-3 video' autoPlay={true} muted={true}></video>
            <video className='video-4 video' autoPlay={true} muted={true}></video>
        </div>
    }
}

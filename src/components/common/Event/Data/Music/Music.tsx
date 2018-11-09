import * as React from 'react';

import './Music.sss';
import { IDataMusic } from './Music.d';
import { cn } from '@bem-react/classname';

export class Music extends React.Component<{ obj: IDataMusic }, IDataMusic> {
    constructor(props: { obj: IDataMusic }) {
        super(props);

        this.state = {
            volume: props.obj.volume,
            track: props.obj.track
        }
    }

    onVolumeChange(event: Event) {
        const target: HTMLElement | any = event.target;

        const val: number = target.value;

        this.setState((state) => ({
            volume: val,
            track: state.track
        }))
    }

    onTrackPosChange(event: Event) {
        const target: HTMLElement | any = event.target;
        const val: string = target.value;

        this.setState((state) => ({
            volume: state.volume,
            track: {
                name: state.track.name,
                length: val
            }
        }));
    }

    render() {
        const data: IDataMusic = this.props.obj;
        const { state } = this;

        const time: string[] = data.track.length.split(':');
        const len: number = +time[0] * 60 + +time[1];

        const cnMusic = cn('Music');
        const cnTrack = cn('Track');
        const cnVolume = cn('Volume');

        return <div className={cnMusic()}>
            <img src={data.albumcover} className={cnMusic('Albumcover')} alt='albumcover'/>
            <header className={cnMusic() + 'Haeder'}>
                <div className={cnMusic('Description')}>
                    { `${data.artist} - ${data.track.name}`.trim() }
                </div>
                <div className={cnTrack()}>
                    <input className={cnMusic(cnTrack())} type='range' min='0' max={len} step='1' value={ state.track.length } onChange={ this.onTrackPosChange.bind(this) }/>
                    <div className={cnTrack('Value')}>
                        { data.track.length }
                    </div>
                </div>
            </header>
            <div className={cnMusic() + 'Nav'}>
                <img src="assets/Prev.svg" className={cnMusic('Prev')}/>
                <img src="assets/Prev.svg" className={cnMusic('Next')} style={{ transform: 'rotate(180deg)' }}/>
                <div className={cnVolume()}>
                    <input type="range" onChange={ this.onVolumeChange.bind(this) } className={cnMusic(cnVolume())} min="0" max="100" step="1" value={state.volume}/>
                    <div className={cnVolume('Value')}>
                        { `${state.volume}%` }
                    </div>
                </div>
            </div>
        </div>
    }
}

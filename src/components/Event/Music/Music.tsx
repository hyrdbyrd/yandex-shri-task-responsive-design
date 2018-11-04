import * as React from 'react';
import { IDataMusic } from './../Event.d';

import './Music@simple.sss';

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

        return <div className='music'>
            <img src={data.albumcover} className='music__albumcover' alt='albumcover'/>
            <header className='music-header'>
                <div className='music__description'>
                    { `${data.artist} - ${data.track.name}`.trim() }
                </div>
                <div className='track'>
                    <input className='music__track' type='range' min='0' max={len} step='1' value={ state.track.length } onChange={ this.onTrackPosChange.bind(this) }/>
                    <div className='track__value'>
                        { data.track.length }
                    </div>
                </div>
            </header>
            <div className="music-nav">
                <img src="assets/Prev.svg" className="music__prev"/>
                <img src="assets/Prev.svg" className="music__next" style={{ transform: 'rotate(180deg)' }}/>
                <div className="volume">
                    <input type="range" onChange={ this.onVolumeChange.bind(this) } className="music__volume" min="0" max="100" step="1" value={state.volume}/>
                    <div className="volume__value">
                        { `${state.volume}%` }
                    </div>
                </div>
            </div>
        </div>
    }
}

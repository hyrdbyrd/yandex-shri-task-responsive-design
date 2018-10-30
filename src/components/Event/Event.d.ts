export interface IDataTemperature {
    temperature?: number;
    humidity?: number;
}

export interface IDataMusic {
    albumcover?: string;
    artist?: string;
    track?: {
        name: string;
        length: string;
    },
    volume?: number;
}

export interface IDataButtons {
    buttons?: string[];
}

export interface IDataImage {
    image?: string;
}

export interface IDataGraph {
    type?: string;
    values?: {
        water?: (string | number)[][];
        gas?: (string | number)[][];
        electricity?: (string | number)[][];
    }[];
}

export interface IEventData extends IDataTemperature, IDataMusic, IDataButtons, IDataImage, IDataGraph {}

export interface IEvent {
    type: string; // info | critical
    title: string;
    size: string; // s | m | l
    source: string;
    icon: string;
    time: string;
    description?: string;
    data?: IEventData;
}

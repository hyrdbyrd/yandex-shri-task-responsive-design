declare interface Location {
    port: string;
    hostname: string;
    protocol: string;
}

declare interface HTMLDivElement {
    requestPointerLock(): void
}

declare interface Document {
    exitPointerLock(): void
}

declare interface IFluxData {
    html: string;
    styleUrl?: string;
    scriptUrl?: string;
}

declare interface Window {
    DocumentTouch: Document;
    AudioContext: typeof AudioContext;
    globalFluxStorage?: IFluxData[] | undefined;
}

declare interface CSSStyleDeclaration {
    webkitLineClamp: string | undefined
}

declare interface IEvents {
    type: string;
}

declare interface IStatuses {
    events: IEvents[];
}

declare const Hls: any;

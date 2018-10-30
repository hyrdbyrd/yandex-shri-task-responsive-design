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

declare interface Window {
    DocumentTouch: Document;
    AudioContext: typeof AudioContext;
    webkitAudioContext: typeof AudioContext;
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

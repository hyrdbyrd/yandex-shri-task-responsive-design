declare interface Document {
    exitPointerLock(): void
}

declare interface Window {
    DocumentTouch: Document
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

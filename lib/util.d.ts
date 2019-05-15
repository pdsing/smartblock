export declare const getScrollTop: () => number;
export declare const getScrollLeft: () => number;
export declare const getOffset: (el: any) => {
    top: any;
    left: any;
};
export declare const getViewport: () => {
    left: number;
    top: number;
    width: number;
    height: number;
    keyboardHeight?: undefined;
} | {
    left: number;
    top: number;
    width: number;
    height: number;
    keyboardHeight: number;
};
export declare const isInput: (el: HTMLElement) => boolean;
export declare const markActive: (type: any) => (state: any) => any;
export declare const blockActive: (type: any) => (state: any) => boolean;
export declare const canInsert: (type: any) => (state: any) => boolean;
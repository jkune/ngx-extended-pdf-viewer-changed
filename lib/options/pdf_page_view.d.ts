/**
 * @implements {IRenderableView}
 */
export interface PDFPageView {
    /**
     * @param {PDFPageViewOptions} options
     */
    id: number;
    renderingId: string;
    pdfPage: any;
    pageLabel: string | null;
    rotation: number;
    scale: number;
    pdfPageRotate: number;
    hasRestrictedScaling: boolean;
    textLayerMode: number;
    imageResourcesPath: string;
    useOnlyCssZoom: boolean;
    isOffscreenCanvasSupported: boolean;
    maxCanvasPixels: any;
    pageColors: Object | null;
    renderer: any;
    l10n: {
        getLanguage(): Promise<string>;
        getDirection(): Promise<string>;
        get(key: any, args?: null, fallback?: any): Promise<any>;
        translate(element: any): Promise<void>;
    };
    paintTask: {
        promise: any;
        onRenderContinue(cont: any): void;
        cancel(extraDelay?: number): void;
        readonly separateAnnots: any;
    } | null;
    paintedViewportMap: WeakMap<object, any>;
    resume: (() => void) | null;
    _renderError: any;
    _isStandalone: boolean | undefined;
    _annotationCanvasMap: any;
    zoomLayer: ParentNode | null;
    structTreeLayer: any;
    div: HTMLDivElement;
    setPdfPage(pdfPage: any): void;
    destroy(): void;
    loadingIconDiv: HTMLDivElement | undefined;
    getPagePoint(x: any, y: any): Object;
    draw(): any;
    canvas: HTMLCanvasElement | undefined;
    svg: any;
    /**
     * @param {string|null} label
     */
    maxWidth: number | undefined;
}

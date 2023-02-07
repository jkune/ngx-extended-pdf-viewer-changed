import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output, ViewChild, } from '@angular/core';
import { pdfDefaultOptions } from './options/pdf-default-options';
import { PdfSidebarView } from './options/pdf-sidebar-views';
import { VerbosityLevel } from './options/verbosity-level';
import { PdfDummyComponentsComponent } from './pdf-dummy-components/pdf-dummy-components.component';
import * as i0 from "@angular/core";
import * as i1 from "./theme/pdf-dark-theme/pdf-dark-theme.component";
import * as i2 from "./theme/pdf-light-theme/pdf-light-theme.component";
import * as i3 from "./dynamic-css/dynamic-css.component";
import * as i4 from "./pdf-dummy-components/pdf-dummy-components.component";
import * as i5 from "@angular/common";
export class NgxExtendedPdfViewerServerComponent {
    constructor() {
        this.customFindbarButtons = undefined;
        this.showFreeFloatingBar = true;
        this.enableDragAndDrop = true;
        this.formData = {};
        this.formDataChange = new EventEmitter();
        this.pageViewMode = 'multiple';
        this.progress = new EventEmitter();
        this.srcChange = new EventEmitter();
        this.scrollMode = undefined;
        this.scrollModeChange = new EventEmitter();
        this.authorization = undefined;
        this.httpHeaders = undefined;
        this.contextMenuAllowed = true;
        this.afterPrint = new EventEmitter();
        this.beforePrint = new EventEmitter();
        this.currentZoomFactor = new EventEmitter();
        this.enablePrint = true;
        /**
         * Number of milliseconds to wait between initializing the PDF viewer and loading the PDF file.
         * Most users can let this parameter safely at it's default value of zero.
         * Set this to 1000 or higher if you run into timing problems (typically caused by loading the locale files
         * after the PDF files, so they are not available when the PDF viewer is initialized).
         */
        this.delayFirstView = 0;
        /** How many log messages should be printed?
         * Legal values: VerbosityLevel.INFOS (= 5), VerbosityLevel.WARNINGS (= 1), VerbosityLevel.ERRORS (= 0) */
        this.logLevel = VerbosityLevel.WARNINGS;
        /** Use the minified (minifiedJSLibraries="true", which is the default) or the user-readable pdf.js library (minifiedJSLibraries="false") */
        this.minifiedJSLibraries = true;
        this.primaryMenuVisible = true;
        /** option to increase (or reduce) print resolution. Default is 150 (dpi). Sensible values
         * are 300, 600, and 1200. Note the increase memory consumption, which may even result in a browser crash. */
        this.printResolution = null;
        this.rotationChange = new EventEmitter();
        this.annotationLayerRendered = new EventEmitter();
        this.annotationEditorLayerRendered = new EventEmitter();
        this.xfaLayerRendered = new EventEmitter();
        this.outlineLoaded = new EventEmitter();
        this.attachmentsloaded = new EventEmitter();
        this.layersloaded = new EventEmitter();
        this.minHeight = undefined;
        /**
         * If this flag is true, this components adds a link to the locale assets. The pdf viewer
         * sees this link and uses it to load the locale files automatically.
         * @param useBrowserLocale boolean
         */
        this.useBrowserLocale = false;
        this.forceUsingLegacyES5 = false;
        this.backgroundColor = '#e8e8eb';
        this.pdfBackground = '#ffffff';
        this.pdfBackgroundColorToReplace = '#ffffff';
        /** Allows the user to define the name of the file after clicking "download" */
        this.filenameForDownload = 'document.pdf';
        /** Allows the user to disable the keyboard bindings completely */
        this.ignoreKeyboard = false;
        /** Allows the user to disable a list of key bindings. */
        this.ignoreKeys = [];
        /** Allows the user to enable a list of key bindings explicitly. If this property is set, every other key binding is ignored. */
        this.acceptKeys = [];
        /** Allows the user to put the viewer's svg images into an arbitrary folder */
        this.imageResourcesPath = './' + pdfDefaultOptions.assetsFolder + '/images/';
        /** Allows the user to put their locale folder into an arbitrary folder */
        this.localeFolderPath = './' + pdfDefaultOptions.assetsFolder + '/locale';
        /** Override the default locale. This must be the complete locale name, such as "es-ES". The string is allowed to be all lowercase.
         */
        this.language = undefined;
        /** By default, listening to the URL is deactivated because often the anchor tag is used for the Angular router */
        this.listenToURL = false;
        /** Navigate to a certain "named destination" */
        this.nameddest = undefined;
        /** allows you to pass a password to read password-protected files */
        this.password = undefined;
        /** pdf.js can show signatures, but fails to verify them. So they are switched off by default.
         * Set "[showUnverifiedSignatures]"="true" to display e-signatures nonetheless.
         */
        this.showUnverifiedSignatures = false;
        this.sidebarVisible = undefined;
        this.sidebarVisibleChange = new EventEmitter();
        this.activeSidebarView = PdfSidebarView.OUTLINE;
        this.activeSidebarViewChange = new EventEmitter();
        this.showFindButton = undefined;
        this.showFindHighlightAll = true;
        this.showFindMatchCase = true;
        this.showFindCurrentPageOnly = true;
        this.showFindPageRange = true;
        this.showFindEntireWord = true;
        this.showFindEntirePhrase = true;
        this.showFindIgnoreAccents = true;
        this.showFindFuzzySearch = true;
        this.showFindResultsCount = true;
        this.showFindMessages = true;
        this.showPagingButtons = true;
        this.showZoomButtons = true;
        this.showPresentationModeButton = false;
        this.showOpenFileButton = true;
        this.showPrintButton = true;
        this.showDownloadButton = true;
        this.theme = 'light';
        this.formTheme = 'light';
        this.showToolbar = true;
        this.showSecondaryToolbarButton = true;
        /** Set by the event (secondaryMenuIsEmpty) */
        this.hideKebabMenuForSecondaryToolbar = false;
        this.showRotateButton = true;
        this.handTool = true;
        this.handToolChange = new EventEmitter();
        this.showHandToolButton = false;
        this.showScrollingButton = true;
        this.showSpreadButton = true;
        this.showPropertiesButton = true;
        this.showBorders = true;
        this.spreadChange = new EventEmitter();
        this.thumbnailDrawn = new EventEmitter();
        this._page = undefined;
        this.pageChange = new EventEmitter();
        this.pageLabel = undefined;
        this.pageLabelChange = new EventEmitter();
        this.pagesLoaded = new EventEmitter();
        this.pageRender = new EventEmitter();
        this.pageRendered = new EventEmitter();
        this.pdfDownloaded = new EventEmitter();
        this.pdfLoaded = new EventEmitter();
        this.pdfLoadingStarts = new EventEmitter();
        this.pdfLoadingFailed = new EventEmitter();
        this.textLayer = undefined;
        this.textLayerRendered = new EventEmitter();
        this.updateFindMatchesCount = new EventEmitter();
        this.updateFindState = new EventEmitter();
        /** Legal values: undefined, 'auto', 'page-actual', 'page-fit', 'page-width', or '50' (or any other percentage) */
        this.zoom = undefined;
        this.zoomChange = new EventEmitter();
        this.zoomLevels = ['auto', 'page-actual', 'page-fit', 'page-width', 0.5, 1, 1.25, 1.5, 2, 3, 4];
        this.maxZoom = 10;
        this.minZoom = 0.1;
        /** This attributes allows you to increase the size of the UI elements so you can use them on small mobile devices.
         * This attribute is a string with a percent character at the end (e.g. "150%").
         */
        this._mobileFriendlyZoom = '100%';
        this.mobileFriendlyZoomScale = 1;
        this.wheelAction = 'scroll';
        this.toolbarMarginTop = '0px';
        this.toolbarWidth = '100%';
        this.toolbarWidthInPixels = 100;
        this.secondaryToolbarTop = undefined;
        // dirty IE11 hack - temporary solution
        this.findbarTop = undefined;
        // dirty IE11 hack - temporary solution
        this.findbarLeft = undefined;
        // Additional PDF Form Field Types #567: Used to store the exported values of radio and checkbox buttons
        this.buttonValues = {};
    }
    set src(url) { }
    set base64Src(base64) { }
    set height(h) { }
    get showSidebarButton() {
        return true;
    }
    set showSidebarButton(show) { }
    get page() {
        return this._page;
    }
    set page(p) { } // NOSONAR
    get mobileFriendlyZoom() {
        return this._mobileFriendlyZoom;
    }
    /**
     * This attributes allows you to increase the size of the UI elements so you can use them on small mobile devices.
     * This attribute is a string with a percent character at the end (e.g. "150%").
     */
    set mobileFriendlyZoom(zoom) { } // NOSONAR
    get sidebarPositionTop() {
        return '32px';
    }
    ngOnChanges(changes) { }
    ngOnInit() { }
    ngAfterViewInit() { }
    ngOnDestroy() { }
    onContextMenu() {
        return this.contextMenuAllowed;
    }
}
NgxExtendedPdfViewerServerComponent.ngxExtendedPdfViewerInitialized = false;
NgxExtendedPdfViewerServerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: NgxExtendedPdfViewerServerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgxExtendedPdfViewerServerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: NgxExtendedPdfViewerServerComponent, selector: "ngx-extended-pdf-viewer", inputs: { customFindbarInputArea: "customFindbarInputArea", customToolbar: "customToolbar", customFindbar: "customFindbar", customFindbarButtons: "customFindbarButtons", customPdfViewer: "customPdfViewer", customSecondaryToolbar: "customSecondaryToolbar", customSidebar: "customSidebar", customThumbnail: "customThumbnail", customFreeFloatingBar: "customFreeFloatingBar", showFreeFloatingBar: "showFreeFloatingBar", enableDragAndDrop: "enableDragAndDrop", formData: "formData", pageViewMode: "pageViewMode", scrollMode: "scrollMode", authorization: "authorization", httpHeaders: "httpHeaders", contextMenuAllowed: "contextMenuAllowed", enablePrint: "enablePrint", delayFirstView: "delayFirstView", showEditor: "showEditor", logLevel: "logLevel", minifiedJSLibraries: "minifiedJSLibraries", printResolution: "printResolution", rotation: "rotation", src: "src", base64Src: "base64Src", minHeight: "minHeight", height: "height", useBrowserLocale: "useBrowserLocale", forceUsingLegacyES5: "forceUsingLegacyES5", backgroundColor: "backgroundColor", pdfBackground: "pdfBackground", pdfBackgroundColorToReplace: "pdfBackgroundColorToReplace", filenameForDownload: "filenameForDownload", ignoreKeyboard: "ignoreKeyboard", ignoreKeys: "ignoreKeys", acceptKeys: "acceptKeys", imageResourcesPath: "imageResourcesPath", localeFolderPath: "localeFolderPath", language: "language", listenToURL: "listenToURL", nameddest: "nameddest", password: "password", replaceBrowserPrint: "replaceBrowserPrint", showUnverifiedSignatures: "showUnverifiedSignatures", startTabindex: "startTabindex", showSidebarButton: "showSidebarButton", sidebarVisible: "sidebarVisible", activeSidebarView: "activeSidebarView", showFindButton: "showFindButton", showFindHighlightAll: "showFindHighlightAll", showFindMatchCase: "showFindMatchCase", showFindCurrentPageOnly: "showFindCurrentPageOnly", showFindPageRange: "showFindPageRange", showFindEntireWord: "showFindEntireWord", showFindEntirePhrase: "showFindEntirePhrase", showFindIgnoreAccents: "showFindIgnoreAccents", showFindFuzzySearch: "showFindFuzzySearch", showFindResultsCount: "showFindResultsCount", showFindMessages: "showFindMessages", showPagingButtons: "showPagingButtons", showZoomButtons: "showZoomButtons", showPresentationModeButton: "showPresentationModeButton", showOpenFileButton: "showOpenFileButton", showPrintButton: "showPrintButton", showDownloadButton: "showDownloadButton", theme: "theme", formTheme: "formTheme", showToolbar: "showToolbar", showSecondaryToolbarButton: "showSecondaryToolbarButton", showRotateButton: "showRotateButton", handTool: "handTool", showHandToolButton: "showHandToolButton", showScrollingButton: "showScrollingButton", showSpreadButton: "showSpreadButton", showPropertiesButton: "showPropertiesButton", showBorders: "showBorders", spread: "spread", page: "page", pageLabel: "pageLabel", textLayer: "textLayer", zoom: "zoom", zoomLevels: "zoomLevels", maxZoom: "maxZoom", minZoom: "minZoom", wheelAction: "wheelAction", mobileFriendlyZoom: "mobileFriendlyZoom" }, outputs: { formDataChange: "formDataChange", progress: "progress", srcChange: "srcChange", scrollModeChange: "scrollModeChange", afterPrint: "afterPrint", beforePrint: "beforePrint", currentZoomFactor: "currentZoomFactor", rotationChange: "rotationChange", annotationLayerRendered: "annotationLayerRendered", annotationEditorLayerRendered: "annotationEditorLayerRendered", xfaLayerRendered: "xfaLayerRendered", outlineLoaded: "outlineLoaded", attachmentsloaded: "attachmentsloaded", layersloaded: "layersloaded", sidebarVisibleChange: "sidebarVisibleChange", activeSidebarViewChange: "activeSidebarViewChange", handToolChange: "handToolChange", spreadChange: "spreadChange", thumbnailDrawn: "thumbnailDrawn", pageChange: "pageChange", pageLabelChange: "pageLabelChange", pagesLoaded: "pagesLoaded", pageRender: "pageRender", pageRendered: "pageRendered", pdfDownloaded: "pdfDownloaded", pdfLoaded: "pdfLoaded", pdfLoadingStarts: "pdfLoadingStarts", pdfLoadingFailed: "pdfLoadingFailed", textLayerRendered: "textLayerRendered", updateFindMatchesCount: "updateFindMatchesCount", updateFindState: "updateFindState", zoomChange: "zoomChange" }, host: { listeners: { "contextmenu": "onContextMenu()" } }, viewQueries: [{ propertyName: "dummyComponents", first: true, predicate: PdfDummyComponentsComponent, descendants: true }, { propertyName: "root", first: true, predicate: ["root"], descendants: true }, { propertyName: "secondaryToolbarComponent", first: true, predicate: ["pdfSecondaryToolbarComponent"], descendants: true }, { propertyName: "sidebarComponent", first: true, predicate: ["pdfsidebar"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<link *ngIf=\"useBrowserLocale\" rel=\"resource\" type=\"application/l10n\" [attr.xhref]=\"localeFolderPath+'/locale.properties'\" origin=\"ngx-extended-pdf-viewer\" />\r\n<pdf-dark-theme *ngIf=\"theme==='dark'\"></pdf-dark-theme>\r\n<pdf-light-theme *ngIf=\"theme==='light'\"></pdf-light-theme>\r\n\r\n<pdf-dynamic-css [zoom]=\"mobileFriendlyZoomScale\" [width]=\"toolbarWidthInPixels\"></pdf-dynamic-css>\r\n<div class=\"zoom\" [style.height]=\"height\">\r\n  <div class=\"html\">\r\n    <div id=\"mainContainer\">\r\n      <pdf-dummy-components></pdf-dummy-components>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #defaultFreeFloatingBar>\r\n\r\n</ng-template>\r\n", components: [{ type: i1.PdfDarkThemeComponent, selector: "pdf-dark-theme" }, { type: i2.PdfLightThemeComponent, selector: "pdf-light-theme" }, { type: i3.DynamicCssComponent, selector: "pdf-dynamic-css", inputs: ["zoom", "width"] }, { type: i4.PdfDummyComponentsComponent, selector: "pdf-dummy-components" }], directives: [{ type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: NgxExtendedPdfViewerServerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-extended-pdf-viewer', changeDetection: ChangeDetectionStrategy.OnPush, template: "<link *ngIf=\"useBrowserLocale\" rel=\"resource\" type=\"application/l10n\" [attr.xhref]=\"localeFolderPath+'/locale.properties'\" origin=\"ngx-extended-pdf-viewer\" />\r\n<pdf-dark-theme *ngIf=\"theme==='dark'\"></pdf-dark-theme>\r\n<pdf-light-theme *ngIf=\"theme==='light'\"></pdf-light-theme>\r\n\r\n<pdf-dynamic-css [zoom]=\"mobileFriendlyZoomScale\" [width]=\"toolbarWidthInPixels\"></pdf-dynamic-css>\r\n<div class=\"zoom\" [style.height]=\"height\">\r\n  <div class=\"html\">\r\n    <div id=\"mainContainer\">\r\n      <pdf-dummy-components></pdf-dummy-components>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #defaultFreeFloatingBar>\r\n\r\n</ng-template>\r\n" }]
        }], propDecorators: { dummyComponents: [{
                type: ViewChild,
                args: [PdfDummyComponentsComponent]
            }], root: [{
                type: ViewChild,
                args: ['root']
            }], customFindbarInputArea: [{
                type: Input
            }], customToolbar: [{
                type: Input
            }], customFindbar: [{
                type: Input
            }], customFindbarButtons: [{
                type: Input
            }], customPdfViewer: [{
                type: Input
            }], customSecondaryToolbar: [{
                type: Input
            }], customSidebar: [{
                type: Input
            }], customThumbnail: [{
                type: Input
            }], customFreeFloatingBar: [{
                type: Input
            }], showFreeFloatingBar: [{
                type: Input
            }], enableDragAndDrop: [{
                type: Input
            }], formData: [{
                type: Input
            }], formDataChange: [{
                type: Output
            }], pageViewMode: [{
                type: Input
            }], progress: [{
                type: Output
            }], secondaryToolbarComponent: [{
                type: ViewChild,
                args: ['pdfSecondaryToolbarComponent']
            }], sidebarComponent: [{
                type: ViewChild,
                args: ['pdfsidebar']
            }], srcChange: [{
                type: Output
            }], scrollMode: [{
                type: Input
            }], scrollModeChange: [{
                type: Output
            }], authorization: [{
                type: Input
            }], httpHeaders: [{
                type: Input
            }], contextMenuAllowed: [{
                type: Input
            }], afterPrint: [{
                type: Output
            }], beforePrint: [{
                type: Output
            }], currentZoomFactor: [{
                type: Output
            }], enablePrint: [{
                type: Input
            }], delayFirstView: [{
                type: Input
            }], showEditor: [{
                type: Input
            }], logLevel: [{
                type: Input
            }], minifiedJSLibraries: [{
                type: Input
            }], printResolution: [{
                type: Input
            }], rotation: [{
                type: Input
            }], rotationChange: [{
                type: Output
            }], annotationLayerRendered: [{
                type: Output
            }], annotationEditorLayerRendered: [{
                type: Output
            }], xfaLayerRendered: [{
                type: Output
            }], outlineLoaded: [{
                type: Output
            }], attachmentsloaded: [{
                type: Output
            }], layersloaded: [{
                type: Output
            }], src: [{
                type: Input
            }], base64Src: [{
                type: Input
            }], minHeight: [{
                type: Input
            }], height: [{
                type: Input
            }], useBrowserLocale: [{
                type: Input
            }], forceUsingLegacyES5: [{
                type: Input
            }], backgroundColor: [{
                type: Input
            }], pdfBackground: [{
                type: Input
            }], pdfBackgroundColorToReplace: [{
                type: Input
            }], filenameForDownload: [{
                type: Input
            }], ignoreKeyboard: [{
                type: Input
            }], ignoreKeys: [{
                type: Input
            }], acceptKeys: [{
                type: Input
            }], imageResourcesPath: [{
                type: Input
            }], localeFolderPath: [{
                type: Input
            }], language: [{
                type: Input
            }], listenToURL: [{
                type: Input
            }], nameddest: [{
                type: Input
            }], password: [{
                type: Input
            }], replaceBrowserPrint: [{
                type: Input
            }], showUnverifiedSignatures: [{
                type: Input
            }], startTabindex: [{
                type: Input
            }], showSidebarButton: [{
                type: Input
            }], sidebarVisible: [{
                type: Input
            }], sidebarVisibleChange: [{
                type: Output
            }], activeSidebarView: [{
                type: Input
            }], activeSidebarViewChange: [{
                type: Output
            }], showFindButton: [{
                type: Input
            }], showFindHighlightAll: [{
                type: Input
            }], showFindMatchCase: [{
                type: Input
            }], showFindCurrentPageOnly: [{
                type: Input
            }], showFindPageRange: [{
                type: Input
            }], showFindEntireWord: [{
                type: Input
            }], showFindEntirePhrase: [{
                type: Input
            }], showFindIgnoreAccents: [{
                type: Input
            }], showFindFuzzySearch: [{
                type: Input
            }], showFindResultsCount: [{
                type: Input
            }], showFindMessages: [{
                type: Input
            }], showPagingButtons: [{
                type: Input
            }], showZoomButtons: [{
                type: Input
            }], showPresentationModeButton: [{
                type: Input
            }], showOpenFileButton: [{
                type: Input
            }], showPrintButton: [{
                type: Input
            }], showDownloadButton: [{
                type: Input
            }], theme: [{
                type: Input
            }], formTheme: [{
                type: Input
            }], showToolbar: [{
                type: Input
            }], showSecondaryToolbarButton: [{
                type: Input
            }], showRotateButton: [{
                type: Input
            }], handTool: [{
                type: Input
            }], handToolChange: [{
                type: Output
            }], showHandToolButton: [{
                type: Input
            }], showScrollingButton: [{
                type: Input
            }], showSpreadButton: [{
                type: Input
            }], showPropertiesButton: [{
                type: Input
            }], showBorders: [{
                type: Input
            }], spread: [{
                type: Input
            }], spreadChange: [{
                type: Output
            }], thumbnailDrawn: [{
                type: Output
            }], page: [{
                type: Input
            }], pageChange: [{
                type: Output
            }], pageLabel: [{
                type: Input
            }], pageLabelChange: [{
                type: Output
            }], pagesLoaded: [{
                type: Output
            }], pageRender: [{
                type: Output
            }], pageRendered: [{
                type: Output
            }], pdfDownloaded: [{
                type: Output
            }], pdfLoaded: [{
                type: Output
            }], pdfLoadingStarts: [{
                type: Output
            }], pdfLoadingFailed: [{
                type: Output
            }], textLayer: [{
                type: Input
            }], textLayerRendered: [{
                type: Output
            }], updateFindMatchesCount: [{
                type: Output
            }], updateFindState: [{
                type: Output
            }], zoom: [{
                type: Input
            }], zoomChange: [{
                type: Output
            }], zoomLevels: [{
                type: Input
            }], maxZoom: [{
                type: Input
            }], minZoom: [{
                type: Input
            }], wheelAction: [{
                type: Input
            }], mobileFriendlyZoom: [{
                type: Input
            }], onContextMenu: [{
                type: HostListener,
                args: ['contextmenu']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWV4dGVuZGVkLXBkZi12aWV3ZXItc2VydmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXItc2VydmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXItc2VydmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUVULFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFHTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFvQnZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUU3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdURBQXVELENBQUM7Ozs7Ozs7QUFTcEcsTUFBTSxPQUFPLG1DQUFtQztJQUxoRDtRQThCUyx5QkFBb0IsR0FBaUMsU0FBUyxDQUFDO1FBa0IvRCx3QkFBbUIsR0FBRyxJQUFJLENBQUM7UUFHM0Isc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBR3pCLGFBQVEsR0FBaUIsRUFBRSxDQUFDO1FBRzVCLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQWdCLENBQUM7UUFHbEQsaUJBQVksR0FBdUQsVUFBVSxDQUFDO1FBRzlFLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztRQVNoRCxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUd2QyxlQUFVLEdBQStC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RHJCLE1BQU07Z0JBS0EsSUFBSTtzQkFEVixLQUFLO2dCQUlDLFVBQVU7c0JBRGhCLE1BQU07Z0JBSUEsVUFBVTtzQkFEaEIsS0FBSztnQkFJQyxPQUFPO3NCQURiLEtBQUs7Z0JBSUMsT0FBTztzQkFEYixLQUFLO2dCQVdDLFdBQVc7c0JBRGpCLEtBQUs7Z0JBNEJLLGtCQUFrQjtzQkFENUIsS0FBSztnQkFnQkMsYUFBYTtzQkFEbkIsWUFBWTt1QkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbm5vdGF0aW9uRWRpdG9yTGF5ZXJSZW5kZXJlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvYW5ub3RhdGlvbi1lZGl0b3ItbGF5ZXItcmVuZGVyZWQtZXZlbnQnO1xyXG5pbXBvcnQgeyBBbm5vdGF0aW9uTGF5ZXJSZW5kZXJlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvYW5ub3RhdGlvbi1sYXllci1yZW5kZXJlZC1ldmVudCc7XHJcbmltcG9ydCB7IEF0dGFjaG1lbnRMb2FkZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL2F0dGFjaG1lbnQtbG9hZGVkLWV2ZW50JztcclxuXHJcbmltcG9ydCB7IEZpbmRSZXN1bHRNYXRjaGVzQ291bnQsIEZpbmRTdGF0ZSB9IGZyb20gJy4vZXZlbnRzL2ZpbmQtcmVzdWx0JztcclxuaW1wb3J0IHsgTGF5ZXJzTG9hZGVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9sYXllcnMtbG9hZGVkLWV2ZW50JztcclxuaW1wb3J0IHsgT3V0bGluZUxvYWRlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvb3V0bGluZS1sb2FkZWQtZXZlbnQnO1xyXG5pbXBvcnQgeyBQYWdlUmVuZGVyRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9wYWdlLXJlbmRlci1ldmVudCc7XHJcbmltcG9ydCB7IFBhZ2VSZW5kZXJlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvcGFnZS1yZW5kZXJlZC1ldmVudCc7XHJcbmltcG9ydCB7IFBhZ2VzTG9hZGVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9wYWdlcy1sb2FkZWQtZXZlbnQnO1xyXG5pbXBvcnQgeyBQZGZEb3dubG9hZGVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9wZGYtZG93bmxvYWRlZC1ldmVudCc7XHJcbmltcG9ydCB7IFBkZkxvYWRlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvcGRmLWxvYWRlZC1ldmVudCc7XHJcbmltcG9ydCB7IFBkZkxvYWRpbmdTdGFydHNFdmVudCB9IGZyb20gJy4vZXZlbnRzL3BkZi1sb2FkaW5nLXN0YXJ0cy1ldmVudCc7XHJcbmltcG9ydCB7IFBkZlRodW1ibmFpbERyYXduRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9wZGYtdGh1bWJuYWlsLWRyYXduLWV2ZW50JztcclxuaW1wb3J0IHsgUHJvZ3Jlc3NCYXJFdmVudCB9IGZyb20gJy4vZXZlbnRzL3Byb2dyZXNzLWJhci1ldmVudCc7XHJcbmltcG9ydCB7IFRleHRMYXllclJlbmRlcmVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy90ZXh0bGF5ZXItcmVuZGVyZWQnO1xyXG5pbXBvcnQgeyBYZmFMYXllclJlbmRlcmVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy94ZmEtbGF5ZXItcmVuZGVyZWQtZXZlbnQnO1xyXG5pbXBvcnQgeyBGb3JtRGF0YVR5cGUgfSBmcm9tICcuL25neC1leHRlbmRlZC1wZGYtdmlld2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkJhY2tncm91bmQgfSBmcm9tICcuL29wdGlvbnMvcGRmLWJhY2tncm91bmQnO1xyXG5pbXBvcnQgeyBwZGZEZWZhdWx0T3B0aW9ucyB9IGZyb20gJy4vb3B0aW9ucy9wZGYtZGVmYXVsdC1vcHRpb25zJztcclxuaW1wb3J0IHsgUGRmU2lkZWJhclZpZXcgfSBmcm9tICcuL29wdGlvbnMvcGRmLXNpZGViYXItdmlld3MnO1xyXG5pbXBvcnQgeyBTY3JvbGxNb2RlVHlwZSB9IGZyb20gJy4vb3B0aW9ucy9wZGYtdmlld2VyJztcclxuaW1wb3J0IHsgVmVyYm9zaXR5TGV2ZWwgfSBmcm9tICcuL29wdGlvbnMvdmVyYm9zaXR5LWxldmVsJztcclxuaW1wb3J0IHsgUGRmRHVtbXlDb21wb25lbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9wZGYtZHVtbXktY29tcG9uZW50cy9wZGYtZHVtbXktY29tcG9uZW50cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9zZWNvbmRhcnktdG9vbGJhci9wZGYtc2Vjb25kYXJ5LXRvb2xiYXIvcGRmLXNlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlNpZGViYXJDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXIvcGRmLXNpZGViYXIvcGRmLXNpZGViYXIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci1zZXJ2ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJTZXJ2ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBwdWJsaWMgc3RhdGljIG5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGR1bW15IGNvbXBvbmVudHMgYXJlIGluc2VydGVkIGF1dG9tYXRpY2FsbHkgd2hlbiB0aGUgdXNlciBjdXN0b21pemVzIHRoZSB0b29sYmFyXHJcbiAgICogd2l0aG91dCBhZGRpbmcgZXZlcnkgb3JpZ2luYWwgdG9vbGJhciBpdGVtLiBXaXRob3V0IHRoZSBkdW1teSBjb21wb25lbnRzLCB0aGVcclxuICAgKiBpbml0aWFsaXphdGlvbiBjb2RlIG9mIHBkZi5qcyBjcmFzaGVzIGJlY2F1c2UgaXQgYXNzdW1lIHRoYXQgZXZlcnkgc3RhbmRhcmQgd2lkZ2V0IGlzIHRoZXJlLlxyXG4gICAqL1xyXG4gIEBWaWV3Q2hpbGQoUGRmRHVtbXlDb21wb25lbnRzQ29tcG9uZW50KVxyXG4gIHB1YmxpYyBkdW1teUNvbXBvbmVudHM6IFBkZkR1bW15Q29tcG9uZW50c0NvbXBvbmVudDtcclxuXHJcbiAgQFZpZXdDaGlsZCgncm9vdCcpXHJcbiAgcHVibGljIHJvb3Q6IEVsZW1lbnRSZWY7XHJcblxyXG4gIC8qIFVJIHRlbXBsYXRlcyAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbUZpbmRiYXJJbnB1dEFyZWE6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbVRvb2xiYXI6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbUZpbmRiYXI6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbUZpbmRiYXJCdXR0b25zOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjdXN0b21QZGZWaWV3ZXI6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbVNlY29uZGFyeVRvb2xiYXI6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbVNpZGViYXI6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbVRodW1ibmFpbDogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY3VzdG9tRnJlZUZsb2F0aW5nQmFyOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RnJlZUZsb2F0aW5nQmFyID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZW5hYmxlRHJhZ0FuZERyb3AgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBmb3JtRGF0YTogRm9ybURhdGFUeXBlID0ge307XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBmb3JtRGF0YUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9ybURhdGFUeXBlPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBwYWdlVmlld01vZGU6ICdzaW5nbGUnIHwgJ2Jvb2snIHwgJ211bHRpcGxlJyB8ICdpbmZpbml0ZS1zY3JvbGwnID0gJ211bHRpcGxlJztcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHByb2dyZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxQcm9ncmVzc0JhckV2ZW50PigpO1xyXG5cclxuICBAVmlld0NoaWxkKCdwZGZTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50JylcclxuICBwcml2YXRlIHNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQ6IFBkZlNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQ7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3BkZnNpZGViYXInKVxyXG4gIHByaXZhdGUgc2lkZWJhckNvbXBvbmVudDogUGRmU2lkZWJhckNvbXBvbmVudDtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHNyY0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzY3JvbGxNb2RlOiBTY3JvbGxNb2RlVHlwZSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHNjcm9sbE1vZGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFNjcm9sbE1vZGVUeXBlPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBhdXRob3JpemF0aW9uOiBPYmplY3QgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGh0dHBIZWFkZXJzOiBPYmplY3QgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGNvbnRleHRNZW51QWxsb3dlZCA9IHRydWU7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBhZnRlclByaW50ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgYmVmb3JlUHJpbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBjdXJyZW50Wm9vbUZhY3RvciA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBlbmFibGVQcmludCA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIE51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gd2FpdCBiZXR3ZWVuIGluaXRpYWxpemluZyB0aGUgUERGIHZpZXdlciBhbmQgbG9hZGluZyB0aGUgUERGIGZpbGUuXHJcbiAgICogTW9zdCB1c2VycyBjYW4gbGV0IHRoaXMgcGFyYW1ldGVyIHNhZmVseSBhdCBpdCdzIGRlZmF1bHQgdmFsdWUgb2YgemVyby5cclxuICAgKiBTZXQgdGhpcyB0byAxMDAwIG9yIGhpZ2hlciBpZiB5b3UgcnVuIGludG8gdGltaW5nIHByb2JsZW1zICh0eXBpY2FsbHkgY2F1c2VkIGJ5IGxvYWRpbmcgdGhlIGxvY2FsZSBmaWxlc1xyXG4gICAqIGFmdGVyIHRoZSBQREYgZmlsZXMsIHNvIHRoZXkgYXJlIG5vdCBhdmFpbGFibGUgd2hlbiB0aGUgUERGIHZpZXdlciBpcyBpbml0aWFsaXplZCkuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZGVsYXlGaXJzdFZpZXcgPSAwO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RWRpdG9yOiBib29sZWFuO1xyXG5cclxuICAvKiogc3RvcmUgdGhlIHRpbWVvdXQgaWQgc28gaXQgY2FuIGJlIGNhbmNlbGVkIGlmIHVzZXIgbGVhdmVzIHRoZSBwYWdlIGJlZm9yZSB0aGUgUERGIGlzIHNob3duICovXHJcbiAgcHJpdmF0ZSBpbml0VGltZW91dDogYW55O1xyXG5cclxuICAvKiogSG93IG1hbnkgbG9nIG1lc3NhZ2VzIHNob3VsZCBiZSBwcmludGVkP1xyXG4gICAqIExlZ2FsIHZhbHVlczogVmVyYm9zaXR5TGV2ZWwuSU5GT1MgKD0gNSksIFZlcmJvc2l0eUxldmVsLldBUk5JTkdTICg9IDEpLCBWZXJib3NpdHlMZXZlbC5FUlJPUlMgKD0gMCkgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBsb2dMZXZlbCA9IFZlcmJvc2l0eUxldmVsLldBUk5JTkdTO1xyXG5cclxuICAvKiogVXNlIHRoZSBtaW5pZmllZCAobWluaWZpZWRKU0xpYnJhcmllcz1cInRydWVcIiwgd2hpY2ggaXMgdGhlIGRlZmF1bHQpIG9yIHRoZSB1c2VyLXJlYWRhYmxlIHBkZi5qcyBsaWJyYXJ5IChtaW5pZmllZEpTTGlicmFyaWVzPVwiZmFsc2VcIikgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBtaW5pZmllZEpTTGlicmFyaWVzID0gdHJ1ZTtcclxuXHJcbiAgcHVibGljIHByaW1hcnlNZW51VmlzaWJsZSA9IHRydWU7XHJcblxyXG4gIC8qKiBvcHRpb24gdG8gaW5jcmVhc2UgKG9yIHJlZHVjZSkgcHJpbnQgcmVzb2x1dGlvbi4gRGVmYXVsdCBpcyAxNTAgKGRwaSkuIFNlbnNpYmxlIHZhbHVlc1xyXG4gICAqIGFyZSAzMDAsIDYwMCwgYW5kIDEyMDAuIE5vdGUgdGhlIGluY3JlYXNlIG1lbW9yeSBjb25zdW1wdGlvbiwgd2hpY2ggbWF5IGV2ZW4gcmVzdWx0IGluIGEgYnJvd3NlciBjcmFzaC4gKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBwcmludFJlc29sdXRpb24gPSBudWxsO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyByb3RhdGlvbjogMCB8IDkwIHwgMTgwIHwgMjcwO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcm90YXRpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPDAgfCA5MCB8IDE4MCB8IDI3MD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGFubm90YXRpb25MYXllclJlbmRlcmVkID0gbmV3IEV2ZW50RW1pdHRlcjxBbm5vdGF0aW9uTGF5ZXJSZW5kZXJlZEV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgYW5ub3RhdGlvbkVkaXRvckxheWVyUmVuZGVyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEFubm90YXRpb25FZGl0b3JMYXllclJlbmRlcmVkRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyB4ZmFMYXllclJlbmRlcmVkID0gbmV3IEV2ZW50RW1pdHRlcjxYZmFMYXllclJlbmRlcmVkRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBvdXRsaW5lTG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxPdXRsaW5lTG9hZGVkRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBhdHRhY2htZW50c2xvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8QXR0YWNobWVudExvYWRlZEV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgbGF5ZXJzbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxMYXllcnNMb2FkZWRFdmVudD4oKTtcclxuXHJcbiAgcHVibGljIGhhc1NpZ25hdHVyZTogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IHNyYyh1cmw6IHN0cmluZyB8IEFycmF5QnVmZmVyIHwgQmxvYiB8IFVpbnQ4QXJyYXkgfCBVUkwgfCB7IHJhbmdlOiBhbnkgfSkge31cclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IGJhc2U2NFNyYyhiYXNlNjQ6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpIHt9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIG1pbkhlaWdodDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgaGVpZ2h0KGg6IHN0cmluZykge31cclxuXHJcbiAgLyoqXHJcbiAgICogSWYgdGhpcyBmbGFnIGlzIHRydWUsIHRoaXMgY29tcG9uZW50cyBhZGRzIGEgbGluayB0byB0aGUgbG9jYWxlIGFzc2V0cy4gVGhlIHBkZiB2aWV3ZXJcclxuICAgKiBzZWVzIHRoaXMgbGluayBhbmQgdXNlcyBpdCB0byBsb2FkIHRoZSBsb2NhbGUgZmlsZXMgYXV0b21hdGljYWxseS5cclxuICAgKiBAcGFyYW0gdXNlQnJvd3NlckxvY2FsZSBib29sZWFuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgdXNlQnJvd3NlckxvY2FsZSA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBmb3JjZVVzaW5nTGVnYWN5RVM1ID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGJhY2tncm91bmRDb2xvciA9ICcjZThlOGViJztcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgcGRmQmFja2dyb3VuZDogUGRmQmFja2dyb3VuZCA9ICcjZmZmZmZmJztcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgcGRmQmFja2dyb3VuZENvbG9yVG9SZXBsYWNlOiBzdHJpbmcgfCAoKHBhZ2U6IG51bWJlciwgcGFnZUxhYmVsOiBzdHJpbmcpID0+IHN0cmluZyB8IHVuZGVmaW5lZCkgfCB1bmRlZmluZWQgPSAnI2ZmZmZmZic7XHJcblxyXG4gIC8qKiBBbGxvd3MgdGhlIHVzZXIgdG8gZGVmaW5lIHRoZSBuYW1lIG9mIHRoZSBmaWxlIGFmdGVyIGNsaWNraW5nIFwiZG93bmxvYWRcIiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGZpbGVuYW1lRm9yRG93bmxvYWQgPSAnZG9jdW1lbnQucGRmJztcclxuXHJcbiAgLyoqIEFsbG93cyB0aGUgdXNlciB0byBkaXNhYmxlIHRoZSBrZXlib2FyZCBiaW5kaW5ncyBjb21wbGV0ZWx5ICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgaWdub3JlS2V5Ym9hcmQgPSBmYWxzZTtcclxuXHJcbiAgLyoqIEFsbG93cyB0aGUgdXNlciB0byBkaXNhYmxlIGEgbGlzdCBvZiBrZXkgYmluZGluZ3MuICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgaWdub3JlS2V5czogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG5cclxuICAvKiogQWxsb3dzIHRoZSB1c2VyIHRvIGVuYWJsZSBhIGxpc3Qgb2Yga2V5IGJpbmRpbmdzIGV4cGxpY2l0bHkuIElmIHRoaXMgcHJvcGVydHkgaXMgc2V0LCBldmVyeSBvdGhlciBrZXkgYmluZGluZyBpcyBpZ25vcmVkLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGFjY2VwdEtleXM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuXHJcbiAgLyoqIEFsbG93cyB0aGUgdXNlciB0byBwdXQgdGhlIHZpZXdlcidzIHN2ZyBpbWFnZXMgaW50byBhbiBhcmJpdHJhcnkgZm9sZGVyICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgaW1hZ2VSZXNvdXJjZXNQYXRoID0gJy4vJyArIHBkZkRlZmF1bHRPcHRpb25zLmFzc2V0c0ZvbGRlciArICcvaW1hZ2VzLyc7XHJcblxyXG4gIC8qKiBBbGxvd3MgdGhlIHVzZXIgdG8gcHV0IHRoZWlyIGxvY2FsZSBmb2xkZXIgaW50byBhbiBhcmJpdHJhcnkgZm9sZGVyICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbG9jYWxlRm9sZGVyUGF0aCA9ICcuLycgKyBwZGZEZWZhdWx0T3B0aW9ucy5hc3NldHNGb2xkZXIgKyAnL2xvY2FsZSc7XHJcblxyXG4gIC8qKiBPdmVycmlkZSB0aGUgZGVmYXVsdCBsb2NhbGUuIFRoaXMgbXVzdCBiZSB0aGUgY29tcGxldGUgbG9jYWxlIG5hbWUsIHN1Y2ggYXMgXCJlcy1FU1wiLiBUaGUgc3RyaW5nIGlzIGFsbG93ZWQgdG8gYmUgYWxsIGxvd2VyY2FzZS5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBsYW5ndWFnZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICAvKiogQnkgZGVmYXVsdCwgbGlzdGVuaW5nIHRvIHRoZSBVUkwgaXMgZGVhY3RpdmF0ZWQgYmVjYXVzZSBvZnRlbiB0aGUgYW5jaG9yIHRhZyBpcyB1c2VkIGZvciB0aGUgQW5ndWxhciByb3V0ZXIgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBsaXN0ZW5Ub1VSTCA9IGZhbHNlO1xyXG5cclxuICAvKiogTmF2aWdhdGUgdG8gYSBjZXJ0YWluIFwibmFtZWQgZGVzdGluYXRpb25cIiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIG5hbWVkZGVzdDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICAvKiogYWxsb3dzIHlvdSB0byBwYXNzIGEgcGFzc3dvcmQgdG8gcmVhZCBwYXNzd29yZC1wcm90ZWN0ZWQgZmlsZXMgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBwYXNzd29yZDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyByZXBsYWNlQnJvd3NlclByaW50OiBib29sZWFuO1xyXG5cclxuICAvKiogcGRmLmpzIGNhbiBzaG93IHNpZ25hdHVyZXMsIGJ1dCBmYWlscyB0byB2ZXJpZnkgdGhlbS4gU28gdGhleSBhcmUgc3dpdGNoZWQgb2ZmIGJ5IGRlZmF1bHQuXHJcbiAgICogU2V0IFwiW3Nob3dVbnZlcmlmaWVkU2lnbmF0dXJlc11cIj1cInRydWVcIiB0byBkaXNwbGF5IGUtc2lnbmF0dXJlcyBub25ldGhlbGVzcy5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93VW52ZXJpZmllZFNpZ25hdHVyZXMgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc3RhcnRUYWJpbmRleDogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG5cclxuICBwdWJsaWMgZ2V0IHNob3dTaWRlYmFyQnV0dG9uKCkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCBzaG93U2lkZWJhckJ1dHRvbihzaG93OiBib29sZWFuKSB7fVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaWRlYmFyVmlzaWJsZTogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHNpZGViYXJWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBhY3RpdmVTaWRlYmFyVmlldzogUGRmU2lkZWJhclZpZXcgPSBQZGZTaWRlYmFyVmlldy5PVVRMSU5FO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgYWN0aXZlU2lkZWJhclZpZXdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFBkZlNpZGViYXJWaWV3PigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZEJ1dHRvbjogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0ZpbmRIaWdobGlnaHRBbGwgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZE1hdGNoQ2FzZSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGaW5kQ3VycmVudFBhZ2VPbmx5ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0ZpbmRQYWdlUmFuZ2UgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZEVudGlyZVdvcmQgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZEVudGlyZVBocmFzZSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGaW5kSWdub3JlQWNjZW50cyA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGaW5kRnV6enlTZWFyY2ggPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZFJlc3VsdHNDb3VudCA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGaW5kTWVzc2FnZXMgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93UGFnaW5nQnV0dG9ucyA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dab29tQnV0dG9ucyA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dQcmVzZW50YXRpb25Nb2RlQnV0dG9uID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dPcGVuRmlsZUJ1dHRvbiA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dQcmludEJ1dHRvbiA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dEb3dubG9hZEJ1dHRvbiA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHRoZW1lOiAnZGFyaycgfCAnbGlnaHQnIHwgJ2N1c3RvbScgPSAnbGlnaHQnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBmb3JtVGhlbWU6ICdkYXJrJyB8ICdsaWdodCcgfCAnY3VzdG9tJyB8IHN0cmluZyA9ICdsaWdodCc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dUb29sYmFyID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1NlY29uZGFyeVRvb2xiYXJCdXR0b24gPSB0cnVlO1xyXG5cclxuICAvKiogU2V0IGJ5IHRoZSBldmVudCAoc2Vjb25kYXJ5TWVudUlzRW1wdHkpICovXHJcbiAgcHVibGljIGhpZGVLZWJhYk1lbnVGb3JTZWNvbmRhcnlUb29sYmFyID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dSb3RhdGVCdXR0b24gPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBoYW5kVG9vbCA9IHRydWU7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBoYW5kVG9vbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0hhbmRUb29sQnV0dG9uID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dTY3JvbGxpbmdCdXR0b24gPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93U3ByZWFkQnV0dG9uID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1Byb3BlcnRpZXNCdXR0b24gPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93Qm9yZGVycyA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNwcmVhZDogJ29mZicgfCAnZXZlbicgfCAnb2RkJztcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHNwcmVhZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8J29mZicgfCAnZXZlbicgfCAnb2RkJz4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHRodW1ibmFpbERyYXduID0gbmV3IEV2ZW50RW1pdHRlcjxQZGZUaHVtYm5haWxEcmF3bkV2ZW50PigpO1xyXG5cclxuICBwcml2YXRlIF9wYWdlOiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIHB1YmxpYyBnZXQgcGFnZSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BhZ2U7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgcGFnZShwOiBudW1iZXIgfCB1bmRlZmluZWQpIHt9IC8vIE5PU09OQVJcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlciB8IHVuZGVmaW5lZD4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgcGFnZUxhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBwYWdlTGFiZWxDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZyB8IHVuZGVmaW5lZD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHBhZ2VzTG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxQYWdlc0xvYWRlZEV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcGFnZVJlbmRlciA9IG5ldyBFdmVudEVtaXR0ZXI8UGFnZVJlbmRlckV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcGFnZVJlbmRlcmVkID0gbmV3IEV2ZW50RW1pdHRlcjxQYWdlUmVuZGVyZWRFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHBkZkRvd25sb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFBkZkRvd25sb2FkZWRFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHBkZkxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8UGRmTG9hZGVkRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBwZGZMb2FkaW5nU3RhcnRzID0gbmV3IEV2ZW50RW1pdHRlcjxQZGZMb2FkaW5nU3RhcnRzRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBwZGZMb2FkaW5nRmFpbGVkID0gbmV3IEV2ZW50RW1pdHRlcjxFcnJvcj4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgdGV4dExheWVyOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgdGV4dExheWVyUmVuZGVyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFRleHRMYXllclJlbmRlcmVkRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyB1cGRhdGVGaW5kTWF0Y2hlc0NvdW50ID0gbmV3IEV2ZW50RW1pdHRlcjxGaW5kUmVzdWx0TWF0Y2hlc0NvdW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgdXBkYXRlRmluZFN0YXRlID0gbmV3IEV2ZW50RW1pdHRlcjxGaW5kU3RhdGU+KCk7XHJcblxyXG4gIC8qKiBMZWdhbCB2YWx1ZXM6IHVuZGVmaW5lZCwgJ2F1dG8nLCAncGFnZS1hY3R1YWwnLCAncGFnZS1maXQnLCAncGFnZS13aWR0aCcsIG9yICc1MCcgKG9yIGFueSBvdGhlciBwZXJjZW50YWdlKSAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHpvb206IHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHpvb21DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZD4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgem9vbUxldmVscyA9IFsnYXV0bycsICdwYWdlLWFjdHVhbCcsICdwYWdlLWZpdCcsICdwYWdlLXdpZHRoJywgMC41LCAxLCAxLjI1LCAxLjUsIDIsIDMsIDRdO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBtYXhab29tID0gMTA7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIG1pblpvb20gPSAwLjE7XHJcblxyXG4gIC8qKiBUaGlzIGF0dHJpYnV0ZXMgYWxsb3dzIHlvdSB0byBpbmNyZWFzZSB0aGUgc2l6ZSBvZiB0aGUgVUkgZWxlbWVudHMgc28geW91IGNhbiB1c2UgdGhlbSBvbiBzbWFsbCBtb2JpbGUgZGV2aWNlcy5cclxuICAgKiBUaGlzIGF0dHJpYnV0ZSBpcyBhIHN0cmluZyB3aXRoIGEgcGVyY2VudCBjaGFyYWN0ZXIgYXQgdGhlIGVuZCAoZS5nLiBcIjE1MCVcIikuXHJcbiAgICovXHJcbiAgcHVibGljIF9tb2JpbGVGcmllbmRseVpvb20gPSAnMTAwJSc7XHJcblxyXG4gIHB1YmxpYyBtb2JpbGVGcmllbmRseVpvb21TY2FsZSA9IDE7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHdoZWVsQWN0aW9uOiAnc2Nyb2xsJyB8ICd6b29tJyB8ICdhbHdheXMtem9vbScgPSAnc2Nyb2xsJztcclxuXHJcbiAgcHVibGljIHRvb2xiYXJNYXJnaW5Ub3AgPSAnMHB4JztcclxuXHJcbiAgcHVibGljIHRvb2xiYXJXaWR0aCA9ICcxMDAlJztcclxuXHJcbiAgcHVibGljIHRvb2xiYXJXaWR0aEluUGl4ZWxzID0gMTAwO1xyXG5cclxuICBwdWJsaWMgc2Vjb25kYXJ5VG9vbGJhclRvcDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICAvLyBkaXJ0eSBJRTExIGhhY2sgLSB0ZW1wb3Jhcnkgc29sdXRpb25cclxuICBwdWJsaWMgZmluZGJhclRvcDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICAvLyBkaXJ0eSBJRTExIGhhY2sgLSB0ZW1wb3Jhcnkgc29sdXRpb25cclxuICBwdWJsaWMgZmluZGJhckxlZnQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgLy8gQWRkaXRpb25hbCBQREYgRm9ybSBGaWVsZCBUeXBlcyAjNTY3OiBVc2VkIHRvIHN0b3JlIHRoZSBleHBvcnRlZCB2YWx1ZXMgb2YgcmFkaW8gYW5kIGNoZWNrYm94IGJ1dHRvbnNcclxuICBwdWJsaWMgYnV0dG9uVmFsdWVzOiBhbnkgPSB7fTtcclxuXHJcbiAgcHVibGljIGdldCBtb2JpbGVGcmllbmRseVpvb20oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbW9iaWxlRnJpZW5kbHlab29tO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBUaGlzIGF0dHJpYnV0ZXMgYWxsb3dzIHlvdSB0byBpbmNyZWFzZSB0aGUgc2l6ZSBvZiB0aGUgVUkgZWxlbWVudHMgc28geW91IGNhbiB1c2UgdGhlbSBvbiBzbWFsbCBtb2JpbGUgZGV2aWNlcy5cclxuICAgKiBUaGlzIGF0dHJpYnV0ZSBpcyBhIHN0cmluZyB3aXRoIGEgcGVyY2VudCBjaGFyYWN0ZXIgYXQgdGhlIGVuZCAoZS5nLiBcIjE1MCVcIikuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IG1vYmlsZUZyaWVuZGx5Wm9vbSh6b29tOiBzdHJpbmcpIHt9IC8vIE5PU09OQVJcclxuXHJcbiAgcHVibGljIGdldCBzaWRlYmFyUG9zaXRpb25Ub3AoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAnMzJweCc7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHt9XHJcblxyXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHt9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NvbnRleHRtZW51JylcclxuICBwdWJsaWMgb25Db250ZXh0TWVudSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRleHRNZW51QWxsb3dlZDtcclxuICB9XHJcbn1cclxuIiwiPGxpbmsgKm5nSWY9XCJ1c2VCcm93c2VyTG9jYWxlXCIgcmVsPVwicmVzb3VyY2VcIiB0eXBlPVwiYXBwbGljYXRpb24vbDEwblwiIFthdHRyLnhocmVmXT1cImxvY2FsZUZvbGRlclBhdGgrJy9sb2NhbGUucHJvcGVydGllcydcIiBvcmlnaW49XCJuZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlclwiIC8+XHJcbjxwZGYtZGFyay10aGVtZSAqbmdJZj1cInRoZW1lPT09J2RhcmsnXCI+PC9wZGYtZGFyay10aGVtZT5cclxuPHBkZi1saWdodC10aGVtZSAqbmdJZj1cInRoZW1lPT09J2xpZ2h0J1wiPjwvcGRmLWxpZ2h0LXRoZW1lPlxyXG5cclxuPHBkZi1keW5hbWljLWNzcyBbem9vbV09XCJtb2JpbGVGcmllbmRseVpvb21TY2FsZVwiIFt3aWR0aF09XCJ0b29sYmFyV2lkdGhJblBpeGVsc1wiPjwvcGRmLWR5bmFtaWMtY3NzPlxyXG48ZGl2IGNsYXNzPVwiem9vbVwiIFtzdHlsZS5oZWlnaHRdPVwiaGVpZ2h0XCI+XHJcbiAgPGRpdiBjbGFzcz1cImh0bWxcIj5cclxuICAgIDxkaXYgaWQ9XCJtYWluQ29udGFpbmVyXCI+XHJcbiAgICAgIDxwZGYtZHVtbXktY29tcG9uZW50cz48L3BkZi1kdW1teS1jb21wb25lbnRzPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPG5nLXRlbXBsYXRlICNkZWZhdWx0RnJlZUZsb2F0aW5nQmFyPlxyXG5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19
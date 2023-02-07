import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, Input, Output, TemplateRef, ViewChild, } from '@angular/core';
import { pdfDefaultOptions } from './options/pdf-default-options';
import { PdfSidebarView } from './options/pdf-sidebar-views';
import { VerbosityLevel } from './options/verbosity-level';
import { PdfDummyComponentsComponent } from './pdf-dummy-components/pdf-dummy-components.component';
import { PdfSecondaryToolbarComponent } from './secondary-toolbar/pdf-secondary-toolbar/pdf-secondary-toolbar.component';
import { PdfSidebarComponent } from './sidebar/pdf-sidebar/pdf-sidebar.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./theme/pdf-dark-theme/pdf-dark-theme.component";
import * as i3 from "./theme/pdf-light-theme/pdf-light-theme.component";
import * as i4 from "./dynamic-css/dynamic-css.component";
import * as i5 from "./pdf-dummy-components/pdf-dummy-components.component";
const _c0 = ["root"];
const _c1 = ["pdfSecondaryToolbarComponent"];
const _c2 = ["pdfsidebar"];
function NgxExtendedPdfViewerServerComponent_link_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "link", 7);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵattribute("xhref", ctx_r0.localeFolderPath + "/locale.properties");
} }
function NgxExtendedPdfViewerServerComponent_pdf_dark_theme_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "pdf-dark-theme");
} }
function NgxExtendedPdfViewerServerComponent_pdf_light_theme_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "pdf-light-theme");
} }
function NgxExtendedPdfViewerServerComponent_ng_template_8_Template(rf, ctx) { }
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
/** @nocollapse */ NgxExtendedPdfViewerServerComponent.ɵfac = function NgxExtendedPdfViewerServerComponent_Factory(t) { return new (t || NgxExtendedPdfViewerServerComponent)(); };
/** @nocollapse */ NgxExtendedPdfViewerServerComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: NgxExtendedPdfViewerServerComponent, selectors: [["ngx-extended-pdf-viewer"]], viewQuery: function NgxExtendedPdfViewerServerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(PdfDummyComponentsComponent, 5);
        i0.ɵɵviewQuery(_c0, 5);
        i0.ɵɵviewQuery(_c1, 5);
        i0.ɵɵviewQuery(_c2, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dummyComponents = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.root = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.secondaryToolbarComponent = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sidebarComponent = _t.first);
    } }, hostBindings: function NgxExtendedPdfViewerServerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("contextmenu", function NgxExtendedPdfViewerServerComponent_contextmenu_HostBindingHandler() { return ctx.onContextMenu(); });
    } }, inputs: { customFindbarInputArea: "customFindbarInputArea", customToolbar: "customToolbar", customFindbar: "customFindbar", customFindbarButtons: "customFindbarButtons", customPdfViewer: "customPdfViewer", customSecondaryToolbar: "customSecondaryToolbar", customSidebar: "customSidebar", customThumbnail: "customThumbnail", customFreeFloatingBar: "customFreeFloatingBar", showFreeFloatingBar: "showFreeFloatingBar", enableDragAndDrop: "enableDragAndDrop", formData: "formData", pageViewMode: "pageViewMode", scrollMode: "scrollMode", authorization: "authorization", httpHeaders: "httpHeaders", contextMenuAllowed: "contextMenuAllowed", enablePrint: "enablePrint", delayFirstView: "delayFirstView", showEditor: "showEditor", logLevel: "logLevel", minifiedJSLibraries: "minifiedJSLibraries", printResolution: "printResolution", rotation: "rotation", src: "src", base64Src: "base64Src", minHeight: "minHeight", height: "height", useBrowserLocale: "useBrowserLocale", forceUsingLegacyES5: "forceUsingLegacyES5", backgroundColor: "backgroundColor", pdfBackground: "pdfBackground", pdfBackgroundColorToReplace: "pdfBackgroundColorToReplace", filenameForDownload: "filenameForDownload", ignoreKeyboard: "ignoreKeyboard", ignoreKeys: "ignoreKeys", acceptKeys: "acceptKeys", imageResourcesPath: "imageResourcesPath", localeFolderPath: "localeFolderPath", language: "language", listenToURL: "listenToURL", nameddest: "nameddest", password: "password", replaceBrowserPrint: "replaceBrowserPrint", showUnverifiedSignatures: "showUnverifiedSignatures", startTabindex: "startTabindex", showSidebarButton: "showSidebarButton", sidebarVisible: "sidebarVisible", activeSidebarView: "activeSidebarView", showFindButton: "showFindButton", showFindHighlightAll: "showFindHighlightAll", showFindMatchCase: "showFindMatchCase", showFindCurrentPageOnly: "showFindCurrentPageOnly", showFindPageRange: "showFindPageRange", showFindEntireWord: "showFindEntireWord", showFindEntirePhrase: "showFindEntirePhrase", showFindIgnoreAccents: "showFindIgnoreAccents", showFindFuzzySearch: "showFindFuzzySearch", showFindResultsCount: "showFindResultsCount", showFindMessages: "showFindMessages", showPagingButtons: "showPagingButtons", showZoomButtons: "showZoomButtons", showPresentationModeButton: "showPresentationModeButton", showOpenFileButton: "showOpenFileButton", showPrintButton: "showPrintButton", showDownloadButton: "showDownloadButton", theme: "theme", formTheme: "formTheme", showToolbar: "showToolbar", showSecondaryToolbarButton: "showSecondaryToolbarButton", showRotateButton: "showRotateButton", handTool: "handTool", showHandToolButton: "showHandToolButton", showScrollingButton: "showScrollingButton", showSpreadButton: "showSpreadButton", showPropertiesButton: "showPropertiesButton", showBorders: "showBorders", spread: "spread", page: "page", pageLabel: "pageLabel", textLayer: "textLayer", zoom: "zoom", zoomLevels: "zoomLevels", maxZoom: "maxZoom", minZoom: "minZoom", wheelAction: "wheelAction", mobileFriendlyZoom: "mobileFriendlyZoom" }, outputs: { formDataChange: "formDataChange", progress: "progress", srcChange: "srcChange", scrollModeChange: "scrollModeChange", afterPrint: "afterPrint", beforePrint: "beforePrint", currentZoomFactor: "currentZoomFactor", rotationChange: "rotationChange", annotationLayerRendered: "annotationLayerRendered", annotationEditorLayerRendered: "annotationEditorLayerRendered", xfaLayerRendered: "xfaLayerRendered", outlineLoaded: "outlineLoaded", attachmentsloaded: "attachmentsloaded", layersloaded: "layersloaded", sidebarVisibleChange: "sidebarVisibleChange", activeSidebarViewChange: "activeSidebarViewChange", handToolChange: "handToolChange", spreadChange: "spreadChange", thumbnailDrawn: "thumbnailDrawn", pageChange: "pageChange", pageLabelChange: "pageLabelChange", pagesLoaded: "pagesLoaded", pageRender: "pageRender", pageRendered: "pageRendered", pdfDownloaded: "pdfDownloaded", pdfLoaded: "pdfLoaded", pdfLoadingStarts: "pdfLoadingStarts", pdfLoadingFailed: "pdfLoadingFailed", textLayerRendered: "textLayerRendered", updateFindMatchesCount: "updateFindMatchesCount", updateFindState: "updateFindState", zoomChange: "zoomChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 10, vars: 7, consts: [["rel", "resource", "type", "application/l10n", "origin", "ngx-extended-pdf-viewer", 4, "ngIf"], [4, "ngIf"], [3, "zoom", "width"], [1, "zoom"], [1, "html"], ["id", "mainContainer"], ["defaultFreeFloatingBar", ""], ["rel", "resource", "type", "application/l10n", "origin", "ngx-extended-pdf-viewer"]], template: function NgxExtendedPdfViewerServerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NgxExtendedPdfViewerServerComponent_link_0_Template, 1, 1, "link", 0);
        i0.ɵɵtemplate(1, NgxExtendedPdfViewerServerComponent_pdf_dark_theme_1_Template, 1, 0, "pdf-dark-theme", 1);
        i0.ɵɵtemplate(2, NgxExtendedPdfViewerServerComponent_pdf_light_theme_2_Template, 1, 0, "pdf-light-theme", 1);
        i0.ɵɵelement(3, "pdf-dynamic-css", 2);
        i0.ɵɵelementStart(4, "div", 3)(5, "div", 4)(6, "div", 5);
        i0.ɵɵelement(7, "pdf-dummy-components");
        i0.ɵɵelementEnd()()();
        i0.ɵɵtemplate(8, NgxExtendedPdfViewerServerComponent_ng_template_8_Template, 0, 0, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.useBrowserLocale);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.theme === "dark");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.theme === "light");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("zoom", ctx.mobileFriendlyZoomScale)("width", ctx.toolbarWidthInPixels);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("height", ctx.height);
    } }, directives: [i1.NgIf, i2.PdfDarkThemeComponent, i3.PdfLightThemeComponent, i4.DynamicCssComponent, i5.PdfDummyComponentsComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxExtendedPdfViewerServerComponent, [{
        type: Component,
        args: [{ selector: 'ngx-extended-pdf-viewer', changeDetection: ChangeDetectionStrategy.OnPush, template: "<link *ngIf=\"useBrowserLocale\" rel=\"resource\" type=\"application/l10n\" [attr.xhref]=\"localeFolderPath+'/locale.properties'\" origin=\"ngx-extended-pdf-viewer\" />\r\n<pdf-dark-theme *ngIf=\"theme==='dark'\"></pdf-dark-theme>\r\n<pdf-light-theme *ngIf=\"theme==='light'\"></pdf-light-theme>\r\n\r\n<pdf-dynamic-css [zoom]=\"mobileFriendlyZoomScale\" [width]=\"toolbarWidthInPixels\"></pdf-dynamic-css>\r\n<div class=\"zoom\" [style.height]=\"height\">\r\n  <div class=\"html\">\r\n    <div id=\"mainContainer\">\r\n      <pdf-dummy-components></pdf-dummy-components>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #defaultFreeFloatingBar>\r\n\r\n</ng-template>\r\n" }]
    }], null, { dummyComponents: [{
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWV4dGVuZGVkLXBkZi12aWV3ZXItc2VydmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXItc2VydmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXItc2VydmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBRU4sV0FBVyxFQUNYLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQW9CdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwyRUFBMkUsQ0FBQztBQUN6SCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7Ozs7Ozs7Ozs7SUN6Q2xGLDBCQUE4Sjs7O0lBQXhGLHVFQUFvRDs7O0lBQzFILGlDQUF3RDs7O0lBQ3hELGtDQUEyRDs7O0FEOEMzRCxNQUFNLE9BQU8sbUNBQW1DO0lBTGhEO1FBOEJTLHlCQUFvQixHQUFpQyxTQUFTLENBQUM7UUFrQi9ELHdCQUFtQixHQUFHLElBQUksQ0FBQztRQUczQixzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFHekIs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S0FBSztZQUlDLFVBQVU7a0JBRGhCLE1BQU07WUFJQSxTQUFTO2tCQURmLEtBQUs7WUFJQyxlQUFlO2tCQURyQixNQUFNO1lBSUEsV0FBVztrQkFEakIsTUFBTTtZQUlBLFVBQVU7a0JBRGhCLE1BQU07WUFJQSxZQUFZO2tCQURsQixNQUFNO1lBSUEsYUFBYTtrQkFEbkIsTUFBTTtZQUlBLFNBQVM7a0JBRGYsTUFBTTtZQUlBLGdCQUFnQjtrQkFEdEIsTUFBTTtZQUlBLGdCQUFnQjtrQkFEdEIsTUFBTTtZQUlBLFNBQVM7a0JBRGYsS0FBSztZQUlDLGlCQUFpQjtrQkFEdkIsTUFBTTtZQUlBLHNCQUFzQjtrQkFENUIsTUFBTTtZQUlBLGVBQWU7a0JBRHJCLE1BQU07WUFLQSxJQUFJO2tCQURWLEtBQUs7WUFJQyxVQUFVO2tCQURoQixNQUFNO1lBSUEsVUFBVTtrQkFEaEIsS0FBSztZQUlDLE9BQU87a0JBRGIsS0FBSztZQUlDLE9BQU87a0JBRGIsS0FBSztZQVdDLFdBQVc7a0JBRGpCLEtBQUs7WUE0Qkssa0JBQWtCO2tCQUQ1QixLQUFLO1lBZ0JDLGFBQWE7a0JBRG5CLFlBQVk7bUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQW5ub3RhdGlvbkVkaXRvckxheWVyUmVuZGVyZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL2Fubm90YXRpb24tZWRpdG9yLWxheWVyLXJlbmRlcmVkLWV2ZW50JztcclxuaW1wb3J0IHsgQW5ub3RhdGlvbkxheWVyUmVuZGVyZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL2Fubm90YXRpb24tbGF5ZXItcmVuZGVyZWQtZXZlbnQnO1xyXG5pbXBvcnQgeyBBdHRhY2htZW50TG9hZGVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9hdHRhY2htZW50LWxvYWRlZC1ldmVudCc7XHJcblxyXG5pbXBvcnQgeyBGaW5kUmVzdWx0TWF0Y2hlc0NvdW50LCBGaW5kU3RhdGUgfSBmcm9tICcuL2V2ZW50cy9maW5kLXJlc3VsdCc7XHJcbmltcG9ydCB7IExheWVyc0xvYWRlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvbGF5ZXJzLWxvYWRlZC1ldmVudCc7XHJcbmltcG9ydCB7IE91dGxpbmVMb2FkZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL291dGxpbmUtbG9hZGVkLWV2ZW50JztcclxuaW1wb3J0IHsgUGFnZVJlbmRlckV2ZW50IH0gZnJvbSAnLi9ldmVudHMvcGFnZS1yZW5kZXItZXZlbnQnO1xyXG5pbXBvcnQgeyBQYWdlUmVuZGVyZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL3BhZ2UtcmVuZGVyZWQtZXZlbnQnO1xyXG5pbXBvcnQgeyBQYWdlc0xvYWRlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvcGFnZXMtbG9hZGVkLWV2ZW50JztcclxuaW1wb3J0IHsgUGRmRG93bmxvYWRlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvcGRmLWRvd25sb2FkZWQtZXZlbnQnO1xyXG5pbXBvcnQgeyBQZGZMb2FkZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL3BkZi1sb2FkZWQtZXZlbnQnO1xyXG5pbXBvcnQgeyBQZGZMb2FkaW5nU3RhcnRzRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9wZGYtbG9hZGluZy1zdGFydHMtZXZlbnQnO1xyXG5pbXBvcnQgeyBQZGZUaHVtYm5haWxEcmF3bkV2ZW50IH0gZnJvbSAnLi9ldmVudHMvcGRmLXRodW1ibmFpbC1kcmF3bi1ldmVudCc7XHJcbmltcG9ydCB7IFByb2dyZXNzQmFyRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9wcm9ncmVzcy1iYXItZXZlbnQnO1xyXG5pbXBvcnQgeyBUZXh0TGF5ZXJSZW5kZXJlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvdGV4dGxheWVyLXJlbmRlcmVkJztcclxuaW1wb3J0IHsgWGZhTGF5ZXJSZW5kZXJlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMveGZhLWxheWVyLXJlbmRlcmVkLWV2ZW50JztcclxuaW1wb3J0IHsgRm9ybURhdGFUeXBlIH0gZnJvbSAnLi9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZCYWNrZ3JvdW5kIH0gZnJvbSAnLi9vcHRpb25zL3BkZi1iYWNrZ3JvdW5kJztcclxuaW1wb3J0IHsgcGRmRGVmYXVsdE9wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMvcGRmLWRlZmF1bHQtb3B0aW9ucyc7XHJcbmltcG9ydCB7IFBkZlNpZGViYXJWaWV3IH0gZnJvbSAnLi9vcHRpb25zL3BkZi1zaWRlYmFyLXZpZXdzJztcclxuaW1wb3J0IHsgU2Nyb2xsTW9kZVR5cGUgfSBmcm9tICcuL29wdGlvbnMvcGRmLXZpZXdlcic7XHJcbmltcG9ydCB7IFZlcmJvc2l0eUxldmVsIH0gZnJvbSAnLi9vcHRpb25zL3ZlcmJvc2l0eS1sZXZlbCc7XHJcbmltcG9ydCB7IFBkZkR1bW15Q29tcG9uZW50c0NvbXBvbmVudCB9IGZyb20gJy4vcGRmLWR1bW15LWNvbXBvbmVudHMvcGRmLWR1bW15LWNvbXBvbmVudHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vc2Vjb25kYXJ5LXRvb2xiYXIvcGRmLXNlY29uZGFyeS10b29sYmFyL3BkZi1zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZTaWRlYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlYmFyL3BkZi1zaWRlYmFyL3BkZi1zaWRlYmFyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1leHRlbmRlZC1wZGYtdmlld2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXItc2VydmVyLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neEV4dGVuZGVkUGRmVmlld2VyU2VydmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgcHVibGljIHN0YXRpYyBuZ3hFeHRlbmRlZFBkZlZpZXdlckluaXRpYWxpemVkID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBkdW1teSBjb21wb25lbnRzIGFyZSBpbnNlcnRlZCBhdXRvbWF0aWNhbGx5IHdoZW4gdGhlIHVzZXIgY3VzdG9taXplcyB0aGUgdG9vbGJhclxyXG4gICAqIHdpdGhvdXQgYWRkaW5nIGV2ZXJ5IG9yaWdpbmFsIHRvb2xiYXIgaXRlbS4gV2l0aG91dCB0aGUgZHVtbXkgY29tcG9uZW50cywgdGhlXHJcbiAgICogaW5pdGlhbGl6YXRpb24gY29kZSBvZiBwZGYuanMgY3Jhc2hlcyBiZWNhdXNlIGl0IGFzc3VtZSB0aGF0IGV2ZXJ5IHN0YW5kYXJkIHdpZGdldCBpcyB0aGVyZS5cclxuICAgKi9cclxuICBAVmlld0NoaWxkKFBkZkR1bW15Q29tcG9uZW50c0NvbXBvbmVudClcclxuICBwdWJsaWMgZHVtbXlDb21wb25lbnRzOiBQZGZEdW1teUNvbXBvbmVudHNDb21wb25lbnQ7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3Jvb3QnKVxyXG4gIHB1YmxpYyByb290OiBFbGVtZW50UmVmO1xyXG5cclxuICAvKiBVSSB0ZW1wbGF0ZXMgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjdXN0b21GaW5kYmFySW5wdXRBcmVhOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjdXN0b21Ub29sYmFyOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjdXN0b21GaW5kYmFyOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjdXN0b21GaW5kYmFyQnV0dG9uczogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY3VzdG9tUGRmVmlld2VyOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjdXN0b21TZWNvbmRhcnlUb29sYmFyOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjdXN0b21TaWRlYmFyOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjdXN0b21UaHVtYm5haWw6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbUZyZWVGbG9hdGluZ0JhcjogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0ZyZWVGbG9hdGluZ0JhciA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGVuYWJsZURyYWdBbmREcm9wID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZm9ybURhdGE6IEZvcm1EYXRhVHlwZSA9IHt9O1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgZm9ybURhdGFDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEZvcm1EYXRhVHlwZT4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgcGFnZVZpZXdNb2RlOiAnc2luZ2xlJyB8ICdib29rJyB8ICdtdWx0aXBsZScgfCAnaW5maW5pdGUtc2Nyb2xsJyA9ICdtdWx0aXBsZSc7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBwcm9ncmVzcyA9IG5ldyBFdmVudEVtaXR0ZXI8UHJvZ3Jlc3NCYXJFdmVudD4oKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgncGRmU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudCcpXHJcbiAgcHJpdmF0ZSBzZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50OiBQZGZTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50O1xyXG5cclxuICBAVmlld0NoaWxkKCdwZGZzaWRlYmFyJylcclxuICBwcml2YXRlIHNpZGViYXJDb21wb25lbnQ6IFBkZlNpZGViYXJDb21wb25lbnQ7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBzcmNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2Nyb2xsTW9kZTogU2Nyb2xsTW9kZVR5cGUgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBzY3JvbGxNb2RlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTY3JvbGxNb2RlVHlwZT4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgYXV0aG9yaXphdGlvbjogT2JqZWN0IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBodHRwSGVhZGVyczogT2JqZWN0IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjb250ZXh0TWVudUFsbG93ZWQgPSB0cnVlO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgYWZ0ZXJQcmludCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGJlZm9yZVByaW50ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgY3VycmVudFpvb21GYWN0b3IgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZW5hYmxlUHJpbnQgPSB0cnVlO1xyXG5cclxuICAvKipcclxuICAgKiBOdW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHdhaXQgYmV0d2VlbiBpbml0aWFsaXppbmcgdGhlIFBERiB2aWV3ZXIgYW5kIGxvYWRpbmcgdGhlIFBERiBmaWxlLlxyXG4gICAqIE1vc3QgdXNlcnMgY2FuIGxldCB0aGlzIHBhcmFtZXRlciBzYWZlbHkgYXQgaXQncyBkZWZhdWx0IHZhbHVlIG9mIHplcm8uXHJcbiAgICogU2V0IHRoaXMgdG8gMTAwMCBvciBoaWdoZXIgaWYgeW91IHJ1biBpbnRvIHRpbWluZyBwcm9ibGVtcyAodHlwaWNhbGx5IGNhdXNlZCBieSBsb2FkaW5nIHRoZSBsb2NhbGUgZmlsZXNcclxuICAgKiBhZnRlciB0aGUgUERGIGZpbGVzLCBzbyB0aGV5IGFyZSBub3QgYXZhaWxhYmxlIHdoZW4gdGhlIFBERiB2aWV3ZXIgaXMgaW5pdGlhbGl6ZWQpLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGRlbGF5Rmlyc3RWaWV3ID0gMDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0VkaXRvcjogYm9vbGVhbjtcclxuXHJcbiAgLyoqIHN0b3JlIHRoZSB0aW1lb3V0IGlkIHNvIGl0IGNhbiBiZSBjYW5jZWxlZCBpZiB1c2VyIGxlYXZlcyB0aGUgcGFnZSBiZWZvcmUgdGhlIFBERiBpcyBzaG93biAqL1xyXG4gIHByaXZhdGUgaW5pdFRpbWVvdXQ6IGFueTtcclxuXHJcbiAgLyoqIEhvdyBtYW55IGxvZyBtZXNzYWdlcyBzaG91bGQgYmUgcHJpbnRlZD9cclxuICAgKiBMZWdhbCB2YWx1ZXM6IFZlcmJvc2l0eUxldmVsLklORk9TICg9IDUpLCBWZXJib3NpdHlMZXZlbC5XQVJOSU5HUyAoPSAxKSwgVmVyYm9zaXR5TGV2ZWwuRVJST1JTICg9IDApICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbG9nTGV2ZWwgPSBWZXJib3NpdHlMZXZlbC5XQVJOSU5HUztcclxuXHJcbiAgLyoqIFVzZSB0aGUgbWluaWZpZWQgKG1pbmlmaWVkSlNMaWJyYXJpZXM9XCJ0cnVlXCIsIHdoaWNoIGlzIHRoZSBkZWZhdWx0KSBvciB0aGUgdXNlci1yZWFkYWJsZSBwZGYuanMgbGlicmFyeSAobWluaWZpZWRKU0xpYnJhcmllcz1cImZhbHNlXCIpICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbWluaWZpZWRKU0xpYnJhcmllcyA9IHRydWU7XHJcblxyXG4gIHB1YmxpYyBwcmltYXJ5TWVudVZpc2libGUgPSB0cnVlO1xyXG5cclxuICAvKiogb3B0aW9uIHRvIGluY3JlYXNlIChvciByZWR1Y2UpIHByaW50IHJlc29sdXRpb24uIERlZmF1bHQgaXMgMTUwIChkcGkpLiBTZW5zaWJsZSB2YWx1ZXNcclxuICAgKiBhcmUgMzAwLCA2MDAsIGFuZCAxMjAwLiBOb3RlIHRoZSBpbmNyZWFzZSBtZW1vcnkgY29uc3VtcHRpb24sIHdoaWNoIG1heSBldmVuIHJlc3VsdCBpbiBhIGJyb3dzZXIgY3Jhc2guICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgcHJpbnRSZXNvbHV0aW9uID0gbnVsbDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgcm90YXRpb246IDAgfCA5MCB8IDE4MCB8IDI3MDtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHJvdGF0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjwwIHwgOTAgfCAxODAgfCAyNzA+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBhbm5vdGF0aW9uTGF5ZXJSZW5kZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8QW5ub3RhdGlvbkxheWVyUmVuZGVyZWRFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGFubm90YXRpb25FZGl0b3JMYXllclJlbmRlcmVkID0gbmV3IEV2ZW50RW1pdHRlcjxBbm5vdGF0aW9uRWRpdG9yTGF5ZXJSZW5kZXJlZEV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgeGZhTGF5ZXJSZW5kZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8WGZhTGF5ZXJSZW5kZXJlZEV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgb3V0bGluZUxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8T3V0bGluZUxvYWRlZEV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgYXR0YWNobWVudHNsb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEF0dGFjaG1lbnRMb2FkZWRFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGxheWVyc2xvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8TGF5ZXJzTG9hZGVkRXZlbnQ+KCk7XHJcblxyXG4gIHB1YmxpYyBoYXNTaWduYXR1cmU6IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCBzcmModXJsOiBzdHJpbmcgfCBBcnJheUJ1ZmZlciB8IEJsb2IgfCBVaW50OEFycmF5IHwgVVJMIHwgeyByYW5nZTogYW55IH0pIHt9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCBiYXNlNjRTcmMoYmFzZTY0OiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSB7fVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBtaW5IZWlnaHQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IGhlaWdodChoOiBzdHJpbmcpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIElmIHRoaXMgZmxhZyBpcyB0cnVlLCB0aGlzIGNvbXBvbmVudHMgYWRkcyBhIGxpbmsgdG8gdGhlIGxvY2FsZSBhc3NldHMuIFRoZSBwZGYgdmlld2VyXHJcbiAgICogc2VlcyB0aGlzIGxpbmsgYW5kIHVzZXMgaXQgdG8gbG9hZCB0aGUgbG9jYWxlIGZpbGVzIGF1dG9tYXRpY2FsbHkuXHJcbiAgICogQHBhcmFtIHVzZUJyb3dzZXJMb2NhbGUgYm9vbGVhblxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHVzZUJyb3dzZXJMb2NhbGUgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZm9yY2VVc2luZ0xlZ2FjeUVTNSA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBiYWNrZ3JvdW5kQ29sb3IgPSAnI2U4ZThlYic7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHBkZkJhY2tncm91bmQ6IFBkZkJhY2tncm91bmQgPSAnI2ZmZmZmZic7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHBkZkJhY2tncm91bmRDb2xvclRvUmVwbGFjZTogc3RyaW5nIHwgKChwYWdlOiBudW1iZXIsIHBhZ2VMYWJlbDogc3RyaW5nKSA9PiBzdHJpbmcgfCB1bmRlZmluZWQpIHwgdW5kZWZpbmVkID0gJyNmZmZmZmYnO1xyXG5cclxuICAvKiogQWxsb3dzIHRoZSB1c2VyIHRvIGRlZmluZSB0aGUgbmFtZSBvZiB0aGUgZmlsZSBhZnRlciBjbGlja2luZyBcImRvd25sb2FkXCIgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBmaWxlbmFtZUZvckRvd25sb2FkID0gJ2RvY3VtZW50LnBkZic7XHJcblxyXG4gIC8qKiBBbGxvd3MgdGhlIHVzZXIgdG8gZGlzYWJsZSB0aGUga2V5Ym9hcmQgYmluZGluZ3MgY29tcGxldGVseSAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGlnbm9yZUtleWJvYXJkID0gZmFsc2U7XHJcblxyXG4gIC8qKiBBbGxvd3MgdGhlIHVzZXIgdG8gZGlzYWJsZSBhIGxpc3Qgb2Yga2V5IGJpbmRpbmdzLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGlnbm9yZUtleXM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuXHJcbiAgLyoqIEFsbG93cyB0aGUgdXNlciB0byBlbmFibGUgYSBsaXN0IG9mIGtleSBiaW5kaW5ncyBleHBsaWNpdGx5LiBJZiB0aGlzIHByb3BlcnR5IGlzIHNldCwgZXZlcnkgb3RoZXIga2V5IGJpbmRpbmcgaXMgaWdub3JlZC4gKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBhY2NlcHRLZXlzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcblxyXG4gIC8qKiBBbGxvd3MgdGhlIHVzZXIgdG8gcHV0IHRoZSB2aWV3ZXIncyBzdmcgaW1hZ2VzIGludG8gYW4gYXJiaXRyYXJ5IGZvbGRlciAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGltYWdlUmVzb3VyY2VzUGF0aCA9ICcuLycgKyBwZGZEZWZhdWx0T3B0aW9ucy5hc3NldHNGb2xkZXIgKyAnL2ltYWdlcy8nO1xyXG5cclxuICAvKiogQWxsb3dzIHRoZSB1c2VyIHRvIHB1dCB0aGVpciBsb2NhbGUgZm9sZGVyIGludG8gYW4gYXJiaXRyYXJ5IGZvbGRlciAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGxvY2FsZUZvbGRlclBhdGggPSAnLi8nICsgcGRmRGVmYXVsdE9wdGlvbnMuYXNzZXRzRm9sZGVyICsgJy9sb2NhbGUnO1xyXG5cclxuICAvKiogT3ZlcnJpZGUgdGhlIGRlZmF1bHQgbG9jYWxlLiBUaGlzIG11c3QgYmUgdGhlIGNvbXBsZXRlIGxvY2FsZSBuYW1lLCBzdWNoIGFzIFwiZXMtRVNcIi4gVGhlIHN0cmluZyBpcyBhbGxvd2VkIHRvIGJlIGFsbCBsb3dlcmNhc2UuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbGFuZ3VhZ2U6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgLyoqIEJ5IGRlZmF1bHQsIGxpc3RlbmluZyB0byB0aGUgVVJMIGlzIGRlYWN0aXZhdGVkIGJlY2F1c2Ugb2Z0ZW4gdGhlIGFuY2hvciB0YWcgaXMgdXNlZCBmb3IgdGhlIEFuZ3VsYXIgcm91dGVyICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbGlzdGVuVG9VUkwgPSBmYWxzZTtcclxuXHJcbiAgLyoqIE5hdmlnYXRlIHRvIGEgY2VydGFpbiBcIm5hbWVkIGRlc3RpbmF0aW9uXCIgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBuYW1lZGRlc3Q6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgLyoqIGFsbG93cyB5b3UgdG8gcGFzcyBhIHBhc3N3b3JkIHRvIHJlYWQgcGFzc3dvcmQtcHJvdGVjdGVkIGZpbGVzICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgcGFzc3dvcmQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgcmVwbGFjZUJyb3dzZXJQcmludDogYm9vbGVhbjtcclxuXHJcbiAgLyoqIHBkZi5qcyBjYW4gc2hvdyBzaWduYXR1cmVzLCBidXQgZmFpbHMgdG8gdmVyaWZ5IHRoZW0uIFNvIHRoZXkgYXJlIHN3aXRjaGVkIG9mZiBieSBkZWZhdWx0LlxyXG4gICAqIFNldCBcIltzaG93VW52ZXJpZmllZFNpZ25hdHVyZXNdXCI9XCJ0cnVlXCIgdG8gZGlzcGxheSBlLXNpZ25hdHVyZXMgbm9uZXRoZWxlc3MuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1VudmVyaWZpZWRTaWduYXR1cmVzID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHN0YXJ0VGFiaW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuXHJcbiAgcHVibGljIGdldCBzaG93U2lkZWJhckJ1dHRvbigpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgc2hvd1NpZGViYXJCdXR0b24oc2hvdzogYm9vbGVhbikge31cclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2lkZWJhclZpc2libGU6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBzaWRlYmFyVmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgYWN0aXZlU2lkZWJhclZpZXc6IFBkZlNpZGViYXJWaWV3ID0gUGRmU2lkZWJhclZpZXcuT1VUTElORTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGFjdGl2ZVNpZGViYXJWaWV3Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxQZGZTaWRlYmFyVmlldz4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0ZpbmRCdXR0b246IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGaW5kSGlnaGxpZ2h0QWxsID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0ZpbmRNYXRjaENhc2UgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZEN1cnJlbnRQYWdlT25seSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGaW5kUGFnZVJhbmdlID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0ZpbmRFbnRpcmVXb3JkID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0ZpbmRFbnRpcmVQaHJhc2UgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZElnbm9yZUFjY2VudHMgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZEZ1enp5U2VhcmNoID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0ZpbmRSZXN1bHRzQ291bnQgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZE1lc3NhZ2VzID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1BhZ2luZ0J1dHRvbnMgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93Wm9vbUJ1dHRvbnMgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93UHJlc2VudGF0aW9uTW9kZUJ1dHRvbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93T3BlbkZpbGVCdXR0b24gPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93UHJpbnRCdXR0b24gPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RG93bmxvYWRCdXR0b24gPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyB0aGVtZTogJ2RhcmsnIHwgJ2xpZ2h0JyB8ICdjdXN0b20nID0gJ2xpZ2h0JztcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZm9ybVRoZW1lOiAnZGFyaycgfCAnbGlnaHQnIHwgJ2N1c3RvbScgfCBzdHJpbmcgPSAnbGlnaHQnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93VG9vbGJhciA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dTZWNvbmRhcnlUb29sYmFyQnV0dG9uID0gdHJ1ZTtcclxuXHJcbiAgLyoqIFNldCBieSB0aGUgZXZlbnQgKHNlY29uZGFyeU1lbnVJc0VtcHR5KSAqL1xyXG4gIHB1YmxpYyBoaWRlS2ViYWJNZW51Rm9yU2Vjb25kYXJ5VG9vbGJhciA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93Um90YXRlQnV0dG9uID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgaGFuZFRvb2wgPSB0cnVlO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgaGFuZFRvb2xDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dIYW5kVG9vbEJ1dHRvbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93U2Nyb2xsaW5nQnV0dG9uID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1NwcmVhZEJ1dHRvbiA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dQcm9wZXJ0aWVzQnV0dG9uID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0JvcmRlcnMgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzcHJlYWQ6ICdvZmYnIHwgJ2V2ZW4nIHwgJ29kZCc7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBzcHJlYWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPCdvZmYnIHwgJ2V2ZW4nIHwgJ29kZCc+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyB0aHVtYm5haWxEcmF3biA9IG5ldyBFdmVudEVtaXR0ZXI8UGRmVGh1bWJuYWlsRHJhd25FdmVudD4oKTtcclxuXHJcbiAgcHJpdmF0ZSBfcGFnZTogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBwdWJsaWMgZ2V0IHBhZ2UoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLl9wYWdlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IHBhZ2UocDogbnVtYmVyIHwgdW5kZWZpbmVkKSB7fSAvLyBOT1NPTkFSXHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBwYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCB1bmRlZmluZWQ+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHBhZ2VMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcGFnZUxhYmVsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCB1bmRlZmluZWQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBwYWdlc0xvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8UGFnZXNMb2FkZWRFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHBhZ2VSZW5kZXIgPSBuZXcgRXZlbnRFbWl0dGVyPFBhZ2VSZW5kZXJFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHBhZ2VSZW5kZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8UGFnZVJlbmRlcmVkRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBwZGZEb3dubG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxQZGZEb3dubG9hZGVkRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBwZGZMb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFBkZkxvYWRlZEV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcGRmTG9hZGluZ1N0YXJ0cyA9IG5ldyBFdmVudEVtaXR0ZXI8UGRmTG9hZGluZ1N0YXJ0c0V2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcGRmTG9hZGluZ0ZhaWxlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RXJyb3I+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHRleHRMYXllcjogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHRleHRMYXllclJlbmRlcmVkID0gbmV3IEV2ZW50RW1pdHRlcjxUZXh0TGF5ZXJSZW5kZXJlZEV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgdXBkYXRlRmluZE1hdGNoZXNDb3VudCA9IG5ldyBFdmVudEVtaXR0ZXI8RmluZFJlc3VsdE1hdGNoZXNDb3VudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHVwZGF0ZUZpbmRTdGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8RmluZFN0YXRlPigpO1xyXG5cclxuICAvKiogTGVnYWwgdmFsdWVzOiB1bmRlZmluZWQsICdhdXRvJywgJ3BhZ2UtYWN0dWFsJywgJ3BhZ2UtZml0JywgJ3BhZ2Utd2lkdGgnLCBvciAnNTAnIChvciBhbnkgb3RoZXIgcGVyY2VudGFnZSkgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyB6b29tOiBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyB6b29tQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQ+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHpvb21MZXZlbHMgPSBbJ2F1dG8nLCAncGFnZS1hY3R1YWwnLCAncGFnZS1maXQnLCAncGFnZS13aWR0aCcsIDAuNSwgMSwgMS4yNSwgMS41LCAyLCAzLCA0XTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbWF4Wm9vbSA9IDEwO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBtaW5ab29tID0gMC4xO1xyXG5cclxuICAvKiogVGhpcyBhdHRyaWJ1dGVzIGFsbG93cyB5b3UgdG8gaW5jcmVhc2UgdGhlIHNpemUgb2YgdGhlIFVJIGVsZW1lbnRzIHNvIHlvdSBjYW4gdXNlIHRoZW0gb24gc21hbGwgbW9iaWxlIGRldmljZXMuXHJcbiAgICogVGhpcyBhdHRyaWJ1dGUgaXMgYSBzdHJpbmcgd2l0aCBhIHBlcmNlbnQgY2hhcmFjdGVyIGF0IHRoZSBlbmQgKGUuZy4gXCIxNTAlXCIpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBfbW9iaWxlRnJpZW5kbHlab29tID0gJzEwMCUnO1xyXG5cclxuICBwdWJsaWMgbW9iaWxlRnJpZW5kbHlab29tU2NhbGUgPSAxO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyB3aGVlbEFjdGlvbjogJ3Njcm9sbCcgfCAnem9vbScgfCAnYWx3YXlzLXpvb20nID0gJ3Njcm9sbCc7XHJcblxyXG4gIHB1YmxpYyB0b29sYmFyTWFyZ2luVG9wID0gJzBweCc7XHJcblxyXG4gIHB1YmxpYyB0b29sYmFyV2lkdGggPSAnMTAwJSc7XHJcblxyXG4gIHB1YmxpYyB0b29sYmFyV2lkdGhJblBpeGVscyA9IDEwMDtcclxuXHJcbiAgcHVibGljIHNlY29uZGFyeVRvb2xiYXJUb3A6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgLy8gZGlydHkgSUUxMSBoYWNrIC0gdGVtcG9yYXJ5IHNvbHV0aW9uXHJcbiAgcHVibGljIGZpbmRiYXJUb3A6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgLy8gZGlydHkgSUUxMSBoYWNrIC0gdGVtcG9yYXJ5IHNvbHV0aW9uXHJcbiAgcHVibGljIGZpbmRiYXJMZWZ0OiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIC8vIEFkZGl0aW9uYWwgUERGIEZvcm0gRmllbGQgVHlwZXMgIzU2NzogVXNlZCB0byBzdG9yZSB0aGUgZXhwb3J0ZWQgdmFsdWVzIG9mIHJhZGlvIGFuZCBjaGVja2JveCBidXR0b25zXHJcbiAgcHVibGljIGJ1dHRvblZhbHVlczogYW55ID0ge307XHJcblxyXG4gIHB1YmxpYyBnZXQgbW9iaWxlRnJpZW5kbHlab29tKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX21vYmlsZUZyaWVuZGx5Wm9vbTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogVGhpcyBhdHRyaWJ1dGVzIGFsbG93cyB5b3UgdG8gaW5jcmVhc2UgdGhlIHNpemUgb2YgdGhlIFVJIGVsZW1lbnRzIHNvIHlvdSBjYW4gdXNlIHRoZW0gb24gc21hbGwgbW9iaWxlIGRldmljZXMuXHJcbiAgICogVGhpcyBhdHRyaWJ1dGUgaXMgYSBzdHJpbmcgd2l0aCBhIHBlcmNlbnQgY2hhcmFjdGVyIGF0IHRoZSBlbmQgKGUuZy4gXCIxNTAlXCIpLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCBtb2JpbGVGcmllbmRseVpvb20oem9vbTogc3RyaW5nKSB7fSAvLyBOT1NPTkFSXHJcblxyXG4gIHB1YmxpYyBnZXQgc2lkZWJhclBvc2l0aW9uVG9wKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJzMycHgnO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge31cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7fVxyXG5cclxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7fVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjb250ZXh0bWVudScpXHJcbiAgcHVibGljIG9uQ29udGV4dE1lbnUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0TWVudUFsbG93ZWQ7XHJcbiAgfVxyXG59XHJcbiIsIjxsaW5rICpuZ0lmPVwidXNlQnJvd3NlckxvY2FsZVwiIHJlbD1cInJlc291cmNlXCIgdHlwZT1cImFwcGxpY2F0aW9uL2wxMG5cIiBbYXR0ci54aHJlZl09XCJsb2NhbGVGb2xkZXJQYXRoKycvbG9jYWxlLnByb3BlcnRpZXMnXCIgb3JpZ2luPVwibmd4LWV4dGVuZGVkLXBkZi12aWV3ZXJcIiAvPlxyXG48cGRmLWRhcmstdGhlbWUgKm5nSWY9XCJ0aGVtZT09PSdkYXJrJ1wiPjwvcGRmLWRhcmstdGhlbWU+XHJcbjxwZGYtbGlnaHQtdGhlbWUgKm5nSWY9XCJ0aGVtZT09PSdsaWdodCdcIj48L3BkZi1saWdodC10aGVtZT5cclxuXHJcbjxwZGYtZHluYW1pYy1jc3MgW3pvb21dPVwibW9iaWxlRnJpZW5kbHlab29tU2NhbGVcIiBbd2lkdGhdPVwidG9vbGJhcldpZHRoSW5QaXhlbHNcIj48L3BkZi1keW5hbWljLWNzcz5cclxuPGRpdiBjbGFzcz1cInpvb21cIiBbc3R5bGUuaGVpZ2h0XT1cImhlaWdodFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJodG1sXCI+XHJcbiAgICA8ZGl2IGlkPVwibWFpbkNvbnRhaW5lclwiPlxyXG4gICAgICA8cGRmLWR1bW15LWNvbXBvbmVudHM+PC9wZGYtZHVtbXktY29tcG9uZW50cz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjZGVmYXVsdEZyZWVGbG9hdGluZ0Jhcj5cclxuXHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==
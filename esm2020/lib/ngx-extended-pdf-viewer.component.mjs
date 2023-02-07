import { isPlatformBrowser, Location, PlatformLocation } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Inject, Input, NgZone, Output, PLATFORM_ID, Renderer2, ViewChild } from '@angular/core';
import { FindState } from './events/find-result';
import { NgxExtendedPdfViewerService } from './ngx-extended-pdf-viewer.service';
import { PdfCursorTools } from './options/pdf-cursor-tools';
import { assetsUrl, getVersionSuffix, pdfDefaultOptions } from './options/pdf-default-options';
import { ScrollModeType } from './options/pdf-viewer';
import { VerbosityLevel } from './options/verbosity-level';
import { PdfDummyComponentsComponent } from './pdf-dummy-components/pdf-dummy-components.component';
import { PDFNotificationService } from './pdf-notification-service';
import { PdfSecondaryToolbarComponent } from './secondary-toolbar/pdf-secondary-toolbar/pdf-secondary-toolbar.component';
import { PdfSidebarComponent } from './sidebar/pdf-sidebar/pdf-sidebar.component';
import { UnitToPx } from './unit-to-px';
import { PdfSidebarView } from './options/pdf-sidebar-views';
import * as i0 from "@angular/core";
import * as i1 from "./pdf-notification-service";
import * as i2 from "@angular/common";
import * as i3 from "./ngx-extended-pdf-viewer.service";
import * as i4 from "./theme/pdf-dark-theme/pdf-dark-theme.component";
import * as i5 from "./theme/pdf-light-theme/pdf-light-theme.component";
import * as i6 from "./theme/acroform-dark-theme/pdf-acroform-dark-theme.component";
import * as i7 from "./theme/acroform-default-theme/pdf-acroform-default-theme.component";
import * as i8 from "./dynamic-css/dynamic-css.component";
import * as i9 from "./sidebar/pdf-sidebar/pdf-sidebar.component";
import * as i10 from "./pdf-dummy-components/pdf-dummy-components.component";
import * as i11 from "./toolbar/pdf-toolbar/pdf-toolbar.component";
import * as i12 from "./secondary-toolbar/pdf-secondary-toolbar/pdf-secondary-toolbar.component";
import * as i13 from "./toolbar/pdf-findbar/pdf-findbar.component";
import * as i14 from "./toolbar/pdf-context-menu/pdf-context-menu.component";
import * as i15 from "./pdf-dialog/pdf-error-message/pdf-error-message.component";
import * as i16 from "./pdf-dialog/pdf-password-dialog/pdf-password-dialog.component";
import * as i17 from "./pdf-dialog/pdf-document-properties-dialog/pdf-document-properties-dialog.component";
import * as i18 from "./pdf-dialog/pdf-prepare-printing-dialog/pdf-prepare-printing-dialog.component";
import * as i19 from "./translate.pipe";
const _c0 = ["root"];
const _c1 = ["pdfSecondaryToolbarComponent"];
const _c2 = ["pdfsidebar"];
function NgxExtendedPdfViewerComponent_pdf_dark_theme_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "pdf-dark-theme");
} }
function NgxExtendedPdfViewerComponent_pdf_light_theme_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "pdf-light-theme");
} }
function NgxExtendedPdfViewerComponent_pdf_acroform_dark_theme_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "pdf-acroform-dark-theme");
} }
function NgxExtendedPdfViewerComponent_pdf_acroform_default_theme_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "pdf-acroform-default-theme");
} }
function NgxExtendedPdfViewerComponent_ng_content_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 0, ["*ngTemplateOutlet", "customPdfViewer ? customPdfViewer : defaultPdfViewer"]);
} }
function NgxExtendedPdfViewerComponent_ng_template_6_div_5_ng_content_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 1, ["*ngTemplateOutlet", "customFreeFloatingBar ? customFreeFloatingBar : defaultFreeFloatingBar"]);
} }
function NgxExtendedPdfViewerComponent_ng_template_6_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39);
    i0.ɵɵtemplate(1, NgxExtendedPdfViewerComponent_ng_template_6_div_5_ng_content_1_Template, 1, 0, "ng-content", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    const _r7 = i0.ɵɵreference(9);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r10.customFreeFloatingBar ? ctx_r10.customFreeFloatingBar : _r7);
} }
function NgxExtendedPdfViewerComponent_ng_template_6_div_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 40);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, i0.ɵɵpipeBind2(3, 3, "unverified_signature_warning", "This PDF file contains a digital signature. The PDF viewer can't verify if the signature is valid. Please download the file and open it in Acrobat Reader to verify the signature is valid.")), " ");
} }
function NgxExtendedPdfViewerComponent_ng_template_6_div_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, i0.ɵɵpipeBind2(3, 3, "modified_background_warning", "This PDF is rendered with a custom background. It does not look the way its author intended it to look.")), " ");
} }
function NgxExtendedPdfViewerComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5, 6)(2, "div", 7)(3, "div", 8)(4, "div", 9);
    i0.ɵɵlistener("resize", function NgxExtendedPdfViewerComponent_ng_template_6_Template_div_resize_4_listener() { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.onResize(); }, false, i0.ɵɵresolveWindow);
    i0.ɵɵtemplate(5, NgxExtendedPdfViewerComponent_ng_template_6_div_5_Template, 2, 1, "div", 10);
    i0.ɵɵelementStart(6, "pdf-sidebar", 11, 12);
    i0.ɵɵlistener("thumbnailDrawn", function NgxExtendedPdfViewerComponent_ng_template_6_Template_pdf_sidebar_thumbnailDrawn_6_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.thumbnailDrawn.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 13);
    i0.ɵɵelement(9, "pdf-dummy-components");
    i0.ɵɵelementStart(10, "pdf-toolbar", 14);
    i0.ɵɵlistener("onToolbarLoaded", function NgxExtendedPdfViewerComponent_ng_template_6_Template_pdf_toolbar_onToolbarLoaded_10_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.onToolbarLoaded($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 15)(12, "div", 16)(13, "div", 17)(14, "label", 18);
    i0.ɵɵtext(15, "Font Color");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(16, "input", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 17)(18, "label", 20);
    i0.ɵɵtext(19, "Font Size");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(20, "input", 21);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(21, "div", 22)(22, "div", 16)(23, "div", 17)(24, "label", 23);
    i0.ɵɵtext(25, "Color");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(26, "input", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div", 17)(28, "label", 25);
    i0.ɵɵtext(29, "Thickness");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(30, "input", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "div", 17)(32, "label", 27);
    i0.ɵɵtext(33, "Opacity");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(34, "input", 28);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(35, "pdf-secondary-toolbar", 29, 30);
    i0.ɵɵlistener("spreadChange", function NgxExtendedPdfViewerComponent_ng_template_6_Template_pdf_secondary_toolbar_spreadChange_35_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.onSpreadChange($event); })("secondaryMenuIsEmpty", function NgxExtendedPdfViewerComponent_ng_template_6_Template_pdf_secondary_toolbar_secondaryMenuIsEmpty_35_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.onSecondaryMenuIsEmpty($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(37, "pdf-findbar", 31)(38, "pdf-context-menu");
    i0.ɵɵelementStart(39, "div", 32);
    i0.ɵɵtemplate(40, NgxExtendedPdfViewerComponent_ng_template_6_div_40_Template, 4, 6, "div", 33);
    i0.ɵɵtemplate(41, NgxExtendedPdfViewerComponent_ng_template_6_div_41_Template, 4, 6, "div", 34);
    i0.ɵɵelementStart(42, "div", 35);
    i0.ɵɵlistener("dblclick", function NgxExtendedPdfViewerComponent_ng_template_6_Template_div_dblclick_42_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.zoomToPageWidth($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(43, "pdf-error-message");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "div", 36);
    i0.ɵɵelement(45, "pdf-password-dialog")(46, "pdf-document-properties-dialog")(47, "pdf-prepare-printing-dialog");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(48, "input", 37)(49, "div", 38);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("height", ctx_r6.minHeight ? ctx_r6.minHeight : ctx_r6.height);
    i0.ɵɵadvance(3);
    i0.ɵɵstyleProp("background-color", ctx_r6.backgroundColor);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r6.showFreeFloatingBar);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("sidebarVisible", ctx_r6.sidebarVisible || false)("showSidebarButton", ctx_r6.showSidebarButton)("customSidebar", ctx_r6.customSidebar)("customThumbnail", ctx_r6.customThumbnail)("mobileFriendlyZoomScale", ctx_r6.mobileFriendlyZoomScale)("sidebarPositionTop", ctx_r6.sidebarPositionTop);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("toolbar-hidden", !ctx_r6.primaryMenuVisible);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("customToolbar", ctx_r6.customToolbar)("mobileFriendlyZoomScale", ctx_r6.mobileFriendlyZoomScale)("primaryMenuVisible", ctx_r6.primaryMenuVisible)("showDownloadButton", ctx_r6.showDownloadButton)("showEditor", ctx_r6.showEditor)("showFindButton", ctx_r6.showFindButton)("showHandToolButton", ctx_r6.showHandToolButton)("showOpenFileButton", ctx_r6.showOpenFileButton)("showPrintButton", ctx_r6.showPrintButton && ctx_r6.enablePrint)("showPagingButtons", ctx_r6.showPagingButtons)("showPresentationModeButton", ctx_r6.showPresentationModeButton)("showRotateButton", ctx_r6.showRotateButton)("showSecondaryToolbarButton", ctx_r6.showSecondaryToolbarButton && !ctx_r6.hideKebabMenuForSecondaryToolbar)("showSidebarButton", ctx_r6.showSidebarButton)("showZoomButtons", ctx_r6.showZoomButtons)("textLayer", ctx_r6.textLayer)("toolbarMarginTop", ctx_r6.toolbarMarginTop)("toolbarWidth", ctx_r6.toolbarWidth)("zoomLevels", ctx_r6.zoomLevels);
    i0.ɵɵadvance(25);
    i0.ɵɵproperty("customSecondaryToolbar", ctx_r6.customSecondaryToolbar)("secondaryToolbarTop", ctx_r6.secondaryToolbarTop)("mobileFriendlyZoomScale", ctx_r6.mobileFriendlyZoomScale)("showPresentationModeButton", ctx_r6.showPresentationModeButton)("showOpenFileButton", ctx_r6.showOpenFileButton)("showPrintButton", ctx_r6.showPrintButton && ctx_r6.enablePrint)("showDownloadButton", ctx_r6.showDownloadButton)("showPagingButtons", ctx_r6.showPagingButtons)("showRotateButton", ctx_r6.showRotateButton)("showHandToolButton", ctx_r6.showHandToolButton)("showScrollingButton", ctx_r6.showScrollingButton)("showSpreadButton", ctx_r6.showSpreadButton)("showPropertiesButton", ctx_r6.showPropertiesButton);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("findbarLeft", ctx_r6.findbarLeft)("findbarTop", ctx_r6.findbarTop)("mobileFriendlyZoomScale", ctx_r6.mobileFriendlyZoomScale)("showFindButton", ctx_r6.showFindButton || false)("customFindbarInputArea", ctx_r6.customFindbarInputArea)("customFindbarButtons", ctx_r6.customFindbarButtons)("showFindCurrentPageOnly", ctx_r6.showFindCurrentPageOnly)("showFindEntirePhrase", ctx_r6.showFindEntirePhrase)("showFindEntireWord", ctx_r6.showFindEntireWord)("showFindFuzzySearch", ctx_r6.showFindFuzzySearch)("showFindHighlightAll", ctx_r6.showFindHighlightAll)("showFindIgnoreAccents", ctx_r6.showFindIgnoreAccents)("showFindMatchCase", ctx_r6.showFindMatchCase)("showFindMessages", ctx_r6.showFindMessages)("showFindPageRange", ctx_r6.showFindPageRange)("showFindResultsCount", ctx_r6.showFindResultsCount);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("top", ctx_r6.viewerPositionTop)("background-color", ctx_r6.backgroundColor);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.hasSignature && ctx_r6.showUnverifiedSignatures);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.pdfBackground);
} }
function NgxExtendedPdfViewerComponent_ng_template_8_Template(rf, ctx) { }
const _c3 = ["*", "*"];
function isIOS() {
    return (['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) ||
        // iPad on iOS 13 detection
        (navigator.userAgent.includes('Mac') && 'ontouchend' in document));
}
export class NgxExtendedPdfViewerComponent {
    constructor(ngZone, platformId, notificationService, location, elementRef, platformLocation, cdr, service, renderer) {
        this.ngZone = ngZone;
        this.platformId = platformId;
        this.notificationService = notificationService;
        this.location = location;
        this.elementRef = elementRef;
        this.platformLocation = platformLocation;
        this.cdr = cdr;
        this.service = service;
        this.renderer = renderer;
        this.ngxExtendedPdfViewerIncompletelyInitialized = true;
        this.showFreeFloatingBar = true;
        this.enableDragAndDrop = true;
        this.formData = {};
        /** Maps the internal ids of the annotations of pdf.js to their field name */
        this.formIdToFieldName = {};
        this.formRadioButtonValueToId = {};
        this.formDataChange = new EventEmitter();
        this._pageViewMode = 'multiple';
        /** This flag prevents trying to load a file twice if the user uploads it using the file upload dialog or via drag'n'drop */
        this.srcChangeTriggeredByUser = false;
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
        /** Shows or hides the editor buttons */
        this.showEditor = true;
        /** How many log messages should be printed?
         * Legal values: VerbosityLevel.INFOS (= 5), VerbosityLevel.WARNINGS (= 1), VerbosityLevel.ERRORS (= 0) */
        this.logLevel = VerbosityLevel.WARNINGS;
        this.relativeCoordsOptions = {};
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
        /**
         * The combination of height, minHeight, and autoHeight ensures the PDF height of the PDF viewer is calculated correctly when the height is a percentage.
         * By default, many CSS frameworks make a div with 100% have a height or zero pixels. checkHeigth() fixes this.
         */
        this.autoHeight = false;
        this.minHeight = undefined;
        this._height = '100%';
        this._useBrowserLocale = undefined;
        this.forceUsingLegacyES5 = false;
        this.backgroundColor = '#e8e8eb';
        this.pdfBackground = undefined;
        this.pdfBackgroundColorToReplace = '#ffffff';
        /** Allows the user to define the name of the file after clicking "download" */
        this.filenameForDownload = undefined;
        /** Allows the user to disable the keyboard bindings completely */
        this.ignoreKeyboard = false;
        /** Allows the user to disable a list of key bindings. */
        this.ignoreKeys = [];
        /** Allows the user to enable a list of key bindings explicitly. If this property is set, every other key binding is ignored. */
        this.acceptKeys = [];
        /** Allows the user to put the viewer's svg images into an arbitrary folder */
        this.imageResourcesPath = assetsUrl(pdfDefaultOptions.assetsFolder) + '/images/';
        /** Allows the user to put their locale folder into an arbitrary folder */
        this.localeFolderPath = assetsUrl(pdfDefaultOptions.assetsFolder) + '/locale';
        /** Override the default locale. This must be the complete locale name, such as "es-ES". The string is allowed to be all lowercase.
         */
        this.language = undefined;
        /** By default, listening to the URL is deactivated because often the anchor tag is used for the Angular router */
        this.listenToURL = false;
        /** Navigate to a certain "named destination" */
        this.nameddest = undefined;
        /** allows you to pass a password to read password-protected files */
        this.password = undefined;
        this.replaceBrowserPrint = this.pdfJsVersion >= '3.0';
        this._showSidebarButton = true;
        this.viewerPositionTop = '32px';
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
        this._handTool = !isIOS();
        this.handToolChange = new EventEmitter();
        this.showHandToolButton = false;
        this._showScrollingButton = true;
        this._showSpreadButton = true;
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
        /** This attribute allows you to increase the size of the UI elements so you can use them on small mobile devices.
         * This attribute is a string with a percent character at the end (e.g. "150%").
         */
        this._mobileFriendlyZoom = '100%';
        this.mobileFriendlyZoomScale = 1;
        this.wheelAction = 'scroll';
        this.toolbarMarginTop = '0px';
        this.toolbarWidth = '100%';
        this.toolbar = undefined;
        this.toolbarWidthInPixels = 100;
        this.secondaryToolbarTop = undefined;
        this.sidebarPositionTop = undefined;
        // dirty IE11 hack - temporary solution
        this.findbarTop = undefined;
        // dirty IE11 hack - temporary solution
        this.findbarLeft = undefined;
        // Additional PDF Form Field Types #567: Used to store the exported values of radio and checkbox buttons
        this.buttonValues = {};
        this.shuttingDown = false;
        this.baseHref = this.platformLocation.getBaseHrefFromDOM();
        this.service.recalculateSize$.subscribe(() => this.onResize());
    }
    get pageViewMode() {
        return this._pageViewMode;
    }
    set pageViewMode(viewMode) {
        this._pageViewMode = viewMode;
        if (viewMode === 'infinite-scroll') {
            this.scrollMode = ScrollModeType.vertical;
            this.spread = 'off';
        }
        else if (viewMode !== 'multiple') {
            this.scrollMode = ScrollModeType.vertical;
        }
        if (viewMode === 'single') {
            // since pdf.js, our custom single-page-mode has been replaced by the standard scrollMode="page"
            this.scrollMode = ScrollModeType.page;
            this._pageViewMode = 'multiple';
        }
        if (viewMode === 'book') {
            this.showBorders = false;
        }
    }
    set src(url) {
        if (url instanceof Uint8Array) {
            this._src = url.buffer;
        }
        else if (url instanceof URL) {
            this._src = url.toString();
        }
        else if (typeof Blob !== 'undefined' && url instanceof Blob) {
            // additional check introduced to support server side rendering
            const reader = new FileReader();
            reader.onloadend = () => {
                setTimeout(() => {
                    this.src = new Uint8Array(reader.result);
                    if (NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) {
                        if (this.ngxExtendedPdfViewerIncompletelyInitialized) {
                            this.openPDF();
                        }
                        else {
                            (async () => this.openPDF2())();
                        }
                        // else openPDF is called later, so we do nothing to prevent loading the PDF file twice
                    }
                });
            };
            reader.readAsArrayBuffer(url);
        }
        else if (typeof url === 'string') {
            this._src = url;
            if (url.length > 980) {
                // minimal length of a base64 encoded PDF
                if (url.length % 4 === 0) {
                    if (/^[a-zA-Z\d\/+]+={0,2}$/.test(url)) {
                        console.error('The URL looks like a base64 encoded string. If so, please use the attribute [base64Src] instead of [src]');
                    }
                }
            }
        }
        else {
            this._src = url;
        }
    }
    set base64Src(base64) {
        if (base64) {
            const binary_string = window.atob(base64);
            const len = binary_string.length;
            const bytes = new Uint8Array(len);
            for (let i = 0; i < len; i++) {
                bytes[i] = binary_string.charCodeAt(i);
            }
            this.src = bytes.buffer;
        }
        else {
            this._src = undefined;
        }
    }
    set height(h) {
        this.minHeight = undefined;
        this.autoHeight = false;
        if (h) {
            this._height = h;
        }
        else {
            this.height = '100%';
        }
        setTimeout(() => {
            this.checkHeight();
        });
    }
    get height() {
        return this._height;
    }
    get useBrowserLocale() {
        return !!this._useBrowserLocale;
    }
    /**
     * If this flag is true, this components adds a link to the locale assets. The pdf viewer
     * sees this link and uses it to load the locale files automatically.
     * @param useBrowserLocale boolean
     */
    set useBrowserLocale(value) {
        this._useBrowserLocale = value;
    }
    get showSidebarButton() {
        return this._showSidebarButton;
    }
    set showSidebarButton(show) {
        this._showSidebarButton = show;
        const isIE = /msie\s|trident\//i.test(window.navigator.userAgent);
        let factor = 1;
        if (isIE) {
            factor = Number((this._mobileFriendlyZoom || '100').replace('%', '')) / 100;
        }
        if (this._showSidebarButton) {
            this.findbarLeft = (68 * factor).toString() + 'px';
        }
        else {
            this.findbarLeft = '0px';
        }
    }
    set handTool(handTool) {
        if (isIOS() && handTool) {
            console.log("On iOS, the handtool doesn't work reliably. Plus, you don't need it because touch gestures allow you to distinguish easily between swiping and selecting text. Therefore, the library ignores your setting.");
            return;
        }
        this._handTool = handTool;
    }
    get handTool() {
        return this._handTool;
    }
    get showScrollingButton() {
        if (this.pageViewMode === 'multiple') {
            return this._showScrollingButton;
        }
        return false;
    }
    set showScrollingButton(val) {
        this._showScrollingButton = val;
    }
    get showSpreadButton() {
        if (this.pageViewMode !== 'infinite-scroll') {
            return this._showSpreadButton;
        }
        return false;
    }
    set showSpreadButton(val) {
        this._showSpreadButton = val;
    }
    get page() {
        return this._page;
    }
    set page(p) {
        if (p) {
            // silently cope with strings
            this._page = Number(p);
        }
        else {
            this._page = undefined;
        }
    }
    onToolbarLoaded(toolbarElement) {
        this.toolbar = toolbarElement;
    }
    get mobileFriendlyZoom() {
        return this._mobileFriendlyZoom;
    }
    get pdfJsVersion() {
        return getVersionSuffix(pdfDefaultOptions.assetsFolder);
    }
    /**
     * This attributes allows you to increase the size of the UI elements so you can use them on small mobile devices.
     * This attribute is a string with a percent character at the end (e.g. "150%").
     */
    set mobileFriendlyZoom(zoom) {
        // tslint:disable-next-line:triple-equals - the type conversion is intended
        if (zoom == 'true') {
            zoom = '150%';
            // tslint:disable-next-line:triple-equals - the type conversion is intended
        }
        else if (zoom == 'false' || zoom === undefined || zoom === null) {
            zoom = '100%';
        }
        this._mobileFriendlyZoom = zoom;
        let factor = 1;
        if (!String(zoom).includes('%')) {
            zoom = 100 * Number(zoom) + '%';
        }
        factor = Number((zoom || '100').replace('%', '')) / 100;
        this.mobileFriendlyZoomScale = factor;
        this.toolbarWidth = (100 / factor).toString() + '%';
        this.toolbarMarginTop = (factor - 1) * 16 + 'px';
        setTimeout(() => this.calcViewerPositionTop());
    }
    calcViewerPositionTop() {
        if (this.toolbar === undefined) {
            this.sidebarPositionTop = '0px';
            return;
        }
        let top = this.toolbar.getBoundingClientRect().height;
        if (top < 33) {
            this.viewerPositionTop = '33px';
        }
        else {
            this.viewerPositionTop = top + 'px';
        }
        const factor = top / 33;
        if (this.primaryMenuVisible) {
            this.sidebarPositionTop = (33 + 33 * (factor - 1)).toString() + 'px';
        }
        else {
            this.sidebarPositionTop = '0px';
        }
        this.secondaryToolbarTop = (33 + 38 * (factor - 1)).toString() + 'px';
        this.findbarTop = (34 + 54 * (factor - 1)).toString() + 'px';
        const findButton = document.getElementById('viewFind');
        if (findButton) {
            const containerPositionLeft = this.toolbar.getBoundingClientRect().left;
            const findButtonPosition = findButton.getBoundingClientRect();
            const left = findButtonPosition.left - containerPositionLeft;
            this.findbarLeft = left + 'px';
        }
        else if (this.showSidebarButton) {
            this.findbarLeft = 34 + (32 * factor).toString() + 'px';
        }
        else {
            this.findbarLeft = '0px';
        }
    }
    iOSVersionRequiresES5() {
        const match = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        if (match !== undefined && match !== null) {
            return parseInt(match[1], 10) < 14;
        }
        return false;
    }
    async needsES5() {
        const isIE = !!window.MSInputMethodContext && !!document.documentMode;
        const isEdge = /Edge\/\d./i.test(navigator.userAgent);
        const isIOs13OrBelow = this.iOSVersionRequiresES5();
        let needsES5 = typeof ReadableStream === 'undefined' || typeof Promise['allSettled'] === 'undefined';
        if (needsES5 || isIE || isEdge || isIOs13OrBelow || this.forceUsingLegacyES5) {
            return true;
        }
        return !(await this.supportsOptionalChaining());
    }
    supportsOptionalChaining() {
        return new Promise((resolve) => {
            const support = window.supportsOptionalChaining;
            support !== undefined ? resolve(support) : resolve(this.addScriptOpChainingSupport());
        });
    }
    addScriptOpChainingSupport() {
        return new Promise((resolve) => {
            const script = this.createScriptElement(pdfDefaultOptions.assetsFolder + '/op-chaining-support.js');
            script.onload = () => {
                script.remove();
                resolve(window.supportsOptionalChaining);
            };
            script.onerror = () => {
                script.remove();
                window.supportsOptionalChaining = false;
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }
    createScriptElement(sourcePath) {
        const script = document.createElement('script');
        script.async = true;
        script.type = 'text/javascript';
        const ttWindow = window;
        if (ttWindow.trustedTypes) {
            const sanitizer = ttWindow.trustedTypes.createPolicy('foo', {
                createScriptURL: (input) => input,
            });
            script.src = sanitizer.createScriptURL(this.location.normalize(sourcePath));
        }
        else {
            script.src = this.location.normalize(sourcePath);
        }
        return script;
    }
    getPdfJsPath(artifact, needsES5) {
        const suffix = this.minifiedJSLibraries ? '.min.js' : '.js';
        const assets = pdfDefaultOptions.assetsFolder;
        const versionSuffix = getVersionSuffix(assets);
        const artifactPath = `/${artifact}-`;
        const es5 = needsES5 ? '-es5' : '';
        return assets + artifactPath + versionSuffix + es5 + suffix;
    }
    loadViewer() {
        window['ngxZone'] = this.ngZone;
        this.ngZone.runOutsideAngular(() => {
            if (!window['pdfjs-dist/build/pdf']) {
                setTimeout(() => this.loadViewer(), 25);
            }
            else {
                this.needsES5().then((needsES5) => {
                    const viewerPath = this.getPdfJsPath('viewer', needsES5);
                    const script = this.createScriptElement(viewerPath);
                    document.getElementsByTagName('head')[0].appendChild(script);
                });
            }
        });
    }
    addFeatures() {
        return new Promise((resolve) => {
            const script = this.createScriptElement(pdfDefaultOptions.assetsFolder + '/additional-features.js');
            script.onload = () => {
                script.remove();
            };
            script.onerror = () => {
                script.remove();
                resolve();
            };
            document.body.appendChild(script);
        });
    }
    ngOnInit() {
        window['setNgxExtendedPdfViewerSource'] = (url) => {
            this._src = url;
            console.log(url);
            this.srcChangeTriggeredByUser = true;
            this.srcChange.emit(url);
        };
        if (isPlatformBrowser(this.platformId)) {
            this.addTranslationsUnlessProvidedByTheUser();
            window.getFormValue = (key) => this.getFormValue(key);
            window.setFormValue = (key, value) => this.setFormValue(key, value);
            window.registerAcroformAnnotations = (sortedAnnotations) => this.registerAcroformAnnotations(sortedAnnotations);
            window.assignFormIdAndFieldName = (key, fieldName, radioButtonField) => this.assignFormIdAndFieldName(key, fieldName, radioButtonField);
            this.loadPdfJs();
            this.hideToolbarIfItIsEmpty();
        }
    }
    loadPdfJs() {
        window['ngxZone'] = this.ngZone;
        this.ngZone.runOutsideAngular(() => {
            if (!window['pdfjs-dist/build/pdf']) {
                this.needsES5().then((needsES5) => {
                    if (needsES5) {
                        if (!pdfDefaultOptions.needsES5) {
                            console.log("If you see the error message \"expected expression, got '='\" above: you can safely ignore it as long as you know what you're doing. It means your browser is out-of-date. Please update your browser to benefit from the latest security updates and to enjoy a faster PDF viewer.");
                        }
                        pdfDefaultOptions.needsES5 = true;
                        console.log('Using the ES5 version of the PDF viewer. Your PDF files show faster if you update your browser.');
                    }
                    window['ngxZone'] = this.ngZone;
                    if (this.minifiedJSLibraries) {
                        if (!pdfDefaultOptions.workerSrc().endsWith('.min.js')) {
                            const src = pdfDefaultOptions.workerSrc();
                            pdfDefaultOptions.workerSrc = () => src.replace('.js', '.min.js');
                        }
                    }
                    const pdfJsPath = this.getPdfJsPath('pdf', needsES5);
                    const script = this.createScriptElement(pdfJsPath);
                    document.getElementsByTagName('head')[0].appendChild(script);
                });
            }
            if (!window.webViewerLoad) {
                this.loadViewer();
            }
        });
    }
    ngAfterViewInit() {
        if (typeof window !== 'undefined') {
            if (!this.shuttingDown) {
                // hurried users sometimes reload the PDF before it has finished initializing
                if (window.webViewerLoad) {
                    this.ngZone.runOutsideAngular(() => this.doInitPDFViewer());
                }
                else {
                    setTimeout(() => this.ngAfterViewInit(), 50);
                }
            }
        }
    }
    assignTabindexes() {
        if (this.startTabindex) {
            const r = this.root.nativeElement.cloneNode(true);
            r.classList.add('offscreen');
            this.showElementsRecursively(r);
            document.body.appendChild(r);
            const elements = this.collectElementPositions(r, this.root.nativeElement, []);
            document.body.removeChild(r);
            const sorted = elements.sort((a, b) => {
                if (a.y - b.y > 15) {
                    return 1;
                }
                if (b.y - a.y > 15) {
                    return -1;
                }
                return a.x - b.x;
            });
            for (let i = 0; i < sorted.length; i++) {
                sorted[i].element.tabIndex = this.startTabindex + i;
            }
        }
    }
    showElementsRecursively(root) {
        root.classList.remove('hidden');
        root.classList.remove('invisible');
        root.classList.remove('hiddenXXLView');
        root.classList.remove('hiddenXLView');
        root.classList.remove('hiddenLargeView');
        root.classList.remove('hiddenMediumView');
        root.classList.remove('hiddenSmallView');
        root.classList.remove('hiddenTinyView');
        root.classList.remove('visibleXXLView');
        root.classList.remove('visibleXLView');
        root.classList.remove('visibleLargeView');
        root.classList.remove('visibleMediumView');
        root.classList.remove('visibleSmallView');
        root.classList.remove('visibleTinyView');
        if (root instanceof HTMLButtonElement || root instanceof HTMLAnchorElement || root instanceof HTMLInputElement || root instanceof HTMLSelectElement) {
            return;
        }
        else if (root.childElementCount > 0) {
            for (let i = 0; i < root.childElementCount; i++) {
                const c = root.children.item(i);
                if (c) {
                    this.showElementsRecursively(c);
                }
            }
        }
    }
    collectElementPositions(copy, original, elements) {
        if (copy instanceof HTMLButtonElement || copy instanceof HTMLAnchorElement || copy instanceof HTMLInputElement || copy instanceof HTMLSelectElement) {
            const rect = copy.getBoundingClientRect();
            const elementAndPos = {
                element: original,
                x: Math.round(rect.left),
                y: Math.round(rect.top),
            };
            elements.push(elementAndPos);
        }
        else if (copy.childElementCount > 0) {
            for (let i = 0; i < copy.childElementCount; i++) {
                const c = copy.children.item(i);
                const o = original.children.item(i);
                if (c && o) {
                    elements = this.collectElementPositions(c, o, elements);
                }
            }
        }
        return elements;
    }
    doInitPDFViewer() {
        if (typeof window === 'undefined') {
            return;
        }
        const callback = () => {
            document.removeEventListener('localized', callback);
            this.initTimeout = setTimeout(() => {
                if (!this.shuttingDown) {
                    // hurried users sometimes reload the PDF before it has finished initializing
                    this.calcViewerPositionTop();
                    this.afterLibraryInit();
                    this.openPDF();
                    this.assignTabindexes();
                    if (this.replaceBrowserPrint) {
                        window.print = window.printPDF;
                    }
                }
            }, this.delayFirstView);
        };
        window.addEventListener('afterprint', () => {
            this.afterPrint.emit();
        });
        window.addEventListener('beforeprint', () => {
            this.beforePrint.emit();
        });
        document.addEventListener('localized', callback);
        if (NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) {
            // tslint:disable-next-line:quotemark
            console.error("You're trying to open two instances of the PDF viewer. Most likely, this will result in errors.");
        }
        const onLoaded = () => {
            this.overrideDefaultSettings();
            document.removeEventListener('webviewerloaded', onLoaded);
        };
        document.addEventListener('webviewerloaded', onLoaded);
        this.activateTextlayerIfNecessary(null);
        setTimeout(() => {
            if (!this.shuttingDown) {
                // hurried users sometimes reload the PDF before it has finished initializing
                // This initializes the webviewer, the file may be passed in to it to initialize the viewer with a pdf directly
                this.onResize();
                this.hideToolbarIfItIsEmpty();
                this.dummyComponents.addMissingStandardWidgets();
                this.ngZone.runOutsideAngular(() => window.webViewerLoad());
                const PDFViewerApplication = window.PDFViewerApplication;
                PDFViewerApplication.appConfig.defaultUrl = ''; // IE bugfix
                if (this.filenameForDownload) {
                    PDFViewerApplication.appConfig.filenameForDownload = this.filenameForDownload;
                }
                const PDFViewerApplicationOptions = window.PDFViewerApplicationOptions;
                PDFViewerApplicationOptions.set('enableDragAndDrop', this.enableDragAndDrop);
                let language = this.language === '' ? undefined : this.language;
                if (!language) {
                    language = navigator.language;
                }
                PDFViewerApplicationOptions.set('locale', language);
                PDFViewerApplicationOptions.set('imageResourcesPath', this.imageResourcesPath);
                PDFViewerApplicationOptions.set('minZoom', this.minZoom);
                PDFViewerApplicationOptions.set('maxZoom', this.maxZoom);
                PDFViewerApplicationOptions.set('pageViewMode', this.pageViewMode);
                PDFViewerApplicationOptions.set('verbosity', this.logLevel);
                PDFViewerApplicationOptions.set('initialZoom', this.zoom);
                PDFViewerApplicationOptions.set('pdfBackgroundColor', this.pdfBackground);
                PDFViewerApplicationOptions.set('pdfBackgroundColorToReplace', this.pdfBackgroundColorToReplace);
                PDFViewerApplication.isViewerEmbedded = true;
                if (PDFViewerApplication.printKeyDownListener) {
                    window.addEventListener('keydown', PDFViewerApplication.printKeyDownListener, true);
                }
                const body = document.getElementsByTagName('body');
                if (body[0]) {
                    const topLevelElements = body[0].children;
                    for (let i = topLevelElements.length - 1; i >= 0; i--) {
                        const e = topLevelElements.item(i);
                        if (e && e.id === 'printContainer') {
                            body[0].removeChild(e);
                        }
                    }
                }
                const pc = document.getElementById('printContainer');
                if (pc) {
                    document.getElementsByTagName('body')[0].appendChild(pc);
                }
            }
        }, 0);
    }
    addTranslationsUnlessProvidedByTheUser() {
        const langLinks = document.querySelectorAll('link[type="application/l10n"]');
        const langCount = langLinks.length;
        const dict = document.querySelector('script[type="application/l10n"]');
        const userProvidesTranslations = langCount > 0 || !!dict;
        if (this._useBrowserLocale === undefined) {
            this.useBrowserLocale = !userProvidesTranslations;
        }
        if (!userProvidesTranslations) {
            if (!this.useBrowserLocale) {
                console.error("If you set the attribute 'useBrowserLocale' to false, you must provide the translations yourself in a script or link tag.");
                console.error('The easiest way to do this is to add them to the index.html.');
                console.error('The PDF viewer ignores your setting and loads the default translations.');
            }
            const link = this.renderer.createElement('link');
            link.rel = 'resource';
            link.type = 'application/l10n';
            link.href = this.localeFolderPath + '/locale.properties';
            link.setAttribute('origin', 'ngx-extended-pdf-viewer');
            this.renderer.appendChild(this.elementRef.nativeElement, link);
        }
        else if (this.useBrowserLocale && langCount > 0) {
            const o = langLinks[0].attributes['origin'];
            if (o && o.value !== 'ngx-extended-pdf-viewer') {
                console.error("Please set the attribute 'useBrowserLocale' to false if you provide the translations yourself in a script or link tag.");
            }
        }
    }
    hideToolbarIfItIsEmpty() {
        this.primaryMenuVisible = this.showToolbar;
        if (!this.showSecondaryToolbarButton || this.hideKebabMenuForSecondaryToolbar) {
            if (!this.isPrimaryMenuVisible()) {
                this.primaryMenuVisible = false;
            }
        }
    }
    /** Notifies every widget that implements onLibraryInit() that the PDF viewer objects are available */
    afterLibraryInit() {
        this.notificationService.onPDFJSInit.next();
    }
    checkHeight() {
        if (typeof document !== 'undefined') {
            const container = document.getElementsByClassName('zoom')[0];
            if (container) {
                if (container.clientHeight === 0) {
                    if (!this.autoHeight) {
                        console.warn("The height of the PDF viewer widget is zero pixels. Please check the height attribute. Is there a syntax error? Or are you using a percentage with a CSS framework that doesn't support this? The height is adjusted automatedly.");
                        this.autoHeight = true;
                    }
                }
                if (this.autoHeight) {
                    const available = window.innerHeight;
                    const rect = container.getBoundingClientRect();
                    const top = rect.top;
                    let maximumHeight = available - top;
                    // take the margins and paddings of the parent containers into account
                    const padding = this.calculateBorderMarging(container);
                    maximumHeight -= padding;
                    const factor = Number(this._height.replace('%', ''));
                    maximumHeight = (maximumHeight * factor) / 100;
                    if (maximumHeight > 100) {
                        this.minHeight = `${maximumHeight}px`;
                    }
                    else {
                        this.minHeight = '100px';
                    }
                    this.cdr.markForCheck();
                }
            }
        }
    }
    calculateBorderMarging(container) {
        if (container) {
            const computedStyle = window.getComputedStyle(container);
            const padding = UnitToPx.toPx(computedStyle.paddingBottom);
            const margin = UnitToPx.toPx(computedStyle.marginBottom);
            if (container.style.zIndex) {
                return padding + margin;
            }
            return padding + margin + this.calculateBorderMarging(container.parentElement);
        }
        return 0;
    }
    onSpreadChange(newSpread) {
        this.spreadChange.emit(newSpread);
    }
    activateTextlayerIfNecessary(options) {
        if (this.textLayer === undefined) {
            if (!this.handTool) {
                if (options) {
                    options.set('textLayerMode', pdfDefaultOptions.textLayerMode);
                }
                this.textLayer = true;
                if (this.showFindButton === undefined) {
                    this.showFindButton = true;
                    setTimeout(() => {
                        // todo remove this hack:
                        const viewFind = document.getElementById('viewFind');
                        if (viewFind) {
                            viewFind.classList.remove('invisible');
                        }
                        const findbar = document.getElementById('findbar');
                        if (findbar) {
                            findbar.classList.remove('invisible');
                        }
                    });
                }
            }
            else {
                if (options) {
                    options.set('textLayerMode', this.showHandToolButton ? pdfDefaultOptions.textLayerMode : 0);
                }
                if (!this.showHandToolButton) {
                    if (this.showFindButton || this.showFindButton === undefined) {
                        this.ngZone.run(() => {
                            this.showFindButton = false;
                        });
                        if (this.logLevel >= VerbosityLevel.WARNINGS) {
                            console.warn(
                            // tslint:disable-next-line:max-line-length
                            'Hiding the "find" button because the text layer of the PDF file is not rendered. Use [textLayer]="true" to enable the find button.');
                        }
                    }
                    if (this.showHandToolButton) {
                        if (this.logLevel >= VerbosityLevel.WARNINGS) {
                            console.warn(
                            // tslint:disable-next-line:max-line-length
                            'Hiding the "hand tool / selection mode" menu because the text layer of the PDF file is not rendered. Use [textLayer]="true" to enable the the menu items.');
                            this.showHandToolButton = false;
                        }
                    }
                }
            }
        }
        else {
            if (this.textLayer) {
                // todo: is this a redundant check?
                if (options) {
                    options.set('textLayerMode', pdfDefaultOptions.textLayerMode);
                }
                this.textLayer = true;
                if (this.showFindButton === undefined) {
                    this.showFindButton = true;
                    setTimeout(() => {
                        // todo remove this hack:
                        const viewFind = document.getElementById('viewFind');
                        if (viewFind) {
                            viewFind.classList.remove('invisible');
                        }
                        const findbar = document.getElementById('findbar');
                        if (findbar) {
                            findbar.classList.remove('invisible');
                        }
                    });
                }
            }
            else {
                // todo: is the else branch dead code?
                if (options) {
                    options.set('textLayerMode', 0);
                }
                this.textLayer = false;
                if (this.showFindButton) {
                    if (this.logLevel >= VerbosityLevel.WARNINGS) {
                        // tslint:disable-next-line:max-line-length
                        console.warn('Hiding the "find" button because the text layer of the PDF file is not rendered. Use [textLayer]="true" to enable the find button.');
                        this.ngZone.run(() => {
                            this.showFindButton = false;
                        });
                    }
                }
                if (this.showHandToolButton) {
                    if (this.logLevel >= VerbosityLevel.WARNINGS) {
                        console.warn(
                        // tslint:disable-next-line:max-line-length
                        'Hiding the "hand tool / selection mode" menu because the text layer of the PDF file is not rendered. Use [textLayer]="true" to enable the the menu items.');
                        this.showHandToolButton = false;
                    }
                }
            }
        }
    }
    async overrideDefaultSettings() {
        const options = window.PDFViewerApplicationOptions;
        // tslint:disable-next-line:forin
        for (const key in pdfDefaultOptions) {
            options.set(key, pdfDefaultOptions[key]);
        }
        options.set('disablePreferences', true);
        await this.setZoom();
        options.set('ignoreKeyboard', this.ignoreKeyboard);
        options.set('ignoreKeys', this.ignoreKeys);
        options.set('acceptKeys', this.acceptKeys);
        options.set('wheelAction', this.wheelAction);
        this.activateTextlayerIfNecessary(options);
        if (this.scrollMode || this.scrollMode === ScrollModeType.vertical) {
            options.set('scrollModeOnLoad', this.scrollMode);
        }
        const sidebarVisible = this.sidebarVisible;
        const PDFViewerApplication = window.PDFViewerApplication;
        if (sidebarVisible !== undefined) {
            PDFViewerApplication.sidebarViewOnLoad = sidebarVisible ? 1 : 0;
            if (PDFViewerApplication.appConfig) {
                PDFViewerApplication.appConfig.sidebarViewOnLoad = sidebarVisible ? this.activeSidebarView : 0;
            }
            options.set('sidebarViewOnLoad', this.sidebarVisible ? this.activeSidebarView : 0);
        }
        if (this.spread === 'even') {
            options.set('spreadModeOnLoad', 2);
            if (PDFViewerApplication.pdfViewer) {
                PDFViewerApplication.pdfViewer.spreadMode = 2;
            }
            this.onSpreadChange('even');
        }
        else if (this.spread === 'odd') {
            options.set('spreadModeOnLoad', 1);
            if (PDFViewerApplication.pdfViewer) {
                PDFViewerApplication.pdfViewer.spreadMode = 1;
            }
            this.onSpreadChange('odd');
        }
        else {
            options.set('spreadModeOnLoad', 0);
            if (PDFViewerApplication.pdfViewer) {
                PDFViewerApplication.pdfViewer.spreadMode = 0;
            }
            this.onSpreadChange('off');
        }
        if (this.printResolution) {
            options.set('printResolution', this.printResolution);
        }
        if (this.showBorders === false) {
            options.set('removePageBorders', !this.showBorders);
        }
    }
    openPDF() {
        ServiceWorkerOptions.showUnverifiedSignatures = this.showUnverifiedSignatures;
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.enablePrint = this.enablePrint;
        NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized = true;
        if (this._src) {
            this.ngxExtendedPdfViewerIncompletelyInitialized = false;
            if (!this.listenToURL) {
                PDFViewerApplication.pdfLinkService.setHash = function () { };
            }
            this.initTimeout = null;
            this.selectCursorTool();
            PDFViewerApplication.eventBus.on('textlayerrendered', (x) => {
                this.ngZone.run(() => this.textLayerRendered.emit(x));
            });
            PDFViewerApplication.eventBus.on('scrollmodechanged', (x) => {
                this.ngZone.run(() => this.scrollModeChange.emit(x.mode));
            });
            PDFViewerApplication.eventBus.on('progress', (x) => {
                this.ngZone.run(() => this.progress.emit(x));
            });
            PDFViewerApplication.eventBus.on('pagesloaded', async (x) => {
                this.ngZone.run(() => this.pagesLoaded.emit(x));
                this.removeScrollbarInInititeScrollMode();
                if (this.rotation !== undefined && this.rotation !== null) {
                    const r = Number(this.rotation);
                    if (r === 0 || r === 90 || r === 180 || r === 270) {
                        PDFViewerApplication.pdfViewer.pagesRotation = r;
                    }
                }
                setTimeout(() => {
                    if (!this.shuttingDown) {
                        // hurried users sometimes reload the PDF before it has finished initializing
                        if (this.nameddest) {
                            PDFViewerApplication.pdfLinkService.goToDestination(this.nameddest);
                        }
                        else if (this.page) {
                            PDFViewerApplication.page = Number(this.page);
                        }
                        else if (this.pageLabel) {
                            PDFViewerApplication.pdfViewer.currentPageLabel = this.pageLabel;
                        }
                    }
                });
                await this.setZoom();
            });
            PDFViewerApplication.eventBus.on('pagerendered', (x) => {
                this.ngZone.run(() => {
                    this.pageRendered.emit(x);
                    this.removeScrollbarInInititeScrollMode();
                });
            });
            PDFViewerApplication.eventBus.on('pagerender', (x) => {
                this.ngZone.run(() => {
                    this.pageRender.emit(x);
                });
            });
            PDFViewerApplication.eventBus.on('download', (x) => {
                this.ngZone.run(() => {
                    this.pdfDownloaded.emit(x);
                });
            });
            PDFViewerApplication.eventBus.on('scalechanging', (x) => {
                setTimeout(() => {
                    this.currentZoomFactor.emit(x.scale);
                    this.cdr.markForCheck();
                });
                if (x.presetValue !== 'auto' && x.presetValue !== 'page-fit' && x.presetValue !== 'page-actual' && x.presetValue !== 'page-width') {
                    // ignore rounding differences
                    if (Math.abs(x.previousScale - x.scale) > 0.000001) {
                        this.zoom = x.scale * 100;
                        this.zoomChange.emit(x.scale * 100);
                    }
                }
                else if (x.previousPresetValue !== x.presetValue) {
                    // called when the user selects one of the text values of the zoom select dropdown
                    this.zoomChange.emit(x.presetValue);
                }
            });
            PDFViewerApplication.eventBus.on('rotationchanging', (x) => {
                this.ngZone.run(() => {
                    this.rotationChange.emit(x.pagesRotation);
                });
            });
            PDFViewerApplication.eventBus.on('fileinputchange', (x) => {
                this.ngZone.run(() => {
                    if (x.fileInput.files && x.fileInput.files.length >= 1) {
                        // drag and drop
                        this.srcChange.emit(x.fileInput.files[0].name);
                    }
                    else {
                        // regular file open dialog
                        const path = x.fileInput?.value?.replace('C:\\fakepath\\', '');
                        this.srcChange.emit(path);
                    }
                });
            });
            PDFViewerApplication.eventBus.on('cursortoolchanged', (x) => {
                this.ngZone.run(() => {
                    this.handTool = x.tool === PdfCursorTools.HAND;
                    this.handToolChange.emit(x.tool === PdfCursorTools.HAND);
                });
            });
            PDFViewerApplication.eventBus.on('sidebarviewchanged', (x) => {
                this.ngZone.run(() => {
                    this.sidebarVisibleChange.emit(x.view > 0);
                    if (x.view > 0) {
                        this.activeSidebarViewChange.emit(x.view);
                    }
                    if (this.sidebarComponent) {
                        this.sidebarComponent.showToolbarWhenNecessary();
                    }
                });
            });
            PDFViewerApplication.eventBus.on('documentloaded', (pdfLoadedEvent) => {
                this.ngZone.run(() => {
                    this.loadComplete(pdfLoadedEvent.source.pdfDocument);
                });
            });
            const hideSidebarToolbar = () => {
                this.ngZone.run(() => {
                    if (this.sidebarComponent) {
                        this.sidebarComponent.showToolbarWhenNecessary();
                    }
                });
            };
            PDFViewerApplication.eventBus.on('outlineloaded', hideSidebarToolbar);
            PDFViewerApplication.eventBus.on('attachmentsloaded', hideSidebarToolbar);
            PDFViewerApplication.eventBus.on('layersloaded', hideSidebarToolbar);
            PDFViewerApplication.eventBus.on('annotationlayerrendered', (event) => this.annotationLayerRendered.emit(event));
            PDFViewerApplication.eventBus.on('annotationeditorlayerrendered', (event) => this.annotationEditorLayerRendered.emit(event));
            PDFViewerApplication.eventBus.on('xfalayerrendered', (event) => this.xfaLayerRendered.emit(event));
            PDFViewerApplication.eventBus.on('outlineloaded', (event) => this.outlineLoaded.emit(event));
            PDFViewerApplication.eventBus.on('attachmentsloaded', (event) => this.attachmentsloaded.emit(event));
            PDFViewerApplication.eventBus.on('layersloaded', (event) => this.layersloaded.emit(event));
            PDFViewerApplication.eventBus.on('updatefindcontrolstate', (x) => {
                if (x.state === FindState.NOT_FOUND) {
                    this.updateFindMatchesCount.emit({ current: 0, total: 0 });
                }
                else if (x.matchesCount.total) {
                    x.matchesCount.matches = PDFViewerApplication.findController._pageMatches;
                    x.matchesCount.matchesLength = PDFViewerApplication.findController._pageMatchesLength;
                    x.matchesCount.matchesColor = PDFViewerApplication.findController._pageMatchesColor;
                    this.updateFindMatchesCount.emit(x.matchesCount);
                }
                if (this.updateFindState) {
                    this.updateFindState.emit(x.state);
                }
            });
            PDFViewerApplication.eventBus.on('updatefindmatchescount', (x) => {
                x.matchesCount.matches = PDFViewerApplication.findController._pageMatches;
                x.matchesCount.matchesLength = PDFViewerApplication.findController._pageMatchesLength;
                x.matchesCount.matchesColor = PDFViewerApplication.findController._pageMatchesColor;
                this.updateFindMatchesCount.emit(x.matchesCount);
            });
            PDFViewerApplication.eventBus.on('pagechanging', (x) => {
                if (!this.shuttingDown) {
                    // hurried users sometimes reload the PDF before it has finished initializing
                    this.ngZone.run(() => {
                        const currentPage = PDFViewerApplication.pdfViewer.currentPageNumber;
                        const currentPageLabel = PDFViewerApplication.pdfViewer.currentPageLabel;
                        if (currentPage !== this.page) {
                            this.pageChange.emit(currentPage);
                        }
                        if (currentPageLabel !== this.pageLabel) {
                            this.pageLabelChange.emit(currentPageLabel);
                        }
                    });
                }
            });
            setTimeout(async () => this.checkHeight(), 100);
            // open a file in the viewer
            if (!!this._src) {
                const options = {
                    password: this.password,
                    verbosity: this.logLevel,
                };
                if (this._src['range']) {
                    options.range = this._src['range'];
                }
                if (this.httpHeaders) {
                    options.httpHeaders = this.httpHeaders;
                }
                if (this.authorization) {
                    options.withCredentials = true;
                    const isAuthBoolean = typeof this.authorization == "boolean";
                    if (!isAuthBoolean) {
                        if (!options.httpHeaders)
                            options.httpHeaders = {};
                        options.httpHeaders.Authorization = this.authorization;
                    }
                }
                options.baseHref = this.baseHref;
                PDFViewerApplication.onError = (error) => this.pdfLoadingFailed.emit(error);
                this.ngZone.runOutsideAngular(async () => {
                    if (typeof this._src === 'string') {
                        options.url = this._src;
                    }
                    else if (this._src instanceof ArrayBuffer) {
                        options.data = this._src;
                    }
                    else if (this._src instanceof Uint8Array) {
                        options.data = this._src;
                    }
                    options.rangeChunkSize = pdfDefaultOptions.rangeChunkSize;
                    await PDFViewerApplication.open(options);
                    this.pdfLoadingStarts.emit({});
                    // await this.setZoom();
                    setTimeout(async () => this.setZoom());
                });
            }
            setTimeout(() => {
                if (!this.shuttingDown) {
                    // hurried users sometimes reload the PDF before it has finished initializing
                    if (this.page) {
                        PDFViewerApplication.page = Number(this.page);
                    }
                }
            }, 100);
        }
    }
    removeScrollbarInInititeScrollMode() {
        if (this.pageViewMode === 'infinite-scroll') {
            setTimeout(() => {
                if (this.pageViewMode === 'infinite-scroll') {
                    const viewer = document.getElementById('viewer');
                    if (viewer) {
                        const height = viewer.clientHeight + 17;
                        const zoom = document.getElementsByClassName('zoom')[0];
                        if (this.primaryMenuVisible) {
                            this.height = height + 35 + 'px';
                        }
                        else {
                            if (height > 17) {
                                this.height = height + 'px';
                            }
                        }
                        if (zoom) {
                            zoom.style.height = this.height;
                        }
                    }
                }
            });
        }
    }
    async openPDF2() {
        this.overrideDefaultSettings();
        const PDFViewerApplication = window.PDFViewerApplication;
        // #802 clear the form data; otherwise the "download" dialogs opens
        PDFViewerApplication.pdfDocument?.annotationStorage?.resetModified();
        await PDFViewerApplication.close();
        this.formData = {};
        this.formIdToFieldName = {};
        this.formRadioButtonValueToId = {};
        const options = {
            password: this.password,
            verbosity: this.logLevel,
        };
        if (this._src && this._src['range']) {
            options.range = this._src['range'];
        }
        if (this.httpHeaders) {
            options.httpHeaders = this.httpHeaders;
        }
        if (this.authorization) {
            options.withCredentials = true;
            const isAuthBoolean = typeof this.authorization == "boolean";
            if (!isAuthBoolean) {
                if (!options.httpHeaders)
                    options.httpHeaders = {};
                options.httpHeaders.Authorization = this.authorization;
            }
        }
        options.baseHref = this.baseHref;
        try {
            if (typeof this._src === 'string') {
                options.url = this._src;
            }
            else if (this._src instanceof ArrayBuffer) {
                options.data = this._src;
            }
            else if (this._src instanceof Uint8Array) {
                options.data = this._src;
            }
            options.rangeChunkSize = pdfDefaultOptions.rangeChunkSize;
            await PDFViewerApplication.open(options);
            this.pdfLoaded.emit({ pagesCount: PDFViewerApplication.pagesCount });
        }
        catch (error) {
            this.pdfLoadingFailed.emit(error);
        }
    }
    selectCursorTool() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('switchcursortool', { tool: this.handTool ? 1 : 0 });
    }
    async ngOnDestroy() {
        if (typeof window === 'undefined') {
            return; // fast escape for server side rendering
        }
        const originalPrint = NgxExtendedPdfViewerComponent.originalPrint;
        if (window && originalPrint && !originalPrint.toString().includes('printPdf')) {
            window.print = originalPrint;
        }
        const printContainer = document.querySelector('#printContainer');
        if (printContainer) {
            printContainer.parentElement?.removeChild(printContainer);
        }
        window.getFormValue = undefined;
        window.setFormValue = undefined;
        window.registerAcroformAnnotations = undefined;
        const PDFViewerApplication = window.PDFViewerApplication;
        this.shuttingDown = true;
        NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized = false;
        if (this.initTimeout) {
            clearTimeout(this.initTimeout);
            this.initTimeout = undefined;
        }
        if (PDFViewerApplication) {
            if (this.pinchOnMobileSupport) {
                this.pinchOnMobileSupport.destroyPinchZoom();
                this.pinchOnMobileSupport = undefined;
            }
            if (this.relativeCoordsSupport) {
                this.relativeCoordsSupport.destroyRelativeCoords();
                this.relativeCoordsSupport = undefined;
            }
            // #802 clear the form data; otherwise the "download" dialogs opens
            PDFViewerApplication.pdfDocument?.annotationStorage?.resetModified();
            this.formData = {};
            this.formIdToFieldName = {};
            this.formRadioButtonValueToId = {};
            PDFViewerApplication._cleanup();
            await PDFViewerApplication.close();
            if (PDFViewerApplication.printKeyDownListener) {
                removeEventListener('keydown', PDFViewerApplication.printKeyDownListener, true);
            }
            setTimeout(() => {
                if (PDFViewerApplication._boundEvents) {
                    PDFViewerApplication.unbindWindowEvents();
                }
                const bus = PDFViewerApplication.eventBus;
                if (bus) {
                    PDFViewerApplication.unbindEvents();
                    for (const key in bus._listeners) {
                        if (bus._listeners[key]) {
                            const list = bus._listeners[key];
                            // not sure if the for loop is necessary - but
                            // it might improve garbage collection if the "listeners"
                            // array is stored somewhere else
                            for (let i = 0; i < list.length; i++) {
                                list[i] = undefined;
                            }
                            bus._listeners[key] = undefined;
                        }
                    }
                }
                PDFViewerApplication.eventBus = null;
            });
        }
    }
    isPrimaryMenuVisible() {
        if (this.showToolbar) {
            const visible = this.showDownloadButton ||
                this.showFindButton ||
                this.showOpenFileButton ||
                this.showPagingButtons ||
                this.showPresentationModeButton ||
                this.showPrintButton ||
                this.showPropertiesButton ||
                this.showRotateButton ||
                this.showHandToolButton ||
                this.showScrollingButton ||
                this.showSpreadButton ||
                this.showSidebarButton ||
                this.showZoomButtons;
            if (visible) {
                return true;
            }
        }
        return false;
    }
    async ngOnChanges(changes) {
        if (typeof window === 'undefined') {
            return; // server side rendering
        }
        const PDFViewerApplication = window.PDFViewerApplication;
        const PDFViewerApplicationOptions = window.PDFViewerApplicationOptions;
        if (NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) {
            if ('src' in changes || 'base64Src' in changes) {
                if (this.srcChangeTriggeredByUser) {
                    this.srcChangeTriggeredByUser = false;
                }
                else {
                    if (!!this._src) {
                        if (this.ngxExtendedPdfViewerIncompletelyInitialized) {
                            this.openPDF();
                        }
                        else {
                            await this.openPDF2();
                        }
                    }
                    else {
                        // #802 clear the form data; otherwise the "download" dialogs opens
                        PDFViewerApplication.pdfDocument?.annotationStorage?.resetModified();
                        this.formData = {};
                        this.formIdToFieldName = {};
                        this.formRadioButtonValueToId = {};
                        let inputField = PDFViewerApplication.appConfig?.openFileInput;
                        if (!inputField) {
                            inputField = document.querySelector('#fileInput');
                        }
                        if (inputField) {
                            inputField.value = '';
                        }
                        await PDFViewerApplication.close();
                    }
                }
            }
            if ('enableDragAndDrop' in changes) {
                PDFViewerApplicationOptions.set('enableDragAndDrop', this.enableDragAndDrop);
            }
            if ('zoom' in changes) {
                (async () => this.setZoom())();
            }
            if ('maxZoom' in changes) {
                PDFViewerApplicationOptions.set('maxZoom', this.maxZoom);
            }
            if ('minZoom' in changes) {
                PDFViewerApplicationOptions.set('minZoom', this.minZoom);
            }
            if ('handTool' in changes) {
                this.selectCursorTool();
            }
            if ('page' in changes) {
                if (this.page) {
                    // tslint:disable-next-line: triple-equals
                    if (this.page != PDFViewerApplication.page) {
                        PDFViewerApplication.page = this.page;
                    }
                }
            }
            if ('pageLabel' in changes) {
                if (this.pageLabel) {
                    if (this.pageLabel !== PDFViewerApplication.pdfViewer.currentPageLabel) {
                        PDFViewerApplication.pdfViewer.currentPageLabel = this.pageLabel;
                    }
                }
            }
            if ('rotation' in changes) {
                if (this.rotation) {
                    const r = Number(this.rotation);
                    if (r === 0 || r === 90 || r === 180 || r === 270) {
                        PDFViewerApplication.pdfViewer.pagesRotation = r;
                    }
                }
                else {
                    PDFViewerApplication.pdfViewer.pagesRotation = 0;
                }
            }
            if ('scrollMode' in changes) {
                if (this.scrollMode || this.scrollMode === ScrollModeType.vertical) {
                    if (PDFViewerApplication.pdfViewer.scrollMode !== Number(this.scrollMode)) {
                        PDFViewerApplication.eventBus.dispatch('switchscrollmode', { mode: Number(this.scrollMode) });
                    }
                }
            }
            if ('sidebarVisible' in changes || 'activeSidebarView' in changes) {
                if (this.sidebarVisible) {
                    const view = Number(this.activeSidebarView);
                    if (view === 1 || view === 2 || view === 3 || view === 4) {
                        PDFViewerApplication.pdfSidebar.switchView(view, true);
                    }
                    else {
                        console.error('[activeSidebarView] must be an integer value between 1 and 4');
                    }
                }
                else {
                    PDFViewerApplication.pdfSidebar.close();
                }
            }
            if ('filenameForDownload' in changes) {
                PDFViewerApplication.appConfig.filenameForDownload = this.filenameForDownload;
            }
            if ('nameddest' in changes) {
                if (this.nameddest) {
                    PDFViewerApplication.pdfLinkService.goToDestination(this.nameddest);
                }
            }
            if ('spread' in changes) {
                if (this.spread === 'even') {
                    PDFViewerApplication.spreadModeOnLoad = 2;
                    PDFViewerApplication.pdfViewer.spreadMode = 2;
                    this.onSpreadChange('even');
                }
                else if (this.spread === 'odd') {
                    PDFViewerApplication.spreadModeOnLoad = 1;
                    PDFViewerApplication.pdfViewer.spreadMode = 1;
                    this.onSpreadChange('odd');
                }
                else {
                    PDFViewerApplication.spreadModeOnLoad = 0;
                    PDFViewerApplication.pdfViewer.spreadMode = 0;
                    this.onSpreadChange('off');
                }
            }
            if ('wheelAction' in changes) {
                PDFViewerApplicationOptions.set('wheelAction', this.wheelAction);
            }
            this.hideToolbarIfItIsEmpty();
            setTimeout(() => this.calcViewerPositionTop());
        } // end of if (NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized)
        if ('printResolution' in changes) {
            const options = PDFViewerApplicationOptions;
            if (options) {
                options.set('printResolution', this.printResolution);
            }
        }
        if ('ignoreKeyboard' in changes) {
            const options = PDFViewerApplicationOptions;
            if (options) {
                this.overrideDefaultSettings();
            }
        }
        if ('ignoreKeys' in changes) {
            const options = PDFViewerApplicationOptions;
            if (options) {
                this.overrideDefaultSettings();
            }
        }
        if ('acceptKeys' in changes) {
            const options = PDFViewerApplicationOptions;
            if (options) {
                this.overrideDefaultSettings();
            }
        }
        if ('showBorders' in changes) {
            if (!changes['showBorders'].isFirstChange()) {
                const options = PDFViewerApplicationOptions;
                if (options) {
                    this.overrideDefaultSettings();
                    const viewer = document.getElementById('viewer');
                    if (this.showBorders) {
                        viewer.classList.remove('removePageBorders');
                    }
                    else {
                        viewer.classList.add('removePageBorders');
                    }
                    if (PDFViewerApplication.pdfViewer) {
                        PDFViewerApplication.pdfViewer.removePageBorders = !this.showBorders;
                    }
                    const zoomEvent = {
                        source: viewer,
                        // tslint:disable-next-line:no-bitwise
                        scale: (Number(this.zoom) | 100) / 100,
                        presetValue: this.zoom,
                    };
                    PDFViewerApplication.eventBus.dispatch('scalechanging', zoomEvent);
                }
            }
        }
        if ('showUnverifiedSignatures' in changes) {
            if (PDFViewerApplication && PDFViewerApplication.pdfDocument) {
                PDFViewerApplication.pdfDocument._transport.messageHandler.send('showUnverifiedSignatures', this.showUnverifiedSignatures);
            }
        }
        if ('formData' in changes) {
            if (!changes['formData'].isFirstChange()) {
                this.updateFormFields(this.formData, changes['formData'].previousValue);
            }
        }
        if ('enablePrint' in changes) {
            if (!changes['enablePrint'].isFirstChange()) {
                PDFViewerApplication.enablePrint = this.enablePrint;
            }
        }
        if (('customFindbar' in changes && !changes['customFindbar'].isFirstChange()) ||
            ('customFindbarButtons' in changes && !changes['customFindbarButtons'].isFirstChange()) ||
            ('customFindbarInputArea' in changes && !changes['customFindbarInputArea'].isFirstChange()) ||
            ('customToolbar' in changes && !changes['customToolbar'].isFirstChange())) {
            if (this.dummyComponents) {
                this.dummyComponents.addMissingStandardWidgets();
            }
        }
        if ('pdfBackgroundColor' in changes && !changes['pdfBackgroundColor '].isFirstChange()) {
            PDFViewerApplicationOptions.set('pdfBackgroundColor', this.pdfBackground);
        }
        if ('pdfBackgroundColorToReplace' in changes && !changes['pdfBackgroundColorToReplace'].isFirstChange()) {
            PDFViewerApplicationOptions.set('pdfBackgroundColorToReplace', this.pdfBackgroundColorToReplace);
        }
        if ('pageViewMode' in changes && !changes['pageViewMode'].isFirstChange()) {
            this.removeScrollbarInInititeScrollMode();
        }
        if ('replaceBrowserPrint' in changes) {
            if (this.replaceBrowserPrint) {
                if (window.printPDF) {
                    window.print = window.printPDF;
                }
            }
            else {
                const originalPrint = NgxExtendedPdfViewerComponent.originalPrint;
                if (originalPrint && !originalPrint.toString().includes('printPdf')) {
                    window.print = originalPrint;
                }
            }
        }
        setTimeout(() => this.calcViewerPositionTop());
    }
    async setZoom() {
        // sometimes ngOnChanges calls this method before the page is initialized,
        // so let's check if this.root is already defined
        if (this.root) {
            const PDFViewerApplication = window.PDFViewerApplication;
            let zoomAsNumber = this.zoom;
            if (String(zoomAsNumber).endsWith('%')) {
                zoomAsNumber = Number(String(zoomAsNumber).replace('%', '')) / 100;
            }
            else if (!isNaN(Number(zoomAsNumber))) {
                zoomAsNumber = Number(zoomAsNumber) / 100;
            }
            if (!zoomAsNumber) {
                if (!PDFViewerApplication.store) {
                    // It's difficult to prevent calling this method to early, so we need this check.
                    // setZoom() is called later again, when the PDF document has been loaded and its
                    // fingerprint has been calculated.
                }
                else {
                    const userSetting = await PDFViewerApplication.store.get('zoom');
                    if (userSetting) {
                        if (!isNaN(Number(userSetting))) {
                            zoomAsNumber = Number(userSetting) / 100;
                        }
                        else {
                            zoomAsNumber = userSetting;
                        }
                    }
                    else {
                        zoomAsNumber = 'auto';
                    }
                }
            }
            if (PDFViewerApplication) {
                const PDFViewerApplicationOptions = window.PDFViewerApplicationOptions;
                PDFViewerApplicationOptions.set('defaultZoomValue', zoomAsNumber);
            }
            const scaleDropdownField = this.root.nativeElement.querySelector('#scaleSelect');
            if (scaleDropdownField) {
                if (this.zoom === 'auto' || this.zoom === 'page-fit' || this.zoom === 'page-actual' || this.zoom === 'page-width') {
                    scaleDropdownField.value = this.zoom;
                }
                else {
                    scaleDropdownField.value = 'custom';
                    if (scaleDropdownField.options) {
                        for (const option of scaleDropdownField.options) {
                            if (option.value === 'custom') {
                                option.textContent = `${Math.round(Number(zoomAsNumber) * 100000) / 1000}%`;
                            }
                        }
                    }
                }
            }
            if (PDFViewerApplication.pdfViewer) {
                PDFViewerApplication.pdfViewer.currentScaleValue = zoomAsNumber || 'auto';
            }
        }
    }
    onResize() {
        const pdfViewer = document.getElementsByClassName('html');
        if (pdfViewer && pdfViewer.length > 0) {
            const container = document.getElementById('outerContainer');
            if (container) {
                const width = container.clientWidth;
                this.toolbarWidthInPixels = width;
                if (this.secondaryToolbarComponent) {
                    this.secondaryToolbarComponent.checkVisibility();
                }
            }
            this.checkHeight();
        }
        try {
            const observer = new ResizeObserver(() => this.removeScrollbarInInititeScrollMode());
            const viewer = document.getElementById('viewer');
            if (viewer) {
                observer.observe(viewer);
            }
        }
        catch (exception) {
            console.log('ResizeObserver is not supported by your browser');
        }
    }
    onContextMenu() {
        return this.contextMenuAllowed;
    }
    onSecondaryMenuIsEmpty(hideKebabButton) {
        this.hideKebabMenuForSecondaryToolbar = hideKebabButton;
        if (hideKebabButton) {
            if (!this.isPrimaryMenuVisible()) {
                this.primaryMenuVisible = false;
            }
        }
    }
    registerAcroformAnnotations(sortedAnnotations) {
        let ids = {};
        let duplicates = {};
        for (let a of sortedAnnotations) {
            if (a.fieldName) {
                if (ids[a.fieldName]) {
                    duplicates[a.fieldName] = a;
                }
                ids[a.fieldName] = a;
            }
        }
        for (let a of sortedAnnotations) {
            if (a.fieldName && duplicates[a.fieldName]) {
                this.formIdToFieldName[a.id] = a.fieldName;
            }
        }
    }
    getFormValue(key) {
        if (this.formData[key] === undefined) {
            if (key.includes('/')) {
                key = key.split('/')[0];
            }
        }
        return { value: this.formData[key] };
    }
    setFormValue(key, value) {
        if (!this.formData) {
            this.formData = {};
        }
        if (this.formIdToFieldName[key]) {
            // radiobuttons
            this.formData[this.formIdToFieldName[key]] = value;
        }
        else {
            this.formData[key] = value;
        }
        this.ngZone.run(() => this.formDataChange.emit(this.formData));
    }
    assignFormIdAndFieldName(key, fieldName, radioButtonField) {
        this.formIdToFieldName[key] = fieldName;
        if (radioButtonField) {
            this.formRadioButtonValueToId[radioButtonField] = key;
        }
    }
    updateFormFields(formData, previousFormData) {
        const PDFViewerApplication = window.PDFViewerApplication;
        if (!PDFViewerApplication || !PDFViewerApplication.pdfDocument || !PDFViewerApplication.pdfDocument.annotationStorage) {
            // ngOnChanges calls this method too early - so just ignore it
            return;
        }
        const storage = PDFViewerApplication.pdfDocument.annotationStorage;
        for (const key in formData) {
            if (formData.hasOwnProperty(key)) {
                if (formData[key] !== previousFormData[key]) {
                    const field = document.querySelector("input[name='" + key + "']");
                    if (field instanceof HTMLInputElement) {
                        if (field.type === 'radio') {
                            const fields = document.querySelectorAll("input[name='" + key + "']");
                            const fieldIdToActivate = this.formRadioButtonValueToId[formData[key]];
                            fields.forEach((field) => {
                                const shortId = field.id.replace('pdfjs_internal_id_', '');
                                field.checked = shortId === fieldIdToActivate;
                                for (let v in this.formRadioButtonValueToId) {
                                    if (v) {
                                        if (this.formRadioButtonValueToId[v] === shortId) {
                                            storage.setValue(shortId, key, { value: formData[key] === v, emitMessage: false });
                                        }
                                    }
                                }
                            });
                        }
                        else if (field.type === 'checkbox') {
                            storage.setValue(field.id, key, { value: formData[key], emitMessage: false });
                            field.checked = formData[key];
                        }
                        else {
                            storage.setValue(field.id, key, { value: formData[key], emitMessage: false });
                            field.value = formData[key];
                        }
                    }
                    else if (!field) {
                        const textarea = document.querySelector("textarea[name='" + key + "']");
                        if (textarea) {
                            storage.setValue(textarea.id, key, { value: formData[key], emitMessage: false });
                            textarea.value = formData[key];
                        }
                        else {
                            const dropdown = document.querySelector("select[name='" + key + "']");
                            if (dropdown) {
                                storage.setValue(dropdown.id, key, { value: formData[key], emitMessage: false });
                                if (dropdown.multiple) {
                                    const options = this.formData[key];
                                    for (let i = 0; i < dropdown.options.length; i++) {
                                        dropdown.options[i].selected = options.indexOf(dropdown.options[i].value) >= 0;
                                    }
                                }
                                else {
                                    dropdown.value = formData[key];
                                }
                            }
                        }
                    }
                    else {
                        const fieldName = this.formIdToFieldName[key];
                    }
                }
            }
        }
        for (const key in previousFormData) {
            if (previousFormData.hasOwnProperty(key)) {
                if (!formData.hasOwnProperty(key)) {
                    const field = document.querySelector("input[name='" + key + "']");
                    if (field instanceof HTMLInputElement) {
                        // this entry has been deleted
                        if (field.type === 'checkbox') {
                            storage.setValue(field.id, key, { value: false, emitMessage: false });
                            field.checked = false;
                        }
                        else {
                            storage.setValue(field.id, key, { value: undefined, emitMessage: false });
                            field.value = '';
                        }
                    }
                    else if (!field) {
                        const textarea = document.querySelector("textarea[name='" + key + "']");
                        if (textarea) {
                            storage.setValue(textarea.id, key, { value: undefined, emitMessage: false });
                            textarea.value = '';
                        }
                    }
                }
            }
        }
    }
    loadComplete(pdf /* PDFDocumentProxy */) {
        /** This method has been inspired by https://medium.com/factory-mind/angular-pdf-forms-fa72b15c3fbd. Thanks, Jonny Fox! */
        this.hasSignature = false;
        this.buttonValues = {};
        for (let i = 1; i <= pdf.numPages; i++) {
            // track the current page
            pdf
                .getPage(i)
                .then((p) => {
                // get the annotations of the current page
                return p.getAnnotations();
            })
                .then((annotations) => {
                // ugly cast due to missing typescript definitions
                // please contribute to complete @types/pdfjs-dist
                annotations
                    .filter((a) => a.subtype === 'Widget') // get the form field annotation only
                    .forEach((a) => {
                    // Additional PDF Form Field Types #567: Store the exportValue for the check boxes and buttonValue for radio buttons for quick reference
                    if (a.checkBox)
                        this.buttonValues[a.id] = a.exportValue;
                    else if (a.radioButton)
                        this.buttonValues[a.id] = a.buttonValue;
                    if (a.fieldType === 'Sig') {
                        this.ngZone.run(() => {
                            this.hasSignature = true;
                            setTimeout(() => {
                                const viewerContainer = document.querySelector('#viewerContainer');
                                viewerContainer.scrollBy(0, -32);
                            });
                        });
                    }
                    /*
                    // get the rectangle that represent the single field
                    // and resize it according to the current DPI
                    const fieldRect = currentPage.getViewport(dpiRatio).convertToViewportRectangle(a.rect);
      
                    // add the corresponding input
                    this.addInput(a, fieldRect);
                    */
                });
            });
        }
        this.pdfLoaded.emit({ pagesCount: pdf.numPages });
    }
    async zoomToPageWidth(event) {
        if (this.handTool) {
            if (!pdfDefaultOptions.doubleTapZoomsInHandMode) {
                return;
            }
        }
        else {
            if (!pdfDefaultOptions.doubleTapZoomsInTextSelectionMode) {
                return;
            }
        }
        const PDFViewerApplication = window.PDFViewerApplication;
        const desiredCenterY = event.clientY;
        const previousScale = PDFViewerApplication.pdfViewer.currentScale;
        if (this.zoom !== pdfDefaultOptions.doubleTapZoomFactor && this.zoom + '%' !== pdfDefaultOptions.doubleTapZoomFactor) {
            this.previousZoom = this.zoom;
            this.zoom = pdfDefaultOptions.doubleTapZoomFactor; // by default: 'page-width';
            await this.setZoom();
        }
        else if (pdfDefaultOptions.doubleTapResetsZoomOnSecondDoubleTap) {
            if (this.previousZoom) {
                this.zoom = this.previousZoom;
            }
            else {
                this.zoom = 'page-width';
            }
            await this.setZoom();
        }
        else {
            return;
        }
        const currentScale = PDFViewerApplication.pdfViewer.currentScale;
        const scaleCorrectionFactor = currentScale / previousScale - 1;
        const rect = PDFViewerApplication.pdfViewer.container.getBoundingClientRect();
        const dy = desiredCenterY - rect.top;
        PDFViewerApplication.pdfViewer.container.scrollTop += dy * scaleCorrectionFactor;
    }
}
NgxExtendedPdfViewerComponent.originalPrint = window.print;
NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized = false;
/** @nocollapse */ NgxExtendedPdfViewerComponent.ɵfac = function NgxExtendedPdfViewerComponent_Factory(t) { return new (t || NgxExtendedPdfViewerComponent)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(i1.PDFNotificationService), i0.ɵɵdirectiveInject(i2.Location), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.PlatformLocation), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i3.NgxExtendedPdfViewerService), i0.ɵɵdirectiveInject(i0.Renderer2)); };
/** @nocollapse */ NgxExtendedPdfViewerComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: NgxExtendedPdfViewerComponent, selectors: [["ngx-extended-pdf-viewer"]], viewQuery: function NgxExtendedPdfViewerComponent_Query(rf, ctx) { if (rf & 1) {
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
    } }, hostBindings: function NgxExtendedPdfViewerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("contextmenu", function NgxExtendedPdfViewerComponent_contextmenu_HostBindingHandler() { return ctx.onContextMenu(); });
    } }, inputs: { customFindbarInputArea: "customFindbarInputArea", customToolbar: "customToolbar", customFindbar: "customFindbar", customFindbarButtons: "customFindbarButtons", customPdfViewer: "customPdfViewer", customSecondaryToolbar: "customSecondaryToolbar", customSidebar: "customSidebar", customThumbnail: "customThumbnail", customFreeFloatingBar: "customFreeFloatingBar", showFreeFloatingBar: "showFreeFloatingBar", enableDragAndDrop: "enableDragAndDrop", formData: "formData", pageViewMode: "pageViewMode", scrollMode: "scrollMode", authorization: "authorization", httpHeaders: "httpHeaders", contextMenuAllowed: "contextMenuAllowed", enablePrint: "enablePrint", delayFirstView: "delayFirstView", showEditor: "showEditor", logLevel: "logLevel", relativeCoordsOptions: "relativeCoordsOptions", minifiedJSLibraries: "minifiedJSLibraries", printResolution: "printResolution", rotation: "rotation", src: "src", base64Src: "base64Src", minHeight: "minHeight", height: "height", useBrowserLocale: "useBrowserLocale", forceUsingLegacyES5: "forceUsingLegacyES5", backgroundColor: "backgroundColor", pdfBackground: "pdfBackground", pdfBackgroundColorToReplace: "pdfBackgroundColorToReplace", filenameForDownload: "filenameForDownload", ignoreKeyboard: "ignoreKeyboard", ignoreKeys: "ignoreKeys", acceptKeys: "acceptKeys", imageResourcesPath: "imageResourcesPath", localeFolderPath: "localeFolderPath", language: "language", listenToURL: "listenToURL", nameddest: "nameddest", password: "password", replaceBrowserPrint: "replaceBrowserPrint", showUnverifiedSignatures: "showUnverifiedSignatures", startTabindex: "startTabindex", showSidebarButton: "showSidebarButton", sidebarVisible: "sidebarVisible", activeSidebarView: "activeSidebarView", showFindButton: "showFindButton", showFindHighlightAll: "showFindHighlightAll", showFindMatchCase: "showFindMatchCase", showFindCurrentPageOnly: "showFindCurrentPageOnly", showFindPageRange: "showFindPageRange", showFindEntireWord: "showFindEntireWord", showFindEntirePhrase: "showFindEntirePhrase", showFindIgnoreAccents: "showFindIgnoreAccents", showFindFuzzySearch: "showFindFuzzySearch", showFindResultsCount: "showFindResultsCount", showFindMessages: "showFindMessages", showPagingButtons: "showPagingButtons", showZoomButtons: "showZoomButtons", showPresentationModeButton: "showPresentationModeButton", showOpenFileButton: "showOpenFileButton", showPrintButton: "showPrintButton", showDownloadButton: "showDownloadButton", theme: "theme", formTheme: "formTheme", showToolbar: "showToolbar", showSecondaryToolbarButton: "showSecondaryToolbarButton", showRotateButton: "showRotateButton", handTool: "handTool", showHandToolButton: "showHandToolButton", showScrollingButton: "showScrollingButton", showSpreadButton: "showSpreadButton", showPropertiesButton: "showPropertiesButton", showBorders: "showBorders", spread: "spread", page: "page", pageLabel: "pageLabel", textLayer: "textLayer", zoom: "zoom", zoomLevels: "zoomLevels", maxZoom: "maxZoom", minZoom: "minZoom", wheelAction: "wheelAction", mobileFriendlyZoom: "mobileFriendlyZoom" }, outputs: { formDataChange: "formDataChange", progress: "progress", srcChange: "srcChange", scrollModeChange: "scrollModeChange", afterPrint: "afterPrint", beforePrint: "beforePrint", currentZoomFactor: "currentZoomFactor", rotationChange: "rotationChange", annotationLayerRendered: "annotationLayerRendered", annotationEditorLayerRendered: "annotationEditorLayerRendered", xfaLayerRendered: "xfaLayerRendered", outlineLoaded: "outlineLoaded", attachmentsloaded: "attachmentsloaded", layersloaded: "layersloaded", sidebarVisibleChange: "sidebarVisibleChange", activeSidebarViewChange: "activeSidebarViewChange", handToolChange: "handToolChange", spreadChange: "spreadChange", thumbnailDrawn: "thumbnailDrawn", pageChange: "pageChange", pageLabelChange: "pageLabelChange", pagesLoaded: "pagesLoaded", pageRender: "pageRender", pageRendered: "pageRendered", pdfDownloaded: "pdfDownloaded", pdfLoaded: "pdfLoaded", pdfLoadingStarts: "pdfLoadingStarts", pdfLoadingFailed: "pdfLoadingFailed", textLayerRendered: "textLayerRendered", updateFindMatchesCount: "updateFindMatchesCount", updateFindState: "updateFindState", zoomChange: "zoomChange" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c3, decls: 10, vars: 7, consts: [[4, "ngIf"], [3, "zoom", "width"], [4, "ngTemplateOutlet"], ["defaultPdfViewer", ""], ["defaultFreeFloatingBar", ""], [1, "zoom"], ["root", ""], [1, "html"], [1, "body"], ["id", "outerContainer", 3, "resize"], ["class", "free-floating-bar", 4, "ngIf"], [3, "sidebarVisible", "showSidebarButton", "customSidebar", "customThumbnail", "mobileFriendlyZoomScale", "sidebarPositionTop", "thumbnailDrawn"], ["pdfsidebar", ""], ["id", "mainContainer"], [3, "customToolbar", "mobileFriendlyZoomScale", "primaryMenuVisible", "showDownloadButton", "showEditor", "showFindButton", "showHandToolButton", "showOpenFileButton", "showPrintButton", "showPagingButtons", "showPresentationModeButton", "showRotateButton", "showSecondaryToolbarButton", "showSidebarButton", "showZoomButtons", "textLayer", "toolbarMarginTop", "toolbarWidth", "zoomLevels", "onToolbarLoaded"], ["id", "editorFreeTextParamsToolbar", 1, "editorParamsToolbar", "hidden", "doorHangerRight"], [1, "editorParamsToolbarContainer"], [1, "editorParamsSetter"], ["for", "editorFreeTextColor", "data-l10n-id", "editor_free_text_font_color", 1, "editorParamsLabel"], ["type", "color", "id", "editorFreeTextColor", "tabindex", "100", 1, "editorParamsColor"], ["for", "editorFreeTextFontSize", "data-l10n-id", "editor_free_text_font_size", 1, "editorParamsLabel"], ["type", "range", "id", "editorFreeTextFontSize", "value", "10", "min", "5", "max", "100", "step", "1", "tabindex", "101", 1, "editorParamsSlider"], ["id", "editorInkParamsToolbar", 1, "editorParamsToolbar", "hidden", "doorHangerRight"], ["for", "editorInkColor", "data-l10n-id", "editor_ink_color", 1, "editorParamsLabel"], ["type", "color", "id", "editorInkColor", "tabindex", "102", 1, "editorParamsColor"], ["for", "editorInkThickness", "data-l10n-id", "editor_ink_thickness", 1, "editorParamsLabel"], ["type", "range", "id", "editorInkThickness", "value", "1", "min", "1", "max", "20", "step", "1", "tabindex", "103", 1, "editorParamsSlider"], ["for", "editorInkOpacity", "data-l10n-id", "editor_ink_opacity", 1, "editorParamsLabel"], ["type", "range", "id", "editorInkOpacity", "value", "100", "min", "1", "max", "100", "step", "1", "tabindex", "104", 1, "editorParamsSlider"], [3, "customSecondaryToolbar", "secondaryToolbarTop", "mobileFriendlyZoomScale", "showPresentationModeButton", "showOpenFileButton", "showPrintButton", "showDownloadButton", "showPagingButtons", "showRotateButton", "showHandToolButton", "showScrollingButton", "showSpreadButton", "showPropertiesButton", "spreadChange", "secondaryMenuIsEmpty"], ["pdfSecondaryToolbarComponent", ""], [3, "findbarLeft", "findbarTop", "mobileFriendlyZoomScale", "showFindButton", "customFindbarInputArea", "customFindbarButtons", "showFindCurrentPageOnly", "showFindEntirePhrase", "showFindEntireWord", "showFindFuzzySearch", "showFindHighlightAll", "showFindIgnoreAccents", "showFindMatchCase", "showFindMessages", "showFindPageRange", "showFindResultsCount"], ["id", "viewerContainer", "tabindex", "0"], ["class", "unverified-signature-warning", 4, "ngIf"], ["class", "modified-background-warning", 4, "ngIf"], ["id", "viewer", 1, "pdfViewer", 3, "dblclick"], ["id", "dialogContainer"], ["type", "file", "id", "fileInput", 1, "hidden"], ["id", "printContainer"], [1, "free-floating-bar"], [1, "unverified-signature-warning"], [1, "modified-background-warning"]], template: function NgxExtendedPdfViewerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c3);
        i0.ɵɵtemplate(0, NgxExtendedPdfViewerComponent_pdf_dark_theme_0_Template, 1, 0, "pdf-dark-theme", 0);
        i0.ɵɵtemplate(1, NgxExtendedPdfViewerComponent_pdf_light_theme_1_Template, 1, 0, "pdf-light-theme", 0);
        i0.ɵɵtemplate(2, NgxExtendedPdfViewerComponent_pdf_acroform_dark_theme_2_Template, 1, 0, "pdf-acroform-dark-theme", 0);
        i0.ɵɵtemplate(3, NgxExtendedPdfViewerComponent_pdf_acroform_default_theme_3_Template, 1, 0, "pdf-acroform-default-theme", 0);
        i0.ɵɵelement(4, "pdf-dynamic-css", 1);
        i0.ɵɵtemplate(5, NgxExtendedPdfViewerComponent_ng_content_5_Template, 1, 0, "ng-content", 2);
        i0.ɵɵtemplate(6, NgxExtendedPdfViewerComponent_ng_template_6_Template, 50, 67, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(8, NgxExtendedPdfViewerComponent_ng_template_8_Template, 0, 0, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r5 = i0.ɵɵreference(7);
        i0.ɵɵproperty("ngIf", ctx.theme === "dark");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.theme === "light");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.formTheme === "dark");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.formTheme === "light");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("zoom", ctx.mobileFriendlyZoomScale)("width", ctx.toolbarWidthInPixels);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.customPdfViewer ? ctx.customPdfViewer : _r5);
    } }, directives: [i2.NgIf, i4.PdfDarkThemeComponent, i5.PdfLightThemeComponent, i6.PdfAcroformDarkThemeComponent, i7.PdfAcroformDefaultThemeComponent, i8.DynamicCssComponent, i2.NgTemplateOutlet, i9.PdfSidebarComponent, i10.PdfDummyComponentsComponent, i11.PdfToolbarComponent, i12.PdfSecondaryToolbarComponent, i13.PdfFindbarComponent, i14.PdfContextMenuComponent, i15.PdfErrorMessageComponent, i16.PdfPasswordDialogComponent, i17.PdfDocumentPropertiesDialogComponent, i18.PdfPreparePrintingDialogComponent], pipes: [i2.AsyncPipe, i19.TranslatePipe], styles: ["#mainContainer.toolbar-hidden[_ngcontent-%COMP%]{margin-top:-30px}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxExtendedPdfViewerComponent, [{
        type: Component,
        args: [{ selector: 'ngx-extended-pdf-viewer', changeDetection: ChangeDetectionStrategy.OnPush, template: "<pdf-dark-theme *ngIf=\"theme === 'dark'\"></pdf-dark-theme>\r\n<pdf-light-theme *ngIf=\"theme === 'light'\"></pdf-light-theme>\r\n<pdf-acroform-dark-theme *ngIf=\"formTheme === 'dark'\"></pdf-acroform-dark-theme>\r\n<pdf-acroform-default-theme *ngIf=\"formTheme === 'light'\"></pdf-acroform-default-theme>\r\n\r\n<pdf-dynamic-css [zoom]=\"mobileFriendlyZoomScale\" [width]=\"toolbarWidthInPixels\"></pdf-dynamic-css>\r\n<ng-content *ngTemplateOutlet=\"customPdfViewer ? customPdfViewer : defaultPdfViewer\"></ng-content>\r\n\r\n<ng-template #defaultPdfViewer>\r\n  <div class=\"zoom\" [style.height]=\"minHeight ? minHeight : height\" #root>\r\n    <div class=\"html\">\r\n      <div class=\"body\" [style.backgroundColor]=\"backgroundColor\">\r\n        <div id=\"outerContainer\" (window:resize)=\"onResize()\">\r\n          <div class=\"free-floating-bar\" *ngIf=\"showFreeFloatingBar\">\r\n            <ng-content *ngTemplateOutlet=\"customFreeFloatingBar ? customFreeFloatingBar : defaultFreeFloatingBar\">\r\n            </ng-content>\r\n          </div>\r\n          <pdf-sidebar #pdfsidebar [sidebarVisible]=\"sidebarVisible || false\" [showSidebarButton]=\"showSidebarButton\"\r\n            [customSidebar]=\"customSidebar\" [customThumbnail]=\"customThumbnail\"\r\n            (thumbnailDrawn)=\"thumbnailDrawn.emit($event)\" [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\r\n            [sidebarPositionTop]=\"sidebarPositionTop\">\r\n          </pdf-sidebar>\r\n          <div id=\"mainContainer\" [class.toolbar-hidden]=\"!primaryMenuVisible\">\r\n            <pdf-dummy-components></pdf-dummy-components>\r\n\r\n            <pdf-toolbar [customToolbar]=\"customToolbar\" [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\r\n              [primaryMenuVisible]=\"primaryMenuVisible\"\r\n              [showDownloadButton]=\"showDownloadButton\" [showEditor]=\"showEditor\" [showFindButton]=\"showFindButton\"\r\n              [showHandToolButton]=\"showHandToolButton\" [showOpenFileButton]=\"showOpenFileButton\"\r\n              [showPrintButton]=\"showPrintButton && enablePrint\" [showPagingButtons]=\"showPagingButtons\"\r\n              [showPresentationModeButton]=\"showPresentationModeButton\" [showRotateButton]=\"showRotateButton\"\r\n              [showSecondaryToolbarButton]=\"showSecondaryToolbarButton && !hideKebabMenuForSecondaryToolbar\"\r\n              [showSidebarButton]=\"showSidebarButton\" [showZoomButtons]=\"showZoomButtons\" [textLayer]=\"textLayer\"\r\n              [toolbarMarginTop]=\"toolbarMarginTop\" [toolbarWidth]=\"toolbarWidth\"\r\n              (onToolbarLoaded)=\"onToolbarLoaded($event)\" [zoomLevels]=\"zoomLevels\"></pdf-toolbar>\r\n\r\n            <div class=\"editorParamsToolbar hidden doorHangerRight\" id=\"editorFreeTextParamsToolbar\">\r\n              <div class=\"editorParamsToolbarContainer\">\r\n                <div class=\"editorParamsSetter\">\r\n                  <label for=\"editorFreeTextColor\" class=\"editorParamsLabel\"\r\n                    data-l10n-id=\"editor_free_text_font_color\">Font Color</label>\r\n                  <input type=\"color\" id=\"editorFreeTextColor\" class=\"editorParamsColor\" tabindex=\"100\">\r\n                </div>\r\n                <div class=\"editorParamsSetter\">\r\n                  <label for=\"editorFreeTextFontSize\" class=\"editorParamsLabel\"\r\n                    data-l10n-id=\"editor_free_text_font_size\">Font Size</label>\r\n                  <input type=\"range\" id=\"editorFreeTextFontSize\" class=\"editorParamsSlider\" value=\"10\" min=\"5\"\r\n                    max=\"100\" step=\"1\" tabindex=\"101\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"editorParamsToolbar hidden doorHangerRight\" id=\"editorInkParamsToolbar\">\r\n              <div class=\"editorParamsToolbarContainer\">\r\n                <div class=\"editorParamsSetter\">\r\n                  <label for=\"editorInkColor\" class=\"editorParamsLabel\" data-l10n-id=\"editor_ink_color\">Color</label>\r\n                  <input type=\"color\" id=\"editorInkColor\" class=\"editorParamsColor\" tabindex=\"102\">\r\n                </div>\r\n                <div class=\"editorParamsSetter\">\r\n                  <label for=\"editorInkThickness\" class=\"editorParamsLabel\"\r\n                    data-l10n-id=\"editor_ink_thickness\">Thickness</label>\r\n                  <input type=\"range\" id=\"editorInkThickness\" class=\"editorParamsSlider\" value=\"1\" min=\"1\" max=\"20\"\r\n                    step=\"1\" tabindex=\"103\">\r\n                </div>\r\n                <div class=\"editorParamsSetter\">\r\n                  <label for=\"editorInkOpacity\" class=\"editorParamsLabel\"\r\n                    data-l10n-id=\"editor_ink_opacity\">Opacity</label>\r\n                  <input type=\"range\" id=\"editorInkOpacity\" class=\"editorParamsSlider\" value=\"100\" min=\"1\" max=\"100\"\r\n                    step=\"1\" tabindex=\"104\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <pdf-secondary-toolbar #pdfSecondaryToolbarComponent [customSecondaryToolbar]=\"customSecondaryToolbar\"\r\n              [secondaryToolbarTop]=\"secondaryToolbarTop\" [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\r\n              [showPresentationModeButton]=\"showPresentationModeButton\" [showOpenFileButton]=\"showOpenFileButton\"\r\n              [showPrintButton]=\"showPrintButton && enablePrint\" [showDownloadButton]=\"showDownloadButton\"\r\n              [showPagingButtons]=\"showPagingButtons\"\r\n              [showRotateButton]=\"showRotateButton\" [showHandToolButton]=\"showHandToolButton\"\r\n              [showScrollingButton]=\"showScrollingButton\" [showSpreadButton]=\"showSpreadButton\"\r\n              [showPropertiesButton]=\"showPropertiesButton\" (spreadChange)=\"onSpreadChange($event)\"\r\n              (secondaryMenuIsEmpty)=\"onSecondaryMenuIsEmpty($event)\">\r\n            </pdf-secondary-toolbar>\r\n\r\n            <pdf-findbar [findbarLeft]=\"findbarLeft\" [findbarTop]=\"findbarTop\"\r\n              [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\" [showFindButton]=\"showFindButton || false\"\r\n              [customFindbarInputArea]=\"customFindbarInputArea\" [customFindbarButtons]=\"customFindbarButtons\"\r\n              [showFindCurrentPageOnly]=\"showFindCurrentPageOnly\" [showFindEntirePhrase]=\"showFindEntirePhrase\"\r\n              [showFindEntireWord]=\"showFindEntireWord\" [showFindFuzzySearch]=\"showFindFuzzySearch\"\r\n              [showFindHighlightAll]=\"showFindHighlightAll\" [showFindIgnoreAccents]=\"showFindIgnoreAccents\"\r\n              [showFindMatchCase]=\"showFindMatchCase\" [showFindMessages]=\"showFindMessages\"\r\n              [showFindPageRange]=\"showFindPageRange\" [showFindResultsCount]=\"showFindResultsCount\">\r\n            </pdf-findbar>\r\n\r\n            <pdf-context-menu></pdf-context-menu>\r\n\r\n            <div id=\"viewerContainer\" [style.top]=\"viewerPositionTop\" [style.backgroundColor]=\"backgroundColor\"\r\n              tabindex=\"0\">\r\n              <div class=\"unverified-signature-warning\" *ngIf=\"hasSignature && showUnverifiedSignatures\">\r\n                {{\r\n                'unverified_signature_warning'\r\n                | translate\r\n                : \"This PDF file contains a digital signature. The PDF viewer can't verify if the signature is valid.\r\n                Please download the file and open it in Acrobat Reader to verify the signature is valid.\"\r\n                | async\r\n                }}\r\n              </div>\r\n              <div class=\"modified-background-warning\" *ngIf=\"pdfBackground\">\r\n                {{\r\n                'modified_background_warning'\r\n                | translate: 'This PDF is rendered with a custom background. It does not look the way its author\r\n                intended it to look.'\r\n                | async\r\n                }}\r\n              </div>\r\n              <div id=\"viewer\" class=\"pdfViewer\" (dblclick)=\"zoomToPageWidth($event)\"></div>\r\n            </div>\r\n            <pdf-error-message></pdf-error-message>\r\n          </div>\r\n          <!-- mainContainer -->\r\n\r\n          <div id=\"dialogContainer\">\r\n            <pdf-password-dialog></pdf-password-dialog>\r\n            <pdf-document-properties-dialog></pdf-document-properties-dialog>\r\n            <pdf-prepare-printing-dialog></pdf-prepare-printing-dialog>\r\n          </div>\r\n          <!-- dialogContainer -->\r\n        </div>\r\n        <!-- outerContainer -->\r\n        <input type=\"file\" id=\"fileInput\" class=\"hidden\" />\r\n        <div id=\"printContainer\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #defaultFreeFloatingBar> </ng-template>\r\n", styles: ["#mainContainer.toolbar-hidden{margin-top:-30px}\n"] }]
    }], function () { return [{ type: i0.NgZone }, { type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i1.PDFNotificationService }, { type: i2.Location }, { type: i0.ElementRef }, { type: i2.PlatformLocation }, { type: i0.ChangeDetectorRef }, { type: i3.NgxExtendedPdfViewerService }, { type: i0.Renderer2 }]; }, { dummyComponents: [{
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
        }], relativeCoordsOptions: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL25neC1leHRlbmRlZC1wZGYtdmlld2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRixPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBSU4sTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBR1QsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBSXZCLE9BQU8sRUFBc0MsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFlckYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFaEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMvRixPQUFPLEVBQTRDLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBSWhHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIs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QkMsY0FBYztrQkFEcEIsTUFBTTtZQUlBLGtCQUFrQjtrQkFEeEIsS0FBSztZQWFLLG1CQUFtQjtrQkFEN0IsS0FBSztZQWVLLGdCQUFnQjtrQkFEMUIsS0FBSztZQU1DLG9CQUFvQjtrQkFEMUIsS0FBSztZQUlDLFdBQVc7a0JBRGpCLEtBQUs7WUFJQyxNQUFNO2tCQURaLEtBQUs7WUFJQyxZQUFZO2tCQURsQixNQUFNO1lBSUEsY0FBYztrQkFEcEIsTUFBTTtZQVVJLElBQUk7a0JBRGQsS0FBSztZQVdDLFVBQVU7a0JBRGhCLE1BQU07WUFJQSxTQUFTO2tCQURmLEtBQUs7WUFJQyxlQUFlO2tCQURyQixNQUFNO1lBSUEsV0FBVztrQkFEakIsTUFBTTtZQUlBLFVBQVU7a0JBRGhCLE1BQU07WUFJQSxZQUFZO2tCQURsQixNQUFNO1lBSUEsYUFBYTtrQkFEbkIsTUFBTTtZQUlBLFNBQVM7a0JBRGYsTUFBTTtZQUlBLGdCQUFnQjtrQkFEdEIsTUFBTTtZQUlBLGdCQUFnQjtrQkFEdEIsTUFBTTtZQUlBLFNBQVM7a0JBRGYsS0FBSztZQUlDLGlCQUFpQjtrQkFEdkIsTUFBTTtZQUlBLHNCQUFzQjtrQkFENUIsTUFBTTtZQUlBLGVBQWU7a0JBRHJCLE1BQU07WUFLQSxJQUFJO2tCQURWLEtBQUs7WUFJQyxVQUFVO2tCQURoQixNQUFNO1lBSUEsVUFBVTtrQkFEaEIsS0FBSztZQUlDLE9BQU87a0JBRGIsS0FBSztZQUlDLE9BQU87a0JBRGIsS0FBSztZQVdDLFdBQVc7a0JBRGpCLEtBQUs7WUF5Q0ssa0JBQWtCO2tCQUQ1QixLQUFLO1lBeTJDQyxhQUFhO2tCQURuQixZQUFZO21CQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciwgTG9jYXRpb24sIFBsYXRmb3JtTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBQTEFURk9STV9JRCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQW5ub3RhdGlvbiB9IGZyb20gJy4vQW5ub3RhdGlvbic7XHJcbmltcG9ydCB7IFBkZkRvY3VtZW50TG9hZGVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9kb2N1bWVudC1sb2FkZWQtZXZlbnQnO1xyXG5pbXBvcnQgeyBGaWxlSW5wdXRDaGFuZ2VkIH0gZnJvbSAnLi9ldmVudHMvZmlsZS1pbnB1dC1jaGFuZ2VkJztcclxuaW1wb3J0IHsgRmluZFJlc3VsdCwgRmluZFJlc3VsdE1hdGNoZXNDb3VudCwgRmluZFN0YXRlIH0gZnJvbSAnLi9ldmVudHMvZmluZC1yZXN1bHQnO1xyXG5pbXBvcnQgeyBIYW5kdG9vbENoYW5nZWQgfSBmcm9tICcuL2V2ZW50cy9oYW5kdG9vbC1jaGFuZ2VkJztcclxuaW1wb3J0IHsgUGFnZU51bWJlckNoYW5nZSB9IGZyb20gJy4vZXZlbnRzL3BhZ2UtbnVtYmVyLWNoYW5nZSc7XHJcbmltcG9ydCB7IFBhZ2VSZW5kZXJFdmVudCB9IGZyb20gJy4vZXZlbnRzL3BhZ2UtcmVuZGVyLWV2ZW50JztcclxuaW1wb3J0IHsgUGFnZVJlbmRlcmVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9wYWdlLXJlbmRlcmVkLWV2ZW50JztcclxuaW1wb3J0IHsgUGFnZXNMb2FkZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL3BhZ2VzLWxvYWRlZC1ldmVudCc7XHJcbmltcG9ydCB7IFBhZ2VzUm90YXRpb25FdmVudCB9IGZyb20gJy4vZXZlbnRzL3BhZ2VzLXJvdGF0aW9uLWV2ZW50JztcclxuaW1wb3J0IHsgUGRmRG93bmxvYWRlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvcGRmLWRvd25sb2FkZWQtZXZlbnQnO1xyXG5pbXBvcnQgeyBQZGZMb2FkZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL3BkZi1sb2FkZWQtZXZlbnQnO1xyXG5pbXBvcnQgeyBQZGZMb2FkaW5nU3RhcnRzRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9wZGYtbG9hZGluZy1zdGFydHMtZXZlbnQnO1xyXG5pbXBvcnQgeyBQZGZUaHVtYm5haWxEcmF3bkV2ZW50IH0gZnJvbSAnLi9ldmVudHMvcGRmLXRodW1ibmFpbC1kcmF3bi1ldmVudCc7XHJcbmltcG9ydCB7IFByb2dyZXNzQmFyRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9wcm9ncmVzcy1iYXItZXZlbnQnO1xyXG5pbXBvcnQgeyBTY2FsZUNoYW5naW5nRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9zY2FsZS1jaGFuZ2luZy1ldmVudCc7XHJcbmltcG9ydCB7IFNpZGViYXJ2aWV3Q2hhbmdlIH0gZnJvbSAnLi9ldmVudHMvc2lkZWJhcnZpZXctY2hhbmdlZCc7XHJcbmltcG9ydCB7IFRleHRMYXllclJlbmRlcmVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy90ZXh0bGF5ZXItcmVuZGVyZWQnO1xyXG5pbXBvcnQgeyBOZ3hFeHRlbmRlZFBkZlZpZXdlclNlcnZpY2UgfSBmcm9tICcuL25neC1leHRlbmRlZC1wZGYtdmlld2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQZGZCYWNrZ3JvdW5kIH0gZnJvbSAnLi9vcHRpb25zL3BkZi1iYWNrZ3JvdW5kJztcclxuaW1wb3J0IHsgUGRmQ3Vyc29yVG9vbHMgfSBmcm9tICcuL29wdGlvbnMvcGRmLWN1cnNvci10b29scyc7XHJcbmltcG9ydCB7IGFzc2V0c1VybCwgZ2V0VmVyc2lvblN1ZmZpeCwgcGRmRGVmYXVsdE9wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMvcGRmLWRlZmF1bHQtb3B0aW9ucyc7XHJcbmltcG9ydCB7IFBhZ2VWaWV3TW9kZVR5cGUsIFNjcm9sbE1vZGVDaGFuZ2VkRXZlbnQsIFNjcm9sbE1vZGVUeXBlIH0gZnJvbSAnLi9vcHRpb25zL3BkZi12aWV3ZXInO1xyXG5pbXBvcnQgeyBJUERGVmlld2VyQXBwbGljYXRpb24gfSBmcm9tICcuL29wdGlvbnMvcGRmLXZpZXdlci1hcHBsaWNhdGlvbic7XHJcbmltcG9ydCB7IElQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMvcGRmLXZpZXdlci1hcHBsaWNhdGlvbi1vcHRpb25zJztcclxuaW1wb3J0IHsgU2VydmljZVdvcmtlck9wdGlvbnNUeXBlIH0gZnJvbSAnLi9vcHRpb25zL3NlcnZpY2Utd29ya2VyLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBWZXJib3NpdHlMZXZlbCB9IGZyb20gJy4vb3B0aW9ucy92ZXJib3NpdHktbGV2ZWwnO1xyXG5pbXBvcnQgeyBQZGZEdW1teUNvbXBvbmVudHNDb21wb25lbnQgfSBmcm9tICcuL3BkZi1kdW1teS1jb21wb25lbnRzL3BkZi1kdW1teS1jb21wb25lbnRzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBERk5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL3BkZi1ub3RpZmljYXRpb24tc2VydmljZSc7XHJcbmltcG9ydCB7IFBpbmNoT25Nb2JpbGVTdXBwb3J0IH0gZnJvbSAnLi9waW5jaC1vbi1tb2JpbGUtc3VwcG9ydCc7XHJcbmltcG9ydCB7IFBkZlNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3NlY29uZGFyeS10b29sYmFyL3BkZi1zZWNvbmRhcnktdG9vbGJhci9wZGYtc2Vjb25kYXJ5LXRvb2xiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci9wZGYtc2lkZWJhci9wZGYtc2lkZWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVbml0VG9QeCB9IGZyb20gJy4vdW5pdC10by1weCc7XHJcblxyXG5pbXBvcnQgeyBUcnVzdGVkVHlwZXNXaW5kb3cgfSBmcm9tICd0cnVzdGVkLXR5cGVzL2xpYic7XHJcbmltcG9ydCB7IEFubm90YXRpb25FZGl0b3JMYXllclJlbmRlcmVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9hbm5vdGF0aW9uLWVkaXRvci1sYXllci1yZW5kZXJlZC1ldmVudCc7XHJcbmltcG9ydCB7IEFubm90YXRpb25MYXllclJlbmRlcmVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9hbm5vdGF0aW9uLWxheWVyLXJlbmRlcmVkLWV2ZW50JztcclxuaW1wb3J0IHsgQXR0YWNobWVudExvYWRlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvYXR0YWNobWVudC1sb2FkZWQtZXZlbnQnO1xyXG5pbXBvcnQgeyBMYXllcnNMb2FkZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL2xheWVycy1sb2FkZWQtZXZlbnQnO1xyXG5pbXBvcnQgeyBPdXRsaW5lTG9hZGVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9vdXRsaW5lLWxvYWRlZC1ldmVudCc7XHJcbmltcG9ydCB7IFhmYUxheWVyUmVuZGVyZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL3hmYS1sYXllci1yZW5kZXJlZC1ldmVudCc7XHJcbmltcG9ydCB7IFBkZlNpZGViYXJWaWV3IH0gZnJvbSAnLi9vcHRpb25zL3BkZi1zaWRlYmFyLXZpZXdzJztcclxuaW1wb3J0IHsgUmVsYXRpdmVDb29yZHNTdXBwb3J0IH0gZnJvbSAnLi9yZWxhdGl2ZS1jb29yZHMtc3VwcG9ydCc7XHJcblxyXG5kZWNsYXJlIGNvbnN0IFNlcnZpY2VXb3JrZXJPcHRpb25zOiBTZXJ2aWNlV29ya2VyT3B0aW9uc1R5cGU7IC8vIGRlZmluZWQgaW4gdmlld2VyLmpzXHJcbmRlY2xhcmUgY2xhc3MgUmVzaXplT2JzZXJ2ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHBhcmFtOiAoKSA9PiB2b2lkKTtcclxuICBwdWJsaWMgb2JzZXJ2ZShkaXY6IEhUTUxFbGVtZW50KTtcclxufVxyXG5cclxuaW50ZXJmYWNlIEVsZW1lbnRBbmRQb3NpdGlvbiB7XHJcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgeDogbnVtYmVyO1xyXG4gIHk6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGb3JtRGF0YVR5cGUge1xyXG4gIFtmaWVsZE5hbWU6IHN0cmluZ106IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfCBzdHJpbmdbXTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNJT1MoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIFsnaVBhZCBTaW11bGF0b3InLCAnaVBob25lIFNpbXVsYXRvcicsICdpUG9kIFNpbXVsYXRvcicsICdpUGFkJywgJ2lQaG9uZScsICdpUG9kJ10uaW5jbHVkZXMobmF2aWdhdG9yLnBsYXRmb3JtKSB8fFxyXG4gICAgLy8gaVBhZCBvbiBpT1MgMTMgZGV0ZWN0aW9uXHJcbiAgICAobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcygnTWFjJykgJiYgJ29udG91Y2hlbmQnIGluIGRvY3VtZW50KVxyXG4gICk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuY29tcG9uZW50LmNzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBwcml2YXRlIHN0YXRpYyBvcmlnaW5hbFByaW50ID0gd2luZG93LnByaW50O1xyXG5cclxuICBwdWJsaWMgc3RhdGljIG5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICBwdWJsaWMgbmd4RXh0ZW5kZWRQZGZWaWV3ZXJJbmNvbXBsZXRlbHlJbml0aWFsaXplZCA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBkdW1teSBjb21wb25lbnRzIGFyZSBpbnNlcnRlZCBhdXRvbWF0aWNhbGx5IHdoZW4gdGhlIHVzZXIgY3VzdG9taXplcyB0aGUgdG9vbGJhclxyXG4gICAqIHdpdGhvdXQgYWRkaW5nIGV2ZXJ5IG9yaWdpbmFsIHRvb2xiYXIgaXRlbS4gV2l0aG91dCB0aGUgZHVtbXkgY29tcG9uZW50cywgdGhlXHJcbiAgICogaW5pdGlhbGl6YXRpb24gY29kZSBvZiBwZGYuanMgY3Jhc2hlcyBiZWNhdXNlIGl0IGFzc3VtZSB0aGF0IGV2ZXJ5IHN0YW5kYXJkIHdpZGdldCBpcyB0aGVyZS5cclxuICAgKi9cclxuICBAVmlld0NoaWxkKFBkZkR1bW15Q29tcG9uZW50c0NvbXBvbmVudClcclxuICBwdWJsaWMgZHVtbXlDb21wb25lbnRzOiBQZGZEdW1teUNvbXBvbmVudHNDb21wb25lbnQ7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3Jvb3QnKVxyXG4gIHB1YmxpYyByb290OiBFbGVtZW50UmVmO1xyXG5cclxuICBwcml2YXRlIHBpbmNoT25Nb2JpbGVTdXBwb3J0OiBQaW5jaE9uTW9iaWxlU3VwcG9ydCB8IHVuZGVmaW5lZDtcclxuICBwdWJsaWMgcmVsYXRpdmVDb29yZHNTdXBwb3J0OiBSZWxhdGl2ZUNvb3Jkc1N1cHBvcnQgfCB1bmRlZmluZWQ7XHJcblxyXG4gIC8qIFVJIHRlbXBsYXRlcyAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbUZpbmRiYXJJbnB1dEFyZWE6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbVRvb2xiYXI6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbUZpbmRiYXI6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbUZpbmRiYXJCdXR0b25zOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjdXN0b21QZGZWaWV3ZXI6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbVNlY29uZGFyeVRvb2xiYXI6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbVNpZGViYXI6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbVRodW1ibmFpbDogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY3VzdG9tRnJlZUZsb2F0aW5nQmFyOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RnJlZUZsb2F0aW5nQmFyID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZW5hYmxlRHJhZ0FuZERyb3AgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBmb3JtRGF0YTogRm9ybURhdGFUeXBlID0ge307XHJcblxyXG4gIC8qKiBNYXBzIHRoZSBpbnRlcm5hbCBpZHMgb2YgdGhlIGFubm90YXRpb25zIG9mIHBkZi5qcyB0byB0aGVpciBmaWVsZCBuYW1lICovXHJcbiAgcHJpdmF0ZSBmb3JtSWRUb0ZpZWxkTmFtZSA9IHt9O1xyXG4gIHByaXZhdGUgZm9ybVJhZGlvQnV0dG9uVmFsdWVUb0lkID0ge307XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBmb3JtRGF0YUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9ybURhdGFUeXBlPigpO1xyXG5cclxuICBwdWJsaWMgX3BhZ2VWaWV3TW9kZTogUGFnZVZpZXdNb2RlVHlwZSA9ICdtdWx0aXBsZSc7XHJcblxyXG4gIHB1YmxpYyBiYXNlSHJlZjogc3RyaW5nO1xyXG5cclxuICAvKiogVGhpcyBmbGFnIHByZXZlbnRzIHRyeWluZyB0byBsb2FkIGEgZmlsZSB0d2ljZSBpZiB0aGUgdXNlciB1cGxvYWRzIGl0IHVzaW5nIHRoZSBmaWxlIHVwbG9hZCBkaWFsb2cgb3IgdmlhIGRyYWcnbidkcm9wICovXHJcbiAgcHJpdmF0ZSBzcmNDaGFuZ2VUcmlnZ2VyZWRCeVVzZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIGdldCBwYWdlVmlld01vZGUoKTogUGFnZVZpZXdNb2RlVHlwZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFnZVZpZXdNb2RlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IHBhZ2VWaWV3TW9kZSh2aWV3TW9kZTogUGFnZVZpZXdNb2RlVHlwZSkge1xyXG4gICAgdGhpcy5fcGFnZVZpZXdNb2RlID0gdmlld01vZGU7XHJcbiAgICBpZiAodmlld01vZGUgPT09ICdpbmZpbml0ZS1zY3JvbGwnKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsTW9kZSA9IFNjcm9sbE1vZGVUeXBlLnZlcnRpY2FsO1xyXG4gICAgICB0aGlzLnNwcmVhZCA9ICdvZmYnO1xyXG4gICAgfSBlbHNlIGlmICh2aWV3TW9kZSAhPT0gJ211bHRpcGxlJykge1xyXG4gICAgICB0aGlzLnNjcm9sbE1vZGUgPSBTY3JvbGxNb2RlVHlwZS52ZXJ0aWNhbDtcclxuICAgIH1cclxuICAgIGlmICh2aWV3TW9kZSA9PT0gJ3NpbmdsZScpIHtcclxuICAgICAgLy8gc2luY2UgcGRmLmpzLCBvdXIgY3VzdG9tIHNpbmdsZS1wYWdlLW1vZGUgaGFzIGJlZW4gcmVwbGFjZWQgYnkgdGhlIHN0YW5kYXJkIHNjcm9sbE1vZGU9XCJwYWdlXCJcclxuICAgICAgdGhpcy5zY3JvbGxNb2RlID0gU2Nyb2xsTW9kZVR5cGUucGFnZTtcclxuICAgICAgdGhpcy5fcGFnZVZpZXdNb2RlID0gJ211bHRpcGxlJztcclxuICAgIH1cclxuICAgIGlmICh2aWV3TW9kZSA9PT0gJ2Jvb2snKSB7XHJcbiAgICAgIHRoaXMuc2hvd0JvcmRlcnMgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBwcm9ncmVzcyA9IG5ldyBFdmVudEVtaXR0ZXI8UHJvZ3Jlc3NCYXJFdmVudD4oKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgncGRmU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudCcpXHJcbiAgcHJpdmF0ZSBzZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50OiBQZGZTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50O1xyXG5cclxuICBAVmlld0NoaWxkKCdwZGZzaWRlYmFyJylcclxuICBwcml2YXRlIHNpZGViYXJDb21wb25lbnQ6IFBkZlNpZGViYXJDb21wb25lbnQ7XHJcblxyXG4gIC8qIHJlZ3VsYXIgYXR0cmlidXRlcyAqL1xyXG5cclxuICBwcml2YXRlIF9zcmM6IHN0cmluZyB8IEFycmF5QnVmZmVyIHwgVWludDhBcnJheSB8IHsgcmFuZ2U6IGFueSB9IHwgdW5kZWZpbmVkO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgc3JjQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNjcm9sbE1vZGU6IFNjcm9sbE1vZGVUeXBlIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgc2Nyb2xsTW9kZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8U2Nyb2xsTW9kZVR5cGU+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGF1dGhvcml6YXRpb246IE9iamVjdCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgaHR0cEhlYWRlcnM6IE9iamVjdCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY29udGV4dE1lbnVBbGxvd2VkID0gdHJ1ZTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGFmdGVyUHJpbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBiZWZvcmVQcmludCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGN1cnJlbnRab29tRmFjdG9yID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gIC8qKiBUaGlzIGZpZWxkIHN0b3JlcyB0aGUgcHJldmlvdXMgem9vbSBsZXZlbCBpZiB0aGUgcGFnZSBpcyBlbmxhcmdlZCB3aXRoIGEgZG91YmxlLXRhcCBvciBkb3VibGUtY2xpY2sgKi9cclxuICBwcml2YXRlIHByZXZpb3VzWm9vbTogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBlbmFibGVQcmludCA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIE51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gd2FpdCBiZXR3ZWVuIGluaXRpYWxpemluZyB0aGUgUERGIHZpZXdlciBhbmQgbG9hZGluZyB0aGUgUERGIGZpbGUuXHJcbiAgICogTW9zdCB1c2VycyBjYW4gbGV0IHRoaXMgcGFyYW1ldGVyIHNhZmVseSBhdCBpdCdzIGRlZmF1bHQgdmFsdWUgb2YgemVyby5cclxuICAgKiBTZXQgdGhpcyB0byAxMDAwIG9yIGhpZ2hlciBpZiB5b3UgcnVuIGludG8gdGltaW5nIHByb2JsZW1zICh0eXBpY2FsbHkgY2F1c2VkIGJ5IGxvYWRpbmcgdGhlIGxvY2FsZSBmaWxlc1xyXG4gICAqIGFmdGVyIHRoZSBQREYgZmlsZXMsIHNvIHRoZXkgYXJlIG5vdCBhdmFpbGFibGUgd2hlbiB0aGUgUERGIHZpZXdlciBpcyBpbml0aWFsaXplZCkuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZGVsYXlGaXJzdFZpZXcgPSAwO1xyXG5cclxuICAvKiogU2hvd3Mgb3IgaGlkZXMgdGhlIGVkaXRvciBidXR0b25zICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0VkaXRvciA9IHRydWU7XHJcblxyXG4gIC8qKiBzdG9yZSB0aGUgdGltZW91dCBpZCBzbyBpdCBjYW4gYmUgY2FuY2VsZWQgaWYgdXNlciBsZWF2ZXMgdGhlIHBhZ2UgYmVmb3JlIHRoZSBQREYgaXMgc2hvd24gKi9cclxuICBwcml2YXRlIGluaXRUaW1lb3V0OiBhbnk7XHJcblxyXG4gIC8qKiBIb3cgbWFueSBsb2cgbWVzc2FnZXMgc2hvdWxkIGJlIHByaW50ZWQ/XHJcbiAgICogTGVnYWwgdmFsdWVzOiBWZXJib3NpdHlMZXZlbC5JTkZPUyAoPSA1KSwgVmVyYm9zaXR5TGV2ZWwuV0FSTklOR1MgKD0gMSksIFZlcmJvc2l0eUxldmVsLkVSUk9SUyAoPSAwKSAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGxvZ0xldmVsID0gVmVyYm9zaXR5TGV2ZWwuV0FSTklOR1M7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHJlbGF0aXZlQ29vcmRzT3B0aW9uczogT2JqZWN0ID0ge307XHJcblxyXG4gIC8qKiBVc2UgdGhlIG1pbmlmaWVkIChtaW5pZmllZEpTTGlicmFyaWVzPVwidHJ1ZVwiLCB3aGljaCBpcyB0aGUgZGVmYXVsdCkgb3IgdGhlIHVzZXItcmVhZGFibGUgcGRmLmpzIGxpYnJhcnkgKG1pbmlmaWVkSlNMaWJyYXJpZXM9XCJmYWxzZVwiKSAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIG1pbmlmaWVkSlNMaWJyYXJpZXMgPSB0cnVlO1xyXG5cclxuICBwdWJsaWMgcHJpbWFyeU1lbnVWaXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgLyoqIG9wdGlvbiB0byBpbmNyZWFzZSAob3IgcmVkdWNlKSBwcmludCByZXNvbHV0aW9uLiBEZWZhdWx0IGlzIDE1MCAoZHBpKS4gU2Vuc2libGUgdmFsdWVzXHJcbiAgICogYXJlIDMwMCwgNjAwLCBhbmQgMTIwMC4gTm90ZSB0aGUgaW5jcmVhc2UgbWVtb3J5IGNvbnN1bXB0aW9uLCB3aGljaCBtYXkgZXZlbiByZXN1bHQgaW4gYSBicm93c2VyIGNyYXNoLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHByaW50UmVzb2x1dGlvbiA9IG51bGw7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHJvdGF0aW9uOiAwIHwgOTAgfCAxODAgfCAyNzA7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyByb3RhdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8MCB8IDkwIHwgMTgwIHwgMjcwPigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgYW5ub3RhdGlvbkxheWVyUmVuZGVyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEFubm90YXRpb25MYXllclJlbmRlcmVkRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBhbm5vdGF0aW9uRWRpdG9yTGF5ZXJSZW5kZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8QW5ub3RhdGlvbkVkaXRvckxheWVyUmVuZGVyZWRFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHhmYUxheWVyUmVuZGVyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFhmYUxheWVyUmVuZGVyZWRFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIG91dGxpbmVMb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPE91dGxpbmVMb2FkZWRFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGF0dGFjaG1lbnRzbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxBdHRhY2htZW50TG9hZGVkRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBsYXllcnNsb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPExheWVyc0xvYWRlZEV2ZW50PigpO1xyXG5cclxuICBwdWJsaWMgaGFzU2lnbmF0dXJlOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgc3JjKHVybDogc3RyaW5nIHwgQXJyYXlCdWZmZXIgfCBCbG9iIHwgVWludDhBcnJheSB8IFVSTCB8IHsgcmFuZ2U6IGFueSB9KSB7XHJcbiAgICBpZiAodXJsIGluc3RhbmNlb2YgVWludDhBcnJheSkge1xyXG4gICAgICB0aGlzLl9zcmMgPSB1cmwuYnVmZmVyO1xyXG4gICAgfSBlbHNlIGlmICh1cmwgaW5zdGFuY2VvZiBVUkwpIHtcclxuICAgICAgdGhpcy5fc3JjID0gdXJsLnRvU3RyaW5nKCk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJyAmJiB1cmwgaW5zdGFuY2VvZiBCbG9iKSB7XHJcbiAgICAgIC8vIGFkZGl0aW9uYWwgY2hlY2sgaW50cm9kdWNlZCB0byBzdXBwb3J0IHNlcnZlciBzaWRlIHJlbmRlcmluZ1xyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zcmMgPSBuZXcgVWludDhBcnJheShyZWFkZXIucmVzdWx0IGFzIEFycmF5QnVmZmVyKTtcclxuICAgICAgICAgIGlmIChOZ3hFeHRlbmRlZFBkZlZpZXdlckNvbXBvbmVudC5uZ3hFeHRlbmRlZFBkZlZpZXdlckluaXRpYWxpemVkKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5neEV4dGVuZGVkUGRmVmlld2VySW5jb21wbGV0ZWx5SW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgICB0aGlzLm9wZW5QREYoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAoYXN5bmMgKCkgPT4gdGhpcy5vcGVuUERGMigpKSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGVsc2Ugb3BlblBERiBpcyBjYWxsZWQgbGF0ZXIsIHNvIHdlIGRvIG5vdGhpbmcgdG8gcHJldmVudCBsb2FkaW5nIHRoZSBQREYgZmlsZSB0d2ljZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG4gICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIodXJsKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHVybCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdGhpcy5fc3JjID0gdXJsO1xyXG4gICAgICBpZiAodXJsLmxlbmd0aCA+IDk4MCkge1xyXG4gICAgICAgIC8vIG1pbmltYWwgbGVuZ3RoIG9mIGEgYmFzZTY0IGVuY29kZWQgUERGXHJcbiAgICAgICAgaWYgKHVybC5sZW5ndGggJSA0ID09PSAwKSB7XHJcbiAgICAgICAgICBpZiAoL15bYS16QS1aXFxkXFwvK10rPXswLDJ9JC8udGVzdCh1cmwpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBVUkwgbG9va3MgbGlrZSBhIGJhc2U2NCBlbmNvZGVkIHN0cmluZy4gSWYgc28sIHBsZWFzZSB1c2UgdGhlIGF0dHJpYnV0ZSBbYmFzZTY0U3JjXSBpbnN0ZWFkIG9mIFtzcmNdJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAodGhpcy5fc3JjIGFzIGFueSkgPSB1cmw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgYmFzZTY0U3JjKGJhc2U2NDogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKGJhc2U2NCkge1xyXG4gICAgICBjb25zdCBiaW5hcnlfc3RyaW5nID0gd2luZG93LmF0b2IoYmFzZTY0KTtcclxuICAgICAgY29uc3QgbGVuID0gYmluYXJ5X3N0cmluZy5sZW5ndGg7XHJcbiAgICAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobGVuKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgIGJ5dGVzW2ldID0gYmluYXJ5X3N0cmluZy5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc3JjID0gYnl0ZXMuYnVmZmVyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fc3JjID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGNvbWJpbmF0aW9uIG9mIGhlaWdodCwgbWluSGVpZ2h0LCBhbmQgYXV0b0hlaWdodCBlbnN1cmVzIHRoZSBQREYgaGVpZ2h0IG9mIHRoZSBQREYgdmlld2VyIGlzIGNhbGN1bGF0ZWQgY29ycmVjdGx5IHdoZW4gdGhlIGhlaWdodCBpcyBhIHBlcmNlbnRhZ2UuXHJcbiAgICogQnkgZGVmYXVsdCwgbWFueSBDU1MgZnJhbWV3b3JrcyBtYWtlIGEgZGl2IHdpdGggMTAwJSBoYXZlIGEgaGVpZ2h0IG9yIHplcm8gcGl4ZWxzLiBjaGVja0hlaWd0aCgpIGZpeGVzIHRoaXMuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBhdXRvSGVpZ2h0ID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIG1pbkhlaWdodDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBwcml2YXRlIF9oZWlnaHQgPSAnMTAwJSc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCBoZWlnaHQoaDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm1pbkhlaWdodCA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuYXV0b0hlaWdodCA9IGZhbHNlO1xyXG4gICAgaWYgKGgpIHtcclxuICAgICAgdGhpcy5faGVpZ2h0ID0gaDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2hlY2tIZWlnaHQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBoZWlnaHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdXNlQnJvd3NlckxvY2FsZTogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgcHVibGljIGdldCB1c2VCcm93c2VyTG9jYWxlKCkge1xyXG4gICAgcmV0dXJuICEhdGhpcy5fdXNlQnJvd3NlckxvY2FsZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIElmIHRoaXMgZmxhZyBpcyB0cnVlLCB0aGlzIGNvbXBvbmVudHMgYWRkcyBhIGxpbmsgdG8gdGhlIGxvY2FsZSBhc3NldHMuIFRoZSBwZGYgdmlld2VyXHJcbiAgICogc2VlcyB0aGlzIGxpbmsgYW5kIHVzZXMgaXQgdG8gbG9hZCB0aGUgbG9jYWxlIGZpbGVzIGF1dG9tYXRpY2FsbHkuXHJcbiAgICogQHBhcmFtIHVzZUJyb3dzZXJMb2NhbGUgYm9vbGVhblxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCB1c2VCcm93c2VyTG9jYWxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl91c2VCcm93c2VyTG9jYWxlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBmb3JjZVVzaW5nTGVnYWN5RVM1ID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGJhY2tncm91bmRDb2xvciA9ICcjZThlOGViJztcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgcGRmQmFja2dyb3VuZDogUGRmQmFja2dyb3VuZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgcGRmQmFja2dyb3VuZENvbG9yVG9SZXBsYWNlOiBzdHJpbmcgfCAoKHBhZ2U6IG51bWJlciwgcGFnZUxhYmVsOiBzdHJpbmcpID0+IHN0cmluZyB8IHVuZGVmaW5lZCkgfCB1bmRlZmluZWQgPSAnI2ZmZmZmZic7XHJcblxyXG4gIC8qKiBBbGxvd3MgdGhlIHVzZXIgdG8gZGVmaW5lIHRoZSBuYW1lIG9mIHRoZSBmaWxlIGFmdGVyIGNsaWNraW5nIFwiZG93bmxvYWRcIiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGZpbGVuYW1lRm9yRG93bmxvYWQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgLyoqIEFsbG93cyB0aGUgdXNlciB0byBkaXNhYmxlIHRoZSBrZXlib2FyZCBiaW5kaW5ncyBjb21wbGV0ZWx5ICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgaWdub3JlS2V5Ym9hcmQgPSBmYWxzZTtcclxuXHJcbiAgLyoqIEFsbG93cyB0aGUgdXNlciB0byBkaXNhYmxlIGEgbGlzdCBvZiBrZXkgYmluZGluZ3MuICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgaWdub3JlS2V5czogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG5cclxuICAvKiogQWxsb3dzIHRoZSB1c2VyIHRvIGVuYWJsZSBhIGxpc3Qgb2Yga2V5IGJpbmRpbmdzIGV4cGxpY2l0bHkuIElmIHRoaXMgcHJvcGVydHkgaXMgc2V0LCBldmVyeSBvdGhlciBrZXkgYmluZGluZyBpcyBpZ25vcmVkLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGFjY2VwdEtleXM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuXHJcbiAgLyoqIEFsbG93cyB0aGUgdXNlciB0byBwdXQgdGhlIHZpZXdlcidzIHN2ZyBpbWFnZXMgaW50byBhbiBhcmJpdHJhcnkgZm9sZGVyICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgaW1hZ2VSZXNvdXJjZXNQYXRoID0gYXNzZXRzVXJsKHBkZkRlZmF1bHRPcHRpb25zLmFzc2V0c0ZvbGRlcikgKyAnL2ltYWdlcy8nO1xyXG5cclxuICAvKiogQWxsb3dzIHRoZSB1c2VyIHRvIHB1dCB0aGVpciBsb2NhbGUgZm9sZGVyIGludG8gYW4gYXJiaXRyYXJ5IGZvbGRlciAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGxvY2FsZUZvbGRlclBhdGggPSBhc3NldHNVcmwocGRmRGVmYXVsdE9wdGlvbnMuYXNzZXRzRm9sZGVyKSArICcvbG9jYWxlJztcclxuXHJcbiAgLyoqIE92ZXJyaWRlIHRoZSBkZWZhdWx0IGxvY2FsZS4gVGhpcyBtdXN0IGJlIHRoZSBjb21wbGV0ZSBsb2NhbGUgbmFtZSwgc3VjaCBhcyBcImVzLUVTXCIuIFRoZSBzdHJpbmcgaXMgYWxsb3dlZCB0byBiZSBhbGwgbG93ZXJjYXNlLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGxhbmd1YWdlOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIC8qKiBCeSBkZWZhdWx0LCBsaXN0ZW5pbmcgdG8gdGhlIFVSTCBpcyBkZWFjdGl2YXRlZCBiZWNhdXNlIG9mdGVuIHRoZSBhbmNob3IgdGFnIGlzIHVzZWQgZm9yIHRoZSBBbmd1bGFyIHJvdXRlciAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGxpc3RlblRvVVJMID0gZmFsc2U7XHJcblxyXG4gIC8qKiBOYXZpZ2F0ZSB0byBhIGNlcnRhaW4gXCJuYW1lZCBkZXN0aW5hdGlvblwiICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbmFtZWRkZXN0OiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIC8qKiBhbGxvd3MgeW91IHRvIHBhc3MgYSBwYXNzd29yZCB0byByZWFkIHBhc3N3b3JkLXByb3RlY3RlZCBmaWxlcyAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHBhc3N3b3JkOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHJlcGxhY2VCcm93c2VyUHJpbnQgPSB0aGlzLnBkZkpzVmVyc2lvbiA+PSAnMy4wJztcclxuXHJcbiAgcHVibGljIF9zaG93U2lkZWJhckJ1dHRvbiA9IHRydWU7XHJcblxyXG4gIHB1YmxpYyB2aWV3ZXJQb3NpdGlvblRvcCA9ICczMnB4JztcclxuXHJcbiAgLyoqIHBkZi5qcyBjYW4gc2hvdyBzaWduYXR1cmVzLCBidXQgZmFpbHMgdG8gdmVyaWZ5IHRoZW0uIFNvIHRoZXkgYXJlIHN3aXRjaGVkIG9mZiBieSBkZWZhdWx0LlxyXG4gICAqIFNldCBcIltzaG93VW52ZXJpZmllZFNpZ25hdHVyZXNdXCI9XCJ0cnVlXCIgdG8gZGlzcGxheSBlLXNpZ25hdHVyZXMgbm9uZXRoZWxlc3MuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1VudmVyaWZpZWRTaWduYXR1cmVzID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHN0YXJ0VGFiaW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuXHJcbiAgcHVibGljIGdldCBzaG93U2lkZWJhckJ1dHRvbigpIHtcclxuICAgIHJldHVybiB0aGlzLl9zaG93U2lkZWJhckJ1dHRvbjtcclxuICB9XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IHNob3dTaWRlYmFyQnV0dG9uKHNob3c6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3Nob3dTaWRlYmFyQnV0dG9uID0gc2hvdztcclxuICAgIGNvbnN0IGlzSUUgPSAvbXNpZVxcc3x0cmlkZW50XFwvL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcbiAgICBsZXQgZmFjdG9yID0gMTtcclxuICAgIGlmIChpc0lFKSB7XHJcbiAgICAgIGZhY3RvciA9IE51bWJlcigodGhpcy5fbW9iaWxlRnJpZW5kbHlab29tIHx8ICcxMDAnKS5yZXBsYWNlKCclJywgJycpKSAvIDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fc2hvd1NpZGViYXJCdXR0b24pIHtcclxuICAgICAgdGhpcy5maW5kYmFyTGVmdCA9ICg2OCAqIGZhY3RvcikudG9TdHJpbmcoKSArICdweCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZpbmRiYXJMZWZ0ID0gJzBweCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaWRlYmFyVmlzaWJsZTogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHNpZGViYXJWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBhY3RpdmVTaWRlYmFyVmlldzogUGRmU2lkZWJhclZpZXcgPSBQZGZTaWRlYmFyVmlldy5PVVRMSU5FO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgYWN0aXZlU2lkZWJhclZpZXdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFBkZlNpZGViYXJWaWV3PigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZEJ1dHRvbjogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0ZpbmRIaWdobGlnaHRBbGwgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZE1hdGNoQ2FzZSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGaW5kQ3VycmVudFBhZ2VPbmx5ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0ZpbmRQYWdlUmFuZ2UgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZEVudGlyZVdvcmQgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZEVudGlyZVBocmFzZSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGaW5kSWdub3JlQWNjZW50cyA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGaW5kRnV6enlTZWFyY2ggPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZFJlc3VsdHNDb3VudCA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGaW5kTWVzc2FnZXMgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93UGFnaW5nQnV0dG9ucyA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dab29tQnV0dG9ucyA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dQcmVzZW50YXRpb25Nb2RlQnV0dG9uID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dPcGVuRmlsZUJ1dHRvbiA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dQcmludEJ1dHRvbiA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dEb3dubG9hZEJ1dHRvbiA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHRoZW1lOiAnZGFyaycgfCAnbGlnaHQnIHwgJ2N1c3RvbScgfCBzdHJpbmcgPSAnbGlnaHQnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBmb3JtVGhlbWU6ICdkYXJrJyB8ICdsaWdodCcgfCAnY3VzdG9tJyB8IHN0cmluZyA9ICdsaWdodCc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dUb29sYmFyID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1NlY29uZGFyeVRvb2xiYXJCdXR0b24gPSB0cnVlO1xyXG5cclxuICAvKiogU2V0IGJ5IHRoZSBldmVudCAoc2Vjb25kYXJ5TWVudUlzRW1wdHkpICovXHJcbiAgcHVibGljIGhpZGVLZWJhYk1lbnVGb3JTZWNvbmRhcnlUb29sYmFyID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dSb3RhdGVCdXR0b24gPSB0cnVlO1xyXG5cclxuICBwcml2YXRlIF9oYW5kVG9vbCA9ICFpc0lPUygpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgaGFuZFRvb2woaGFuZFRvb2w6IGJvb2xlYW4pIHtcclxuICAgIGlmIChpc0lPUygpICYmIGhhbmRUb29sKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgIFwiT24gaU9TLCB0aGUgaGFuZHRvb2wgZG9lc24ndCB3b3JrIHJlbGlhYmx5LiBQbHVzLCB5b3UgZG9uJ3QgbmVlZCBpdCBiZWNhdXNlIHRvdWNoIGdlc3R1cmVzIGFsbG93IHlvdSB0byBkaXN0aW5ndWlzaCBlYXNpbHkgYmV0d2VlbiBzd2lwaW5nIGFuZCBzZWxlY3RpbmcgdGV4dC4gVGhlcmVmb3JlLCB0aGUgbGlicmFyeSBpZ25vcmVzIHlvdXIgc2V0dGluZy5cIlxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9oYW5kVG9vbCA9IGhhbmRUb29sO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBoYW5kVG9vbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9oYW5kVG9vbDtcclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBoYW5kVG9vbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0hhbmRUb29sQnV0dG9uID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgX3Nob3dTY3JvbGxpbmdCdXR0b24gPSB0cnVlO1xyXG5cclxuICBwdWJsaWMgZ2V0IHNob3dTY3JvbGxpbmdCdXR0b24oKSB7XHJcbiAgICBpZiAodGhpcy5wYWdlVmlld01vZGUgPT09ICdtdWx0aXBsZScpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3Nob3dTY3JvbGxpbmdCdXR0b247XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgc2hvd1Njcm9sbGluZ0J1dHRvbih2YWw6IGFueSkge1xyXG4gICAgdGhpcy5fc2hvd1Njcm9sbGluZ0J1dHRvbiA9IHZhbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3Nob3dTcHJlYWRCdXR0b24gPSB0cnVlO1xyXG5cclxuICBwdWJsaWMgZ2V0IHNob3dTcHJlYWRCdXR0b24oKSB7XHJcbiAgICBpZiAodGhpcy5wYWdlVmlld01vZGUgIT09ICdpbmZpbml0ZS1zY3JvbGwnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9zaG93U3ByZWFkQnV0dG9uO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IHNob3dTcHJlYWRCdXR0b24odmFsOiBhbnkpIHtcclxuICAgIHRoaXMuX3Nob3dTcHJlYWRCdXR0b24gPSB2YWw7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93UHJvcGVydGllc0J1dHRvbiA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dCb3JkZXJzID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc3ByZWFkOiAnb2ZmJyB8ICdldmVuJyB8ICdvZGQnO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgc3ByZWFkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjwnb2ZmJyB8ICdldmVuJyB8ICdvZGQnPigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgdGh1bWJuYWlsRHJhd24gPSBuZXcgRXZlbnRFbWl0dGVyPFBkZlRodW1ibmFpbERyYXduRXZlbnQ+KCk7XHJcblxyXG4gIHByaXZhdGUgX3BhZ2U6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgcHVibGljIGdldCBwYWdlKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFnZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCBwYWdlKHA6IG51bWJlciB8IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKHApIHtcclxuICAgICAgLy8gc2lsZW50bHkgY29wZSB3aXRoIHN0cmluZ3NcclxuICAgICAgdGhpcy5fcGFnZSA9IE51bWJlcihwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3BhZ2UgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgdW5kZWZpbmVkPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBwYWdlTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHBhZ2VMYWJlbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgdW5kZWZpbmVkPigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcGFnZXNMb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFBhZ2VzTG9hZGVkRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBwYWdlUmVuZGVyID0gbmV3IEV2ZW50RW1pdHRlcjxQYWdlUmVuZGVyRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBwYWdlUmVuZGVyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFBhZ2VSZW5kZXJlZEV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcGRmRG93bmxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8UGRmRG93bmxvYWRlZEV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcGRmTG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxQZGZMb2FkZWRFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHBkZkxvYWRpbmdTdGFydHMgPSBuZXcgRXZlbnRFbWl0dGVyPFBkZkxvYWRpbmdTdGFydHNFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHBkZkxvYWRpbmdGYWlsZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEVycm9yPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyB0ZXh0TGF5ZXI6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyB0ZXh0TGF5ZXJSZW5kZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VGV4dExheWVyUmVuZGVyZWRFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHVwZGF0ZUZpbmRNYXRjaGVzQ291bnQgPSBuZXcgRXZlbnRFbWl0dGVyPEZpbmRSZXN1bHRNYXRjaGVzQ291bnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyB1cGRhdGVGaW5kU3RhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPEZpbmRTdGF0ZT4oKTtcclxuXHJcbiAgLyoqIExlZ2FsIHZhbHVlczogdW5kZWZpbmVkLCAnYXV0bycsICdwYWdlLWFjdHVhbCcsICdwYWdlLWZpdCcsICdwYWdlLXdpZHRoJywgb3IgJzUwJyAob3IgYW55IG90aGVyIHBlcmNlbnRhZ2UpICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgem9vbTogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgem9vbUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyB6b29tTGV2ZWxzID0gWydhdXRvJywgJ3BhZ2UtYWN0dWFsJywgJ3BhZ2UtZml0JywgJ3BhZ2Utd2lkdGgnLCAwLjUsIDEsIDEuMjUsIDEuNSwgMiwgMywgNF07XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIG1heFpvb20gPSAxMDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbWluWm9vbSA9IDAuMTtcclxuXHJcbiAgLyoqIFRoaXMgYXR0cmlidXRlIGFsbG93cyB5b3UgdG8gaW5jcmVhc2UgdGhlIHNpemUgb2YgdGhlIFVJIGVsZW1lbnRzIHNvIHlvdSBjYW4gdXNlIHRoZW0gb24gc21hbGwgbW9iaWxlIGRldmljZXMuXHJcbiAgICogVGhpcyBhdHRyaWJ1dGUgaXMgYSBzdHJpbmcgd2l0aCBhIHBlcmNlbnQgY2hhcmFjdGVyIGF0IHRoZSBlbmQgKGUuZy4gXCIxNTAlXCIpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBfbW9iaWxlRnJpZW5kbHlab29tOiBzdHJpbmcgPSAnMTAwJSc7XHJcblxyXG4gIHB1YmxpYyBtb2JpbGVGcmllbmRseVpvb21TY2FsZSA9IDE7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHdoZWVsQWN0aW9uOiAnc2Nyb2xsJyB8ICd6b29tJyB8ICdhbHdheXMtem9vbScgPSAnc2Nyb2xsJztcclxuXHJcbiAgcHVibGljIHRvb2xiYXJNYXJnaW5Ub3AgPSAnMHB4JztcclxuXHJcbiAgcHVibGljIHRvb2xiYXJXaWR0aCA9ICcxMDAlJztcclxuXHJcbiAgcHJpdmF0ZSB0b29sYmFyOiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgcHVibGljIG9uVG9vbGJhckxvYWRlZCh0b29sYmFyRWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMudG9vbGJhciA9IHRvb2xiYXJFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvb2xiYXJXaWR0aEluUGl4ZWxzID0gMTAwO1xyXG5cclxuICBwdWJsaWMgc2Vjb25kYXJ5VG9vbGJhclRvcDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBwdWJsaWMgc2lkZWJhclBvc2l0aW9uVG9wOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIC8vIGRpcnR5IElFMTEgaGFjayAtIHRlbXBvcmFyeSBzb2x1dGlvblxyXG4gIHB1YmxpYyBmaW5kYmFyVG9wOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIC8vIGRpcnR5IElFMTEgaGFjayAtIHRlbXBvcmFyeSBzb2x1dGlvblxyXG4gIHB1YmxpYyBmaW5kYmFyTGVmdDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICAvLyBBZGRpdGlvbmFsIFBERiBGb3JtIEZpZWxkIFR5cGVzICM1Njc6IFVzZWQgdG8gc3RvcmUgdGhlIGV4cG9ydGVkIHZhbHVlcyBvZiByYWRpbyBhbmQgY2hlY2tib3ggYnV0dG9uc1xyXG4gIHB1YmxpYyBidXR0b25WYWx1ZXM6IGFueSA9IHt9O1xyXG5cclxuICBwdWJsaWMgZ2V0IG1vYmlsZUZyaWVuZGx5Wm9vbSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9tb2JpbGVGcmllbmRseVpvb207XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHBkZkpzVmVyc2lvbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGdldFZlcnNpb25TdWZmaXgocGRmRGVmYXVsdE9wdGlvbnMuYXNzZXRzRm9sZGVyKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgYXR0cmlidXRlcyBhbGxvd3MgeW91IHRvIGluY3JlYXNlIHRoZSBzaXplIG9mIHRoZSBVSSBlbGVtZW50cyBzbyB5b3UgY2FuIHVzZSB0aGVtIG9uIHNtYWxsIG1vYmlsZSBkZXZpY2VzLlxyXG4gICAqIFRoaXMgYXR0cmlidXRlIGlzIGEgc3RyaW5nIHdpdGggYSBwZXJjZW50IGNoYXJhY3RlciBhdCB0aGUgZW5kIChlLmcuIFwiMTUwJVwiKS5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgbW9iaWxlRnJpZW5kbHlab29tKHpvb206IHN0cmluZykge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHMgLSB0aGUgdHlwZSBjb252ZXJzaW9uIGlzIGludGVuZGVkXHJcbiAgICBpZiAoem9vbSA9PSAndHJ1ZScpIHtcclxuICAgICAgem9vbSA9ICcxNTAlJztcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHMgLSB0aGUgdHlwZSBjb252ZXJzaW9uIGlzIGludGVuZGVkXHJcbiAgICB9IGVsc2UgaWYgKHpvb20gPT0gJ2ZhbHNlJyB8fCB6b29tID09PSB1bmRlZmluZWQgfHwgem9vbSA9PT0gbnVsbCkge1xyXG4gICAgICB6b29tID0gJzEwMCUnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fbW9iaWxlRnJpZW5kbHlab29tID0gem9vbTtcclxuICAgIGxldCBmYWN0b3IgPSAxO1xyXG4gICAgaWYgKCFTdHJpbmcoem9vbSkuaW5jbHVkZXMoJyUnKSkge1xyXG4gICAgICB6b29tID0gMTAwICogTnVtYmVyKHpvb20pICsgJyUnO1xyXG4gICAgfVxyXG4gICAgZmFjdG9yID0gTnVtYmVyKCh6b29tIHx8ICcxMDAnKS5yZXBsYWNlKCclJywgJycpKSAvIDEwMDtcclxuICAgIHRoaXMubW9iaWxlRnJpZW5kbHlab29tU2NhbGUgPSBmYWN0b3I7XHJcbiAgICB0aGlzLnRvb2xiYXJXaWR0aCA9ICgxMDAgLyBmYWN0b3IpLnRvU3RyaW5nKCkgKyAnJSc7XHJcbiAgICB0aGlzLnRvb2xiYXJNYXJnaW5Ub3AgPSAoZmFjdG9yIC0gMSkgKiAxNiArICdweCc7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNhbGNWaWV3ZXJQb3NpdGlvblRvcCgpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2h1dHRpbmdEb3duID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBjYWxjVmlld2VyUG9zaXRpb25Ub3AoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50b29sYmFyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5zaWRlYmFyUG9zaXRpb25Ub3AgPSAnMHB4JztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IHRvcCA9IHRoaXMudG9vbGJhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XHJcbiAgICBpZiAodG9wIDwgMzMpIHtcclxuICAgICAgdGhpcy52aWV3ZXJQb3NpdGlvblRvcCA9ICczM3B4JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmlld2VyUG9zaXRpb25Ub3AgPSB0b3AgKyAncHgnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZhY3RvciA9IHRvcCAvIDMzO1xyXG5cclxuICAgIGlmICh0aGlzLnByaW1hcnlNZW51VmlzaWJsZSkge1xyXG4gICAgICB0aGlzLnNpZGViYXJQb3NpdGlvblRvcCA9ICgzMyArIDMzICogKGZhY3RvciAtIDEpKS50b1N0cmluZygpICsgJ3B4JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2lkZWJhclBvc2l0aW9uVG9wID0gJzBweCc7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlY29uZGFyeVRvb2xiYXJUb3AgPSAoMzMgKyAzOCAqIChmYWN0b3IgLSAxKSkudG9TdHJpbmcoKSArICdweCc7XHJcbiAgICB0aGlzLmZpbmRiYXJUb3AgPSAoMzQgKyA1NCAqIChmYWN0b3IgLSAxKSkudG9TdHJpbmcoKSArICdweCc7XHJcblxyXG4gICAgY29uc3QgZmluZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3RmluZCcpO1xyXG4gICAgaWYgKGZpbmRCdXR0b24pIHtcclxuICAgICAgY29uc3QgY29udGFpbmVyUG9zaXRpb25MZWZ0ID0gdGhpcy50b29sYmFyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbiAgICAgIGNvbnN0IGZpbmRCdXR0b25Qb3NpdGlvbiA9IGZpbmRCdXR0b24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIGNvbnN0IGxlZnQgPSBmaW5kQnV0dG9uUG9zaXRpb24ubGVmdCAtIGNvbnRhaW5lclBvc2l0aW9uTGVmdDtcclxuICAgICAgdGhpcy5maW5kYmFyTGVmdCA9IGxlZnQgKyAncHgnO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnNob3dTaWRlYmFyQnV0dG9uKSB7XHJcbiAgICAgIHRoaXMuZmluZGJhckxlZnQgPSAzNCArICgzMiAqIGZhY3RvcikudG9TdHJpbmcoKSArICdweCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZpbmRiYXJMZWZ0ID0gJzBweCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQsXHJcbiAgICBwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IFBERk5vdGlmaWNhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcGxhdGZvcm1Mb2NhdGlvbjogUGxhdGZvcm1Mb2NhdGlvbixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgc2VydmljZTogTmd4RXh0ZW5kZWRQZGZWaWV3ZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXHJcbiAgKSB7XHJcbiAgICB0aGlzLmJhc2VIcmVmID0gdGhpcy5wbGF0Zm9ybUxvY2F0aW9uLmdldEJhc2VIcmVmRnJvbURPTSgpO1xyXG4gICAgdGhpcy5zZXJ2aWNlLnJlY2FsY3VsYXRlU2l6ZSQuc3Vic2NyaWJlKCgpID0+IHRoaXMub25SZXNpemUoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlPU1ZlcnNpb25SZXF1aXJlc0VTNSgpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IG1hdGNoID0gbmF2aWdhdG9yLmFwcFZlcnNpb24ubWF0Y2goL09TIChcXGQrKV8oXFxkKylfPyhcXGQrKT8vKTtcclxuICAgIGlmIChtYXRjaCAhPT0gdW5kZWZpbmVkICYmIG1hdGNoICE9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBwYXJzZUludChtYXRjaFsxXSwgMTApIDwgMTQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBuZWVkc0VTNSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGNvbnN0IGlzSUUgPSAhISg8YW55PndpbmRvdykuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoPGFueT5kb2N1bWVudCkuZG9jdW1lbnRNb2RlO1xyXG4gICAgY29uc3QgaXNFZGdlID0gL0VkZ2VcXC9cXGQuL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuICAgIGNvbnN0IGlzSU9zMTNPckJlbG93ID0gdGhpcy5pT1NWZXJzaW9uUmVxdWlyZXNFUzUoKTtcclxuICAgIGxldCBuZWVkc0VTNSA9IHR5cGVvZiBSZWFkYWJsZVN0cmVhbSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIFByb21pc2VbJ2FsbFNldHRsZWQnXSA9PT0gJ3VuZGVmaW5lZCc7XHJcbiAgICBpZiAobmVlZHNFUzUgfHwgaXNJRSB8fCBpc0VkZ2UgfHwgaXNJT3MxM09yQmVsb3cgfHwgdGhpcy5mb3JjZVVzaW5nTGVnYWN5RVM1KSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICEoYXdhaXQgdGhpcy5zdXBwb3J0c09wdGlvbmFsQ2hhaW5pbmcoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN1cHBvcnRzT3B0aW9uYWxDaGFpbmluZygpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICBjb25zdCBzdXBwb3J0ID0gKDxhbnk+d2luZG93KS5zdXBwb3J0c09wdGlvbmFsQ2hhaW5pbmc7XHJcbiAgICAgIHN1cHBvcnQgIT09IHVuZGVmaW5lZCA/IHJlc29sdmUoc3VwcG9ydCkgOiByZXNvbHZlKHRoaXMuYWRkU2NyaXB0T3BDaGFpbmluZ1N1cHBvcnQoKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkU2NyaXB0T3BDaGFpbmluZ1N1cHBvcnQoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgY29uc3Qgc2NyaXB0ID0gdGhpcy5jcmVhdGVTY3JpcHRFbGVtZW50KHBkZkRlZmF1bHRPcHRpb25zLmFzc2V0c0ZvbGRlciArICcvb3AtY2hhaW5pbmctc3VwcG9ydC5qcycpO1xyXG4gICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIHNjcmlwdC5yZW1vdmUoKTtcclxuICAgICAgICByZXNvbHZlKCg8YW55PndpbmRvdykuc3VwcG9ydHNPcHRpb25hbENoYWluaW5nIGFzIGJvb2xlYW4pO1xyXG4gICAgICB9O1xyXG4gICAgICBzY3JpcHQub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgICBzY3JpcHQucmVtb3ZlKCk7XHJcbiAgICAgICAgKDxhbnk+d2luZG93KS5zdXBwb3J0c09wdGlvbmFsQ2hhaW5pbmcgPSBmYWxzZTtcclxuICAgICAgICByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVTY3JpcHRFbGVtZW50KHNvdXJjZVBhdGg6IHN0cmluZyk6IEhUTUxTY3JpcHRFbGVtZW50IHtcclxuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XHJcbiAgICBjb25zdCB0dFdpbmRvdyA9IHdpbmRvdyBhcyB1bmtub3duIGFzIFRydXN0ZWRUeXBlc1dpbmRvdztcclxuICAgIGlmICh0dFdpbmRvdy50cnVzdGVkVHlwZXMpIHtcclxuICAgICAgY29uc3Qgc2FuaXRpemVyID0gdHRXaW5kb3cudHJ1c3RlZFR5cGVzLmNyZWF0ZVBvbGljeSgnZm9vJywge1xyXG4gICAgICAgIGNyZWF0ZVNjcmlwdFVSTDogKGlucHV0KSA9PiBpbnB1dCxcclxuICAgICAgfSk7XHJcbiAgICAgIHNjcmlwdC5zcmMgPSBzYW5pdGl6ZXIuY3JlYXRlU2NyaXB0VVJMKHRoaXMubG9jYXRpb24ubm9ybWFsaXplKHNvdXJjZVBhdGgpKSBhcyBhbnk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzY3JpcHQuc3JjID0gdGhpcy5sb2NhdGlvbi5ub3JtYWxpemUoc291cmNlUGF0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNjcmlwdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UGRmSnNQYXRoKGFydGlmYWN0OiAncGRmJyB8ICd2aWV3ZXInLCBuZWVkc0VTNTogYm9vbGVhbikge1xyXG4gICAgY29uc3Qgc3VmZml4ID0gdGhpcy5taW5pZmllZEpTTGlicmFyaWVzID8gJy5taW4uanMnIDogJy5qcyc7XHJcbiAgICBjb25zdCBhc3NldHMgPSBwZGZEZWZhdWx0T3B0aW9ucy5hc3NldHNGb2xkZXI7XHJcbiAgICBjb25zdCB2ZXJzaW9uU3VmZml4ID0gZ2V0VmVyc2lvblN1ZmZpeChhc3NldHMpO1xyXG4gICAgY29uc3QgYXJ0aWZhY3RQYXRoID0gYC8ke2FydGlmYWN0fS1gO1xyXG4gICAgY29uc3QgZXM1ID0gbmVlZHNFUzUgPyAnLWVzNScgOiAnJztcclxuXHJcbiAgICByZXR1cm4gYXNzZXRzICsgYXJ0aWZhY3RQYXRoICsgdmVyc2lvblN1ZmZpeCArIGVzNSArIHN1ZmZpeDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZFZpZXdlcigpOiB2b2lkIHtcclxuICAgIHdpbmRvd1snbmd4Wm9uZSddID0gdGhpcy5uZ1pvbmU7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIGlmICghd2luZG93WydwZGZqcy1kaXN0L2J1aWxkL3BkZiddKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxvYWRWaWV3ZXIoKSwgMjUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubmVlZHNFUzUoKS50aGVuKChuZWVkc0VTNSkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgdmlld2VyUGF0aCA9IHRoaXMuZ2V0UGRmSnNQYXRoKCd2aWV3ZXInLCBuZWVkc0VTNSk7XHJcbiAgICAgICAgICBjb25zdCBzY3JpcHQgPSB0aGlzLmNyZWF0ZVNjcmlwdEVsZW1lbnQodmlld2VyUGF0aCk7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRGZWF0dXJlcygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICBjb25zdCBzY3JpcHQgPSB0aGlzLmNyZWF0ZVNjcmlwdEVsZW1lbnQocGRmRGVmYXVsdE9wdGlvbnMuYXNzZXRzRm9sZGVyICsgJy9hZGRpdGlvbmFsLWZlYXR1cmVzLmpzJyk7XHJcbiAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2NyaXB0LnJlbW92ZSgpO1xyXG4gICAgICB9O1xyXG4gICAgICBzY3JpcHQub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgICBzY3JpcHQucmVtb3ZlKCk7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHdpbmRvd1snc2V0Tmd4RXh0ZW5kZWRQZGZWaWV3ZXJTb3VyY2UnXSA9ICh1cmw6IHN0cmluZykgPT4ge1xyXG4gICAgICB0aGlzLl9zcmMgPSB1cmw7XHJcbiAgICAgIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgICAgIHRoaXMuc3JjQ2hhbmdlVHJpZ2dlcmVkQnlVc2VyID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zcmNDaGFuZ2UuZW1pdCh1cmwpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG4gICAgICB0aGlzLmFkZFRyYW5zbGF0aW9uc1VubGVzc1Byb3ZpZGVkQnlUaGVVc2VyKCk7XHJcbiAgICAgICh3aW5kb3cgYXMgYW55KS5nZXRGb3JtVmFsdWUgPSAoa2V5OiBzdHJpbmcpID0+IHRoaXMuZ2V0Rm9ybVZhbHVlKGtleSk7XHJcbiAgICAgICh3aW5kb3cgYXMgYW55KS5zZXRGb3JtVmFsdWUgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHRoaXMuc2V0Rm9ybVZhbHVlKGtleSwgdmFsdWUpO1xyXG4gICAgICAod2luZG93IGFzIGFueSkucmVnaXN0ZXJBY3JvZm9ybUFubm90YXRpb25zID0gKHNvcnRlZEFubm90YXRpb25zKSA9PiB0aGlzLnJlZ2lzdGVyQWNyb2Zvcm1Bbm5vdGF0aW9ucyhzb3J0ZWRBbm5vdGF0aW9ucyk7XHJcbiAgICAgICh3aW5kb3cgYXMgYW55KS5hc3NpZ25Gb3JtSWRBbmRGaWVsZE5hbWUgPSAoa2V5OiBzdHJpbmcsIGZpZWxkTmFtZTogc3RyaW5nLCByYWRpb0J1dHRvbkZpZWxkPzogc3RyaW5nKSA9PlxyXG4gICAgICAgIHRoaXMuYXNzaWduRm9ybUlkQW5kRmllbGROYW1lKGtleSwgZmllbGROYW1lLCByYWRpb0J1dHRvbkZpZWxkKTtcclxuXHJcbiAgICAgIHRoaXMubG9hZFBkZkpzKCk7XHJcbiAgICAgIHRoaXMuaGlkZVRvb2xiYXJJZkl0SXNFbXB0eSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2FkUGRmSnMoKSB7XHJcbiAgICB3aW5kb3dbJ25neFpvbmUnXSA9IHRoaXMubmdab25lO1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICBpZiAoIXdpbmRvd1sncGRmanMtZGlzdC9idWlsZC9wZGYnXSkge1xyXG4gICAgICAgIHRoaXMubmVlZHNFUzUoKS50aGVuKChuZWVkc0VTNSkgPT4ge1xyXG4gICAgICAgICAgaWYgKG5lZWRzRVM1KSB7XHJcbiAgICAgICAgICAgIGlmICghcGRmRGVmYXVsdE9wdGlvbnMubmVlZHNFUzUpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgIFwiSWYgeW91IHNlZSB0aGUgZXJyb3IgbWVzc2FnZSBcXFwiZXhwZWN0ZWQgZXhwcmVzc2lvbiwgZ290ICc9J1xcXCIgYWJvdmU6IHlvdSBjYW4gc2FmZWx5IGlnbm9yZSBpdCBhcyBsb25nIGFzIHlvdSBrbm93IHdoYXQgeW91J3JlIGRvaW5nLiBJdCBtZWFucyB5b3VyIGJyb3dzZXIgaXMgb3V0LW9mLWRhdGUuIFBsZWFzZSB1cGRhdGUgeW91ciBicm93c2VyIHRvIGJlbmVmaXQgZnJvbSB0aGUgbGF0ZXN0IHNlY3VyaXR5IHVwZGF0ZXMgYW5kIHRvIGVuam95IGEgZmFzdGVyIFBERiB2aWV3ZXIuXCJcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBkZkRlZmF1bHRPcHRpb25zLm5lZWRzRVM1ID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzaW5nIHRoZSBFUzUgdmVyc2lvbiBvZiB0aGUgUERGIHZpZXdlci4gWW91ciBQREYgZmlsZXMgc2hvdyBmYXN0ZXIgaWYgeW91IHVwZGF0ZSB5b3VyIGJyb3dzZXIuJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB3aW5kb3dbJ25neFpvbmUnXSA9IHRoaXMubmdab25lO1xyXG4gICAgICAgICAgaWYgKHRoaXMubWluaWZpZWRKU0xpYnJhcmllcykge1xyXG4gICAgICAgICAgICBpZiAoIXBkZkRlZmF1bHRPcHRpb25zLndvcmtlclNyYygpLmVuZHNXaXRoKCcubWluLmpzJykpIHtcclxuICAgICAgICAgICAgICBjb25zdCBzcmMgPSBwZGZEZWZhdWx0T3B0aW9ucy53b3JrZXJTcmMoKTtcclxuICAgICAgICAgICAgICBwZGZEZWZhdWx0T3B0aW9ucy53b3JrZXJTcmMgPSAoKSA9PiBzcmMucmVwbGFjZSgnLmpzJywgJy5taW4uanMnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgcGRmSnNQYXRoID0gdGhpcy5nZXRQZGZKc1BhdGgoJ3BkZicsIG5lZWRzRVM1KTtcclxuICAgICAgICAgIGNvbnN0IHNjcmlwdCA9IHRoaXMuY3JlYXRlU2NyaXB0RWxlbWVudChwZGZKc1BhdGgpO1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghKHdpbmRvdyBhcyBhbnkpLndlYlZpZXdlckxvYWQpIHtcclxuICAgICAgICB0aGlzLmxvYWRWaWV3ZXIoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgaWYgKCF0aGlzLnNodXR0aW5nRG93bikge1xyXG4gICAgICAgIC8vIGh1cnJpZWQgdXNlcnMgc29tZXRpbWVzIHJlbG9hZCB0aGUgUERGIGJlZm9yZSBpdCBoYXMgZmluaXNoZWQgaW5pdGlhbGl6aW5nXHJcbiAgICAgICAgaWYgKCh3aW5kb3cgYXMgYW55KS53ZWJWaWV3ZXJMb2FkKSB7XHJcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmRvSW5pdFBERlZpZXdlcigpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm5nQWZ0ZXJWaWV3SW5pdCgpLCA1MCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzc2lnblRhYmluZGV4ZXMoKSB7XHJcbiAgICBpZiAodGhpcy5zdGFydFRhYmluZGV4KSB7XHJcbiAgICAgIGNvbnN0IHIgPSB0aGlzLnJvb3QubmF0aXZlRWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIHIuY2xhc3NMaXN0LmFkZCgnb2Zmc2NyZWVuJyk7XHJcbiAgICAgIHRoaXMuc2hvd0VsZW1lbnRzUmVjdXJzaXZlbHkocik7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocik7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5jb2xsZWN0RWxlbWVudFBvc2l0aW9ucyhyLCB0aGlzLnJvb3QubmF0aXZlRWxlbWVudCwgW10pO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHIpO1xyXG4gICAgICBjb25zdCBzb3J0ZWQgPSBlbGVtZW50cy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgaWYgKGEueSAtIGIueSA+IDE1KSB7XHJcbiAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGIueSAtIGEueSA+IDE1KSB7XHJcbiAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhLnggLSBiLng7XHJcbiAgICAgIH0pO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvcnRlZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHNvcnRlZFtpXS5lbGVtZW50LnRhYkluZGV4ID0gdGhpcy5zdGFydFRhYmluZGV4ICsgaTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93RWxlbWVudHNSZWN1cnNpdmVseShyb290OiBFbGVtZW50KTogdm9pZCB7XHJcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcclxuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuWFhMVmlldycpO1xyXG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW5YTFZpZXcnKTtcclxuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuTGFyZ2VWaWV3Jyk7XHJcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbk1lZGl1bVZpZXcnKTtcclxuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuU21hbGxWaWV3Jyk7XHJcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlblRpbnlWaWV3Jyk7XHJcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGVYWExWaWV3Jyk7XHJcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGVYTFZpZXcnKTtcclxuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZUxhcmdlVmlldycpO1xyXG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlTWVkaXVtVmlldycpO1xyXG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlU21hbGxWaWV3Jyk7XHJcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGVUaW55VmlldycpO1xyXG5cclxuICAgIGlmIChyb290IGluc3RhbmNlb2YgSFRNTEJ1dHRvbkVsZW1lbnQgfHwgcm9vdCBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50IHx8IHJvb3QgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50IHx8IHJvb3QgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2UgaWYgKHJvb3QuY2hpbGRFbGVtZW50Q291bnQgPiAwKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm9vdC5jaGlsZEVsZW1lbnRDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgYyA9IHJvb3QuY2hpbGRyZW4uaXRlbShpKTtcclxuICAgICAgICBpZiAoYykge1xyXG4gICAgICAgICAgdGhpcy5zaG93RWxlbWVudHNSZWN1cnNpdmVseShjKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29sbGVjdEVsZW1lbnRQb3NpdGlvbnMoY29weTogRWxlbWVudCwgb3JpZ2luYWw6IEVsZW1lbnQsIGVsZW1lbnRzOiBBcnJheTxFbGVtZW50QW5kUG9zaXRpb24+KTogQXJyYXk8RWxlbWVudEFuZFBvc2l0aW9uPiB7XHJcbiAgICBpZiAoY29weSBpbnN0YW5jZW9mIEhUTUxCdXR0b25FbGVtZW50IHx8IGNvcHkgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCB8fCBjb3B5IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCB8fCBjb3B5IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcclxuICAgICAgY29uc3QgcmVjdCA9IGNvcHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnRBbmRQb3MgPSB7XHJcbiAgICAgICAgZWxlbWVudDogb3JpZ2luYWwsXHJcbiAgICAgICAgeDogTWF0aC5yb3VuZChyZWN0LmxlZnQpLFxyXG4gICAgICAgIHk6IE1hdGgucm91bmQocmVjdC50b3ApLFxyXG4gICAgICB9IGFzIEVsZW1lbnRBbmRQb3NpdGlvbjtcclxuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50QW5kUG9zKTtcclxuICAgIH0gZWxzZSBpZiAoY29weS5jaGlsZEVsZW1lbnRDb3VudCA+IDApIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3B5LmNoaWxkRWxlbWVudENvdW50OyBpKyspIHtcclxuICAgICAgICBjb25zdCBjID0gY29weS5jaGlsZHJlbi5pdGVtKGkpO1xyXG4gICAgICAgIGNvbnN0IG8gPSBvcmlnaW5hbC5jaGlsZHJlbi5pdGVtKGkpO1xyXG4gICAgICAgIGlmIChjICYmIG8pIHtcclxuICAgICAgICAgIGVsZW1lbnRzID0gdGhpcy5jb2xsZWN0RWxlbWVudFBvc2l0aW9ucyhjLCBvLCBlbGVtZW50cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWxlbWVudHM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRvSW5pdFBERlZpZXdlcigpIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBjYWxsYmFjayA9ICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9jYWxpemVkJywgY2FsbGJhY2spO1xyXG4gICAgICB0aGlzLmluaXRUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNodXR0aW5nRG93bikge1xyXG4gICAgICAgICAgLy8gaHVycmllZCB1c2VycyBzb21ldGltZXMgcmVsb2FkIHRoZSBQREYgYmVmb3JlIGl0IGhhcyBmaW5pc2hlZCBpbml0aWFsaXppbmdcclxuICAgICAgICAgIHRoaXMuY2FsY1ZpZXdlclBvc2l0aW9uVG9wKCk7XHJcbiAgICAgICAgICB0aGlzLmFmdGVyTGlicmFyeUluaXQoKTtcclxuICAgICAgICAgIHRoaXMub3BlblBERigpO1xyXG4gICAgICAgICAgdGhpcy5hc3NpZ25UYWJpbmRleGVzKCk7XHJcbiAgICAgICAgICBpZiAodGhpcy5yZXBsYWNlQnJvd3NlclByaW50KSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5wcmludCA9ICh3aW5kb3cgYXMgYW55KS5wcmludFBERjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sIHRoaXMuZGVsYXlGaXJzdFZpZXcpO1xyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYWZ0ZXJwcmludCcsICgpID0+IHtcclxuICAgICAgdGhpcy5hZnRlclByaW50LmVtaXQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmVwcmludCcsICgpID0+IHtcclxuICAgICAgdGhpcy5iZWZvcmVQcmludC5lbWl0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdsb2NhbGl6ZWQnLCBjYWxsYmFjayk7XHJcblxyXG4gICAgaWYgKE5neEV4dGVuZGVkUGRmVmlld2VyQ29tcG9uZW50Lm5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQpIHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnF1b3RlbWFya1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiWW91J3JlIHRyeWluZyB0byBvcGVuIHR3byBpbnN0YW5jZXMgb2YgdGhlIFBERiB2aWV3ZXIuIE1vc3QgbGlrZWx5LCB0aGlzIHdpbGwgcmVzdWx0IGluIGVycm9ycy5cIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBvbkxvYWRlZCA9ICgpID0+IHtcclxuICAgICAgdGhpcy5vdmVycmlkZURlZmF1bHRTZXR0aW5ncygpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd3ZWJ2aWV3ZXJsb2FkZWQnLCBvbkxvYWRlZCk7XHJcbiAgICB9O1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignd2Vidmlld2VybG9hZGVkJywgb25Mb2FkZWQpO1xyXG5cclxuICAgIHRoaXMuYWN0aXZhdGVUZXh0bGF5ZXJJZk5lY2Vzc2FyeShudWxsKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLnNodXR0aW5nRG93bikge1xyXG4gICAgICAgIC8vIGh1cnJpZWQgdXNlcnMgc29tZXRpbWVzIHJlbG9hZCB0aGUgUERGIGJlZm9yZSBpdCBoYXMgZmluaXNoZWQgaW5pdGlhbGl6aW5nXHJcbiAgICAgICAgLy8gVGhpcyBpbml0aWFsaXplcyB0aGUgd2Vidmlld2VyLCB0aGUgZmlsZSBtYXkgYmUgcGFzc2VkIGluIHRvIGl0IHRvIGluaXRpYWxpemUgdGhlIHZpZXdlciB3aXRoIGEgcGRmIGRpcmVjdGx5XHJcbiAgICAgICAgdGhpcy5vblJlc2l6ZSgpO1xyXG4gICAgICAgIHRoaXMuaGlkZVRvb2xiYXJJZkl0SXNFbXB0eSgpO1xyXG4gICAgICAgIHRoaXMuZHVtbXlDb21wb25lbnRzLmFkZE1pc3NpbmdTdGFuZGFyZFdpZGdldHMoKTtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiAoPGFueT53aW5kb3cpLndlYlZpZXdlckxvYWQoKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uYXBwQ29uZmlnLmRlZmF1bHRVcmwgPSAnJzsgLy8gSUUgYnVnZml4XHJcbiAgICAgICAgaWYgKHRoaXMuZmlsZW5hbWVGb3JEb3dubG9hZCkge1xyXG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uYXBwQ29uZmlnLmZpbGVuYW1lRm9yRG93bmxvYWQgPSB0aGlzLmZpbGVuYW1lRm9yRG93bmxvYWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9uczogSVBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucyA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XHJcblxyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ2VuYWJsZURyYWdBbmREcm9wJywgdGhpcy5lbmFibGVEcmFnQW5kRHJvcCk7XHJcbiAgICAgICAgbGV0IGxhbmd1YWdlID0gdGhpcy5sYW5ndWFnZSA9PT0gJycgPyB1bmRlZmluZWQgOiB0aGlzLmxhbmd1YWdlO1xyXG4gICAgICAgIGlmICghbGFuZ3VhZ2UpIHtcclxuICAgICAgICAgIGxhbmd1YWdlID0gbmF2aWdhdG9yLmxhbmd1YWdlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCdsb2NhbGUnLCBsYW5ndWFnZSk7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLnNldCgnaW1hZ2VSZXNvdXJjZXNQYXRoJywgdGhpcy5pbWFnZVJlc291cmNlc1BhdGgpO1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ21pblpvb20nLCB0aGlzLm1pblpvb20pO1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ21heFpvb20nLCB0aGlzLm1heFpvb20pO1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ3BhZ2VWaWV3TW9kZScsIHRoaXMucGFnZVZpZXdNb2RlKTtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCd2ZXJib3NpdHknLCB0aGlzLmxvZ0xldmVsKTtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCdpbml0aWFsWm9vbScsIHRoaXMuem9vbSk7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLnNldCgncGRmQmFja2dyb3VuZENvbG9yJywgdGhpcy5wZGZCYWNrZ3JvdW5kKTtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCdwZGZCYWNrZ3JvdW5kQ29sb3JUb1JlcGxhY2UnLCB0aGlzLnBkZkJhY2tncm91bmRDb2xvclRvUmVwbGFjZSk7XHJcblxyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmlzVmlld2VyRW1iZWRkZWQgPSB0cnVlO1xyXG4gICAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wcmludEtleURvd25MaXN0ZW5lcikge1xyXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wcmludEtleURvd25MaXN0ZW5lciwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKTtcclxuICAgICAgICBpZiAoYm9keVswXSkge1xyXG4gICAgICAgICAgY29uc3QgdG9wTGV2ZWxFbGVtZW50cyA9IGJvZHlbMF0uY2hpbGRyZW47XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gdG9wTGV2ZWxFbGVtZW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBjb25zdCBlID0gdG9wTGV2ZWxFbGVtZW50cy5pdGVtKGkpO1xyXG4gICAgICAgICAgICBpZiAoZSAmJiBlLmlkID09PSAncHJpbnRDb250YWluZXInKSB7XHJcbiAgICAgICAgICAgICAgYm9keVswXS5yZW1vdmVDaGlsZChlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmludENvbnRhaW5lcicpO1xyXG4gICAgICAgIGlmIChwYykge1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5hcHBlbmRDaGlsZChwYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LCAwKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkVHJhbnNsYXRpb25zVW5sZXNzUHJvdmlkZWRCeVRoZVVzZXIoKSB7XHJcbiAgICBjb25zdCBsYW5nTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3R5cGU9XCJhcHBsaWNhdGlvbi9sMTBuXCJdJyk7XHJcbiAgICBjb25zdCBsYW5nQ291bnQgPSBsYW5nTGlua3MubGVuZ3RoO1xyXG4gICAgY29uc3QgZGljdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFt0eXBlPVwiYXBwbGljYXRpb24vbDEwblwiXScpO1xyXG4gICAgY29uc3QgdXNlclByb3ZpZGVzVHJhbnNsYXRpb25zID0gbGFuZ0NvdW50ID4gMCB8fCAhIWRpY3Q7XHJcbiAgICBpZiAodGhpcy5fdXNlQnJvd3NlckxvY2FsZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMudXNlQnJvd3NlckxvY2FsZSA9ICF1c2VyUHJvdmlkZXNUcmFuc2xhdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF1c2VyUHJvdmlkZXNUcmFuc2xhdGlvbnMpIHtcclxuICAgICAgaWYgKCF0aGlzLnVzZUJyb3dzZXJMb2NhbGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiSWYgeW91IHNldCB0aGUgYXR0cmlidXRlICd1c2VCcm93c2VyTG9jYWxlJyB0byBmYWxzZSwgeW91IG11c3QgcHJvdmlkZSB0aGUgdHJhbnNsYXRpb25zIHlvdXJzZWxmIGluIGEgc2NyaXB0IG9yIGxpbmsgdGFnLlwiKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgZWFzaWVzdCB3YXkgdG8gZG8gdGhpcyBpcyB0byBhZGQgdGhlbSB0byB0aGUgaW5kZXguaHRtbC4nKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgUERGIHZpZXdlciBpZ25vcmVzIHlvdXIgc2V0dGluZyBhbmQgbG9hZHMgdGhlIGRlZmF1bHQgdHJhbnNsYXRpb25zLicpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGxpbmsgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuICAgICAgbGluay5yZWwgPSAncmVzb3VyY2UnO1xyXG4gICAgICBsaW5rLnR5cGUgPSAnYXBwbGljYXRpb24vbDEwbic7XHJcbiAgICAgIGxpbmsuaHJlZiA9IHRoaXMubG9jYWxlRm9sZGVyUGF0aCArICcvbG9jYWxlLnByb3BlcnRpZXMnO1xyXG4gICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnb3JpZ2luJywgJ25neC1leHRlbmRlZC1wZGYtdmlld2VyJyk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGxpbmspO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnVzZUJyb3dzZXJMb2NhbGUgJiYgbGFuZ0NvdW50ID4gMCkge1xyXG4gICAgICBjb25zdCBvID0gbGFuZ0xpbmtzWzBdLmF0dHJpYnV0ZXNbJ29yaWdpbiddO1xyXG4gICAgICBpZiAobyAmJiBvLnZhbHVlICE9PSAnbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXInKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlBsZWFzZSBzZXQgdGhlIGF0dHJpYnV0ZSAndXNlQnJvd3NlckxvY2FsZScgdG8gZmFsc2UgaWYgeW91IHByb3ZpZGUgdGhlIHRyYW5zbGF0aW9ucyB5b3Vyc2VsZiBpbiBhIHNjcmlwdCBvciBsaW5rIHRhZy5cIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGlkZVRvb2xiYXJJZkl0SXNFbXB0eSgpIHtcclxuICAgIHRoaXMucHJpbWFyeU1lbnVWaXNpYmxlID0gdGhpcy5zaG93VG9vbGJhcjtcclxuICAgIGlmICghdGhpcy5zaG93U2Vjb25kYXJ5VG9vbGJhckJ1dHRvbiB8fCB0aGlzLmhpZGVLZWJhYk1lbnVGb3JTZWNvbmRhcnlUb29sYmFyKSB7XHJcbiAgICAgIGlmICghdGhpcy5pc1ByaW1hcnlNZW51VmlzaWJsZSgpKSB7XHJcbiAgICAgICAgdGhpcy5wcmltYXJ5TWVudVZpc2libGUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIE5vdGlmaWVzIGV2ZXJ5IHdpZGdldCB0aGF0IGltcGxlbWVudHMgb25MaWJyYXJ5SW5pdCgpIHRoYXQgdGhlIFBERiB2aWV3ZXIgb2JqZWN0cyBhcmUgYXZhaWxhYmxlICovXHJcbiAgcHJpdmF0ZSBhZnRlckxpYnJhcnlJbml0KCkge1xyXG4gICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLm9uUERGSlNJbml0Lm5leHQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGVja0hlaWdodCgpOiB2b2lkIHtcclxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3pvb20nKVswXSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgaWYgKGNvbnRhaW5lcikge1xyXG4gICAgICAgIGlmIChjb250YWluZXIuY2xpZW50SGVpZ2h0ID09PSAwKSB7XHJcbiAgICAgICAgICBpZiAoIXRoaXMuYXV0b0hlaWdodCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICAgICAgXCJUaGUgaGVpZ2h0IG9mIHRoZSBQREYgdmlld2VyIHdpZGdldCBpcyB6ZXJvIHBpeGVscy4gUGxlYXNlIGNoZWNrIHRoZSBoZWlnaHQgYXR0cmlidXRlLiBJcyB0aGVyZSBhIHN5bnRheCBlcnJvcj8gT3IgYXJlIHlvdSB1c2luZyBhIHBlcmNlbnRhZ2Ugd2l0aCBhIENTUyBmcmFtZXdvcmsgdGhhdCBkb2Vzbid0IHN1cHBvcnQgdGhpcz8gVGhlIGhlaWdodCBpcyBhZGp1c3RlZCBhdXRvbWF0ZWRseS5cIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmF1dG9IZWlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5hdXRvSGVpZ2h0KSB7XHJcbiAgICAgICAgICBjb25zdCBhdmFpbGFibGUgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgICBjb25zdCByZWN0ID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgY29uc3QgdG9wID0gcmVjdC50b3A7XHJcbiAgICAgICAgICBsZXQgbWF4aW11bUhlaWdodCA9IGF2YWlsYWJsZSAtIHRvcDtcclxuICAgICAgICAgIC8vIHRha2UgdGhlIG1hcmdpbnMgYW5kIHBhZGRpbmdzIG9mIHRoZSBwYXJlbnQgY29udGFpbmVycyBpbnRvIGFjY291bnRcclxuICAgICAgICAgIGNvbnN0IHBhZGRpbmcgPSB0aGlzLmNhbGN1bGF0ZUJvcmRlck1hcmdpbmcoY29udGFpbmVyKTtcclxuICAgICAgICAgIG1heGltdW1IZWlnaHQgLT0gcGFkZGluZztcclxuICAgICAgICAgIGNvbnN0IGZhY3RvciA9IE51bWJlcih0aGlzLl9oZWlnaHQucmVwbGFjZSgnJScsICcnKSk7XHJcbiAgICAgICAgICBtYXhpbXVtSGVpZ2h0ID0gKG1heGltdW1IZWlnaHQgKiBmYWN0b3IpIC8gMTAwO1xyXG4gICAgICAgICAgaWYgKG1heGltdW1IZWlnaHQgPiAxMDApIHtcclxuICAgICAgICAgICAgdGhpcy5taW5IZWlnaHQgPSBgJHttYXhpbXVtSGVpZ2h0fXB4YDtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWluSGVpZ2h0ID0gJzEwMHB4JztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVCb3JkZXJNYXJnaW5nKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgfCBudWxsKTogbnVtYmVyIHtcclxuICAgIGlmIChjb250YWluZXIpIHtcclxuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICBjb25zdCBwYWRkaW5nID0gVW5pdFRvUHgudG9QeChjb21wdXRlZFN0eWxlLnBhZGRpbmdCb3R0b20pO1xyXG4gICAgICBjb25zdCBtYXJnaW4gPSBVbml0VG9QeC50b1B4KGNvbXB1dGVkU3R5bGUubWFyZ2luQm90dG9tKTtcclxuICAgICAgaWYgKGNvbnRhaW5lci5zdHlsZS56SW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gcGFkZGluZyArIG1hcmdpbjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcGFkZGluZyArIG1hcmdpbiArIHRoaXMuY2FsY3VsYXRlQm9yZGVyTWFyZ2luZyhjb250YWluZXIucGFyZW50RWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblNwcmVhZENoYW5nZShuZXdTcHJlYWQ6ICdvZmYnIHwgJ2V2ZW4nIHwgJ29kZCcpOiB2b2lkIHtcclxuICAgIHRoaXMuc3ByZWFkQ2hhbmdlLmVtaXQobmV3U3ByZWFkKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWN0aXZhdGVUZXh0bGF5ZXJJZk5lY2Vzc2FyeShvcHRpb25zOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRleHRMYXllciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGlmICghdGhpcy5oYW5kVG9vbCkge1xyXG4gICAgICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgICAgICBvcHRpb25zLnNldCgndGV4dExheWVyTW9kZScsIHBkZkRlZmF1bHRPcHRpb25zLnRleHRMYXllck1vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRleHRMYXllciA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd0ZpbmRCdXR0b24gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgdGhpcy5zaG93RmluZEJ1dHRvbiA9IHRydWU7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgLy8gdG9kbyByZW1vdmUgdGhpcyBoYWNrOlxyXG4gICAgICAgICAgICBjb25zdCB2aWV3RmluZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3RmluZCcpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAodmlld0ZpbmQpIHtcclxuICAgICAgICAgICAgICB2aWV3RmluZC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBmaW5kYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmRiYXInKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKGZpbmRiYXIpIHtcclxuICAgICAgICAgICAgICBmaW5kYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICAgIG9wdGlvbnMuc2V0KCd0ZXh0TGF5ZXJNb2RlJywgdGhpcy5zaG93SGFuZFRvb2xCdXR0b24gPyBwZGZEZWZhdWx0T3B0aW9ucy50ZXh0TGF5ZXJNb2RlIDogMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5zaG93SGFuZFRvb2xCdXR0b24pIHtcclxuICAgICAgICAgIGlmICh0aGlzLnNob3dGaW5kQnV0dG9uIHx8IHRoaXMuc2hvd0ZpbmRCdXR0b24gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2hvd0ZpbmRCdXR0b24gPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxvZ0xldmVsID49IFZlcmJvc2l0eUxldmVsLldBUk5JTkdTKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxyXG4gICAgICAgICAgICAgICAgJ0hpZGluZyB0aGUgXCJmaW5kXCIgYnV0dG9uIGJlY2F1c2UgdGhlIHRleHQgbGF5ZXIgb2YgdGhlIFBERiBmaWxlIGlzIG5vdCByZW5kZXJlZC4gVXNlIFt0ZXh0TGF5ZXJdPVwidHJ1ZVwiIHRvIGVuYWJsZSB0aGUgZmluZCBidXR0b24uJ1xyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0aGlzLnNob3dIYW5kVG9vbEJ1dHRvbikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sb2dMZXZlbCA+PSBWZXJib3NpdHlMZXZlbC5XQVJOSU5HUykge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcclxuICAgICAgICAgICAgICAgICdIaWRpbmcgdGhlIFwiaGFuZCB0b29sIC8gc2VsZWN0aW9uIG1vZGVcIiBtZW51IGJlY2F1c2UgdGhlIHRleHQgbGF5ZXIgb2YgdGhlIFBERiBmaWxlIGlzIG5vdCByZW5kZXJlZC4gVXNlIFt0ZXh0TGF5ZXJdPVwidHJ1ZVwiIHRvIGVuYWJsZSB0aGUgdGhlIG1lbnUgaXRlbXMuJ1xyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgdGhpcy5zaG93SGFuZFRvb2xCdXR0b24gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMudGV4dExheWVyKSB7XHJcbiAgICAgICAgLy8gdG9kbzogaXMgdGhpcyBhIHJlZHVuZGFudCBjaGVjaz9cclxuICAgICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgICAgb3B0aW9ucy5zZXQoJ3RleHRMYXllck1vZGUnLCBwZGZEZWZhdWx0T3B0aW9ucy50ZXh0TGF5ZXJNb2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50ZXh0TGF5ZXIgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLnNob3dGaW5kQnV0dG9uID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHRoaXMuc2hvd0ZpbmRCdXR0b24gPSB0cnVlO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRvZG8gcmVtb3ZlIHRoaXMgaGFjazpcclxuICAgICAgICAgICAgY29uc3Qgdmlld0ZpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld0ZpbmQnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKHZpZXdGaW5kKSB7XHJcbiAgICAgICAgICAgICAgdmlld0ZpbmQuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZmluZGJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5kYmFyJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmIChmaW5kYmFyKSB7XHJcbiAgICAgICAgICAgICAgZmluZGJhci5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHRvZG86IGlzIHRoZSBlbHNlIGJyYW5jaCBkZWFkIGNvZGU/XHJcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICAgIG9wdGlvbnMuc2V0KCd0ZXh0TGF5ZXJNb2RlJywgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGV4dExheWVyID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd0ZpbmRCdXR0b24pIHtcclxuICAgICAgICAgIGlmICh0aGlzLmxvZ0xldmVsID49IFZlcmJvc2l0eUxldmVsLldBUk5JTkdTKSB7XHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdIaWRpbmcgdGhlIFwiZmluZFwiIGJ1dHRvbiBiZWNhdXNlIHRoZSB0ZXh0IGxheWVyIG9mIHRoZSBQREYgZmlsZSBpcyBub3QgcmVuZGVyZWQuIFVzZSBbdGV4dExheWVyXT1cInRydWVcIiB0byBlbmFibGUgdGhlIGZpbmQgYnV0dG9uLicpO1xyXG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2hvd0ZpbmRCdXR0b24gPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNob3dIYW5kVG9vbEJ1dHRvbikge1xyXG4gICAgICAgICAgaWYgKHRoaXMubG9nTGV2ZWwgPj0gVmVyYm9zaXR5TGV2ZWwuV0FSTklOR1MpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcclxuICAgICAgICAgICAgICAnSGlkaW5nIHRoZSBcImhhbmQgdG9vbCAvIHNlbGVjdGlvbiBtb2RlXCIgbWVudSBiZWNhdXNlIHRoZSB0ZXh0IGxheWVyIG9mIHRoZSBQREYgZmlsZSBpcyBub3QgcmVuZGVyZWQuIFVzZSBbdGV4dExheWVyXT1cInRydWVcIiB0byBlbmFibGUgdGhlIHRoZSBtZW51IGl0ZW1zLidcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93SGFuZFRvb2xCdXR0b24gPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgb3ZlcnJpZGVEZWZhdWx0U2V0dGluZ3MoKSB7XHJcbiAgICBjb25zdCBvcHRpb25zID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucyBhcyBJUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmZvcmluXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBwZGZEZWZhdWx0T3B0aW9ucykge1xyXG4gICAgICBvcHRpb25zLnNldChrZXksIHBkZkRlZmF1bHRPcHRpb25zW2tleV0pO1xyXG4gICAgfVxyXG4gICAgb3B0aW9ucy5zZXQoJ2Rpc2FibGVQcmVmZXJlbmNlcycsIHRydWUpO1xyXG4gICAgYXdhaXQgdGhpcy5zZXRab29tKCk7XHJcblxyXG4gICAgb3B0aW9ucy5zZXQoJ2lnbm9yZUtleWJvYXJkJywgdGhpcy5pZ25vcmVLZXlib2FyZCk7XHJcbiAgICBvcHRpb25zLnNldCgnaWdub3JlS2V5cycsIHRoaXMuaWdub3JlS2V5cyk7XHJcbiAgICBvcHRpb25zLnNldCgnYWNjZXB0S2V5cycsIHRoaXMuYWNjZXB0S2V5cyk7XHJcbiAgICBvcHRpb25zLnNldCgnd2hlZWxBY3Rpb24nLCB0aGlzLndoZWVsQWN0aW9uKTtcclxuICAgIHRoaXMuYWN0aXZhdGVUZXh0bGF5ZXJJZk5lY2Vzc2FyeShvcHRpb25zKTtcclxuXHJcbiAgICBpZiAodGhpcy5zY3JvbGxNb2RlIHx8IHRoaXMuc2Nyb2xsTW9kZSA9PT0gU2Nyb2xsTW9kZVR5cGUudmVydGljYWwpIHtcclxuICAgICAgb3B0aW9ucy5zZXQoJ3Njcm9sbE1vZGVPbkxvYWQnLCB0aGlzLnNjcm9sbE1vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNpZGViYXJWaXNpYmxlID0gdGhpcy5zaWRlYmFyVmlzaWJsZTtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcblxyXG4gICAgaWYgKHNpZGViYXJWaXNpYmxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uc2lkZWJhclZpZXdPbkxvYWQgPSBzaWRlYmFyVmlzaWJsZSA/IDEgOiAwO1xyXG4gICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24uYXBwQ29uZmlnKSB7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uYXBwQ29uZmlnLnNpZGViYXJWaWV3T25Mb2FkID0gc2lkZWJhclZpc2libGUgPyB0aGlzLmFjdGl2ZVNpZGViYXJWaWV3IDogMDtcclxuICAgICAgfVxyXG4gICAgICBvcHRpb25zLnNldCgnc2lkZWJhclZpZXdPbkxvYWQnLCB0aGlzLnNpZGViYXJWaXNpYmxlID8gdGhpcy5hY3RpdmVTaWRlYmFyVmlldyA6IDApO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3ByZWFkID09PSAnZXZlbicpIHtcclxuICAgICAgb3B0aW9ucy5zZXQoJ3NwcmVhZE1vZGVPbkxvYWQnLCAyKTtcclxuICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlcikge1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5zcHJlYWRNb2RlID0gMjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm9uU3ByZWFkQ2hhbmdlKCdldmVuJyk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3ByZWFkID09PSAnb2RkJykge1xyXG4gICAgICBvcHRpb25zLnNldCgnc3ByZWFkTW9kZU9uTG9hZCcsIDEpO1xyXG4gICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyKSB7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnNwcmVhZE1vZGUgPSAxO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMub25TcHJlYWRDaGFuZ2UoJ29kZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb3B0aW9ucy5zZXQoJ3NwcmVhZE1vZGVPbkxvYWQnLCAwKTtcclxuICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlcikge1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5zcHJlYWRNb2RlID0gMDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm9uU3ByZWFkQ2hhbmdlKCdvZmYnKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnByaW50UmVzb2x1dGlvbikge1xyXG4gICAgICBvcHRpb25zLnNldCgncHJpbnRSZXNvbHV0aW9uJywgdGhpcy5wcmludFJlc29sdXRpb24pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2hvd0JvcmRlcnMgPT09IGZhbHNlKSB7XHJcbiAgICAgIG9wdGlvbnMuc2V0KCdyZW1vdmVQYWdlQm9yZGVycycsICF0aGlzLnNob3dCb3JkZXJzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgb3BlblBERigpIHtcclxuICAgIFNlcnZpY2VXb3JrZXJPcHRpb25zLnNob3dVbnZlcmlmaWVkU2lnbmF0dXJlcyA9IHRoaXMuc2hvd1VudmVyaWZpZWRTaWduYXR1cmVzO1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmVuYWJsZVByaW50ID0gdGhpcy5lbmFibGVQcmludDtcclxuICAgIE5neEV4dGVuZGVkUGRmVmlld2VyQ29tcG9uZW50Lm5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMuX3NyYykge1xyXG4gICAgICB0aGlzLm5neEV4dGVuZGVkUGRmVmlld2VySW5jb21wbGV0ZWx5SW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICAgICAgaWYgKCF0aGlzLmxpc3RlblRvVVJMKSB7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmTGlua1NlcnZpY2Uuc2V0SGFzaCA9IGZ1bmN0aW9uICgpIHsgfTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmluaXRUaW1lb3V0ID0gbnVsbDtcclxuICAgICAgdGhpcy5zZWxlY3RDdXJzb3JUb29sKCk7XHJcblxyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigndGV4dGxheWVycmVuZGVyZWQnLCAoeDogVGV4dExheWVyUmVuZGVyZWRFdmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLnRleHRMYXllclJlbmRlcmVkLmVtaXQoeCkpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdzY3JvbGxtb2RlY2hhbmdlZCcsICh4OiBTY3JvbGxNb2RlQ2hhbmdlZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuc2Nyb2xsTW9kZUNoYW5nZS5lbWl0KHgubW9kZSkpO1xyXG4gICAgICB9KTtcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3Byb2dyZXNzJywgKHg6IFByb2dyZXNzQmFyRXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5wcm9ncmVzcy5lbWl0KHgpKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigncGFnZXNsb2FkZWQnLCBhc3luYyAoeDogUGFnZXNMb2FkZWRFdmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLnBhZ2VzTG9hZGVkLmVtaXQoeCkpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU2Nyb2xsYmFySW5Jbml0aXRlU2Nyb2xsTW9kZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLnJvdGF0aW9uICE9PSB1bmRlZmluZWQgJiYgdGhpcy5yb3RhdGlvbiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgY29uc3QgciA9IE51bWJlcih0aGlzLnJvdGF0aW9uKTtcclxuICAgICAgICAgIGlmIChyID09PSAwIHx8IHIgPT09IDkwIHx8IHIgPT09IDE4MCB8fCByID09PSAyNzApIHtcclxuICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnBhZ2VzUm90YXRpb24gPSByO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGlmICghdGhpcy5zaHV0dGluZ0Rvd24pIHtcclxuICAgICAgICAgICAgLy8gaHVycmllZCB1c2VycyBzb21ldGltZXMgcmVsb2FkIHRoZSBQREYgYmVmb3JlIGl0IGhhcyBmaW5pc2hlZCBpbml0aWFsaXppbmdcclxuICAgICAgICAgICAgaWYgKHRoaXMubmFtZWRkZXN0KSB7XHJcbiAgICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmTGlua1NlcnZpY2UuZ29Ub0Rlc3RpbmF0aW9uKHRoaXMubmFtZWRkZXN0KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBhZ2UpIHtcclxuICAgICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wYWdlID0gTnVtYmVyKHRoaXMucGFnZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wYWdlTGFiZWwpIHtcclxuICAgICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuY3VycmVudFBhZ2VMYWJlbCA9IHRoaXMucGFnZUxhYmVsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5zZXRab29tKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigncGFnZXJlbmRlcmVkJywgKHg6IFBhZ2VSZW5kZXJlZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMucGFnZVJlbmRlcmVkLmVtaXQoeCk7XHJcbiAgICAgICAgICB0aGlzLnJlbW92ZVNjcm9sbGJhckluSW5pdGl0ZVNjcm9sbE1vZGUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdwYWdlcmVuZGVyJywgKHg6IFBhZ2VSZW5kZXJFdmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnBhZ2VSZW5kZXIuZW1pdCh4KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignZG93bmxvYWQnLCAoeDogUGRmRG93bmxvYWRlZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMucGRmRG93bmxvYWRlZC5lbWl0KHgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3NjYWxlY2hhbmdpbmcnLCAoeDogU2NhbGVDaGFuZ2luZ0V2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRab29tRmFjdG9yLmVtaXQoeC5zY2FsZSk7XHJcbiAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHgucHJlc2V0VmFsdWUgIT09ICdhdXRvJyAmJiB4LnByZXNldFZhbHVlICE9PSAncGFnZS1maXQnICYmIHgucHJlc2V0VmFsdWUgIT09ICdwYWdlLWFjdHVhbCcgJiYgeC5wcmVzZXRWYWx1ZSAhPT0gJ3BhZ2Utd2lkdGgnKSB7XHJcbiAgICAgICAgICAvLyBpZ25vcmUgcm91bmRpbmcgZGlmZmVyZW5jZXNcclxuICAgICAgICAgIGlmIChNYXRoLmFicyh4LnByZXZpb3VzU2NhbGUgLSB4LnNjYWxlKSA+IDAuMDAwMDAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuem9vbSA9IHguc2NhbGUgKiAxMDA7XHJcbiAgICAgICAgICAgIHRoaXMuem9vbUNoYW5nZS5lbWl0KHguc2NhbGUgKiAxMDApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoeC5wcmV2aW91c1ByZXNldFZhbHVlICE9PSB4LnByZXNldFZhbHVlKSB7XHJcbiAgICAgICAgICAvLyBjYWxsZWQgd2hlbiB0aGUgdXNlciBzZWxlY3RzIG9uZSBvZiB0aGUgdGV4dCB2YWx1ZXMgb2YgdGhlIHpvb20gc2VsZWN0IGRyb3Bkb3duXHJcbiAgICAgICAgICB0aGlzLnpvb21DaGFuZ2UuZW1pdCh4LnByZXNldFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3JvdGF0aW9uY2hhbmdpbmcnLCAoeDogUGFnZXNSb3RhdGlvbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMucm90YXRpb25DaGFuZ2UuZW1pdCh4LnBhZ2VzUm90YXRpb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ2ZpbGVpbnB1dGNoYW5nZScsICh4OiBGaWxlSW5wdXRDaGFuZ2VkKSA9PiB7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgIGlmICh4LmZpbGVJbnB1dC5maWxlcyAmJiB4LmZpbGVJbnB1dC5maWxlcy5sZW5ndGggPj0gMSkge1xyXG4gICAgICAgICAgICAvLyBkcmFnIGFuZCBkcm9wXHJcbiAgICAgICAgICAgIHRoaXMuc3JjQ2hhbmdlLmVtaXQoeC5maWxlSW5wdXQuZmlsZXNbMF0ubmFtZSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyByZWd1bGFyIGZpbGUgb3BlbiBkaWFsb2dcclxuICAgICAgICAgICAgY29uc3QgcGF0aCA9IHguZmlsZUlucHV0Py52YWx1ZT8ucmVwbGFjZSgnQzpcXFxcZmFrZXBhdGhcXFxcJywgJycpO1xyXG4gICAgICAgICAgICB0aGlzLnNyY0NoYW5nZS5lbWl0KHBhdGgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ2N1cnNvcnRvb2xjaGFuZ2VkJywgKHg6IEhhbmR0b29sQ2hhbmdlZCkgPT4ge1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmhhbmRUb29sID0geC50b29sID09PSBQZGZDdXJzb3JUb29scy5IQU5EO1xyXG4gICAgICAgICAgdGhpcy5oYW5kVG9vbENoYW5nZS5lbWl0KHgudG9vbCA9PT0gUGRmQ3Vyc29yVG9vbHMuSEFORCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3NpZGViYXJ2aWV3Y2hhbmdlZCcsICh4OiBTaWRlYmFydmlld0NoYW5nZSkgPT4ge1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNpZGViYXJWaXNpYmxlQ2hhbmdlLmVtaXQoeC52aWV3ID4gMCk7XHJcbiAgICAgICAgICBpZiAoeC52aWV3ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVNpZGViYXJWaWV3Q2hhbmdlLmVtaXQoeC52aWV3KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0aGlzLnNpZGViYXJDb21wb25lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5zaWRlYmFyQ29tcG9uZW50LnNob3dUb29sYmFyV2hlbk5lY2Vzc2FyeSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdkb2N1bWVudGxvYWRlZCcsIChwZGZMb2FkZWRFdmVudDogUGRmRG9jdW1lbnRMb2FkZWRFdmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmxvYWRDb21wbGV0ZShwZGZMb2FkZWRFdmVudC5zb3VyY2UucGRmRG9jdW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGhpZGVTaWRlYmFyVG9vbGJhciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHRoaXMuc2lkZWJhckNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnNpZGViYXJDb21wb25lbnQuc2hvd1Rvb2xiYXJXaGVuTmVjZXNzYXJ5KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignb3V0bGluZWxvYWRlZCcsIGhpZGVTaWRlYmFyVG9vbGJhcik7XHJcblxyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignYXR0YWNobWVudHNsb2FkZWQnLCBoaWRlU2lkZWJhclRvb2xiYXIpO1xyXG5cclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ2xheWVyc2xvYWRlZCcsIGhpZGVTaWRlYmFyVG9vbGJhcik7XHJcblxyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignYW5ub3RhdGlvbmxheWVycmVuZGVyZWQnLCAoZXZlbnQpID0+IHRoaXMuYW5ub3RhdGlvbkxheWVyUmVuZGVyZWQuZW1pdChldmVudCkpO1xyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignYW5ub3RhdGlvbmVkaXRvcmxheWVycmVuZGVyZWQnLCAoZXZlbnQpID0+IHRoaXMuYW5ub3RhdGlvbkVkaXRvckxheWVyUmVuZGVyZWQuZW1pdChldmVudCkpO1xyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigneGZhbGF5ZXJyZW5kZXJlZCcsIChldmVudCkgPT4gdGhpcy54ZmFMYXllclJlbmRlcmVkLmVtaXQoZXZlbnQpKTtcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ291dGxpbmVsb2FkZWQnLCAoZXZlbnQpID0+IHRoaXMub3V0bGluZUxvYWRlZC5lbWl0KGV2ZW50KSk7XHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdhdHRhY2htZW50c2xvYWRlZCcsIChldmVudCkgPT4gdGhpcy5hdHRhY2htZW50c2xvYWRlZC5lbWl0KGV2ZW50KSk7XHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdsYXllcnNsb2FkZWQnLCAoZXZlbnQpID0+IHRoaXMubGF5ZXJzbG9hZGVkLmVtaXQoZXZlbnQpKTtcclxuXHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCd1cGRhdGVmaW5kY29udHJvbHN0YXRlJywgKHg6IEZpbmRSZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAoeC5zdGF0ZSA9PT0gRmluZFN0YXRlLk5PVF9GT1VORCkge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVGaW5kTWF0Y2hlc0NvdW50LmVtaXQoeyBjdXJyZW50OiAwLCB0b3RhbDogMCB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHgubWF0Y2hlc0NvdW50LnRvdGFsKSB7XHJcbiAgICAgICAgICB4Lm1hdGNoZXNDb3VudC5tYXRjaGVzID0gUERGVmlld2VyQXBwbGljYXRpb24uZmluZENvbnRyb2xsZXIuX3BhZ2VNYXRjaGVzO1xyXG4gICAgICAgICAgeC5tYXRjaGVzQ291bnQubWF0Y2hlc0xlbmd0aCA9IFBERlZpZXdlckFwcGxpY2F0aW9uLmZpbmRDb250cm9sbGVyLl9wYWdlTWF0Y2hlc0xlbmd0aDtcclxuICAgICAgICAgIHgubWF0Y2hlc0NvdW50Lm1hdGNoZXNDb2xvciA9IFBERlZpZXdlckFwcGxpY2F0aW9uLmZpbmRDb250cm9sbGVyLl9wYWdlTWF0Y2hlc0NvbG9yO1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVGaW5kTWF0Y2hlc0NvdW50LmVtaXQoeC5tYXRjaGVzQ291bnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudXBkYXRlRmluZFN0YXRlKSB7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZUZpbmRTdGF0ZS5lbWl0KHguc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCd1cGRhdGVmaW5kbWF0Y2hlc2NvdW50JywgKHg6IEZpbmRSZXN1bHQpID0+IHtcclxuICAgICAgICB4Lm1hdGNoZXNDb3VudC5tYXRjaGVzID0gUERGVmlld2VyQXBwbGljYXRpb24uZmluZENvbnRyb2xsZXIuX3BhZ2VNYXRjaGVzO1xyXG4gICAgICAgIHgubWF0Y2hlc0NvdW50Lm1hdGNoZXNMZW5ndGggPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQ29udHJvbGxlci5fcGFnZU1hdGNoZXNMZW5ndGg7XHJcbiAgICAgICAgeC5tYXRjaGVzQ291bnQubWF0Y2hlc0NvbG9yID0gUERGVmlld2VyQXBwbGljYXRpb24uZmluZENvbnRyb2xsZXIuX3BhZ2VNYXRjaGVzQ29sb3I7XHJcbiAgICAgICAgdGhpcy51cGRhdGVGaW5kTWF0Y2hlc0NvdW50LmVtaXQoeC5tYXRjaGVzQ291bnQpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdwYWdlY2hhbmdpbmcnLCAoeDogUGFnZU51bWJlckNoYW5nZSkgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5zaHV0dGluZ0Rvd24pIHtcclxuICAgICAgICAgIC8vIGh1cnJpZWQgdXNlcnMgc29tZXRpbWVzIHJlbG9hZCB0aGUgUERGIGJlZm9yZSBpdCBoYXMgZmluaXNoZWQgaW5pdGlhbGl6aW5nXHJcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UGFnZSA9IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5jdXJyZW50UGFnZU51bWJlcjtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFBhZ2VMYWJlbCA9IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5jdXJyZW50UGFnZUxhYmVsO1xyXG5cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlICE9PSB0aGlzLnBhZ2UpIHtcclxuICAgICAgICAgICAgICB0aGlzLnBhZ2VDaGFuZ2UuZW1pdChjdXJyZW50UGFnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlTGFiZWwgIT09IHRoaXMucGFnZUxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTGFiZWxDaGFuZ2UuZW1pdChjdXJyZW50UGFnZUxhYmVsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4gdGhpcy5jaGVja0hlaWdodCgpLCAxMDApO1xyXG4gICAgICAvLyBvcGVuIGEgZmlsZSBpbiB0aGUgdmlld2VyXHJcbiAgICAgIGlmICghIXRoaXMuX3NyYykge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcclxuICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxyXG4gICAgICAgICAgdmVyYm9zaXR5OiB0aGlzLmxvZ0xldmVsLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHRoaXMuX3NyY1sncmFuZ2UnXSkge1xyXG4gICAgICAgICAgb3B0aW9ucy5yYW5nZSA9IHRoaXMuX3NyY1sncmFuZ2UnXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaHR0cEhlYWRlcnMpIHtcclxuICAgICAgICAgIG9wdGlvbnMuaHR0cEhlYWRlcnMgPSB0aGlzLmh0dHBIZWFkZXJzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5hdXRob3JpemF0aW9uKSB7XHJcbiAgICAgICAgICBvcHRpb25zLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgY29uc3QgaXNBdXRoQm9vbGVhbiA9IHR5cGVvZiB0aGlzLmF1dGhvcml6YXRpb24gPT0gXCJib29sZWFuXCJcclxuXHJcbiAgICAgICAgICBpZiAoIWlzQXV0aEJvb2xlYW4pIHtcclxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmh0dHBIZWFkZXJzKSBvcHRpb25zLmh0dHBIZWFkZXJzID0ge307XHJcblxyXG4gICAgICAgICAgICBvcHRpb25zLmh0dHBIZWFkZXJzLkF1dGhvcml6YXRpb24gPSB0aGlzLmF1dGhvcml6YXRpb247XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9wdGlvbnMuYmFzZUhyZWYgPSB0aGlzLmJhc2VIcmVmO1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLm9uRXJyb3IgPSAoZXJyb3I6IEVycm9yKSA9PiB0aGlzLnBkZkxvYWRpbmdGYWlsZWQuZW1pdChlcnJvcik7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zcmMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMudXJsID0gdGhpcy5fc3JjO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zcmMgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xyXG4gICAgICAgICAgICBvcHRpb25zLmRhdGEgPSB0aGlzLl9zcmM7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3NyYyBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5kYXRhID0gdGhpcy5fc3JjO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgb3B0aW9ucy5yYW5nZUNodW5rU2l6ZSA9IHBkZkRlZmF1bHRPcHRpb25zLnJhbmdlQ2h1bmtTaXplO1xyXG4gICAgICAgICAgYXdhaXQgUERGVmlld2VyQXBwbGljYXRpb24ub3BlbihvcHRpb25zKTtcclxuICAgICAgICAgIHRoaXMucGRmTG9hZGluZ1N0YXJ0cy5lbWl0KHt9KTtcclxuICAgICAgICAgIC8vIGF3YWl0IHRoaXMuc2V0Wm9vbSgpO1xyXG4gICAgICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB0aGlzLnNldFpvb20oKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNodXR0aW5nRG93bikge1xyXG4gICAgICAgICAgLy8gaHVycmllZCB1c2VycyBzb21ldGltZXMgcmVsb2FkIHRoZSBQREYgYmVmb3JlIGl0IGhhcyBmaW5pc2hlZCBpbml0aWFsaXppbmdcclxuICAgICAgICAgIGlmICh0aGlzLnBhZ2UpIHtcclxuICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGFnZSA9IE51bWJlcih0aGlzLnBhZ2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSwgMTAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlU2Nyb2xsYmFySW5Jbml0aXRlU2Nyb2xsTW9kZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnBhZ2VWaWV3TW9kZSA9PT0gJ2luZmluaXRlLXNjcm9sbCcpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFnZVZpZXdNb2RlID09PSAnaW5maW5pdGUtc2Nyb2xsJykge1xyXG4gICAgICAgICAgY29uc3Qgdmlld2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdlcicpO1xyXG4gICAgICAgICAgaWYgKHZpZXdlcikge1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSB2aWV3ZXIuY2xpZW50SGVpZ2h0ICsgMTc7XHJcbiAgICAgICAgICAgIGNvbnN0IHpvb20gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd6b29tJylbMF07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByaW1hcnlNZW51VmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0ICsgMzUgKyAncHgnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlmIChoZWlnaHQgPiAxNykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoem9vbSkge1xyXG4gICAgICAgICAgICAgICg8SFRNTEVsZW1lbnQ+em9vbSkuc3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIG9wZW5QREYyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgdGhpcy5vdmVycmlkZURlZmF1bHRTZXR0aW5ncygpO1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuXHJcbiAgICAvLyAjODAyIGNsZWFyIHRoZSBmb3JtIGRhdGE7IG90aGVyd2lzZSB0aGUgXCJkb3dubG9hZFwiIGRpYWxvZ3Mgb3BlbnNcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50Py5hbm5vdGF0aW9uU3RvcmFnZT8ucmVzZXRNb2RpZmllZCgpO1xyXG5cclxuICAgIGF3YWl0IFBERlZpZXdlckFwcGxpY2F0aW9uLmNsb3NlKCk7XHJcbiAgICB0aGlzLmZvcm1EYXRhID0ge307XHJcbiAgICB0aGlzLmZvcm1JZFRvRmllbGROYW1lID0ge307XHJcbiAgICB0aGlzLmZvcm1SYWRpb0J1dHRvblZhbHVlVG9JZCA9IHt9O1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcclxuICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXHJcbiAgICAgIHZlcmJvc2l0eTogdGhpcy5sb2dMZXZlbCxcclxuICAgIH07XHJcbiAgICBpZiAodGhpcy5fc3JjICYmIHRoaXMuX3NyY1sncmFuZ2UnXSkge1xyXG4gICAgICBvcHRpb25zLnJhbmdlID0gdGhpcy5fc3JjWydyYW5nZSddO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaHR0cEhlYWRlcnMpIHtcclxuICAgICAgb3B0aW9ucy5odHRwSGVhZGVycyA9IHRoaXMuaHR0cEhlYWRlcnM7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5hdXRob3JpemF0aW9uKSB7XHJcbiAgICAgIG9wdGlvbnMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuXHJcbiAgICAgIGNvbnN0IGlzQXV0aEJvb2xlYW4gPSB0eXBlb2YgdGhpcy5hdXRob3JpemF0aW9uID09IFwiYm9vbGVhblwiXHJcblxyXG4gICAgICBpZiAoIWlzQXV0aEJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoIW9wdGlvbnMuaHR0cEhlYWRlcnMpIG9wdGlvbnMuaHR0cEhlYWRlcnMgPSB7fTtcclxuXHJcbiAgICAgICAgb3B0aW9ucy5odHRwSGVhZGVycy5BdXRob3JpemF0aW9uID0gdGhpcy5hdXRob3JpemF0aW9uO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBvcHRpb25zLmJhc2VIcmVmID0gdGhpcy5iYXNlSHJlZjtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3JjID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIG9wdGlvbnMudXJsID0gdGhpcy5fc3JjO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3NyYyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XHJcbiAgICAgICAgb3B0aW9ucy5kYXRhID0gdGhpcy5fc3JjO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3NyYyBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcclxuICAgICAgICBvcHRpb25zLmRhdGEgPSB0aGlzLl9zcmM7XHJcbiAgICAgIH1cclxuICAgICAgb3B0aW9ucy5yYW5nZUNodW5rU2l6ZSA9IHBkZkRlZmF1bHRPcHRpb25zLnJhbmdlQ2h1bmtTaXplO1xyXG4gICAgICBhd2FpdCBQREZWaWV3ZXJBcHBsaWNhdGlvbi5vcGVuKG9wdGlvbnMpO1xyXG4gICAgICB0aGlzLnBkZkxvYWRlZC5lbWl0KHsgcGFnZXNDb3VudDogUERGVmlld2VyQXBwbGljYXRpb24ucGFnZXNDb3VudCB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRoaXMucGRmTG9hZGluZ0ZhaWxlZC5lbWl0KGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2VsZWN0Q3Vyc29yVG9vbCgpIHtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5kaXNwYXRjaCgnc3dpdGNoY3Vyc29ydG9vbCcsIHsgdG9vbDogdGhpcy5oYW5kVG9vbCA/IDEgOiAwIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIG5nT25EZXN0cm95KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHJldHVybjsgLy8gZmFzdCBlc2NhcGUgZm9yIHNlcnZlciBzaWRlIHJlbmRlcmluZ1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9yaWdpbmFsUHJpbnQgPSBOZ3hFeHRlbmRlZFBkZlZpZXdlckNvbXBvbmVudC5vcmlnaW5hbFByaW50O1xyXG4gICAgaWYgKHdpbmRvdyAmJiBvcmlnaW5hbFByaW50ICYmICFvcmlnaW5hbFByaW50LnRvU3RyaW5nKCkuaW5jbHVkZXMoJ3ByaW50UGRmJykpIHtcclxuICAgICAgd2luZG93LnByaW50ID0gb3JpZ2luYWxQcmludDtcclxuICAgIH1cclxuICAgIGNvbnN0IHByaW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW50Q29udGFpbmVyJyk7XHJcbiAgICBpZiAocHJpbnRDb250YWluZXIpIHtcclxuICAgICAgcHJpbnRDb250YWluZXIucGFyZW50RWxlbWVudD8ucmVtb3ZlQ2hpbGQocHJpbnRDb250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICAgICh3aW5kb3cgYXMgYW55KS5nZXRGb3JtVmFsdWUgPSB1bmRlZmluZWQ7XHJcbiAgICAod2luZG93IGFzIGFueSkuc2V0Rm9ybVZhbHVlID0gdW5kZWZpbmVkO1xyXG4gICAgKHdpbmRvdyBhcyBhbnkpLnJlZ2lzdGVyQWNyb2Zvcm1Bbm5vdGF0aW9ucyA9IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICB0aGlzLnNodXR0aW5nRG93biA9IHRydWU7XHJcblxyXG4gICAgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQubmd4RXh0ZW5kZWRQZGZWaWV3ZXJJbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMuaW5pdFRpbWVvdXQpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaW5pdFRpbWVvdXQpO1xyXG4gICAgICB0aGlzLmluaXRUaW1lb3V0ID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uKSB7XHJcbiAgICAgIGlmICh0aGlzLnBpbmNoT25Nb2JpbGVTdXBwb3J0KSB7XHJcbiAgICAgICAgdGhpcy5waW5jaE9uTW9iaWxlU3VwcG9ydC5kZXN0cm95UGluY2hab29tKCk7XHJcbiAgICAgICAgdGhpcy5waW5jaE9uTW9iaWxlU3VwcG9ydCA9IHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5yZWxhdGl2ZUNvb3Jkc1N1cHBvcnQpIHtcclxuICAgICAgICB0aGlzLnJlbGF0aXZlQ29vcmRzU3VwcG9ydC5kZXN0cm95UmVsYXRpdmVDb29yZHMoKTtcclxuICAgICAgICB0aGlzLnJlbGF0aXZlQ29vcmRzU3VwcG9ydCA9IHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gIzgwMiBjbGVhciB0aGUgZm9ybSBkYXRhOyBvdGhlcndpc2UgdGhlIFwiZG93bmxvYWRcIiBkaWFsb2dzIG9wZW5zXHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50Py5hbm5vdGF0aW9uU3RvcmFnZT8ucmVzZXRNb2RpZmllZCgpO1xyXG4gICAgICB0aGlzLmZvcm1EYXRhID0ge307XHJcbiAgICAgIHRoaXMuZm9ybUlkVG9GaWVsZE5hbWUgPSB7fTtcclxuICAgICAgdGhpcy5mb3JtUmFkaW9CdXR0b25WYWx1ZVRvSWQgPSB7fTtcclxuXHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLl9jbGVhbnVwKCk7XHJcblxyXG4gICAgICBhd2FpdCBQREZWaWV3ZXJBcHBsaWNhdGlvbi5jbG9zZSgpO1xyXG4gICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24ucHJpbnRLZXlEb3duTGlzdGVuZXIpIHtcclxuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgUERGVmlld2VyQXBwbGljYXRpb24ucHJpbnRLZXlEb3duTGlzdGVuZXIsIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5fYm91bmRFdmVudHMpIHtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnVuYmluZFdpbmRvd0V2ZW50cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBidXMgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cztcclxuICAgICAgICBpZiAoYnVzKSB7XHJcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi51bmJpbmRFdmVudHMoKTtcclxuICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGJ1cy5fbGlzdGVuZXJzKSB7XHJcbiAgICAgICAgICAgIGlmIChidXMuX2xpc3RlbmVyc1trZXldKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgbGlzdCA9IGJ1cy5fbGlzdGVuZXJzW2tleV07XHJcbiAgICAgICAgICAgICAgLy8gbm90IHN1cmUgaWYgdGhlIGZvciBsb29wIGlzIG5lY2Vzc2FyeSAtIGJ1dFxyXG4gICAgICAgICAgICAgIC8vIGl0IG1pZ2h0IGltcHJvdmUgZ2FyYmFnZSBjb2xsZWN0aW9uIGlmIHRoZSBcImxpc3RlbmVyc1wiXHJcbiAgICAgICAgICAgICAgLy8gYXJyYXkgaXMgc3RvcmVkIHNvbWV3aGVyZSBlbHNlXHJcbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0W2ldID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBidXMuX2xpc3RlbmVyc1trZXldID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cyBhcyBhbnkpID0gbnVsbDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzUHJpbWFyeU1lbnVWaXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuc2hvd1Rvb2xiYXIpIHtcclxuICAgICAgY29uc3QgdmlzaWJsZSA9XHJcbiAgICAgICAgdGhpcy5zaG93RG93bmxvYWRCdXR0b24gfHxcclxuICAgICAgICB0aGlzLnNob3dGaW5kQnV0dG9uIHx8XHJcbiAgICAgICAgdGhpcy5zaG93T3BlbkZpbGVCdXR0b24gfHxcclxuICAgICAgICB0aGlzLnNob3dQYWdpbmdCdXR0b25zIHx8XHJcbiAgICAgICAgdGhpcy5zaG93UHJlc2VudGF0aW9uTW9kZUJ1dHRvbiB8fFxyXG4gICAgICAgIHRoaXMuc2hvd1ByaW50QnV0dG9uIHx8XHJcbiAgICAgICAgdGhpcy5zaG93UHJvcGVydGllc0J1dHRvbiB8fFxyXG4gICAgICAgIHRoaXMuc2hvd1JvdGF0ZUJ1dHRvbiB8fFxyXG4gICAgICAgIHRoaXMuc2hvd0hhbmRUb29sQnV0dG9uIHx8XHJcbiAgICAgICAgdGhpcy5zaG93U2Nyb2xsaW5nQnV0dG9uIHx8XHJcbiAgICAgICAgdGhpcy5zaG93U3ByZWFkQnV0dG9uIHx8XHJcbiAgICAgICAgdGhpcy5zaG93U2lkZWJhckJ1dHRvbiB8fFxyXG4gICAgICAgIHRoaXMuc2hvd1pvb21CdXR0b25zO1xyXG5cclxuICAgICAgaWYgKHZpc2libGUpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXR1cm47IC8vIHNlcnZlciBzaWRlIHJlbmRlcmluZ1xyXG4gICAgfVxyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9uczogSVBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucyA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XHJcblxyXG4gICAgaWYgKE5neEV4dGVuZGVkUGRmVmlld2VyQ29tcG9uZW50Lm5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQpIHtcclxuICAgICAgaWYgKCdzcmMnIGluIGNoYW5nZXMgfHwgJ2Jhc2U2NFNyYycgaW4gY2hhbmdlcykge1xyXG4gICAgICAgIGlmICh0aGlzLnNyY0NoYW5nZVRyaWdnZXJlZEJ5VXNlcikge1xyXG4gICAgICAgICAgdGhpcy5zcmNDaGFuZ2VUcmlnZ2VyZWRCeVVzZXIgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKCEhdGhpcy5fc3JjKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5neEV4dGVuZGVkUGRmVmlld2VySW5jb21wbGV0ZWx5SW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgICB0aGlzLm9wZW5QREYoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBhd2FpdCB0aGlzLm9wZW5QREYyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vICM4MDIgY2xlYXIgdGhlIGZvcm0gZGF0YTsgb3RoZXJ3aXNlIHRoZSBcImRvd25sb2FkXCIgZGlhbG9ncyBvcGVuc1xyXG4gICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudD8uYW5ub3RhdGlvblN0b3JhZ2U/LnJlc2V0TW9kaWZpZWQoKTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtRGF0YSA9IHt9O1xyXG4gICAgICAgICAgICB0aGlzLmZvcm1JZFRvRmllbGROYW1lID0ge307XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybVJhZGlvQnV0dG9uVmFsdWVUb0lkID0ge307XHJcblxyXG4gICAgICAgICAgICBsZXQgaW5wdXRGaWVsZCA9IFBERlZpZXdlckFwcGxpY2F0aW9uLmFwcENvbmZpZz8ub3BlbkZpbGVJbnB1dDtcclxuICAgICAgICAgICAgaWYgKCFpbnB1dEZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgaW5wdXRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWxlSW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpbnB1dEZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgaW5wdXRGaWVsZC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhd2FpdCBQREZWaWV3ZXJBcHBsaWNhdGlvbi5jbG9zZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoJ2VuYWJsZURyYWdBbmREcm9wJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLnNldCgnZW5hYmxlRHJhZ0FuZERyb3AnLCB0aGlzLmVuYWJsZURyYWdBbmREcm9wKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCd6b29tJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgICAgKGFzeW5jICgpID0+IHRoaXMuc2V0Wm9vbSgpKSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoJ21heFpvb20nIGluIGNoYW5nZXMpIHtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCdtYXhab29tJywgdGhpcy5tYXhab29tKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCdtaW5ab29tJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLnNldCgnbWluWm9vbScsIHRoaXMubWluWm9vbSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICgnaGFuZFRvb2wnIGluIGNoYW5nZXMpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdEN1cnNvclRvb2woKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoJ3BhZ2UnIGluIGNoYW5nZXMpIHtcclxuICAgICAgICBpZiAodGhpcy5wYWdlKSB7XHJcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHRyaXBsZS1lcXVhbHNcclxuICAgICAgICAgIGlmICh0aGlzLnBhZ2UgIT0gUERGVmlld2VyQXBwbGljYXRpb24ucGFnZSkge1xyXG4gICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wYWdlID0gdGhpcy5wYWdlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoJ3BhZ2VMYWJlbCcgaW4gY2hhbmdlcykge1xyXG4gICAgICAgIGlmICh0aGlzLnBhZ2VMYWJlbCkge1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFnZUxhYmVsICE9PSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuY3VycmVudFBhZ2VMYWJlbCkge1xyXG4gICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuY3VycmVudFBhZ2VMYWJlbCA9IHRoaXMucGFnZUxhYmVsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCdyb3RhdGlvbicgaW4gY2hhbmdlcykge1xyXG4gICAgICAgIGlmICh0aGlzLnJvdGF0aW9uKSB7XHJcbiAgICAgICAgICBjb25zdCByID0gTnVtYmVyKHRoaXMucm90YXRpb24pO1xyXG4gICAgICAgICAgaWYgKHIgPT09IDAgfHwgciA9PT0gOTAgfHwgciA9PT0gMTgwIHx8IHIgPT09IDI3MCkge1xyXG4gICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIucGFnZXNSb3RhdGlvbiA9IHI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5wYWdlc1JvdGF0aW9uID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCdzY3JvbGxNb2RlJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsTW9kZSB8fCB0aGlzLnNjcm9sbE1vZGUgPT09IFNjcm9sbE1vZGVUeXBlLnZlcnRpY2FsKSB7XHJcbiAgICAgICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnNjcm9sbE1vZGUgIT09IE51bWJlcih0aGlzLnNjcm9sbE1vZGUpKSB7XHJcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLmRpc3BhdGNoKCdzd2l0Y2hzY3JvbGxtb2RlJywgeyBtb2RlOiBOdW1iZXIodGhpcy5zY3JvbGxNb2RlKSB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCdzaWRlYmFyVmlzaWJsZScgaW4gY2hhbmdlcyB8fCAnYWN0aXZlU2lkZWJhclZpZXcnIGluIGNoYW5nZXMpIHtcclxuICAgICAgICBpZiAodGhpcy5zaWRlYmFyVmlzaWJsZSkge1xyXG4gICAgICAgICAgY29uc3QgdmlldyA9IE51bWJlcih0aGlzLmFjdGl2ZVNpZGViYXJWaWV3KTtcclxuICAgICAgICAgIGlmICh2aWV3ID09PSAxIHx8IHZpZXcgPT09IDIgfHwgdmlldyA9PT0gMyB8fCB2aWV3ID09PSA0KSB7XHJcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlNpZGViYXIuc3dpdGNoVmlldyh2aWV3LCB0cnVlKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1thY3RpdmVTaWRlYmFyVmlld10gbXVzdCBiZSBhbiBpbnRlZ2VyIHZhbHVlIGJldHdlZW4gMSBhbmQgNCcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZTaWRlYmFyLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICgnZmlsZW5hbWVGb3JEb3dubG9hZCcgaW4gY2hhbmdlcykge1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmFwcENvbmZpZy5maWxlbmFtZUZvckRvd25sb2FkID0gdGhpcy5maWxlbmFtZUZvckRvd25sb2FkO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICgnbmFtZWRkZXN0JyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubmFtZWRkZXN0KSB7XHJcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZMaW5rU2VydmljZS5nb1RvRGVzdGluYXRpb24odGhpcy5uYW1lZGRlc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCdzcHJlYWQnIGluIGNoYW5nZXMpIHtcclxuICAgICAgICBpZiAodGhpcy5zcHJlYWQgPT09ICdldmVuJykge1xyXG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uc3ByZWFkTW9kZU9uTG9hZCA9IDI7XHJcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuc3ByZWFkTW9kZSA9IDI7XHJcbiAgICAgICAgICB0aGlzLm9uU3ByZWFkQ2hhbmdlKCdldmVuJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNwcmVhZCA9PT0gJ29kZCcpIHtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnNwcmVhZE1vZGVPbkxvYWQgPSAxO1xyXG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnNwcmVhZE1vZGUgPSAxO1xyXG4gICAgICAgICAgdGhpcy5vblNwcmVhZENoYW5nZSgnb2RkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnNwcmVhZE1vZGVPbkxvYWQgPSAwO1xyXG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnNwcmVhZE1vZGUgPSAwO1xyXG4gICAgICAgICAgdGhpcy5vblNwcmVhZENoYW5nZSgnb2ZmJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoJ3doZWVsQWN0aW9uJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLnNldCgnd2hlZWxBY3Rpb24nLCB0aGlzLndoZWVsQWN0aW9uKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5oaWRlVG9vbGJhcklmSXRJc0VtcHR5KCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jYWxjVmlld2VyUG9zaXRpb25Ub3AoKSk7XHJcbiAgICB9IC8vIGVuZCBvZiBpZiAoTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQubmd4RXh0ZW5kZWRQZGZWaWV3ZXJJbml0aWFsaXplZClcclxuXHJcbiAgICBpZiAoJ3ByaW50UmVzb2x1dGlvbicgaW4gY2hhbmdlcykge1xyXG4gICAgICBjb25zdCBvcHRpb25zID0gUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xyXG4gICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgIG9wdGlvbnMuc2V0KCdwcmludFJlc29sdXRpb24nLCB0aGlzLnByaW50UmVzb2x1dGlvbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICgnaWdub3JlS2V5Ym9hcmQnIGluIGNoYW5nZXMpIHtcclxuICAgICAgY29uc3Qgb3B0aW9ucyA9IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucztcclxuICAgICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLm92ZXJyaWRlRGVmYXVsdFNldHRpbmdzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICgnaWdub3JlS2V5cycgaW4gY2hhbmdlcykge1xyXG4gICAgICBjb25zdCBvcHRpb25zID0gUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xyXG4gICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMub3ZlcnJpZGVEZWZhdWx0U2V0dGluZ3MoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCdhY2NlcHRLZXlzJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XHJcbiAgICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5vdmVycmlkZURlZmF1bHRTZXR0aW5ncygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoJ3Nob3dCb3JkZXJzJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgIGlmICghY2hhbmdlc1snc2hvd0JvcmRlcnMnXS5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0gUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xyXG4gICAgICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgICAgICB0aGlzLm92ZXJyaWRlRGVmYXVsdFNldHRpbmdzKCk7XHJcbiAgICAgICAgICBjb25zdCB2aWV3ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld2VyJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICBpZiAodGhpcy5zaG93Qm9yZGVycykge1xyXG4gICAgICAgICAgICB2aWV3ZXIuY2xhc3NMaXN0LnJlbW92ZSgncmVtb3ZlUGFnZUJvcmRlcnMnKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZpZXdlci5jbGFzc0xpc3QuYWRkKCdyZW1vdmVQYWdlQm9yZGVycycpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIpIHtcclxuICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnJlbW92ZVBhZ2VCb3JkZXJzID0gIXRoaXMuc2hvd0JvcmRlcnM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zdCB6b29tRXZlbnQgPSB7XHJcbiAgICAgICAgICAgIHNvdXJjZTogdmlld2VyLFxyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxyXG4gICAgICAgICAgICBzY2FsZTogKE51bWJlcih0aGlzLnpvb20pIHwgMTAwKSAvIDEwMCxcclxuICAgICAgICAgICAgcHJlc2V0VmFsdWU6IHRoaXMuem9vbSxcclxuICAgICAgICAgIH0gYXMgU2NhbGVDaGFuZ2luZ0V2ZW50O1xyXG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMuZGlzcGF0Y2goJ3NjYWxlY2hhbmdpbmcnLCB6b29tRXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICgnc2hvd1VudmVyaWZpZWRTaWduYXR1cmVzJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbiAmJiBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudCkge1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50Ll90cmFuc3BvcnQubWVzc2FnZUhhbmRsZXIuc2VuZCgnc2hvd1VudmVyaWZpZWRTaWduYXR1cmVzJywgdGhpcy5zaG93VW52ZXJpZmllZFNpZ25hdHVyZXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCdmb3JtRGF0YScgaW4gY2hhbmdlcykge1xyXG4gICAgICBpZiAoIWNoYW5nZXNbJ2Zvcm1EYXRhJ10uaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVGb3JtRmllbGRzKHRoaXMuZm9ybURhdGEsIGNoYW5nZXNbJ2Zvcm1EYXRhJ10ucHJldmlvdXNWYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoJ2VuYWJsZVByaW50JyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgIGlmICghY2hhbmdlc1snZW5hYmxlUHJpbnQnXS5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5lbmFibGVQcmludCA9IHRoaXMuZW5hYmxlUHJpbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChcclxuICAgICAgKCdjdXN0b21GaW5kYmFyJyBpbiBjaGFuZ2VzICYmICFjaGFuZ2VzWydjdXN0b21GaW5kYmFyJ10uaXNGaXJzdENoYW5nZSgpKSB8fFxyXG4gICAgICAoJ2N1c3RvbUZpbmRiYXJCdXR0b25zJyBpbiBjaGFuZ2VzICYmICFjaGFuZ2VzWydjdXN0b21GaW5kYmFyQnV0dG9ucyddLmlzRmlyc3RDaGFuZ2UoKSkgfHxcclxuICAgICAgKCdjdXN0b21GaW5kYmFySW5wdXRBcmVhJyBpbiBjaGFuZ2VzICYmICFjaGFuZ2VzWydjdXN0b21GaW5kYmFySW5wdXRBcmVhJ10uaXNGaXJzdENoYW5nZSgpKSB8fFxyXG4gICAgICAoJ2N1c3RvbVRvb2xiYXInIGluIGNoYW5nZXMgJiYgIWNoYW5nZXNbJ2N1c3RvbVRvb2xiYXInXS5pc0ZpcnN0Q2hhbmdlKCkpXHJcbiAgICApIHtcclxuICAgICAgaWYgKHRoaXMuZHVtbXlDb21wb25lbnRzKSB7XHJcbiAgICAgICAgdGhpcy5kdW1teUNvbXBvbmVudHMuYWRkTWlzc2luZ1N0YW5kYXJkV2lkZ2V0cygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCdwZGZCYWNrZ3JvdW5kQ29sb3InIGluIGNoYW5nZXMgJiYgIWNoYW5nZXNbJ3BkZkJhY2tncm91bmRDb2xvciAnXS5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLnNldCgncGRmQmFja2dyb3VuZENvbG9yJywgdGhpcy5wZGZCYWNrZ3JvdW5kKTtcclxuICAgIH1cclxuICAgIGlmICgncGRmQmFja2dyb3VuZENvbG9yVG9SZXBsYWNlJyBpbiBjaGFuZ2VzICYmICFjaGFuZ2VzWydwZGZCYWNrZ3JvdW5kQ29sb3JUb1JlcGxhY2UnXS5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLnNldCgncGRmQmFja2dyb3VuZENvbG9yVG9SZXBsYWNlJywgdGhpcy5wZGZCYWNrZ3JvdW5kQ29sb3JUb1JlcGxhY2UpO1xyXG4gICAgfVxyXG4gICAgaWYgKCdwYWdlVmlld01vZGUnIGluIGNoYW5nZXMgJiYgIWNoYW5nZXNbJ3BhZ2VWaWV3TW9kZSddLmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICB0aGlzLnJlbW92ZVNjcm9sbGJhckluSW5pdGl0ZVNjcm9sbE1vZGUoKTtcclxuICAgIH1cclxuICAgIGlmICgncmVwbGFjZUJyb3dzZXJQcmludCcgaW4gY2hhbmdlcykge1xyXG4gICAgICBpZiAodGhpcy5yZXBsYWNlQnJvd3NlclByaW50KSB7XHJcbiAgICAgICAgaWYgKCh3aW5kb3cgYXMgYW55KS5wcmludFBERikge1xyXG4gICAgICAgICAgd2luZG93LnByaW50ID0gKHdpbmRvdyBhcyBhbnkpLnByaW50UERGO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBvcmlnaW5hbFByaW50ID0gTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQub3JpZ2luYWxQcmludDtcclxuICAgICAgICBpZiAob3JpZ2luYWxQcmludCAmJiAhb3JpZ2luYWxQcmludC50b1N0cmluZygpLmluY2x1ZGVzKCdwcmludFBkZicpKSB7XHJcbiAgICAgICAgICB3aW5kb3cucHJpbnQgPSBvcmlnaW5hbFByaW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNhbGNWaWV3ZXJQb3NpdGlvblRvcCgpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgc2V0Wm9vbSgpIHtcclxuICAgIC8vIHNvbWV0aW1lcyBuZ09uQ2hhbmdlcyBjYWxscyB0aGlzIG1ldGhvZCBiZWZvcmUgdGhlIHBhZ2UgaXMgaW5pdGlhbGl6ZWQsXHJcbiAgICAvLyBzbyBsZXQncyBjaGVjayBpZiB0aGlzLnJvb3QgaXMgYWxyZWFkeSBkZWZpbmVkXHJcbiAgICBpZiAodGhpcy5yb290KSB7XHJcbiAgICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcblxyXG4gICAgICBsZXQgem9vbUFzTnVtYmVyID0gdGhpcy56b29tO1xyXG4gICAgICBpZiAoU3RyaW5nKHpvb21Bc051bWJlcikuZW5kc1dpdGgoJyUnKSkge1xyXG4gICAgICAgIHpvb21Bc051bWJlciA9IE51bWJlcihTdHJpbmcoem9vbUFzTnVtYmVyKS5yZXBsYWNlKCclJywgJycpKSAvIDEwMDtcclxuICAgICAgfSBlbHNlIGlmICghaXNOYU4oTnVtYmVyKHpvb21Bc051bWJlcikpKSB7XHJcbiAgICAgICAgem9vbUFzTnVtYmVyID0gTnVtYmVyKHpvb21Bc051bWJlcikgLyAxMDA7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF6b29tQXNOdW1iZXIpIHtcclxuICAgICAgICBpZiAoIVBERlZpZXdlckFwcGxpY2F0aW9uLnN0b3JlKSB7XHJcbiAgICAgICAgICAvLyBJdCdzIGRpZmZpY3VsdCB0byBwcmV2ZW50IGNhbGxpbmcgdGhpcyBtZXRob2QgdG8gZWFybHksIHNvIHdlIG5lZWQgdGhpcyBjaGVjay5cclxuICAgICAgICAgIC8vIHNldFpvb20oKSBpcyBjYWxsZWQgbGF0ZXIgYWdhaW4sIHdoZW4gdGhlIFBERiBkb2N1bWVudCBoYXMgYmVlbiBsb2FkZWQgYW5kIGl0c1xyXG4gICAgICAgICAgLy8gZmluZ2VycHJpbnQgaGFzIGJlZW4gY2FsY3VsYXRlZC5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgdXNlclNldHRpbmcgPSBhd2FpdCBQREZWaWV3ZXJBcHBsaWNhdGlvbi5zdG9yZS5nZXQoJ3pvb20nKTtcclxuICAgICAgICAgIGlmICh1c2VyU2V0dGluZykge1xyXG4gICAgICAgICAgICBpZiAoIWlzTmFOKE51bWJlcih1c2VyU2V0dGluZykpKSB7XHJcbiAgICAgICAgICAgICAgem9vbUFzTnVtYmVyID0gTnVtYmVyKHVzZXJTZXR0aW5nKSAvIDEwMDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB6b29tQXNOdW1iZXIgPSB1c2VyU2V0dGluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgem9vbUFzTnVtYmVyID0gJ2F1dG8nO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zOiBJUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucztcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCdkZWZhdWx0Wm9vbVZhbHVlJywgem9vbUFzTnVtYmVyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3Qgc2NhbGVEcm9wZG93bkZpZWxkID0gKHRoaXMucm9vdC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5xdWVyeVNlbGVjdG9yKCcjc2NhbGVTZWxlY3QnKSBhcyBIVE1MU2VsZWN0RWxlbWVudCB8IHVuZGVmaW5lZDtcclxuICAgICAgaWYgKHNjYWxlRHJvcGRvd25GaWVsZCkge1xyXG4gICAgICAgIGlmICh0aGlzLnpvb20gPT09ICdhdXRvJyB8fCB0aGlzLnpvb20gPT09ICdwYWdlLWZpdCcgfHwgdGhpcy56b29tID09PSAncGFnZS1hY3R1YWwnIHx8IHRoaXMuem9vbSA9PT0gJ3BhZ2Utd2lkdGgnKSB7XHJcbiAgICAgICAgICBzY2FsZURyb3Bkb3duRmllbGQudmFsdWUgPSB0aGlzLnpvb207XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNjYWxlRHJvcGRvd25GaWVsZC52YWx1ZSA9ICdjdXN0b20nO1xyXG4gICAgICAgICAgaWYgKHNjYWxlRHJvcGRvd25GaWVsZC5vcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIHNjYWxlRHJvcGRvd25GaWVsZC5vcHRpb25zIGFzIGFueSkge1xyXG4gICAgICAgICAgICAgIGlmIChvcHRpb24udmFsdWUgPT09ICdjdXN0b20nKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKE51bWJlcih6b29tQXNOdW1iZXIpICogMTAwXzAwMCkgLyAxMDAwfSVgO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlcikge1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5jdXJyZW50U2NhbGVWYWx1ZSA9IHpvb21Bc051bWJlciB8fCAnYXV0byc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHBkZlZpZXdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2h0bWwnKTtcclxuICAgIGlmIChwZGZWaWV3ZXIgJiYgcGRmVmlld2VyLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ291dGVyQ29udGFpbmVyJyk7XHJcbiAgICAgIGlmIChjb250YWluZXIpIHtcclxuICAgICAgICBjb25zdCB3aWR0aCA9IGNvbnRhaW5lci5jbGllbnRXaWR0aDtcclxuICAgICAgICB0aGlzLnRvb2xiYXJXaWR0aEluUGl4ZWxzID0gd2lkdGg7XHJcbiAgICAgICAgaWYgKHRoaXMuc2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudCkge1xyXG4gICAgICAgICAgdGhpcy5zZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50LmNoZWNrVmlzaWJpbGl0eSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNoZWNrSGVpZ2h0KCk7XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoKSA9PiB0aGlzLnJlbW92ZVNjcm9sbGJhckluSW5pdGl0ZVNjcm9sbE1vZGUoKSk7XHJcbiAgICAgIGNvbnN0IHZpZXdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3ZXInKTtcclxuICAgICAgaWYgKHZpZXdlcikge1xyXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUodmlld2VyKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdSZXNpemVPYnNlcnZlciBpcyBub3Qgc3VwcG9ydGVkIGJ5IHlvdXIgYnJvd3NlcicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY29udGV4dG1lbnUnKVxyXG4gIHB1YmxpYyBvbkNvbnRleHRNZW51KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGV4dE1lbnVBbGxvd2VkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uU2Vjb25kYXJ5TWVudUlzRW1wdHkoaGlkZUtlYmFiQnV0dG9uOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmhpZGVLZWJhYk1lbnVGb3JTZWNvbmRhcnlUb29sYmFyID0gaGlkZUtlYmFiQnV0dG9uO1xyXG4gICAgaWYgKGhpZGVLZWJhYkJ1dHRvbikge1xyXG4gICAgICBpZiAoIXRoaXMuaXNQcmltYXJ5TWVudVZpc2libGUoKSkge1xyXG4gICAgICAgIHRoaXMucHJpbWFyeU1lbnVWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyByZWdpc3RlckFjcm9mb3JtQW5ub3RhdGlvbnMoc29ydGVkQW5ub3RhdGlvbnM6IEFycmF5PEFubm90YXRpb24+KTogdm9pZCB7XHJcbiAgICBsZXQgaWRzOiB7IFtrZXk6IHN0cmluZ106IEFubm90YXRpb24gfSA9IHt9O1xyXG4gICAgbGV0IGR1cGxpY2F0ZXM6IHsgW2tleTogc3RyaW5nXTogQW5ub3RhdGlvbiB9ID0ge307XHJcbiAgICBmb3IgKGxldCBhIG9mIHNvcnRlZEFubm90YXRpb25zKSB7XHJcbiAgICAgIGlmIChhLmZpZWxkTmFtZSkge1xyXG4gICAgICAgIGlmIChpZHNbYS5maWVsZE5hbWVdKSB7XHJcbiAgICAgICAgICBkdXBsaWNhdGVzW2EuZmllbGROYW1lXSA9IGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlkc1thLmZpZWxkTmFtZV0gPSBhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBhIG9mIHNvcnRlZEFubm90YXRpb25zKSB7XHJcbiAgICAgIGlmIChhLmZpZWxkTmFtZSAmJiBkdXBsaWNhdGVzW2EuZmllbGROYW1lXSkge1xyXG4gICAgICAgIHRoaXMuZm9ybUlkVG9GaWVsZE5hbWVbYS5pZF0gPSBhLmZpZWxkTmFtZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEZvcm1WYWx1ZShrZXk6IHN0cmluZyk6IE9iamVjdCB7XHJcbiAgICBpZiAodGhpcy5mb3JtRGF0YVtrZXldID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgaWYgKGtleS5pbmNsdWRlcygnLycpKSB7XHJcbiAgICAgICAga2V5ID0ga2V5LnNwbGl0KCcvJylbMF07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7IHZhbHVlOiB0aGlzLmZvcm1EYXRhW2tleV0gfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRGb3JtVmFsdWUoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5mb3JtRGF0YSkge1xyXG4gICAgICB0aGlzLmZvcm1EYXRhID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZm9ybUlkVG9GaWVsZE5hbWVba2V5XSkge1xyXG4gICAgICAvLyByYWRpb2J1dHRvbnNcclxuICAgICAgdGhpcy5mb3JtRGF0YVt0aGlzLmZvcm1JZFRvRmllbGROYW1lW2tleV1dID0gdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZvcm1EYXRhW2tleV0gPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLmZvcm1EYXRhQ2hhbmdlLmVtaXQodGhpcy5mb3JtRGF0YSkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzc2lnbkZvcm1JZEFuZEZpZWxkTmFtZShrZXk6IHN0cmluZywgZmllbGROYW1lOiBzdHJpbmcgfCBib29sZWFuLCByYWRpb0J1dHRvbkZpZWxkPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvcm1JZFRvRmllbGROYW1lW2tleV0gPSBmaWVsZE5hbWU7XHJcbiAgICBpZiAocmFkaW9CdXR0b25GaWVsZCkge1xyXG4gICAgICB0aGlzLmZvcm1SYWRpb0J1dHRvblZhbHVlVG9JZFtyYWRpb0J1dHRvbkZpZWxkXSA9IGtleTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVGb3JtRmllbGRzKGZvcm1EYXRhOiBPYmplY3QsIHByZXZpb3VzRm9ybURhdGE6IE9iamVjdCkge1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuXHJcbiAgICBpZiAoIVBERlZpZXdlckFwcGxpY2F0aW9uIHx8ICFQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudCB8fCAhUERGVmlld2VyQXBwbGljYXRpb24ucGRmRG9jdW1lbnQuYW5ub3RhdGlvblN0b3JhZ2UpIHtcclxuICAgICAgLy8gbmdPbkNoYW5nZXMgY2FsbHMgdGhpcyBtZXRob2QgdG9vIGVhcmx5IC0gc28ganVzdCBpZ25vcmUgaXRcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc3RvcmFnZSA9IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50LmFubm90YXRpb25TdG9yYWdlO1xyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIGZvcm1EYXRhKSB7XHJcbiAgICAgIGlmIChmb3JtRGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgaWYgKGZvcm1EYXRhW2tleV0gIT09IHByZXZpb3VzRm9ybURhdGFba2V5XSkge1xyXG4gICAgICAgICAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0nXCIgKyBrZXkgKyBcIiddXCIpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgaWYgKGZpZWxkIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xyXG4gICAgICAgICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ3JhZGlvJykge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFtuYW1lPSdcIiArIGtleSArIFwiJ11cIik7XHJcbiAgICAgICAgICAgICAgY29uc3QgZmllbGRJZFRvQWN0aXZhdGUgPSB0aGlzLmZvcm1SYWRpb0J1dHRvblZhbHVlVG9JZFtmb3JtRGF0YVtrZXldXTtcclxuICAgICAgICAgICAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQ6IEhUTUxJbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNob3J0SWQgPSBmaWVsZC5pZC5yZXBsYWNlKCdwZGZqc19pbnRlcm5hbF9pZF8nLCAnJyk7XHJcbiAgICAgICAgICAgICAgICBmaWVsZC5jaGVja2VkID0gc2hvcnRJZCA9PT0gZmllbGRJZFRvQWN0aXZhdGU7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB2IGluIHRoaXMuZm9ybVJhZGlvQnV0dG9uVmFsdWVUb0lkKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmICh2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybVJhZGlvQnV0dG9uVmFsdWVUb0lkW3ZdID09PSBzaG9ydElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdG9yYWdlLnNldFZhbHVlKHNob3J0SWQsIGtleSwgeyB2YWx1ZTogZm9ybURhdGFba2V5XSA9PT0gdiwgZW1pdE1lc3NhZ2U6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT09ICdjaGVja2JveCcpIHtcclxuICAgICAgICAgICAgICBzdG9yYWdlLnNldFZhbHVlKGZpZWxkLmlkLCBrZXksIHsgdmFsdWU6IGZvcm1EYXRhW2tleV0sIGVtaXRNZXNzYWdlOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICBmaWVsZC5jaGVja2VkID0gZm9ybURhdGFba2V5XTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBzdG9yYWdlLnNldFZhbHVlKGZpZWxkLmlkLCBrZXksIHsgdmFsdWU6IGZvcm1EYXRhW2tleV0sIGVtaXRNZXNzYWdlOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICBmaWVsZC52YWx1ZSA9IGZvcm1EYXRhW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSBpZiAoIWZpZWxkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRleHRhcmVhW25hbWU9J1wiICsga2V5ICsgXCInXVwiKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAodGV4dGFyZWEpIHtcclxuICAgICAgICAgICAgICBzdG9yYWdlLnNldFZhbHVlKHRleHRhcmVhLmlkLCBrZXksIHsgdmFsdWU6IGZvcm1EYXRhW2tleV0sIGVtaXRNZXNzYWdlOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICB0ZXh0YXJlYS52YWx1ZSA9IGZvcm1EYXRhW2tleV07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0W25hbWU9J1wiICsga2V5ICsgXCInXVwiKSBhcyBIVE1MU2VsZWN0RWxlbWVudCB8IG51bGw7XHJcbiAgICAgICAgICAgICAgaWYgKGRyb3Bkb3duKSB7XHJcbiAgICAgICAgICAgICAgICBzdG9yYWdlLnNldFZhbHVlKGRyb3Bkb3duLmlkLCBrZXksIHsgdmFsdWU6IGZvcm1EYXRhW2tleV0sIGVtaXRNZXNzYWdlOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChkcm9wZG93bi5tdWx0aXBsZSkge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5mb3JtRGF0YVtrZXldIGFzIHN0cmluZ1tdO1xyXG4gICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRyb3Bkb3duLm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bi5vcHRpb25zW2ldLnNlbGVjdGVkID0gb3B0aW9ucy5pbmRleE9mKGRyb3Bkb3duLm9wdGlvbnNbaV0udmFsdWUpID49IDA7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIGRyb3Bkb3duLnZhbHVlID0gZm9ybURhdGFba2V5XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IHRoaXMuZm9ybUlkVG9GaWVsZE5hbWVba2V5XTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBwcmV2aW91c0Zvcm1EYXRhKSB7XHJcbiAgICAgIGlmIChwcmV2aW91c0Zvcm1EYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICBpZiAoIWZvcm1EYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J1wiICsga2V5ICsgXCInXVwiKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgIGlmIChmaWVsZCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgLy8gdGhpcyBlbnRyeSBoYXMgYmVlbiBkZWxldGVkXHJcbiAgICAgICAgICAgIGlmIChmaWVsZC50eXBlID09PSAnY2hlY2tib3gnKSB7XHJcbiAgICAgICAgICAgICAgc3RvcmFnZS5zZXRWYWx1ZShmaWVsZC5pZCwga2V5LCB7IHZhbHVlOiBmYWxzZSwgZW1pdE1lc3NhZ2U6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgIGZpZWxkLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBzdG9yYWdlLnNldFZhbHVlKGZpZWxkLmlkLCBrZXksIHsgdmFsdWU6IHVuZGVmaW5lZCwgZW1pdE1lc3NhZ2U6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgIGZpZWxkLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSBpZiAoIWZpZWxkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRleHRhcmVhW25hbWU9J1wiICsga2V5ICsgXCInXVwiKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAodGV4dGFyZWEpIHtcclxuICAgICAgICAgICAgICBzdG9yYWdlLnNldFZhbHVlKHRleHRhcmVhLmlkLCBrZXksIHsgdmFsdWU6IHVuZGVmaW5lZCwgZW1pdE1lc3NhZ2U6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgIHRleHRhcmVhLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkQ29tcGxldGUocGRmOiBhbnkgLyogUERGRG9jdW1lbnRQcm94eSAqLyk6IHZvaWQge1xyXG4gICAgLyoqIFRoaXMgbWV0aG9kIGhhcyBiZWVuIGluc3BpcmVkIGJ5IGh0dHBzOi8vbWVkaXVtLmNvbS9mYWN0b3J5LW1pbmQvYW5ndWxhci1wZGYtZm9ybXMtZmE3MmIxNWMzZmJkLiBUaGFua3MsIEpvbm55IEZveCEgKi9cclxuICAgIHRoaXMuaGFzU2lnbmF0dXJlID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5idXR0b25WYWx1ZXMgPSB7fTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBwZGYubnVtUGFnZXM7IGkrKykge1xyXG4gICAgICAvLyB0cmFjayB0aGUgY3VycmVudCBwYWdlXHJcbiAgICAgIHBkZlxyXG4gICAgICAgIC5nZXRQYWdlKGkpXHJcbiAgICAgICAgLnRoZW4oKHApID0+IHtcclxuICAgICAgICAgIC8vIGdldCB0aGUgYW5ub3RhdGlvbnMgb2YgdGhlIGN1cnJlbnQgcGFnZVxyXG4gICAgICAgICAgcmV0dXJuIHAuZ2V0QW5ub3RhdGlvbnMoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChhbm5vdGF0aW9ucykgPT4ge1xyXG4gICAgICAgICAgLy8gdWdseSBjYXN0IGR1ZSB0byBtaXNzaW5nIHR5cGVzY3JpcHQgZGVmaW5pdGlvbnNcclxuICAgICAgICAgIC8vIHBsZWFzZSBjb250cmlidXRlIHRvIGNvbXBsZXRlIEB0eXBlcy9wZGZqcy1kaXN0XHJcblxyXG4gICAgICAgICAgYW5ub3RhdGlvbnNcclxuICAgICAgICAgICAgLmZpbHRlcigoYSkgPT4gYS5zdWJ0eXBlID09PSAnV2lkZ2V0JykgLy8gZ2V0IHRoZSBmb3JtIGZpZWxkIGFubm90YXRpb24gb25seVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgoYSkgPT4ge1xyXG4gICAgICAgICAgICAgIC8vIEFkZGl0aW9uYWwgUERGIEZvcm0gRmllbGQgVHlwZXMgIzU2NzogU3RvcmUgdGhlIGV4cG9ydFZhbHVlIGZvciB0aGUgY2hlY2sgYm94ZXMgYW5kIGJ1dHRvblZhbHVlIGZvciByYWRpbyBidXR0b25zIGZvciBxdWljayByZWZlcmVuY2VcclxuICAgICAgICAgICAgICBpZiAoYS5jaGVja0JveCkgdGhpcy5idXR0b25WYWx1ZXNbYS5pZF0gPSBhLmV4cG9ydFZhbHVlO1xyXG4gICAgICAgICAgICAgIGVsc2UgaWYgKGEucmFkaW9CdXR0b24pIHRoaXMuYnV0dG9uVmFsdWVzW2EuaWRdID0gYS5idXR0b25WYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKGEuZmllbGRUeXBlID09PSAnU2lnJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5oYXNTaWduYXR1cmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2aWV3ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlld2VyQ29udGFpbmVyJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld2VyQ29udGFpbmVyLnNjcm9sbEJ5KDAsIC0zMik7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgLy8gZ2V0IHRoZSByZWN0YW5nbGUgdGhhdCByZXByZXNlbnQgdGhlIHNpbmdsZSBmaWVsZFxyXG4gICAgICAgICAgICAgIC8vIGFuZCByZXNpemUgaXQgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IERQSVxyXG4gICAgICAgICAgICAgIGNvbnN0IGZpZWxkUmVjdCA9IGN1cnJlbnRQYWdlLmdldFZpZXdwb3J0KGRwaVJhdGlvKS5jb252ZXJ0VG9WaWV3cG9ydFJlY3RhbmdsZShhLnJlY3QpO1xyXG5cclxuICAgICAgICAgICAgICAvLyBhZGQgdGhlIGNvcnJlc3BvbmRpbmcgaW5wdXRcclxuICAgICAgICAgICAgICB0aGlzLmFkZElucHV0KGEsIGZpZWxkUmVjdCk7XHJcbiAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnBkZkxvYWRlZC5lbWl0KHsgcGFnZXNDb3VudDogcGRmLm51bVBhZ2VzIH0gYXMgUGRmTG9hZGVkRXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIHpvb21Ub1BhZ2VXaWR0aChldmVudDogTW91c2VFdmVudCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgaWYgKHRoaXMuaGFuZFRvb2wpIHtcclxuICAgICAgaWYgKCFwZGZEZWZhdWx0T3B0aW9ucy5kb3VibGVUYXBab29tc0luSGFuZE1vZGUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghcGRmRGVmYXVsdE9wdGlvbnMuZG91YmxlVGFwWm9vbXNJblRleHRTZWxlY3Rpb25Nb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgY29uc3QgZGVzaXJlZENlbnRlclkgPSBldmVudC5jbGllbnRZO1xyXG4gICAgY29uc3QgcHJldmlvdXNTY2FsZSA9IChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIgYXMgYW55KS5jdXJyZW50U2NhbGU7XHJcblxyXG4gICAgaWYgKHRoaXMuem9vbSAhPT0gcGRmRGVmYXVsdE9wdGlvbnMuZG91YmxlVGFwWm9vbUZhY3RvciAmJiB0aGlzLnpvb20gKyAnJScgIT09IHBkZkRlZmF1bHRPcHRpb25zLmRvdWJsZVRhcFpvb21GYWN0b3IpIHtcclxuICAgICAgdGhpcy5wcmV2aW91c1pvb20gPSB0aGlzLnpvb207XHJcbiAgICAgIHRoaXMuem9vbSA9IHBkZkRlZmF1bHRPcHRpb25zLmRvdWJsZVRhcFpvb21GYWN0b3I7IC8vIGJ5IGRlZmF1bHQ6ICdwYWdlLXdpZHRoJztcclxuICAgICAgYXdhaXQgdGhpcy5zZXRab29tKCk7XHJcbiAgICB9IGVsc2UgaWYgKHBkZkRlZmF1bHRPcHRpb25zLmRvdWJsZVRhcFJlc2V0c1pvb21PblNlY29uZERvdWJsZVRhcCkge1xyXG4gICAgICBpZiAodGhpcy5wcmV2aW91c1pvb20pIHtcclxuICAgICAgICB0aGlzLnpvb20gPSB0aGlzLnByZXZpb3VzWm9vbTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnpvb20gPSAncGFnZS13aWR0aCc7XHJcbiAgICAgIH1cclxuICAgICAgYXdhaXQgdGhpcy5zZXRab29tKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3VycmVudFNjYWxlID0gKFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlciBhcyBhbnkpLmN1cnJlbnRTY2FsZTtcclxuICAgIGNvbnN0IHNjYWxlQ29ycmVjdGlvbkZhY3RvciA9IGN1cnJlbnRTY2FsZSAvIHByZXZpb3VzU2NhbGUgLSAxO1xyXG4gICAgY29uc3QgcmVjdCA9IChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIgYXMgYW55KS5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCBkeSA9IGRlc2lyZWRDZW50ZXJZIC0gcmVjdC50b3A7XHJcbiAgICAoUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyIGFzIGFueSkuY29udGFpbmVyLnNjcm9sbFRvcCArPSBkeSAqIHNjYWxlQ29ycmVjdGlvbkZhY3RvcjtcclxuICB9XHJcbn1cclxuIiwiPHBkZi1kYXJrLXRoZW1lICpuZ0lmPVwidGhlbWUgPT09ICdkYXJrJ1wiPjwvcGRmLWRhcmstdGhlbWU+XHJcbjxwZGYtbGlnaHQtdGhlbWUgKm5nSWY9XCJ0aGVtZSA9PT0gJ2xpZ2h0J1wiPjwvcGRmLWxpZ2h0LXRoZW1lPlxyXG48cGRmLWFjcm9mb3JtLWRhcmstdGhlbWUgKm5nSWY9XCJmb3JtVGhlbWUgPT09ICdkYXJrJ1wiPjwvcGRmLWFjcm9mb3JtLWRhcmstdGhlbWU+XHJcbjxwZGYtYWNyb2Zvcm0tZGVmYXVsdC10aGVtZSAqbmdJZj1cImZvcm1UaGVtZSA9PT0gJ2xpZ2h0J1wiPjwvcGRmLWFjcm9mb3JtLWRlZmF1bHQtdGhlbWU+XHJcblxyXG48cGRmLWR5bmFtaWMtY3NzIFt6b29tXT1cIm1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlXCIgW3dpZHRoXT1cInRvb2xiYXJXaWR0aEluUGl4ZWxzXCI+PC9wZGYtZHluYW1pYy1jc3M+XHJcbjxuZy1jb250ZW50ICpuZ1RlbXBsYXRlT3V0bGV0PVwiY3VzdG9tUGRmVmlld2VyID8gY3VzdG9tUGRmVmlld2VyIDogZGVmYXVsdFBkZlZpZXdlclwiPjwvbmctY29udGVudD5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjZGVmYXVsdFBkZlZpZXdlcj5cclxuICA8ZGl2IGNsYXNzPVwiem9vbVwiIFtzdHlsZS5oZWlnaHRdPVwibWluSGVpZ2h0ID8gbWluSGVpZ2h0IDogaGVpZ2h0XCIgI3Jvb3Q+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaHRtbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYm9keVwiIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwiYmFja2dyb3VuZENvbG9yXCI+XHJcbiAgICAgICAgPGRpdiBpZD1cIm91dGVyQ29udGFpbmVyXCIgKHdpbmRvdzpyZXNpemUpPVwib25SZXNpemUoKVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZyZWUtZmxvYXRpbmctYmFyXCIgKm5nSWY9XCJzaG93RnJlZUZsb2F0aW5nQmFyXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250ZW50ICpuZ1RlbXBsYXRlT3V0bGV0PVwiY3VzdG9tRnJlZUZsb2F0aW5nQmFyID8gY3VzdG9tRnJlZUZsb2F0aW5nQmFyIDogZGVmYXVsdEZyZWVGbG9hdGluZ0JhclwiPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxwZGYtc2lkZWJhciAjcGRmc2lkZWJhciBbc2lkZWJhclZpc2libGVdPVwic2lkZWJhclZpc2libGUgfHwgZmFsc2VcIiBbc2hvd1NpZGViYXJCdXR0b25dPVwic2hvd1NpZGViYXJCdXR0b25cIlxyXG4gICAgICAgICAgICBbY3VzdG9tU2lkZWJhcl09XCJjdXN0b21TaWRlYmFyXCIgW2N1c3RvbVRodW1ibmFpbF09XCJjdXN0b21UaHVtYm5haWxcIlxyXG4gICAgICAgICAgICAodGh1bWJuYWlsRHJhd24pPVwidGh1bWJuYWlsRHJhd24uZW1pdCgkZXZlbnQpXCIgW21vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlXT1cIm1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlXCJcclxuICAgICAgICAgICAgW3NpZGViYXJQb3NpdGlvblRvcF09XCJzaWRlYmFyUG9zaXRpb25Ub3BcIj5cclxuICAgICAgICAgIDwvcGRmLXNpZGViYXI+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwibWFpbkNvbnRhaW5lclwiIFtjbGFzcy50b29sYmFyLWhpZGRlbl09XCIhcHJpbWFyeU1lbnVWaXNpYmxlXCI+XHJcbiAgICAgICAgICAgIDxwZGYtZHVtbXktY29tcG9uZW50cz48L3BkZi1kdW1teS1jb21wb25lbnRzPlxyXG5cclxuICAgICAgICAgICAgPHBkZi10b29sYmFyIFtjdXN0b21Ub29sYmFyXT1cImN1c3RvbVRvb2xiYXJcIiBbbW9iaWxlRnJpZW5kbHlab29tU2NhbGVdPVwibW9iaWxlRnJpZW5kbHlab29tU2NhbGVcIlxyXG4gICAgICAgICAgICAgIFtwcmltYXJ5TWVudVZpc2libGVdPVwicHJpbWFyeU1lbnVWaXNpYmxlXCJcclxuICAgICAgICAgICAgICBbc2hvd0Rvd25sb2FkQnV0dG9uXT1cInNob3dEb3dubG9hZEJ1dHRvblwiIFtzaG93RWRpdG9yXT1cInNob3dFZGl0b3JcIiBbc2hvd0ZpbmRCdXR0b25dPVwic2hvd0ZpbmRCdXR0b25cIlxyXG4gICAgICAgICAgICAgIFtzaG93SGFuZFRvb2xCdXR0b25dPVwic2hvd0hhbmRUb29sQnV0dG9uXCIgW3Nob3dPcGVuRmlsZUJ1dHRvbl09XCJzaG93T3BlbkZpbGVCdXR0b25cIlxyXG4gICAgICAgICAgICAgIFtzaG93UHJpbnRCdXR0b25dPVwic2hvd1ByaW50QnV0dG9uICYmIGVuYWJsZVByaW50XCIgW3Nob3dQYWdpbmdCdXR0b25zXT1cInNob3dQYWdpbmdCdXR0b25zXCJcclxuICAgICAgICAgICAgICBbc2hvd1ByZXNlbnRhdGlvbk1vZGVCdXR0b25dPVwic2hvd1ByZXNlbnRhdGlvbk1vZGVCdXR0b25cIiBbc2hvd1JvdGF0ZUJ1dHRvbl09XCJzaG93Um90YXRlQnV0dG9uXCJcclxuICAgICAgICAgICAgICBbc2hvd1NlY29uZGFyeVRvb2xiYXJCdXR0b25dPVwic2hvd1NlY29uZGFyeVRvb2xiYXJCdXR0b24gJiYgIWhpZGVLZWJhYk1lbnVGb3JTZWNvbmRhcnlUb29sYmFyXCJcclxuICAgICAgICAgICAgICBbc2hvd1NpZGViYXJCdXR0b25dPVwic2hvd1NpZGViYXJCdXR0b25cIiBbc2hvd1pvb21CdXR0b25zXT1cInNob3dab29tQnV0dG9uc1wiIFt0ZXh0TGF5ZXJdPVwidGV4dExheWVyXCJcclxuICAgICAgICAgICAgICBbdG9vbGJhck1hcmdpblRvcF09XCJ0b29sYmFyTWFyZ2luVG9wXCIgW3Rvb2xiYXJXaWR0aF09XCJ0b29sYmFyV2lkdGhcIlxyXG4gICAgICAgICAgICAgIChvblRvb2xiYXJMb2FkZWQpPVwib25Ub29sYmFyTG9hZGVkKCRldmVudClcIiBbem9vbUxldmVsc109XCJ6b29tTGV2ZWxzXCI+PC9wZGYtdG9vbGJhcj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0b3JQYXJhbXNUb29sYmFyIGhpZGRlbiBkb29ySGFuZ2VyUmlnaHRcIiBpZD1cImVkaXRvckZyZWVUZXh0UGFyYW1zVG9vbGJhclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0b3JQYXJhbXNUb29sYmFyQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdG9yUGFyYW1zU2V0dGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlZGl0b3JGcmVlVGV4dENvbG9yXCIgY2xhc3M9XCJlZGl0b3JQYXJhbXNMYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1sMTBuLWlkPVwiZWRpdG9yX2ZyZWVfdGV4dF9mb250X2NvbG9yXCI+Rm9udCBDb2xvcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY29sb3JcIiBpZD1cImVkaXRvckZyZWVUZXh0Q29sb3JcIiBjbGFzcz1cImVkaXRvclBhcmFtc0NvbG9yXCIgdGFiaW5kZXg9XCIxMDBcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXRvclBhcmFtc1NldHRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZWRpdG9yRnJlZVRleHRGb250U2l6ZVwiIGNsYXNzPVwiZWRpdG9yUGFyYW1zTGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtbDEwbi1pZD1cImVkaXRvcl9mcmVlX3RleHRfZm9udF9zaXplXCI+Rm9udCBTaXplPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIGlkPVwiZWRpdG9yRnJlZVRleHRGb250U2l6ZVwiIGNsYXNzPVwiZWRpdG9yUGFyYW1zU2xpZGVyXCIgdmFsdWU9XCIxMFwiIG1pbj1cIjVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1heD1cIjEwMFwiIHN0ZXA9XCIxXCIgdGFiaW5kZXg9XCIxMDFcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0b3JQYXJhbXNUb29sYmFyIGhpZGRlbiBkb29ySGFuZ2VyUmlnaHRcIiBpZD1cImVkaXRvcklua1BhcmFtc1Rvb2xiYXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdG9yUGFyYW1zVG9vbGJhckNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXRvclBhcmFtc1NldHRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZWRpdG9ySW5rQ29sb3JcIiBjbGFzcz1cImVkaXRvclBhcmFtc0xhYmVsXCIgZGF0YS1sMTBuLWlkPVwiZWRpdG9yX2lua19jb2xvclwiPkNvbG9yPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjb2xvclwiIGlkPVwiZWRpdG9ySW5rQ29sb3JcIiBjbGFzcz1cImVkaXRvclBhcmFtc0NvbG9yXCIgdGFiaW5kZXg9XCIxMDJcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXRvclBhcmFtc1NldHRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZWRpdG9ySW5rVGhpY2tuZXNzXCIgY2xhc3M9XCJlZGl0b3JQYXJhbXNMYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1sMTBuLWlkPVwiZWRpdG9yX2lua190aGlja25lc3NcIj5UaGlja25lc3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgaWQ9XCJlZGl0b3JJbmtUaGlja25lc3NcIiBjbGFzcz1cImVkaXRvclBhcmFtc1NsaWRlclwiIHZhbHVlPVwiMVwiIG1pbj1cIjFcIiBtYXg9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcD1cIjFcIiB0YWJpbmRleD1cIjEwM1wiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdG9yUGFyYW1zU2V0dGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlZGl0b3JJbmtPcGFjaXR5XCIgY2xhc3M9XCJlZGl0b3JQYXJhbXNMYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1sMTBuLWlkPVwiZWRpdG9yX2lua19vcGFjaXR5XCI+T3BhY2l0eTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBpZD1cImVkaXRvcklua09wYWNpdHlcIiBjbGFzcz1cImVkaXRvclBhcmFtc1NsaWRlclwiIHZhbHVlPVwiMTAwXCIgbWluPVwiMVwiIG1heD1cIjEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcD1cIjFcIiB0YWJpbmRleD1cIjEwNFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxwZGYtc2Vjb25kYXJ5LXRvb2xiYXIgI3BkZlNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQgW2N1c3RvbVNlY29uZGFyeVRvb2xiYXJdPVwiY3VzdG9tU2Vjb25kYXJ5VG9vbGJhclwiXHJcbiAgICAgICAgICAgICAgW3NlY29uZGFyeVRvb2xiYXJUb3BdPVwic2Vjb25kYXJ5VG9vbGJhclRvcFwiIFttb2JpbGVGcmllbmRseVpvb21TY2FsZV09XCJtb2JpbGVGcmllbmRseVpvb21TY2FsZVwiXHJcbiAgICAgICAgICAgICAgW3Nob3dQcmVzZW50YXRpb25Nb2RlQnV0dG9uXT1cInNob3dQcmVzZW50YXRpb25Nb2RlQnV0dG9uXCIgW3Nob3dPcGVuRmlsZUJ1dHRvbl09XCJzaG93T3BlbkZpbGVCdXR0b25cIlxyXG4gICAgICAgICAgICAgIFtzaG93UHJpbnRCdXR0b25dPVwic2hvd1ByaW50QnV0dG9uICYmIGVuYWJsZVByaW50XCIgW3Nob3dEb3dubG9hZEJ1dHRvbl09XCJzaG93RG93bmxvYWRCdXR0b25cIlxyXG4gICAgICAgICAgICAgIFtzaG93UGFnaW5nQnV0dG9uc109XCJzaG93UGFnaW5nQnV0dG9uc1wiXHJcbiAgICAgICAgICAgICAgW3Nob3dSb3RhdGVCdXR0b25dPVwic2hvd1JvdGF0ZUJ1dHRvblwiIFtzaG93SGFuZFRvb2xCdXR0b25dPVwic2hvd0hhbmRUb29sQnV0dG9uXCJcclxuICAgICAgICAgICAgICBbc2hvd1Njcm9sbGluZ0J1dHRvbl09XCJzaG93U2Nyb2xsaW5nQnV0dG9uXCIgW3Nob3dTcHJlYWRCdXR0b25dPVwic2hvd1NwcmVhZEJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgW3Nob3dQcm9wZXJ0aWVzQnV0dG9uXT1cInNob3dQcm9wZXJ0aWVzQnV0dG9uXCIgKHNwcmVhZENoYW5nZSk9XCJvblNwcmVhZENoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAoc2Vjb25kYXJ5TWVudUlzRW1wdHkpPVwib25TZWNvbmRhcnlNZW51SXNFbXB0eSgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgIDwvcGRmLXNlY29uZGFyeS10b29sYmFyPlxyXG5cclxuICAgICAgICAgICAgPHBkZi1maW5kYmFyIFtmaW5kYmFyTGVmdF09XCJmaW5kYmFyTGVmdFwiIFtmaW5kYmFyVG9wXT1cImZpbmRiYXJUb3BcIlxyXG4gICAgICAgICAgICAgIFttb2JpbGVGcmllbmRseVpvb21TY2FsZV09XCJtb2JpbGVGcmllbmRseVpvb21TY2FsZVwiIFtzaG93RmluZEJ1dHRvbl09XCJzaG93RmluZEJ1dHRvbiB8fCBmYWxzZVwiXHJcbiAgICAgICAgICAgICAgW2N1c3RvbUZpbmRiYXJJbnB1dEFyZWFdPVwiY3VzdG9tRmluZGJhcklucHV0QXJlYVwiIFtjdXN0b21GaW5kYmFyQnV0dG9uc109XCJjdXN0b21GaW5kYmFyQnV0dG9uc1wiXHJcbiAgICAgICAgICAgICAgW3Nob3dGaW5kQ3VycmVudFBhZ2VPbmx5XT1cInNob3dGaW5kQ3VycmVudFBhZ2VPbmx5XCIgW3Nob3dGaW5kRW50aXJlUGhyYXNlXT1cInNob3dGaW5kRW50aXJlUGhyYXNlXCJcclxuICAgICAgICAgICAgICBbc2hvd0ZpbmRFbnRpcmVXb3JkXT1cInNob3dGaW5kRW50aXJlV29yZFwiIFtzaG93RmluZEZ1enp5U2VhcmNoXT1cInNob3dGaW5kRnV6enlTZWFyY2hcIlxyXG4gICAgICAgICAgICAgIFtzaG93RmluZEhpZ2hsaWdodEFsbF09XCJzaG93RmluZEhpZ2hsaWdodEFsbFwiIFtzaG93RmluZElnbm9yZUFjY2VudHNdPVwic2hvd0ZpbmRJZ25vcmVBY2NlbnRzXCJcclxuICAgICAgICAgICAgICBbc2hvd0ZpbmRNYXRjaENhc2VdPVwic2hvd0ZpbmRNYXRjaENhc2VcIiBbc2hvd0ZpbmRNZXNzYWdlc109XCJzaG93RmluZE1lc3NhZ2VzXCJcclxuICAgICAgICAgICAgICBbc2hvd0ZpbmRQYWdlUmFuZ2VdPVwic2hvd0ZpbmRQYWdlUmFuZ2VcIiBbc2hvd0ZpbmRSZXN1bHRzQ291bnRdPVwic2hvd0ZpbmRSZXN1bHRzQ291bnRcIj5cclxuICAgICAgICAgICAgPC9wZGYtZmluZGJhcj5cclxuXHJcbiAgICAgICAgICAgIDxwZGYtY29udGV4dC1tZW51PjwvcGRmLWNvbnRleHQtbWVudT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ2aWV3ZXJDb250YWluZXJcIiBbc3R5bGUudG9wXT1cInZpZXdlclBvc2l0aW9uVG9wXCIgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJiYWNrZ3JvdW5kQ29sb3JcIlxyXG4gICAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1bnZlcmlmaWVkLXNpZ25hdHVyZS13YXJuaW5nXCIgKm5nSWY9XCJoYXNTaWduYXR1cmUgJiYgc2hvd1VudmVyaWZpZWRTaWduYXR1cmVzXCI+XHJcbiAgICAgICAgICAgICAgICB7e1xyXG4gICAgICAgICAgICAgICAgJ3VudmVyaWZpZWRfc2lnbmF0dXJlX3dhcm5pbmcnXHJcbiAgICAgICAgICAgICAgICB8IHRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgOiBcIlRoaXMgUERGIGZpbGUgY29udGFpbnMgYSBkaWdpdGFsIHNpZ25hdHVyZS4gVGhlIFBERiB2aWV3ZXIgY2FuJ3QgdmVyaWZ5IGlmIHRoZSBzaWduYXR1cmUgaXMgdmFsaWQuXHJcbiAgICAgICAgICAgICAgICBQbGVhc2UgZG93bmxvYWQgdGhlIGZpbGUgYW5kIG9wZW4gaXQgaW4gQWNyb2JhdCBSZWFkZXIgdG8gdmVyaWZ5IHRoZSBzaWduYXR1cmUgaXMgdmFsaWQuXCJcclxuICAgICAgICAgICAgICAgIHwgYXN5bmNcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGlmaWVkLWJhY2tncm91bmQtd2FybmluZ1wiICpuZ0lmPVwicGRmQmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICAgICAge3tcclxuICAgICAgICAgICAgICAgICdtb2RpZmllZF9iYWNrZ3JvdW5kX3dhcm5pbmcnXHJcbiAgICAgICAgICAgICAgICB8IHRyYW5zbGF0ZTogJ1RoaXMgUERGIGlzIHJlbmRlcmVkIHdpdGggYSBjdXN0b20gYmFja2dyb3VuZC4gSXQgZG9lcyBub3QgbG9vayB0aGUgd2F5IGl0cyBhdXRob3JcclxuICAgICAgICAgICAgICAgIGludGVuZGVkIGl0IHRvIGxvb2suJ1xyXG4gICAgICAgICAgICAgICAgfCBhc3luY1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGlkPVwidmlld2VyXCIgY2xhc3M9XCJwZGZWaWV3ZXJcIiAoZGJsY2xpY2spPVwiem9vbVRvUGFnZVdpZHRoKCRldmVudClcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxwZGYtZXJyb3ItbWVzc2FnZT48L3BkZi1lcnJvci1tZXNzYWdlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8IS0tIG1haW5Db250YWluZXIgLS0+XHJcblxyXG4gICAgICAgICAgPGRpdiBpZD1cImRpYWxvZ0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8cGRmLXBhc3N3b3JkLWRpYWxvZz48L3BkZi1wYXNzd29yZC1kaWFsb2c+XHJcbiAgICAgICAgICAgIDxwZGYtZG9jdW1lbnQtcHJvcGVydGllcy1kaWFsb2c+PC9wZGYtZG9jdW1lbnQtcHJvcGVydGllcy1kaWFsb2c+XHJcbiAgICAgICAgICAgIDxwZGYtcHJlcGFyZS1wcmludGluZy1kaWFsb2c+PC9wZGYtcHJlcGFyZS1wcmludGluZy1kaWFsb2c+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwhLS0gZGlhbG9nQ29udGFpbmVyIC0tPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0gb3V0ZXJDb250YWluZXIgLS0+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJmaWxlSW5wdXRcIiBjbGFzcz1cImhpZGRlblwiIC8+XHJcbiAgICAgICAgPGRpdiBpZD1cInByaW50Q29udGFpbmVyXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctdGVtcGxhdGUgI2RlZmF1bHRGcmVlRmxvYXRpbmdCYXI+IDwvbmctdGVtcGxhdGU+XHJcbiJdfQ==
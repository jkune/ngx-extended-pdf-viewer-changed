import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Inject, Input, Output, PLATFORM_ID, ViewChild } from '@angular/core';
import { FindState } from './events/find-result';
import { PdfCursorTools } from './options/pdf-cursor-tools';
import { assetsUrl, getVersionSuffix, pdfDefaultOptions } from './options/pdf-default-options';
import { ScrollModeType } from './options/pdf-viewer';
import { VerbosityLevel } from './options/verbosity-level';
import { PdfDummyComponentsComponent } from './pdf-dummy-components/pdf-dummy-components.component';
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
                    if (typeof this.authorization != "boolean") {
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
            if (typeof this.authorization != "boolean") {
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
NgxExtendedPdfViewerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: NgxExtendedPdfViewerComponent, deps: [{ token: i0.NgZone }, { token: PLATFORM_ID }, { token: i1.PDFNotificationService }, { token: i2.Location }, { token: i0.ElementRef }, { token: i2.PlatformLocation }, { token: i0.ChangeDetectorRef }, { token: i3.NgxExtendedPdfViewerService }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
NgxExtendedPdfViewerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: NgxExtendedPdfViewerComponent, selector: "ngx-extended-pdf-viewer", inputs: { customFindbarInputArea: "customFindbarInputArea", customToolbar: "customToolbar", customFindbar: "customFindbar", customFindbarButtons: "customFindbarButtons", customPdfViewer: "customPdfViewer", customSecondaryToolbar: "customSecondaryToolbar", customSidebar: "customSidebar", customThumbnail: "customThumbnail", customFreeFloatingBar: "customFreeFloatingBar", showFreeFloatingBar: "showFreeFloatingBar", enableDragAndDrop: "enableDragAndDrop", formData: "formData", pageViewMode: "pageViewMode", scrollMode: "scrollMode", authorization: "authorization", httpHeaders: "httpHeaders", contextMenuAllowed: "contextMenuAllowed", enablePrint: "enablePrint", delayFirstView: "delayFirstView", showEditor: "showEditor", logLevel: "logLevel", relativeCoordsOptions: "relativeCoordsOptions", minifiedJSLibraries: "minifiedJSLibraries", printResolution: "printResolution", rotation: "rotation", src: "src", base64Src: "base64Src", minHeight: "minHeight", height: "height", useBrowserLocale: "useBrowserLocale", forceUsingLegacyES5: "forceUsingLegacyES5", backgroundColor: "backgroundColor", pdfBackground: "pdfBackground", pdfBackgroundColorToReplace: "pdfBackgroundColorToReplace", filenameForDownload: "filenameForDownload", ignoreKeyboard: "ignoreKeyboard", ignoreKeys: "ignoreKeys", acceptKeys: "acceptKeys", imageResourcesPath: "imageResourcesPath", localeFolderPath: "localeFolderPath", language: "language", listenToURL: "listenToURL", nameddest: "nameddest", password: "password", replaceBrowserPrint: "replaceBrowserPrint", showUnverifiedSignatures: "showUnverifiedSignatures", startTabindex: "startTabindex", showSidebarButton: "showSidebarButton", sidebarVisible: "sidebarVisible", activeSidebarView: "activeSidebarView", showFindButton: "showFindButton", showFindHighlightAll: "showFindHighlightAll", showFindMatchCase: "showFindMatchCase", showFindCurrentPageOnly: "showFindCurrentPageOnly", showFindPageRange: "showFindPageRange", showFindEntireWord: "showFindEntireWord", showFindEntirePhrase: "showFindEntirePhrase", showFindIgnoreAccents: "showFindIgnoreAccents", showFindFuzzySearch: "showFindFuzzySearch", showFindResultsCount: "showFindResultsCount", showFindMessages: "showFindMessages", showPagingButtons: "showPagingButtons", showZoomButtons: "showZoomButtons", showPresentationModeButton: "showPresentationModeButton", showOpenFileButton: "showOpenFileButton", showPrintButton: "showPrintButton", showDownloadButton: "showDownloadButton", theme: "theme", formTheme: "formTheme", showToolbar: "showToolbar", showSecondaryToolbarButton: "showSecondaryToolbarButton", showRotateButton: "showRotateButton", handTool: "handTool", showHandToolButton: "showHandToolButton", showScrollingButton: "showScrollingButton", showSpreadButton: "showSpreadButton", showPropertiesButton: "showPropertiesButton", showBorders: "showBorders", spread: "spread", page: "page", pageLabel: "pageLabel", textLayer: "textLayer", zoom: "zoom", zoomLevels: "zoomLevels", maxZoom: "maxZoom", minZoom: "minZoom", wheelAction: "wheelAction", mobileFriendlyZoom: "mobileFriendlyZoom" }, outputs: { formDataChange: "formDataChange", progress: "progress", srcChange: "srcChange", scrollModeChange: "scrollModeChange", afterPrint: "afterPrint", beforePrint: "beforePrint", currentZoomFactor: "currentZoomFactor", rotationChange: "rotationChange", annotationLayerRendered: "annotationLayerRendered", annotationEditorLayerRendered: "annotationEditorLayerRendered", xfaLayerRendered: "xfaLayerRendered", outlineLoaded: "outlineLoaded", attachmentsloaded: "attachmentsloaded", layersloaded: "layersloaded", sidebarVisibleChange: "sidebarVisibleChange", activeSidebarViewChange: "activeSidebarViewChange", handToolChange: "handToolChange", spreadChange: "spreadChange", thumbnailDrawn: "thumbnailDrawn", pageChange: "pageChange", pageLabelChange: "pageLabelChange", pagesLoaded: "pagesLoaded", pageRender: "pageRender", pageRendered: "pageRendered", pdfDownloaded: "pdfDownloaded", pdfLoaded: "pdfLoaded", pdfLoadingStarts: "pdfLoadingStarts", pdfLoadingFailed: "pdfLoadingFailed", textLayerRendered: "textLayerRendered", updateFindMatchesCount: "updateFindMatchesCount", updateFindState: "updateFindState", zoomChange: "zoomChange" }, host: { listeners: { "contextmenu": "onContextMenu()" } }, viewQueries: [{ propertyName: "dummyComponents", first: true, predicate: PdfDummyComponentsComponent, descendants: true }, { propertyName: "root", first: true, predicate: ["root"], descendants: true }, { propertyName: "secondaryToolbarComponent", first: true, predicate: ["pdfSecondaryToolbarComponent"], descendants: true }, { propertyName: "sidebarComponent", first: true, predicate: ["pdfsidebar"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<pdf-dark-theme *ngIf=\"theme === 'dark'\"></pdf-dark-theme>\r\n<pdf-light-theme *ngIf=\"theme === 'light'\"></pdf-light-theme>\r\n<pdf-acroform-dark-theme *ngIf=\"formTheme === 'dark'\"></pdf-acroform-dark-theme>\r\n<pdf-acroform-default-theme *ngIf=\"formTheme === 'light'\"></pdf-acroform-default-theme>\r\n\r\n<pdf-dynamic-css [zoom]=\"mobileFriendlyZoomScale\" [width]=\"toolbarWidthInPixels\"></pdf-dynamic-css>\r\n<ng-content *ngTemplateOutlet=\"customPdfViewer ? customPdfViewer : defaultPdfViewer\"></ng-content>\r\n\r\n<ng-template #defaultPdfViewer>\r\n  <div class=\"zoom\" [style.height]=\"minHeight ? minHeight : height\" #root>\r\n    <div class=\"html\">\r\n      <div class=\"body\" [style.backgroundColor]=\"backgroundColor\">\r\n        <div id=\"outerContainer\" (window:resize)=\"onResize()\">\r\n          <div class=\"free-floating-bar\" *ngIf=\"showFreeFloatingBar\">\r\n            <ng-content *ngTemplateOutlet=\"customFreeFloatingBar ? customFreeFloatingBar : defaultFreeFloatingBar\">\r\n            </ng-content>\r\n          </div>\r\n          <pdf-sidebar #pdfsidebar [sidebarVisible]=\"sidebarVisible || false\" [showSidebarButton]=\"showSidebarButton\"\r\n            [customSidebar]=\"customSidebar\" [customThumbnail]=\"customThumbnail\"\r\n            (thumbnailDrawn)=\"thumbnailDrawn.emit($event)\" [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\r\n            [sidebarPositionTop]=\"sidebarPositionTop\">\r\n          </pdf-sidebar>\r\n          <div id=\"mainContainer\" [class.toolbar-hidden]=\"!primaryMenuVisible\">\r\n            <pdf-dummy-components></pdf-dummy-components>\r\n\r\n            <pdf-toolbar [customToolbar]=\"customToolbar\" [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\r\n              [primaryMenuVisible]=\"primaryMenuVisible\"\r\n              [showDownloadButton]=\"showDownloadButton\" [showEditor]=\"showEditor\" [showFindButton]=\"showFindButton\"\r\n              [showHandToolButton]=\"showHandToolButton\" [showOpenFileButton]=\"showOpenFileButton\"\r\n              [showPrintButton]=\"showPrintButton && enablePrint\" [showPagingButtons]=\"showPagingButtons\"\r\n              [showPresentationModeButton]=\"showPresentationModeButton\" [showRotateButton]=\"showRotateButton\"\r\n              [showSecondaryToolbarButton]=\"showSecondaryToolbarButton && !hideKebabMenuForSecondaryToolbar\"\r\n              [showSidebarButton]=\"showSidebarButton\" [showZoomButtons]=\"showZoomButtons\" [textLayer]=\"textLayer\"\r\n              [toolbarMarginTop]=\"toolbarMarginTop\" [toolbarWidth]=\"toolbarWidth\"\r\n              (onToolbarLoaded)=\"onToolbarLoaded($event)\" [zoomLevels]=\"zoomLevels\"></pdf-toolbar>\r\n\r\n            <div class=\"editorParamsToolbar hidden doorHangerRight\" id=\"editorFreeTextParamsToolbar\">\r\n              <div class=\"editorParamsToolbarContainer\">\r\n                <div class=\"editorParamsSetter\">\r\n                  <label for=\"editorFreeTextColor\" class=\"editorParamsLabel\"\r\n                    data-l10n-id=\"editor_free_text_font_color\">Font Color</label>\r\n                  <input type=\"color\" id=\"editorFreeTextColor\" class=\"editorParamsColor\" tabindex=\"100\">\r\n                </div>\r\n                <div class=\"editorParamsSetter\">\r\n                  <label for=\"editorFreeTextFontSize\" class=\"editorParamsLabel\"\r\n                    data-l10n-id=\"editor_free_text_font_size\">Font Size</label>\r\n                  <input type=\"range\" id=\"editorFreeTextFontSize\" class=\"editorParamsSlider\" value=\"10\" min=\"5\"\r\n                    max=\"100\" step=\"1\" tabindex=\"101\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"editorParamsToolbar hidden doorHangerRight\" id=\"editorInkParamsToolbar\">\r\n              <div class=\"editorParamsToolbarContainer\">\r\n                <div class=\"editorParamsSetter\">\r\n                  <label for=\"editorInkColor\" class=\"editorParamsLabel\" data-l10n-id=\"editor_ink_color\">Color</label>\r\n                  <input type=\"color\" id=\"editorInkColor\" class=\"editorParamsColor\" tabindex=\"102\">\r\n                </div>\r\n                <div class=\"editorParamsSetter\">\r\n                  <label for=\"editorInkThickness\" class=\"editorParamsLabel\"\r\n                    data-l10n-id=\"editor_ink_thickness\">Thickness</label>\r\n                  <input type=\"range\" id=\"editorInkThickness\" class=\"editorParamsSlider\" value=\"1\" min=\"1\" max=\"20\"\r\n                    step=\"1\" tabindex=\"103\">\r\n                </div>\r\n                <div class=\"editorParamsSetter\">\r\n                  <label for=\"editorInkOpacity\" class=\"editorParamsLabel\"\r\n                    data-l10n-id=\"editor_ink_opacity\">Opacity</label>\r\n                  <input type=\"range\" id=\"editorInkOpacity\" class=\"editorParamsSlider\" value=\"100\" min=\"1\" max=\"100\"\r\n                    step=\"1\" tabindex=\"104\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <pdf-secondary-toolbar #pdfSecondaryToolbarComponent [customSecondaryToolbar]=\"customSecondaryToolbar\"\r\n              [secondaryToolbarTop]=\"secondaryToolbarTop\" [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\r\n              [showPresentationModeButton]=\"showPresentationModeButton\" [showOpenFileButton]=\"showOpenFileButton\"\r\n              [showPrintButton]=\"showPrintButton && enablePrint\" [showDownloadButton]=\"showDownloadButton\"\r\n              [showPagingButtons]=\"showPagingButtons\"\r\n              [showRotateButton]=\"showRotateButton\" [showHandToolButton]=\"showHandToolButton\"\r\n              [showScrollingButton]=\"showScrollingButton\" [showSpreadButton]=\"showSpreadButton\"\r\n              [showPropertiesButton]=\"showPropertiesButton\" (spreadChange)=\"onSpreadChange($event)\"\r\n              (secondaryMenuIsEmpty)=\"onSecondaryMenuIsEmpty($event)\">\r\n            </pdf-secondary-toolbar>\r\n\r\n            <pdf-findbar [findbarLeft]=\"findbarLeft\" [findbarTop]=\"findbarTop\"\r\n              [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\" [showFindButton]=\"showFindButton || false\"\r\n              [customFindbarInputArea]=\"customFindbarInputArea\" [customFindbarButtons]=\"customFindbarButtons\"\r\n              [showFindCurrentPageOnly]=\"showFindCurrentPageOnly\" [showFindEntirePhrase]=\"showFindEntirePhrase\"\r\n              [showFindEntireWord]=\"showFindEntireWord\" [showFindFuzzySearch]=\"showFindFuzzySearch\"\r\n              [showFindHighlightAll]=\"showFindHighlightAll\" [showFindIgnoreAccents]=\"showFindIgnoreAccents\"\r\n              [showFindMatchCase]=\"showFindMatchCase\" [showFindMessages]=\"showFindMessages\"\r\n              [showFindPageRange]=\"showFindPageRange\" [showFindResultsCount]=\"showFindResultsCount\">\r\n            </pdf-findbar>\r\n\r\n            <pdf-context-menu></pdf-context-menu>\r\n\r\n            <div id=\"viewerContainer\" [style.top]=\"viewerPositionTop\" [style.backgroundColor]=\"backgroundColor\"\r\n              tabindex=\"0\">\r\n              <div class=\"unverified-signature-warning\" *ngIf=\"hasSignature && showUnverifiedSignatures\">\r\n                {{\r\n                'unverified_signature_warning'\r\n                | translate\r\n                : \"This PDF file contains a digital signature. The PDF viewer can't verify if the signature is valid.\r\n                Please download the file and open it in Acrobat Reader to verify the signature is valid.\"\r\n                | async\r\n                }}\r\n              </div>\r\n              <div class=\"modified-background-warning\" *ngIf=\"pdfBackground\">\r\n                {{\r\n                'modified_background_warning'\r\n                | translate: 'This PDF is rendered with a custom background. It does not look the way its author\r\n                intended it to look.'\r\n                | async\r\n                }}\r\n              </div>\r\n              <div id=\"viewer\" class=\"pdfViewer\" (dblclick)=\"zoomToPageWidth($event)\"></div>\r\n            </div>\r\n            <pdf-error-message></pdf-error-message>\r\n          </div>\r\n          <!-- mainContainer -->\r\n\r\n          <div id=\"dialogContainer\">\r\n            <pdf-password-dialog></pdf-password-dialog>\r\n            <pdf-document-properties-dialog></pdf-document-properties-dialog>\r\n            <pdf-prepare-printing-dialog></pdf-prepare-printing-dialog>\r\n          </div>\r\n          <!-- dialogContainer -->\r\n        </div>\r\n        <!-- outerContainer -->\r\n        <input type=\"file\" id=\"fileInput\" class=\"hidden\" />\r\n        <div id=\"printContainer\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #defaultFreeFloatingBar> </ng-template>\r\n", styles: ["#mainContainer.toolbar-hidden{margin-top:-30px}\n"], components: [{ type: i4.PdfDarkThemeComponent, selector: "pdf-dark-theme" }, { type: i5.PdfLightThemeComponent, selector: "pdf-light-theme" }, { type: i6.PdfAcroformDarkThemeComponent, selector: "pdf-acroform-dark-theme" }, { type: i7.PdfAcroformDefaultThemeComponent, selector: "pdf-acroform-default-theme" }, { type: i8.DynamicCssComponent, selector: "pdf-dynamic-css", inputs: ["zoom", "width"] }, { type: i9.PdfSidebarComponent, selector: "pdf-sidebar", inputs: ["sidebarPositionTop", "sidebarVisible", "mobileFriendlyZoomScale", "showSidebarButton", "customSidebar", "customThumbnail"], outputs: ["thumbnailDrawn"] }, { type: i10.PdfDummyComponentsComponent, selector: "pdf-dummy-components" }, { type: i11.PdfToolbarComponent, selector: "pdf-toolbar", inputs: ["customToolbar", "mobileFriendlyZoomScale", "primaryMenuVisible", "showBookmarkButton", "showDownloadButton", "showEditor", "showFindButton", "showHandToolButton", "showOpenFileButton", "showPrintButton", "showPagingButtons", "showPresentationModeButton", "showRotateButton", "showSecondaryToolbarButton", "showSidebarButton", "showZoomButtons", "textLayer", "toolbarMarginTop", "toolbarWidth", "zoomLevels"], outputs: ["onToolbarLoaded"] }, { type: i12.PdfSecondaryToolbarComponent, selector: "pdf-secondary-toolbar", inputs: ["customSecondaryToolbar", "secondaryToolbarTop", "mobileFriendlyZoomScale", "showPresentationModeButton", "showOpenFileButton", "showPrintButton", "showDownloadButton", "showPagingButtons", "showRotateButton", "showHandToolButton", "showScrollingButton", "showSpreadButton", "showPropertiesButton"], outputs: ["spreadChange", "secondaryMenuIsEmpty"] }, { type: i13.PdfFindbarComponent, selector: "pdf-findbar", inputs: ["showFindButton", "mobileFriendlyZoomScale", "findbarLeft", "findbarTop", "customFindbarInputArea", "customFindbar", "customFindbarButtons", "showFindHighlightAll", "showFindMatchCase", "showFindCurrentPageOnly", "showFindPageRange", "showFindEntireWord", "showFindEntirePhrase", "showFindIgnoreAccents", "showFindFuzzySearch", "showFindResultsCount", "showFindMessages"] }, { type: i14.PdfContextMenuComponent, selector: "pdf-context-menu" }, { type: i15.PdfErrorMessageComponent, selector: "pdf-error-message" }, { type: i16.PdfPasswordDialogComponent, selector: "pdf-password-dialog" }, { type: i17.PdfDocumentPropertiesDialogComponent, selector: "pdf-document-properties-dialog" }, { type: i18.PdfPreparePrintingDialogComponent, selector: "pdf-prepare-printing-dialog" }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], pipes: { "async": i2.AsyncPipe, "translate": i19.TranslatePipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: NgxExtendedPdfViewerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-extended-pdf-viewer', changeDetection: ChangeDetectionStrategy.OnPush, template: "<pdf-dark-theme *ngIf=\"theme === 'dark'\"></pdf-dark-theme>\r\n<pdf-light-theme *ngIf=\"theme === 'light'\"></pdf-light-theme>\r\n<pdf-acroform-dark-theme *ngIf=\"formTheme === 'dark'\"></pdf-acroform-dark-theme>\r\n<pdf-acroform-default-theme *ngIf=\"formTheme === 'light'\"></pdf-acroform-default-theme>\r\n\r\n<pdf-dynamic-css [zoom]=\"mobileFriendlyZoomScale\" [width]=\"toolbarWidthInPixels\"></pdf-dynamic-css>\r\n<ng-content *ngTemplateOutlet=\"customPdfViewer ? customPdfViewer : defaultPdfViewer\"></ng-content>\r\n\r\n<ng-template #defaultPdfViewer>\r\n  <div class=\"zoom\" [style.height]=\"minHeight ? minHeight : height\" #root>\r\n    <div class=\"html\">\r\n      <div class=\"body\" [style.backgroundColor]=\"backgroundColor\">\r\n        <div id=\"outerContainer\" (window:resize)=\"onResize()\">\r\n          <div class=\"free-floating-bar\" *ngIf=\"showFreeFloatingBar\">\r\n            <ng-content *ngTemplateOutlet=\"customFreeFloatingBar ? customFreeFloatingBar : defaultFreeFloatingBar\">\r\n            </ng-content>\r\n          </div>\r\n          <pdf-sidebar #pdfsidebar [sidebarVisible]=\"sidebarVisible || false\" [showSidebarButton]=\"showSidebarButton\"\r\n            [customSidebar]=\"customSidebar\" [customThumbnail]=\"customThumbnail\"\r\n            (thumbnailDrawn)=\"thumbnailDrawn.emit($event)\" [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\r\n            [sidebarPositionTop]=\"sidebarPositionTop\">\r\n          </pdf-sidebar>\r\n          <div id=\"mainContainer\" [class.toolbar-hidden]=\"!primaryMenuVisible\">\r\n            <pdf-dummy-components></pdf-dummy-components>\r\n\r\n            <pdf-toolbar [customToolbar]=\"customToolbar\" [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\r\n              [primaryMenuVisible]=\"primaryMenuVisible\"\r\n              [showDownloadButton]=\"showDownloadButton\" [showEditor]=\"showEditor\" [showFindButton]=\"showFindButton\"\r\n              [showHandToolButton]=\"showHandToolButton\" [showOpenFileButton]=\"showOpenFileButton\"\r\n              [showPrintButton]=\"showPrintButton && enablePrint\" [showPagingButtons]=\"showPagingButtons\"\r\n              [showPresentationModeButton]=\"showPresentationModeButton\" [showRotateButton]=\"showRotateButton\"\r\n              [showSecondaryToolbarButton]=\"showSecondaryToolbarButton && !hideKebabMenuForSecondaryToolbar\"\r\n              [showSidebarButton]=\"showSidebarButton\" [showZoomButtons]=\"showZoomButtons\" [textLayer]=\"textLayer\"\r\n              [toolbarMarginTop]=\"toolbarMarginTop\" [toolbarWidth]=\"toolbarWidth\"\r\n              (onToolbarLoaded)=\"onToolbarLoaded($event)\" [zoomLevels]=\"zoomLevels\"></pdf-toolbar>\r\n\r\n            <div class=\"editorParamsToolbar hidden doorHangerRight\" id=\"editorFreeTextParamsToolbar\">\r\n              <div class=\"editorParamsToolbarContainer\">\r\n                <div class=\"editorParamsSetter\">\r\n                  <label for=\"editorFreeTextColor\" class=\"editorParamsLabel\"\r\n                    data-l10n-id=\"editor_free_text_font_color\">Font Color</label>\r\n                  <input type=\"color\" id=\"editorFreeTextColor\" class=\"editorParamsColor\" tabindex=\"100\">\r\n                </div>\r\n                <div class=\"editorParamsSetter\">\r\n                  <label for=\"editorFreeTextFontSize\" class=\"editorParamsLabel\"\r\n                    data-l10n-id=\"editor_free_text_font_size\">Font Size</label>\r\n                  <input type=\"range\" id=\"editorFreeTextFontSize\" class=\"editorParamsSlider\" value=\"10\" min=\"5\"\r\n                    max=\"100\" step=\"1\" tabindex=\"101\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"editorParamsToolbar hidden doorHangerRight\" id=\"editorInkParamsToolbar\">\r\n              <div class=\"editorParamsToolbarContainer\">\r\n                <div class=\"editorParamsSetter\">\r\n                  <label for=\"editorInkColor\" class=\"editorParamsLabel\" data-l10n-id=\"editor_ink_color\">Color</label>\r\n                  <input type=\"color\" id=\"editorInkColor\" class=\"editorParamsColor\" tabindex=\"102\">\r\n                </div>\r\n                <div class=\"editorParamsSetter\">\r\n                  <label for=\"editorInkThickness\" class=\"editorParamsLabel\"\r\n                    data-l10n-id=\"editor_ink_thickness\">Thickness</label>\r\n                  <input type=\"range\" id=\"editorInkThickness\" class=\"editorParamsSlider\" value=\"1\" min=\"1\" max=\"20\"\r\n                    step=\"1\" tabindex=\"103\">\r\n                </div>\r\n                <div class=\"editorParamsSetter\">\r\n                  <label for=\"editorInkOpacity\" class=\"editorParamsLabel\"\r\n                    data-l10n-id=\"editor_ink_opacity\">Opacity</label>\r\n                  <input type=\"range\" id=\"editorInkOpacity\" class=\"editorParamsSlider\" value=\"100\" min=\"1\" max=\"100\"\r\n                    step=\"1\" tabindex=\"104\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <pdf-secondary-toolbar #pdfSecondaryToolbarComponent [customSecondaryToolbar]=\"customSecondaryToolbar\"\r\n              [secondaryToolbarTop]=\"secondaryToolbarTop\" [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\r\n              [showPresentationModeButton]=\"showPresentationModeButton\" [showOpenFileButton]=\"showOpenFileButton\"\r\n              [showPrintButton]=\"showPrintButton && enablePrint\" [showDownloadButton]=\"showDownloadButton\"\r\n              [showPagingButtons]=\"showPagingButtons\"\r\n              [showRotateButton]=\"showRotateButton\" [showHandToolButton]=\"showHandToolButton\"\r\n              [showScrollingButton]=\"showScrollingButton\" [showSpreadButton]=\"showSpreadButton\"\r\n              [showPropertiesButton]=\"showPropertiesButton\" (spreadChange)=\"onSpreadChange($event)\"\r\n              (secondaryMenuIsEmpty)=\"onSecondaryMenuIsEmpty($event)\">\r\n            </pdf-secondary-toolbar>\r\n\r\n            <pdf-findbar [findbarLeft]=\"findbarLeft\" [findbarTop]=\"findbarTop\"\r\n              [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\" [showFindButton]=\"showFindButton || false\"\r\n              [customFindbarInputArea]=\"customFindbarInputArea\" [customFindbarButtons]=\"customFindbarButtons\"\r\n              [showFindCurrentPageOnly]=\"showFindCurrentPageOnly\" [showFindEntirePhrase]=\"showFindEntirePhrase\"\r\n              [showFindEntireWord]=\"showFindEntireWord\" [showFindFuzzySearch]=\"showFindFuzzySearch\"\r\n              [showFindHighlightAll]=\"showFindHighlightAll\" [showFindIgnoreAccents]=\"showFindIgnoreAccents\"\r\n              [showFindMatchCase]=\"showFindMatchCase\" [showFindMessages]=\"showFindMessages\"\r\n              [showFindPageRange]=\"showFindPageRange\" [showFindResultsCount]=\"showFindResultsCount\">\r\n            </pdf-findbar>\r\n\r\n            <pdf-context-menu></pdf-context-menu>\r\n\r\n            <div id=\"viewerContainer\" [style.top]=\"viewerPositionTop\" [style.backgroundColor]=\"backgroundColor\"\r\n              tabindex=\"0\">\r\n              <div class=\"unverified-signature-warning\" *ngIf=\"hasSignature && showUnverifiedSignatures\">\r\n                {{\r\n                'unverified_signature_warning'\r\n                | translate\r\n                : \"This PDF file contains a digital signature. The PDF viewer can't verify if the signature is valid.\r\n                Please download the file and open it in Acrobat Reader to verify the signature is valid.\"\r\n                | async\r\n                }}\r\n              </div>\r\n              <div class=\"modified-background-warning\" *ngIf=\"pdfBackground\">\r\n                {{\r\n                'modified_background_warning'\r\n                | translate: 'This PDF is rendered with a custom background. It does not look the way its author\r\n                intended it to look.'\r\n                | async\r\n                }}\r\n              </div>\r\n              <div id=\"viewer\" class=\"pdfViewer\" (dblclick)=\"zoomToPageWidth($event)\"></div>\r\n            </div>\r\n            <pdf-error-message></pdf-error-message>\r\n          </div>\r\n          <!-- mainContainer -->\r\n\r\n          <div id=\"dialogContainer\">\r\n            <pdf-password-dialog></pdf-password-dialog>\r\n            <pdf-document-properties-dialog></pdf-document-properties-dialog>\r\n            <pdf-prepare-printing-dialog></pdf-prepare-printing-dialog>\r\n          </div>\r\n          <!-- dialogContainer -->\r\n        </div>\r\n        <!-- outerContainer -->\r\n        <input type=\"file\" id=\"fileInput\" class=\"hidden\" />\r\n        <div id=\"printContainer\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #defaultFreeFloatingBar> </ng-template>\r\n", styles: ["#mainContainer.toolbar-hidden{margin-top:-30px}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.NgZone }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }, { type: i1.PDFNotificationService }, { type: i2.Location }, { type: i0.ElementRef }, { type: i2.PlatformLocation }, { type: i0.ChangeDetectorRef }, { type: i3.NgxExtendedPdfViewerService }, { type: i0.Renderer2 }]; }, propDecorators: { dummyComponents: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL25neC1leHRlbmRlZC1wZGYtdmlld2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBOEIsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRixPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxZQUFZLEVBQ1osWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBS0wsTUFBTSxFQUNOLFdBQVcsRUFJWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFzQyxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQWlCckYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMvRixPQUFPLEVBQTRDLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBSWhHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUtwRyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBU3hDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUI3RCxTQUFTLEtBQUs7SUFDWixPQUFPLENBQ0wsQ0FBQyxnQkFBZ0Is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QkFEbkIsTUFBTTtnQkFJQSxTQUFTO3NCQURmLE1BQU07Z0JBSUEsZ0JBQWdCO3NCQUR0QixNQUFNO2dCQUlBLGdCQUFnQjtzQkFEdEIsTUFBTTtnQkFJQSxTQUFTO3NCQURmLEtBQUs7Z0JBSUMsaUJBQWlCO3NCQUR2QixNQUFNO2dCQUlBLHNCQUFzQjtzQkFENUIsTUFBTTtnQkFJQSxlQUFlO3NCQURyQixNQUFNO2dCQUtBLElBQUk7c0JBRFYsS0FBSztnQkFJQyxVQUFVO3NCQURoQixNQUFNO2dCQUlBLFVBQVU7c0JBRGhCLEtBQUs7Z0JBSUMsT0FBTztzQkFEYixLQUFLO2dCQUlDLE9BQU87c0JBRGIsS0FBSztnQkFXQyxXQUFXO3NCQURqQixLQUFLO2dCQXlDSyxrQkFBa0I7c0JBRDVCLEtBQUs7Z0JBcTJDQyxhQUFhO3NCQURuQixZQUFZO3VCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciwgTG9jYXRpb24sIFBsYXRmb3JtTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBQTEFURk9STV9JRCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQW5ub3RhdGlvbiB9IGZyb20gJy4vQW5ub3RhdGlvbic7XHJcbmltcG9ydCB7IFBkZkRvY3VtZW50TG9hZGVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9kb2N1bWVudC1sb2FkZWQtZXZlbnQnO1xyXG5pbXBvcnQgeyBGaWxlSW5wdXRDaGFuZ2VkIH0gZnJvbSAnLi9ldmVudHMvZmlsZS1pbnB1dC1jaGFuZ2VkJztcclxuaW1wb3J0IHsgRmluZFJlc3VsdCwgRmluZFJlc3VsdE1hdGNoZXNDb3VudCwgRmluZFN0YXRlIH0gZnJvbSAnLi9ldmVudHMvZmluZC1yZXN1bHQnO1xyXG5pbXBvcnQgeyBIYW5kdG9vbENoYW5nZWQgfSBmcm9tICcuL2V2ZW50cy9oYW5kdG9vbC1jaGFuZ2VkJztcclxuaW1wb3J0IHsgUGFnZU51bWJlckNoYW5nZSB9IGZyb20gJy4vZXZlbnRzL3BhZ2UtbnVtYmVyLWNoYW5nZSc7XHJcbmltcG9ydCB7IFBhZ2VSZW5kZXJFdmVudCB9IGZyb20gJy4vZXZlbnRzL3BhZ2UtcmVuZGVyLWV2ZW50JztcclxuaW1wb3J0IHsgUGFnZVJlbmRlcmVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9wYWdlLXJlbmRlcmVkLWV2ZW50JztcclxuaW1wb3J0IHsgUGFnZXNMb2FkZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL3BhZ2VzLWxvYWRlZC1ldmVudCc7XHJcbmltcG9ydCB7IFBhZ2VzUm90YXRpb25FdmVudCB9IGZyb20gJy4vZXZlbnRzL3BhZ2VzLXJvdGF0aW9uLWV2ZW50JztcclxuaW1wb3J0IHsgUGRmRG93bmxvYWRlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvcGRmLWRvd25sb2FkZWQtZXZlbnQnO1xyXG5pbXBvcnQgeyBQZGZMb2FkZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL3BkZi1sb2FkZWQtZXZlbnQnO1xyXG5pbXBvcnQgeyBQZGZMb2FkaW5nU3RhcnRzRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9wZGYtbG9hZGluZy1zdGFydHMtZXZlbnQnO1xyXG5pbXBvcnQgeyBQZGZUaHVtYm5haWxEcmF3bkV2ZW50IH0gZnJvbSAnLi9ldmVudHMvcGRmLXRodW1ibmFpbC1kcmF3bi1ldmVudCc7XHJcbmltcG9ydCB7IFByb2dyZXNzQmFyRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9wcm9ncmVzcy1iYXItZXZlbnQnO1xyXG5pbXBvcnQgeyBTY2FsZUNoYW5naW5nRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9zY2FsZS1jaGFuZ2luZy1ldmVudCc7XHJcbmltcG9ydCB7IFNpZGViYXJ2aWV3Q2hhbmdlIH0gZnJvbSAnLi9ldmVudHMvc2lkZWJhcnZpZXctY2hhbmdlZCc7XHJcbmltcG9ydCB7IFRleHRMYXllclJlbmRlcmVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy90ZXh0bGF5ZXItcmVuZGVyZWQnO1xyXG5pbXBvcnQgeyBOZ3hFeHRlbmRlZFBkZlZpZXdlclNlcnZpY2UgfSBmcm9tICcuL25neC1leHRlbmRlZC1wZGYtdmlld2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQZGZCYWNrZ3JvdW5kIH0gZnJvbSAnLi9vcHRpb25zL3BkZi1iYWNrZ3JvdW5kJztcclxuaW1wb3J0IHsgUGRmQ3Vyc29yVG9vbHMgfSBmcm9tICcuL29wdGlvbnMvcGRmLWN1cnNvci10b29scyc7XHJcbmltcG9ydCB7IGFzc2V0c1VybCwgZ2V0VmVyc2lvblN1ZmZpeCwgcGRmRGVmYXVsdE9wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMvcGRmLWRlZmF1bHQtb3B0aW9ucyc7XHJcbmltcG9ydCB7IFBhZ2VWaWV3TW9kZVR5cGUsIFNjcm9sbE1vZGVDaGFuZ2VkRXZlbnQsIFNjcm9sbE1vZGVUeXBlIH0gZnJvbSAnLi9vcHRpb25zL3BkZi12aWV3ZXInO1xyXG5pbXBvcnQgeyBJUERGVmlld2VyQXBwbGljYXRpb24gfSBmcm9tICcuL29wdGlvbnMvcGRmLXZpZXdlci1hcHBsaWNhdGlvbic7XHJcbmltcG9ydCB7IElQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMvcGRmLXZpZXdlci1hcHBsaWNhdGlvbi1vcHRpb25zJztcclxuaW1wb3J0IHsgU2VydmljZVdvcmtlck9wdGlvbnNUeXBlIH0gZnJvbSAnLi9vcHRpb25zL3NlcnZpY2Utd29ya2VyLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBWZXJib3NpdHlMZXZlbCB9IGZyb20gJy4vb3B0aW9ucy92ZXJib3NpdHktbGV2ZWwnO1xyXG5pbXBvcnQgeyBQZGZEdW1teUNvbXBvbmVudHNDb21wb25lbnQgfSBmcm9tICcuL3BkZi1kdW1teS1jb21wb25lbnRzL3BkZi1kdW1teS1jb21wb25lbnRzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBERk5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL3BkZi1ub3RpZmljYXRpb24tc2VydmljZSc7XHJcbmltcG9ydCB7IFBpbmNoT25Nb2JpbGVTdXBwb3J0IH0gZnJvbSAnLi9waW5jaC1vbi1tb2JpbGUtc3VwcG9ydCc7XHJcbmltcG9ydCB7IFBkZlNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3NlY29uZGFyeS10b29sYmFyL3BkZi1zZWNvbmRhcnktdG9vbGJhci9wZGYtc2Vjb25kYXJ5LXRvb2xiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci9wZGYtc2lkZWJhci9wZGYtc2lkZWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVbml0VG9QeCB9IGZyb20gJy4vdW5pdC10by1weCc7XHJcblxyXG5pbXBvcnQgeyBUcnVzdGVkVHlwZXNXaW5kb3cgfSBmcm9tICd0cnVzdGVkLXR5cGVzL2xpYic7XHJcbmltcG9ydCB7IEFubm90YXRpb25FZGl0b3JMYXllclJlbmRlcmVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9hbm5vdGF0aW9uLWVkaXRvci1sYXllci1yZW5kZXJlZC1ldmVudCc7XHJcbmltcG9ydCB7IEFubm90YXRpb25MYXllclJlbmRlcmVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9hbm5vdGF0aW9uLWxheWVyLXJlbmRlcmVkLWV2ZW50JztcclxuaW1wb3J0IHsgQXR0YWNobWVudExvYWRlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvYXR0YWNobWVudC1sb2FkZWQtZXZlbnQnO1xyXG5pbXBvcnQgeyBMYXllcnNMb2FkZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL2xheWVycy1sb2FkZWQtZXZlbnQnO1xyXG5pbXBvcnQgeyBPdXRsaW5lTG9hZGVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9vdXRsaW5lLWxvYWRlZC1ldmVudCc7XHJcbmltcG9ydCB7IFhmYUxheWVyUmVuZGVyZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL3hmYS1sYXllci1yZW5kZXJlZC1ldmVudCc7XHJcbmltcG9ydCB7IFBkZlNpZGViYXJWaWV3IH0gZnJvbSAnLi9vcHRpb25zL3BkZi1zaWRlYmFyLXZpZXdzJztcclxuaW1wb3J0IHsgUmVsYXRpdmVDb29yZHNTdXBwb3J0IH0gZnJvbSAnLi9yZWxhdGl2ZS1jb29yZHMtc3VwcG9ydCc7XHJcblxyXG5kZWNsYXJlIGNvbnN0IFNlcnZpY2VXb3JrZXJPcHRpb25zOiBTZXJ2aWNlV29ya2VyT3B0aW9uc1R5cGU7IC8vIGRlZmluZWQgaW4gdmlld2VyLmpzXHJcbmRlY2xhcmUgY2xhc3MgUmVzaXplT2JzZXJ2ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHBhcmFtOiAoKSA9PiB2b2lkKTtcclxuICBwdWJsaWMgb2JzZXJ2ZShkaXY6IEhUTUxFbGVtZW50KTtcclxufVxyXG5cclxuaW50ZXJmYWNlIEVsZW1lbnRBbmRQb3NpdGlvbiB7XHJcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgeDogbnVtYmVyO1xyXG4gIHk6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGb3JtRGF0YVR5cGUge1xyXG4gIFtmaWVsZE5hbWU6IHN0cmluZ106IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfCBzdHJpbmdbXTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNJT1MoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIFsnaVBhZCBTaW11bGF0b3InLCAnaVBob25lIFNpbXVsYXRvcicsICdpUG9kIFNpbXVsYXRvcicsICdpUGFkJywgJ2lQaG9uZScsICdpUG9kJ10uaW5jbHVkZXMobmF2aWdhdG9yLnBsYXRmb3JtKSB8fFxyXG4gICAgLy8gaVBhZCBvbiBpT1MgMTMgZGV0ZWN0aW9uXHJcbiAgICAobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcygnTWFjJykgJiYgJ29udG91Y2hlbmQnIGluIGRvY3VtZW50KVxyXG4gICk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuY29tcG9uZW50LmNzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBwcml2YXRlIHN0YXRpYyBvcmlnaW5hbFByaW50ID0gd2luZG93LnByaW50O1xyXG5cclxuICBwdWJsaWMgc3RhdGljIG5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICBwdWJsaWMgbmd4RXh0ZW5kZWRQZGZWaWV3ZXJJbmNvbXBsZXRlbHlJbml0aWFsaXplZCA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBkdW1teSBjb21wb25lbnRzIGFyZSBpbnNlcnRlZCBhdXRvbWF0aWNhbGx5IHdoZW4gdGhlIHVzZXIgY3VzdG9taXplcyB0aGUgdG9vbGJhclxyXG4gICAqIHdpdGhvdXQgYWRkaW5nIGV2ZXJ5IG9yaWdpbmFsIHRvb2xiYXIgaXRlbS4gV2l0aG91dCB0aGUgZHVtbXkgY29tcG9uZW50cywgdGhlXHJcbiAgICogaW5pdGlhbGl6YXRpb24gY29kZSBvZiBwZGYuanMgY3Jhc2hlcyBiZWNhdXNlIGl0IGFzc3VtZSB0aGF0IGV2ZXJ5IHN0YW5kYXJkIHdpZGdldCBpcyB0aGVyZS5cclxuICAgKi9cclxuICBAVmlld0NoaWxkKFBkZkR1bW15Q29tcG9uZW50c0NvbXBvbmVudClcclxuICBwdWJsaWMgZHVtbXlDb21wb25lbnRzOiBQZGZEdW1teUNvbXBvbmVudHNDb21wb25lbnQ7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3Jvb3QnKVxyXG4gIHB1YmxpYyByb290OiBFbGVtZW50UmVmO1xyXG5cclxuICBwcml2YXRlIHBpbmNoT25Nb2JpbGVTdXBwb3J0OiBQaW5jaE9uTW9iaWxlU3VwcG9ydCB8IHVuZGVmaW5lZDtcclxuICBwdWJsaWMgcmVsYXRpdmVDb29yZHNTdXBwb3J0OiBSZWxhdGl2ZUNvb3Jkc1N1cHBvcnQgfCB1bmRlZmluZWQ7XHJcblxyXG4gIC8qIFVJIHRlbXBsYXRlcyAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbUZpbmRiYXJJbnB1dEFyZWE6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbVRvb2xiYXI6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbUZpbmRiYXI6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbUZpbmRiYXJCdXR0b25zOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjdXN0b21QZGZWaWV3ZXI6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbVNlY29uZGFyeVRvb2xiYXI6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbVNpZGViYXI6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbVRodW1ibmFpbDogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY3VzdG9tRnJlZUZsb2F0aW5nQmFyOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RnJlZUZsb2F0aW5nQmFyID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZW5hYmxlRHJhZ0FuZERyb3AgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBmb3JtRGF0YTogRm9ybURhdGFUeXBlID0ge307XHJcblxyXG4gIC8qKiBNYXBzIHRoZSBpbnRlcm5hbCBpZHMgb2YgdGhlIGFubm90YXRpb25zIG9mIHBkZi5qcyB0byB0aGVpciBmaWVsZCBuYW1lICovXHJcbiAgcHJpdmF0ZSBmb3JtSWRUb0ZpZWxkTmFtZSA9IHt9O1xyXG4gIHByaXZhdGUgZm9ybVJhZGlvQnV0dG9uVmFsdWVUb0lkID0ge307XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBmb3JtRGF0YUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9ybURhdGFUeXBlPigpO1xyXG5cclxuICBwdWJsaWMgX3BhZ2VWaWV3TW9kZTogUGFnZVZpZXdNb2RlVHlwZSA9ICdtdWx0aXBsZSc7XHJcblxyXG4gIHB1YmxpYyBiYXNlSHJlZjogc3RyaW5nO1xyXG5cclxuICAvKiogVGhpcyBmbGFnIHByZXZlbnRzIHRyeWluZyB0byBsb2FkIGEgZmlsZSB0d2ljZSBpZiB0aGUgdXNlciB1cGxvYWRzIGl0IHVzaW5nIHRoZSBmaWxlIHVwbG9hZCBkaWFsb2cgb3IgdmlhIGRyYWcnbidkcm9wICovXHJcbiAgcHJpdmF0ZSBzcmNDaGFuZ2VUcmlnZ2VyZWRCeVVzZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIGdldCBwYWdlVmlld01vZGUoKTogUGFnZVZpZXdNb2RlVHlwZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFnZVZpZXdNb2RlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IHBhZ2VWaWV3TW9kZSh2aWV3TW9kZTogUGFnZVZpZXdNb2RlVHlwZSkge1xyXG4gICAgdGhpcy5fcGFnZVZpZXdNb2RlID0gdmlld01vZGU7XHJcbiAgICBpZiAodmlld01vZGUgPT09ICdpbmZpbml0ZS1zY3JvbGwnKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsTW9kZSA9IFNjcm9sbE1vZGVUeXBlLnZlcnRpY2FsO1xyXG4gICAgICB0aGlzLnNwcmVhZCA9ICdvZmYnO1xyXG4gICAgfSBlbHNlIGlmICh2aWV3TW9kZSAhPT0gJ211bHRpcGxlJykge1xyXG4gICAgICB0aGlzLnNjcm9sbE1vZGUgPSBTY3JvbGxNb2RlVHlwZS52ZXJ0aWNhbDtcclxuICAgIH1cclxuICAgIGlmICh2aWV3TW9kZSA9PT0gJ3NpbmdsZScpIHtcclxuICAgICAgLy8gc2luY2UgcGRmLmpzLCBvdXIgY3VzdG9tIHNpbmdsZS1wYWdlLW1vZGUgaGFzIGJlZW4gcmVwbGFjZWQgYnkgdGhlIHN0YW5kYXJkIHNjcm9sbE1vZGU9XCJwYWdlXCJcclxuICAgICAgdGhpcy5zY3JvbGxNb2RlID0gU2Nyb2xsTW9kZVR5cGUucGFnZTtcclxuICAgICAgdGhpcy5fcGFnZVZpZXdNb2RlID0gJ211bHRpcGxlJztcclxuICAgIH1cclxuICAgIGlmICh2aWV3TW9kZSA9PT0gJ2Jvb2snKSB7XHJcbiAgICAgIHRoaXMuc2hvd0JvcmRlcnMgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBwcm9ncmVzcyA9IG5ldyBFdmVudEVtaXR0ZXI8UHJvZ3Jlc3NCYXJFdmVudD4oKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgncGRmU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudCcpXHJcbiAgcHJpdmF0ZSBzZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50OiBQZGZTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50O1xyXG5cclxuICBAVmlld0NoaWxkKCdwZGZzaWRlYmFyJylcclxuICBwcml2YXRlIHNpZGViYXJDb21wb25lbnQ6IFBkZlNpZGViYXJDb21wb25lbnQ7XHJcblxyXG4gIC8qIHJlZ3VsYXIgYXR0cmlidXRlcyAqL1xyXG5cclxuICBwcml2YXRlIF9zcmM6IHN0cmluZyB8IEFycmF5QnVmZmVyIHwgVWludDhBcnJheSB8IHsgcmFuZ2U6IGFueSB9IHwgdW5kZWZpbmVkO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgc3JjQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNjcm9sbE1vZGU6IFNjcm9sbE1vZGVUeXBlIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgc2Nyb2xsTW9kZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8U2Nyb2xsTW9kZVR5cGU+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGF1dGhvcml6YXRpb246IE9iamVjdCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgaHR0cEhlYWRlcnM6IE9iamVjdCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY29udGV4dE1lbnVBbGxvd2VkID0gdHJ1ZTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGFmdGVyUHJpbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBiZWZvcmVQcmludCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGN1cnJlbnRab29tRmFjdG9yID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gIC8qKiBUaGlzIGZpZWxkIHN0b3JlcyB0aGUgcHJldmlvdXMgem9vbSBsZXZlbCBpZiB0aGUgcGFnZSBpcyBlbmxhcmdlZCB3aXRoIGEgZG91YmxlLXRhcCBvciBkb3VibGUtY2xpY2sgKi9cclxuICBwcml2YXRlIHByZXZpb3VzWm9vbTogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBlbmFibGVQcmludCA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIE51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gd2FpdCBiZXR3ZWVuIGluaXRpYWxpemluZyB0aGUgUERGIHZpZXdlciBhbmQgbG9hZGluZyB0aGUgUERGIGZpbGUuXHJcbiAgICogTW9zdCB1c2VycyBjYW4gbGV0IHRoaXMgcGFyYW1ldGVyIHNhZmVseSBhdCBpdCdzIGRlZmF1bHQgdmFsdWUgb2YgemVyby5cclxuICAgKiBTZXQgdGhpcyB0byAxMDAwIG9yIGhpZ2hlciBpZiB5b3UgcnVuIGludG8gdGltaW5nIHByb2JsZW1zICh0eXBpY2FsbHkgY2F1c2VkIGJ5IGxvYWRpbmcgdGhlIGxvY2FsZSBmaWxlc1xyXG4gICAqIGFmdGVyIHRoZSBQREYgZmlsZXMsIHNvIHRoZXkgYXJlIG5vdCBhdmFpbGFibGUgd2hlbiB0aGUgUERGIHZpZXdlciBpcyBpbml0aWFsaXplZCkuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZGVsYXlGaXJzdFZpZXcgPSAwO1xyXG5cclxuICAvKiogU2hvd3Mgb3IgaGlkZXMgdGhlIGVkaXRvciBidXR0b25zICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0VkaXRvciA9IHRydWU7XHJcblxyXG4gIC8qKiBzdG9yZSB0aGUgdGltZW91dCBpZCBzbyBpdCBjYW4gYmUgY2FuY2VsZWQgaWYgdXNlciBsZWF2ZXMgdGhlIHBhZ2UgYmVmb3JlIHRoZSBQREYgaXMgc2hvd24gKi9cclxuICBwcml2YXRlIGluaXRUaW1lb3V0OiBhbnk7XHJcblxyXG4gIC8qKiBIb3cgbWFueSBsb2cgbWVzc2FnZXMgc2hvdWxkIGJlIHByaW50ZWQ/XHJcbiAgICogTGVnYWwgdmFsdWVzOiBWZXJib3NpdHlMZXZlbC5JTkZPUyAoPSA1KSwgVmVyYm9zaXR5TGV2ZWwuV0FSTklOR1MgKD0gMSksIFZlcmJvc2l0eUxldmVsLkVSUk9SUyAoPSAwKSAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGxvZ0xldmVsID0gVmVyYm9zaXR5TGV2ZWwuV0FSTklOR1M7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHJlbGF0aXZlQ29vcmRzT3B0aW9uczogT2JqZWN0ID0ge307XHJcblxyXG4gIC8qKiBVc2UgdGhlIG1pbmlmaWVkIChtaW5pZmllZEpTTGlicmFyaWVzPVwidHJ1ZVwiLCB3aGljaCBpcyB0aGUgZGVmYXVsdCkgb3IgdGhlIHVzZXItcmVhZGFibGUgcGRmLmpzIGxpYnJhcnkgKG1pbmlmaWVkSlNMaWJyYXJpZXM9XCJmYWxzZVwiKSAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIG1pbmlmaWVkSlNMaWJyYXJpZXMgPSB0cnVlO1xyXG5cclxuICBwdWJsaWMgcHJpbWFyeU1lbnVWaXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgLyoqIG9wdGlvbiB0byBpbmNyZWFzZSAob3IgcmVkdWNlKSBwcmludCByZXNvbHV0aW9uLiBEZWZhdWx0IGlzIDE1MCAoZHBpKS4gU2Vuc2libGUgdmFsdWVzXHJcbiAgICogYXJlIDMwMCwgNjAwLCBhbmQgMTIwMC4gTm90ZSB0aGUgaW5jcmVhc2UgbWVtb3J5IGNvbnN1bXB0aW9uLCB3aGljaCBtYXkgZXZlbiByZXN1bHQgaW4gYSBicm93c2VyIGNyYXNoLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHByaW50UmVzb2x1dGlvbiA9IG51bGw7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHJvdGF0aW9uOiAwIHwgOTAgfCAxODAgfCAyNzA7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyByb3RhdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8MCB8IDkwIHwgMTgwIHwgMjcwPigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgYW5ub3RhdGlvbkxheWVyUmVuZGVyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEFubm90YXRpb25MYXllclJlbmRlcmVkRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBhbm5vdGF0aW9uRWRpdG9yTGF5ZXJSZW5kZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8QW5ub3RhdGlvbkVkaXRvckxheWVyUmVuZGVyZWRFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHhmYUxheWVyUmVuZGVyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFhmYUxheWVyUmVuZGVyZWRFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIG91dGxpbmVMb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPE91dGxpbmVMb2FkZWRFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGF0dGFjaG1lbnRzbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxBdHRhY2htZW50TG9hZGVkRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBsYXllcnNsb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPExheWVyc0xvYWRlZEV2ZW50PigpO1xyXG5cclxuICBwdWJsaWMgaGFzU2lnbmF0dXJlOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgc3JjKHVybDogc3RyaW5nIHwgQXJyYXlCdWZmZXIgfCBCbG9iIHwgVWludDhBcnJheSB8IFVSTCB8IHsgcmFuZ2U6IGFueSB9KSB7XHJcbiAgICBpZiAodXJsIGluc3RhbmNlb2YgVWludDhBcnJheSkge1xyXG4gICAgICB0aGlzLl9zcmMgPSB1cmwuYnVmZmVyO1xyXG4gICAgfSBlbHNlIGlmICh1cmwgaW5zdGFuY2VvZiBVUkwpIHtcclxuICAgICAgdGhpcy5fc3JjID0gdXJsLnRvU3RyaW5nKCk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJyAmJiB1cmwgaW5zdGFuY2VvZiBCbG9iKSB7XHJcbiAgICAgIC8vIGFkZGl0aW9uYWwgY2hlY2sgaW50cm9kdWNlZCB0byBzdXBwb3J0IHNlcnZlciBzaWRlIHJlbmRlcmluZ1xyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zcmMgPSBuZXcgVWludDhBcnJheShyZWFkZXIucmVzdWx0IGFzIEFycmF5QnVmZmVyKTtcclxuICAgICAgICAgIGlmIChOZ3hFeHRlbmRlZFBkZlZpZXdlckNvbXBvbmVudC5uZ3hFeHRlbmRlZFBkZlZpZXdlckluaXRpYWxpemVkKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5neEV4dGVuZGVkUGRmVmlld2VySW5jb21wbGV0ZWx5SW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgICB0aGlzLm9wZW5QREYoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAoYXN5bmMgKCkgPT4gdGhpcy5vcGVuUERGMigpKSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGVsc2Ugb3BlblBERiBpcyBjYWxsZWQgbGF0ZXIsIHNvIHdlIGRvIG5vdGhpbmcgdG8gcHJldmVudCBsb2FkaW5nIHRoZSBQREYgZmlsZSB0d2ljZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG4gICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIodXJsKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHVybCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdGhpcy5fc3JjID0gdXJsO1xyXG4gICAgICBpZiAodXJsLmxlbmd0aCA+IDk4MCkge1xyXG4gICAgICAgIC8vIG1pbmltYWwgbGVuZ3RoIG9mIGEgYmFzZTY0IGVuY29kZWQgUERGXHJcbiAgICAgICAgaWYgKHVybC5sZW5ndGggJSA0ID09PSAwKSB7XHJcbiAgICAgICAgICBpZiAoL15bYS16QS1aXFxkXFwvK10rPXswLDJ9JC8udGVzdCh1cmwpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBVUkwgbG9va3MgbGlrZSBhIGJhc2U2NCBlbmNvZGVkIHN0cmluZy4gSWYgc28sIHBsZWFzZSB1c2UgdGhlIGF0dHJpYnV0ZSBbYmFzZTY0U3JjXSBpbnN0ZWFkIG9mIFtzcmNdJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAodGhpcy5fc3JjIGFzIGFueSkgPSB1cmw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgYmFzZTY0U3JjKGJhc2U2NDogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKGJhc2U2NCkge1xyXG4gICAgICBjb25zdCBiaW5hcnlfc3RyaW5nID0gd2luZG93LmF0b2IoYmFzZTY0KTtcclxuICAgICAgY29uc3QgbGVuID0gYmluYXJ5X3N0cmluZy5sZW5ndGg7XHJcbiAgICAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobGVuKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgIGJ5dGVzW2ldID0gYmluYXJ5X3N0cmluZy5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc3JjID0gYnl0ZXMuYnVmZmVyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fc3JjID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGNvbWJpbmF0aW9uIG9mIGhlaWdodCwgbWluSGVpZ2h0LCBhbmQgYXV0b0hlaWdodCBlbnN1cmVzIHRoZSBQREYgaGVpZ2h0IG9mIHRoZSBQREYgdmlld2VyIGlzIGNhbGN1bGF0ZWQgY29ycmVjdGx5IHdoZW4gdGhlIGhlaWdodCBpcyBhIHBlcmNlbnRhZ2UuXHJcbiAgICogQnkgZGVmYXVsdCwgbWFueSBDU1MgZnJhbWV3b3JrcyBtYWtlIGEgZGl2IHdpdGggMTAwJSBoYXZlIGEgaGVpZ2h0IG9yIHplcm8gcGl4ZWxzLiBjaGVja0hlaWd0aCgpIGZpeGVzIHRoaXMuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBhdXRvSGVpZ2h0ID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIG1pbkhlaWdodDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBwcml2YXRlIF9oZWlnaHQgPSAnMTAwJSc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCBoZWlnaHQoaDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm1pbkhlaWdodCA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuYXV0b0hlaWdodCA9IGZhbHNlO1xyXG4gICAgaWYgKGgpIHtcclxuICAgICAgdGhpcy5faGVpZ2h0ID0gaDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2hlY2tIZWlnaHQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBoZWlnaHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdXNlQnJvd3NlckxvY2FsZTogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgcHVibGljIGdldCB1c2VCcm93c2VyTG9jYWxlKCkge1xyXG4gICAgcmV0dXJuICEhdGhpcy5fdXNlQnJvd3NlckxvY2FsZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIElmIHRoaXMgZmxhZyBpcyB0cnVlLCB0aGlzIGNvbXBvbmVudHMgYWRkcyBhIGxpbmsgdG8gdGhlIGxvY2FsZSBhc3NldHMuIFRoZSBwZGYgdmlld2VyXHJcbiAgICogc2VlcyB0aGlzIGxpbmsgYW5kIHVzZXMgaXQgdG8gbG9hZCB0aGUgbG9jYWxlIGZpbGVzIGF1dG9tYXRpY2FsbHkuXHJcbiAgICogQHBhcmFtIHVzZUJyb3dzZXJMb2NhbGUgYm9vbGVhblxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCB1c2VCcm93c2VyTG9jYWxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl91c2VCcm93c2VyTG9jYWxlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBmb3JjZVVzaW5nTGVnYWN5RVM1ID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGJhY2tncm91bmRDb2xvciA9ICcjZThlOGViJztcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgcGRmQmFja2dyb3VuZDogUGRmQmFja2dyb3VuZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgcGRmQmFja2dyb3VuZENvbG9yVG9SZXBsYWNlOiBzdHJpbmcgfCAoKHBhZ2U6IG51bWJlciwgcGFnZUxhYmVsOiBzdHJpbmcpID0+IHN0cmluZyB8IHVuZGVmaW5lZCkgfCB1bmRlZmluZWQgPSAnI2ZmZmZmZic7XHJcblxyXG4gIC8qKiBBbGxvd3MgdGhlIHVzZXIgdG8gZGVmaW5lIHRoZSBuYW1lIG9mIHRoZSBmaWxlIGFmdGVyIGNsaWNraW5nIFwiZG93bmxvYWRcIiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGZpbGVuYW1lRm9yRG93bmxvYWQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgLyoqIEFsbG93cyB0aGUgdXNlciB0byBkaXNhYmxlIHRoZSBrZXlib2FyZCBiaW5kaW5ncyBjb21wbGV0ZWx5ICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgaWdub3JlS2V5Ym9hcmQgPSBmYWxzZTtcclxuXHJcbiAgLyoqIEFsbG93cyB0aGUgdXNlciB0byBkaXNhYmxlIGEgbGlzdCBvZiBrZXkgYmluZGluZ3MuICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgaWdub3JlS2V5czogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG5cclxuICAvKiogQWxsb3dzIHRoZSB1c2VyIHRvIGVuYWJsZSBhIGxpc3Qgb2Yga2V5IGJpbmRpbmdzIGV4cGxpY2l0bHkuIElmIHRoaXMgcHJvcGVydHkgaXMgc2V0LCBldmVyeSBvdGhlciBrZXkgYmluZGluZyBpcyBpZ25vcmVkLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGFjY2VwdEtleXM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuXHJcbiAgLyoqIEFsbG93cyB0aGUgdXNlciB0byBwdXQgdGhlIHZpZXdlcidzIHN2ZyBpbWFnZXMgaW50byBhbiBhcmJpdHJhcnkgZm9sZGVyICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgaW1hZ2VSZXNvdXJjZXNQYXRoID0gYXNzZXRzVXJsKHBkZkRlZmF1bHRPcHRpb25zLmFzc2V0c0ZvbGRlcikgKyAnL2ltYWdlcy8nO1xyXG5cclxuICAvKiogQWxsb3dzIHRoZSB1c2VyIHRvIHB1dCB0aGVpciBsb2NhbGUgZm9sZGVyIGludG8gYW4gYXJiaXRyYXJ5IGZvbGRlciAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGxvY2FsZUZvbGRlclBhdGggPSBhc3NldHNVcmwocGRmRGVmYXVsdE9wdGlvbnMuYXNzZXRzRm9sZGVyKSArICcvbG9jYWxlJztcclxuXHJcbiAgLyoqIE92ZXJyaWRlIHRoZSBkZWZhdWx0IGxvY2FsZS4gVGhpcyBtdXN0IGJlIHRoZSBjb21wbGV0ZSBsb2NhbGUgbmFtZSwgc3VjaCBhcyBcImVzLUVTXCIuIFRoZSBzdHJpbmcgaXMgYWxsb3dlZCB0byBiZSBhbGwgbG93ZXJjYXNlLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGxhbmd1YWdlOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIC8qKiBCeSBkZWZhdWx0LCBsaXN0ZW5pbmcgdG8gdGhlIFVSTCBpcyBkZWFjdGl2YXRlZCBiZWNhdXNlIG9mdGVuIHRoZSBhbmNob3IgdGFnIGlzIHVzZWQgZm9yIHRoZSBBbmd1bGFyIHJvdXRlciAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGxpc3RlblRvVVJMID0gZmFsc2U7XHJcblxyXG4gIC8qKiBOYXZpZ2F0ZSB0byBhIGNlcnRhaW4gXCJuYW1lZCBkZXN0aW5hdGlvblwiICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbmFtZWRkZXN0OiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIC8qKiBhbGxvd3MgeW91IHRvIHBhc3MgYSBwYXNzd29yZCB0byByZWFkIHBhc3N3b3JkLXByb3RlY3RlZCBmaWxlcyAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHBhc3N3b3JkOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHJlcGxhY2VCcm93c2VyUHJpbnQgPSB0aGlzLnBkZkpzVmVyc2lvbiA+PSAnMy4wJztcclxuXHJcbiAgcHVibGljIF9zaG93U2lkZWJhckJ1dHRvbiA9IHRydWU7XHJcblxyXG4gIHB1YmxpYyB2aWV3ZXJQb3NpdGlvblRvcCA9ICczMnB4JztcclxuXHJcbiAgLyoqIHBkZi5qcyBjYW4gc2hvdyBzaWduYXR1cmVzLCBidXQgZmFpbHMgdG8gdmVyaWZ5IHRoZW0uIFNvIHRoZXkgYXJlIHN3aXRjaGVkIG9mZiBieSBkZWZhdWx0LlxyXG4gICAqIFNldCBcIltzaG93VW52ZXJpZmllZFNpZ25hdHVyZXNdXCI9XCJ0cnVlXCIgdG8gZGlzcGxheSBlLXNpZ25hdHVyZXMgbm9uZXRoZWxlc3MuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1VudmVyaWZpZWRTaWduYXR1cmVzID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHN0YXJ0VGFiaW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuXHJcbiAgcHVibGljIGdldCBzaG93U2lkZWJhckJ1dHRvbigpIHtcclxuICAgIHJldHVybiB0aGlzLl9zaG93U2lkZWJhckJ1dHRvbjtcclxuICB9XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IHNob3dTaWRlYmFyQnV0dG9uKHNob3c6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3Nob3dTaWRlYmFyQnV0dG9uID0gc2hvdztcclxuICAgIGNvbnN0IGlzSUUgPSAvbXNpZVxcc3x0cmlkZW50XFwvL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcbiAgICBsZXQgZmFjdG9yID0gMTtcclxuICAgIGlmIChpc0lFKSB7XHJcbiAgICAgIGZhY3RvciA9IE51bWJlcigodGhpcy5fbW9iaWxlRnJpZW5kbHlab29tIHx8ICcxMDAnKS5yZXBsYWNlKCclJywgJycpKSAvIDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fc2hvd1NpZGViYXJCdXR0b24pIHtcclxuICAgICAgdGhpcy5maW5kYmFyTGVmdCA9ICg2OCAqIGZhY3RvcikudG9TdHJpbmcoKSArICdweCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZpbmRiYXJMZWZ0ID0gJzBweCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaWRlYmFyVmlzaWJsZTogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHNpZGViYXJWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBhY3RpdmVTaWRlYmFyVmlldzogUGRmU2lkZWJhclZpZXcgPSBQZGZTaWRlYmFyVmlldy5PVVRMSU5FO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgYWN0aXZlU2lkZWJhclZpZXdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFBkZlNpZGViYXJWaWV3PigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZEJ1dHRvbjogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0ZpbmRIaWdobGlnaHRBbGwgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZE1hdGNoQ2FzZSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGaW5kQ3VycmVudFBhZ2VPbmx5ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0ZpbmRQYWdlUmFuZ2UgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZEVudGlyZVdvcmQgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZEVudGlyZVBocmFzZSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGaW5kSWdub3JlQWNjZW50cyA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGaW5kRnV6enlTZWFyY2ggPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZFJlc3VsdHNDb3VudCA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGaW5kTWVzc2FnZXMgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93UGFnaW5nQnV0dG9ucyA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dab29tQnV0dG9ucyA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dQcmVzZW50YXRpb25Nb2RlQnV0dG9uID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dPcGVuRmlsZUJ1dHRvbiA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dQcmludEJ1dHRvbiA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dEb3dubG9hZEJ1dHRvbiA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHRoZW1lOiAnZGFyaycgfCAnbGlnaHQnIHwgJ2N1c3RvbScgfCBzdHJpbmcgPSAnbGlnaHQnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBmb3JtVGhlbWU6ICdkYXJrJyB8ICdsaWdodCcgfCAnY3VzdG9tJyB8IHN0cmluZyA9ICdsaWdodCc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dUb29sYmFyID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1NlY29uZGFyeVRvb2xiYXJCdXR0b24gPSB0cnVlO1xyXG5cclxuICAvKiogU2V0IGJ5IHRoZSBldmVudCAoc2Vjb25kYXJ5TWVudUlzRW1wdHkpICovXHJcbiAgcHVibGljIGhpZGVLZWJhYk1lbnVGb3JTZWNvbmRhcnlUb29sYmFyID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dSb3RhdGVCdXR0b24gPSB0cnVlO1xyXG5cclxuICBwcml2YXRlIF9oYW5kVG9vbCA9ICFpc0lPUygpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgaGFuZFRvb2woaGFuZFRvb2w6IGJvb2xlYW4pIHtcclxuICAgIGlmIChpc0lPUygpICYmIGhhbmRUb29sKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgIFwiT24gaU9TLCB0aGUgaGFuZHRvb2wgZG9lc24ndCB3b3JrIHJlbGlhYmx5LiBQbHVzLCB5b3UgZG9uJ3QgbmVlZCBpdCBiZWNhdXNlIHRvdWNoIGdlc3R1cmVzIGFsbG93IHlvdSB0byBkaXN0aW5ndWlzaCBlYXNpbHkgYmV0d2VlbiBzd2lwaW5nIGFuZCBzZWxlY3RpbmcgdGV4dC4gVGhlcmVmb3JlLCB0aGUgbGlicmFyeSBpZ25vcmVzIHlvdXIgc2V0dGluZy5cIlxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9oYW5kVG9vbCA9IGhhbmRUb29sO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBoYW5kVG9vbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9oYW5kVG9vbDtcclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBoYW5kVG9vbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0hhbmRUb29sQnV0dG9uID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgX3Nob3dTY3JvbGxpbmdCdXR0b24gPSB0cnVlO1xyXG5cclxuICBwdWJsaWMgZ2V0IHNob3dTY3JvbGxpbmdCdXR0b24oKSB7XHJcbiAgICBpZiAodGhpcy5wYWdlVmlld01vZGUgPT09ICdtdWx0aXBsZScpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3Nob3dTY3JvbGxpbmdCdXR0b247XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgc2hvd1Njcm9sbGluZ0J1dHRvbih2YWw6IGFueSkge1xyXG4gICAgdGhpcy5fc2hvd1Njcm9sbGluZ0J1dHRvbiA9IHZhbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3Nob3dTcHJlYWRCdXR0b24gPSB0cnVlO1xyXG5cclxuICBwdWJsaWMgZ2V0IHNob3dTcHJlYWRCdXR0b24oKSB7XHJcbiAgICBpZiAodGhpcy5wYWdlVmlld01vZGUgIT09ICdpbmZpbml0ZS1zY3JvbGwnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9zaG93U3ByZWFkQnV0dG9uO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IHNob3dTcHJlYWRCdXR0b24odmFsOiBhbnkpIHtcclxuICAgIHRoaXMuX3Nob3dTcHJlYWRCdXR0b24gPSB2YWw7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93UHJvcGVydGllc0J1dHRvbiA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dCb3JkZXJzID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc3ByZWFkOiAnb2ZmJyB8ICdldmVuJyB8ICdvZGQnO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgc3ByZWFkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjwnb2ZmJyB8ICdldmVuJyB8ICdvZGQnPigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgdGh1bWJuYWlsRHJhd24gPSBuZXcgRXZlbnRFbWl0dGVyPFBkZlRodW1ibmFpbERyYXduRXZlbnQ+KCk7XHJcblxyXG4gIHByaXZhdGUgX3BhZ2U6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgcHVibGljIGdldCBwYWdlKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFnZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCBwYWdlKHA6IG51bWJlciB8IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKHApIHtcclxuICAgICAgLy8gc2lsZW50bHkgY29wZSB3aXRoIHN0cmluZ3NcclxuICAgICAgdGhpcy5fcGFnZSA9IE51bWJlcihwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3BhZ2UgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgdW5kZWZpbmVkPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBwYWdlTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHBhZ2VMYWJlbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgdW5kZWZpbmVkPigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcGFnZXNMb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFBhZ2VzTG9hZGVkRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBwYWdlUmVuZGVyID0gbmV3IEV2ZW50RW1pdHRlcjxQYWdlUmVuZGVyRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBwYWdlUmVuZGVyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFBhZ2VSZW5kZXJlZEV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcGRmRG93bmxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8UGRmRG93bmxvYWRlZEV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcGRmTG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxQZGZMb2FkZWRFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHBkZkxvYWRpbmdTdGFydHMgPSBuZXcgRXZlbnRFbWl0dGVyPFBkZkxvYWRpbmdTdGFydHNFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHBkZkxvYWRpbmdGYWlsZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEVycm9yPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyB0ZXh0TGF5ZXI6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyB0ZXh0TGF5ZXJSZW5kZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VGV4dExheWVyUmVuZGVyZWRFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHVwZGF0ZUZpbmRNYXRjaGVzQ291bnQgPSBuZXcgRXZlbnRFbWl0dGVyPEZpbmRSZXN1bHRNYXRjaGVzQ291bnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyB1cGRhdGVGaW5kU3RhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPEZpbmRTdGF0ZT4oKTtcclxuXHJcbiAgLyoqIExlZ2FsIHZhbHVlczogdW5kZWZpbmVkLCAnYXV0bycsICdwYWdlLWFjdHVhbCcsICdwYWdlLWZpdCcsICdwYWdlLXdpZHRoJywgb3IgJzUwJyAob3IgYW55IG90aGVyIHBlcmNlbnRhZ2UpICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgem9vbTogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgem9vbUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyB6b29tTGV2ZWxzID0gWydhdXRvJywgJ3BhZ2UtYWN0dWFsJywgJ3BhZ2UtZml0JywgJ3BhZ2Utd2lkdGgnLCAwLjUsIDEsIDEuMjUsIDEuNSwgMiwgMywgNF07XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIG1heFpvb20gPSAxMDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbWluWm9vbSA9IDAuMTtcclxuXHJcbiAgLyoqIFRoaXMgYXR0cmlidXRlIGFsbG93cyB5b3UgdG8gaW5jcmVhc2UgdGhlIHNpemUgb2YgdGhlIFVJIGVsZW1lbnRzIHNvIHlvdSBjYW4gdXNlIHRoZW0gb24gc21hbGwgbW9iaWxlIGRldmljZXMuXHJcbiAgICogVGhpcyBhdHRyaWJ1dGUgaXMgYSBzdHJpbmcgd2l0aCBhIHBlcmNlbnQgY2hhcmFjdGVyIGF0IHRoZSBlbmQgKGUuZy4gXCIxNTAlXCIpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBfbW9iaWxlRnJpZW5kbHlab29tOiBzdHJpbmcgPSAnMTAwJSc7XHJcblxyXG4gIHB1YmxpYyBtb2JpbGVGcmllbmRseVpvb21TY2FsZSA9IDE7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHdoZWVsQWN0aW9uOiAnc2Nyb2xsJyB8ICd6b29tJyB8ICdhbHdheXMtem9vbScgPSAnc2Nyb2xsJztcclxuXHJcbiAgcHVibGljIHRvb2xiYXJNYXJnaW5Ub3AgPSAnMHB4JztcclxuXHJcbiAgcHVibGljIHRvb2xiYXJXaWR0aCA9ICcxMDAlJztcclxuXHJcbiAgcHJpdmF0ZSB0b29sYmFyOiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgcHVibGljIG9uVG9vbGJhckxvYWRlZCh0b29sYmFyRWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMudG9vbGJhciA9IHRvb2xiYXJFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvb2xiYXJXaWR0aEluUGl4ZWxzID0gMTAwO1xyXG5cclxuICBwdWJsaWMgc2Vjb25kYXJ5VG9vbGJhclRvcDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBwdWJsaWMgc2lkZWJhclBvc2l0aW9uVG9wOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIC8vIGRpcnR5IElFMTEgaGFjayAtIHRlbXBvcmFyeSBzb2x1dGlvblxyXG4gIHB1YmxpYyBmaW5kYmFyVG9wOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIC8vIGRpcnR5IElFMTEgaGFjayAtIHRlbXBvcmFyeSBzb2x1dGlvblxyXG4gIHB1YmxpYyBmaW5kYmFyTGVmdDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICAvLyBBZGRpdGlvbmFsIFBERiBGb3JtIEZpZWxkIFR5cGVzICM1Njc6IFVzZWQgdG8gc3RvcmUgdGhlIGV4cG9ydGVkIHZhbHVlcyBvZiByYWRpbyBhbmQgY2hlY2tib3ggYnV0dG9uc1xyXG4gIHB1YmxpYyBidXR0b25WYWx1ZXM6IGFueSA9IHt9O1xyXG5cclxuICBwdWJsaWMgZ2V0IG1vYmlsZUZyaWVuZGx5Wm9vbSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9tb2JpbGVGcmllbmRseVpvb207XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHBkZkpzVmVyc2lvbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGdldFZlcnNpb25TdWZmaXgocGRmRGVmYXVsdE9wdGlvbnMuYXNzZXRzRm9sZGVyKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgYXR0cmlidXRlcyBhbGxvd3MgeW91IHRvIGluY3JlYXNlIHRoZSBzaXplIG9mIHRoZSBVSSBlbGVtZW50cyBzbyB5b3UgY2FuIHVzZSB0aGVtIG9uIHNtYWxsIG1vYmlsZSBkZXZpY2VzLlxyXG4gICAqIFRoaXMgYXR0cmlidXRlIGlzIGEgc3RyaW5nIHdpdGggYSBwZXJjZW50IGNoYXJhY3RlciBhdCB0aGUgZW5kIChlLmcuIFwiMTUwJVwiKS5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgbW9iaWxlRnJpZW5kbHlab29tKHpvb206IHN0cmluZykge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHMgLSB0aGUgdHlwZSBjb252ZXJzaW9uIGlzIGludGVuZGVkXHJcbiAgICBpZiAoem9vbSA9PSAndHJ1ZScpIHtcclxuICAgICAgem9vbSA9ICcxNTAlJztcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHMgLSB0aGUgdHlwZSBjb252ZXJzaW9uIGlzIGludGVuZGVkXHJcbiAgICB9IGVsc2UgaWYgKHpvb20gPT0gJ2ZhbHNlJyB8fCB6b29tID09PSB1bmRlZmluZWQgfHwgem9vbSA9PT0gbnVsbCkge1xyXG4gICAgICB6b29tID0gJzEwMCUnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fbW9iaWxlRnJpZW5kbHlab29tID0gem9vbTtcclxuICAgIGxldCBmYWN0b3IgPSAxO1xyXG4gICAgaWYgKCFTdHJpbmcoem9vbSkuaW5jbHVkZXMoJyUnKSkge1xyXG4gICAgICB6b29tID0gMTAwICogTnVtYmVyKHpvb20pICsgJyUnO1xyXG4gICAgfVxyXG4gICAgZmFjdG9yID0gTnVtYmVyKCh6b29tIHx8ICcxMDAnKS5yZXBsYWNlKCclJywgJycpKSAvIDEwMDtcclxuICAgIHRoaXMubW9iaWxlRnJpZW5kbHlab29tU2NhbGUgPSBmYWN0b3I7XHJcbiAgICB0aGlzLnRvb2xiYXJXaWR0aCA9ICgxMDAgLyBmYWN0b3IpLnRvU3RyaW5nKCkgKyAnJSc7XHJcbiAgICB0aGlzLnRvb2xiYXJNYXJnaW5Ub3AgPSAoZmFjdG9yIC0gMSkgKiAxNiArICdweCc7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNhbGNWaWV3ZXJQb3NpdGlvblRvcCgpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2h1dHRpbmdEb3duID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBjYWxjVmlld2VyUG9zaXRpb25Ub3AoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50b29sYmFyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5zaWRlYmFyUG9zaXRpb25Ub3AgPSAnMHB4JztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IHRvcCA9IHRoaXMudG9vbGJhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XHJcbiAgICBpZiAodG9wIDwgMzMpIHtcclxuICAgICAgdGhpcy52aWV3ZXJQb3NpdGlvblRvcCA9ICczM3B4JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmlld2VyUG9zaXRpb25Ub3AgPSB0b3AgKyAncHgnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZhY3RvciA9IHRvcCAvIDMzO1xyXG5cclxuICAgIGlmICh0aGlzLnByaW1hcnlNZW51VmlzaWJsZSkge1xyXG4gICAgICB0aGlzLnNpZGViYXJQb3NpdGlvblRvcCA9ICgzMyArIDMzICogKGZhY3RvciAtIDEpKS50b1N0cmluZygpICsgJ3B4JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2lkZWJhclBvc2l0aW9uVG9wID0gJzBweCc7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlY29uZGFyeVRvb2xiYXJUb3AgPSAoMzMgKyAzOCAqIChmYWN0b3IgLSAxKSkudG9TdHJpbmcoKSArICdweCc7XHJcbiAgICB0aGlzLmZpbmRiYXJUb3AgPSAoMzQgKyA1NCAqIChmYWN0b3IgLSAxKSkudG9TdHJpbmcoKSArICdweCc7XHJcblxyXG4gICAgY29uc3QgZmluZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3RmluZCcpO1xyXG4gICAgaWYgKGZpbmRCdXR0b24pIHtcclxuICAgICAgY29uc3QgY29udGFpbmVyUG9zaXRpb25MZWZ0ID0gdGhpcy50b29sYmFyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbiAgICAgIGNvbnN0IGZpbmRCdXR0b25Qb3NpdGlvbiA9IGZpbmRCdXR0b24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIGNvbnN0IGxlZnQgPSBmaW5kQnV0dG9uUG9zaXRpb24ubGVmdCAtIGNvbnRhaW5lclBvc2l0aW9uTGVmdDtcclxuICAgICAgdGhpcy5maW5kYmFyTGVmdCA9IGxlZnQgKyAncHgnO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnNob3dTaWRlYmFyQnV0dG9uKSB7XHJcbiAgICAgIHRoaXMuZmluZGJhckxlZnQgPSAzNCArICgzMiAqIGZhY3RvcikudG9TdHJpbmcoKSArICdweCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZpbmRiYXJMZWZ0ID0gJzBweCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQsXHJcbiAgICBwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IFBERk5vdGlmaWNhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcGxhdGZvcm1Mb2NhdGlvbjogUGxhdGZvcm1Mb2NhdGlvbixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgc2VydmljZTogTmd4RXh0ZW5kZWRQZGZWaWV3ZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXHJcbiAgKSB7XHJcbiAgICB0aGlzLmJhc2VIcmVmID0gdGhpcy5wbGF0Zm9ybUxvY2F0aW9uLmdldEJhc2VIcmVmRnJvbURPTSgpO1xyXG4gICAgdGhpcy5zZXJ2aWNlLnJlY2FsY3VsYXRlU2l6ZSQuc3Vic2NyaWJlKCgpID0+IHRoaXMub25SZXNpemUoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlPU1ZlcnNpb25SZXF1aXJlc0VTNSgpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IG1hdGNoID0gbmF2aWdhdG9yLmFwcFZlcnNpb24ubWF0Y2goL09TIChcXGQrKV8oXFxkKylfPyhcXGQrKT8vKTtcclxuICAgIGlmIChtYXRjaCAhPT0gdW5kZWZpbmVkICYmIG1hdGNoICE9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBwYXJzZUludChtYXRjaFsxXSwgMTApIDwgMTQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBuZWVkc0VTNSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGNvbnN0IGlzSUUgPSAhISg8YW55PndpbmRvdykuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoPGFueT5kb2N1bWVudCkuZG9jdW1lbnRNb2RlO1xyXG4gICAgY29uc3QgaXNFZGdlID0gL0VkZ2VcXC9cXGQuL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuICAgIGNvbnN0IGlzSU9zMTNPckJlbG93ID0gdGhpcy5pT1NWZXJzaW9uUmVxdWlyZXNFUzUoKTtcclxuICAgIGxldCBuZWVkc0VTNSA9IHR5cGVvZiBSZWFkYWJsZVN0cmVhbSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIFByb21pc2VbJ2FsbFNldHRsZWQnXSA9PT0gJ3VuZGVmaW5lZCc7XHJcbiAgICBpZiAobmVlZHNFUzUgfHwgaXNJRSB8fCBpc0VkZ2UgfHwgaXNJT3MxM09yQmVsb3cgfHwgdGhpcy5mb3JjZVVzaW5nTGVnYWN5RVM1KSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICEoYXdhaXQgdGhpcy5zdXBwb3J0c09wdGlvbmFsQ2hhaW5pbmcoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN1cHBvcnRzT3B0aW9uYWxDaGFpbmluZygpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICBjb25zdCBzdXBwb3J0ID0gKDxhbnk+d2luZG93KS5zdXBwb3J0c09wdGlvbmFsQ2hhaW5pbmc7XHJcbiAgICAgIHN1cHBvcnQgIT09IHVuZGVmaW5lZCA/IHJlc29sdmUoc3VwcG9ydCkgOiByZXNvbHZlKHRoaXMuYWRkU2NyaXB0T3BDaGFpbmluZ1N1cHBvcnQoKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkU2NyaXB0T3BDaGFpbmluZ1N1cHBvcnQoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgY29uc3Qgc2NyaXB0ID0gdGhpcy5jcmVhdGVTY3JpcHRFbGVtZW50KHBkZkRlZmF1bHRPcHRpb25zLmFzc2V0c0ZvbGRlciArICcvb3AtY2hhaW5pbmctc3VwcG9ydC5qcycpO1xyXG4gICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIHNjcmlwdC5yZW1vdmUoKTtcclxuICAgICAgICByZXNvbHZlKCg8YW55PndpbmRvdykuc3VwcG9ydHNPcHRpb25hbENoYWluaW5nIGFzIGJvb2xlYW4pO1xyXG4gICAgICB9O1xyXG4gICAgICBzY3JpcHQub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgICBzY3JpcHQucmVtb3ZlKCk7XHJcbiAgICAgICAgKDxhbnk+d2luZG93KS5zdXBwb3J0c09wdGlvbmFsQ2hhaW5pbmcgPSBmYWxzZTtcclxuICAgICAgICByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVTY3JpcHRFbGVtZW50KHNvdXJjZVBhdGg6IHN0cmluZyk6IEhUTUxTY3JpcHRFbGVtZW50IHtcclxuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XHJcbiAgICBjb25zdCB0dFdpbmRvdyA9IHdpbmRvdyBhcyB1bmtub3duIGFzIFRydXN0ZWRUeXBlc1dpbmRvdztcclxuICAgIGlmICh0dFdpbmRvdy50cnVzdGVkVHlwZXMpIHtcclxuICAgICAgY29uc3Qgc2FuaXRpemVyID0gdHRXaW5kb3cudHJ1c3RlZFR5cGVzLmNyZWF0ZVBvbGljeSgnZm9vJywge1xyXG4gICAgICAgIGNyZWF0ZVNjcmlwdFVSTDogKGlucHV0KSA9PiBpbnB1dCxcclxuICAgICAgfSk7XHJcbiAgICAgIHNjcmlwdC5zcmMgPSBzYW5pdGl6ZXIuY3JlYXRlU2NyaXB0VVJMKHRoaXMubG9jYXRpb24ubm9ybWFsaXplKHNvdXJjZVBhdGgpKSBhcyBhbnk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzY3JpcHQuc3JjID0gdGhpcy5sb2NhdGlvbi5ub3JtYWxpemUoc291cmNlUGF0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNjcmlwdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UGRmSnNQYXRoKGFydGlmYWN0OiAncGRmJyB8ICd2aWV3ZXInLCBuZWVkc0VTNTogYm9vbGVhbikge1xyXG4gICAgY29uc3Qgc3VmZml4ID0gdGhpcy5taW5pZmllZEpTTGlicmFyaWVzID8gJy5taW4uanMnIDogJy5qcyc7XHJcbiAgICBjb25zdCBhc3NldHMgPSBwZGZEZWZhdWx0T3B0aW9ucy5hc3NldHNGb2xkZXI7XHJcbiAgICBjb25zdCB2ZXJzaW9uU3VmZml4ID0gZ2V0VmVyc2lvblN1ZmZpeChhc3NldHMpO1xyXG4gICAgY29uc3QgYXJ0aWZhY3RQYXRoID0gYC8ke2FydGlmYWN0fS1gO1xyXG4gICAgY29uc3QgZXM1ID0gbmVlZHNFUzUgPyAnLWVzNScgOiAnJztcclxuXHJcbiAgICByZXR1cm4gYXNzZXRzICsgYXJ0aWZhY3RQYXRoICsgdmVyc2lvblN1ZmZpeCArIGVzNSArIHN1ZmZpeDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZFZpZXdlcigpOiB2b2lkIHtcclxuICAgIHdpbmRvd1snbmd4Wm9uZSddID0gdGhpcy5uZ1pvbmU7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIGlmICghd2luZG93WydwZGZqcy1kaXN0L2J1aWxkL3BkZiddKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxvYWRWaWV3ZXIoKSwgMjUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubmVlZHNFUzUoKS50aGVuKChuZWVkc0VTNSkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgdmlld2VyUGF0aCA9IHRoaXMuZ2V0UGRmSnNQYXRoKCd2aWV3ZXInLCBuZWVkc0VTNSk7XHJcbiAgICAgICAgICBjb25zdCBzY3JpcHQgPSB0aGlzLmNyZWF0ZVNjcmlwdEVsZW1lbnQodmlld2VyUGF0aCk7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRGZWF0dXJlcygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICBjb25zdCBzY3JpcHQgPSB0aGlzLmNyZWF0ZVNjcmlwdEVsZW1lbnQocGRmRGVmYXVsdE9wdGlvbnMuYXNzZXRzRm9sZGVyICsgJy9hZGRpdGlvbmFsLWZlYXR1cmVzLmpzJyk7XHJcbiAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2NyaXB0LnJlbW92ZSgpO1xyXG4gICAgICB9O1xyXG4gICAgICBzY3JpcHQub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgICBzY3JpcHQucmVtb3ZlKCk7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHdpbmRvd1snc2V0Tmd4RXh0ZW5kZWRQZGZWaWV3ZXJTb3VyY2UnXSA9ICh1cmw6IHN0cmluZykgPT4ge1xyXG4gICAgICB0aGlzLl9zcmMgPSB1cmw7XHJcbiAgICAgIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgICAgIHRoaXMuc3JjQ2hhbmdlVHJpZ2dlcmVkQnlVc2VyID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zcmNDaGFuZ2UuZW1pdCh1cmwpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG4gICAgICB0aGlzLmFkZFRyYW5zbGF0aW9uc1VubGVzc1Byb3ZpZGVkQnlUaGVVc2VyKCk7XHJcbiAgICAgICh3aW5kb3cgYXMgYW55KS5nZXRGb3JtVmFsdWUgPSAoa2V5OiBzdHJpbmcpID0+IHRoaXMuZ2V0Rm9ybVZhbHVlKGtleSk7XHJcbiAgICAgICh3aW5kb3cgYXMgYW55KS5zZXRGb3JtVmFsdWUgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHRoaXMuc2V0Rm9ybVZhbHVlKGtleSwgdmFsdWUpO1xyXG4gICAgICAod2luZG93IGFzIGFueSkucmVnaXN0ZXJBY3JvZm9ybUFubm90YXRpb25zID0gKHNvcnRlZEFubm90YXRpb25zKSA9PiB0aGlzLnJlZ2lzdGVyQWNyb2Zvcm1Bbm5vdGF0aW9ucyhzb3J0ZWRBbm5vdGF0aW9ucyk7XHJcbiAgICAgICh3aW5kb3cgYXMgYW55KS5hc3NpZ25Gb3JtSWRBbmRGaWVsZE5hbWUgPSAoa2V5OiBzdHJpbmcsIGZpZWxkTmFtZTogc3RyaW5nLCByYWRpb0J1dHRvbkZpZWxkPzogc3RyaW5nKSA9PlxyXG4gICAgICAgIHRoaXMuYXNzaWduRm9ybUlkQW5kRmllbGROYW1lKGtleSwgZmllbGROYW1lLCByYWRpb0J1dHRvbkZpZWxkKTtcclxuXHJcbiAgICAgIHRoaXMubG9hZFBkZkpzKCk7XHJcbiAgICAgIHRoaXMuaGlkZVRvb2xiYXJJZkl0SXNFbXB0eSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2FkUGRmSnMoKSB7XHJcbiAgICB3aW5kb3dbJ25neFpvbmUnXSA9IHRoaXMubmdab25lO1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICBpZiAoIXdpbmRvd1sncGRmanMtZGlzdC9idWlsZC9wZGYnXSkge1xyXG4gICAgICAgIHRoaXMubmVlZHNFUzUoKS50aGVuKChuZWVkc0VTNSkgPT4ge1xyXG4gICAgICAgICAgaWYgKG5lZWRzRVM1KSB7XHJcbiAgICAgICAgICAgIGlmICghcGRmRGVmYXVsdE9wdGlvbnMubmVlZHNFUzUpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgIFwiSWYgeW91IHNlZSB0aGUgZXJyb3IgbWVzc2FnZSBcXFwiZXhwZWN0ZWQgZXhwcmVzc2lvbiwgZ290ICc9J1xcXCIgYWJvdmU6IHlvdSBjYW4gc2FmZWx5IGlnbm9yZSBpdCBhcyBsb25nIGFzIHlvdSBrbm93IHdoYXQgeW91J3JlIGRvaW5nLiBJdCBtZWFucyB5b3VyIGJyb3dzZXIgaXMgb3V0LW9mLWRhdGUuIFBsZWFzZSB1cGRhdGUgeW91ciBicm93c2VyIHRvIGJlbmVmaXQgZnJvbSB0aGUgbGF0ZXN0IHNlY3VyaXR5IHVwZGF0ZXMgYW5kIHRvIGVuam95IGEgZmFzdGVyIFBERiB2aWV3ZXIuXCJcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBkZkRlZmF1bHRPcHRpb25zLm5lZWRzRVM1ID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzaW5nIHRoZSBFUzUgdmVyc2lvbiBvZiB0aGUgUERGIHZpZXdlci4gWW91ciBQREYgZmlsZXMgc2hvdyBmYXN0ZXIgaWYgeW91IHVwZGF0ZSB5b3VyIGJyb3dzZXIuJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB3aW5kb3dbJ25neFpvbmUnXSA9IHRoaXMubmdab25lO1xyXG4gICAgICAgICAgaWYgKHRoaXMubWluaWZpZWRKU0xpYnJhcmllcykge1xyXG4gICAgICAgICAgICBpZiAoIXBkZkRlZmF1bHRPcHRpb25zLndvcmtlclNyYygpLmVuZHNXaXRoKCcubWluLmpzJykpIHtcclxuICAgICAgICAgICAgICBjb25zdCBzcmMgPSBwZGZEZWZhdWx0T3B0aW9ucy53b3JrZXJTcmMoKTtcclxuICAgICAgICAgICAgICBwZGZEZWZhdWx0T3B0aW9ucy53b3JrZXJTcmMgPSAoKSA9PiBzcmMucmVwbGFjZSgnLmpzJywgJy5taW4uanMnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgcGRmSnNQYXRoID0gdGhpcy5nZXRQZGZKc1BhdGgoJ3BkZicsIG5lZWRzRVM1KTtcclxuICAgICAgICAgIGNvbnN0IHNjcmlwdCA9IHRoaXMuY3JlYXRlU2NyaXB0RWxlbWVudChwZGZKc1BhdGgpO1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghKHdpbmRvdyBhcyBhbnkpLndlYlZpZXdlckxvYWQpIHtcclxuICAgICAgICB0aGlzLmxvYWRWaWV3ZXIoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgaWYgKCF0aGlzLnNodXR0aW5nRG93bikge1xyXG4gICAgICAgIC8vIGh1cnJpZWQgdXNlcnMgc29tZXRpbWVzIHJlbG9hZCB0aGUgUERGIGJlZm9yZSBpdCBoYXMgZmluaXNoZWQgaW5pdGlhbGl6aW5nXHJcbiAgICAgICAgaWYgKCh3aW5kb3cgYXMgYW55KS53ZWJWaWV3ZXJMb2FkKSB7XHJcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmRvSW5pdFBERlZpZXdlcigpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm5nQWZ0ZXJWaWV3SW5pdCgpLCA1MCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzc2lnblRhYmluZGV4ZXMoKSB7XHJcbiAgICBpZiAodGhpcy5zdGFydFRhYmluZGV4KSB7XHJcbiAgICAgIGNvbnN0IHIgPSB0aGlzLnJvb3QubmF0aXZlRWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIHIuY2xhc3NMaXN0LmFkZCgnb2Zmc2NyZWVuJyk7XHJcbiAgICAgIHRoaXMuc2hvd0VsZW1lbnRzUmVjdXJzaXZlbHkocik7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocik7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5jb2xsZWN0RWxlbWVudFBvc2l0aW9ucyhyLCB0aGlzLnJvb3QubmF0aXZlRWxlbWVudCwgW10pO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHIpO1xyXG4gICAgICBjb25zdCBzb3J0ZWQgPSBlbGVtZW50cy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgaWYgKGEueSAtIGIueSA+IDE1KSB7XHJcbiAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGIueSAtIGEueSA+IDE1KSB7XHJcbiAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhLnggLSBiLng7XHJcbiAgICAgIH0pO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvcnRlZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHNvcnRlZFtpXS5lbGVtZW50LnRhYkluZGV4ID0gdGhpcy5zdGFydFRhYmluZGV4ICsgaTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93RWxlbWVudHNSZWN1cnNpdmVseShyb290OiBFbGVtZW50KTogdm9pZCB7XHJcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcclxuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuWFhMVmlldycpO1xyXG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW5YTFZpZXcnKTtcclxuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuTGFyZ2VWaWV3Jyk7XHJcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbk1lZGl1bVZpZXcnKTtcclxuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuU21hbGxWaWV3Jyk7XHJcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlblRpbnlWaWV3Jyk7XHJcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGVYWExWaWV3Jyk7XHJcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGVYTFZpZXcnKTtcclxuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZUxhcmdlVmlldycpO1xyXG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlTWVkaXVtVmlldycpO1xyXG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlU21hbGxWaWV3Jyk7XHJcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGVUaW55VmlldycpO1xyXG5cclxuICAgIGlmIChyb290IGluc3RhbmNlb2YgSFRNTEJ1dHRvbkVsZW1lbnQgfHwgcm9vdCBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50IHx8IHJvb3QgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50IHx8IHJvb3QgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2UgaWYgKHJvb3QuY2hpbGRFbGVtZW50Q291bnQgPiAwKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm9vdC5jaGlsZEVsZW1lbnRDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgYyA9IHJvb3QuY2hpbGRyZW4uaXRlbShpKTtcclxuICAgICAgICBpZiAoYykge1xyXG4gICAgICAgICAgdGhpcy5zaG93RWxlbWVudHNSZWN1cnNpdmVseShjKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29sbGVjdEVsZW1lbnRQb3NpdGlvbnMoY29weTogRWxlbWVudCwgb3JpZ2luYWw6IEVsZW1lbnQsIGVsZW1lbnRzOiBBcnJheTxFbGVtZW50QW5kUG9zaXRpb24+KTogQXJyYXk8RWxlbWVudEFuZFBvc2l0aW9uPiB7XHJcbiAgICBpZiAoY29weSBpbnN0YW5jZW9mIEhUTUxCdXR0b25FbGVtZW50IHx8IGNvcHkgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCB8fCBjb3B5IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCB8fCBjb3B5IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcclxuICAgICAgY29uc3QgcmVjdCA9IGNvcHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnRBbmRQb3MgPSB7XHJcbiAgICAgICAgZWxlbWVudDogb3JpZ2luYWwsXHJcbiAgICAgICAgeDogTWF0aC5yb3VuZChyZWN0LmxlZnQpLFxyXG4gICAgICAgIHk6IE1hdGgucm91bmQocmVjdC50b3ApLFxyXG4gICAgICB9IGFzIEVsZW1lbnRBbmRQb3NpdGlvbjtcclxuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50QW5kUG9zKTtcclxuICAgIH0gZWxzZSBpZiAoY29weS5jaGlsZEVsZW1lbnRDb3VudCA+IDApIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3B5LmNoaWxkRWxlbWVudENvdW50OyBpKyspIHtcclxuICAgICAgICBjb25zdCBjID0gY29weS5jaGlsZHJlbi5pdGVtKGkpO1xyXG4gICAgICAgIGNvbnN0IG8gPSBvcmlnaW5hbC5jaGlsZHJlbi5pdGVtKGkpO1xyXG4gICAgICAgIGlmIChjICYmIG8pIHtcclxuICAgICAgICAgIGVsZW1lbnRzID0gdGhpcy5jb2xsZWN0RWxlbWVudFBvc2l0aW9ucyhjLCBvLCBlbGVtZW50cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWxlbWVudHM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRvSW5pdFBERlZpZXdlcigpIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBjYWxsYmFjayA9ICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9jYWxpemVkJywgY2FsbGJhY2spO1xyXG4gICAgICB0aGlzLmluaXRUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNodXR0aW5nRG93bikge1xyXG4gICAgICAgICAgLy8gaHVycmllZCB1c2VycyBzb21ldGltZXMgcmVsb2FkIHRoZSBQREYgYmVmb3JlIGl0IGhhcyBmaW5pc2hlZCBpbml0aWFsaXppbmdcclxuICAgICAgICAgIHRoaXMuY2FsY1ZpZXdlclBvc2l0aW9uVG9wKCk7XHJcbiAgICAgICAgICB0aGlzLmFmdGVyTGlicmFyeUluaXQoKTtcclxuICAgICAgICAgIHRoaXMub3BlblBERigpO1xyXG4gICAgICAgICAgdGhpcy5hc3NpZ25UYWJpbmRleGVzKCk7XHJcbiAgICAgICAgICBpZiAodGhpcy5yZXBsYWNlQnJvd3NlclByaW50KSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5wcmludCA9ICh3aW5kb3cgYXMgYW55KS5wcmludFBERjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sIHRoaXMuZGVsYXlGaXJzdFZpZXcpO1xyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYWZ0ZXJwcmludCcsICgpID0+IHtcclxuICAgICAgdGhpcy5hZnRlclByaW50LmVtaXQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmVwcmludCcsICgpID0+IHtcclxuICAgICAgdGhpcy5iZWZvcmVQcmludC5lbWl0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdsb2NhbGl6ZWQnLCBjYWxsYmFjayk7XHJcblxyXG4gICAgaWYgKE5neEV4dGVuZGVkUGRmVmlld2VyQ29tcG9uZW50Lm5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQpIHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnF1b3RlbWFya1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiWW91J3JlIHRyeWluZyB0byBvcGVuIHR3byBpbnN0YW5jZXMgb2YgdGhlIFBERiB2aWV3ZXIuIE1vc3QgbGlrZWx5LCB0aGlzIHdpbGwgcmVzdWx0IGluIGVycm9ycy5cIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBvbkxvYWRlZCA9ICgpID0+IHtcclxuICAgICAgdGhpcy5vdmVycmlkZURlZmF1bHRTZXR0aW5ncygpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd3ZWJ2aWV3ZXJsb2FkZWQnLCBvbkxvYWRlZCk7XHJcbiAgICB9O1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignd2Vidmlld2VybG9hZGVkJywgb25Mb2FkZWQpO1xyXG5cclxuICAgIHRoaXMuYWN0aXZhdGVUZXh0bGF5ZXJJZk5lY2Vzc2FyeShudWxsKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLnNodXR0aW5nRG93bikge1xyXG4gICAgICAgIC8vIGh1cnJpZWQgdXNlcnMgc29tZXRpbWVzIHJlbG9hZCB0aGUgUERGIGJlZm9yZSBpdCBoYXMgZmluaXNoZWQgaW5pdGlhbGl6aW5nXHJcbiAgICAgICAgLy8gVGhpcyBpbml0aWFsaXplcyB0aGUgd2Vidmlld2VyLCB0aGUgZmlsZSBtYXkgYmUgcGFzc2VkIGluIHRvIGl0IHRvIGluaXRpYWxpemUgdGhlIHZpZXdlciB3aXRoIGEgcGRmIGRpcmVjdGx5XHJcbiAgICAgICAgdGhpcy5vblJlc2l6ZSgpO1xyXG4gICAgICAgIHRoaXMuaGlkZVRvb2xiYXJJZkl0SXNFbXB0eSgpO1xyXG4gICAgICAgIHRoaXMuZHVtbXlDb21wb25lbnRzLmFkZE1pc3NpbmdTdGFuZGFyZFdpZGdldHMoKTtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiAoPGFueT53aW5kb3cpLndlYlZpZXdlckxvYWQoKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uYXBwQ29uZmlnLmRlZmF1bHRVcmwgPSAnJzsgLy8gSUUgYnVnZml4XHJcbiAgICAgICAgaWYgKHRoaXMuZmlsZW5hbWVGb3JEb3dubG9hZCkge1xyXG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uYXBwQ29uZmlnLmZpbGVuYW1lRm9yRG93bmxvYWQgPSB0aGlzLmZpbGVuYW1lRm9yRG93bmxvYWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9uczogSVBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucyA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XHJcblxyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ2VuYWJsZURyYWdBbmREcm9wJywgdGhpcy5lbmFibGVEcmFnQW5kRHJvcCk7XHJcbiAgICAgICAgbGV0IGxhbmd1YWdlID0gdGhpcy5sYW5ndWFnZSA9PT0gJycgPyB1bmRlZmluZWQgOiB0aGlzLmxhbmd1YWdlO1xyXG4gICAgICAgIGlmICghbGFuZ3VhZ2UpIHtcclxuICAgICAgICAgIGxhbmd1YWdlID0gbmF2aWdhdG9yLmxhbmd1YWdlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCdsb2NhbGUnLCBsYW5ndWFnZSk7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLnNldCgnaW1hZ2VSZXNvdXJjZXNQYXRoJywgdGhpcy5pbWFnZVJlc291cmNlc1BhdGgpO1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ21pblpvb20nLCB0aGlzLm1pblpvb20pO1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ21heFpvb20nLCB0aGlzLm1heFpvb20pO1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ3BhZ2VWaWV3TW9kZScsIHRoaXMucGFnZVZpZXdNb2RlKTtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCd2ZXJib3NpdHknLCB0aGlzLmxvZ0xldmVsKTtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCdpbml0aWFsWm9vbScsIHRoaXMuem9vbSk7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLnNldCgncGRmQmFja2dyb3VuZENvbG9yJywgdGhpcy5wZGZCYWNrZ3JvdW5kKTtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCdwZGZCYWNrZ3JvdW5kQ29sb3JUb1JlcGxhY2UnLCB0aGlzLnBkZkJhY2tncm91bmRDb2xvclRvUmVwbGFjZSk7XHJcblxyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmlzVmlld2VyRW1iZWRkZWQgPSB0cnVlO1xyXG4gICAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wcmludEtleURvd25MaXN0ZW5lcikge1xyXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wcmludEtleURvd25MaXN0ZW5lciwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKTtcclxuICAgICAgICBpZiAoYm9keVswXSkge1xyXG4gICAgICAgICAgY29uc3QgdG9wTGV2ZWxFbGVtZW50cyA9IGJvZHlbMF0uY2hpbGRyZW47XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gdG9wTGV2ZWxFbGVtZW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBjb25zdCBlID0gdG9wTGV2ZWxFbGVtZW50cy5pdGVtKGkpO1xyXG4gICAgICAgICAgICBpZiAoZSAmJiBlLmlkID09PSAncHJpbnRDb250YWluZXInKSB7XHJcbiAgICAgICAgICAgICAgYm9keVswXS5yZW1vdmVDaGlsZChlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmludENvbnRhaW5lcicpO1xyXG4gICAgICAgIGlmIChwYykge1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5hcHBlbmRDaGlsZChwYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LCAwKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkVHJhbnNsYXRpb25zVW5sZXNzUHJvdmlkZWRCeVRoZVVzZXIoKSB7XHJcbiAgICBjb25zdCBsYW5nTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3R5cGU9XCJhcHBsaWNhdGlvbi9sMTBuXCJdJyk7XHJcbiAgICBjb25zdCBsYW5nQ291bnQgPSBsYW5nTGlua3MubGVuZ3RoO1xyXG4gICAgY29uc3QgZGljdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFt0eXBlPVwiYXBwbGljYXRpb24vbDEwblwiXScpO1xyXG4gICAgY29uc3QgdXNlclByb3ZpZGVzVHJhbnNsYXRpb25zID0gbGFuZ0NvdW50ID4gMCB8fCAhIWRpY3Q7XHJcbiAgICBpZiAodGhpcy5fdXNlQnJvd3NlckxvY2FsZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMudXNlQnJvd3NlckxvY2FsZSA9ICF1c2VyUHJvdmlkZXNUcmFuc2xhdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF1c2VyUHJvdmlkZXNUcmFuc2xhdGlvbnMpIHtcclxuICAgICAgaWYgKCF0aGlzLnVzZUJyb3dzZXJMb2NhbGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiSWYgeW91IHNldCB0aGUgYXR0cmlidXRlICd1c2VCcm93c2VyTG9jYWxlJyB0byBmYWxzZSwgeW91IG11c3QgcHJvdmlkZSB0aGUgdHJhbnNsYXRpb25zIHlvdXJzZWxmIGluIGEgc2NyaXB0IG9yIGxpbmsgdGFnLlwiKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgZWFzaWVzdCB3YXkgdG8gZG8gdGhpcyBpcyB0byBhZGQgdGhlbSB0byB0aGUgaW5kZXguaHRtbC4nKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgUERGIHZpZXdlciBpZ25vcmVzIHlvdXIgc2V0dGluZyBhbmQgbG9hZHMgdGhlIGRlZmF1bHQgdHJhbnNsYXRpb25zLicpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGxpbmsgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuICAgICAgbGluay5yZWwgPSAncmVzb3VyY2UnO1xyXG4gICAgICBsaW5rLnR5cGUgPSAnYXBwbGljYXRpb24vbDEwbic7XHJcbiAgICAgIGxpbmsuaHJlZiA9IHRoaXMubG9jYWxlRm9sZGVyUGF0aCArICcvbG9jYWxlLnByb3BlcnRpZXMnO1xyXG4gICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnb3JpZ2luJywgJ25neC1leHRlbmRlZC1wZGYtdmlld2VyJyk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGxpbmspO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnVzZUJyb3dzZXJMb2NhbGUgJiYgbGFuZ0NvdW50ID4gMCkge1xyXG4gICAgICBjb25zdCBvID0gbGFuZ0xpbmtzWzBdLmF0dHJpYnV0ZXNbJ29yaWdpbiddO1xyXG4gICAgICBpZiAobyAmJiBvLnZhbHVlICE9PSAnbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXInKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlBsZWFzZSBzZXQgdGhlIGF0dHJpYnV0ZSAndXNlQnJvd3NlckxvY2FsZScgdG8gZmFsc2UgaWYgeW91IHByb3ZpZGUgdGhlIHRyYW5zbGF0aW9ucyB5b3Vyc2VsZiBpbiBhIHNjcmlwdCBvciBsaW5rIHRhZy5cIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGlkZVRvb2xiYXJJZkl0SXNFbXB0eSgpIHtcclxuICAgIHRoaXMucHJpbWFyeU1lbnVWaXNpYmxlID0gdGhpcy5zaG93VG9vbGJhcjtcclxuICAgIGlmICghdGhpcy5zaG93U2Vjb25kYXJ5VG9vbGJhckJ1dHRvbiB8fCB0aGlzLmhpZGVLZWJhYk1lbnVGb3JTZWNvbmRhcnlUb29sYmFyKSB7XHJcbiAgICAgIGlmICghdGhpcy5pc1ByaW1hcnlNZW51VmlzaWJsZSgpKSB7XHJcbiAgICAgICAgdGhpcy5wcmltYXJ5TWVudVZpc2libGUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIE5vdGlmaWVzIGV2ZXJ5IHdpZGdldCB0aGF0IGltcGxlbWVudHMgb25MaWJyYXJ5SW5pdCgpIHRoYXQgdGhlIFBERiB2aWV3ZXIgb2JqZWN0cyBhcmUgYXZhaWxhYmxlICovXHJcbiAgcHJpdmF0ZSBhZnRlckxpYnJhcnlJbml0KCkge1xyXG4gICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLm9uUERGSlNJbml0Lm5leHQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGVja0hlaWdodCgpOiB2b2lkIHtcclxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3pvb20nKVswXSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgaWYgKGNvbnRhaW5lcikge1xyXG4gICAgICAgIGlmIChjb250YWluZXIuY2xpZW50SGVpZ2h0ID09PSAwKSB7XHJcbiAgICAgICAgICBpZiAoIXRoaXMuYXV0b0hlaWdodCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICAgICAgXCJUaGUgaGVpZ2h0IG9mIHRoZSBQREYgdmlld2VyIHdpZGdldCBpcyB6ZXJvIHBpeGVscy4gUGxlYXNlIGNoZWNrIHRoZSBoZWlnaHQgYXR0cmlidXRlLiBJcyB0aGVyZSBhIHN5bnRheCBlcnJvcj8gT3IgYXJlIHlvdSB1c2luZyBhIHBlcmNlbnRhZ2Ugd2l0aCBhIENTUyBmcmFtZXdvcmsgdGhhdCBkb2Vzbid0IHN1cHBvcnQgdGhpcz8gVGhlIGhlaWdodCBpcyBhZGp1c3RlZCBhdXRvbWF0ZWRseS5cIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmF1dG9IZWlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5hdXRvSGVpZ2h0KSB7XHJcbiAgICAgICAgICBjb25zdCBhdmFpbGFibGUgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgICBjb25zdCByZWN0ID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgY29uc3QgdG9wID0gcmVjdC50b3A7XHJcbiAgICAgICAgICBsZXQgbWF4aW11bUhlaWdodCA9IGF2YWlsYWJsZSAtIHRvcDtcclxuICAgICAgICAgIC8vIHRha2UgdGhlIG1hcmdpbnMgYW5kIHBhZGRpbmdzIG9mIHRoZSBwYXJlbnQgY29udGFpbmVycyBpbnRvIGFjY291bnRcclxuICAgICAgICAgIGNvbnN0IHBhZGRpbmcgPSB0aGlzLmNhbGN1bGF0ZUJvcmRlck1hcmdpbmcoY29udGFpbmVyKTtcclxuICAgICAgICAgIG1heGltdW1IZWlnaHQgLT0gcGFkZGluZztcclxuICAgICAgICAgIGNvbnN0IGZhY3RvciA9IE51bWJlcih0aGlzLl9oZWlnaHQucmVwbGFjZSgnJScsICcnKSk7XHJcbiAgICAgICAgICBtYXhpbXVtSGVpZ2h0ID0gKG1heGltdW1IZWlnaHQgKiBmYWN0b3IpIC8gMTAwO1xyXG4gICAgICAgICAgaWYgKG1heGltdW1IZWlnaHQgPiAxMDApIHtcclxuICAgICAgICAgICAgdGhpcy5taW5IZWlnaHQgPSBgJHttYXhpbXVtSGVpZ2h0fXB4YDtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWluSGVpZ2h0ID0gJzEwMHB4JztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVCb3JkZXJNYXJnaW5nKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgfCBudWxsKTogbnVtYmVyIHtcclxuICAgIGlmIChjb250YWluZXIpIHtcclxuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICBjb25zdCBwYWRkaW5nID0gVW5pdFRvUHgudG9QeChjb21wdXRlZFN0eWxlLnBhZGRpbmdCb3R0b20pO1xyXG4gICAgICBjb25zdCBtYXJnaW4gPSBVbml0VG9QeC50b1B4KGNvbXB1dGVkU3R5bGUubWFyZ2luQm90dG9tKTtcclxuICAgICAgaWYgKGNvbnRhaW5lci5zdHlsZS56SW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gcGFkZGluZyArIG1hcmdpbjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcGFkZGluZyArIG1hcmdpbiArIHRoaXMuY2FsY3VsYXRlQm9yZGVyTWFyZ2luZyhjb250YWluZXIucGFyZW50RWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblNwcmVhZENoYW5nZShuZXdTcHJlYWQ6ICdvZmYnIHwgJ2V2ZW4nIHwgJ29kZCcpOiB2b2lkIHtcclxuICAgIHRoaXMuc3ByZWFkQ2hhbmdlLmVtaXQobmV3U3ByZWFkKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWN0aXZhdGVUZXh0bGF5ZXJJZk5lY2Vzc2FyeShvcHRpb25zOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRleHRMYXllciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGlmICghdGhpcy5oYW5kVG9vbCkge1xyXG4gICAgICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgICAgICBvcHRpb25zLnNldCgndGV4dExheWVyTW9kZScsIHBkZkRlZmF1bHRPcHRpb25zLnRleHRMYXllck1vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRleHRMYXllciA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd0ZpbmRCdXR0b24gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgdGhpcy5zaG93RmluZEJ1dHRvbiA9IHRydWU7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgLy8gdG9kbyByZW1vdmUgdGhpcyBoYWNrOlxyXG4gICAgICAgICAgICBjb25zdCB2aWV3RmluZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3RmluZCcpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAodmlld0ZpbmQpIHtcclxuICAgICAgICAgICAgICB2aWV3RmluZC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBmaW5kYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmRiYXInKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKGZpbmRiYXIpIHtcclxuICAgICAgICAgICAgICBmaW5kYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICAgIG9wdGlvbnMuc2V0KCd0ZXh0TGF5ZXJNb2RlJywgdGhpcy5zaG93SGFuZFRvb2xCdXR0b24gPyBwZGZEZWZhdWx0T3B0aW9ucy50ZXh0TGF5ZXJNb2RlIDogMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5zaG93SGFuZFRvb2xCdXR0b24pIHtcclxuICAgICAgICAgIGlmICh0aGlzLnNob3dGaW5kQnV0dG9uIHx8IHRoaXMuc2hvd0ZpbmRCdXR0b24gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2hvd0ZpbmRCdXR0b24gPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxvZ0xldmVsID49IFZlcmJvc2l0eUxldmVsLldBUk5JTkdTKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxyXG4gICAgICAgICAgICAgICAgJ0hpZGluZyB0aGUgXCJmaW5kXCIgYnV0dG9uIGJlY2F1c2UgdGhlIHRleHQgbGF5ZXIgb2YgdGhlIFBERiBmaWxlIGlzIG5vdCByZW5kZXJlZC4gVXNlIFt0ZXh0TGF5ZXJdPVwidHJ1ZVwiIHRvIGVuYWJsZSB0aGUgZmluZCBidXR0b24uJ1xyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0aGlzLnNob3dIYW5kVG9vbEJ1dHRvbikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sb2dMZXZlbCA+PSBWZXJib3NpdHlMZXZlbC5XQVJOSU5HUykge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcclxuICAgICAgICAgICAgICAgICdIaWRpbmcgdGhlIFwiaGFuZCB0b29sIC8gc2VsZWN0aW9uIG1vZGVcIiBtZW51IGJlY2F1c2UgdGhlIHRleHQgbGF5ZXIgb2YgdGhlIFBERiBmaWxlIGlzIG5vdCByZW5kZXJlZC4gVXNlIFt0ZXh0TGF5ZXJdPVwidHJ1ZVwiIHRvIGVuYWJsZSB0aGUgdGhlIG1lbnUgaXRlbXMuJ1xyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgdGhpcy5zaG93SGFuZFRvb2xCdXR0b24gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMudGV4dExheWVyKSB7XHJcbiAgICAgICAgLy8gdG9kbzogaXMgdGhpcyBhIHJlZHVuZGFudCBjaGVjaz9cclxuICAgICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgICAgb3B0aW9ucy5zZXQoJ3RleHRMYXllck1vZGUnLCBwZGZEZWZhdWx0T3B0aW9ucy50ZXh0TGF5ZXJNb2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50ZXh0TGF5ZXIgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLnNob3dGaW5kQnV0dG9uID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHRoaXMuc2hvd0ZpbmRCdXR0b24gPSB0cnVlO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRvZG8gcmVtb3ZlIHRoaXMgaGFjazpcclxuICAgICAgICAgICAgY29uc3Qgdmlld0ZpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld0ZpbmQnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKHZpZXdGaW5kKSB7XHJcbiAgICAgICAgICAgICAgdmlld0ZpbmQuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZmluZGJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5kYmFyJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmIChmaW5kYmFyKSB7XHJcbiAgICAgICAgICAgICAgZmluZGJhci5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHRvZG86IGlzIHRoZSBlbHNlIGJyYW5jaCBkZWFkIGNvZGU/XHJcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICAgIG9wdGlvbnMuc2V0KCd0ZXh0TGF5ZXJNb2RlJywgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGV4dExheWVyID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd0ZpbmRCdXR0b24pIHtcclxuICAgICAgICAgIGlmICh0aGlzLmxvZ0xldmVsID49IFZlcmJvc2l0eUxldmVsLldBUk5JTkdTKSB7XHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdIaWRpbmcgdGhlIFwiZmluZFwiIGJ1dHRvbiBiZWNhdXNlIHRoZSB0ZXh0IGxheWVyIG9mIHRoZSBQREYgZmlsZSBpcyBub3QgcmVuZGVyZWQuIFVzZSBbdGV4dExheWVyXT1cInRydWVcIiB0byBlbmFibGUgdGhlIGZpbmQgYnV0dG9uLicpO1xyXG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2hvd0ZpbmRCdXR0b24gPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNob3dIYW5kVG9vbEJ1dHRvbikge1xyXG4gICAgICAgICAgaWYgKHRoaXMubG9nTGV2ZWwgPj0gVmVyYm9zaXR5TGV2ZWwuV0FSTklOR1MpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcclxuICAgICAgICAgICAgICAnSGlkaW5nIHRoZSBcImhhbmQgdG9vbCAvIHNlbGVjdGlvbiBtb2RlXCIgbWVudSBiZWNhdXNlIHRoZSB0ZXh0IGxheWVyIG9mIHRoZSBQREYgZmlsZSBpcyBub3QgcmVuZGVyZWQuIFVzZSBbdGV4dExheWVyXT1cInRydWVcIiB0byBlbmFibGUgdGhlIHRoZSBtZW51IGl0ZW1zLidcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93SGFuZFRvb2xCdXR0b24gPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgb3ZlcnJpZGVEZWZhdWx0U2V0dGluZ3MoKSB7XHJcbiAgICBjb25zdCBvcHRpb25zID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucyBhcyBJUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmZvcmluXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBwZGZEZWZhdWx0T3B0aW9ucykge1xyXG4gICAgICBvcHRpb25zLnNldChrZXksIHBkZkRlZmF1bHRPcHRpb25zW2tleV0pO1xyXG4gICAgfVxyXG4gICAgb3B0aW9ucy5zZXQoJ2Rpc2FibGVQcmVmZXJlbmNlcycsIHRydWUpO1xyXG4gICAgYXdhaXQgdGhpcy5zZXRab29tKCk7XHJcblxyXG4gICAgb3B0aW9ucy5zZXQoJ2lnbm9yZUtleWJvYXJkJywgdGhpcy5pZ25vcmVLZXlib2FyZCk7XHJcbiAgICBvcHRpb25zLnNldCgnaWdub3JlS2V5cycsIHRoaXMuaWdub3JlS2V5cyk7XHJcbiAgICBvcHRpb25zLnNldCgnYWNjZXB0S2V5cycsIHRoaXMuYWNjZXB0S2V5cyk7XHJcbiAgICBvcHRpb25zLnNldCgnd2hlZWxBY3Rpb24nLCB0aGlzLndoZWVsQWN0aW9uKTtcclxuICAgIHRoaXMuYWN0aXZhdGVUZXh0bGF5ZXJJZk5lY2Vzc2FyeShvcHRpb25zKTtcclxuXHJcbiAgICBpZiAodGhpcy5zY3JvbGxNb2RlIHx8IHRoaXMuc2Nyb2xsTW9kZSA9PT0gU2Nyb2xsTW9kZVR5cGUudmVydGljYWwpIHtcclxuICAgICAgb3B0aW9ucy5zZXQoJ3Njcm9sbE1vZGVPbkxvYWQnLCB0aGlzLnNjcm9sbE1vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNpZGViYXJWaXNpYmxlID0gdGhpcy5zaWRlYmFyVmlzaWJsZTtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcblxyXG4gICAgaWYgKHNpZGViYXJWaXNpYmxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uc2lkZWJhclZpZXdPbkxvYWQgPSBzaWRlYmFyVmlzaWJsZSA/IDEgOiAwO1xyXG4gICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24uYXBwQ29uZmlnKSB7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uYXBwQ29uZmlnLnNpZGViYXJWaWV3T25Mb2FkID0gc2lkZWJhclZpc2libGUgPyB0aGlzLmFjdGl2ZVNpZGViYXJWaWV3IDogMDtcclxuICAgICAgfVxyXG4gICAgICBvcHRpb25zLnNldCgnc2lkZWJhclZpZXdPbkxvYWQnLCB0aGlzLnNpZGViYXJWaXNpYmxlID8gdGhpcy5hY3RpdmVTaWRlYmFyVmlldyA6IDApO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3ByZWFkID09PSAnZXZlbicpIHtcclxuICAgICAgb3B0aW9ucy5zZXQoJ3NwcmVhZE1vZGVPbkxvYWQnLCAyKTtcclxuICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlcikge1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5zcHJlYWRNb2RlID0gMjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm9uU3ByZWFkQ2hhbmdlKCdldmVuJyk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3ByZWFkID09PSAnb2RkJykge1xyXG4gICAgICBvcHRpb25zLnNldCgnc3ByZWFkTW9kZU9uTG9hZCcsIDEpO1xyXG4gICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyKSB7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnNwcmVhZE1vZGUgPSAxO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMub25TcHJlYWRDaGFuZ2UoJ29kZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb3B0aW9ucy5zZXQoJ3NwcmVhZE1vZGVPbkxvYWQnLCAwKTtcclxuICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlcikge1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5zcHJlYWRNb2RlID0gMDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm9uU3ByZWFkQ2hhbmdlKCdvZmYnKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnByaW50UmVzb2x1dGlvbikge1xyXG4gICAgICBvcHRpb25zLnNldCgncHJpbnRSZXNvbHV0aW9uJywgdGhpcy5wcmludFJlc29sdXRpb24pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2hvd0JvcmRlcnMgPT09IGZhbHNlKSB7XHJcbiAgICAgIG9wdGlvbnMuc2V0KCdyZW1vdmVQYWdlQm9yZGVycycsICF0aGlzLnNob3dCb3JkZXJzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgb3BlblBERigpIHtcclxuICAgIFNlcnZpY2VXb3JrZXJPcHRpb25zLnNob3dVbnZlcmlmaWVkU2lnbmF0dXJlcyA9IHRoaXMuc2hvd1VudmVyaWZpZWRTaWduYXR1cmVzO1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmVuYWJsZVByaW50ID0gdGhpcy5lbmFibGVQcmludDtcclxuICAgIE5neEV4dGVuZGVkUGRmVmlld2VyQ29tcG9uZW50Lm5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMuX3NyYykge1xyXG4gICAgICB0aGlzLm5neEV4dGVuZGVkUGRmVmlld2VySW5jb21wbGV0ZWx5SW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICAgICAgaWYgKCF0aGlzLmxpc3RlblRvVVJMKSB7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmTGlua1NlcnZpY2Uuc2V0SGFzaCA9IGZ1bmN0aW9uICgpIHsgfTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmluaXRUaW1lb3V0ID0gbnVsbDtcclxuICAgICAgdGhpcy5zZWxlY3RDdXJzb3JUb29sKCk7XHJcblxyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigndGV4dGxheWVycmVuZGVyZWQnLCAoeDogVGV4dExheWVyUmVuZGVyZWRFdmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLnRleHRMYXllclJlbmRlcmVkLmVtaXQoeCkpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdzY3JvbGxtb2RlY2hhbmdlZCcsICh4OiBTY3JvbGxNb2RlQ2hhbmdlZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuc2Nyb2xsTW9kZUNoYW5nZS5lbWl0KHgubW9kZSkpO1xyXG4gICAgICB9KTtcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3Byb2dyZXNzJywgKHg6IFByb2dyZXNzQmFyRXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5wcm9ncmVzcy5lbWl0KHgpKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigncGFnZXNsb2FkZWQnLCBhc3luYyAoeDogUGFnZXNMb2FkZWRFdmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLnBhZ2VzTG9hZGVkLmVtaXQoeCkpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU2Nyb2xsYmFySW5Jbml0aXRlU2Nyb2xsTW9kZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLnJvdGF0aW9uICE9PSB1bmRlZmluZWQgJiYgdGhpcy5yb3RhdGlvbiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgY29uc3QgciA9IE51bWJlcih0aGlzLnJvdGF0aW9uKTtcclxuICAgICAgICAgIGlmIChyID09PSAwIHx8IHIgPT09IDkwIHx8IHIgPT09IDE4MCB8fCByID09PSAyNzApIHtcclxuICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnBhZ2VzUm90YXRpb24gPSByO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGlmICghdGhpcy5zaHV0dGluZ0Rvd24pIHtcclxuICAgICAgICAgICAgLy8gaHVycmllZCB1c2VycyBzb21ldGltZXMgcmVsb2FkIHRoZSBQREYgYmVmb3JlIGl0IGhhcyBmaW5pc2hlZCBpbml0aWFsaXppbmdcclxuICAgICAgICAgICAgaWYgKHRoaXMubmFtZWRkZXN0KSB7XHJcbiAgICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmTGlua1NlcnZpY2UuZ29Ub0Rlc3RpbmF0aW9uKHRoaXMubmFtZWRkZXN0KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBhZ2UpIHtcclxuICAgICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wYWdlID0gTnVtYmVyKHRoaXMucGFnZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wYWdlTGFiZWwpIHtcclxuICAgICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuY3VycmVudFBhZ2VMYWJlbCA9IHRoaXMucGFnZUxhYmVsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5zZXRab29tKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigncGFnZXJlbmRlcmVkJywgKHg6IFBhZ2VSZW5kZXJlZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMucGFnZVJlbmRlcmVkLmVtaXQoeCk7XHJcbiAgICAgICAgICB0aGlzLnJlbW92ZVNjcm9sbGJhckluSW5pdGl0ZVNjcm9sbE1vZGUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdwYWdlcmVuZGVyJywgKHg6IFBhZ2VSZW5kZXJFdmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnBhZ2VSZW5kZXIuZW1pdCh4KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignZG93bmxvYWQnLCAoeDogUGRmRG93bmxvYWRlZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMucGRmRG93bmxvYWRlZC5lbWl0KHgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3NjYWxlY2hhbmdpbmcnLCAoeDogU2NhbGVDaGFuZ2luZ0V2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRab29tRmFjdG9yLmVtaXQoeC5zY2FsZSk7XHJcbiAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHgucHJlc2V0VmFsdWUgIT09ICdhdXRvJyAmJiB4LnByZXNldFZhbHVlICE9PSAncGFnZS1maXQnICYmIHgucHJlc2V0VmFsdWUgIT09ICdwYWdlLWFjdHVhbCcgJiYgeC5wcmVzZXRWYWx1ZSAhPT0gJ3BhZ2Utd2lkdGgnKSB7XHJcbiAgICAgICAgICAvLyBpZ25vcmUgcm91bmRpbmcgZGlmZmVyZW5jZXNcclxuICAgICAgICAgIGlmIChNYXRoLmFicyh4LnByZXZpb3VzU2NhbGUgLSB4LnNjYWxlKSA+IDAuMDAwMDAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuem9vbSA9IHguc2NhbGUgKiAxMDA7XHJcbiAgICAgICAgICAgIHRoaXMuem9vbUNoYW5nZS5lbWl0KHguc2NhbGUgKiAxMDApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoeC5wcmV2aW91c1ByZXNldFZhbHVlICE9PSB4LnByZXNldFZhbHVlKSB7XHJcbiAgICAgICAgICAvLyBjYWxsZWQgd2hlbiB0aGUgdXNlciBzZWxlY3RzIG9uZSBvZiB0aGUgdGV4dCB2YWx1ZXMgb2YgdGhlIHpvb20gc2VsZWN0IGRyb3Bkb3duXHJcbiAgICAgICAgICB0aGlzLnpvb21DaGFuZ2UuZW1pdCh4LnByZXNldFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3JvdGF0aW9uY2hhbmdpbmcnLCAoeDogUGFnZXNSb3RhdGlvbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMucm90YXRpb25DaGFuZ2UuZW1pdCh4LnBhZ2VzUm90YXRpb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ2ZpbGVpbnB1dGNoYW5nZScsICh4OiBGaWxlSW5wdXRDaGFuZ2VkKSA9PiB7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgIGlmICh4LmZpbGVJbnB1dC5maWxlcyAmJiB4LmZpbGVJbnB1dC5maWxlcy5sZW5ndGggPj0gMSkge1xyXG4gICAgICAgICAgICAvLyBkcmFnIGFuZCBkcm9wXHJcbiAgICAgICAgICAgIHRoaXMuc3JjQ2hhbmdlLmVtaXQoeC5maWxlSW5wdXQuZmlsZXNbMF0ubmFtZSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyByZWd1bGFyIGZpbGUgb3BlbiBkaWFsb2dcclxuICAgICAgICAgICAgY29uc3QgcGF0aCA9IHguZmlsZUlucHV0Py52YWx1ZT8ucmVwbGFjZSgnQzpcXFxcZmFrZXBhdGhcXFxcJywgJycpO1xyXG4gICAgICAgICAgICB0aGlzLnNyY0NoYW5nZS5lbWl0KHBhdGgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ2N1cnNvcnRvb2xjaGFuZ2VkJywgKHg6IEhhbmR0b29sQ2hhbmdlZCkgPT4ge1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmhhbmRUb29sID0geC50b29sID09PSBQZGZDdXJzb3JUb29scy5IQU5EO1xyXG4gICAgICAgICAgdGhpcy5oYW5kVG9vbENoYW5nZS5lbWl0KHgudG9vbCA9PT0gUGRmQ3Vyc29yVG9vbHMuSEFORCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3NpZGViYXJ2aWV3Y2hhbmdlZCcsICh4OiBTaWRlYmFydmlld0NoYW5nZSkgPT4ge1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNpZGViYXJWaXNpYmxlQ2hhbmdlLmVtaXQoeC52aWV3ID4gMCk7XHJcbiAgICAgICAgICBpZiAoeC52aWV3ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVNpZGViYXJWaWV3Q2hhbmdlLmVtaXQoeC52aWV3KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0aGlzLnNpZGViYXJDb21wb25lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5zaWRlYmFyQ29tcG9uZW50LnNob3dUb29sYmFyV2hlbk5lY2Vzc2FyeSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdkb2N1bWVudGxvYWRlZCcsIChwZGZMb2FkZWRFdmVudDogUGRmRG9jdW1lbnRMb2FkZWRFdmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmxvYWRDb21wbGV0ZShwZGZMb2FkZWRFdmVudC5zb3VyY2UucGRmRG9jdW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGhpZGVTaWRlYmFyVG9vbGJhciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHRoaXMuc2lkZWJhckNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnNpZGViYXJDb21wb25lbnQuc2hvd1Rvb2xiYXJXaGVuTmVjZXNzYXJ5KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignb3V0bGluZWxvYWRlZCcsIGhpZGVTaWRlYmFyVG9vbGJhcik7XHJcblxyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignYXR0YWNobWVudHNsb2FkZWQnLCBoaWRlU2lkZWJhclRvb2xiYXIpO1xyXG5cclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ2xheWVyc2xvYWRlZCcsIGhpZGVTaWRlYmFyVG9vbGJhcik7XHJcblxyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignYW5ub3RhdGlvbmxheWVycmVuZGVyZWQnLCAoZXZlbnQpID0+IHRoaXMuYW5ub3RhdGlvbkxheWVyUmVuZGVyZWQuZW1pdChldmVudCkpO1xyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignYW5ub3RhdGlvbmVkaXRvcmxheWVycmVuZGVyZWQnLCAoZXZlbnQpID0+IHRoaXMuYW5ub3RhdGlvbkVkaXRvckxheWVyUmVuZGVyZWQuZW1pdChldmVudCkpO1xyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigneGZhbGF5ZXJyZW5kZXJlZCcsIChldmVudCkgPT4gdGhpcy54ZmFMYXllclJlbmRlcmVkLmVtaXQoZXZlbnQpKTtcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ291dGxpbmVsb2FkZWQnLCAoZXZlbnQpID0+IHRoaXMub3V0bGluZUxvYWRlZC5lbWl0KGV2ZW50KSk7XHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdhdHRhY2htZW50c2xvYWRlZCcsIChldmVudCkgPT4gdGhpcy5hdHRhY2htZW50c2xvYWRlZC5lbWl0KGV2ZW50KSk7XHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdsYXllcnNsb2FkZWQnLCAoZXZlbnQpID0+IHRoaXMubGF5ZXJzbG9hZGVkLmVtaXQoZXZlbnQpKTtcclxuXHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCd1cGRhdGVmaW5kY29udHJvbHN0YXRlJywgKHg6IEZpbmRSZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAoeC5zdGF0ZSA9PT0gRmluZFN0YXRlLk5PVF9GT1VORCkge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVGaW5kTWF0Y2hlc0NvdW50LmVtaXQoeyBjdXJyZW50OiAwLCB0b3RhbDogMCB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHgubWF0Y2hlc0NvdW50LnRvdGFsKSB7XHJcbiAgICAgICAgICB4Lm1hdGNoZXNDb3VudC5tYXRjaGVzID0gUERGVmlld2VyQXBwbGljYXRpb24uZmluZENvbnRyb2xsZXIuX3BhZ2VNYXRjaGVzO1xyXG4gICAgICAgICAgeC5tYXRjaGVzQ291bnQubWF0Y2hlc0xlbmd0aCA9IFBERlZpZXdlckFwcGxpY2F0aW9uLmZpbmRDb250cm9sbGVyLl9wYWdlTWF0Y2hlc0xlbmd0aDtcclxuICAgICAgICAgIHgubWF0Y2hlc0NvdW50Lm1hdGNoZXNDb2xvciA9IFBERlZpZXdlckFwcGxpY2F0aW9uLmZpbmRDb250cm9sbGVyLl9wYWdlTWF0Y2hlc0NvbG9yO1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVGaW5kTWF0Y2hlc0NvdW50LmVtaXQoeC5tYXRjaGVzQ291bnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudXBkYXRlRmluZFN0YXRlKSB7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZUZpbmRTdGF0ZS5lbWl0KHguc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCd1cGRhdGVmaW5kbWF0Y2hlc2NvdW50JywgKHg6IEZpbmRSZXN1bHQpID0+IHtcclxuICAgICAgICB4Lm1hdGNoZXNDb3VudC5tYXRjaGVzID0gUERGVmlld2VyQXBwbGljYXRpb24uZmluZENvbnRyb2xsZXIuX3BhZ2VNYXRjaGVzO1xyXG4gICAgICAgIHgubWF0Y2hlc0NvdW50Lm1hdGNoZXNMZW5ndGggPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQ29udHJvbGxlci5fcGFnZU1hdGNoZXNMZW5ndGg7XHJcbiAgICAgICAgeC5tYXRjaGVzQ291bnQubWF0Y2hlc0NvbG9yID0gUERGVmlld2VyQXBwbGljYXRpb24uZmluZENvbnRyb2xsZXIuX3BhZ2VNYXRjaGVzQ29sb3I7XHJcbiAgICAgICAgdGhpcy51cGRhdGVGaW5kTWF0Y2hlc0NvdW50LmVtaXQoeC5tYXRjaGVzQ291bnQpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdwYWdlY2hhbmdpbmcnLCAoeDogUGFnZU51bWJlckNoYW5nZSkgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5zaHV0dGluZ0Rvd24pIHtcclxuICAgICAgICAgIC8vIGh1cnJpZWQgdXNlcnMgc29tZXRpbWVzIHJlbG9hZCB0aGUgUERGIGJlZm9yZSBpdCBoYXMgZmluaXNoZWQgaW5pdGlhbGl6aW5nXHJcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UGFnZSA9IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5jdXJyZW50UGFnZU51bWJlcjtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFBhZ2VMYWJlbCA9IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5jdXJyZW50UGFnZUxhYmVsO1xyXG5cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlICE9PSB0aGlzLnBhZ2UpIHtcclxuICAgICAgICAgICAgICB0aGlzLnBhZ2VDaGFuZ2UuZW1pdChjdXJyZW50UGFnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlTGFiZWwgIT09IHRoaXMucGFnZUxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTGFiZWxDaGFuZ2UuZW1pdChjdXJyZW50UGFnZUxhYmVsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4gdGhpcy5jaGVja0hlaWdodCgpLCAxMDApO1xyXG4gICAgICAvLyBvcGVuIGEgZmlsZSBpbiB0aGUgdmlld2VyXHJcbiAgICAgIGlmICghIXRoaXMuX3NyYykge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcclxuICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxyXG4gICAgICAgICAgdmVyYm9zaXR5OiB0aGlzLmxvZ0xldmVsLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHRoaXMuX3NyY1sncmFuZ2UnXSkge1xyXG4gICAgICAgICAgb3B0aW9ucy5yYW5nZSA9IHRoaXMuX3NyY1sncmFuZ2UnXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaHR0cEhlYWRlcnMpIHtcclxuICAgICAgICAgIG9wdGlvbnMuaHR0cEhlYWRlcnMgPSB0aGlzLmh0dHBIZWFkZXJzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5hdXRob3JpemF0aW9uKSB7XHJcbiAgICAgICAgICBvcHRpb25zLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmF1dGhvcml6YXRpb24gIT0gXCJib29sZWFuXCIpIHtcclxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmh0dHBIZWFkZXJzKSBvcHRpb25zLmh0dHBIZWFkZXJzID0ge307XHJcblxyXG4gICAgICAgICAgICBvcHRpb25zLmh0dHBIZWFkZXJzLkF1dGhvcml6YXRpb24gPSB0aGlzLmF1dGhvcml6YXRpb247XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9wdGlvbnMuYmFzZUhyZWYgPSB0aGlzLmJhc2VIcmVmO1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLm9uRXJyb3IgPSAoZXJyb3I6IEVycm9yKSA9PiB0aGlzLnBkZkxvYWRpbmdGYWlsZWQuZW1pdChlcnJvcik7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zcmMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMudXJsID0gdGhpcy5fc3JjO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zcmMgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xyXG4gICAgICAgICAgICBvcHRpb25zLmRhdGEgPSB0aGlzLl9zcmM7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3NyYyBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5kYXRhID0gdGhpcy5fc3JjO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgb3B0aW9ucy5yYW5nZUNodW5rU2l6ZSA9IHBkZkRlZmF1bHRPcHRpb25zLnJhbmdlQ2h1bmtTaXplO1xyXG4gICAgICAgICAgYXdhaXQgUERGVmlld2VyQXBwbGljYXRpb24ub3BlbihvcHRpb25zKTtcclxuICAgICAgICAgIHRoaXMucGRmTG9hZGluZ1N0YXJ0cy5lbWl0KHt9KTtcclxuICAgICAgICAgIC8vIGF3YWl0IHRoaXMuc2V0Wm9vbSgpO1xyXG4gICAgICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB0aGlzLnNldFpvb20oKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNodXR0aW5nRG93bikge1xyXG4gICAgICAgICAgLy8gaHVycmllZCB1c2VycyBzb21ldGltZXMgcmVsb2FkIHRoZSBQREYgYmVmb3JlIGl0IGhhcyBmaW5pc2hlZCBpbml0aWFsaXppbmdcclxuICAgICAgICAgIGlmICh0aGlzLnBhZ2UpIHtcclxuICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGFnZSA9IE51bWJlcih0aGlzLnBhZ2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSwgMTAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlU2Nyb2xsYmFySW5Jbml0aXRlU2Nyb2xsTW9kZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnBhZ2VWaWV3TW9kZSA9PT0gJ2luZmluaXRlLXNjcm9sbCcpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFnZVZpZXdNb2RlID09PSAnaW5maW5pdGUtc2Nyb2xsJykge1xyXG4gICAgICAgICAgY29uc3Qgdmlld2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdlcicpO1xyXG4gICAgICAgICAgaWYgKHZpZXdlcikge1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSB2aWV3ZXIuY2xpZW50SGVpZ2h0ICsgMTc7XHJcbiAgICAgICAgICAgIGNvbnN0IHpvb20gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd6b29tJylbMF07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByaW1hcnlNZW51VmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0ICsgMzUgKyAncHgnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlmIChoZWlnaHQgPiAxNykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoem9vbSkge1xyXG4gICAgICAgICAgICAgICg8SFRNTEVsZW1lbnQ+em9vbSkuc3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIG9wZW5QREYyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgdGhpcy5vdmVycmlkZURlZmF1bHRTZXR0aW5ncygpO1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuXHJcbiAgICAvLyAjODAyIGNsZWFyIHRoZSBmb3JtIGRhdGE7IG90aGVyd2lzZSB0aGUgXCJkb3dubG9hZFwiIGRpYWxvZ3Mgb3BlbnNcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50Py5hbm5vdGF0aW9uU3RvcmFnZT8ucmVzZXRNb2RpZmllZCgpO1xyXG5cclxuICAgIGF3YWl0IFBERlZpZXdlckFwcGxpY2F0aW9uLmNsb3NlKCk7XHJcbiAgICB0aGlzLmZvcm1EYXRhID0ge307XHJcbiAgICB0aGlzLmZvcm1JZFRvRmllbGROYW1lID0ge307XHJcbiAgICB0aGlzLmZvcm1SYWRpb0J1dHRvblZhbHVlVG9JZCA9IHt9O1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcclxuICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXHJcbiAgICAgIHZlcmJvc2l0eTogdGhpcy5sb2dMZXZlbCxcclxuICAgIH07XHJcbiAgICBpZiAodGhpcy5fc3JjICYmIHRoaXMuX3NyY1sncmFuZ2UnXSkge1xyXG4gICAgICBvcHRpb25zLnJhbmdlID0gdGhpcy5fc3JjWydyYW5nZSddO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaHR0cEhlYWRlcnMpIHtcclxuICAgICAgb3B0aW9ucy5odHRwSGVhZGVycyA9IHRoaXMuaHR0cEhlYWRlcnM7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5hdXRob3JpemF0aW9uKSB7XHJcbiAgICAgIG9wdGlvbnMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5hdXRob3JpemF0aW9uICE9IFwiYm9vbGVhblwiKSB7XHJcbiAgICAgICAgaWYgKCFvcHRpb25zLmh0dHBIZWFkZXJzKSBvcHRpb25zLmh0dHBIZWFkZXJzID0ge307XHJcblxyXG4gICAgICAgIG9wdGlvbnMuaHR0cEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IHRoaXMuYXV0aG9yaXphdGlvbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgb3B0aW9ucy5iYXNlSHJlZiA9IHRoaXMuYmFzZUhyZWY7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAodHlwZW9mIHRoaXMuX3NyYyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBvcHRpb25zLnVybCA9IHRoaXMuX3NyYztcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9zcmMgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xyXG4gICAgICAgIG9wdGlvbnMuZGF0YSA9IHRoaXMuX3NyYztcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9zcmMgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XHJcbiAgICAgICAgb3B0aW9ucy5kYXRhID0gdGhpcy5fc3JjO1xyXG4gICAgICB9XHJcbiAgICAgIG9wdGlvbnMucmFuZ2VDaHVua1NpemUgPSBwZGZEZWZhdWx0T3B0aW9ucy5yYW5nZUNodW5rU2l6ZTtcclxuICAgICAgYXdhaXQgUERGVmlld2VyQXBwbGljYXRpb24ub3BlbihvcHRpb25zKTtcclxuICAgICAgdGhpcy5wZGZMb2FkZWQuZW1pdCh7IHBhZ2VzQ291bnQ6IFBERlZpZXdlckFwcGxpY2F0aW9uLnBhZ2VzQ291bnQgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0aGlzLnBkZkxvYWRpbmdGYWlsZWQuZW1pdChlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNlbGVjdEN1cnNvclRvb2woKSB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMuZGlzcGF0Y2goJ3N3aXRjaGN1cnNvcnRvb2wnLCB7IHRvb2w6IHRoaXMuaGFuZFRvb2wgPyAxIDogMCB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBuZ09uRGVzdHJveSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXR1cm47IC8vIGZhc3QgZXNjYXBlIGZvciBzZXJ2ZXIgc2lkZSByZW5kZXJpbmdcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvcmlnaW5hbFByaW50ID0gTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQub3JpZ2luYWxQcmludDtcclxuICAgIGlmICh3aW5kb3cgJiYgb3JpZ2luYWxQcmludCAmJiAhb3JpZ2luYWxQcmludC50b1N0cmluZygpLmluY2x1ZGVzKCdwcmludFBkZicpKSB7XHJcbiAgICAgIHdpbmRvdy5wcmludCA9IG9yaWdpbmFsUHJpbnQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBwcmludENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmludENvbnRhaW5lcicpO1xyXG4gICAgaWYgKHByaW50Q29udGFpbmVyKSB7XHJcbiAgICAgIHByaW50Q29udGFpbmVyLnBhcmVudEVsZW1lbnQ/LnJlbW92ZUNoaWxkKHByaW50Q29udGFpbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICAod2luZG93IGFzIGFueSkuZ2V0Rm9ybVZhbHVlID0gdW5kZWZpbmVkO1xyXG4gICAgKHdpbmRvdyBhcyBhbnkpLnNldEZvcm1WYWx1ZSA9IHVuZGVmaW5lZDtcclxuICAgICh3aW5kb3cgYXMgYW55KS5yZWdpc3RlckFjcm9mb3JtQW5ub3RhdGlvbnMgPSB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgdGhpcy5zaHV0dGluZ0Rvd24gPSB0cnVlO1xyXG5cclxuICAgIE5neEV4dGVuZGVkUGRmVmlld2VyQ29tcG9uZW50Lm5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLmluaXRUaW1lb3V0KSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmluaXRUaW1lb3V0KTtcclxuICAgICAgdGhpcy5pbml0VGltZW91dCA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbikge1xyXG4gICAgICBpZiAodGhpcy5waW5jaE9uTW9iaWxlU3VwcG9ydCkge1xyXG4gICAgICAgIHRoaXMucGluY2hPbk1vYmlsZVN1cHBvcnQuZGVzdHJveVBpbmNoWm9vbSgpO1xyXG4gICAgICAgIHRoaXMucGluY2hPbk1vYmlsZVN1cHBvcnQgPSB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMucmVsYXRpdmVDb29yZHNTdXBwb3J0KSB7XHJcbiAgICAgICAgdGhpcy5yZWxhdGl2ZUNvb3Jkc1N1cHBvcnQuZGVzdHJveVJlbGF0aXZlQ29vcmRzKCk7XHJcbiAgICAgICAgdGhpcy5yZWxhdGl2ZUNvb3Jkc1N1cHBvcnQgPSB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vICM4MDIgY2xlYXIgdGhlIGZvcm0gZGF0YTsgb3RoZXJ3aXNlIHRoZSBcImRvd25sb2FkXCIgZGlhbG9ncyBvcGVuc1xyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudD8uYW5ub3RhdGlvblN0b3JhZ2U/LnJlc2V0TW9kaWZpZWQoKTtcclxuICAgICAgdGhpcy5mb3JtRGF0YSA9IHt9O1xyXG4gICAgICB0aGlzLmZvcm1JZFRvRmllbGROYW1lID0ge307XHJcbiAgICAgIHRoaXMuZm9ybVJhZGlvQnV0dG9uVmFsdWVUb0lkID0ge307XHJcblxyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5fY2xlYW51cCgpO1xyXG5cclxuICAgICAgYXdhaXQgUERGVmlld2VyQXBwbGljYXRpb24uY2xvc2UoKTtcclxuICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uLnByaW50S2V5RG93bkxpc3RlbmVyKSB7XHJcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIFBERlZpZXdlckFwcGxpY2F0aW9uLnByaW50S2V5RG93bkxpc3RlbmVyLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24uX2JvdW5kRXZlbnRzKSB7XHJcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi51bmJpbmRXaW5kb3dFdmVudHMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYnVzID0gUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXM7XHJcbiAgICAgICAgaWYgKGJ1cykge1xyXG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24udW5iaW5kRXZlbnRzKCk7XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBidXMuX2xpc3RlbmVycykge1xyXG4gICAgICAgICAgICBpZiAoYnVzLl9saXN0ZW5lcnNba2V5XSkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBidXMuX2xpc3RlbmVyc1trZXldO1xyXG4gICAgICAgICAgICAgIC8vIG5vdCBzdXJlIGlmIHRoZSBmb3IgbG9vcCBpcyBuZWNlc3NhcnkgLSBidXRcclxuICAgICAgICAgICAgICAvLyBpdCBtaWdodCBpbXByb3ZlIGdhcmJhZ2UgY29sbGVjdGlvbiBpZiB0aGUgXCJsaXN0ZW5lcnNcIlxyXG4gICAgICAgICAgICAgIC8vIGFycmF5IGlzIHN0b3JlZCBzb21ld2hlcmUgZWxzZVxyXG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGlzdFtpXSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYnVzLl9saXN0ZW5lcnNba2V5XSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAoUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMgYXMgYW55KSA9IG51bGw7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1ByaW1hcnlNZW51VmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLnNob3dUb29sYmFyKSB7XHJcbiAgICAgIGNvbnN0IHZpc2libGUgPVxyXG4gICAgICAgIHRoaXMuc2hvd0Rvd25sb2FkQnV0dG9uIHx8XHJcbiAgICAgICAgdGhpcy5zaG93RmluZEJ1dHRvbiB8fFxyXG4gICAgICAgIHRoaXMuc2hvd09wZW5GaWxlQnV0dG9uIHx8XHJcbiAgICAgICAgdGhpcy5zaG93UGFnaW5nQnV0dG9ucyB8fFxyXG4gICAgICAgIHRoaXMuc2hvd1ByZXNlbnRhdGlvbk1vZGVCdXR0b24gfHxcclxuICAgICAgICB0aGlzLnNob3dQcmludEJ1dHRvbiB8fFxyXG4gICAgICAgIHRoaXMuc2hvd1Byb3BlcnRpZXNCdXR0b24gfHxcclxuICAgICAgICB0aGlzLnNob3dSb3RhdGVCdXR0b24gfHxcclxuICAgICAgICB0aGlzLnNob3dIYW5kVG9vbEJ1dHRvbiB8fFxyXG4gICAgICAgIHRoaXMuc2hvd1Njcm9sbGluZ0J1dHRvbiB8fFxyXG4gICAgICAgIHRoaXMuc2hvd1NwcmVhZEJ1dHRvbiB8fFxyXG4gICAgICAgIHRoaXMuc2hvd1NpZGViYXJCdXR0b24gfHxcclxuICAgICAgICB0aGlzLnNob3dab29tQnV0dG9ucztcclxuXHJcbiAgICAgIGlmICh2aXNpYmxlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuOyAvLyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmdcclxuICAgIH1cclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM6IElQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMgPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xyXG5cclxuICAgIGlmIChOZ3hFeHRlbmRlZFBkZlZpZXdlckNvbXBvbmVudC5uZ3hFeHRlbmRlZFBkZlZpZXdlckluaXRpYWxpemVkKSB7XHJcbiAgICAgIGlmICgnc3JjJyBpbiBjaGFuZ2VzIHx8ICdiYXNlNjRTcmMnIGluIGNoYW5nZXMpIHtcclxuICAgICAgICBpZiAodGhpcy5zcmNDaGFuZ2VUcmlnZ2VyZWRCeVVzZXIpIHtcclxuICAgICAgICAgIHRoaXMuc3JjQ2hhbmdlVHJpZ2dlcmVkQnlVc2VyID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmICghIXRoaXMuX3NyYykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5uZ3hFeHRlbmRlZFBkZlZpZXdlckluY29tcGxldGVseUluaXRpYWxpemVkKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5vcGVuUERGKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5vcGVuUERGMigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyAjODAyIGNsZWFyIHRoZSBmb3JtIGRhdGE7IG90aGVyd2lzZSB0aGUgXCJkb3dubG9hZFwiIGRpYWxvZ3Mgb3BlbnNcclxuICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmRG9jdW1lbnQ/LmFubm90YXRpb25TdG9yYWdlPy5yZXNldE1vZGlmaWVkKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybURhdGEgPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtSWRUb0ZpZWxkTmFtZSA9IHt9O1xyXG4gICAgICAgICAgICB0aGlzLmZvcm1SYWRpb0J1dHRvblZhbHVlVG9JZCA9IHt9O1xyXG5cclxuICAgICAgICAgICAgbGV0IGlucHV0RmllbGQgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5hcHBDb25maWc/Lm9wZW5GaWxlSW5wdXQ7XHJcbiAgICAgICAgICAgIGlmICghaW5wdXRGaWVsZCkge1xyXG4gICAgICAgICAgICAgIGlucHV0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlsZUlucHV0JykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5wdXRGaWVsZCkge1xyXG4gICAgICAgICAgICAgIGlucHV0RmllbGQudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXdhaXQgUERGVmlld2VyQXBwbGljYXRpb24uY2xvc2UoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCdlbmFibGVEcmFnQW5kRHJvcCcgaW4gY2hhbmdlcykge1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ2VuYWJsZURyYWdBbmREcm9wJywgdGhpcy5lbmFibGVEcmFnQW5kRHJvcCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICgnem9vbScgaW4gY2hhbmdlcykge1xyXG4gICAgICAgIChhc3luYyAoKSA9PiB0aGlzLnNldFpvb20oKSkoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCdtYXhab29tJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLnNldCgnbWF4Wm9vbScsIHRoaXMubWF4Wm9vbSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICgnbWluWm9vbScgaW4gY2hhbmdlcykge1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ21pblpvb20nLCB0aGlzLm1pblpvb20pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoJ2hhbmRUb29sJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RDdXJzb3JUb29sKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCdwYWdlJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFnZSkge1xyXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB0cmlwbGUtZXF1YWxzXHJcbiAgICAgICAgICBpZiAodGhpcy5wYWdlICE9IFBERlZpZXdlckFwcGxpY2F0aW9uLnBhZ2UpIHtcclxuICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGFnZSA9IHRoaXMucGFnZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCdwYWdlTGFiZWwnIGluIGNoYW5nZXMpIHtcclxuICAgICAgICBpZiAodGhpcy5wYWdlTGFiZWwpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnBhZ2VMYWJlbCAhPT0gUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLmN1cnJlbnRQYWdlTGFiZWwpIHtcclxuICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLmN1cnJlbnRQYWdlTGFiZWwgPSB0aGlzLnBhZ2VMYWJlbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICgncm90YXRpb24nIGluIGNoYW5nZXMpIHtcclxuICAgICAgICBpZiAodGhpcy5yb3RhdGlvbikge1xyXG4gICAgICAgICAgY29uc3QgciA9IE51bWJlcih0aGlzLnJvdGF0aW9uKTtcclxuICAgICAgICAgIGlmIChyID09PSAwIHx8IHIgPT09IDkwIHx8IHIgPT09IDE4MCB8fCByID09PSAyNzApIHtcclxuICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnBhZ2VzUm90YXRpb24gPSByO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIucGFnZXNSb3RhdGlvbiA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICgnc2Nyb2xsTW9kZScgaW4gY2hhbmdlcykge1xyXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbE1vZGUgfHwgdGhpcy5zY3JvbGxNb2RlID09PSBTY3JvbGxNb2RlVHlwZS52ZXJ0aWNhbCkge1xyXG4gICAgICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5zY3JvbGxNb2RlICE9PSBOdW1iZXIodGhpcy5zY3JvbGxNb2RlKSkge1xyXG4gICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5kaXNwYXRjaCgnc3dpdGNoc2Nyb2xsbW9kZScsIHsgbW9kZTogTnVtYmVyKHRoaXMuc2Nyb2xsTW9kZSkgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICgnc2lkZWJhclZpc2libGUnIGluIGNoYW5nZXMgfHwgJ2FjdGl2ZVNpZGViYXJWaWV3JyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2lkZWJhclZpc2libGUpIHtcclxuICAgICAgICAgIGNvbnN0IHZpZXcgPSBOdW1iZXIodGhpcy5hY3RpdmVTaWRlYmFyVmlldyk7XHJcbiAgICAgICAgICBpZiAodmlldyA9PT0gMSB8fCB2aWV3ID09PSAyIHx8IHZpZXcgPT09IDMgfHwgdmlldyA9PT0gNCkge1xyXG4gICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZTaWRlYmFyLnN3aXRjaFZpZXcodmlldywgdHJ1ZSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbYWN0aXZlU2lkZWJhclZpZXddIG11c3QgYmUgYW4gaW50ZWdlciB2YWx1ZSBiZXR3ZWVuIDEgYW5kIDQnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmU2lkZWJhci5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoJ2ZpbGVuYW1lRm9yRG93bmxvYWQnIGluIGNoYW5nZXMpIHtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5hcHBDb25maWcuZmlsZW5hbWVGb3JEb3dubG9hZCA9IHRoaXMuZmlsZW5hbWVGb3JEb3dubG9hZDtcclxuICAgICAgfVxyXG4gICAgICBpZiAoJ25hbWVkZGVzdCcgaW4gY2hhbmdlcykge1xyXG4gICAgICAgIGlmICh0aGlzLm5hbWVkZGVzdCkge1xyXG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmTGlua1NlcnZpY2UuZ29Ub0Rlc3RpbmF0aW9uKHRoaXMubmFtZWRkZXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICgnc3ByZWFkJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3ByZWFkID09PSAnZXZlbicpIHtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnNwcmVhZE1vZGVPbkxvYWQgPSAyO1xyXG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnNwcmVhZE1vZGUgPSAyO1xyXG4gICAgICAgICAgdGhpcy5vblNwcmVhZENoYW5nZSgnZXZlbicpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zcHJlYWQgPT09ICdvZGQnKSB7XHJcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5zcHJlYWRNb2RlT25Mb2FkID0gMTtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5zcHJlYWRNb2RlID0gMTtcclxuICAgICAgICAgIHRoaXMub25TcHJlYWRDaGFuZ2UoJ29kZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5zcHJlYWRNb2RlT25Mb2FkID0gMDtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5zcHJlYWRNb2RlID0gMDtcclxuICAgICAgICAgIHRoaXMub25TcHJlYWRDaGFuZ2UoJ29mZicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCd3aGVlbEFjdGlvbicgaW4gY2hhbmdlcykge1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ3doZWVsQWN0aW9uJywgdGhpcy53aGVlbEFjdGlvbik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuaGlkZVRvb2xiYXJJZkl0SXNFbXB0eSgpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2FsY1ZpZXdlclBvc2l0aW9uVG9wKCkpO1xyXG4gICAgfSAvLyBlbmQgb2YgaWYgKE5neEV4dGVuZGVkUGRmVmlld2VyQ29tcG9uZW50Lm5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQpXHJcblxyXG4gICAgaWYgKCdwcmludFJlc29sdXRpb24nIGluIGNoYW5nZXMpIHtcclxuICAgICAgY29uc3Qgb3B0aW9ucyA9IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucztcclxuICAgICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICBvcHRpb25zLnNldCgncHJpbnRSZXNvbHV0aW9uJywgdGhpcy5wcmludFJlc29sdXRpb24pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoJ2lnbm9yZUtleWJvYXJkJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XHJcbiAgICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5vdmVycmlkZURlZmF1bHRTZXR0aW5ncygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoJ2lnbm9yZUtleXMnIGluIGNoYW5nZXMpIHtcclxuICAgICAgY29uc3Qgb3B0aW9ucyA9IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucztcclxuICAgICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLm92ZXJyaWRlRGVmYXVsdFNldHRpbmdzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICgnYWNjZXB0S2V5cycgaW4gY2hhbmdlcykge1xyXG4gICAgICBjb25zdCBvcHRpb25zID0gUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xyXG4gICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMub3ZlcnJpZGVEZWZhdWx0U2V0dGluZ3MoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCdzaG93Qm9yZGVycycgaW4gY2hhbmdlcykge1xyXG4gICAgICBpZiAoIWNoYW5nZXNbJ3Nob3dCb3JkZXJzJ10uaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucztcclxuICAgICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgICAgdGhpcy5vdmVycmlkZURlZmF1bHRTZXR0aW5ncygpO1xyXG4gICAgICAgICAgY29uc3Qgdmlld2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdlcicpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgaWYgKHRoaXMuc2hvd0JvcmRlcnMpIHtcclxuICAgICAgICAgICAgdmlld2VyLmNsYXNzTGlzdC5yZW1vdmUoJ3JlbW92ZVBhZ2VCb3JkZXJzJyk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2aWV3ZXIuY2xhc3NMaXN0LmFkZCgncmVtb3ZlUGFnZUJvcmRlcnMnKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyKSB7XHJcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5yZW1vdmVQYWdlQm9yZGVycyA9ICF0aGlzLnNob3dCb3JkZXJzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3Qgem9vbUV2ZW50ID0ge1xyXG4gICAgICAgICAgICBzb3VyY2U6IHZpZXdlcixcclxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcclxuICAgICAgICAgICAgc2NhbGU6IChOdW1iZXIodGhpcy56b29tKSB8IDEwMCkgLyAxMDAsXHJcbiAgICAgICAgICAgIHByZXNldFZhbHVlOiB0aGlzLnpvb20sXHJcbiAgICAgICAgICB9IGFzIFNjYWxlQ2hhbmdpbmdFdmVudDtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLmRpc3BhdGNoKCdzY2FsZWNoYW5naW5nJywgem9vbUV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoJ3Nob3dVbnZlcmlmaWVkU2lnbmF0dXJlcycgaW4gY2hhbmdlcykge1xyXG4gICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24gJiYgUERGVmlld2VyQXBwbGljYXRpb24ucGRmRG9jdW1lbnQpIHtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudC5fdHJhbnNwb3J0Lm1lc3NhZ2VIYW5kbGVyLnNlbmQoJ3Nob3dVbnZlcmlmaWVkU2lnbmF0dXJlcycsIHRoaXMuc2hvd1VudmVyaWZpZWRTaWduYXR1cmVzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICgnZm9ybURhdGEnIGluIGNoYW5nZXMpIHtcclxuICAgICAgaWYgKCFjaGFuZ2VzWydmb3JtRGF0YSddLmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlRm9ybUZpZWxkcyh0aGlzLmZvcm1EYXRhLCBjaGFuZ2VzWydmb3JtRGF0YSddLnByZXZpb3VzVmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCdlbmFibGVQcmludCcgaW4gY2hhbmdlcykge1xyXG4gICAgICBpZiAoIWNoYW5nZXNbJ2VuYWJsZVByaW50J10uaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZW5hYmxlUHJpbnQgPSB0aGlzLmVuYWJsZVByaW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoXHJcbiAgICAgICgnY3VzdG9tRmluZGJhcicgaW4gY2hhbmdlcyAmJiAhY2hhbmdlc1snY3VzdG9tRmluZGJhciddLmlzRmlyc3RDaGFuZ2UoKSkgfHxcclxuICAgICAgKCdjdXN0b21GaW5kYmFyQnV0dG9ucycgaW4gY2hhbmdlcyAmJiAhY2hhbmdlc1snY3VzdG9tRmluZGJhckJ1dHRvbnMnXS5pc0ZpcnN0Q2hhbmdlKCkpIHx8XHJcbiAgICAgICgnY3VzdG9tRmluZGJhcklucHV0QXJlYScgaW4gY2hhbmdlcyAmJiAhY2hhbmdlc1snY3VzdG9tRmluZGJhcklucHV0QXJlYSddLmlzRmlyc3RDaGFuZ2UoKSkgfHxcclxuICAgICAgKCdjdXN0b21Ub29sYmFyJyBpbiBjaGFuZ2VzICYmICFjaGFuZ2VzWydjdXN0b21Ub29sYmFyJ10uaXNGaXJzdENoYW5nZSgpKVxyXG4gICAgKSB7XHJcbiAgICAgIGlmICh0aGlzLmR1bW15Q29tcG9uZW50cykge1xyXG4gICAgICAgIHRoaXMuZHVtbXlDb21wb25lbnRzLmFkZE1pc3NpbmdTdGFuZGFyZFdpZGdldHMoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICgncGRmQmFja2dyb3VuZENvbG9yJyBpbiBjaGFuZ2VzICYmICFjaGFuZ2VzWydwZGZCYWNrZ3JvdW5kQ29sb3IgJ10uaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ3BkZkJhY2tncm91bmRDb2xvcicsIHRoaXMucGRmQmFja2dyb3VuZCk7XHJcbiAgICB9XHJcbiAgICBpZiAoJ3BkZkJhY2tncm91bmRDb2xvclRvUmVwbGFjZScgaW4gY2hhbmdlcyAmJiAhY2hhbmdlc1sncGRmQmFja2dyb3VuZENvbG9yVG9SZXBsYWNlJ10uaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ3BkZkJhY2tncm91bmRDb2xvclRvUmVwbGFjZScsIHRoaXMucGRmQmFja2dyb3VuZENvbG9yVG9SZXBsYWNlKTtcclxuICAgIH1cclxuICAgIGlmICgncGFnZVZpZXdNb2RlJyBpbiBjaGFuZ2VzICYmICFjaGFuZ2VzWydwYWdlVmlld01vZGUnXS5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgdGhpcy5yZW1vdmVTY3JvbGxiYXJJbkluaXRpdGVTY3JvbGxNb2RlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoJ3JlcGxhY2VCcm93c2VyUHJpbnQnIGluIGNoYW5nZXMpIHtcclxuICAgICAgaWYgKHRoaXMucmVwbGFjZUJyb3dzZXJQcmludCkge1xyXG4gICAgICAgIGlmICgod2luZG93IGFzIGFueSkucHJpbnRQREYpIHtcclxuICAgICAgICAgIHdpbmRvdy5wcmludCA9ICh3aW5kb3cgYXMgYW55KS5wcmludFBERjtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxQcmludCA9IE5neEV4dGVuZGVkUGRmVmlld2VyQ29tcG9uZW50Lm9yaWdpbmFsUHJpbnQ7XHJcbiAgICAgICAgaWYgKG9yaWdpbmFsUHJpbnQgJiYgIW9yaWdpbmFsUHJpbnQudG9TdHJpbmcoKS5pbmNsdWRlcygncHJpbnRQZGYnKSkge1xyXG4gICAgICAgICAgd2luZG93LnByaW50ID0gb3JpZ2luYWxQcmludDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jYWxjVmlld2VyUG9zaXRpb25Ub3AoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIHNldFpvb20oKSB7XHJcbiAgICAvLyBzb21ldGltZXMgbmdPbkNoYW5nZXMgY2FsbHMgdGhpcyBtZXRob2QgYmVmb3JlIHRoZSBwYWdlIGlzIGluaXRpYWxpemVkLFxyXG4gICAgLy8gc28gbGV0J3MgY2hlY2sgaWYgdGhpcy5yb290IGlzIGFscmVhZHkgZGVmaW5lZFxyXG4gICAgaWYgKHRoaXMucm9vdCkge1xyXG4gICAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG5cclxuICAgICAgbGV0IHpvb21Bc051bWJlciA9IHRoaXMuem9vbTtcclxuICAgICAgaWYgKFN0cmluZyh6b29tQXNOdW1iZXIpLmVuZHNXaXRoKCclJykpIHtcclxuICAgICAgICB6b29tQXNOdW1iZXIgPSBOdW1iZXIoU3RyaW5nKHpvb21Bc051bWJlcikucmVwbGFjZSgnJScsICcnKSkgLyAxMDA7XHJcbiAgICAgIH0gZWxzZSBpZiAoIWlzTmFOKE51bWJlcih6b29tQXNOdW1iZXIpKSkge1xyXG4gICAgICAgIHpvb21Bc051bWJlciA9IE51bWJlcih6b29tQXNOdW1iZXIpIC8gMTAwO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghem9vbUFzTnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCFQREZWaWV3ZXJBcHBsaWNhdGlvbi5zdG9yZSkge1xyXG4gICAgICAgICAgLy8gSXQncyBkaWZmaWN1bHQgdG8gcHJldmVudCBjYWxsaW5nIHRoaXMgbWV0aG9kIHRvIGVhcmx5LCBzbyB3ZSBuZWVkIHRoaXMgY2hlY2suXHJcbiAgICAgICAgICAvLyBzZXRab29tKCkgaXMgY2FsbGVkIGxhdGVyIGFnYWluLCB3aGVuIHRoZSBQREYgZG9jdW1lbnQgaGFzIGJlZW4gbG9hZGVkIGFuZCBpdHNcclxuICAgICAgICAgIC8vIGZpbmdlcnByaW50IGhhcyBiZWVuIGNhbGN1bGF0ZWQuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IHVzZXJTZXR0aW5nID0gYXdhaXQgUERGVmlld2VyQXBwbGljYXRpb24uc3RvcmUuZ2V0KCd6b29tJyk7XHJcbiAgICAgICAgICBpZiAodXNlclNldHRpbmcpIHtcclxuICAgICAgICAgICAgaWYgKCFpc05hTihOdW1iZXIodXNlclNldHRpbmcpKSkge1xyXG4gICAgICAgICAgICAgIHpvb21Bc051bWJlciA9IE51bWJlcih1c2VyU2V0dGluZykgLyAxMDA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgem9vbUFzTnVtYmVyID0gdXNlclNldHRpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHpvb21Bc051bWJlciA9ICdhdXRvJztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbikge1xyXG4gICAgICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9uczogSVBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucyA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLnNldCgnZGVmYXVsdFpvb21WYWx1ZScsIHpvb21Bc051bWJlcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHNjYWxlRHJvcGRvd25GaWVsZCA9ICh0aGlzLnJvb3QubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkucXVlcnlTZWxlY3RvcignI3NjYWxlU2VsZWN0JykgYXMgSFRNTFNlbGVjdEVsZW1lbnQgfCB1bmRlZmluZWQ7XHJcbiAgICAgIGlmIChzY2FsZURyb3Bkb3duRmllbGQpIHtcclxuICAgICAgICBpZiAodGhpcy56b29tID09PSAnYXV0bycgfHwgdGhpcy56b29tID09PSAncGFnZS1maXQnIHx8IHRoaXMuem9vbSA9PT0gJ3BhZ2UtYWN0dWFsJyB8fCB0aGlzLnpvb20gPT09ICdwYWdlLXdpZHRoJykge1xyXG4gICAgICAgICAgc2NhbGVEcm9wZG93bkZpZWxkLnZhbHVlID0gdGhpcy56b29tO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzY2FsZURyb3Bkb3duRmllbGQudmFsdWUgPSAnY3VzdG9tJztcclxuICAgICAgICAgIGlmIChzY2FsZURyb3Bkb3duRmllbGQub3B0aW9ucykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBzY2FsZURyb3Bkb3duRmllbGQub3B0aW9ucyBhcyBhbnkpIHtcclxuICAgICAgICAgICAgICBpZiAob3B0aW9uLnZhbHVlID09PSAnY3VzdG9tJykge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChOdW1iZXIoem9vbUFzTnVtYmVyKSAqIDEwMF8wMDApIC8gMTAwMH0lYDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIpIHtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuY3VycmVudFNjYWxlVmFsdWUgPSB6b29tQXNOdW1iZXIgfHwgJ2F1dG8nO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICBjb25zdCBwZGZWaWV3ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdodG1sJyk7XHJcbiAgICBpZiAocGRmVmlld2VyICYmIHBkZlZpZXdlci5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdXRlckNvbnRhaW5lcicpO1xyXG4gICAgICBpZiAoY29udGFpbmVyKSB7XHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSBjb250YWluZXIuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgdGhpcy50b29sYmFyV2lkdGhJblBpeGVscyA9IHdpZHRoO1xyXG4gICAgICAgIGlmICh0aGlzLnNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQpIHtcclxuICAgICAgICAgIHRoaXMuc2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudC5jaGVja1Zpc2liaWxpdHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jaGVja0hlaWdodCgpO1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKCkgPT4gdGhpcy5yZW1vdmVTY3JvbGxiYXJJbkluaXRpdGVTY3JvbGxNb2RlKCkpO1xyXG4gICAgICBjb25zdCB2aWV3ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld2VyJyk7XHJcbiAgICAgIGlmICh2aWV3ZXIpIHtcclxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHZpZXdlcik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xyXG4gICAgICBjb25zb2xlLmxvZygnUmVzaXplT2JzZXJ2ZXIgaXMgbm90IHN1cHBvcnRlZCBieSB5b3VyIGJyb3dzZXInKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NvbnRleHRtZW51JylcclxuICBwdWJsaWMgb25Db250ZXh0TWVudSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRleHRNZW51QWxsb3dlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblNlY29uZGFyeU1lbnVJc0VtcHR5KGhpZGVLZWJhYkJ1dHRvbjogYm9vbGVhbikge1xyXG4gICAgdGhpcy5oaWRlS2ViYWJNZW51Rm9yU2Vjb25kYXJ5VG9vbGJhciA9IGhpZGVLZWJhYkJ1dHRvbjtcclxuICAgIGlmIChoaWRlS2ViYWJCdXR0b24pIHtcclxuICAgICAgaWYgKCF0aGlzLmlzUHJpbWFyeU1lbnVWaXNpYmxlKCkpIHtcclxuICAgICAgICB0aGlzLnByaW1hcnlNZW51VmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVnaXN0ZXJBY3JvZm9ybUFubm90YXRpb25zKHNvcnRlZEFubm90YXRpb25zOiBBcnJheTxBbm5vdGF0aW9uPik6IHZvaWQge1xyXG4gICAgbGV0IGlkczogeyBba2V5OiBzdHJpbmddOiBBbm5vdGF0aW9uIH0gPSB7fTtcclxuICAgIGxldCBkdXBsaWNhdGVzOiB7IFtrZXk6IHN0cmluZ106IEFubm90YXRpb24gfSA9IHt9O1xyXG4gICAgZm9yIChsZXQgYSBvZiBzb3J0ZWRBbm5vdGF0aW9ucykge1xyXG4gICAgICBpZiAoYS5maWVsZE5hbWUpIHtcclxuICAgICAgICBpZiAoaWRzW2EuZmllbGROYW1lXSkge1xyXG4gICAgICAgICAgZHVwbGljYXRlc1thLmZpZWxkTmFtZV0gPSBhO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZHNbYS5maWVsZE5hbWVdID0gYTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgYSBvZiBzb3J0ZWRBbm5vdGF0aW9ucykge1xyXG4gICAgICBpZiAoYS5maWVsZE5hbWUgJiYgZHVwbGljYXRlc1thLmZpZWxkTmFtZV0pIHtcclxuICAgICAgICB0aGlzLmZvcm1JZFRvRmllbGROYW1lW2EuaWRdID0gYS5maWVsZE5hbWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRGb3JtVmFsdWUoa2V5OiBzdHJpbmcpOiBPYmplY3Qge1xyXG4gICAgaWYgKHRoaXMuZm9ybURhdGFba2V5XSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGlmIChrZXkuaW5jbHVkZXMoJy8nKSkge1xyXG4gICAgICAgIGtleSA9IGtleS5zcGxpdCgnLycpWzBdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyB2YWx1ZTogdGhpcy5mb3JtRGF0YVtrZXldIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0Rm9ybVZhbHVlKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZm9ybURhdGEpIHtcclxuICAgICAgdGhpcy5mb3JtRGF0YSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmZvcm1JZFRvRmllbGROYW1lW2tleV0pIHtcclxuICAgICAgLy8gcmFkaW9idXR0b25zXHJcbiAgICAgIHRoaXMuZm9ybURhdGFbdGhpcy5mb3JtSWRUb0ZpZWxkTmFtZVtrZXldXSA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5mb3JtRGF0YVtrZXldID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5mb3JtRGF0YUNoYW5nZS5lbWl0KHRoaXMuZm9ybURhdGEpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3NpZ25Gb3JtSWRBbmRGaWVsZE5hbWUoa2V5OiBzdHJpbmcsIGZpZWxkTmFtZTogc3RyaW5nIHwgYm9vbGVhbiwgcmFkaW9CdXR0b25GaWVsZD86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5mb3JtSWRUb0ZpZWxkTmFtZVtrZXldID0gZmllbGROYW1lO1xyXG4gICAgaWYgKHJhZGlvQnV0dG9uRmllbGQpIHtcclxuICAgICAgdGhpcy5mb3JtUmFkaW9CdXR0b25WYWx1ZVRvSWRbcmFkaW9CdXR0b25GaWVsZF0gPSBrZXk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlRm9ybUZpZWxkcyhmb3JtRGF0YTogT2JqZWN0LCBwcmV2aW91c0Zvcm1EYXRhOiBPYmplY3QpIHtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcblxyXG4gICAgaWYgKCFQREZWaWV3ZXJBcHBsaWNhdGlvbiB8fCAhUERGVmlld2VyQXBwbGljYXRpb24ucGRmRG9jdW1lbnQgfHwgIVBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50LmFubm90YXRpb25TdG9yYWdlKSB7XHJcbiAgICAgIC8vIG5nT25DaGFuZ2VzIGNhbGxzIHRoaXMgbWV0aG9kIHRvbyBlYXJseSAtIHNvIGp1c3QgaWdub3JlIGl0XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHN0b3JhZ2UgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudC5hbm5vdGF0aW9uU3RvcmFnZTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBmb3JtRGF0YSkge1xyXG4gICAgICBpZiAoZm9ybURhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIGlmIChmb3JtRGF0YVtrZXldICE9PSBwcmV2aW91c0Zvcm1EYXRhW2tleV0pIHtcclxuICAgICAgICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J1wiICsga2V5ICsgXCInXVwiKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgIGlmIChmaWVsZCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdyYWRpbycpIHtcclxuICAgICAgICAgICAgICBjb25zdCBmaWVsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbbmFtZT0nXCIgKyBrZXkgKyBcIiddXCIpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGZpZWxkSWRUb0FjdGl2YXRlID0gdGhpcy5mb3JtUmFkaW9CdXR0b25WYWx1ZVRvSWRbZm9ybURhdGFba2V5XV07XHJcbiAgICAgICAgICAgICAgZmllbGRzLmZvckVhY2goKGZpZWxkOiBIVE1MSW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaG9ydElkID0gZmllbGQuaWQucmVwbGFjZSgncGRmanNfaW50ZXJuYWxfaWRfJywgJycpO1xyXG4gICAgICAgICAgICAgICAgZmllbGQuY2hlY2tlZCA9IHNob3J0SWQgPT09IGZpZWxkSWRUb0FjdGl2YXRlO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdiBpbiB0aGlzLmZvcm1SYWRpb0J1dHRvblZhbHVlVG9JZCkge1xyXG4gICAgICAgICAgICAgICAgICBpZiAodikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm1SYWRpb0J1dHRvblZhbHVlVG9JZFt2XSA9PT0gc2hvcnRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZS5zZXRWYWx1ZShzaG9ydElkLCBrZXksIHsgdmFsdWU6IGZvcm1EYXRhW2tleV0gPT09IHYsIGVtaXRNZXNzYWdlOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09PSAnY2hlY2tib3gnKSB7XHJcbiAgICAgICAgICAgICAgc3RvcmFnZS5zZXRWYWx1ZShmaWVsZC5pZCwga2V5LCB7IHZhbHVlOiBmb3JtRGF0YVtrZXldLCBlbWl0TWVzc2FnZTogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgZmllbGQuY2hlY2tlZCA9IGZvcm1EYXRhW2tleV07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgc3RvcmFnZS5zZXRWYWx1ZShmaWVsZC5pZCwga2V5LCB7IHZhbHVlOiBmb3JtRGF0YVtrZXldLCBlbWl0TWVzc2FnZTogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgZmllbGQudmFsdWUgPSBmb3JtRGF0YVtrZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKCFmaWVsZCkge1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0ZXh0YXJlYVtuYW1lPSdcIiArIGtleSArIFwiJ11cIikgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKHRleHRhcmVhKSB7XHJcbiAgICAgICAgICAgICAgc3RvcmFnZS5zZXRWYWx1ZSh0ZXh0YXJlYS5pZCwga2V5LCB7IHZhbHVlOiBmb3JtRGF0YVtrZXldLCBlbWl0TWVzc2FnZTogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgdGV4dGFyZWEudmFsdWUgPSBmb3JtRGF0YVtrZXldO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlbGVjdFtuYW1lPSdcIiArIGtleSArIFwiJ11cIikgYXMgSFRNTFNlbGVjdEVsZW1lbnQgfCBudWxsO1xyXG4gICAgICAgICAgICAgIGlmIChkcm9wZG93bikge1xyXG4gICAgICAgICAgICAgICAgc3RvcmFnZS5zZXRWYWx1ZShkcm9wZG93bi5pZCwga2V5LCB7IHZhbHVlOiBmb3JtRGF0YVtrZXldLCBlbWl0TWVzc2FnZTogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZHJvcGRvd24ubXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZm9ybURhdGFba2V5XSBhcyBzdHJpbmdbXTtcclxuICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkcm9wZG93bi5vcHRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd24ub3B0aW9uc1tpXS5zZWxlY3RlZCA9IG9wdGlvbnMuaW5kZXhPZihkcm9wZG93bi5vcHRpb25zW2ldLnZhbHVlKSA+PSAwO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICBkcm9wZG93bi52YWx1ZSA9IGZvcm1EYXRhW2tleV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSB0aGlzLmZvcm1JZFRvRmllbGROYW1lW2tleV07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gcHJldmlvdXNGb3JtRGF0YSkge1xyXG4gICAgICBpZiAocHJldmlvdXNGb3JtRGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgaWYgKCFmb3JtRGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdcIiArIGtleSArIFwiJ11cIikgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICBpZiAoZmllbGQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMgZW50cnkgaGFzIGJlZW4gZGVsZXRlZFxyXG4gICAgICAgICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xyXG4gICAgICAgICAgICAgIHN0b3JhZ2Uuc2V0VmFsdWUoZmllbGQuaWQsIGtleSwgeyB2YWx1ZTogZmFsc2UsIGVtaXRNZXNzYWdlOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICBmaWVsZC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgc3RvcmFnZS5zZXRWYWx1ZShmaWVsZC5pZCwga2V5LCB7IHZhbHVlOiB1bmRlZmluZWQsIGVtaXRNZXNzYWdlOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICBmaWVsZC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKCFmaWVsZCkge1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0ZXh0YXJlYVtuYW1lPSdcIiArIGtleSArIFwiJ11cIikgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKHRleHRhcmVhKSB7XHJcbiAgICAgICAgICAgICAgc3RvcmFnZS5zZXRWYWx1ZSh0ZXh0YXJlYS5pZCwga2V5LCB7IHZhbHVlOiB1bmRlZmluZWQsIGVtaXRNZXNzYWdlOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICB0ZXh0YXJlYS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZENvbXBsZXRlKHBkZjogYW55IC8qIFBERkRvY3VtZW50UHJveHkgKi8pOiB2b2lkIHtcclxuICAgIC8qKiBUaGlzIG1ldGhvZCBoYXMgYmVlbiBpbnNwaXJlZCBieSBodHRwczovL21lZGl1bS5jb20vZmFjdG9yeS1taW5kL2FuZ3VsYXItcGRmLWZvcm1zLWZhNzJiMTVjM2ZiZC4gVGhhbmtzLCBKb25ueSBGb3ghICovXHJcbiAgICB0aGlzLmhhc1NpZ25hdHVyZSA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuYnV0dG9uVmFsdWVzID0ge307XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gcGRmLm51bVBhZ2VzOyBpKyspIHtcclxuICAgICAgLy8gdHJhY2sgdGhlIGN1cnJlbnQgcGFnZVxyXG4gICAgICBwZGZcclxuICAgICAgICAuZ2V0UGFnZShpKVxyXG4gICAgICAgIC50aGVuKChwKSA9PiB7XHJcbiAgICAgICAgICAvLyBnZXQgdGhlIGFubm90YXRpb25zIG9mIHRoZSBjdXJyZW50IHBhZ2VcclxuICAgICAgICAgIHJldHVybiBwLmdldEFubm90YXRpb25zKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoYW5ub3RhdGlvbnMpID0+IHtcclxuICAgICAgICAgIC8vIHVnbHkgY2FzdCBkdWUgdG8gbWlzc2luZyB0eXBlc2NyaXB0IGRlZmluaXRpb25zXHJcbiAgICAgICAgICAvLyBwbGVhc2UgY29udHJpYnV0ZSB0byBjb21wbGV0ZSBAdHlwZXMvcGRmanMtZGlzdFxyXG5cclxuICAgICAgICAgIGFubm90YXRpb25zXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKGEpID0+IGEuc3VidHlwZSA9PT0gJ1dpZGdldCcpIC8vIGdldCB0aGUgZm9ybSBmaWVsZCBhbm5vdGF0aW9uIG9ubHlcclxuICAgICAgICAgICAgLmZvckVhY2goKGEpID0+IHtcclxuICAgICAgICAgICAgICAvLyBBZGRpdGlvbmFsIFBERiBGb3JtIEZpZWxkIFR5cGVzICM1Njc6IFN0b3JlIHRoZSBleHBvcnRWYWx1ZSBmb3IgdGhlIGNoZWNrIGJveGVzIGFuZCBidXR0b25WYWx1ZSBmb3IgcmFkaW8gYnV0dG9ucyBmb3IgcXVpY2sgcmVmZXJlbmNlXHJcbiAgICAgICAgICAgICAgaWYgKGEuY2hlY2tCb3gpIHRoaXMuYnV0dG9uVmFsdWVzW2EuaWRdID0gYS5leHBvcnRWYWx1ZTtcclxuICAgICAgICAgICAgICBlbHNlIGlmIChhLnJhZGlvQnV0dG9uKSB0aGlzLmJ1dHRvblZhbHVlc1thLmlkXSA9IGEuYnV0dG9uVmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChhLmZpZWxkVHlwZSA9PT0gJ1NpZycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuaGFzU2lnbmF0dXJlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgdmlld2VyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZpZXdlckNvbnRhaW5lcicpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdlckNvbnRhaW5lci5zY3JvbGxCeSgwLCAtMzIpO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgIC8vIGdldCB0aGUgcmVjdGFuZ2xlIHRoYXQgcmVwcmVzZW50IHRoZSBzaW5nbGUgZmllbGRcclxuICAgICAgICAgICAgICAvLyBhbmQgcmVzaXplIGl0IGFjY29yZGluZyB0byB0aGUgY3VycmVudCBEUElcclxuICAgICAgICAgICAgICBjb25zdCBmaWVsZFJlY3QgPSBjdXJyZW50UGFnZS5nZXRWaWV3cG9ydChkcGlSYXRpbykuY29udmVydFRvVmlld3BvcnRSZWN0YW5nbGUoYS5yZWN0KTtcclxuXHJcbiAgICAgICAgICAgICAgLy8gYWRkIHRoZSBjb3JyZXNwb25kaW5nIGlucHV0XHJcbiAgICAgICAgICAgICAgdGhpcy5hZGRJbnB1dChhLCBmaWVsZFJlY3QpO1xyXG4gICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wZGZMb2FkZWQuZW1pdCh7IHBhZ2VzQ291bnQ6IHBkZi5udW1QYWdlcyB9IGFzIFBkZkxvYWRlZEV2ZW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyB6b29tVG9QYWdlV2lkdGgoZXZlbnQ6IE1vdXNlRXZlbnQpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGlmICh0aGlzLmhhbmRUb29sKSB7XHJcbiAgICAgIGlmICghcGRmRGVmYXVsdE9wdGlvbnMuZG91YmxlVGFwWm9vbXNJbkhhbmRNb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoIXBkZkRlZmF1bHRPcHRpb25zLmRvdWJsZVRhcFpvb21zSW5UZXh0U2VsZWN0aW9uTW9kZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIGNvbnN0IGRlc2lyZWRDZW50ZXJZID0gZXZlbnQuY2xpZW50WTtcclxuICAgIGNvbnN0IHByZXZpb3VzU2NhbGUgPSAoUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyIGFzIGFueSkuY3VycmVudFNjYWxlO1xyXG5cclxuICAgIGlmICh0aGlzLnpvb20gIT09IHBkZkRlZmF1bHRPcHRpb25zLmRvdWJsZVRhcFpvb21GYWN0b3IgJiYgdGhpcy56b29tICsgJyUnICE9PSBwZGZEZWZhdWx0T3B0aW9ucy5kb3VibGVUYXBab29tRmFjdG9yKSB7XHJcbiAgICAgIHRoaXMucHJldmlvdXNab29tID0gdGhpcy56b29tO1xyXG4gICAgICB0aGlzLnpvb20gPSBwZGZEZWZhdWx0T3B0aW9ucy5kb3VibGVUYXBab29tRmFjdG9yOyAvLyBieSBkZWZhdWx0OiAncGFnZS13aWR0aCc7XHJcbiAgICAgIGF3YWl0IHRoaXMuc2V0Wm9vbSgpO1xyXG4gICAgfSBlbHNlIGlmIChwZGZEZWZhdWx0T3B0aW9ucy5kb3VibGVUYXBSZXNldHNab29tT25TZWNvbmREb3VibGVUYXApIHtcclxuICAgICAgaWYgKHRoaXMucHJldmlvdXNab29tKSB7XHJcbiAgICAgICAgdGhpcy56b29tID0gdGhpcy5wcmV2aW91c1pvb207XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy56b29tID0gJ3BhZ2Utd2lkdGgnO1xyXG4gICAgICB9XHJcbiAgICAgIGF3YWl0IHRoaXMuc2V0Wm9vbSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRTY2FsZSA9IChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIgYXMgYW55KS5jdXJyZW50U2NhbGU7XHJcbiAgICBjb25zdCBzY2FsZUNvcnJlY3Rpb25GYWN0b3IgPSBjdXJyZW50U2NhbGUgLyBwcmV2aW91c1NjYWxlIC0gMTtcclxuICAgIGNvbnN0IHJlY3QgPSAoUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyIGFzIGFueSkuY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgZHkgPSBkZXNpcmVkQ2VudGVyWSAtIHJlY3QudG9wO1xyXG4gICAgKFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlciBhcyBhbnkpLmNvbnRhaW5lci5zY3JvbGxUb3AgKz0gZHkgKiBzY2FsZUNvcnJlY3Rpb25GYWN0b3I7XHJcbiAgfVxyXG59XHJcbiIsIjxwZGYtZGFyay10aGVtZSAqbmdJZj1cInRoZW1lID09PSAnZGFyaydcIj48L3BkZi1kYXJrLXRoZW1lPlxyXG48cGRmLWxpZ2h0LXRoZW1lICpuZ0lmPVwidGhlbWUgPT09ICdsaWdodCdcIj48L3BkZi1saWdodC10aGVtZT5cclxuPHBkZi1hY3JvZm9ybS1kYXJrLXRoZW1lICpuZ0lmPVwiZm9ybVRoZW1lID09PSAnZGFyaydcIj48L3BkZi1hY3JvZm9ybS1kYXJrLXRoZW1lPlxyXG48cGRmLWFjcm9mb3JtLWRlZmF1bHQtdGhlbWUgKm5nSWY9XCJmb3JtVGhlbWUgPT09ICdsaWdodCdcIj48L3BkZi1hY3JvZm9ybS1kZWZhdWx0LXRoZW1lPlxyXG5cclxuPHBkZi1keW5hbWljLWNzcyBbem9vbV09XCJtb2JpbGVGcmllbmRseVpvb21TY2FsZVwiIFt3aWR0aF09XCJ0b29sYmFyV2lkdGhJblBpeGVsc1wiPjwvcGRmLWR5bmFtaWMtY3NzPlxyXG48bmctY29udGVudCAqbmdUZW1wbGF0ZU91dGxldD1cImN1c3RvbVBkZlZpZXdlciA/IGN1c3RvbVBkZlZpZXdlciA6IGRlZmF1bHRQZGZWaWV3ZXJcIj48L25nLWNvbnRlbnQ+XHJcblxyXG48bmctdGVtcGxhdGUgI2RlZmF1bHRQZGZWaWV3ZXI+XHJcbiAgPGRpdiBjbGFzcz1cInpvb21cIiBbc3R5bGUuaGVpZ2h0XT1cIm1pbkhlaWdodCA/IG1pbkhlaWdodCA6IGhlaWdodFwiICNyb290PlxyXG4gICAgPGRpdiBjbGFzcz1cImh0bWxcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImJvZHlcIiBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cImJhY2tncm91bmRDb2xvclwiPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJvdXRlckNvbnRhaW5lclwiICh3aW5kb3c6cmVzaXplKT1cIm9uUmVzaXplKClcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmcmVlLWZsb2F0aW5nLWJhclwiICpuZ0lmPVwic2hvd0ZyZWVGbG9hdGluZ0JhclwiPlxyXG4gICAgICAgICAgICA8bmctY29udGVudCAqbmdUZW1wbGF0ZU91dGxldD1cImN1c3RvbUZyZWVGbG9hdGluZ0JhciA/IGN1c3RvbUZyZWVGbG9hdGluZ0JhciA6IGRlZmF1bHRGcmVlRmxvYXRpbmdCYXJcIj5cclxuICAgICAgICAgICAgPC9uZy1jb250ZW50PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8cGRmLXNpZGViYXIgI3BkZnNpZGViYXIgW3NpZGViYXJWaXNpYmxlXT1cInNpZGViYXJWaXNpYmxlIHx8IGZhbHNlXCIgW3Nob3dTaWRlYmFyQnV0dG9uXT1cInNob3dTaWRlYmFyQnV0dG9uXCJcclxuICAgICAgICAgICAgW2N1c3RvbVNpZGViYXJdPVwiY3VzdG9tU2lkZWJhclwiIFtjdXN0b21UaHVtYm5haWxdPVwiY3VzdG9tVGh1bWJuYWlsXCJcclxuICAgICAgICAgICAgKHRodW1ibmFpbERyYXduKT1cInRodW1ibmFpbERyYXduLmVtaXQoJGV2ZW50KVwiIFttb2JpbGVGcmllbmRseVpvb21TY2FsZV09XCJtb2JpbGVGcmllbmRseVpvb21TY2FsZVwiXHJcbiAgICAgICAgICAgIFtzaWRlYmFyUG9zaXRpb25Ub3BdPVwic2lkZWJhclBvc2l0aW9uVG9wXCI+XHJcbiAgICAgICAgICA8L3BkZi1zaWRlYmFyPlxyXG4gICAgICAgICAgPGRpdiBpZD1cIm1haW5Db250YWluZXJcIiBbY2xhc3MudG9vbGJhci1oaWRkZW5dPVwiIXByaW1hcnlNZW51VmlzaWJsZVwiPlxyXG4gICAgICAgICAgICA8cGRmLWR1bW15LWNvbXBvbmVudHM+PC9wZGYtZHVtbXktY29tcG9uZW50cz5cclxuXHJcbiAgICAgICAgICAgIDxwZGYtdG9vbGJhciBbY3VzdG9tVG9vbGJhcl09XCJjdXN0b21Ub29sYmFyXCIgW21vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlXT1cIm1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlXCJcclxuICAgICAgICAgICAgICBbcHJpbWFyeU1lbnVWaXNpYmxlXT1cInByaW1hcnlNZW51VmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgW3Nob3dEb3dubG9hZEJ1dHRvbl09XCJzaG93RG93bmxvYWRCdXR0b25cIiBbc2hvd0VkaXRvcl09XCJzaG93RWRpdG9yXCIgW3Nob3dGaW5kQnV0dG9uXT1cInNob3dGaW5kQnV0dG9uXCJcclxuICAgICAgICAgICAgICBbc2hvd0hhbmRUb29sQnV0dG9uXT1cInNob3dIYW5kVG9vbEJ1dHRvblwiIFtzaG93T3BlbkZpbGVCdXR0b25dPVwic2hvd09wZW5GaWxlQnV0dG9uXCJcclxuICAgICAgICAgICAgICBbc2hvd1ByaW50QnV0dG9uXT1cInNob3dQcmludEJ1dHRvbiAmJiBlbmFibGVQcmludFwiIFtzaG93UGFnaW5nQnV0dG9uc109XCJzaG93UGFnaW5nQnV0dG9uc1wiXHJcbiAgICAgICAgICAgICAgW3Nob3dQcmVzZW50YXRpb25Nb2RlQnV0dG9uXT1cInNob3dQcmVzZW50YXRpb25Nb2RlQnV0dG9uXCIgW3Nob3dSb3RhdGVCdXR0b25dPVwic2hvd1JvdGF0ZUJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgW3Nob3dTZWNvbmRhcnlUb29sYmFyQnV0dG9uXT1cInNob3dTZWNvbmRhcnlUb29sYmFyQnV0dG9uICYmICFoaWRlS2ViYWJNZW51Rm9yU2Vjb25kYXJ5VG9vbGJhclwiXHJcbiAgICAgICAgICAgICAgW3Nob3dTaWRlYmFyQnV0dG9uXT1cInNob3dTaWRlYmFyQnV0dG9uXCIgW3Nob3dab29tQnV0dG9uc109XCJzaG93Wm9vbUJ1dHRvbnNcIiBbdGV4dExheWVyXT1cInRleHRMYXllclwiXHJcbiAgICAgICAgICAgICAgW3Rvb2xiYXJNYXJnaW5Ub3BdPVwidG9vbGJhck1hcmdpblRvcFwiIFt0b29sYmFyV2lkdGhdPVwidG9vbGJhcldpZHRoXCJcclxuICAgICAgICAgICAgICAob25Ub29sYmFyTG9hZGVkKT1cIm9uVG9vbGJhckxvYWRlZCgkZXZlbnQpXCIgW3pvb21MZXZlbHNdPVwiem9vbUxldmVsc1wiPjwvcGRmLXRvb2xiYXI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdG9yUGFyYW1zVG9vbGJhciBoaWRkZW4gZG9vckhhbmdlclJpZ2h0XCIgaWQ9XCJlZGl0b3JGcmVlVGV4dFBhcmFtc1Rvb2xiYXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdG9yUGFyYW1zVG9vbGJhckNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXRvclBhcmFtc1NldHRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZWRpdG9yRnJlZVRleHRDb2xvclwiIGNsYXNzPVwiZWRpdG9yUGFyYW1zTGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtbDEwbi1pZD1cImVkaXRvcl9mcmVlX3RleHRfZm9udF9jb2xvclwiPkZvbnQgQ29sb3I8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNvbG9yXCIgaWQ9XCJlZGl0b3JGcmVlVGV4dENvbG9yXCIgY2xhc3M9XCJlZGl0b3JQYXJhbXNDb2xvclwiIHRhYmluZGV4PVwiMTAwXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0b3JQYXJhbXNTZXR0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVkaXRvckZyZWVUZXh0Rm9udFNpemVcIiBjbGFzcz1cImVkaXRvclBhcmFtc0xhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWwxMG4taWQ9XCJlZGl0b3JfZnJlZV90ZXh0X2ZvbnRfc2l6ZVwiPkZvbnQgU2l6ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBpZD1cImVkaXRvckZyZWVUZXh0Rm9udFNpemVcIiBjbGFzcz1cImVkaXRvclBhcmFtc1NsaWRlclwiIHZhbHVlPVwiMTBcIiBtaW49XCI1XCJcclxuICAgICAgICAgICAgICAgICAgICBtYXg9XCIxMDBcIiBzdGVwPVwiMVwiIHRhYmluZGV4PVwiMTAxXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdG9yUGFyYW1zVG9vbGJhciBoaWRkZW4gZG9vckhhbmdlclJpZ2h0XCIgaWQ9XCJlZGl0b3JJbmtQYXJhbXNUb29sYmFyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXRvclBhcmFtc1Rvb2xiYXJDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0b3JQYXJhbXNTZXR0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVkaXRvcklua0NvbG9yXCIgY2xhc3M9XCJlZGl0b3JQYXJhbXNMYWJlbFwiIGRhdGEtbDEwbi1pZD1cImVkaXRvcl9pbmtfY29sb3JcIj5Db2xvcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY29sb3JcIiBpZD1cImVkaXRvcklua0NvbG9yXCIgY2xhc3M9XCJlZGl0b3JQYXJhbXNDb2xvclwiIHRhYmluZGV4PVwiMTAyXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0b3JQYXJhbXNTZXR0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVkaXRvcklua1RoaWNrbmVzc1wiIGNsYXNzPVwiZWRpdG9yUGFyYW1zTGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtbDEwbi1pZD1cImVkaXRvcl9pbmtfdGhpY2tuZXNzXCI+VGhpY2tuZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIGlkPVwiZWRpdG9ySW5rVGhpY2tuZXNzXCIgY2xhc3M9XCJlZGl0b3JQYXJhbXNTbGlkZXJcIiB2YWx1ZT1cIjFcIiBtaW49XCIxXCIgbWF4PVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9XCIxXCIgdGFiaW5kZXg9XCIxMDNcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXRvclBhcmFtc1NldHRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZWRpdG9ySW5rT3BhY2l0eVwiIGNsYXNzPVwiZWRpdG9yUGFyYW1zTGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtbDEwbi1pZD1cImVkaXRvcl9pbmtfb3BhY2l0eVwiPk9wYWNpdHk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgaWQ9XCJlZGl0b3JJbmtPcGFjaXR5XCIgY2xhc3M9XCJlZGl0b3JQYXJhbXNTbGlkZXJcIiB2YWx1ZT1cIjEwMFwiIG1pbj1cIjFcIiBtYXg9XCIxMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9XCIxXCIgdGFiaW5kZXg9XCIxMDRcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICA8cGRmLXNlY29uZGFyeS10b29sYmFyICNwZGZTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50IFtjdXN0b21TZWNvbmRhcnlUb29sYmFyXT1cImN1c3RvbVNlY29uZGFyeVRvb2xiYXJcIlxyXG4gICAgICAgICAgICAgIFtzZWNvbmRhcnlUb29sYmFyVG9wXT1cInNlY29uZGFyeVRvb2xiYXJUb3BcIiBbbW9iaWxlRnJpZW5kbHlab29tU2NhbGVdPVwibW9iaWxlRnJpZW5kbHlab29tU2NhbGVcIlxyXG4gICAgICAgICAgICAgIFtzaG93UHJlc2VudGF0aW9uTW9kZUJ1dHRvbl09XCJzaG93UHJlc2VudGF0aW9uTW9kZUJ1dHRvblwiIFtzaG93T3BlbkZpbGVCdXR0b25dPVwic2hvd09wZW5GaWxlQnV0dG9uXCJcclxuICAgICAgICAgICAgICBbc2hvd1ByaW50QnV0dG9uXT1cInNob3dQcmludEJ1dHRvbiAmJiBlbmFibGVQcmludFwiIFtzaG93RG93bmxvYWRCdXR0b25dPVwic2hvd0Rvd25sb2FkQnV0dG9uXCJcclxuICAgICAgICAgICAgICBbc2hvd1BhZ2luZ0J1dHRvbnNdPVwic2hvd1BhZ2luZ0J1dHRvbnNcIlxyXG4gICAgICAgICAgICAgIFtzaG93Um90YXRlQnV0dG9uXT1cInNob3dSb3RhdGVCdXR0b25cIiBbc2hvd0hhbmRUb29sQnV0dG9uXT1cInNob3dIYW5kVG9vbEJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgW3Nob3dTY3JvbGxpbmdCdXR0b25dPVwic2hvd1Njcm9sbGluZ0J1dHRvblwiIFtzaG93U3ByZWFkQnV0dG9uXT1cInNob3dTcHJlYWRCdXR0b25cIlxyXG4gICAgICAgICAgICAgIFtzaG93UHJvcGVydGllc0J1dHRvbl09XCJzaG93UHJvcGVydGllc0J1dHRvblwiIChzcHJlYWRDaGFuZ2UpPVwib25TcHJlYWRDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgKHNlY29uZGFyeU1lbnVJc0VtcHR5KT1cIm9uU2Vjb25kYXJ5TWVudUlzRW1wdHkoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICA8L3BkZi1zZWNvbmRhcnktdG9vbGJhcj5cclxuXHJcbiAgICAgICAgICAgIDxwZGYtZmluZGJhciBbZmluZGJhckxlZnRdPVwiZmluZGJhckxlZnRcIiBbZmluZGJhclRvcF09XCJmaW5kYmFyVG9wXCJcclxuICAgICAgICAgICAgICBbbW9iaWxlRnJpZW5kbHlab29tU2NhbGVdPVwibW9iaWxlRnJpZW5kbHlab29tU2NhbGVcIiBbc2hvd0ZpbmRCdXR0b25dPVwic2hvd0ZpbmRCdXR0b24gfHwgZmFsc2VcIlxyXG4gICAgICAgICAgICAgIFtjdXN0b21GaW5kYmFySW5wdXRBcmVhXT1cImN1c3RvbUZpbmRiYXJJbnB1dEFyZWFcIiBbY3VzdG9tRmluZGJhckJ1dHRvbnNdPVwiY3VzdG9tRmluZGJhckJ1dHRvbnNcIlxyXG4gICAgICAgICAgICAgIFtzaG93RmluZEN1cnJlbnRQYWdlT25seV09XCJzaG93RmluZEN1cnJlbnRQYWdlT25seVwiIFtzaG93RmluZEVudGlyZVBocmFzZV09XCJzaG93RmluZEVudGlyZVBocmFzZVwiXHJcbiAgICAgICAgICAgICAgW3Nob3dGaW5kRW50aXJlV29yZF09XCJzaG93RmluZEVudGlyZVdvcmRcIiBbc2hvd0ZpbmRGdXp6eVNlYXJjaF09XCJzaG93RmluZEZ1enp5U2VhcmNoXCJcclxuICAgICAgICAgICAgICBbc2hvd0ZpbmRIaWdobGlnaHRBbGxdPVwic2hvd0ZpbmRIaWdobGlnaHRBbGxcIiBbc2hvd0ZpbmRJZ25vcmVBY2NlbnRzXT1cInNob3dGaW5kSWdub3JlQWNjZW50c1wiXHJcbiAgICAgICAgICAgICAgW3Nob3dGaW5kTWF0Y2hDYXNlXT1cInNob3dGaW5kTWF0Y2hDYXNlXCIgW3Nob3dGaW5kTWVzc2FnZXNdPVwic2hvd0ZpbmRNZXNzYWdlc1wiXHJcbiAgICAgICAgICAgICAgW3Nob3dGaW5kUGFnZVJhbmdlXT1cInNob3dGaW5kUGFnZVJhbmdlXCIgW3Nob3dGaW5kUmVzdWx0c0NvdW50XT1cInNob3dGaW5kUmVzdWx0c0NvdW50XCI+XHJcbiAgICAgICAgICAgIDwvcGRmLWZpbmRiYXI+XHJcblxyXG4gICAgICAgICAgICA8cGRmLWNvbnRleHQtbWVudT48L3BkZi1jb250ZXh0LW1lbnU+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwidmlld2VyQ29udGFpbmVyXCIgW3N0eWxlLnRvcF09XCJ2aWV3ZXJQb3NpdGlvblRvcFwiIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwiYmFja2dyb3VuZENvbG9yXCJcclxuICAgICAgICAgICAgICB0YWJpbmRleD1cIjBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidW52ZXJpZmllZC1zaWduYXR1cmUtd2FybmluZ1wiICpuZ0lmPVwiaGFzU2lnbmF0dXJlICYmIHNob3dVbnZlcmlmaWVkU2lnbmF0dXJlc1wiPlxyXG4gICAgICAgICAgICAgICAge3tcclxuICAgICAgICAgICAgICAgICd1bnZlcmlmaWVkX3NpZ25hdHVyZV93YXJuaW5nJ1xyXG4gICAgICAgICAgICAgICAgfCB0cmFuc2xhdGVcclxuICAgICAgICAgICAgICAgIDogXCJUaGlzIFBERiBmaWxlIGNvbnRhaW5zIGEgZGlnaXRhbCBzaWduYXR1cmUuIFRoZSBQREYgdmlld2VyIGNhbid0IHZlcmlmeSBpZiB0aGUgc2lnbmF0dXJlIGlzIHZhbGlkLlxyXG4gICAgICAgICAgICAgICAgUGxlYXNlIGRvd25sb2FkIHRoZSBmaWxlIGFuZCBvcGVuIGl0IGluIEFjcm9iYXQgUmVhZGVyIHRvIHZlcmlmeSB0aGUgc2lnbmF0dXJlIGlzIHZhbGlkLlwiXHJcbiAgICAgICAgICAgICAgICB8IGFzeW5jXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RpZmllZC1iYWNrZ3JvdW5kLXdhcm5pbmdcIiAqbmdJZj1cInBkZkJhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgICAgIHt7XHJcbiAgICAgICAgICAgICAgICAnbW9kaWZpZWRfYmFja2dyb3VuZF93YXJuaW5nJ1xyXG4gICAgICAgICAgICAgICAgfCB0cmFuc2xhdGU6ICdUaGlzIFBERiBpcyByZW5kZXJlZCB3aXRoIGEgY3VzdG9tIGJhY2tncm91bmQuIEl0IGRvZXMgbm90IGxvb2sgdGhlIHdheSBpdHMgYXV0aG9yXHJcbiAgICAgICAgICAgICAgICBpbnRlbmRlZCBpdCB0byBsb29rLidcclxuICAgICAgICAgICAgICAgIHwgYXN5bmNcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBpZD1cInZpZXdlclwiIGNsYXNzPVwicGRmVmlld2VyXCIgKGRibGNsaWNrKT1cInpvb21Ub1BhZ2VXaWR0aCgkZXZlbnQpXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cGRmLWVycm9yLW1lc3NhZ2U+PC9wZGYtZXJyb3ItbWVzc2FnZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPCEtLSBtYWluQ29udGFpbmVyIC0tPlxyXG5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJkaWFsb2dDb250YWluZXJcIj5cclxuICAgICAgICAgICAgPHBkZi1wYXNzd29yZC1kaWFsb2c+PC9wZGYtcGFzc3dvcmQtZGlhbG9nPlxyXG4gICAgICAgICAgICA8cGRmLWRvY3VtZW50LXByb3BlcnRpZXMtZGlhbG9nPjwvcGRmLWRvY3VtZW50LXByb3BlcnRpZXMtZGlhbG9nPlxyXG4gICAgICAgICAgICA8cGRmLXByZXBhcmUtcHJpbnRpbmctZGlhbG9nPjwvcGRmLXByZXBhcmUtcHJpbnRpbmctZGlhbG9nPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8IS0tIGRpYWxvZ0NvbnRhaW5lciAtLT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8IS0tIG91dGVyQ29udGFpbmVyIC0tPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGlkPVwiZmlsZUlucHV0XCIgY2xhc3M9XCJoaWRkZW5cIiAvPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJwcmludENvbnRhaW5lclwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlICNkZWZhdWx0RnJlZUZsb2F0aW5nQmFyPiA8L25nLXRlbXBsYXRlPlxyXG4iXX0=
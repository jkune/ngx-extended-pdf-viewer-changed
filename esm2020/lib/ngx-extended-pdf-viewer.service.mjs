import { Subject } from 'rxjs';
import { NgxExtendedPdfViewerComponent } from './ngx-extended-pdf-viewer.component';
export class NgxExtendedPdfViewerService {
    constructor() {
        this.recalculateSize$ = new Subject();
    }
    findMultiple(text, options = {}) {
        options = {
            ...options,
            findMultipleSearchTexts: true,
        };
        const searchString = text.join('\n') + '\n';
        return this.find(searchString, options);
    }
    find(text, options = {}) {
        if (!NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) {
            // tslint:disable-next-line:quotemark
            console.error("The PDF viewer hasn't finished initializing. Please call find() later.");
            return false;
        }
        else {
            const highlightAllCheckbox = document.getElementById('findHighlightAll');
            if (highlightAllCheckbox) {
                highlightAllCheckbox.checked = options.highlightAll || false;
            }
            const findPageRange = document.getElementById('findRange');
            if (findPageRange) {
                findPageRange.value = options.pageRange || '';
            }
            const findCurrentPageCheckbox = document.getElementById('findCurrentPage');
            if (findCurrentPageCheckbox) {
                findCurrentPageCheckbox.checked = options.currentPage || false;
            }
            const matchCaseCheckbox = document.getElementById('findMatchCase');
            if (matchCaseCheckbox) {
                matchCaseCheckbox.checked = options.matchCase || false;
            }
            const entireWordCheckbox = document.getElementById('findEntireWord');
            if (entireWordCheckbox) {
                entireWordCheckbox.checked = options.wholeWords || false;
            }
            const findIgnoreAccentsCheckbox = document.getElementById('findIgnoreAccents');
            if (findIgnoreAccentsCheckbox) {
                findIgnoreAccentsCheckbox.checked = options.ignoreAccents || false;
            }
            const multipleSearchTerms = options.findMultipleSearchTexts || text.includes('\n') || false;
            const findMultipleSearchTextsCheckbox = document.getElementById('findMultipleSearchTexts');
            if (findMultipleSearchTextsCheckbox) {
                findMultipleSearchTextsCheckbox.checked = multipleSearchTerms;
            }
            const individualWordsModeCheckbox = document.getElementById('individualWordsMode');
            if (individualWordsModeCheckbox) {
                individualWordsModeCheckbox.checked = false;
            }
            const fuzzySearchCheckbox = document.getElementById('findFuzzy');
            if (fuzzySearchCheckbox) {
                fuzzySearchCheckbox.checked = options.fuzzySearch || false;
            }
            const inputField = multipleSearchTerms ? document.getElementById('findInputMultiline') : document.getElementById('findInput');
            if (inputField) {
                if (inputField instanceof HTMLTextAreaElement) {
                    inputField.value = text;
                    // todo dirty hack!
                    inputField.classList.remove('hidden');
                    document.getElementById('findInput').classList.add('hidden');
                    document.getElementById('individualWordsModeLabel').classList.remove('hidden');
                    document.getElementById('individualWordsMode').classList.remove('hidden');
                    // end of the dirty hack
                }
                else if (inputField instanceof HTMLInputElement) {
                    inputField.value = text;
                    // todo dirty hack!
                    inputField.classList.remove('hidden');
                    document.getElementById('findInputMultiline').classList.add('hidden');
                    document.getElementById('individualWordsModeLabel').classList.add('hidden');
                    document.getElementById('individualWordsMode').classList.add('hidden');
                    // end of the dirty hack
                }
                inputField.dispatchEvent(new Event('input'));
                return true;
            }
            else {
                // tslint:disable-next-line:quotemark
                console.error("Unexpected error: the input field used to search isn't part of the DOM.");
                return false;
            }
        }
    }
    findNext() {
        if (!NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) {
            // tslint:disable-next-line:quotemark
            console.error("The PDF viewer hasn't finished initializing. Please call findNext() later.");
            return false;
        }
        else {
            const button = document.getElementById('findNext');
            if (button) {
                button.click();
                return true;
            }
            return false;
        }
    }
    findPrevious() {
        if (!NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) {
            // tslint:disable-next-line:quotemark
            console.error("The PDF viewer hasn't finished initializing. Please call findPrevious() later.");
            return false;
        }
        else {
            const button = document.getElementById('findPrevious');
            if (button) {
                button.click();
                return true;
            }
            return false;
        }
    }
    print(printRange) {
        const PDFViewerApplication = window.PDFViewerApplication;
        const alreadyThere = !!window['isInPDFPrintRange'] && !printRange;
        if (!alreadyThere) {
            if (!printRange) {
                printRange = {};
            }
            this.setPrintRange(printRange);
        }
        window.printPDF();
        if (!alreadyThere) {
            PDFViewerApplication.eventBus.on('afterprint', () => {
                this.removePrintRange();
            });
        }
    }
    removePrintRange() {
        window['isInPDFPrintRange'] = undefined;
        window['filteredPageCount'] = undefined;
    }
    setPrintRange(printRange) {
        const PDFViewerApplication = window.PDFViewerApplication;
        window['isInPDFPrintRange'] = (page) => this.isInPDFPrintRange(page, printRange);
        window['filteredPageCount'] = this.filteredPageCount(PDFViewerApplication.pagesCount, printRange);
    }
    filteredPageCount(pageCount, range) {
        let result = 0;
        for (let page = 1; page <= pageCount; page++) {
            if (this.isInPDFPrintRange(page, range)) {
                result++;
            }
        }
        return result;
    }
    isInPDFPrintRange(pageIndex, printRange) {
        const page = pageIndex + 1;
        if (printRange.from) {
            if (page < printRange.from) {
                return false;
            }
        }
        if (printRange.to) {
            if (page > printRange.to) {
                return false;
            }
        }
        if (printRange.excluded) {
            const e = printRange.excluded;
            if (e.some((p) => p === page)) {
                return false;
            }
        }
        if (printRange.included) {
            if (!printRange.included.some((p) => p === page)) {
                return false;
            }
        }
        return true;
    }
    getPageAsText(pageNumber) {
        const PDFViewerApplication = window.PDFViewerApplication;
        const pdfDocument = PDFViewerApplication.pdfDocument;
        const pagePromise = pdfDocument.getPage(pageNumber);
        const extractTextSnippets = (pdfPage) => Promise.resolve(pdfPage.getTextContent());
        const combineTextSnippets = (textSnippets) => Promise.resolve(this.convertTextInfoToText(textSnippets));
        return pagePromise.then(extractTextSnippets).then(combineTextSnippets);
    }
    convertTextInfoToText(textInfo) {
        if (!textInfo) {
            return '';
        }
        return textInfo.items.map((info) => info.str).join('');
    }
    getPageAsImage(pageNumber, scale, background, backgroundColorToReplace = '#FFFFFF') {
        const PDFViewerApplication = window.PDFViewerApplication;
        const pdfDocument = PDFViewerApplication.pdfDocument;
        const pagePromise = pdfDocument.getPage(pageNumber);
        const imagePromise = (pdfPage) => Promise.resolve(this.draw(pdfPage, scale, background, backgroundColorToReplace));
        return pagePromise.then(imagePromise);
    }
    draw(pdfPage, scale, background, backgroundColorToReplace = '#FFFFFF') {
        let zoomFactor = 1;
        if (scale.scale) {
            zoomFactor = scale.scale;
        }
        else if (scale.width) {
            zoomFactor = scale.width / pdfPage.getViewport({ scale: 1 }).width;
        }
        else if (scale.height) {
            zoomFactor = scale.height / pdfPage.getViewport({ scale: 1 }).height;
        }
        const viewport = pdfPage.getViewport({
            scale: zoomFactor,
        });
        const { ctx, canvas } = this.getPageDrawContext(viewport.width, viewport.height);
        const drawViewport = viewport.clone();
        const renderContext = {
            canvasContext: ctx,
            viewport: drawViewport,
            background,
            backgroundColorToReplace,
        };
        const renderTask = pdfPage.render(renderContext);
        const dataUrlPromise = () => Promise.resolve(canvas.toDataURL());
        return renderTask.promise.then(dataUrlPromise);
    }
    getPageDrawContext(width, height) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) {
            // tslint:disable-next-line: quotemark
            throw new Error("Couldn't create the 2d context");
        }
        canvas.width = width;
        canvas.height = height;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        return { ctx, canvas };
    }
    async getCurrentDocumentAsBlob() {
        const PDFViewerApplication = window.PDFViewerApplication;
        const data = await PDFViewerApplication.pdfDocument.saveDocument(PDFViewerApplication.pdfDocument.annotationStorage);
        return new Blob([data], { type: 'application/pdf' });
    }
    async getFormData(currentFormValues = true) {
        const PDFViewerApplication = window.PDFViewerApplication;
        const pdf /*: PDFDocumentProxy */ = PDFViewerApplication.pdfDocument;
        // screen DPI / PDF DPI
        const dpiRatio = 96 / 72;
        const result = [];
        for (let i = 1; i <= pdf.numPages; i++) {
            // track the current page
            const currentPage /* : PDFPageProxy */ = await pdf.getPage(i);
            const annotations = await currentPage.getAnnotations();
            annotations
                .filter((a) => a.subtype === 'Widget') // get the form field annotations only
                .map((a) => ({ ...a })) // only expose copies of the annotations to avoid side-effects
                .forEach((a) => {
                // get the rectangle that represent the single field
                // and resize it according to the current DPI
                const fieldRect = currentPage.getViewport({ scale: dpiRatio }).convertToViewportRectangle(a.rect);
                // add the corresponding input
                if (currentFormValues && a.fieldName) {
                    try {
                        if (a.exportValue) {
                            const currentValue = PDFViewerApplication.pdfDocument.annotationStorage.getValue(a.id, a.fieldName + '/' + a.exportValue, '');
                            a.value = currentValue?.value;
                        }
                        else if (a.radioButton) {
                            const currentValue = PDFViewerApplication.pdfDocument.annotationStorage.getValue(a.id, a.fieldName + '/' + a.fieldValue, '');
                            a.value = currentValue?.value;
                        }
                        else {
                            const currentValue = PDFViewerApplication.pdfDocument.annotationStorage.getValue(a.id, a.fieldName, '');
                            a.value = currentValue?.value;
                        }
                    }
                    catch (exception) {
                        // just ignore it
                    }
                }
                result.push({ fieldAnnotation: a, fieldRect, pageNumber: i });
            });
        }
        return result;
    }
    /**
     * Adds a page to the rendering queue
     * @param {number} pageIndex Index of the page to render
     * @returns {boolean} false, if the page has already been rendered
     * or if it's out of range
     */
    addPageToRenderQueue(pageIndex) {
        const PDFViewerApplication = window.PDFViewerApplication;
        return PDFViewerApplication.pdfViewer.addPageToRenderQueue(pageIndex);
    }
    isRenderQueueEmpty() {
        const scrolledDown = true;
        const renderExtra = false;
        const PDFViewerApplication = window.PDFViewerApplication;
        const nextPage = PDFViewerApplication.pdfViewer.renderingQueue.getHighestPriority(PDFViewerApplication.pdfViewer._getVisiblePages(), PDFViewerApplication.pdfViewer._pages, scrolledDown, renderExtra);
        return !nextPage;
    }
    hasPageBeenRendered(pageIndex) {
        const PDFViewerApplication = window.PDFViewerApplication;
        const pages = PDFViewerApplication.pdfViewer._pages;
        if (pages.length > pageIndex && pageIndex >= 0) {
            const pageView = pages[pageIndex];
            const isLoading = pageView.div.querySelector('.loadingIcon');
            return !isLoading;
        }
        return false;
    }
    currentlyRenderedPages() {
        const PDFViewerApplication = window.PDFViewerApplication;
        const pages = PDFViewerApplication.pdfViewer._pages;
        return pages.filter((page) => !page.div.querySelector('.loadingIcon')).map((page) => page.id);
    }
    numberOfPages() {
        const PDFViewerApplication = window.PDFViewerApplication;
        const pages = PDFViewerApplication.pdfViewer._pages;
        return pages.length;
    }
    getCurrentlyVisiblePageNumbers() {
        const app = window.PDFViewerApplication;
        const pages = app.pdfViewer._getVisiblePages().views;
        return pages?.map((page) => page.id);
    }
    recalculateSize() {
        this.recalculateSize$.next();
    }
    async listLayers() {
        const PDFViewerApplication = window.PDFViewerApplication;
        const optionalContentConfig = await PDFViewerApplication.pdfViewer.optionalContentConfigPromise;
        if (optionalContentConfig) {
            const levelData = optionalContentConfig.getOrder();
            console.log(levelData);
            const layerIds = levelData.filter((groupId) => typeof groupId !== 'object');
            return layerIds.map((layerId) => {
                const config = optionalContentConfig.getGroup(layerId);
                return {
                    layerId: layerId,
                    name: config.name,
                    visible: config.visible,
                };
            });
        }
        return undefined;
    }
    async toggleLayer(layerId) {
        const PDFViewerApplication = window.PDFViewerApplication;
        const optionalContentConfig = await PDFViewerApplication.pdfViewer.optionalContentConfigPromise;
        if (optionalContentConfig) {
            let isVisible = optionalContentConfig.getGroup(layerId).visible;
            const checkbox = document.querySelector(`input[id='${layerId}']`);
            if (checkbox) {
                isVisible = checkbox.checked;
                checkbox.checked = !isVisible;
            }
            optionalContentConfig.setVisibility(layerId, !isVisible);
            PDFViewerApplication.eventBus.dispatch('optionalcontentconfig', {
                source: this,
                promise: Promise.resolve(optionalContentConfig),
            });
        }
    }
    scrollPageIntoView(pageNumber, pageSpot) {
        const PDFViewerApplication = window.PDFViewerApplication;
        const viewer = PDFViewerApplication.pdfViewer;
        viewer.scrollPagePosIntoView(pageNumber, pageSpot);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBMkJwRixNQUFNLE9BQU8sMkJBQTJCO0lBQXhDO1FBQ1MscUJBQWdCLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztJQThZaEQsQ0FBQztJQTVZUSxZQUFZLENBQUMsSUFBbUIsRUFBRSxVQUF1QixFQUFFO1FBQ2hFLE9BQU8sR0FBRztZQUNSLEdBQUcsT0FBTztZQUNWLHVCQUF1QixFQUFFLElBQUk7U0FDOUIsQ0FBQztRQUNGLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQzVDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVNLElBQUksQ0FBQyxJQUFZLEVBQUUsVUFBdUIsRUFBRTtRQUNqRCxJQUFJLENBQUMsNkJBQTZCLENBQUMsK0JBQStCLEVBQUU7WUFDbEUscUNBQXFDO1lBQ3JDLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0VBQXdFLENBQUMsQ0FBQztZQUN4RixPQUFPLEtBQUssQ0FBQztTQUNkO2FBQU07WUFDTCxNQUFNLG9CQUFvQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQXFCLENBQUM7WUFDN0YsSUFBSSxvQkFBb0IsRUFBRTtnQkFDeEIsb0JBQW9CLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLElBQUksS0FBSyxDQUFD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QUM7WUFDbEUsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osU0FBUyxHQUFJLFFBQTZCLENBQUMsT0FBTyxDQUFDO2dCQUNsRCxRQUE2QixDQUFDLE9BQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQzthQUNyRDtZQUNELHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN6RCxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLHVCQUF1QixFQUFFO2dCQUM5RCxNQUFNLEVBQUUsSUFBSTtnQkFDWixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQzthQUNoRCxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFTSxrQkFBa0IsQ0FBQyxVQUFrQixFQUFFLFFBQTREO1FBQ3hHLE1BQU0sb0JBQW9CLEdBQTJCLE1BQWMsQ0FBQyxvQkFBb0IsQ0FBQztRQUN6RixNQUFNLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQyxTQUFnQixDQUFDO1FBQ3JELE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBOZ3hFeHRlbmRlZFBkZlZpZXdlckNvbXBvbmVudCB9IGZyb20gJy4vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmTGF5ZXIgfSBmcm9tICcuL29wdGlvbnMvb3B0aW9uYWxfY29udGVudF9jb25maWcnO1xyXG5pbXBvcnQgeyBQREZQcmludFJhbmdlIH0gZnJvbSAnLi9vcHRpb25zL3BkZi1wcmludC1yYW5nZSc7XHJcbmltcG9ydCB7IElQREZWaWV3ZXJBcHBsaWNhdGlvbiB9IGZyb20gJy4vb3B0aW9ucy9wZGYtdmlld2VyLWFwcGxpY2F0aW9uJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmluZE9wdGlvbnMge1xyXG4gIGhpZ2hsaWdodEFsbD86IGJvb2xlYW47XHJcbiAgbWF0Y2hDYXNlPzogYm9vbGVhbjtcclxuICB3aG9sZVdvcmRzPzogYm9vbGVhbjtcclxuICBpZ25vcmVBY2NlbnRzPzogYm9vbGVhbjtcclxuICBmaW5kTXVsdGlwbGVTZWFyY2hUZXh0cz86IGJvb2xlYW47XHJcbiAgZnV6enlTZWFyY2g/OiBib29sZWFuO1xyXG4gIGN1cnJlbnRQYWdlPzogYm9vbGVhbjsgLy8gc2VhcmNoIG9ubHkgaW4gdGhlIGN1cnJlbnQgcGFnZVxyXG4gIHBhZ2VSYW5nZT86IHN0cmluZzsgLy8gcGFnZSByYW5nZSBkZWZpbml0aW9uLCBlLmcuIFwiMlwiLCBcIjIsMyw0XCIsIFwiNS02XCIgb3IgXCIyLDUtNiw3XCJcclxufVxyXG5cclxuaW50ZXJmYWNlIERyYXdDb250ZXh0IHtcclxuICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBERkV4cG9ydFNjYWxlRmFjdG9yIHtcclxuICB3aWR0aD86IG51bWJlcjtcclxuICBoZWlnaHQ/OiBudW1iZXI7XHJcbiAgc2NhbGU/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOZ3hFeHRlbmRlZFBkZlZpZXdlclNlcnZpY2Uge1xyXG4gIHB1YmxpYyByZWNhbGN1bGF0ZVNpemUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgcHVibGljIGZpbmRNdWx0aXBsZSh0ZXh0OiBBcnJheTxzdHJpbmc+LCBvcHRpb25zOiBGaW5kT3B0aW9ucyA9IHt9KTogYm9vbGVhbiB7XHJcbiAgICBvcHRpb25zID0ge1xyXG4gICAgICAuLi5vcHRpb25zLFxyXG4gICAgICBmaW5kTXVsdGlwbGVTZWFyY2hUZXh0czogdHJ1ZSxcclxuICAgIH07XHJcbiAgICBjb25zdCBzZWFyY2hTdHJpbmcgPSB0ZXh0LmpvaW4oJ1xcbicpICsgJ1xcbic7XHJcbiAgICByZXR1cm4gdGhpcy5maW5kKHNlYXJjaFN0cmluZywgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZmluZCh0ZXh0OiBzdHJpbmcsIG9wdGlvbnM6IEZpbmRPcHRpb25zID0ge30pOiBib29sZWFuIHtcclxuICAgIGlmICghTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQubmd4RXh0ZW5kZWRQZGZWaWV3ZXJJbml0aWFsaXplZCkge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cXVvdGVtYXJrXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGUgUERGIHZpZXdlciBoYXNuJ3QgZmluaXNoZWQgaW5pdGlhbGl6aW5nLiBQbGVhc2UgY2FsbCBmaW5kKCkgbGF0ZXIuXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBoaWdobGlnaHRBbGxDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5kSGlnaGxpZ2h0QWxsJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgaWYgKGhpZ2hsaWdodEFsbENoZWNrYm94KSB7XHJcbiAgICAgICAgaGlnaGxpZ2h0QWxsQ2hlY2tib3guY2hlY2tlZCA9IG9wdGlvbnMuaGlnaGxpZ2h0QWxsIHx8IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGZpbmRQYWdlUmFuZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmluZFJhbmdlJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgaWYgKGZpbmRQYWdlUmFuZ2UpIHtcclxuICAgICAgICBmaW5kUGFnZVJhbmdlLnZhbHVlID0gb3B0aW9ucy5wYWdlUmFuZ2UgfHwgJyc7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZmluZEN1cnJlbnRQYWdlQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmluZEN1cnJlbnRQYWdlJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgaWYgKGZpbmRDdXJyZW50UGFnZUNoZWNrYm94KSB7XHJcbiAgICAgICAgZmluZEN1cnJlbnRQYWdlQ2hlY2tib3guY2hlY2tlZCA9IG9wdGlvbnMuY3VycmVudFBhZ2UgfHwgZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IG1hdGNoQ2FzZUNoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmRNYXRjaENhc2UnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICBpZiAobWF0Y2hDYXNlQ2hlY2tib3gpIHtcclxuICAgICAgICBtYXRjaENhc2VDaGVja2JveC5jaGVja2VkID0gb3B0aW9ucy5tYXRjaENhc2UgfHwgZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZW50aXJlV29yZENoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmRFbnRpcmVXb3JkJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgaWYgKGVudGlyZVdvcmRDaGVja2JveCkge1xyXG4gICAgICAgIGVudGlyZVdvcmRDaGVja2JveC5jaGVja2VkID0gb3B0aW9ucy53aG9sZVdvcmRzIHx8IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGZpbmRJZ25vcmVBY2NlbnRzQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmluZElnbm9yZUFjY2VudHMnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICBpZiAoZmluZElnbm9yZUFjY2VudHNDaGVja2JveCkge1xyXG4gICAgICAgIGZpbmRJZ25vcmVBY2NlbnRzQ2hlY2tib3guY2hlY2tlZCA9IG9wdGlvbnMuaWdub3JlQWNjZW50cyB8fCBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBtdWx0aXBsZVNlYXJjaFRlcm1zID0gb3B0aW9ucy5maW5kTXVsdGlwbGVTZWFyY2hUZXh0cyB8fCB0ZXh0LmluY2x1ZGVzKCdcXG4nKSB8fCBmYWxzZTtcclxuICAgICAgY29uc3QgZmluZE11bHRpcGxlU2VhcmNoVGV4dHNDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5kTXVsdGlwbGVTZWFyY2hUZXh0cycpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgIGlmIChmaW5kTXVsdGlwbGVTZWFyY2hUZXh0c0NoZWNrYm94KSB7XHJcbiAgICAgICAgZmluZE11bHRpcGxlU2VhcmNoVGV4dHNDaGVja2JveC5jaGVja2VkID0gbXVsdGlwbGVTZWFyY2hUZXJtcztcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBpbmRpdmlkdWFsV29yZHNNb2RlQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5kaXZpZHVhbFdvcmRzTW9kZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgIGlmIChpbmRpdmlkdWFsV29yZHNNb2RlQ2hlY2tib3gpIHtcclxuICAgICAgICBpbmRpdmlkdWFsV29yZHNNb2RlQ2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGZ1enp5U2VhcmNoQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmluZEZ1enp5JykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgaWYgKGZ1enp5U2VhcmNoQ2hlY2tib3gpIHtcclxuICAgICAgICBmdXp6eVNlYXJjaENoZWNrYm94LmNoZWNrZWQgPSBvcHRpb25zLmZ1enp5U2VhcmNoIHx8IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGlucHV0RmllbGQgPSBtdWx0aXBsZVNlYXJjaFRlcm1zID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmRJbnB1dE11bHRpbGluZScpIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmRJbnB1dCcpO1xyXG4gICAgICBpZiAoaW5wdXRGaWVsZCkge1xyXG4gICAgICAgIGlmIChpbnB1dEZpZWxkIGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCkge1xyXG4gICAgICAgICAgaW5wdXRGaWVsZC52YWx1ZSA9IHRleHQ7XHJcblxyXG4gICAgICAgICAgLy8gdG9kbyBkaXJ0eSBoYWNrIVxyXG4gICAgICAgICAgaW5wdXRGaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmluZElucHV0JykgYXMgSFRNTElucHV0RWxlbWVudCkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZGl2aWR1YWxXb3Jkc01vZGVMYWJlbCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmRpdmlkdWFsV29yZHNNb2RlJykgYXMgSFRNTElucHV0RWxlbWVudCkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAvLyBlbmQgb2YgdGhlIGRpcnR5IGhhY2tcclxuICAgICAgICB9IGVsc2UgaWYgKGlucHV0RmllbGQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XHJcbiAgICAgICAgICBpbnB1dEZpZWxkLnZhbHVlID0gdGV4dDtcclxuICAgICAgICAgIC8vIHRvZG8gZGlydHkgaGFjayFcclxuICAgICAgICAgIGlucHV0RmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmRJbnB1dE11bHRpbGluZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmRpdmlkdWFsV29yZHNNb2RlTGFiZWwnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5kaXZpZHVhbFdvcmRzTW9kZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgLy8gZW5kIG9mIHRoZSBkaXJ0eSBoYWNrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0RmllbGQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2lucHV0JykpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpxdW90ZW1hcmtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiVW5leHBlY3RlZCBlcnJvcjogdGhlIGlucHV0IGZpZWxkIHVzZWQgdG8gc2VhcmNoIGlzbid0IHBhcnQgb2YgdGhlIERPTS5cIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZmluZE5leHQoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIU5neEV4dGVuZGVkUGRmVmlld2VyQ29tcG9uZW50Lm5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQpIHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnF1b3RlbWFya1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiVGhlIFBERiB2aWV3ZXIgaGFzbid0IGZpbmlzaGVkIGluaXRpYWxpemluZy4gUGxlYXNlIGNhbGwgZmluZE5leHQoKSBsYXRlci5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5kTmV4dCcpO1xyXG4gICAgICBpZiAoYnV0dG9uKSB7XHJcbiAgICAgICAgYnV0dG9uLmNsaWNrKCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGZpbmRQcmV2aW91cygpOiBib29sZWFuIHtcclxuICAgIGlmICghTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQubmd4RXh0ZW5kZWRQZGZWaWV3ZXJJbml0aWFsaXplZCkge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cXVvdGVtYXJrXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGUgUERGIHZpZXdlciBoYXNuJ3QgZmluaXNoZWQgaW5pdGlhbGl6aW5nLiBQbGVhc2UgY2FsbCBmaW5kUHJldmlvdXMoKSBsYXRlci5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5kUHJldmlvdXMnKTtcclxuICAgICAgaWYgKGJ1dHRvbikge1xyXG4gICAgICAgIGJ1dHRvbi5jbGljaygpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBwcmludChwcmludFJhbmdlPzogUERGUHJpbnRSYW5nZSkge1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIGNvbnN0IGFscmVhZHlUaGVyZSA9ICEhd2luZG93Wydpc0luUERGUHJpbnRSYW5nZSddICYmICFwcmludFJhbmdlO1xyXG4gICAgaWYgKCFhbHJlYWR5VGhlcmUpIHtcclxuICAgICAgaWYgKCFwcmludFJhbmdlKSB7XHJcbiAgICAgICAgcHJpbnRSYW5nZSA9IHt9IGFzIFBERlByaW50UmFuZ2U7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRQcmludFJhbmdlKHByaW50UmFuZ2UpO1xyXG4gICAgfVxyXG4gICAgKHdpbmRvdyBhcyBhbnkpLnByaW50UERGKCk7XHJcbiAgICBpZiAoIWFscmVhZHlUaGVyZSkge1xyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignYWZ0ZXJwcmludCcsICgpID0+IHtcclxuICAgICAgICB0aGlzLnJlbW92ZVByaW50UmFuZ2UoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlUHJpbnRSYW5nZSgpIHtcclxuICAgIHdpbmRvd1snaXNJblBERlByaW50UmFuZ2UnXSA9IHVuZGVmaW5lZDtcclxuICAgIHdpbmRvd1snZmlsdGVyZWRQYWdlQ291bnQnXSA9IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRQcmludFJhbmdlKHByaW50UmFuZ2U6IFBERlByaW50UmFuZ2UpIHtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICB3aW5kb3dbJ2lzSW5QREZQcmludFJhbmdlJ10gPSAocGFnZTogbnVtYmVyKSA9PiB0aGlzLmlzSW5QREZQcmludFJhbmdlKHBhZ2UsIHByaW50UmFuZ2UgYXMgUERGUHJpbnRSYW5nZSk7XHJcbiAgICB3aW5kb3dbJ2ZpbHRlcmVkUGFnZUNvdW50J10gPSB0aGlzLmZpbHRlcmVkUGFnZUNvdW50KFBERlZpZXdlckFwcGxpY2F0aW9uLnBhZ2VzQ291bnQsIHByaW50UmFuZ2UpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZpbHRlcmVkUGFnZUNvdW50KHBhZ2VDb3VudDogbnVtYmVyLCByYW5nZTogUERGUHJpbnRSYW5nZSk6IG51bWJlciB7XHJcbiAgICBsZXQgcmVzdWx0ID0gMDtcclxuICAgIGZvciAobGV0IHBhZ2UgPSAxOyBwYWdlIDw9IHBhZ2VDb3VudDsgcGFnZSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzSW5QREZQcmludFJhbmdlKHBhZ2UsIHJhbmdlKSkge1xyXG4gICAgICAgIHJlc3VsdCsrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzSW5QREZQcmludFJhbmdlKHBhZ2VJbmRleDogbnVtYmVyLCBwcmludFJhbmdlOiBQREZQcmludFJhbmdlKSB7XHJcbiAgICBjb25zdCBwYWdlID0gcGFnZUluZGV4ICsgMTtcclxuICAgIGlmIChwcmludFJhbmdlLmZyb20pIHtcclxuICAgICAgaWYgKHBhZ2UgPCBwcmludFJhbmdlLmZyb20pIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChwcmludFJhbmdlLnRvKSB7XHJcbiAgICAgIGlmIChwYWdlID4gcHJpbnRSYW5nZS50bykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHByaW50UmFuZ2UuZXhjbHVkZWQpIHtcclxuICAgICAgY29uc3QgZSA9IHByaW50UmFuZ2UuZXhjbHVkZWQgYXMgQXJyYXk8bnVtYmVyPjtcclxuICAgICAgaWYgKGUuc29tZSgocCkgPT4gcCA9PT0gcGFnZSkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChwcmludFJhbmdlLmluY2x1ZGVkKSB7XHJcbiAgICAgIGlmICghcHJpbnRSYW5nZS5pbmNsdWRlZC5zb21lKChwKSA9PiBwID09PSBwYWdlKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0UGFnZUFzVGV4dChwYWdlTnVtYmVyOiBudW1iZXIpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIGNvbnN0IHBkZkRvY3VtZW50ID0gUERGVmlld2VyQXBwbGljYXRpb24ucGRmRG9jdW1lbnQ7XHJcblxyXG4gICAgY29uc3QgcGFnZVByb21pc2U6IFByb21pc2U8YW55PiA9IHBkZkRvY3VtZW50LmdldFBhZ2UocGFnZU51bWJlcik7XHJcblxyXG4gICAgY29uc3QgZXh0cmFjdFRleHRTbmlwcGV0cyA9IChwZGZQYWdlKSA9PiBQcm9taXNlLnJlc29sdmUocGRmUGFnZS5nZXRUZXh0Q29udGVudCgpKTtcclxuICAgIGNvbnN0IGNvbWJpbmVUZXh0U25pcHBldHMgPSAodGV4dFNuaXBwZXRzKSA9PiBQcm9taXNlLnJlc29sdmUodGhpcy5jb252ZXJ0VGV4dEluZm9Ub1RleHQodGV4dFNuaXBwZXRzKSk7XHJcbiAgICByZXR1cm4gcGFnZVByb21pc2UudGhlbihleHRyYWN0VGV4dFNuaXBwZXRzKS50aGVuKGNvbWJpbmVUZXh0U25pcHBldHMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb252ZXJ0VGV4dEluZm9Ub1RleHQodGV4dEluZm86IGFueSk6IHN0cmluZyB7XHJcbiAgICBpZiAoIXRleHRJbmZvKSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIHJldHVybiB0ZXh0SW5mby5pdGVtcy5tYXAoKGluZm86IHsgc3RyOiBhbnkgfSkgPT4gaW5mby5zdHIpLmpvaW4oJycpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFBhZ2VBc0ltYWdlKHBhZ2VOdW1iZXI6IG51bWJlciwgc2NhbGU6IFBERkV4cG9ydFNjYWxlRmFjdG9yLCBiYWNrZ3JvdW5kPzogc3RyaW5nLCBiYWNrZ3JvdW5kQ29sb3JUb1JlcGxhY2U6IHN0cmluZyA9ICcjRkZGRkZGJyk6IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgY29uc3QgcGRmRG9jdW1lbnQgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudDtcclxuICAgIGNvbnN0IHBhZ2VQcm9taXNlOiBQcm9taXNlPGFueT4gPSBwZGZEb2N1bWVudC5nZXRQYWdlKHBhZ2VOdW1iZXIpO1xyXG4gICAgY29uc3QgaW1hZ2VQcm9taXNlID0gKHBkZlBhZ2UpID0+IFByb21pc2UucmVzb2x2ZSh0aGlzLmRyYXcocGRmUGFnZSwgc2NhbGUsIGJhY2tncm91bmQsIGJhY2tncm91bmRDb2xvclRvUmVwbGFjZSkpO1xyXG5cclxuICAgIHJldHVybiBwYWdlUHJvbWlzZS50aGVuKGltYWdlUHJvbWlzZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyYXcocGRmUGFnZTogYW55LCBzY2FsZTogUERGRXhwb3J0U2NhbGVGYWN0b3IsIGJhY2tncm91bmQ/OiBzdHJpbmcsIGJhY2tncm91bmRDb2xvclRvUmVwbGFjZTogc3RyaW5nID0gJyNGRkZGRkYnKTogUHJvbWlzZTxIVE1MQ2FudmFzRWxlbWVudD4ge1xyXG4gICAgbGV0IHpvb21GYWN0b3IgPSAxO1xyXG4gICAgaWYgKHNjYWxlLnNjYWxlKSB7XHJcbiAgICAgIHpvb21GYWN0b3IgPSBzY2FsZS5zY2FsZTtcclxuICAgIH0gZWxzZSBpZiAoc2NhbGUud2lkdGgpIHtcclxuICAgICAgem9vbUZhY3RvciA9IHNjYWxlLndpZHRoIC8gcGRmUGFnZS5nZXRWaWV3cG9ydCh7IHNjYWxlOiAxIH0pLndpZHRoO1xyXG4gICAgfSBlbHNlIGlmIChzY2FsZS5oZWlnaHQpIHtcclxuICAgICAgem9vbUZhY3RvciA9IHNjYWxlLmhlaWdodCAvIHBkZlBhZ2UuZ2V0Vmlld3BvcnQoeyBzY2FsZTogMSB9KS5oZWlnaHQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCB2aWV3cG9ydCA9IHBkZlBhZ2UuZ2V0Vmlld3BvcnQoe1xyXG4gICAgICBzY2FsZTogem9vbUZhY3RvcixcclxuICAgIH0pO1xyXG4gICAgY29uc3QgeyBjdHgsIGNhbnZhcyB9ID0gdGhpcy5nZXRQYWdlRHJhd0NvbnRleHQodmlld3BvcnQud2lkdGgsIHZpZXdwb3J0LmhlaWdodCk7XHJcbiAgICBjb25zdCBkcmF3Vmlld3BvcnQgPSB2aWV3cG9ydC5jbG9uZSgpO1xyXG5cclxuICAgIGNvbnN0IHJlbmRlckNvbnRleHQgPSB7XHJcbiAgICAgIGNhbnZhc0NvbnRleHQ6IGN0eCxcclxuICAgICAgdmlld3BvcnQ6IGRyYXdWaWV3cG9ydCxcclxuICAgICAgYmFja2dyb3VuZCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yVG9SZXBsYWNlLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlbmRlclRhc2sgPSBwZGZQYWdlLnJlbmRlcihyZW5kZXJDb250ZXh0KTtcclxuXHJcbiAgICBjb25zdCBkYXRhVXJsUHJvbWlzZSA9ICgpID0+IFByb21pc2UucmVzb2x2ZShjYW52YXMudG9EYXRhVVJMKCkpO1xyXG5cclxuICAgIHJldHVybiByZW5kZXJUYXNrLnByb21pc2UudGhlbihkYXRhVXJsUHJvbWlzZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFBhZ2VEcmF3Q29udGV4dCh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IERyYXdDb250ZXh0IHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJywgeyBhbHBoYTogdHJ1ZSB9KTtcclxuICAgIGlmICghY3R4KSB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcXVvdGVtYXJrXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGNyZWF0ZSB0aGUgMmQgY29udGV4dFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICBjYW52YXMuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XHJcbiAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcclxuXHJcbiAgICByZXR1cm4geyBjdHgsIGNhbnZhcyB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGdldEN1cnJlbnREb2N1bWVudEFzQmxvYigpOiBQcm9taXNlPEJsb2I+IHtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgUERGVmlld2VyQXBwbGljYXRpb24ucGRmRG9jdW1lbnQuc2F2ZURvY3VtZW50KFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50LmFubm90YXRpb25TdG9yYWdlKTtcclxuICAgIHJldHVybiBuZXcgQmxvYihbZGF0YV0sIHsgdHlwZTogJ2FwcGxpY2F0aW9uL3BkZicgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZ2V0Rm9ybURhdGEoY3VycmVudEZvcm1WYWx1ZXMgPSB0cnVlKTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgY29uc3QgcGRmIC8qOiBQREZEb2N1bWVudFByb3h5ICovID0gUERGVmlld2VyQXBwbGljYXRpb24ucGRmRG9jdW1lbnQ7XHJcbiAgICAvLyBzY3JlZW4gRFBJIC8gUERGIERQSVxyXG4gICAgY29uc3QgZHBpUmF0aW8gPSA5NiAvIDcyO1xyXG4gICAgY29uc3QgcmVzdWx0OiBBcnJheTxPYmplY3Q+ID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBwZGYubnVtUGFnZXM7IGkrKykge1xyXG4gICAgICAvLyB0cmFjayB0aGUgY3VycmVudCBwYWdlXHJcbiAgICAgIGNvbnN0IGN1cnJlbnRQYWdlIC8qIDogUERGUGFnZVByb3h5ICovID0gYXdhaXQgcGRmLmdldFBhZ2UoaSk7XHJcbiAgICAgIGNvbnN0IGFubm90YXRpb25zID0gYXdhaXQgY3VycmVudFBhZ2UuZ2V0QW5ub3RhdGlvbnMoKTtcclxuXHJcbiAgICAgIGFubm90YXRpb25zXHJcbiAgICAgICAgLmZpbHRlcigoYSkgPT4gYS5zdWJ0eXBlID09PSAnV2lkZ2V0JykgLy8gZ2V0IHRoZSBmb3JtIGZpZWxkIGFubm90YXRpb25zIG9ubHlcclxuICAgICAgICAubWFwKChhKSA9PiAoeyAuLi5hIH0pKSAvLyBvbmx5IGV4cG9zZSBjb3BpZXMgb2YgdGhlIGFubm90YXRpb25zIHRvIGF2b2lkIHNpZGUtZWZmZWN0c1xyXG4gICAgICAgIC5mb3JFYWNoKChhKSA9PiB7XHJcbiAgICAgICAgICAvLyBnZXQgdGhlIHJlY3RhbmdsZSB0aGF0IHJlcHJlc2VudCB0aGUgc2luZ2xlIGZpZWxkXHJcbiAgICAgICAgICAvLyBhbmQgcmVzaXplIGl0IGFjY29yZGluZyB0byB0aGUgY3VycmVudCBEUElcclxuICAgICAgICAgIGNvbnN0IGZpZWxkUmVjdDogQXJyYXk8bnVtYmVyPiA9IGN1cnJlbnRQYWdlLmdldFZpZXdwb3J0KHsgc2NhbGU6IGRwaVJhdGlvIH0pLmNvbnZlcnRUb1ZpZXdwb3J0UmVjdGFuZ2xlKGEucmVjdCk7XHJcblxyXG4gICAgICAgICAgLy8gYWRkIHRoZSBjb3JyZXNwb25kaW5nIGlucHV0XHJcbiAgICAgICAgICBpZiAoY3VycmVudEZvcm1WYWx1ZXMgJiYgYS5maWVsZE5hbWUpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICBpZiAoYS5leHBvcnRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gUERGVmlld2VyQXBwbGljYXRpb24ucGRmRG9jdW1lbnQuYW5ub3RhdGlvblN0b3JhZ2UuZ2V0VmFsdWUoYS5pZCwgYS5maWVsZE5hbWUgKyAnLycgKyBhLmV4cG9ydFZhbHVlLCAnJyk7XHJcbiAgICAgICAgICAgICAgICBhLnZhbHVlID0gY3VycmVudFZhbHVlPy52YWx1ZTtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGEucmFkaW9CdXR0b24pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50LmFubm90YXRpb25TdG9yYWdlLmdldFZhbHVlKGEuaWQsIGEuZmllbGROYW1lICsgJy8nICsgYS5maWVsZFZhbHVlLCAnJyk7XHJcbiAgICAgICAgICAgICAgICBhLnZhbHVlID0gY3VycmVudFZhbHVlPy52YWx1ZTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gUERGVmlld2VyQXBwbGljYXRpb24ucGRmRG9jdW1lbnQuYW5ub3RhdGlvblN0b3JhZ2UuZ2V0VmFsdWUoYS5pZCwgYS5maWVsZE5hbWUsICcnKTtcclxuICAgICAgICAgICAgICAgIGEudmFsdWUgPSBjdXJyZW50VmFsdWU/LnZhbHVlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7XHJcbiAgICAgICAgICAgICAgLy8ganVzdCBpZ25vcmUgaXRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmVzdWx0LnB1c2goeyBmaWVsZEFubm90YXRpb246IGEsIGZpZWxkUmVjdCwgcGFnZU51bWJlcjogaSB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIGEgcGFnZSB0byB0aGUgcmVuZGVyaW5nIHF1ZXVlXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBhZ2VJbmRleCBJbmRleCBvZiB0aGUgcGFnZSB0byByZW5kZXJcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gZmFsc2UsIGlmIHRoZSBwYWdlIGhhcyBhbHJlYWR5IGJlZW4gcmVuZGVyZWRcclxuICAgKiBvciBpZiBpdCdzIG91dCBvZiByYW5nZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBhZGRQYWdlVG9SZW5kZXJRdWV1ZShwYWdlSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIHJldHVybiBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuYWRkUGFnZVRvUmVuZGVyUXVldWUocGFnZUluZGV4KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc1JlbmRlclF1ZXVlRW1wdHkoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBzY3JvbGxlZERvd24gPSB0cnVlO1xyXG4gICAgY29uc3QgcmVuZGVyRXh0cmEgPSBmYWxzZTtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICBjb25zdCBuZXh0UGFnZSA9IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5yZW5kZXJpbmdRdWV1ZS5nZXRIaWdoZXN0UHJpb3JpdHkoXHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5fZ2V0VmlzaWJsZVBhZ2VzKCksXHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5fcGFnZXMsXHJcbiAgICAgIHNjcm9sbGVkRG93bixcclxuICAgICAgcmVuZGVyRXh0cmFcclxuICAgICk7XHJcbiAgICByZXR1cm4gIW5leHRQYWdlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhhc1BhZ2VCZWVuUmVuZGVyZWQocGFnZUluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICBjb25zdCBwYWdlcyA9IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5fcGFnZXM7XHJcbiAgICBpZiAocGFnZXMubGVuZ3RoID4gcGFnZUluZGV4ICYmIHBhZ2VJbmRleCA+PSAwKSB7XHJcbiAgICAgIGNvbnN0IHBhZ2VWaWV3ID0gcGFnZXNbcGFnZUluZGV4XTtcclxuICAgICAgY29uc3QgaXNMb2FkaW5nID0gcGFnZVZpZXcuZGl2LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nSWNvbicpO1xyXG4gICAgICByZXR1cm4gIWlzTG9hZGluZztcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjdXJyZW50bHlSZW5kZXJlZFBhZ2VzKCk6IEFycmF5PG51bWJlcj4ge1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIGNvbnN0IHBhZ2VzID0gUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLl9wYWdlcztcclxuICAgIHJldHVybiBwYWdlcy5maWx0ZXIoKHBhZ2UpID0+ICFwYWdlLmRpdi5xdWVyeVNlbGVjdG9yKCcubG9hZGluZ0ljb24nKSkubWFwKChwYWdlKSA9PiBwYWdlLmlkKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBudW1iZXJPZlBhZ2VzKCk6IG51bWJlciB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgY29uc3QgcGFnZXMgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuX3BhZ2VzO1xyXG4gICAgcmV0dXJuIHBhZ2VzLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDdXJyZW50bHlWaXNpYmxlUGFnZU51bWJlcnMoKTogQXJyYXk8bnVtYmVyPiB7XHJcbiAgICBjb25zdCBhcHAgPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb24gYXMgSVBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgY29uc3QgcGFnZXMgPSAoYXBwLnBkZlZpZXdlci5fZ2V0VmlzaWJsZVBhZ2VzKCkgYXMgYW55KS52aWV3cyBhcyBBcnJheTxhbnk+O1xyXG4gICAgcmV0dXJuIHBhZ2VzPy5tYXAoKHBhZ2UpID0+IHBhZ2UuaWQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlY2FsY3VsYXRlU2l6ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVjYWxjdWxhdGVTaXplJC5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgbGlzdExheWVycygpOiBQcm9taXNlPEFycmF5PFBkZkxheWVyPiB8IHVuZGVmaW5lZD4ge1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuXHJcbiAgICBjb25zdCBvcHRpb25hbENvbnRlbnRDb25maWcgPSBhd2FpdCBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIub3B0aW9uYWxDb250ZW50Q29uZmlnUHJvbWlzZTtcclxuICAgIGlmIChvcHRpb25hbENvbnRlbnRDb25maWcpIHtcclxuICAgICAgY29uc3QgbGV2ZWxEYXRhID0gb3B0aW9uYWxDb250ZW50Q29uZmlnLmdldE9yZGVyKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGxldmVsRGF0YSk7XHJcbiAgICAgIGNvbnN0IGxheWVySWRzID0gbGV2ZWxEYXRhLmZpbHRlcigoZ3JvdXBJZCkgPT4gdHlwZW9mIGdyb3VwSWQgIT09ICdvYmplY3QnKTtcclxuICAgICAgcmV0dXJuIGxheWVySWRzLm1hcCgobGF5ZXJJZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IG9wdGlvbmFsQ29udGVudENvbmZpZy5nZXRHcm91cChsYXllcklkKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgbGF5ZXJJZDogbGF5ZXJJZCxcclxuICAgICAgICAgIG5hbWU6IGNvbmZpZy5uYW1lLFxyXG4gICAgICAgICAgdmlzaWJsZTogY29uZmlnLnZpc2libGUsXHJcbiAgICAgICAgfSBhcyBQZGZMYXllcjtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIHRvZ2dsZUxheWVyKGxheWVySWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIGNvbnN0IG9wdGlvbmFsQ29udGVudENvbmZpZyA9IGF3YWl0IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5vcHRpb25hbENvbnRlbnRDb25maWdQcm9taXNlO1xyXG4gICAgaWYgKG9wdGlvbmFsQ29udGVudENvbmZpZykge1xyXG4gICAgICBsZXQgaXNWaXNpYmxlID0gb3B0aW9uYWxDb250ZW50Q29uZmlnLmdldEdyb3VwKGxheWVySWQpLnZpc2libGU7XHJcbiAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbaWQ9JyR7bGF5ZXJJZH0nXWApO1xyXG4gICAgICBpZiAoY2hlY2tib3gpIHtcclxuICAgICAgICBpc1Zpc2libGUgPSAoY2hlY2tib3ggYXMgSFRNTElucHV0RWxlbWVudCkuY2hlY2tlZDtcclxuICAgICAgICAoY2hlY2tib3ggYXMgSFRNTElucHV0RWxlbWVudCkuY2hlY2tlZCA9ICFpc1Zpc2libGU7XHJcbiAgICAgIH1cclxuICAgICAgb3B0aW9uYWxDb250ZW50Q29uZmlnLnNldFZpc2liaWxpdHkobGF5ZXJJZCwgIWlzVmlzaWJsZSk7XHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLmRpc3BhdGNoKCdvcHRpb25hbGNvbnRlbnRjb25maWcnLCB7XHJcbiAgICAgICAgc291cmNlOiB0aGlzLFxyXG4gICAgICAgIHByb21pc2U6IFByb21pc2UucmVzb2x2ZShvcHRpb25hbENvbnRlbnRDb25maWcpLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzY3JvbGxQYWdlSW50b1ZpZXcocGFnZU51bWJlcjogbnVtYmVyLCBwYWdlU3BvdD86IHsgdG9wPzogbnVtYmVyIHwgc3RyaW5nOyBsZWZ0PzogbnVtYmVyIHwgc3RyaW5nIH0pOiB2b2lkIHtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICBjb25zdCB2aWV3ZXIgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIgYXMgYW55O1xyXG4gICAgdmlld2VyLnNjcm9sbFBhZ2VQb3NJbnRvVmlldyhwYWdlTnVtYmVyLCBwYWdlU3BvdCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
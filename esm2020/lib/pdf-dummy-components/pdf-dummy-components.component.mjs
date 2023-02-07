import { Component } from '@angular/core';
import * as i0 from "@angular/core";
/** List of all fields that can be customized */
const requiredIds = [
    'toolbarViewer',
    'numPages',
    'pageNumber',
    'scaleSelectContainer',
    'customScaleOption',
    'scaleSelect',
    'scrollPage',
    'previous',
    'next',
    'zoomIn',
    'zoomOut',
    'viewFind',
    'openFile',
    'print',
    'presentationMode',
    'download',
    'viewBookmark',
    'secondaryToolbar',
    'secondaryToolbarToggle',
    'secondaryToolbarButtonContainer',
    'secondaryPresentationMode',
    'secondaryOpenFile',
    'secondaryPrint',
    'secondaryDownload',
    'secondaryViewBookmark',
    'firstPage',
    'lastPage',
    'pageRotateCw',
    'pageRotateCcw',
    'cursorSelectTool',
    'cursorHandTool',
    'scrollVertical',
    'scrollHorizontal',
    'scrollWrapped',
    'spreadNone',
    'spreadOdd',
    'spreadEven',
    'documentProperties',
    'contextFirstPage',
    'contextLastPage',
    'contextPageRotateCw',
    'contextPageRotateCcw',
    'currentOutlineItem',
    'outerContainer',
    'viewerContainer',
    'sidebarToggle',
    'viewThumbnail',
    'viewOutline',
    'viewAttachments',
    'thumbnailView',
    'outlineView',
    'attachmentsView',
    'outerContainer',
    'sidebarResizer',
    'outlineOptionsContainer',
    'findbar',
    'viewFind',
    'findInput',
    'findInputMultiline',
    'findHighlightAll',
    'findCurrentPage',
    'findRange',
    'findMatchCase',
    'findMatchDiacritics',
    'findEntireWord',
    'findMultipleSearchTexts',
    'findIgnoreAccents',
    'findMsg',
    'findResultsCount',
    'findPrevious',
    'findNext',
    'findFuzzy',
    'passwordText',
    'password',
    'passwordSubmit',
    'passwordCancel',
    'documentPropertiesClose',
    'fileNameField',
    'fileSizeField',
    'titleField',
    'authorField',
    'subjectField',
    'keywordsField',
    'creationDateField',
    'modificationDateField',
    'creatorField',
    'producerField',
    'versionField',
    'pageCountField',
    'pageSizeField',
    'linearizedField',
    'errorWrapper',
    'errorMessage',
    'errorClose',
    'errorMoreInfo',
    'errorShowMore',
    'errorShowLess',
    'scaleSelectContainer',
    'viewAttachments',
    'viewLayers',
    'viewThumbnail',
    'viewOutline',
    'editorModeButtons',
    'editorNone',
    'editorFreeText',
    'editorInk',
];
export class PdfDummyComponentsComponent {
    addMissingStandardWidgets() {
        this.dummyComponentsContainer = document.getElementsByClassName('dummy-pdf-viewer-components')[0];
        const container = this.dummyComponentsContainer;
        if (!container) {
            return;
        }
        for (let i = 0; i < container.children.length; i++) {
            const child = container.firstChild;
            if (child) {
                container.removeChild(child);
            }
        }
        requiredIds.forEach((id) => {
            if (this.needsDummyWidget(id)) {
                const dummy = document.createElement('span');
                dummy.id = id;
                dummy.className = 'invisible dummy-component';
                this.dummyComponentsContainer.appendChild(dummy);
            }
        });
        if (this.needsDummyWidget('scaleSelect')) {
            const dummy = document.createElement('select');
            dummy.id = 'scaleSelect';
            dummy.className = 'invisible dummy-component';
            this.dummyComponentsContainer.appendChild(dummy);
        }
    }
    needsDummyWidget(id) {
        const widget = document.getElementById(id);
        if (!widget) {
            return true;
        }
        return false;
    }
}
/** @nocollapse */ PdfDummyComponentsComponent.ɵfac = function PdfDummyComponentsComponent_Factory(t) { return new (t || PdfDummyComponentsComponent)(); };
/** @nocollapse */ PdfDummyComponentsComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfDummyComponentsComponent, selectors: [["pdf-dummy-components"]], decls: 1, vars: 0, consts: [[1, "invisible", "dummy-pdf-viewer-components"]], template: function PdfDummyComponentsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "span", 0);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfDummyComponentsComponent, [{
        type: Component,
        args: [{ selector: 'pdf-dummy-components', template: "<span class=\"invisible dummy-pdf-viewer-components\">\r\n</span>\r\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWR1bW15LWNvbXBvbmVudHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9wZGYtZHVtbXktY29tcG9uZW50cy9wZGYtZHVtbXktY29tcG9uZW50cy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3BkZi1kdW1teS1jb21wb25lbnRzL3BkZi1kdW1teS1jb21wb25lbnRzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTFDLGdEQUFnRDtBQUNoRCxNQUFNLFdBQVcsR0FBRztJQUNsQixlQUFlO0lBQ2YsVUFBVTtJQUNWLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBQ1osVUFBVTtJQUNWLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7SUFDVixVQUFVO0lBQ1YsT0FBTztJQUNQLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsaUNBQWlDO0lBQ2pDLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFVBQVU7SUFDVixjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixvQkFB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QztTQUNiO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzt5SEF4Q1UsMkJBQTJCOzZHQUEzQiwyQkFBMkI7UUNwSHhDLDBCQUNPOzt1RkRtSE0sMkJBQTJCO2NBSnZDLFNBQVM7MkJBQ0Usc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKiogTGlzdCBvZiBhbGwgZmllbGRzIHRoYXQgY2FuIGJlIGN1c3RvbWl6ZWQgKi9cclxuY29uc3QgcmVxdWlyZWRJZHMgPSBbXHJcbiAgJ3Rvb2xiYXJWaWV3ZXInLFxyXG4gICdudW1QYWdlcycsXHJcbiAgJ3BhZ2VOdW1iZXInLFxyXG4gICdzY2FsZVNlbGVjdENvbnRhaW5lcicsXHJcbiAgJ2N1c3RvbVNjYWxlT3B0aW9uJyxcclxuICAnc2NhbGVTZWxlY3QnLFxyXG4gICdzY3JvbGxQYWdlJyxcclxuICAncHJldmlvdXMnLFxyXG4gICduZXh0JyxcclxuICAnem9vbUluJyxcclxuICAnem9vbU91dCcsXHJcbiAgJ3ZpZXdGaW5kJyxcclxuICAnb3BlbkZpbGUnLFxyXG4gICdwcmludCcsXHJcbiAgJ3ByZXNlbnRhdGlvbk1vZGUnLFxyXG4gICdkb3dubG9hZCcsXHJcbiAgJ3ZpZXdCb29rbWFyaycsXHJcbiAgJ3NlY29uZGFyeVRvb2xiYXInLFxyXG4gICdzZWNvbmRhcnlUb29sYmFyVG9nZ2xlJyxcclxuICAnc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbkNvbnRhaW5lcicsXHJcbiAgJ3NlY29uZGFyeVByZXNlbnRhdGlvbk1vZGUnLFxyXG4gICdzZWNvbmRhcnlPcGVuRmlsZScsXHJcbiAgJ3NlY29uZGFyeVByaW50JyxcclxuICAnc2Vjb25kYXJ5RG93bmxvYWQnLFxyXG4gICdzZWNvbmRhcnlWaWV3Qm9va21hcmsnLFxyXG4gICdmaXJzdFBhZ2UnLFxyXG4gICdsYXN0UGFnZScsXHJcbiAgJ3BhZ2VSb3RhdGVDdycsXHJcbiAgJ3BhZ2VSb3RhdGVDY3cnLFxyXG4gICdjdXJzb3JTZWxlY3RUb29sJyxcclxuICAnY3Vyc29ySGFuZFRvb2wnLFxyXG4gICdzY3JvbGxWZXJ0aWNhbCcsXHJcbiAgJ3Njcm9sbEhvcml6b250YWwnLFxyXG4gICdzY3JvbGxXcmFwcGVkJyxcclxuICAnc3ByZWFkTm9uZScsXHJcbiAgJ3NwcmVhZE9kZCcsXHJcbiAgJ3NwcmVhZEV2ZW4nLFxyXG4gICdkb2N1bWVudFByb3BlcnRpZXMnLFxyXG4gICdjb250ZXh0Rmlyc3RQYWdlJyxcclxuICAnY29udGV4dExhc3RQYWdlJyxcclxuICAnY29udGV4dFBhZ2VSb3RhdGVDdycsXHJcbiAgJ2NvbnRleHRQYWdlUm90YXRlQ2N3JyxcclxuICAnY3VycmVudE91dGxpbmVJdGVtJyxcclxuICAnb3V0ZXJDb250YWluZXInLFxyXG4gICd2aWV3ZXJDb250YWluZXInLFxyXG4gICdzaWRlYmFyVG9nZ2xlJyxcclxuICAndmlld1RodW1ibmFpbCcsXHJcbiAgJ3ZpZXdPdXRsaW5lJyxcclxuICAndmlld0F0dGFjaG1lbnRzJyxcclxuICAndGh1bWJuYWlsVmlldycsXHJcbiAgJ291dGxpbmVWaWV3JyxcclxuICAnYXR0YWNobWVudHNWaWV3JyxcclxuICAnb3V0ZXJDb250YWluZXInLFxyXG4gICdzaWRlYmFyUmVzaXplcicsXHJcbiAgJ291dGxpbmVPcHRpb25zQ29udGFpbmVyJyxcclxuICAnZmluZGJhcicsXHJcbiAgJ3ZpZXdGaW5kJyxcclxuICAnZmluZElucHV0JyxcclxuICAnZmluZElucHV0TXVsdGlsaW5lJyxcclxuICAnZmluZEhpZ2hsaWdodEFsbCcsXHJcbiAgJ2ZpbmRDdXJyZW50UGFnZScsXHJcbiAgJ2ZpbmRSYW5nZScsXHJcbiAgJ2ZpbmRNYXRjaENhc2UnLFxyXG4gICdmaW5kTWF0Y2hEaWFjcml0aWNzJyxcclxuICAnZmluZEVudGlyZVdvcmQnLFxyXG4gICdmaW5kTXVsdGlwbGVTZWFyY2hUZXh0cycsXHJcbiAgJ2ZpbmRJZ25vcmVBY2NlbnRzJyxcclxuICAnZmluZE1zZycsXHJcbiAgJ2ZpbmRSZXN1bHRzQ291bnQnLFxyXG4gICdmaW5kUHJldmlvdXMnLFxyXG4gICdmaW5kTmV4dCcsXHJcbiAgJ2ZpbmRGdXp6eScsXHJcbiAgJ3Bhc3N3b3JkVGV4dCcsXHJcbiAgJ3Bhc3N3b3JkJyxcclxuICAncGFzc3dvcmRTdWJtaXQnLFxyXG4gICdwYXNzd29yZENhbmNlbCcsXHJcbiAgJ2RvY3VtZW50UHJvcGVydGllc0Nsb3NlJyxcclxuICAnZmlsZU5hbWVGaWVsZCcsXHJcbiAgJ2ZpbGVTaXplRmllbGQnLFxyXG4gICd0aXRsZUZpZWxkJyxcclxuICAnYXV0aG9yRmllbGQnLFxyXG4gICdzdWJqZWN0RmllbGQnLFxyXG4gICdrZXl3b3Jkc0ZpZWxkJyxcclxuICAnY3JlYXRpb25EYXRlRmllbGQnLFxyXG4gICdtb2RpZmljYXRpb25EYXRlRmllbGQnLFxyXG4gICdjcmVhdG9yRmllbGQnLFxyXG4gICdwcm9kdWNlckZpZWxkJyxcclxuICAndmVyc2lvbkZpZWxkJyxcclxuICAncGFnZUNvdW50RmllbGQnLFxyXG4gICdwYWdlU2l6ZUZpZWxkJyxcclxuICAnbGluZWFyaXplZEZpZWxkJyxcclxuICAnZXJyb3JXcmFwcGVyJyxcclxuICAnZXJyb3JNZXNzYWdlJyxcclxuICAnZXJyb3JDbG9zZScsXHJcbiAgJ2Vycm9yTW9yZUluZm8nLFxyXG4gICdlcnJvclNob3dNb3JlJyxcclxuICAnZXJyb3JTaG93TGVzcycsXHJcbiAgJ3NjYWxlU2VsZWN0Q29udGFpbmVyJyxcclxuICAndmlld0F0dGFjaG1lbnRzJyxcclxuICAndmlld0xheWVycycsXHJcbiAgJ3ZpZXdUaHVtYm5haWwnLFxyXG4gICd2aWV3T3V0bGluZScsXHJcbiAgJ2VkaXRvck1vZGVCdXR0b25zJyxcclxuICAnZWRpdG9yTm9uZScsXHJcbiAgJ2VkaXRvckZyZWVUZXh0JyxcclxuICAnZWRpdG9ySW5rJyxcclxuXTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGRmLWR1bW15LWNvbXBvbmVudHMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtZHVtbXktY29tcG9uZW50cy5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZGZEdW1teUNvbXBvbmVudHNDb21wb25lbnQge1xyXG4gIHByaXZhdGUgZHVtbXlDb21wb25lbnRzQ29udGFpbmVyOiBFbGVtZW50O1xyXG5cclxuICBwdWJsaWMgYWRkTWlzc2luZ1N0YW5kYXJkV2lkZ2V0cygpOiB2b2lkIHtcclxuICAgIHRoaXMuZHVtbXlDb21wb25lbnRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHVtbXktcGRmLXZpZXdlci1jb21wb25lbnRzJylbMF07XHJcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmR1bW15Q29tcG9uZW50c0NvbnRhaW5lciBhcyBIVE1MRWxlbWVudDtcclxuICAgIGlmICghY29udGFpbmVyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBjaGlsZCA9IGNvbnRhaW5lci5maXJzdENoaWxkO1xyXG4gICAgICBpZiAoY2hpbGQpIHtcclxuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVxdWlyZWRJZHMuZm9yRWFjaCgoaWQpID0+IHtcclxuICAgICAgaWYgKHRoaXMubmVlZHNEdW1teVdpZGdldChpZCkpIHtcclxuICAgICAgICBjb25zdCBkdW1teSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBkdW1teS5pZCA9IGlkO1xyXG4gICAgICAgIGR1bW15LmNsYXNzTmFtZSA9ICdpbnZpc2libGUgZHVtbXktY29tcG9uZW50JztcclxuICAgICAgICB0aGlzLmR1bW15Q29tcG9uZW50c0NvbnRhaW5lci5hcHBlbmRDaGlsZChkdW1teSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLm5lZWRzRHVtbXlXaWRnZXQoJ3NjYWxlU2VsZWN0JykpIHtcclxuICAgICAgY29uc3QgZHVtbXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgICAgZHVtbXkuaWQgPSAnc2NhbGVTZWxlY3QnO1xyXG4gICAgICBkdW1teS5jbGFzc05hbWUgPSAnaW52aXNpYmxlIGR1bW15LWNvbXBvbmVudCc7XHJcbiAgICAgIHRoaXMuZHVtbXlDb21wb25lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1bW15KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbmVlZHNEdW1teVdpZGdldChpZDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCB3aWRnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICBpZiAoIXdpZGdldCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuIiwiPHNwYW4gY2xhc3M9XCJpbnZpc2libGUgZHVtbXktcGRmLXZpZXdlci1jb21wb25lbnRzXCI+XHJcbjwvc3Bhbj5cclxuIl19
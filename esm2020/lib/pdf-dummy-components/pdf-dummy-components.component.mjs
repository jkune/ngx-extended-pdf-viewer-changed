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
PdfDummyComponentsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: PdfDummyComponentsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfDummyComponentsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: PdfDummyComponentsComponent, selector: "pdf-dummy-components", ngImport: i0, template: "<span class=\"invisible dummy-pdf-viewer-components\">\r\n</span>\r\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: PdfDummyComponentsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-dummy-components', template: "<span class=\"invisible dummy-pdf-viewer-components\">\r\n</span>\r\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWR1bW15LWNvbXBvbmVudHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9wZGYtZHVtbXktY29tcG9uZW50cy9wZGYtZHVtbXktY29tcG9uZW50cy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3BkZi1kdW1teS1jb21wb25lbnRzL3BkZi1kdW1teS1jb21wb25lbnRzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTFDLGdEQUFnRDtBQUNoRCxNQUFNLFdBQVcsR0FBRztJQUNsQixlQUFlO0lBQ2YsVUFBVTtJQUNWLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBQ1osVUFBVTtJQUNWLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7SUFDVixVQUFVO0lBQ1YsT0FBTztJQUNQLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsaUNBQWlDO0lBQ2pDLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFVBQVU7SUFDVixjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixvQkFB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QztTQUNiO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzt5SEF4Q1UsMkJBQTJCOzZHQUEzQiwyQkFBMkIsNERDcEh4Qyx1RUFFQTs0RkRrSGEsMkJBQTJCO2tCQUp2QyxTQUFTOytCQUNFLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqIExpc3Qgb2YgYWxsIGZpZWxkcyB0aGF0IGNhbiBiZSBjdXN0b21pemVkICovXHJcbmNvbnN0IHJlcXVpcmVkSWRzID0gW1xyXG4gICd0b29sYmFyVmlld2VyJyxcclxuICAnbnVtUGFnZXMnLFxyXG4gICdwYWdlTnVtYmVyJyxcclxuICAnc2NhbGVTZWxlY3RDb250YWluZXInLFxyXG4gICdjdXN0b21TY2FsZU9wdGlvbicsXHJcbiAgJ3NjYWxlU2VsZWN0JyxcclxuICAnc2Nyb2xsUGFnZScsXHJcbiAgJ3ByZXZpb3VzJyxcclxuICAnbmV4dCcsXHJcbiAgJ3pvb21JbicsXHJcbiAgJ3pvb21PdXQnLFxyXG4gICd2aWV3RmluZCcsXHJcbiAgJ29wZW5GaWxlJyxcclxuICAncHJpbnQnLFxyXG4gICdwcmVzZW50YXRpb25Nb2RlJyxcclxuICAnZG93bmxvYWQnLFxyXG4gICd2aWV3Qm9va21hcmsnLFxyXG4gICdzZWNvbmRhcnlUb29sYmFyJyxcclxuICAnc2Vjb25kYXJ5VG9vbGJhclRvZ2dsZScsXHJcbiAgJ3NlY29uZGFyeVRvb2xiYXJCdXR0b25Db250YWluZXInLFxyXG4gICdzZWNvbmRhcnlQcmVzZW50YXRpb25Nb2RlJyxcclxuICAnc2Vjb25kYXJ5T3BlbkZpbGUnLFxyXG4gICdzZWNvbmRhcnlQcmludCcsXHJcbiAgJ3NlY29uZGFyeURvd25sb2FkJyxcclxuICAnc2Vjb25kYXJ5Vmlld0Jvb2ttYXJrJyxcclxuICAnZmlyc3RQYWdlJyxcclxuICAnbGFzdFBhZ2UnLFxyXG4gICdwYWdlUm90YXRlQ3cnLFxyXG4gICdwYWdlUm90YXRlQ2N3JyxcclxuICAnY3Vyc29yU2VsZWN0VG9vbCcsXHJcbiAgJ2N1cnNvckhhbmRUb29sJyxcclxuICAnc2Nyb2xsVmVydGljYWwnLFxyXG4gICdzY3JvbGxIb3Jpem9udGFsJyxcclxuICAnc2Nyb2xsV3JhcHBlZCcsXHJcbiAgJ3NwcmVhZE5vbmUnLFxyXG4gICdzcHJlYWRPZGQnLFxyXG4gICdzcHJlYWRFdmVuJyxcclxuICAnZG9jdW1lbnRQcm9wZXJ0aWVzJyxcclxuICAnY29udGV4dEZpcnN0UGFnZScsXHJcbiAgJ2NvbnRleHRMYXN0UGFnZScsXHJcbiAgJ2NvbnRleHRQYWdlUm90YXRlQ3cnLFxyXG4gICdjb250ZXh0UGFnZVJvdGF0ZUNjdycsXHJcbiAgJ2N1cnJlbnRPdXRsaW5lSXRlbScsXHJcbiAgJ291dGVyQ29udGFpbmVyJyxcclxuICAndmlld2VyQ29udGFpbmVyJyxcclxuICAnc2lkZWJhclRvZ2dsZScsXHJcbiAgJ3ZpZXdUaHVtYm5haWwnLFxyXG4gICd2aWV3T3V0bGluZScsXHJcbiAgJ3ZpZXdBdHRhY2htZW50cycsXHJcbiAgJ3RodW1ibmFpbFZpZXcnLFxyXG4gICdvdXRsaW5lVmlldycsXHJcbiAgJ2F0dGFjaG1lbnRzVmlldycsXHJcbiAgJ291dGVyQ29udGFpbmVyJyxcclxuICAnc2lkZWJhclJlc2l6ZXInLFxyXG4gICdvdXRsaW5lT3B0aW9uc0NvbnRhaW5lcicsXHJcbiAgJ2ZpbmRiYXInLFxyXG4gICd2aWV3RmluZCcsXHJcbiAgJ2ZpbmRJbnB1dCcsXHJcbiAgJ2ZpbmRJbnB1dE11bHRpbGluZScsXHJcbiAgJ2ZpbmRIaWdobGlnaHRBbGwnLFxyXG4gICdmaW5kQ3VycmVudFBhZ2UnLFxyXG4gICdmaW5kUmFuZ2UnLFxyXG4gICdmaW5kTWF0Y2hDYXNlJyxcclxuICAnZmluZE1hdGNoRGlhY3JpdGljcycsXHJcbiAgJ2ZpbmRFbnRpcmVXb3JkJyxcclxuICAnZmluZE11bHRpcGxlU2VhcmNoVGV4dHMnLFxyXG4gICdmaW5kSWdub3JlQWNjZW50cycsXHJcbiAgJ2ZpbmRNc2cnLFxyXG4gICdmaW5kUmVzdWx0c0NvdW50JyxcclxuICAnZmluZFByZXZpb3VzJyxcclxuICAnZmluZE5leHQnLFxyXG4gICdmaW5kRnV6enknLFxyXG4gICdwYXNzd29yZFRleHQnLFxyXG4gICdwYXNzd29yZCcsXHJcbiAgJ3Bhc3N3b3JkU3VibWl0JyxcclxuICAncGFzc3dvcmRDYW5jZWwnLFxyXG4gICdkb2N1bWVudFByb3BlcnRpZXNDbG9zZScsXHJcbiAgJ2ZpbGVOYW1lRmllbGQnLFxyXG4gICdmaWxlU2l6ZUZpZWxkJyxcclxuICAndGl0bGVGaWVsZCcsXHJcbiAgJ2F1dGhvckZpZWxkJyxcclxuICAnc3ViamVjdEZpZWxkJyxcclxuICAna2V5d29yZHNGaWVsZCcsXHJcbiAgJ2NyZWF0aW9uRGF0ZUZpZWxkJyxcclxuICAnbW9kaWZpY2F0aW9uRGF0ZUZpZWxkJyxcclxuICAnY3JlYXRvckZpZWxkJyxcclxuICAncHJvZHVjZXJGaWVsZCcsXHJcbiAgJ3ZlcnNpb25GaWVsZCcsXHJcbiAgJ3BhZ2VDb3VudEZpZWxkJyxcclxuICAncGFnZVNpemVGaWVsZCcsXHJcbiAgJ2xpbmVhcml6ZWRGaWVsZCcsXHJcbiAgJ2Vycm9yV3JhcHBlcicsXHJcbiAgJ2Vycm9yTWVzc2FnZScsXHJcbiAgJ2Vycm9yQ2xvc2UnLFxyXG4gICdlcnJvck1vcmVJbmZvJyxcclxuICAnZXJyb3JTaG93TW9yZScsXHJcbiAgJ2Vycm9yU2hvd0xlc3MnLFxyXG4gICdzY2FsZVNlbGVjdENvbnRhaW5lcicsXHJcbiAgJ3ZpZXdBdHRhY2htZW50cycsXHJcbiAgJ3ZpZXdMYXllcnMnLFxyXG4gICd2aWV3VGh1bWJuYWlsJyxcclxuICAndmlld091dGxpbmUnLFxyXG4gICdlZGl0b3JNb2RlQnV0dG9ucycsXHJcbiAgJ2VkaXRvck5vbmUnLFxyXG4gICdlZGl0b3JGcmVlVGV4dCcsXHJcbiAgJ2VkaXRvckluaycsXHJcbl07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BkZi1kdW1teS1jb21wb25lbnRzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLWR1bW15LWNvbXBvbmVudHMuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmRHVtbXlDb21wb25lbnRzQ29tcG9uZW50IHtcclxuICBwcml2YXRlIGR1bW15Q29tcG9uZW50c0NvbnRhaW5lcjogRWxlbWVudDtcclxuXHJcbiAgcHVibGljIGFkZE1pc3NpbmdTdGFuZGFyZFdpZGdldHMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmR1bW15Q29tcG9uZW50c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2R1bW15LXBkZi12aWV3ZXItY29tcG9uZW50cycpWzBdO1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5kdW1teUNvbXBvbmVudHNDb250YWluZXIgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBpZiAoIWNvbnRhaW5lcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgY2hpbGQgPSBjb250YWluZXIuZmlyc3RDaGlsZDtcclxuICAgICAgaWYgKGNoaWxkKSB7XHJcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNoaWxkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlcXVpcmVkSWRzLmZvckVhY2goKGlkKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLm5lZWRzRHVtbXlXaWRnZXQoaWQpKSB7XHJcbiAgICAgICAgY29uc3QgZHVtbXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgZHVtbXkuaWQgPSBpZDtcclxuICAgICAgICBkdW1teS5jbGFzc05hbWUgPSAnaW52aXNpYmxlIGR1bW15LWNvbXBvbmVudCc7XHJcbiAgICAgICAgdGhpcy5kdW1teUNvbXBvbmVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVtbXkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5uZWVkc0R1bW15V2lkZ2V0KCdzY2FsZVNlbGVjdCcpKSB7XHJcbiAgICAgIGNvbnN0IGR1bW15ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgICAgIGR1bW15LmlkID0gJ3NjYWxlU2VsZWN0JztcclxuICAgICAgZHVtbXkuY2xhc3NOYW1lID0gJ2ludmlzaWJsZSBkdW1teS1jb21wb25lbnQnO1xyXG4gICAgICB0aGlzLmR1bW15Q29tcG9uZW50c0NvbnRhaW5lci5hcHBlbmRDaGlsZChkdW1teSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG5lZWRzRHVtbXlXaWRnZXQoaWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3Qgd2lkZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgaWYgKCF3aWRnZXQpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiIsIjxzcGFuIGNsYXNzPVwiaW52aXNpYmxlIGR1bW15LXBkZi12aWV3ZXItY29tcG9uZW50c1wiPlxyXG48L3NwYW4+XHJcbiJdfQ==
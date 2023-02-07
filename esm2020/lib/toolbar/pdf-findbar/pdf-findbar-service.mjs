import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class PdfFindbarService {
    constructor() {
        this.multipleSearchTexts = false;
        this._individualWordsMode = true;
    }
    get individualWordsMode() {
        return this._individualWordsMode;
    }
    set individualWordsMode(value) {
        if (this._individualWordsMode != value) {
            const multilineInput = document.querySelector('ngx-extended-pdf-viewer #findInputMultiline');
            const wordsInput = document.querySelector('ngx-extended-pdf-viewer #findInput');
            if (value) {
                const query = multilineInput.value;
                if (query) {
                    wordsInput.value = query.replace(/\n/, ' ');
                }
            }
            else {
                const query = wordsInput.value;
                if (query) {
                    multilineInput.value = query;
                }
            }
        }
        this._individualWordsMode = value;
        setTimeout(() => {
            const PDFViewerApplication = window.PDFViewerApplication;
            PDFViewerApplication.findBar.dispatchEvent('');
        });
    }
}
/** @nocollapse */ PdfFindbarService.ɵfac = function PdfFindbarService_Factory(t) { return new (t || PdfFindbarService)(); };
/** @nocollapse */ PdfFindbarService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: PdfFindbarService, factory: PdfFindbarService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfFindbarService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWZpbmRiYXItc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTNDLE1BQU0sT0FBTyxpQkFBaUI7SUFIOUI7UUFJUyx3QkFBbUIsR0FBRyxLQUFLLENBQUM7UUFFM0IseUJBQW9CLEdBQUcsSUFBSSxDQUFDO0tBMkJyQztJQXpCQyxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsSUFBVyxtQkFBbUIsQ0FBQyxLQUFLO1FBQ2xDLElBQUksSUFBSSxDQUFDLG9CQUFvQixJQUFJLEtBQUssRUFBRTtZQUN0QyxNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLDZDQUE2QyxDQUF3QixDQUFDO1lBQ3BILE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsb0NBQW9DLENBQXFCLENBQUM7WUFDcEcsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsTUFBTSxLQUFLLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQztnQkFDbkMsSUFBSSxLQUFLLEVBQUU7b0JBQ1QsVUFBVSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDN0M7YUFDRjtpQkFBTTtnQkFDTCxNQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO2dCQUMvQixJQUFJLEtBQUssRUFBRTtvQkFDVCxjQUFjLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztpQkFDOUI7YUFDRjtTQUNGO1FBQ0QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztRQUNsQyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsTUFBTSxvQkFBb0IsR0FBMkIsTUFBYyxDQUFDLG9CQUFvQixDQUFDO1lBQ3pGLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztxR0E3QlUsaUJBQWlCO3NHQUFqQixpQkFBaUIsV0FBakIsaUJBQWlCLG1CQUZoQixNQUFNO3VGQUVQLGlCQUFpQjtjQUg3QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElQREZWaWV3ZXJBcHBsaWNhdGlvbiB9IGZyb20gJy4uLy4uL29wdGlvbnMvcGRmLXZpZXdlci1hcHBsaWNhdGlvbic7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmRmluZGJhclNlcnZpY2Uge1xyXG4gIHB1YmxpYyBtdWx0aXBsZVNlYXJjaFRleHRzID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgX2luZGl2aWR1YWxXb3Jkc01vZGUgPSB0cnVlO1xyXG5cclxuICBwdWJsaWMgZ2V0IGluZGl2aWR1YWxXb3Jkc01vZGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faW5kaXZpZHVhbFdvcmRzTW9kZTtcclxuICB9XHJcbiAgcHVibGljIHNldCBpbmRpdmlkdWFsV29yZHNNb2RlKHZhbHVlKSB7XHJcbiAgICBpZiAodGhpcy5faW5kaXZpZHVhbFdvcmRzTW9kZSAhPSB2YWx1ZSkge1xyXG4gICAgICBjb25zdCBtdWx0aWxpbmVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25neC1leHRlbmRlZC1wZGYtdmlld2VyICNmaW5kSW5wdXRNdWx0aWxpbmUnKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG4gICAgICBjb25zdCB3b3Jkc0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIgI2ZpbmRJbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gbXVsdGlsaW5lSW5wdXQudmFsdWU7XHJcbiAgICAgICAgaWYgKHF1ZXJ5KSB7XHJcbiAgICAgICAgICB3b3Jkc0lucHV0LnZhbHVlID0gcXVlcnkucmVwbGFjZSgvXFxuLywgJyAnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSB3b3Jkc0lucHV0LnZhbHVlO1xyXG4gICAgICAgIGlmIChxdWVyeSkge1xyXG4gICAgICAgICAgbXVsdGlsaW5lSW5wdXQudmFsdWUgPSBxdWVyeTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuX2luZGl2aWR1YWxXb3Jkc01vZGUgPSB2YWx1ZTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQmFyLmRpc3BhdGNoRXZlbnQoJycpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
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
PdfFindbarService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: PdfFindbarService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
PdfFindbarService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: PdfFindbarService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: PdfFindbarService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWZpbmRiYXItc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTNDLE1BQU0sT0FBTyxpQkFBaUI7SUFIOUI7UUFJUyx3QkFBbUIsR0FBRyxLQUFLLENBQUM7UUFFM0IseUJBQW9CLEdBQUcsSUFBSSxDQUFDO0tBMkJyQztJQXpCQyxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsSUFBVyxtQkFBbUIsQ0FBQyxLQUFLO1FBQ2xDLElBQUksSUFBSSxDQUFDLG9CQUFvQixJQUFJLEtBQUssRUFBRTtZQUN0QyxNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLDZDQUE2QyxDQUF3QixDQUFDO1lBQ3BILE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsb0NBQW9DLENBQXFCLENBQUM7WUFDcEcsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsTUFBTSxLQUFLLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQztnQkFDbkMsSUFBSSxLQUFLLEVBQUU7b0JBQ1QsVUFBVSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDN0M7YUFDRjtpQkFBTTtnQkFDTCxNQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO2dCQUMvQixJQUFJLEtBQUssRUFBRTtvQkFDVCxjQUFjLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztpQkFDOUI7YUFDRjtTQUNGO1FBQ0QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztRQUNsQyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsTUFBTSxvQkFBb0IsR0FBMkIsTUFBYyxDQUFDLG9CQUFvQixDQUFDO1lBQ3pGLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzsrR0E3QlUsaUJBQWlCO21IQUFqQixpQkFBaUIsY0FGaEIsTUFBTTs0RkFFUCxpQkFBaUI7a0JBSDdCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJUERGVmlld2VyQXBwbGljYXRpb24gfSBmcm9tICcuLi8uLi9vcHRpb25zL3BkZi12aWV3ZXItYXBwbGljYXRpb24nO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZkZpbmRiYXJTZXJ2aWNlIHtcclxuICBwdWJsaWMgbXVsdGlwbGVTZWFyY2hUZXh0cyA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIF9pbmRpdmlkdWFsV29yZHNNb2RlID0gdHJ1ZTtcclxuXHJcbiAgcHVibGljIGdldCBpbmRpdmlkdWFsV29yZHNNb2RlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2luZGl2aWR1YWxXb3Jkc01vZGU7XHJcbiAgfVxyXG4gIHB1YmxpYyBzZXQgaW5kaXZpZHVhbFdvcmRzTW9kZSh2YWx1ZSkge1xyXG4gICAgaWYgKHRoaXMuX2luZGl2aWR1YWxXb3Jkc01vZGUgIT0gdmFsdWUpIHtcclxuICAgICAgY29uc3QgbXVsdGlsaW5lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlciAjZmluZElucHV0TXVsdGlsaW5lJykgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcclxuICAgICAgY29uc3Qgd29yZHNJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25neC1leHRlbmRlZC1wZGYtdmlld2VyICNmaW5kSW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICBjb25zdCBxdWVyeSA9IG11bHRpbGluZUlucHV0LnZhbHVlO1xyXG4gICAgICAgIGlmIChxdWVyeSkge1xyXG4gICAgICAgICAgd29yZHNJbnB1dC52YWx1ZSA9IHF1ZXJ5LnJlcGxhY2UoL1xcbi8sICcgJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gd29yZHNJbnB1dC52YWx1ZTtcclxuICAgICAgICBpZiAocXVlcnkpIHtcclxuICAgICAgICAgIG11bHRpbGluZUlucHV0LnZhbHVlID0gcXVlcnk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLl9pbmRpdmlkdWFsV29yZHNNb2RlID0gdmFsdWU7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZmluZEJhci5kaXNwYXRjaEV2ZW50KCcnKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=
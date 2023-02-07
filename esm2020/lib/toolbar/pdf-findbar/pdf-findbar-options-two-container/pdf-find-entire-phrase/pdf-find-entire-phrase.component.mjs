import { Component } from '@angular/core';
import { PdfFindbarService } from '../../pdf-findbar-service';
import * as i0 from "@angular/core";
import * as i1 from "../../pdf-findbar-service";
import * as i2 from "@angular/forms";
export class PdfFindMultipleSearchTextsComponent {
    constructor(pdfFindbarService) {
        this.pdfFindbarService = pdfFindbarService;
    }
}
/** @nocollapse */ PdfFindMultipleSearchTextsComponent.ɵfac = function PdfFindMultipleSearchTextsComponent_Factory(t) { return new (t || PdfFindMultipleSearchTextsComponent)(i0.ɵɵdirectiveInject(i1.PdfFindbarService)); };
/** @nocollapse */ PdfFindMultipleSearchTextsComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfFindMultipleSearchTextsComponent, selectors: [["pdf-find-entire-phrase"]], decls: 6, vars: 6, consts: [["type", "checkbox", "id", "findMultipleSearchTexts", 1, "toolbarField", 3, "ngModel", "ngModelChange"], ["for", "findMultipleSearchTexts", "data-l10n-id", "find_multiple_texts_label", 1, "toolbarLabel"], ["type", "checkbox", "id", "individualWordsMode", 1, "toolbarField", 3, "ngModel", "ngModelChange"], ["for", "individualWordsMode", "id", "individualWordsModeLabel", "data-l10n-id", "find_individual_words_label", 1, "toolbarLabel"]], template: function PdfFindMultipleSearchTextsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "input", 0);
        i0.ɵɵlistener("ngModelChange", function PdfFindMultipleSearchTextsComponent_Template_input_ngModelChange_0_listener($event) { return ctx.pdfFindbarService.multipleSearchTexts = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(1, "label", 1);
        i0.ɵɵtext(2, " multiple search texts\n");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "input", 2);
        i0.ɵɵlistener("ngModelChange", function PdfFindMultipleSearchTextsComponent_Template_input_ngModelChange_3_listener($event) { return ctx.pdfFindbarService.individualWordsMode = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "label", 3);
        i0.ɵɵtext(5, " separated by word boundaries\n");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngModel", ctx.pdfFindbarService.multipleSearchTexts);
        i0.ɵɵadvance(3);
        i0.ɵɵclassProp("hidden", !ctx.pdfFindbarService.multipleSearchTexts);
        i0.ɵɵproperty("ngModel", ctx.pdfFindbarService.individualWordsMode);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("hidden", !ctx.pdfFindbarService.multipleSearchTexts);
    } }, directives: [i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgModel], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfFindMultipleSearchTextsComponent, [{
        type: Component,
        args: [{ selector: 'pdf-find-entire-phrase', template: "<input\r\n  type=\"checkbox\"\r\n  id=\"findMultipleSearchTexts\"\r\n  class=\"toolbarField\"\r\n  [(ngModel)]=\"pdfFindbarService.multipleSearchTexts\"\r\n/>\r\n\r\n<label\r\n  for=\"findMultipleSearchTexts\"\r\n  class=\"toolbarLabel\"\r\n  data-l10n-id=\"find_multiple_texts_label\">\r\n  multiple search texts\r\n</label>\r\n\r\n<input [class.hidden]=\"!pdfFindbarService.multipleSearchTexts\"\r\n  type=\"checkbox\"\r\n  id=\"individualWordsMode\"\r\n  class=\"toolbarField\"\r\n  [(ngModel)]=\"pdfFindbarService.individualWordsMode\"\r\n/>\r\n\r\n<label [class.hidden]=\"!pdfFindbarService.multipleSearchTexts\"\r\n  for=\"individualWordsMode\"\r\n  id=\"individualWordsModeLabel\"\r\n  class=\"toolbarLabel\"\r\n  data-l10n-id=\"find_individual_words_label\">\r\n  separated by word boundaries\r\n</label>\r\n", styles: [""] }]
    }], function () { return [{ type: i1.PdfFindbarService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWZpbmQtZW50aXJlLXBocmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy10d28tY29udGFpbmVyL3BkZi1maW5kLWVudGlyZS1waHJhc2UvcGRmLWZpbmQtZW50aXJlLXBocmFzZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy10d28tY29udGFpbmVyL3BkZi1maW5kLWVudGlyZS1waHJhc2UvcGRmLWZpbmQtZW50aXJlLXBocmFzZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7O0FBTzlELE1BQU0sT0FBTyxtQ0FBbUM7SUFDOUMsWUFBbUIsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFBRyxDQUFDOzt5SUFEaEQsbUNBQW1DO3FIQUFuQyxtQ0FBbUM7UUNSaEQsZ0NBS0U7UUFEQSwyTEFBbUQ7UUFKckQsaUJBS0U7UUFFRixnQ0FHMkM7UUFDekMsd0NBQ0Y7UUFBQSxpQkFBUTtRQUVSLGdDQUtFO1FBREEsMkxBQW1EO1FBSnJELGlCQUtFO1FBRUYsZ0NBSTZDO1FBQzNDLCtDQUNGO1FBQUEsaUJBQVE7O1FBdkJOLG1FQUFtRDtRQVU5QyxlQUF1RDtRQUF2RCxvRUFBdUQ7UUFJNUQsbUVBQW1EO1FBRzlDLGVBQXVEO1FBQXZELG9FQUF1RDs7dUZEYmpELG1DQUFtQztjQUwvQyxTQUFTOzJCQUNFLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQZGZGaW5kYmFyU2VydmljZSB9IGZyb20gJy4uLy4uL3BkZi1maW5kYmFyLXNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtZmluZC1lbnRpcmUtcGhyYXNlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLWZpbmQtZW50aXJlLXBocmFzZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLWZpbmQtZW50aXJlLXBocmFzZS5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZGZGaW5kTXVsdGlwbGVTZWFyY2hUZXh0c0NvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHBkZkZpbmRiYXJTZXJ2aWNlOiBQZGZGaW5kYmFyU2VydmljZSkge31cclxufVxyXG4iLCI8aW5wdXRcclxuICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gIGlkPVwiZmluZE11bHRpcGxlU2VhcmNoVGV4dHNcIlxyXG4gIGNsYXNzPVwidG9vbGJhckZpZWxkXCJcclxuICBbKG5nTW9kZWwpXT1cInBkZkZpbmRiYXJTZXJ2aWNlLm11bHRpcGxlU2VhcmNoVGV4dHNcIlxyXG4vPlxyXG5cclxuPGxhYmVsXHJcbiAgZm9yPVwiZmluZE11bHRpcGxlU2VhcmNoVGV4dHNcIlxyXG4gIGNsYXNzPVwidG9vbGJhckxhYmVsXCJcclxuICBkYXRhLWwxMG4taWQ9XCJmaW5kX211bHRpcGxlX3RleHRzX2xhYmVsXCI+XHJcbiAgbXVsdGlwbGUgc2VhcmNoIHRleHRzXHJcbjwvbGFiZWw+XHJcblxyXG48aW5wdXQgW2NsYXNzLmhpZGRlbl09XCIhcGRmRmluZGJhclNlcnZpY2UubXVsdGlwbGVTZWFyY2hUZXh0c1wiXHJcbiAgdHlwZT1cImNoZWNrYm94XCJcclxuICBpZD1cImluZGl2aWR1YWxXb3Jkc01vZGVcIlxyXG4gIGNsYXNzPVwidG9vbGJhckZpZWxkXCJcclxuICBbKG5nTW9kZWwpXT1cInBkZkZpbmRiYXJTZXJ2aWNlLmluZGl2aWR1YWxXb3Jkc01vZGVcIlxyXG4vPlxyXG5cclxuPGxhYmVsIFtjbGFzcy5oaWRkZW5dPVwiIXBkZkZpbmRiYXJTZXJ2aWNlLm11bHRpcGxlU2VhcmNoVGV4dHNcIlxyXG4gIGZvcj1cImluZGl2aWR1YWxXb3Jkc01vZGVcIlxyXG4gIGlkPVwiaW5kaXZpZHVhbFdvcmRzTW9kZUxhYmVsXCJcclxuICBjbGFzcz1cInRvb2xiYXJMYWJlbFwiXHJcbiAgZGF0YS1sMTBuLWlkPVwiZmluZF9pbmRpdmlkdWFsX3dvcmRzX2xhYmVsXCI+XHJcbiAgc2VwYXJhdGVkIGJ5IHdvcmQgYm91bmRhcmllc1xyXG48L2xhYmVsPlxyXG4iXX0=
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class PdfErrorMessageComponent {
}
/** @nocollapse */ PdfErrorMessageComponent.ɵfac = function PdfErrorMessageComponent_Factory(t) { return new (t || PdfErrorMessageComponent)(); };
/** @nocollapse */ PdfErrorMessageComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfErrorMessageComponent, selectors: [["pdf-error-message"]], decls: 12, vars: 0, consts: [["id", "errorWrapper", "hidden", "true"], ["id", "errorMessageLeft"], ["id", "errorMessage"], ["type", "button", "id", "errorShowMore", "data-l10n-id", "error_more_info"], ["type", "button", "id", "errorShowLess", "data-l10n-id", "error_less_info", "hidden", "true"], ["id", "errorMessageRight"], ["type", "button", "id", "errorClose", "data-l10n-id", "error_close"], [1, "clearBoth"], ["id", "errorMoreInfo", "hidden", "true", "readonly", "readonly"]], template: function PdfErrorMessageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
        i0.ɵɵelement(2, "span", 2);
        i0.ɵɵelementStart(3, "button", 3);
        i0.ɵɵtext(4, "More Information");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "button", 4);
        i0.ɵɵtext(6, "Less Information");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(7, "div", 5)(8, "button", 6);
        i0.ɵɵtext(9, "Close");
        i0.ɵɵelementEnd()();
        i0.ɵɵelement(10, "div", 7)(11, "textarea", 8);
        i0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfErrorMessageComponent, [{
        type: Component,
        args: [{ selector: 'pdf-error-message', template: "<div id=\"errorWrapper\" hidden=\"true\">\r\n  <div id=\"errorMessageLeft\">\r\n    <span id=\"errorMessage\"></span>\r\n    <button type=\"button\" id=\"errorShowMore\" data-l10n-id=\"error_more_info\">More Information</button>\r\n    <button type=\"button\" id=\"errorShowLess\" data-l10n-id=\"error_less_info\" hidden=\"true\">Less Information</button>\r\n  </div>\r\n  <div id=\"errorMessageRight\">\r\n    <button type=\"button\" id=\"errorClose\" data-l10n-id=\"error_close\">Close</button>\r\n  </div>\r\n  <div class=\"clearBoth\"></div>\r\n  <textarea id=\"errorMoreInfo\" hidden=\"true\" readonly=\"readonly\"></textarea>\r\n</div>\r\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWVycm9yLW1lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9wZGYtZGlhbG9nL3BkZi1lcnJvci1tZXNzYWdlL3BkZi1lcnJvci1tZXNzYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvcGRmLWRpYWxvZy9wZGYtZXJyb3ItbWVzc2FnZS9wZGYtZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU0xQyxNQUFNLE9BQU8sd0JBQXdCOzttSEFBeEIsd0JBQXdCOzBHQUF4Qix3QkFBd0I7UUNOckMsOEJBQXFDLGFBQUE7UUFFakMsMEJBQStCO1FBQy9CLGlDQUF3RTtRQUFBLGdDQUFnQjtRQUFBLGlCQUFTO1FBQ2pHLGlDQUFzRjtRQUFBLGdDQUFnQjtRQUFBLGlCQUFTLEVBQUE7UUFFakgsOEJBQTRCLGdCQUFBO1FBQ3VDLHFCQUFLO1FBQUEsaUJBQVMsRUFBQTtRQUVqRiwwQkFBNkIsbUJBQUE7UUFFL0IsaUJBQU07O3VGRExPLHdCQUF3QjtjQUpwQyxTQUFTOzJCQUNFLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtZXJyb3ItbWVzc2FnZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZkVycm9yTWVzc2FnZUNvbXBvbmVudCB7fVxyXG4iLCI8ZGl2IGlkPVwiZXJyb3JXcmFwcGVyXCIgaGlkZGVuPVwidHJ1ZVwiPlxyXG4gIDxkaXYgaWQ9XCJlcnJvck1lc3NhZ2VMZWZ0XCI+XHJcbiAgICA8c3BhbiBpZD1cImVycm9yTWVzc2FnZVwiPjwvc3Bhbj5cclxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiZXJyb3JTaG93TW9yZVwiIGRhdGEtbDEwbi1pZD1cImVycm9yX21vcmVfaW5mb1wiPk1vcmUgSW5mb3JtYXRpb248L2J1dHRvbj5cclxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiZXJyb3JTaG93TGVzc1wiIGRhdGEtbDEwbi1pZD1cImVycm9yX2xlc3NfaW5mb1wiIGhpZGRlbj1cInRydWVcIj5MZXNzIEluZm9ybWF0aW9uPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBpZD1cImVycm9yTWVzc2FnZVJpZ2h0XCI+XHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImVycm9yQ2xvc2VcIiBkYXRhLWwxMG4taWQ9XCJlcnJvcl9jbG9zZVwiPkNsb3NlPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImNsZWFyQm90aFwiPjwvZGl2PlxyXG4gIDx0ZXh0YXJlYSBpZD1cImVycm9yTW9yZUluZm9cIiBoaWRkZW49XCJ0cnVlXCIgcmVhZG9ubHk9XCJyZWFkb25seVwiPjwvdGV4dGFyZWE+XHJcbjwvZGl2PlxyXG4iXX0=
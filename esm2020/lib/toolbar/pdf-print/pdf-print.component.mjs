import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class PdfPrintComponent {
    constructor() {
        this.showPrintButton = true;
    }
}
/** @nocollapse */ PdfPrintComponent.ɵfac = function PdfPrintComponent_Factory(t) { return new (t || PdfPrintComponent)(); };
/** @nocollapse */ PdfPrintComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfPrintComponent, selectors: [["pdf-print"]], inputs: { showPrintButton: "showPrintButton" }, decls: 5, vars: 2, consts: [["type", "button", "id", "print", "title", "Print", "data-l10n-id", "print", 1, "toolbarButton", "hiddenSmallView"], ["viewBox", "0 0 24 24", 2, "width", "22px", "height", "22px"], ["fill", "currentColor", "d", "M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z"], ["data-l10n-id", "print_label"]], template: function PdfPrintComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(1, "svg", 1);
        i0.ɵɵelement(2, "path", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(3, "span", 3);
        i0.ɵɵtext(4, "Print");
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵclassProp("invisible", !ctx.showPrintButton);
    } }, styles: ["[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus{outline:none}svg[_ngcontent-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]{padding:0;margin-top:0;margin-bottom:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfPrintComponent, [{
        type: Component,
        args: [{ selector: 'pdf-print', template: "<button type=\"button\"\r\n    [class.invisible]=\"!showPrintButton\"\r\n    id=\"print\"\r\n    class=\"toolbarButton hiddenSmallView\"\r\n    title=\"Print\"\r\n    data-l10n-id=\"print\"\r\n    >\r\n    <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\r\n        <path fill=\"currentColor\" d=\"M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z\" />\r\n    </svg>\r\n    <span data-l10n-id=\"print_label\">Print</span>\r\n</button>\r\n", styles: [":host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
    }], null, { showPrintButton: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXByaW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtcHJpbnQvcGRmLXByaW50LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtcHJpbnQvcGRmLXByaW50LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU9qRCxNQUFNLE9BQU8saUJBQWlCO0lBTDlCO1FBT1Msb0JBQWUsR0FBRyxJQUFJLENBQUM7S0FDL0I7O3FHQUhZLGlCQUFpQjttR0FBakIsaUJBQWlCO1FDUDlCLGlDQU1LO1FBQ0QsbUJBQXdEO1FBQXhELDhCQUF3RDtRQUNwRCwwQkFBMkw7UUFDL0wsaUJBQU07UUFDTixvQkFBaUM7UUFBakMsK0JBQWlDO1FBQUEscUJBQUs7UUFBQSxpQkFBTyxFQUFBOztRQVQ3QyxpREFBb0M7O3VGRE0zQixpQkFBaUI7Y0FMN0IsU0FBUzsyQkFDRSxXQUFXO2dCQU1kLGVBQWU7a0JBRHJCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BkZi1wcmludCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1wcmludC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLXByaW50LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmUHJpbnRDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dQcmludEJ1dHRvbiA9IHRydWU7XHJcbn1cclxuIiwiPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcclxuICAgIFtjbGFzcy5pbnZpc2libGVdPVwiIXNob3dQcmludEJ1dHRvblwiXHJcbiAgICBpZD1cInByaW50XCJcclxuICAgIGNsYXNzPVwidG9vbGJhckJ1dHRvbiBoaWRkZW5TbWFsbFZpZXdcIlxyXG4gICAgdGl0bGU9XCJQcmludFwiXHJcbiAgICBkYXRhLWwxMG4taWQ9XCJwcmludFwiXHJcbiAgICA+XHJcbiAgICA8c3ZnIHN0eWxlPVwid2lkdGg6MjJweDtoZWlnaHQ6MjJweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xOCwzSDZWN0gxOE0xOSwxMkExLDEgMCAwLDEgMTgsMTFBMSwxIDAgMCwxIDE5LDEwQTEsMSAwIDAsMSAyMCwxMUExLDEgMCAwLDEgMTksMTJNMTYsMTlIOFYxNEgxNk0xOSw4SDVBMywzIDAgMCwwIDIsMTFWMTdINlYyMUgxOFYxN0gyMlYxMUEzLDMgMCAwLDAgMTksOFpcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgICA8c3BhbiBkYXRhLWwxMG4taWQ9XCJwcmludF9sYWJlbFwiPlByaW50PC9zcGFuPlxyXG48L2J1dHRvbj5cclxuIl19
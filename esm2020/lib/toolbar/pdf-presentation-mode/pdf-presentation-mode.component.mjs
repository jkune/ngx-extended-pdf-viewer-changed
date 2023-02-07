import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class PdfPresentationModeComponent {
    constructor() {
        this.showPresentationModeButton = true;
    }
}
/** @nocollapse */ PdfPresentationModeComponent.ɵfac = function PdfPresentationModeComponent_Factory(t) { return new (t || PdfPresentationModeComponent)(); };
/** @nocollapse */ PdfPresentationModeComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfPresentationModeComponent, selectors: [["pdf-presentation-mode"]], inputs: { showPresentationModeButton: "showPresentationModeButton" }, decls: 5, vars: 2, consts: [["type", "button", "id", "presentationMode", "title", "Switch to Presentation Mode", "data-l10n-id", "presentation_mode", 1, "toolbarButton", "hiddenLargeView"], ["viewBox", "0 0 24 24", 2, "width", "27px", "height", "27px"], ["fill", "currentColor", "d", "M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z"], ["data-l10n-id", "presentation_mode_label"]], template: function PdfPresentationModeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(1, "svg", 1);
        i0.ɵɵelement(2, "path", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(3, "span", 3);
        i0.ɵɵtext(4, "Presentation Mode");
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵclassProp("invisible", !ctx.showPresentationModeButton);
    } }, styles: ["[_nghost-%COMP%]   button.toolbarButton[_ngcontent-%COMP%]{margin-top:0}[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus{outline:none}svg[_ngcontent-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]{padding:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfPresentationModeComponent, [{
        type: Component,
        args: [{ selector: 'pdf-presentation-mode', template: "<button type=\"button\"\r\n        [class.invisible]=\"!showPresentationModeButton\"\r\n        id=\"presentationMode\"\r\n        class=\"toolbarButton hiddenLargeView\"\r\n        title=\"Switch to Presentation Mode\"\r\n        data-l10n-id=\"presentation_mode\">\r\n  <svg style=\"width:27px;height:27px\" viewBox=\"0 0 24 24\">\r\n    <path fill=\"currentColor\" d=\"M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z\" />\r\n  </svg>\r\n  <span data-l10n-id=\"presentation_mode_label\">Presentation Mode</span>\r\n  </button>\r\n", styles: [":host button.toolbarButton{margin-top:0}:host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0}\n"] }]
    }], null, { showPresentationModeButton: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXByZXNlbnRhdGlvbi1tb2RlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtcHJlc2VudGF0aW9uLW1vZGUvcGRmLXByZXNlbnRhdGlvbi1tb2RlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtcHJlc2VudGF0aW9uLW1vZGUvcGRmLXByZXNlbnRhdGlvbi1tb2RlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU9qRCxNQUFNLE9BQU8sNEJBQTRCO0lBTHpDO1FBT1MsK0JBQTBCLEdBQUcsSUFBSSxDQUFDO0tBQzFDOzsySEFIWSw0QkFBNEI7OEdBQTVCLDRCQUE0QjtRQ1B6QyxpQ0FLeUM7UUFDdkMsbUJBQXdEO1FBQXhELDhCQUF3RDtRQUN0RCwwQkFBdUg7UUFDekgsaUJBQU07UUFDTixvQkFBNkM7UUFBN0MsK0JBQTZDO1FBQUEsaUNBQWlCO1FBQUEsaUJBQU8sRUFBQTs7UUFSL0QsNERBQStDOzt1RkRNMUMsNEJBQTRCO2NBTHhDLFNBQVM7MkJBQ0UsdUJBQXVCO2dCQU0xQiwwQkFBMEI7a0JBRGhDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BkZi1wcmVzZW50YXRpb24tbW9kZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1wcmVzZW50YXRpb24tbW9kZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLXByZXNlbnRhdGlvbi1tb2RlLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmUHJlc2VudGF0aW9uTW9kZUNvbXBvbmVudCAge1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dQcmVzZW50YXRpb25Nb2RlQnV0dG9uID0gdHJ1ZTtcclxufVxyXG4iLCI8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgIFtjbGFzcy5pbnZpc2libGVdPVwiIXNob3dQcmVzZW50YXRpb25Nb2RlQnV0dG9uXCJcclxuICAgICAgICBpZD1cInByZXNlbnRhdGlvbk1vZGVcIlxyXG4gICAgICAgIGNsYXNzPVwidG9vbGJhckJ1dHRvbiBoaWRkZW5MYXJnZVZpZXdcIlxyXG4gICAgICAgIHRpdGxlPVwiU3dpdGNoIHRvIFByZXNlbnRhdGlvbiBNb2RlXCJcclxuICAgICAgICBkYXRhLWwxMG4taWQ9XCJwcmVzZW50YXRpb25fbW9kZVwiPlxyXG4gIDxzdmcgc3R5bGU9XCJ3aWR0aDoyN3B4O2hlaWdodDoyN3B4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNSw1SDEwVjdIN1YxMEg1VjVNMTQsNUgxOVYxMEgxN1Y3SDE0VjVNMTcsMTRIMTlWMTlIMTRWMTdIMTdWMTRNMTAsMTdWMTlINVYxNEg3VjE3SDEwWlwiIC8+XHJcbiAgPC9zdmc+XHJcbiAgPHNwYW4gZGF0YS1sMTBuLWlkPVwicHJlc2VudGF0aW9uX21vZGVfbGFiZWxcIj5QcmVzZW50YXRpb24gTW9kZTwvc3Bhbj5cclxuICA8L2J1dHRvbj5cclxuIl19
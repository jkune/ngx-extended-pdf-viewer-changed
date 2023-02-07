import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class PdfDownloadComponent {
    constructor() {
        this.showDownloadButton = true;
    }
}
/** @nocollapse */ PdfDownloadComponent.ɵfac = function PdfDownloadComponent_Factory(t) { return new (t || PdfDownloadComponent)(); };
/** @nocollapse */ PdfDownloadComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfDownloadComponent, selectors: [["pdf-download"]], inputs: { showDownloadButton: "showDownloadButton" }, decls: 5, vars: 2, consts: [["type", "button", "id", "download", "title", "Download", "data-l10n-id", "download", 1, "toolbarButton", "hiddenSmallView"], ["viewBox", "0 0 24 24", 2, "width", "20px", "height", "20px"], ["fill", "currentColor", "d", "M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,19L8,15H10.5V12H13.5V15H16L12,19Z"], ["data-l10n-id", "download_label"]], template: function PdfDownloadComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(1, "svg", 1);
        i0.ɵɵelement(2, "path", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(3, "span", 3);
        i0.ɵɵtext(4, "Download");
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵclassProp("invisible", !ctx.showDownloadButton);
    } }, styles: ["[_nghost-%COMP%]{margin-top:0}[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus{outline:none}svg[_ngcontent-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]{padding:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfDownloadComponent, [{
        type: Component,
        args: [{ selector: 'pdf-download', template: "<button\r\n  type=\"button\"\r\n  id=\"download\"\r\n  class=\"toolbarButton hiddenSmallView\"\r\n  [class.invisible]=\"!showDownloadButton\"\r\n  title=\"Download\"\r\n  data-l10n-id=\"download\"\r\n>\r\n  <svg style=\"width:20px;height:20px\" viewBox=\"0 0 24 24\">\r\n    <path fill=\"currentColor\" d=\"M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,19L8,15H10.5V12H13.5V15H16L12,19Z\" />\r\n  </svg>\r\n  <span data-l10n-id=\"download_label\">Download</span>\r\n</button>\r\n", styles: [":host{margin-top:0}:host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0}\n"] }]
    }], null, { showDownloadButton: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWRvd25sb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtZG93bmxvYWQvcGRmLWRvd25sb2FkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtZG93bmxvYWQvcGRmLWRvd25sb2FkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU9qRCxNQUFNLE9BQU8sb0JBQW9CO0lBTGpDO1FBT1MsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO0tBQ2xDOzsyR0FIWSxvQkFBb0I7c0dBQXBCLG9CQUFvQjtRQ1BqQyxpQ0FPQztRQUNDLG1CQUF3RDtRQUF4RCw4QkFBd0Q7UUFDdEQsMEJBQTRKO1FBQzlKLGlCQUFNO1FBQ04sb0JBQW9DO1FBQXBDLCtCQUFvQztRQUFBLHdCQUFRO1FBQUEsaUJBQU8sRUFBQTs7UUFQbkQsb0RBQXVDOzt1RkRHNUIsb0JBQW9CO2NBTGhDLFNBQVM7MkJBQ0UsY0FBYztnQkFNakIsa0JBQWtCO2tCQUR4QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtZG93bmxvYWQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtZG93bmxvYWQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BkZi1kb3dubG9hZC5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZGZEb3dubG9hZENvbXBvbmVudCB7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0Rvd25sb2FkQnV0dG9uID0gdHJ1ZTtcclxufVxyXG4iLCI8YnV0dG9uXHJcbiAgdHlwZT1cImJ1dHRvblwiXHJcbiAgaWQ9XCJkb3dubG9hZFwiXHJcbiAgY2xhc3M9XCJ0b29sYmFyQnV0dG9uIGhpZGRlblNtYWxsVmlld1wiXHJcbiAgW2NsYXNzLmludmlzaWJsZV09XCIhc2hvd0Rvd25sb2FkQnV0dG9uXCJcclxuICB0aXRsZT1cIkRvd25sb2FkXCJcclxuICBkYXRhLWwxMG4taWQ9XCJkb3dubG9hZFwiXHJcbj5cclxuICA8c3ZnIHN0eWxlPVwid2lkdGg6MjBweDtoZWlnaHQ6MjBweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE0LDJMMjAsOFYyMEEyLDIgMCAwLDEgMTgsMjJINkEyLDIgMCAwLDEgNCwyMFY0QTIsMiAwIDAsMSA2LDJIMTRNMTgsMjBWOUgxM1Y0SDZWMjBIMThNMTIsMTlMOCwxNUgxMC41VjEySDEzLjVWMTVIMTZMMTIsMTlaXCIgLz5cclxuICA8L3N2Zz5cclxuICA8c3BhbiBkYXRhLWwxMG4taWQ9XCJkb3dubG9hZF9sYWJlbFwiPkRvd25sb2FkPC9zcGFuPlxyXG48L2J1dHRvbj5cclxuIl19
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./pdf-first-page/pdf-first-page.component";
import * as i2 from "./pdf-previous-page/pdf-previous-page.component";
import * as i3 from "./pdf-page-number/pdf-page-number.component";
import * as i4 from "./pdf-next-page/pdf-next-page.component";
import * as i5 from "./pdf-last-page/pdf-last-page.component";
export class PdfPagingAreaComponent {
    constructor() {
        this.showPagingButtons = true;
    }
}
/** @nocollapse */ PdfPagingAreaComponent.ɵfac = function PdfPagingAreaComponent_Factory(t) { return new (t || PdfPagingAreaComponent)(); };
/** @nocollapse */ PdfPagingAreaComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfPagingAreaComponent, selectors: [["pdf-paging-area"]], inputs: { showPagingButtons: "showPagingButtons" }, decls: 7, vars: 5, consts: [[1, "paging-left", "hiddenTinyView"], [2, "margin-right", "-3px"], [2, "margin-left", "-3px"], [3, "showPagingButtons"], [1, "paging-right", "hiddenTinyView"], [2, "margin-right", "-3px", "margin-left", "-3px"]], template: function PdfPagingAreaComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "pdf-first-page", 1)(2, "pdf-previous-page", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "pdf-page-number", 3);
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵelement(5, "pdf-next-page", 5)(6, "pdf-last-page", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("invisible", !ctx.showPagingButtons);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("showPagingButtons", ctx.showPagingButtons);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("invisible", !ctx.showPagingButtons);
    } }, directives: [i1.PdfFirstPageComponent, i2.PdfPreviousPageComponent, i3.PdfPageNumberComponent, i4.PdfNextPageComponent, i5.PdfLastPageComponent], styles: [".paging-right[_ngcontent-%COMP%]{float:right;display:block}.paging-left[_ngcontent-%COMP%]{float:left;display:block}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfPagingAreaComponent, [{
        type: Component,
        args: [{ selector: 'pdf-paging-area', template: "<div\r\n[class.invisible]=\"!showPagingButtons\"\r\nclass=\"paging-left hiddenTinyView\"\r\n>\r\n<pdf-first-page style=\"margin-right: -3px;\"></pdf-first-page>\r\n<pdf-previous-page style=\"margin-left: -3px;\"></pdf-previous-page>\r\n</div>\r\n<pdf-page-number [showPagingButtons]=\"showPagingButtons\"></pdf-page-number>\r\n<div\r\n[class.invisible]=\"!showPagingButtons\"\r\nclass=\"paging-right hiddenTinyView\"\r\n>\r\n<pdf-next-page style=\"margin-right: -3px;margin-left: -3px;\"></pdf-next-page>\r\n<pdf-last-page style=\"margin-left: -3px;\"></pdf-last-page>\r\n</div>\r\n", styles: [".paging-right{float:right;display:block}.paging-left{float:left;display:block}\n"] }]
    }], null, { showPagingButtons: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXBhZ2luZy1hcmVhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGRmLXBhZ2luZy1hcmVhLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGRmLXBhZ2luZy1hcmVhLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0FBT2pELE1BQU0sT0FBTyxzQkFBc0I7SUFMbkM7UUFRUyxzQkFBaUIsR0FBRyxJQUFJLENBQUM7S0FDakM7OytHQUpZLHNCQUFzQjt3R0FBdEIsc0JBQXNCO1FDUG5DLDhCQUdDO1FBQ0Qsb0NBQTZELDJCQUFBO1FBRTdELGlCQUFNO1FBQ04scUNBQTJFO1FBQzNFLDhCQUdDO1FBQ0QsbUNBQTZFLHVCQUFBO1FBRTdFLGlCQUFNOztRQWJOLG1EQUFzQztRQU1yQixlQUF1QztRQUF2Qyx5REFBdUM7UUFFeEQsZUFBc0M7UUFBdEMsbURBQXNDOzt1RkRGekIsc0JBQXNCO2NBTGxDLFNBQVM7MkJBQ0UsaUJBQWlCO2dCQU9wQixpQkFBaUI7a0JBRHZCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BkZi1wYWdpbmctYXJlYScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1wYWdpbmctYXJlYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLXBhZ2luZy1hcmVhLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmUGFnaW5nQXJlYUNvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dQYWdpbmdCdXR0b25zID0gdHJ1ZTtcclxufVxyXG4iLCI8ZGl2XHJcbltjbGFzcy5pbnZpc2libGVdPVwiIXNob3dQYWdpbmdCdXR0b25zXCJcclxuY2xhc3M9XCJwYWdpbmctbGVmdCBoaWRkZW5UaW55Vmlld1wiXHJcbj5cclxuPHBkZi1maXJzdC1wYWdlIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAtM3B4O1wiPjwvcGRmLWZpcnN0LXBhZ2U+XHJcbjxwZGYtcHJldmlvdXMtcGFnZSBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAtM3B4O1wiPjwvcGRmLXByZXZpb3VzLXBhZ2U+XHJcbjwvZGl2PlxyXG48cGRmLXBhZ2UtbnVtYmVyIFtzaG93UGFnaW5nQnV0dG9uc109XCJzaG93UGFnaW5nQnV0dG9uc1wiPjwvcGRmLXBhZ2UtbnVtYmVyPlxyXG48ZGl2XHJcbltjbGFzcy5pbnZpc2libGVdPVwiIXNob3dQYWdpbmdCdXR0b25zXCJcclxuY2xhc3M9XCJwYWdpbmctcmlnaHQgaGlkZGVuVGlueVZpZXdcIlxyXG4+XHJcbjxwZGYtbmV4dC1wYWdlIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAtM3B4O21hcmdpbi1sZWZ0OiAtM3B4O1wiPjwvcGRmLW5leHQtcGFnZT5cclxuPHBkZi1sYXN0LXBhZ2Ugc3R5bGU9XCJtYXJnaW4tbGVmdDogLTNweDtcIj48L3BkZi1sYXN0LXBhZ2U+XHJcbjwvZGl2PlxyXG4iXX0=
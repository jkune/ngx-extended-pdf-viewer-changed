import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class PdfPageNumberComponent {
    constructor() {
        this.showPagingButtons = true;
    }
}
/** @nocollapse */ PdfPageNumberComponent.ɵfac = function PdfPageNumberComponent_Factory(t) { return new (t || PdfPageNumberComponent)(); };
/** @nocollapse */ PdfPageNumberComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfPageNumberComponent, selectors: [["pdf-page-number"]], inputs: { showPagingButtons: "showPagingButtons" }, decls: 2, vars: 4, consts: [["type", "number", "id", "pageNumber", "title", "Page", "value", "1", "size", "4", "min", "1", "data-l10n-id", "page", "autocomplete", "off", 1, "toolbarField", "pageNumber"], ["id", "numPages", 1, "toolbarLabel", "hiddenXLView"]], template: function PdfPageNumberComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "input", 0)(1, "span", 1);
    } if (rf & 2) {
        i0.ɵɵclassProp("invisible", !ctx.showPagingButtons);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("invisible", !ctx.showPagingButtons);
    } }, styles: ["button[_ngcontent-%COMP%]{padding:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfPageNumberComponent, [{
        type: Component,
        args: [{ selector: 'pdf-page-number', template: "<input\r\n  [class.invisible]=\"!showPagingButtons\"\r\n  type=\"number\"\r\n  id=\"pageNumber\"\r\n  class=\"toolbarField pageNumber\"\r\n  title=\"Page\"\r\n  value=\"1\"\r\n  size=\"4\"\r\n  min=\"1\"\r\n  data-l10n-id=\"page\"\r\n  autocomplete=\"off\"/>\r\n<span [class.invisible]=\"!showPagingButtons\" id=\"numPages\" class=\"toolbarLabel hiddenXLView\"></span>\r\n", styles: ["button{padding:0}\n"] }]
    }], null, { showPagingButtons: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXBhZ2UtbnVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGRmLXBhZ2UtbnVtYmVyL3BkZi1wYWdlLW51bWJlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1wYWdlLW51bWJlci9wZGYtcGFnZS1udW1iZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBT2pELE1BQU0sT0FBTyxzQkFBc0I7SUFMbkM7UUFPUyxzQkFBaUIsR0FBRyxJQUFJLENBQUM7S0FDakM7OytHQUhZLHNCQUFzQjt3R0FBdEIsc0JBQXNCO1FDUG5DLDJCQVVzQixjQUFBOztRQVRwQixtREFBc0M7UUFVbEMsZUFBc0M7UUFBdEMsbURBQXNDOzt1RkRKL0Isc0JBQXNCO2NBTGxDLFNBQVM7MkJBQ0UsaUJBQWlCO2dCQU1wQixpQkFBaUI7a0JBRHZCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BkZi1wYWdlLW51bWJlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1wYWdlLW51bWJlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLXBhZ2UtbnVtYmVyLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZlBhZ2VOdW1iZXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dQYWdpbmdCdXR0b25zID0gdHJ1ZTtcclxufVxyXG4iLCI8aW5wdXRcclxuICBbY2xhc3MuaW52aXNpYmxlXT1cIiFzaG93UGFnaW5nQnV0dG9uc1wiXHJcbiAgdHlwZT1cIm51bWJlclwiXHJcbiAgaWQ9XCJwYWdlTnVtYmVyXCJcclxuICBjbGFzcz1cInRvb2xiYXJGaWVsZCBwYWdlTnVtYmVyXCJcclxuICB0aXRsZT1cIlBhZ2VcIlxyXG4gIHZhbHVlPVwiMVwiXHJcbiAgc2l6ZT1cIjRcIlxyXG4gIG1pbj1cIjFcIlxyXG4gIGRhdGEtbDEwbi1pZD1cInBhZ2VcIlxyXG4gIGF1dG9jb21wbGV0ZT1cIm9mZlwiLz5cclxuPHNwYW4gW2NsYXNzLmludmlzaWJsZV09XCIhc2hvd1BhZ2luZ0J1dHRvbnNcIiBpZD1cIm51bVBhZ2VzXCIgY2xhc3M9XCJ0b29sYmFyTGFiZWwgaGlkZGVuWExWaWV3XCI+PC9zcGFuPlxyXG4iXX0=
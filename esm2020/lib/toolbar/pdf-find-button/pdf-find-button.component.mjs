import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class PdfFindButtonComponent {
    constructor() {
        this.showFindButton = undefined;
        this.textLayer = undefined;
    }
}
/** @nocollapse */ PdfFindButtonComponent.ɵfac = function PdfFindButtonComponent_Factory(t) { return new (t || PdfFindButtonComponent)(); };
/** @nocollapse */ PdfFindButtonComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfFindButtonComponent, selectors: [["pdf-find-button"]], inputs: { showFindButton: "showFindButton", textLayer: "textLayer" }, decls: 5, vars: 2, consts: [["type", "button", "id", "viewFind", "title", "Find in Document", "data-l10n-id", "findbar", 1, "toolbarButton"], ["viewBox", "0 0 24 24", 2, "width", "24px", "height", "24px"], ["fill", "currentColor", "d", "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"], ["data-l10n-id", "findbar_label"]], template: function PdfFindButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(1, "svg", 1);
        i0.ɵɵelement(2, "path", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(3, "span", 3);
        i0.ɵɵtext(4, "Find");
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵclassProp("invisible", !ctx.showFindButton || !ctx.textLayer);
    } }, styles: ["[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus{outline:none}svg[_ngcontent-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]{padding:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfFindButtonComponent, [{
        type: Component,
        args: [{ selector: 'pdf-find-button', template: "<button\r\n  type=\"button\"\r\n  [class.invisible]=\"!showFindButton || !textLayer\"\r\n  id=\"viewFind\"\r\n  class=\"toolbarButton\"\r\n  title=\"Find in Document\"\r\n  data-l10n-id=\"findbar\"\r\n>\r\n  <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\r\n    <path fill=\"currentColor\" d=\"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z\" />\r\n  </svg>\r\n  <span data-l10n-id=\"findbar_label\">Find</span>\r\n</button>\r\n", styles: [":host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0}\n"] }]
    }], null, { showFindButton: [{
            type: Input
        }], textLayer: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWZpbmQtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtZmluZC1idXR0b24vcGRmLWZpbmQtYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtZmluZC1idXR0b24vcGRmLWZpbmQtYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU9qRCxNQUFNLE9BQU8sc0JBQXNCO0lBTG5DO1FBT1MsbUJBQWMsR0FBd0IsU0FBUyxDQUFDO1FBR2hELGNBQVMsR0FBd0IsU0FBUyxDQUFDO0tBQ25EOzsrR0FOWSxzQkFBc0I7d0dBQXRCLHNCQUFzQjtRQ1BuQyxpQ0FPQztRQUNDLG1CQUF3RDtRQUF4RCw4QkFBd0Q7UUFDdEQsMEJBQWtTO1FBQ3BTLGlCQUFNO1FBQ04sb0JBQW1DO1FBQW5DLCtCQUFtQztRQUFBLG9CQUFJO1FBQUEsaUJBQU8sRUFBQTs7UUFUOUMsa0VBQWlEOzt1RkRLdEMsc0JBQXNCO2NBTGxDLFNBQVM7MkJBQ0UsaUJBQWlCO2dCQU1wQixjQUFjO2tCQURwQixLQUFLO1lBSUMsU0FBUztrQkFEZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtZmluZC1idXR0b24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtZmluZC1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BkZi1maW5kLWJ1dHRvbi5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZGZGaW5kQnV0dG9uQ29tcG9uZW50IHtcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZEJ1dHRvbjogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgdGV4dExheWVyOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG59XHJcbiIsIjxidXR0b25cclxuICB0eXBlPVwiYnV0dG9uXCJcclxuICBbY2xhc3MuaW52aXNpYmxlXT1cIiFzaG93RmluZEJ1dHRvbiB8fCAhdGV4dExheWVyXCJcclxuICBpZD1cInZpZXdGaW5kXCJcclxuICBjbGFzcz1cInRvb2xiYXJCdXR0b25cIlxyXG4gIHRpdGxlPVwiRmluZCBpbiBEb2N1bWVudFwiXHJcbiAgZGF0YS1sMTBuLWlkPVwiZmluZGJhclwiXHJcbj5cclxuICA8c3ZnIHN0eWxlPVwid2lkdGg6MjRweDtoZWlnaHQ6MjRweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTkuNSwzQTYuNSw2LjUgMCAwLDEgMTYsOS41QzE2LDExLjExIDE1LjQxLDEyLjU5IDE0LjQ0LDEzLjczTDE0LjcxLDE0SDE1LjVMMjAuNSwxOUwxOSwyMC41TDE0LDE1LjVWMTQuNzFMMTMuNzMsMTQuNDRDMTIuNTksMTUuNDEgMTEuMTEsMTYgOS41LDE2QTYuNSw2LjUgMCAwLDEgMyw5LjVBNi41LDYuNSAwIDAsMSA5LjUsM005LjUsNUM3LDUgNSw3IDUsOS41QzUsMTIgNywxNCA5LjUsMTRDMTIsMTQgMTQsMTIgMTQsOS41QzE0LDcgMTIsNSA5LjUsNVpcIiAvPlxyXG4gIDwvc3ZnPlxyXG4gIDxzcGFuIGRhdGEtbDEwbi1pZD1cImZpbmRiYXJfbGFiZWxcIj5GaW5kPC9zcGFuPlxyXG48L2J1dHRvbj5cclxuIl19
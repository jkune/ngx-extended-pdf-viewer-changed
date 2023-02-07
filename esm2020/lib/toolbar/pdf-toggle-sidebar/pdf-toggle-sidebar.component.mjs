import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class PdfToggleSidebarComponent {
    constructor() {
        this.showSidebarButton = true;
    }
}
/** @nocollapse */ PdfToggleSidebarComponent.ɵfac = function PdfToggleSidebarComponent_Factory(t) { return new (t || PdfToggleSidebarComponent)(); };
/** @nocollapse */ PdfToggleSidebarComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfToggleSidebarComponent, selectors: [["pdf-toggle-sidebar"]], inputs: { showSidebarButton: "showSidebarButton" }, decls: 5, vars: 2, consts: [["type", "button", "id", "sidebarToggle", "title", "Toggle Sidebar", "data-l10n-id", "toggle_sidebar", 1, "toolbarButton"], ["viewBox", "0 0 24 24", 2, "width", "24px", "height", "24px"], ["fill", "currentColor", "d", "M3,9H17V7H3V9M3,13H17V11H3V13M3,17H17V15H3V17M19,17H21V15H19V17M19,7V9H21V7H19M19,13H21V11H19V13Z"], ["data-l10n-id", "toggle_sidebar_label"]], template: function PdfToggleSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(1, "svg", 1);
        i0.ɵɵelement(2, "path", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(3, "span", 3);
        i0.ɵɵtext(4, "Toggle Sidebar");
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵclassProp("invisible", !ctx.showSidebarButton);
    } }, styles: ["[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus{outline:none}svg[_ngcontent-%COMP%]:focus{outline:none}button#sidebarToggle[_ngcontent-%COMP%]{height:24px;width:24px;margin-right:5px!important}button[_ngcontent-%COMP%]{padding:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfToggleSidebarComponent, [{
        type: Component,
        args: [{ selector: 'pdf-toggle-sidebar', template: "<button\r\n  type=\"button\"\r\n  [class.invisible]=\"!showSidebarButton\"\r\n  id=\"sidebarToggle\"\r\n  title=\"Toggle Sidebar\"\r\n  class=\"toolbarButton\"\r\n  data-l10n-id=\"toggle_sidebar\"\r\n>\r\n  <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\r\n    <path fill=\"currentColor\" d=\"M3,9H17V7H3V9M3,13H17V11H3V13M3,17H17V15H3V17M19,17H21V15H19V17M19,7V9H21V7H19M19,13H21V11H19V13Z\" />\r\n  </svg>\r\n  <span data-l10n-id=\"toggle_sidebar_label\">Toggle Sidebar</span>\r\n</button>\r\n", styles: [":host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button#sidebarToggle{height:24px;width:24px;margin-right:5px!important}button{padding:0}\n"] }]
    }], null, { showSidebarButton: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXRvZ2dsZS1zaWRlYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtdG9nZ2xlLXNpZGViYXIvcGRmLXRvZ2dsZS1zaWRlYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtdG9nZ2xlLXNpZGViYXIvcGRmLXRvZ2dsZS1zaWRlYmFyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU9qRCxNQUFNLE9BQU8seUJBQXlCO0lBTHRDO1FBT1Msc0JBQWlCLEdBQUcsSUFBSSxDQUFDO0tBQ2pDOztxSEFIWSx5QkFBeUI7MkdBQXpCLHlCQUF5QjtRQ1B0QyxpQ0FPQztRQUNDLG1CQUF3RDtRQUF4RCw4QkFBd0Q7UUFDdEQsMEJBQWtJO1FBQ3BJLGlCQUFNO1FBQ04sb0JBQTBDO1FBQTFDLCtCQUEwQztRQUFBLDhCQUFjO1FBQUEsaUJBQU8sRUFBQTs7UUFUL0QsbURBQXNDOzt1RkRLM0IseUJBQXlCO2NBTHJDLFNBQVM7MkJBQ0Usb0JBQW9CO2dCQU12QixpQkFBaUI7a0JBRHZCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BkZi10b2dnbGUtc2lkZWJhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi10b2dnbGUtc2lkZWJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLXRvZ2dsZS1zaWRlYmFyLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZlRvZ2dsZVNpZGViYXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dTaWRlYmFyQnV0dG9uID0gdHJ1ZTtcclxufVxyXG4iLCI8YnV0dG9uXHJcbiAgdHlwZT1cImJ1dHRvblwiXHJcbiAgW2NsYXNzLmludmlzaWJsZV09XCIhc2hvd1NpZGViYXJCdXR0b25cIlxyXG4gIGlkPVwic2lkZWJhclRvZ2dsZVwiXHJcbiAgdGl0bGU9XCJUb2dnbGUgU2lkZWJhclwiXHJcbiAgY2xhc3M9XCJ0b29sYmFyQnV0dG9uXCJcclxuICBkYXRhLWwxMG4taWQ9XCJ0b2dnbGVfc2lkZWJhclwiXHJcbj5cclxuICA8c3ZnIHN0eWxlPVwid2lkdGg6MjRweDtoZWlnaHQ6MjRweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTMsOUgxN1Y3SDNWOU0zLDEzSDE3VjExSDNWMTNNMywxN0gxN1YxNUgzVjE3TTE5LDE3SDIxVjE1SDE5VjE3TTE5LDdWOUgyMVY3SDE5TTE5LDEzSDIxVjExSDE5VjEzWlwiIC8+XHJcbiAgPC9zdmc+XHJcbiAgPHNwYW4gZGF0YS1sMTBuLWlkPVwidG9nZ2xlX3NpZGViYXJfbGFiZWxcIj5Ub2dnbGUgU2lkZWJhcjwvc3Bhbj5cclxuPC9idXR0b24+XHJcbiJdfQ==
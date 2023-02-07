import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class PdfOpenFileComponent {
    constructor() {
        this.showOpenFileButton = true;
    }
}
/** @nocollapse */ PdfOpenFileComponent.ɵfac = function PdfOpenFileComponent_Factory(t) { return new (t || PdfOpenFileComponent)(); };
/** @nocollapse */ PdfOpenFileComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfOpenFileComponent, selectors: [["pdf-open-file"]], inputs: { showOpenFileButton: "showOpenFileButton" }, decls: 5, vars: 2, consts: [["type", "button", "id", "openFile", "title", "Open File", "data-l10n-id", "open_file", 1, "toolbarButton", "hiddenMediumView"], ["viewBox", "0 0 24 24", 2, "width", "24px", "height", "20px"], ["fill", "currentColor", "d", "M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,12L16,16H13.5V19H10.5V16H8L12,12Z"], ["data-l10n-id", "open_file_label"]], template: function PdfOpenFileComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(1, "svg", 1);
        i0.ɵɵelement(2, "path", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(3, "span", 3);
        i0.ɵɵtext(4, "Open");
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵclassProp("invisible", !ctx.showOpenFileButton);
    } }, styles: ["[_nghost-%COMP%]{margin-top:0}[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus{outline:none}svg[_ngcontent-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]{padding:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfOpenFileComponent, [{
        type: Component,
        args: [{ selector: 'pdf-open-file', template: "<button type=\"button\"\r\n        [class.invisible]=\"!showOpenFileButton\"\r\n        id=\"openFile\"\r\n        class=\"toolbarButton hiddenMediumView\"\r\n        title=\"Open File\"\r\n        data-l10n-id=\"open_file\">\r\n  <svg style=\"width:24px;height:20px\" viewBox=\"0 0 24 24\">\r\n    <path fill=\"currentColor\" d=\"M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,12L16,16H13.5V19H10.5V16H8L12,12Z\" />\r\n  </svg>\r\n  <span data-l10n-id=\"open_file_label\">Open</span>\r\n</button>\r\n", styles: [":host{margin-top:0}:host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0}\n"] }]
    }], null, { showOpenFileButton: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLW9wZW4tZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLW9wZW4tZmlsZS9wZGYtb3Blbi1maWxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtb3Blbi1maWxlL3BkZi1vcGVuLWZpbGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBT2pELE1BQU0sT0FBTyxvQkFBb0I7SUFMakM7UUFPUyx1QkFBa0IsR0FBRyxJQUFJLENBQUM7S0FDbEM7OzJHQUhZLG9CQUFvQjtzR0FBcEIsb0JBQW9CO1FDUGpDLGlDQUtpQztRQUMvQixtQkFBd0Q7UUFBeEQsOEJBQXdEO1FBQ3RELDBCQUE0SjtRQUM5SixpQkFBTTtRQUNOLG9CQUFxQztRQUFyQywrQkFBcUM7UUFBQSxvQkFBSTtRQUFBLGlCQUFPLEVBQUE7O1FBUjFDLG9EQUF1Qzs7dUZETWxDLG9CQUFvQjtjQUxoQyxTQUFTOzJCQUNFLGVBQWU7Z0JBTWxCLGtCQUFrQjtrQkFEeEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGRmLW9wZW4tZmlsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1vcGVuLWZpbGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BkZi1vcGVuLWZpbGUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZGZPcGVuRmlsZUNvbXBvbmVudCAge1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dPcGVuRmlsZUJ1dHRvbiA9IHRydWU7XHJcbn1cclxuIiwiPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICBbY2xhc3MuaW52aXNpYmxlXT1cIiFzaG93T3BlbkZpbGVCdXR0b25cIlxyXG4gICAgICAgIGlkPVwib3BlbkZpbGVcIlxyXG4gICAgICAgIGNsYXNzPVwidG9vbGJhckJ1dHRvbiBoaWRkZW5NZWRpdW1WaWV3XCJcclxuICAgICAgICB0aXRsZT1cIk9wZW4gRmlsZVwiXHJcbiAgICAgICAgZGF0YS1sMTBuLWlkPVwib3Blbl9maWxlXCI+XHJcbiAgPHN2ZyBzdHlsZT1cIndpZHRoOjI0cHg7aGVpZ2h0OjIwcHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xNCwyTDIwLDhWMjBBMiwyIDAgMCwxIDE4LDIySDZBMiwyIDAgMCwxIDQsMjBWNEEyLDIgMCAwLDEgNiwySDE0TTE4LDIwVjlIMTNWNEg2VjIwSDE4TTEyLDEyTDE2LDE2SDEzLjVWMTlIMTAuNVYxNkg4TDEyLDEyWlwiIC8+XHJcbiAgPC9zdmc+XHJcbiAgPHNwYW4gZGF0YS1sMTBuLWlkPVwib3Blbl9maWxlX2xhYmVsXCI+T3Blbjwvc3Bhbj5cclxuPC9idXR0b24+XHJcbiJdfQ==
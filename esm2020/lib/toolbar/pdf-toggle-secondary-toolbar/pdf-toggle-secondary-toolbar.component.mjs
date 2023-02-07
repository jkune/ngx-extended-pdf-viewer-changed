import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class PdfToggleSecondaryToolbarComponent {
    constructor() {
        this.showSecondaryToolbarButton = true;
    }
    onClick(event) {
        event.preventDefault();
        return false;
    }
}
/** @nocollapse */ PdfToggleSecondaryToolbarComponent.ɵfac = function PdfToggleSecondaryToolbarComponent_Factory(t) { return new (t || PdfToggleSecondaryToolbarComponent)(); };
/** @nocollapse */ PdfToggleSecondaryToolbarComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfToggleSecondaryToolbarComponent, selectors: [["pdf-toggle-secondary-toolbar"]], inputs: { showSecondaryToolbarButton: "showSecondaryToolbarButton" }, decls: 5, vars: 2, consts: [["type", "button", "id", "secondaryToolbarToggle", "title", "Tools", "data-l10n-id", "tools", 1, "toolbarButton"], ["viewBox", "0 0 24 24", 2, "width", "27px", "height", "27px", 3, "click"], ["fill", "currentColor", "d", "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"], ["data-l10n-id", "tools_label"]], template: function PdfToggleSecondaryToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(1, "svg", 1);
        i0.ɵɵlistener("click", function PdfToggleSecondaryToolbarComponent_Template__svg_svg_click_1_listener($event) { return ctx.onClick($event); });
        i0.ɵɵelement(2, "path", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(3, "span", 3);
        i0.ɵɵtext(4, "Tools");
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵclassProp("invisible", !ctx.showSecondaryToolbarButton);
    } }, styles: ["button[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]{margin-top:-3px}[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus{outline:none}svg[_ngcontent-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]{padding:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfToggleSecondaryToolbarComponent, [{
        type: Component,
        args: [{ selector: 'pdf-toggle-secondary-toolbar', template: "<button type=\"button\" [class.invisible]=\"!showSecondaryToolbarButton\" id=\"secondaryToolbarToggle\" class=\"toolbarButton\"\r\n  title=\"Tools\" data-l10n-id=\"tools\">\r\n  <svg style=\"width:27px;height:27px\" viewBox=\"0 0 24 24\" (click)=\"onClick($event)\">\r\n    <path fill=\"currentColor\" d=\"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z\" />\r\n  </svg>\r\n  <span data-l10n-id=\"tools_label\">Tools</span>\r\n</button>\r\n", styles: ["button>svg{margin-top:-3px}:host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0}\n"] }]
    }], null, { showSecondaryToolbarButton: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXRvZ2dsZS1zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLXRvZ2dsZS1zZWNvbmRhcnktdG9vbGJhci9wZGYtdG9nZ2xlLXNlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtdG9nZ2xlLXNlY29uZGFyeS10b29sYmFyL3BkZi10b2dnbGUtc2Vjb25kYXJ5LXRvb2xiYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBT2pELE1BQU0sT0FBTyxrQ0FBa0M7SUFML0M7UUFPUywrQkFBMEIsR0FBRyxJQUFJLENBQUM7S0FNMUM7SUFKUSxPQUFPLENBQUMsS0FBWTtRQUN6QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzt1SUFQVSxrQ0FBa0M7b0hBQWxDLGtDQUFrQztRQ1AvQyxpQ0FDcUM7UUFDbkMsbUJBQWtGO1FBQWxGLDhCQUFrRjtRQUExQix1SEFBUyxtQkFBZSxJQUFDO1FBQy9FLDBCQUErRTtRQUNqRixpQkFBTTtRQUNOLG9CQUFpQztRQUFqQywrQkFBaUM7UUFBQSxxQkFBSztRQUFBLGlCQUFPLEVBQUE7O1FBTHpCLDREQUErQzs7dUZET3hELGtDQUFrQztjQUw5QyxTQUFTOzJCQUNFLDhCQUE4QjtnQkFNakMsMEJBQTBCO2tCQURoQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtdG9nZ2xlLXNlY29uZGFyeS10b29sYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLXRvZ2dsZS1zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLXRvZ2dsZS1zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZGZUb2dnbGVTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93U2Vjb25kYXJ5VG9vbGJhckJ1dHRvbiA9IHRydWU7XHJcblxyXG4gIHB1YmxpYyBvbkNsaWNrKGV2ZW50OiBFdmVudCk6IGJvb2xlYW4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuIiwiPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgW2NsYXNzLmludmlzaWJsZV09XCIhc2hvd1NlY29uZGFyeVRvb2xiYXJCdXR0b25cIiBpZD1cInNlY29uZGFyeVRvb2xiYXJUb2dnbGVcIiBjbGFzcz1cInRvb2xiYXJCdXR0b25cIlxyXG4gIHRpdGxlPVwiVG9vbHNcIiBkYXRhLWwxMG4taWQ9XCJ0b29sc1wiPlxyXG4gIDxzdmcgc3R5bGU9XCJ3aWR0aDoyN3B4O2hlaWdodDoyN3B4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIChjbGljayk9XCJvbkNsaWNrKCRldmVudClcIj5cclxuICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTMsNkgyMVY4SDNWNk0zLDExSDIxVjEzSDNWMTFNMywxNkgyMVYxOEgzVjE2WlwiIC8+XHJcbiAgPC9zdmc+XHJcbiAgPHNwYW4gZGF0YS1sMTBuLWlkPVwidG9vbHNfbGFiZWxcIj5Ub29sczwvc3Bhbj5cclxuPC9idXR0b24+XHJcbiJdfQ==
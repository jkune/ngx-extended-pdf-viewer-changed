import { PDFNotificationService } from './../../pdf-notification-service';
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./../../pdf-notification-service";
import * as i2 from "@angular/common";
const _c0 = ["button1"];
const _c1 = ["button2"];
function PdfRotatePageComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 2, 3);
    i0.ɵɵlistener("click", function PdfRotatePageComponent_button_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.rotateCW(); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 4);
    i0.ɵɵelement(3, "path", 5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("invisible", !ctx_r0.showRotateButton);
    i0.ɵɵproperty("disabled", ctx_r0.disableRotate);
} }
function PdfRotatePageComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 6, 7);
    i0.ɵɵlistener("click", function PdfRotatePageComponent_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.rotateCCW(); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 4);
    i0.ɵɵelement(3, "path", 8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("invisible", !ctx_r1.showRotateButton);
    i0.ɵɵproperty("disabled", ctx_r1.disableRotate);
} }
export class PdfRotatePageComponent {
    constructor(notificationService) {
        this.notificationService = notificationService;
        this.showRotateButton = true;
        this.disableRotate = true;
        this.clockwise = true;
        this.counterClockwise = true;
        const subscription = this.notificationService.onPDFJSInit.subscribe(() => {
            this.onPdfJsInit();
            subscription.unsubscribe();
        });
    }
    rotateCW() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('rotatecw');
    }
    rotateCCW() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('rotateccw');
    }
    onPdfJsInit() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.on('updateuistate', (event) => this.updateUIState(event));
    }
    updateUIState(event) {
        this.disableRotate = event.pagesCount === 0;
        if (this.button1) {
            this.button1.nativeElement.disabled = this.disableRotate;
        }
        if (this.button2) {
            this.button2.nativeElement.disabled = this.disableRotate;
        }
    }
}
/** @nocollapse */ PdfRotatePageComponent.ɵfac = function PdfRotatePageComponent_Factory(t) { return new (t || PdfRotatePageComponent)(i0.ɵɵdirectiveInject(i1.PDFNotificationService)); };
/** @nocollapse */ PdfRotatePageComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfRotatePageComponent, selectors: [["pdf-rotate-page"]], viewQuery: function PdfRotatePageComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
        i0.ɵɵviewQuery(_c1, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.button1 = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.button2 = _t.first);
    } }, inputs: { showRotateButton: "showRotateButton", clockwise: "clockwise", counterClockwise: "counterClockwise" }, decls: 2, vars: 2, consts: [["type", "button", "id", "primaryPageRotateCw", "class", "toolbarButton hiddenXLView rotateCw", "title", "Rotate Clockwise", "data-l10n-id", "page_rotate_cw", 3, "invisible", "disabled", "click", 4, "ngIf"], ["type", "button", "id", "primaryPageRotateCcw", "class", "toolbarButton hiddenXLView rotateCcw", "title", "Rotate Counterclockwise", "data-l10n-id", "page_rotate_ccw", 3, "invisible", "disabled", "click", 4, "ngIf"], ["type", "button", "id", "primaryPageRotateCw", "title", "Rotate Clockwise", "data-l10n-id", "page_rotate_cw", 1, "toolbarButton", "hiddenXLView", "rotateCw", 3, "disabled", "click"], ["button1", ""], ["viewBox", "0 0 24 24", 2, "width", "23px", "height", "23px"], ["fill", "currentColor", "d", "M12 3C7.03 3 3 7.03 3 12S7.03 21 12 21C14 21 15.92 20.34 17.5 19.14L16.06 17.7C14.87 18.54 13.45 19 12 19C8.13 19 5 15.87 5 12S8.13 5 12 5 19 8.13 19 12H16L20 16L24 12H21C21 7.03 16.97 3 12 3"], ["type", "button", "id", "primaryPageRotateCcw", "title", "Rotate Counterclockwise", "data-l10n-id", "page_rotate_ccw", 1, "toolbarButton", "hiddenXLView", "rotateCcw", 3, "disabled", "click"], ["button2", ""], ["fill", "currentColor", "d", "M12 3C7.03 3 3 7.03 3 12H0L4 16L8 12H5C5 8.13 8.13 5 12 5S19 8.13 19 12 15.87 19 12 19C10.55 19 9.13 18.54 7.94 17.7L6.5 19.14C8.08 20.34 10 21 12 21C16.97 21 21 16.97 21 12S16.97 3 12 3"]], template: function PdfRotatePageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PdfRotatePageComponent_button_0_Template, 4, 3, "button", 0);
        i0.ɵɵtemplate(1, PdfRotatePageComponent_button_1_Template, 4, 3, "button", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.clockwise);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.counterClockwise);
    } }, directives: [i2.NgIf], styles: ["[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus{outline:none}svg[_ngcontent-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]{padding:0;margin-top:0;margin-bottom:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfRotatePageComponent, [{
        type: Component,
        args: [{ selector: 'pdf-rotate-page', template: "<button\r\n  *ngIf=\"clockwise\"\r\n  (click)=\"rotateCW()\"\r\n  type=\"button\"\r\n  [class.invisible]=\"!showRotateButton\"\r\n  id=\"primaryPageRotateCw\"\r\n  class=\"toolbarButton hiddenXLView rotateCw\"\r\n  title=\"Rotate Clockwise\"\r\n  data-l10n-id=\"page_rotate_cw\"\r\n  [disabled]=\"disableRotate\"\r\n  #button1>\r\n    <svg style=\"width:23px;height:23px\" viewBox=\"0 0 24 24\">\r\n      <path fill=\"currentColor\" d=\"M12 3C7.03 3 3 7.03 3 12S7.03 21 12 21C14 21 15.92 20.34 17.5 19.14L16.06 17.7C14.87 18.54 13.45 19 12 19C8.13 19 5 15.87 5 12S8.13 5 12 5 19 8.13 19 12H16L20 16L24 12H21C21 7.03 16.97 3 12 3\" />\r\n    </svg>\r\n</button>\r\n<button\r\n  *ngIf=\"counterClockwise\"\r\n  (click)=\"rotateCCW()\"\r\n  type=\"button\"\r\n  [class.invisible]=\"!showRotateButton\"\r\n  id=\"primaryPageRotateCcw\"\r\n  class=\"toolbarButton hiddenXLView rotateCcw\"\r\n  title=\"Rotate Counterclockwise\"\r\n  data-l10n-id=\"page_rotate_ccw\"\r\n  [disabled]=\"disableRotate\"\r\n  #button2>\r\n    <svg style=\"width:23px;height:23px\" viewBox=\"0 0 24 24\">\r\n      <path fill=\"currentColor\" d=\"M12 3C7.03 3 3 7.03 3 12H0L4 16L8 12H5C5 8.13 8.13 5 12 5S19 8.13 19 12 15.87 19 12 19C10.55 19 9.13 18.54 7.94 17.7L6.5 19.14C8.08 20.34 10 21 12 21C16.97 21 21 16.97 21 12S16.97 3 12 3\" />\r\n    </svg>\r\n</button>\r\n", styles: [":host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
    }], function () { return [{ type: i1.PDFNotificationService }]; }, { showRotateButton: [{
            type: Input
        }], clockwise: [{
            type: Input
        }], counterClockwise: [{
            type: Input
        }], button1: [{
            type: ViewChild,
            args: ['button1']
        }], button2: [{
            type: ViewChild,
            args: ['button2']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXJvdGF0ZS1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtcm90YXRlLXBhZ2UvcGRmLXJvdGF0ZS1wYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtcm90YXRlLXBhZ2UvcGRmLXJvdGF0ZS1wYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0lDRHhFLG9DQVVXO0lBUlQsc0tBQVMsaUJBQVUsSUFBQztJQVNsQixtQkFBd0Q7SUFBeEQsOEJBQXdEO0lBQ3RELDBCQUFnTztJQUNsTyxpQkFBTSxFQUFBOzs7SUFUUixxREFBcUM7SUFLckMsK0NBQTBCOzs7O0lBTTVCLG9DQVVXO0lBUlQsc0tBQVMsa0JBQVcsSUFBQztJQVNuQixtQkFBd0Q7SUFBeEQsOEJBQXdEO0lBQ3RELDBCQUEyTjtJQUM3TixpQkFBTSxFQUFBOzs7SUFUUixxREFBcUM7SUFLckMsK0NBQTBCOztBRGQ1QixNQUFNLE9BQU8sc0JBQXNCO0lBa0JqQyxZQUFvQixtQkFBMkM7UUFBM0Msd0JBQW1CLEdBQW5CLG1CQUFtQixDQUF3QjtRQWhCeEQscUJBQWdCLEdBQUcsSUFBSSxDQUFDO1FBRXhCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBR3JCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFHakIscUJBQWdCLEdBQUcsSUFBSSxDQUFDO1FBUzdCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUN2RSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLFFBQVE7UUFDYixNQUFNLG9CQUFvQixHQUEyQixNQUFjLENBQUMsb0JBQW9CLENBQUM7UUFDekYsb0JBQW9CLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU0sU0FBUztRQUNkLE1BQU0sb0JBQW9CLEdBQTJCLE1BQWMsQ0FBQyxvQkFBb0IsQ0FBQztRQUN6RixvQkFBb0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFHTSxXQUFXO1FBQ2hCLE1BQU0sb0JBQW9CLEdBQTJCLE1BQWMsQ0FBQyxvQkFBb0IsQ0FBQztRQUN6RixvQkFBb0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFFTSxhQUFhLENBQUMsS0FBeUI7UUFDNUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsVUFBVSxLQUFLLENBQUMsQ0FBQztRQUM1QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDMUQ7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDMUQ7SUFDSCxDQUFDOzsrR0FqRFUsc0JBQXNCO3dHQUF0QixzQkFBc0I7Ozs7Ozs7O1FDVm5DLDZFQWNTO1FBQ1QsNkVBY1M7O1FBNUJOLG9DQUFlO1FBZWYsZUFBc0I7UUFBdEIsMkNBQXNCOzt1RkROWixzQkFBc0I7Y0FMbEMsU0FBUzsyQkFDRSxpQkFBaUI7eUVBTXBCLGdCQUFnQjtrQkFEdEIsS0FBSztZQU1DLFNBQVM7a0JBRGYsS0FBSztZQUlDLGdCQUFnQjtrQkFEdEIsS0FBSztZQUlFLE9BQU87a0JBRGQsU0FBUzttQkFBQyxTQUFTO1lBSVosT0FBTztrQkFEZCxTQUFTO21CQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQREZOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9wZGYtbm90aWZpY2F0aW9uLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVBERlZpZXdlckFwcGxpY2F0aW9uIH0gZnJvbSAnLi4vLi4vb3B0aW9ucy9wZGYtdmlld2VyLWFwcGxpY2F0aW9uJztcclxuaW1wb3J0IHsgVXBkYXRlVUlTdGF0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vZXZlbnRzL3VwZGF0ZS11aS1zdGF0ZS1ldmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BkZi1yb3RhdGUtcGFnZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1yb3RhdGUtcGFnZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLXJvdGF0ZS1wYWdlLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmUm90YXRlUGFnZUNvbXBvbmVudCAge1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dSb3RhdGVCdXR0b24gPSB0cnVlO1xyXG5cclxuICBwdWJsaWMgZGlzYWJsZVJvdGF0ZSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGNsb2Nrd2lzZSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGNvdW50ZXJDbG9ja3dpc2UgPSB0cnVlO1xyXG5cclxuICBAVmlld0NoaWxkKCdidXR0b24xJylcclxuICBwcml2YXRlIGJ1dHRvbjE6IEVsZW1lbnRSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+O1xyXG5cclxuICBAVmlld0NoaWxkKCdidXR0b24yJylcclxuICBwcml2YXRlIGJ1dHRvbjI6IEVsZW1lbnRSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IFBERk5vdGlmaWNhdGlvblNlcnZpY2UpIHtcclxuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5vblBERkpTSW5pdC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLm9uUGRmSnNJbml0KCk7XHJcbiAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcm90YXRlQ1coKTogdm9pZCB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMuZGlzcGF0Y2goJ3JvdGF0ZWN3Jyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcm90YXRlQ0NXKCk6IHZvaWQge1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLmRpc3BhdGNoKCdyb3RhdGVjY3cnKTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgb25QZGZKc0luaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3VwZGF0ZXVpc3RhdGUnLCAoZXZlbnQpID0+IHRoaXMudXBkYXRlVUlTdGF0ZShldmVudCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZVVJU3RhdGUoZXZlbnQ6IFVwZGF0ZVVJU3RhdGVFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlUm90YXRlID0gZXZlbnQucGFnZXNDb3VudCA9PT0gMDtcclxuICAgIGlmICh0aGlzLmJ1dHRvbjEpIHtcclxuICAgICAgdGhpcy5idXR0b24xLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVSb3RhdGU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5idXR0b24yKSB7XHJcbiAgICAgIHRoaXMuYnV0dG9uMi5uYXRpdmVFbGVtZW50LmRpc2FibGVkID0gdGhpcy5kaXNhYmxlUm90YXRlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8YnV0dG9uXHJcbiAgKm5nSWY9XCJjbG9ja3dpc2VcIlxyXG4gIChjbGljayk9XCJyb3RhdGVDVygpXCJcclxuICB0eXBlPVwiYnV0dG9uXCJcclxuICBbY2xhc3MuaW52aXNpYmxlXT1cIiFzaG93Um90YXRlQnV0dG9uXCJcclxuICBpZD1cInByaW1hcnlQYWdlUm90YXRlQ3dcIlxyXG4gIGNsYXNzPVwidG9vbGJhckJ1dHRvbiBoaWRkZW5YTFZpZXcgcm90YXRlQ3dcIlxyXG4gIHRpdGxlPVwiUm90YXRlIENsb2Nrd2lzZVwiXHJcbiAgZGF0YS1sMTBuLWlkPVwicGFnZV9yb3RhdGVfY3dcIlxyXG4gIFtkaXNhYmxlZF09XCJkaXNhYmxlUm90YXRlXCJcclxuICAjYnV0dG9uMT5cclxuICAgIDxzdmcgc3R5bGU9XCJ3aWR0aDoyM3B4O2hlaWdodDoyM3B4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xMiAzQzcuMDMgMyAzIDcuMDMgMyAxMlM3LjAzIDIxIDEyIDIxQzE0IDIxIDE1LjkyIDIwLjM0IDE3LjUgMTkuMTRMMTYuMDYgMTcuN0MxNC44NyAxOC41NCAxMy40NSAxOSAxMiAxOUM4LjEzIDE5IDUgMTUuODcgNSAxMlM4LjEzIDUgMTIgNSAxOSA4LjEzIDE5IDEySDE2TDIwIDE2TDI0IDEySDIxQzIxIDcuMDMgMTYuOTcgMyAxMiAzXCIgLz5cclxuICAgIDwvc3ZnPlxyXG48L2J1dHRvbj5cclxuPGJ1dHRvblxyXG4gICpuZ0lmPVwiY291bnRlckNsb2Nrd2lzZVwiXHJcbiAgKGNsaWNrKT1cInJvdGF0ZUNDVygpXCJcclxuICB0eXBlPVwiYnV0dG9uXCJcclxuICBbY2xhc3MuaW52aXNpYmxlXT1cIiFzaG93Um90YXRlQnV0dG9uXCJcclxuICBpZD1cInByaW1hcnlQYWdlUm90YXRlQ2N3XCJcclxuICBjbGFzcz1cInRvb2xiYXJCdXR0b24gaGlkZGVuWExWaWV3IHJvdGF0ZUNjd1wiXHJcbiAgdGl0bGU9XCJSb3RhdGUgQ291bnRlcmNsb2Nrd2lzZVwiXHJcbiAgZGF0YS1sMTBuLWlkPVwicGFnZV9yb3RhdGVfY2N3XCJcclxuICBbZGlzYWJsZWRdPVwiZGlzYWJsZVJvdGF0ZVwiXHJcbiAgI2J1dHRvbjI+XHJcbiAgICA8c3ZnIHN0eWxlPVwid2lkdGg6MjNweDtoZWlnaHQ6MjNweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTIgM0M3LjAzIDMgMyA3LjAzIDMgMTJIMEw0IDE2TDggMTJINUM1IDguMTMgOC4xMyA1IDEyIDVTMTkgOC4xMyAxOSAxMiAxNS44NyAxOSAxMiAxOUMxMC41NSAxOSA5LjEzIDE4LjU0IDcuOTQgMTcuN0w2LjUgMTkuMTRDOC4wOCAyMC4zNCAxMCAyMSAxMiAyMUMxNi45NyAyMSAyMSAxNi45NyAyMSAxMlMxNi45NyAzIDEyIDNcIiAvPlxyXG4gICAgPC9zdmc+XHJcbjwvYnV0dG9uPlxyXG4iXX0=
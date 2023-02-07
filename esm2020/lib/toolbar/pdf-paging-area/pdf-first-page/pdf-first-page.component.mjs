import { PDFNotificationService } from './../../../pdf-notification-service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./../../../pdf-notification-service";
const _c0 = ["button"];
export class PdfFirstPageComponent {
    constructor(notificationService) {
        this.notificationService = notificationService;
        this.disableFirstPage = true;
        const subscription = this.notificationService.onPDFJSInit.subscribe(() => {
            this.onPdfJsInit();
            subscription.unsubscribe();
        });
    }
    firstPage() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('firstpage');
    }
    onPdfJsInit() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.on('updateuistate', (event) => this.updateUIState(event));
    }
    updateUIState(event) {
        this.disableFirstPage = event.pageNumber <= 1;
        this.button.nativeElement.disabled = this.disableFirstPage;
    }
}
/** @nocollapse */ PdfFirstPageComponent.ɵfac = function PdfFirstPageComponent_Factory(t) { return new (t || PdfFirstPageComponent)(i0.ɵɵdirectiveInject(i1.PDFNotificationService)); };
/** @nocollapse */ PdfFirstPageComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfFirstPageComponent, selectors: [["pdf-first-page"]], viewQuery: function PdfFirstPageComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.button = _t.first);
    } }, decls: 6, vars: 1, consts: [["type", "button", "title", "First page", "id", "primaryFirstPage", "data-l10n-id", "first_page", 1, "toolbarButton", "hiddenLargeView", 3, "disabled", "click"], ["button", ""], ["viewBox", "0 0 24 24", 2, "width", "24px", "height", "24px"], ["fill", "currentColor", "d", "M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z"], ["data-l10n-id", "first_page_label"]], template: function PdfFirstPageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0, 1);
        i0.ɵɵlistener("click", function PdfFirstPageComponent_Template_button_click_0_listener() { return ctx.firstPage(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(2, "svg", 2);
        i0.ɵɵelement(3, "path", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(4, "span", 4);
        i0.ɵɵtext(5, "First page");
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵproperty("disabled", ctx.disableFirstPage);
    } }, styles: ["button[_ngcontent-%COMP%]{padding:0;margin-top:0;margin-bottom:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfFirstPageComponent, [{
        type: Component,
        args: [{ selector: 'pdf-first-page', template: "<button type=\"button\"\r\n  class=\"toolbarButton hiddenLargeView\"\r\n  title=\"First page\"\r\n  id=\"primaryFirstPage\"\r\n  data-l10n-id=\"first_page\"\r\n  (click)=\"firstPage()\"\r\n  [disabled]=\"disableFirstPage\"\r\n  #button\r\n  >\r\n  <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\r\n    <path fill=\"currentColor\" d=\"M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z\" />\r\n  </svg>\r\n  <span data-l10n-id=\"first_page_label\">First page</span>\r\n</button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
    }], function () { return [{ type: i1.PDFNotificationService }]; }, { button: [{
            type: ViewChild,
            args: ['button']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWZpcnN0LXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi1wYWdpbmctYXJlYS9wZGYtZmlyc3QtcGFnZS9wZGYtZmlyc3QtcGFnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1maXJzdC1wYWdlL3BkZi1maXJzdC1wYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztBQVNoRSxNQUFNLE9BQU8scUJBQXFCO0lBTWhDLFlBQW9CLG1CQUEyQztRQUEzQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXdCO1FBTHhELHFCQUFnQixHQUFHLElBQUksQ0FBQztRQU03QixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDdkUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxTQUFTO1FBQ2QsTUFBTSxvQkFBb0IsR0FBMkIsTUFBYyxDQUFDLG9CQUFvQixDQUFDO1FBQ3pGLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVNLFdBQVc7UUFDaEIsTUFBTSxvQkFBb0IsR0FBMkIsTUFBYyxDQUFDLG9CQUFvQixDQUFDO1FBQ3pGLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDMUYsQ0FBQztJQUVNLGFBQWEsQ0FBQyxLQUF5QjtRQUM1QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUM3RCxDQUFDOzs2R0ExQlUscUJBQXFCO3VHQUFyQixxQkFBcUI7Ozs7OztRQ1ZsQyxvQ0FRRztRQUhELGtHQUFTLGVBQVcsSUFBQztRQUlyQixtQkFBd0Q7UUFBeEQsOEJBQXdEO1FBQ3RELDBCQUE0RztRQUM5RyxpQkFBTTtRQUNOLG9CQUFzQztRQUF0QywrQkFBc0M7UUFBQSwwQkFBVTtRQUFBLGlCQUFPLEVBQUE7O1FBTnZELCtDQUE2Qjs7dUZESWxCLHFCQUFxQjtjQUxqQyxTQUFTOzJCQUNFLGdCQUFnQjt5RUFRbEIsTUFBTTtrQkFEYixTQUFTO21CQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQREZOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi8uLi9wZGYtbm90aWZpY2F0aW9uLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElQREZWaWV3ZXJBcHBsaWNhdGlvbiB9IGZyb20gJy4uLy4uLy4uL29wdGlvbnMvcGRmLXZpZXdlci1hcHBsaWNhdGlvbic7XHJcbmltcG9ydCB7IFVwZGF0ZVVJU3RhdGVFdmVudCB9IGZyb20gJy4uLy4uLy4uL2V2ZW50cy91cGRhdGUtdWktc3RhdGUtZXZlbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtZmlyc3QtcGFnZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1maXJzdC1wYWdlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wZGYtZmlyc3QtcGFnZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZkZpcnN0UGFnZUNvbXBvbmVudCB7XHJcbiAgcHVibGljIGRpc2FibGVGaXJzdFBhZ2UgPSB0cnVlO1xyXG5cclxuICBAVmlld0NoaWxkKCdidXR0b24nKVxyXG4gIHByaXZhdGUgYnV0dG9uOiBFbGVtZW50UmVmPEhUTUxCdXR0b25FbGVtZW50PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBQREZOb3RpZmljYXRpb25TZXJ2aWNlKSB7XHJcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2Uub25QREZKU0luaXQuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5vblBkZkpzSW5pdCgpO1xyXG4gICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZpcnN0UGFnZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5kaXNwYXRjaCgnZmlyc3RwYWdlJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25QZGZKc0luaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3VwZGF0ZXVpc3RhdGUnLCAoZXZlbnQpID0+IHRoaXMudXBkYXRlVUlTdGF0ZShldmVudCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZVVJU3RhdGUoZXZlbnQ6IFVwZGF0ZVVJU3RhdGVFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlRmlyc3RQYWdlID0gZXZlbnQucGFnZU51bWJlciA8PSAxO1xyXG4gICAgdGhpcy5idXR0b24ubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZUZpcnN0UGFnZTtcclxuICB9XHJcbn1cclxuIiwiPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcclxuICBjbGFzcz1cInRvb2xiYXJCdXR0b24gaGlkZGVuTGFyZ2VWaWV3XCJcclxuICB0aXRsZT1cIkZpcnN0IHBhZ2VcIlxyXG4gIGlkPVwicHJpbWFyeUZpcnN0UGFnZVwiXHJcbiAgZGF0YS1sMTBuLWlkPVwiZmlyc3RfcGFnZVwiXHJcbiAgKGNsaWNrKT1cImZpcnN0UGFnZSgpXCJcclxuICBbZGlzYWJsZWRdPVwiZGlzYWJsZUZpcnN0UGFnZVwiXHJcbiAgI2J1dHRvblxyXG4gID5cclxuICA8c3ZnIHN0eWxlPVwid2lkdGg6MjRweDtoZWlnaHQ6MjRweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE4LjQxLDE2LjU5TDEzLjgyLDEyTDE4LjQxLDcuNDFMMTcsNkwxMSwxMkwxNywxOEwxOC40MSwxNi41OU02LDZIOFYxOEg2VjZaXCIgLz5cclxuICA8L3N2Zz5cclxuICA8c3BhbiBkYXRhLWwxMG4taWQ9XCJmaXJzdF9wYWdlX2xhYmVsXCI+Rmlyc3QgcGFnZTwvc3Bhbj5cclxuPC9idXR0b24+XHJcbiJdfQ==
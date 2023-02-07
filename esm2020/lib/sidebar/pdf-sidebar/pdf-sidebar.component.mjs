import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./pdf-sidebar-toolbar/pdf-sidebar-toolbar.component";
import * as i3 from "./pdf-sidebar-content/pdf-sidebar-content.component";
function PdfSidebarComponent_ng_content_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 0, ["*ngTemplateOutlet", "customSidebar ? customSidebar : defaultSidebar"]);
} }
function PdfSidebarComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3);
    i0.ɵɵelement(2, "pdf-sidebar-toolbar", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "pdf-sidebar-content", 5);
    i0.ɵɵlistener("thumbnailDrawn", function PdfSidebarComponent_ng_template_2_Template_pdf_sidebar_content_thumbnailDrawn_3_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.thumbnailDrawn.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "div", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("top", ctx_r2.sidebarPositionTop);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("display", ctx_r2.hideSidebarToolbar ? "none" : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("mobileFriendlyZoomScale", ctx_r2.mobileFriendlyZoomScale);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("customThumbnail", ctx_r2.customThumbnail)("hideSidebarToolbar", ctx_r2.hideSidebarToolbar)("mobileFriendlyZoomScale", ctx_r2.mobileFriendlyZoomScale);
} }
const _c0 = ["*"];
export class PdfSidebarComponent {
    constructor(elementRef, ref) {
        this.elementRef = elementRef;
        this.ref = ref;
        this.sidebarVisible = true;
        this.mobileFriendlyZoomScale = 1;
        this.showSidebarButton = true;
        this.thumbnailDrawn = new EventEmitter();
        this.hideSidebarToolbar = true;
    }
    showToolbarWhenNecessary() {
        const element = this.elementRef.nativeElement;
        const buttons = element.querySelectorAll('button');
        let visible = 0;
        for (let index = 0; index < buttons.length; index++) {
            const b = buttons.item(index);
            if (!b.hidden) {
                visible++;
            }
        }
        this.hideSidebarToolbar = visible <= 1;
        this.ref.markForCheck();
    }
}
/** @nocollapse */ PdfSidebarComponent.ɵfac = function PdfSidebarComponent_Factory(t) { return new (t || PdfSidebarComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
/** @nocollapse */ PdfSidebarComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfSidebarComponent, selectors: [["pdf-sidebar"]], inputs: { sidebarPositionTop: "sidebarPositionTop", sidebarVisible: "sidebarVisible", mobileFriendlyZoomScale: "mobileFriendlyZoomScale", showSidebarButton: "showSidebarButton", customSidebar: "customSidebar", customThumbnail: "customThumbnail" }, outputs: { thumbnailDrawn: "thumbnailDrawn" }, ngContentSelectors: _c0, decls: 4, vars: 1, consts: [[4, "ngTemplateOutlet"], ["defaultSidebar", ""], ["id", "sidebarContainer"], ["id", "additionalSidebarContainer"], [3, "mobileFriendlyZoomScale"], [3, "customThumbnail", "hideSidebarToolbar", "mobileFriendlyZoomScale", "thumbnailDrawn"], ["id", "sidebarResizer", 1, "hidden"]], template: function PdfSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵtemplate(1, PdfSidebarComponent_ng_content_1_Template, 1, 0, "ng-content", 0);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(2, PdfSidebarComponent_ng_template_2_Template, 5, 8, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.customSidebar ? ctx.customSidebar : _r1);
    } }, directives: [i1.NgTemplateOutlet, i2.PdfSidebarToolbarComponent, i3.PdfSidebarContentComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfSidebarComponent, [{
        type: Component,
        args: [{ selector: 'pdf-sidebar', template: "<div>\r\n  <ng-content *ngTemplateOutlet=\"customSidebar ? customSidebar : defaultSidebar\"></ng-content>\r\n</div>\r\n\r\n<ng-template #defaultSidebar>\r\n  <div id=\"sidebarContainer\" [style.top]=\"sidebarPositionTop\">\r\n    <div id=\"additionalSidebarContainer\" [style.display]=\"hideSidebarToolbar ? 'none' : ''\">\r\n      <pdf-sidebar-toolbar [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"></pdf-sidebar-toolbar>\r\n    </div>\r\n    <pdf-sidebar-content\r\n      [customThumbnail]=\"customThumbnail\"\r\n      (thumbnailDrawn)=\"thumbnailDrawn.emit($event)\"\r\n      [hideSidebarToolbar]=\"hideSidebarToolbar\"\r\n      [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\r\n    ></pdf-sidebar-content>\r\n    <div id=\"sidebarResizer\" class=\"hidden\"></div>\r\n  </div>\r\n</ng-template>\r\n", styles: [""] }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, { sidebarPositionTop: [{
            type: Input
        }], sidebarVisible: [{
            type: Input
        }], mobileFriendlyZoomScale: [{
            type: Input
        }], showSidebarButton: [{
            type: Input
        }], customSidebar: [{
            type: Input
        }], customThumbnail: [{
            type: Input
        }], thumbnailDrawn: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNpZGViYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9zaWRlYmFyL3BkZi1zaWRlYmFyL3BkZi1zaWRlYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvc2lkZWJhci9wZGYtc2lkZWJhci9wZGYtc2lkZWJhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBZSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lDQ2pILDhGQUE0Rjs7OztJQUk1Riw4QkFBNEQsYUFBQTtJQUV4RCx5Q0FBK0Y7SUFDakcsaUJBQU07SUFDTiw4Q0FLQztJQUhDLDZNQUFrQixrQ0FBMkIsSUFBQztJQUcvQyxpQkFBc0I7SUFDdkIseUJBQThDO0lBQ2hELGlCQUFNOzs7SUFYcUIsZ0RBQWdDO0lBQ3BCLGVBQWtEO0lBQWxELGtFQUFrRDtJQUNoRSxlQUFtRDtJQUFuRCx3RUFBbUQ7SUFHeEUsZUFBbUM7SUFBbkMsd0RBQW1DLGlEQUFBLDJEQUFBOzs7QURGekMsTUFBTSxPQUFPLG1CQUFtQjtJQXdCOUIsWUFBb0IsVUFBc0IsRUFBVSxHQUFzQjtRQUF0RCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFuQm5FLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBR3RCLDRCQUF1QixHQUFHLENBQUMsQ0FBQztRQUc1QixzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFTekIsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBMEIsQ0FBQztRQUU1RCx1QkFBa0IsR0FBRyxJQUFJLENBQUM7SUFFNEMsQ0FBQztJQUV2RSx3QkFBd0I7UUFDN0IsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUE0QixDQUFDO1FBQzdELE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRCxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDaEIsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDbkQsTUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtnQkFDYixPQUFPLEVBQUUsQ0FBQzthQUNYO1NBQ0Y7UUFDRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsT0FBTyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7O3lHQXRDVSxtQkFBbUI7cUdBQW5CLG1CQUFtQjs7UUNSaEMsMkJBQUs7UUFDSCxrRkFBNEY7UUFDOUYsaUJBQU07UUFFTixxSEFhYzs7O1FBaEJDLGVBQWdFO1FBQWhFLDhFQUFnRTs7dUZET2xFLG1CQUFtQjtjQUwvQixTQUFTOzJCQUNFLGFBQWE7NkZBTWhCLGtCQUFrQjtrQkFEeEIsS0FBSztZQUlDLGNBQWM7a0JBRHBCLEtBQUs7WUFJQyx1QkFBdUI7a0JBRDdCLEtBQUs7WUFJQyxpQkFBaUI7a0JBRHZCLEtBQUs7WUFJQyxhQUFhO2tCQURuQixLQUFLO1lBSUMsZUFBZTtrQkFEckIsS0FBSztZQUlDLGNBQWM7a0JBRHBCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBkZlRodW1ibmFpbERyYXduRXZlbnQgfSBmcm9tICcuLi8uLi9ldmVudHMvcGRmLXRodW1ibmFpbC1kcmF3bi1ldmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BkZi1zaWRlYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLXNpZGViYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BkZi1zaWRlYmFyLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZlNpZGViYXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNpZGViYXJQb3NpdGlvblRvcDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaWRlYmFyVmlzaWJsZSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIG1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlID0gMTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1NpZGViYXJCdXR0b24gPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjdXN0b21TaWRlYmFyOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjdXN0b21UaHVtYm5haWw6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyB0aHVtYm5haWxEcmF3biA9IG5ldyBFdmVudEVtaXR0ZXI8UGRmVGh1bWJuYWlsRHJhd25FdmVudD4oKTtcclxuXHJcbiAgcHVibGljIGhpZGVTaWRlYmFyVG9vbGJhciA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBwdWJsaWMgc2hvd1Rvb2xiYXJXaGVuTmVjZXNzYXJ5KCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgYnV0dG9ucyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XHJcbiAgICBsZXQgdmlzaWJsZSA9IDA7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYnV0dG9ucy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgYiA9IGJ1dHRvbnMuaXRlbShpbmRleCk7XHJcbiAgICAgIGlmICghYi5oaWRkZW4pIHtcclxuICAgICAgICB2aXNpYmxlKys7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuaGlkZVNpZGViYXJUb29sYmFyID0gdmlzaWJsZSA8PSAxO1xyXG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXY+XHJcbiAgPG5nLWNvbnRlbnQgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjdXN0b21TaWRlYmFyID8gY3VzdG9tU2lkZWJhciA6IGRlZmF1bHRTaWRlYmFyXCI+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjZGVmYXVsdFNpZGViYXI+XHJcbiAgPGRpdiBpZD1cInNpZGViYXJDb250YWluZXJcIiBbc3R5bGUudG9wXT1cInNpZGViYXJQb3NpdGlvblRvcFwiPlxyXG4gICAgPGRpdiBpZD1cImFkZGl0aW9uYWxTaWRlYmFyQ29udGFpbmVyXCIgW3N0eWxlLmRpc3BsYXldPVwiaGlkZVNpZGViYXJUb29sYmFyID8gJ25vbmUnIDogJydcIj5cclxuICAgICAgPHBkZi1zaWRlYmFyLXRvb2xiYXIgW21vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlXT1cIm1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlXCI+PC9wZGYtc2lkZWJhci10b29sYmFyPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8cGRmLXNpZGViYXItY29udGVudFxyXG4gICAgICBbY3VzdG9tVGh1bWJuYWlsXT1cImN1c3RvbVRodW1ibmFpbFwiXHJcbiAgICAgICh0aHVtYm5haWxEcmF3bik9XCJ0aHVtYm5haWxEcmF3bi5lbWl0KCRldmVudClcIlxyXG4gICAgICBbaGlkZVNpZGViYXJUb29sYmFyXT1cImhpZGVTaWRlYmFyVG9vbGJhclwiXHJcbiAgICAgIFttb2JpbGVGcmllbmRseVpvb21TY2FsZV09XCJtb2JpbGVGcmllbmRseVpvb21TY2FsZVwiXHJcbiAgICA+PC9wZGYtc2lkZWJhci1jb250ZW50PlxyXG4gICAgPGRpdiBpZD1cInNpZGViYXJSZXNpemVyXCIgY2xhc3M9XCJoaWRkZW5cIj48L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19
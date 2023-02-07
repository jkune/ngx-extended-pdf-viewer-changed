import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../pdf-toggle-sidebar/pdf-toggle-sidebar.component";
import * as i3 from "../pdf-find-button/pdf-find-button.component";
import * as i4 from "../pdf-paging-area/pdf-paging-area.component";
import * as i5 from "../pdf-zoom-toolbar/pdf-zoom-toolbar.component";
import * as i6 from "../pdf-hand-tool/pdf-hand-tool.component";
import * as i7 from "../pdf-select-tool/pdf-select-tool.component";
import * as i8 from "../pdf-rotate-page/pdf-rotate-page.component";
import * as i9 from "../pdf-presentation-mode/pdf-presentation-mode.component";
import * as i10 from "../pdf-open-file/pdf-open-file.component";
import * as i11 from "../pdf-print/pdf-print.component";
import * as i12 from "../pdf-download/pdf-download.component";
import * as i13 from "../pdf-editor/pdf-editor.component";
import * as i14 from "../pdf-toggle-secondary-toolbar/pdf-toggle-secondary-toolbar.component";
function PdfToolbarComponent_ng_content_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 0, ["*ngTemplateOutlet", "customToolbar ? customToolbar : defaultToolbar"]);
} }
function PdfToolbarComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 8);
    i0.ɵɵelement(2, "pdf-toggle-sidebar", 9)(3, "pdf-find-button", 10)(4, "pdf-paging-area", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "pdf-zoom-toolbar", 12);
    i0.ɵɵelementStart(6, "div", 13);
    i0.ɵɵelement(7, "pdf-hand-tool", 14)(8, "pdf-select-tool", 15)(9, "pdf-rotate-page", 16)(10, "pdf-rotate-page", 16)(11, "pdf-presentation-mode", 17)(12, "pdf-open-file", 18)(13, "pdf-print", 19)(14, "pdf-download", 20)(15, "pdf-editor", 21)(16, "pdf-toggle-secondary-toolbar", 22);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("showSidebarButton", ctx_r2.showSidebarButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showFindButton", ctx_r2.showFindButton)("textLayer", ctx_r2.textLayer);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showPagingButtons", ctx_r2.showPagingButtons);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showZoomButtons", ctx_r2.showZoomButtons)("zoomLevels", ctx_r2.zoomLevels);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("showHandToolButton", ctx_r2.showHandToolButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showSelectToolButton", ctx_r2.showHandToolButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showRotateButton", ctx_r2.showRotateButton)("clockwise", true)("counterClockwise", false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showRotateButton", ctx_r2.showRotateButton)("clockwise", false)("counterClockwise", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showPresentationModeButton", ctx_r2.showPresentationModeButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showOpenFileButton", ctx_r2.showOpenFileButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showPrintButton", ctx_r2.showPrintButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showDownloadButton", ctx_r2.showDownloadButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showEditor", ctx_r2.showEditor);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showSecondaryToolbarButton", ctx_r2.showSecondaryToolbarButton);
} }
const _c0 = ["*"];
export class PdfToolbarComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.mobileFriendlyZoomScale = 1;
        this.primaryMenuVisible = true;
        this.showBookmarkButton = true;
        this.showDownloadButton = true;
        this.showEditor = false;
        this.showFindButton = undefined;
        this.showHandToolButton = true;
        this.showOpenFileButton = true;
        this.showPrintButton = true;
        this.showPagingButtons = true;
        this.showPresentationModeButton = false;
        this.showRotateButton = true;
        this.showSecondaryToolbarButton = true;
        this.showSidebarButton = true;
        this.showZoomButtons = true;
        this.textLayer = undefined;
        this.toolbarMarginTop = '0px';
        this.toolbarWidth = '100%';
        this.zoomLevels = ['auto', 'page-actual', 'page-fit', 'page-width', 0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4];
        this.onToolbarLoaded = new EventEmitter();
    }
    ngAfterViewInit() {
        this.onToolbarLoaded.emit(this.elementRef.nativeElement.getElementsByClassName('toolbar')[0]);
    }
}
/** @nocollapse */ PdfToolbarComponent.ɵfac = function PdfToolbarComponent_Factory(t) { return new (t || PdfToolbarComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
/** @nocollapse */ PdfToolbarComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfToolbarComponent, selectors: [["pdf-toolbar"]], inputs: { customToolbar: "customToolbar", mobileFriendlyZoomScale: "mobileFriendlyZoomScale", primaryMenuVisible: "primaryMenuVisible", showBookmarkButton: "showBookmarkButton", showDownloadButton: "showDownloadButton", showEditor: "showEditor", showFindButton: "showFindButton", showHandToolButton: "showHandToolButton", showOpenFileButton: "showOpenFileButton", showPrintButton: "showPrintButton", showPagingButtons: "showPagingButtons", showPresentationModeButton: "showPresentationModeButton", showRotateButton: "showRotateButton", showSecondaryToolbarButton: "showSecondaryToolbarButton", showSidebarButton: "showSidebarButton", showZoomButtons: "showZoomButtons", textLayer: "textLayer", toolbarMarginTop: "toolbarMarginTop", toolbarWidth: "toolbarWidth", zoomLevels: "zoomLevels" }, outputs: { onToolbarLoaded: "onToolbarLoaded" }, ngContentSelectors: _c0, decls: 8, vars: 11, consts: [[1, "toolbar"], ["id", "toolbarContainer"], [4, "ngTemplateOutlet"], ["id", "loadingBar"], [1, "progress"], [1, "glimmer"], ["defaultToolbar", ""], ["id", "toolbarViewer"], ["id", "toolbarViewerLeft"], [3, "showSidebarButton"], [3, "showFindButton", "textLayer"], [3, "showPagingButtons"], [3, "showZoomButtons", "zoomLevels"], ["id", "toolbarViewerRight"], [3, "showHandToolButton"], [3, "showSelectToolButton"], [3, "showRotateButton", "clockwise", "counterClockwise"], [3, "showPresentationModeButton"], [3, "showOpenFileButton"], [3, "showPrintButton"], [3, "showDownloadButton"], [3, "showEditor"], [3, "showSecondaryToolbarButton"]], template: function PdfToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
        i0.ɵɵtemplate(2, PdfToolbarComponent_ng_content_2_Template, 1, 0, "ng-content", 2);
        i0.ɵɵelementStart(3, "div", 3)(4, "div", 4);
        i0.ɵɵelement(5, "div", 5);
        i0.ɵɵelementEnd()()()();
        i0.ɵɵtemplate(6, PdfToolbarComponent_ng_template_6_Template, 17, 20, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(7);
        i0.ɵɵstyleProp("transform", "scale(" + ctx.mobileFriendlyZoomScale + ")")("transform-origin", "left center")("width", ctx.toolbarWidth)("margin-top", ctx.toolbarMarginTop);
        i0.ɵɵclassProp("invisible", !ctx.primaryMenuVisible);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.customToolbar ? ctx.customToolbar : _r1);
    } }, directives: [i1.NgTemplateOutlet, i2.PdfToggleSidebarComponent, i3.PdfFindButtonComponent, i4.PdfPagingAreaComponent, i5.PdfZoomToolbarComponent, i6.PdfHandToolComponent, i7.PdfSelectToolComponent, i8.PdfRotatePageComponent, i9.PdfPresentationModeComponent, i10.PdfOpenFileComponent, i11.PdfPrintComponent, i12.PdfDownloadComponent, i13.PdfEditorComponent, i14.PdfToggleSecondaryToolbarComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfToolbarComponent, [{
        type: Component,
        args: [{ selector: 'pdf-toolbar', template: "<div class=\"toolbar\" [class.invisible]=\"!primaryMenuVisible\"\r\n  [style.transform]=\"'scale(' + mobileFriendlyZoomScale + ')'\" [style.transformOrigin]=\"'left center'\"\r\n  [style.width]=\"toolbarWidth\" [style.marginTop]=\"toolbarMarginTop\">\r\n  <div id=\"toolbarContainer\">\r\n    <ng-content *ngTemplateOutlet=\"customToolbar ? customToolbar : defaultToolbar\"></ng-content>\r\n    <div id=\"loadingBar\">\r\n      <div class=\"progress\">\r\n        <div class=\"glimmer\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #defaultToolbar>\r\n  <div id=\"toolbarViewer\">\r\n    <div id=\"toolbarViewerLeft\">\r\n      <pdf-toggle-sidebar [showSidebarButton]=\"showSidebarButton\"></pdf-toggle-sidebar>\r\n      <pdf-find-button [showFindButton]=\"showFindButton\" [textLayer]=\"textLayer\"></pdf-find-button>\r\n      <pdf-paging-area [showPagingButtons]=\"showPagingButtons\"></pdf-paging-area>\r\n    </div>\r\n    <pdf-zoom-toolbar [showZoomButtons]=\"showZoomButtons\" [zoomLevels]=\"zoomLevels\"></pdf-zoom-toolbar>\r\n    <div id=\"toolbarViewerRight\">\r\n\r\n\r\n      <pdf-hand-tool [showHandToolButton]=\"showHandToolButton\"></pdf-hand-tool>\r\n      <pdf-select-tool [showSelectToolButton]=\"showHandToolButton\"></pdf-select-tool>\r\n      <pdf-rotate-page [showRotateButton]=\"showRotateButton\" [clockwise]=\"true\" [counterClockwise]=\"false\">\r\n      </pdf-rotate-page>\r\n      <pdf-rotate-page [showRotateButton]=\"showRotateButton\" [clockwise]=\"false\" [counterClockwise]=\"true\">\r\n      </pdf-rotate-page>\r\n      <pdf-presentation-mode [showPresentationModeButton]=\"showPresentationModeButton\"></pdf-presentation-mode>\r\n      <pdf-open-file [showOpenFileButton]=\"showOpenFileButton\"></pdf-open-file>\r\n      <pdf-print [showPrintButton]=\"showPrintButton\"></pdf-print>\r\n      <pdf-download [showDownloadButton]=\"showDownloadButton\"></pdf-download>\r\n\r\n      <pdf-editor [showEditor]=\"showEditor\"></pdf-editor>\r\n      <pdf-toggle-secondary-toolbar [showSecondaryToolbarButton]=\"showSecondaryToolbarButton\">\r\n      </pdf-toggle-secondary-toolbar>\r\n\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n", styles: [""] }]
    }], function () { return [{ type: i0.ElementRef }]; }, { customToolbar: [{
            type: Input
        }], mobileFriendlyZoomScale: [{
            type: Input
        }], primaryMenuVisible: [{
            type: Input
        }], showBookmarkButton: [{
            type: Input
        }], showDownloadButton: [{
            type: Input
        }], showEditor: [{
            type: Input
        }], showFindButton: [{
            type: Input
        }], showHandToolButton: [{
            type: Input
        }], showOpenFileButton: [{
            type: Input
        }], showPrintButton: [{
            type: Input
        }], showPagingButtons: [{
            type: Input
        }], showPresentationModeButton: [{
            type: Input
        }], showRotateButton: [{
            type: Input
        }], showSecondaryToolbarButton: [{
            type: Input
        }], showSidebarButton: [{
            type: Input
        }], showZoomButtons: [{
            type: Input
        }], textLayer: [{
            type: Input
        }], toolbarMarginTop: [{
            type: Input
        }], toolbarWidth: [{
            type: Input
        }], zoomLevels: [{
            type: Input
        }], onToolbarLoaded: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXRvb2xiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi10b29sYmFyL3BkZi10b29sYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtdG9vbGJhci9wZGYtdG9vbGJhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDSTNHLDhGQUE0Rjs7O0lBVTlGLDhCQUF3QixhQUFBO0lBRXBCLHdDQUFpRiwwQkFBQSwwQkFBQTtJQUduRixpQkFBTTtJQUNOLHVDQUFtRztJQUNuRywrQkFBNkI7SUFHM0Isb0NBQXlFLDBCQUFBLDBCQUFBLDJCQUFBLGlDQUFBLHlCQUFBLHFCQUFBLHdCQUFBLHNCQUFBLHdDQUFBO0lBZTNFLGlCQUFNLEVBQUE7OztJQXZCZ0IsZUFBdUM7SUFBdkMsNERBQXVDO0lBQzFDLGVBQWlDO0lBQWpDLHNEQUFpQywrQkFBQTtJQUNqQyxlQUF1QztJQUF2Qyw0REFBdUM7SUFFeEMsZUFBbUM7SUFBbkMsd0RBQW1DLGlDQUFBO0lBSXBDLGVBQXlDO0lBQXpDLDhEQUF5QztJQUN2QyxlQUEyQztJQUEzQyxnRUFBMkM7SUFDM0MsZUFBcUM7SUFBckMsMERBQXFDLG1CQUFBLDJCQUFBO0lBRXJDLGVBQXFDO0lBQXJDLDBEQUFxQyxvQkFBQSwwQkFBQTtJQUUvQixlQUF5RDtJQUF6RCw4RUFBeUQ7SUFDakUsZUFBeUM7SUFBekMsOERBQXlDO0lBQzdDLGVBQW1DO0lBQW5DLHdEQUFtQztJQUNoQyxlQUF5QztJQUF6Qyw4REFBeUM7SUFFM0MsZUFBeUI7SUFBekIsOENBQXlCO0lBQ1AsZUFBeUQ7SUFBekQsOEVBQXlEOzs7QUQ3QjdGLE1BQU0sT0FBTyxtQkFBbUI7SUFnRTlCLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUEzRG5DLDRCQUF1QixHQUFHLENBQUMsQ0FBQztRQUc1Qix1QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFHMUIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBRzFCLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUcxQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBR25CLG1CQUFjLEdBQXdCLFNBQVMsQ0FBQztRQUdoRCx1QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFHMUIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBRzFCLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBR3ZCLHNCQUFpQixHQUFHLElBQUksQ0FBQztRQUd6QiwrQkFBMEIsR0FBRyxLQUFLLENBQUM7UUFHbkMscUJBQWdCLEdBQUcsSUFBSSxDQUFDO1FBR3hCLCtCQUEwQixHQUFHLElBQUksQ0FBQztRQUdsQyxzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFHekIsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFHdkIsY0FBUyxHQUF3QixTQUFTLENBQUM7UUFHM0MscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBR3pCLGlCQUFZLEdBQUcsTUFBTSxDQUFDO1FBR3RCLGVBQVUsR0FBRyxDQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFHakcsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFDO0lBRVosQ0FBQztJQUM5QyxlQUFlO1FBQ2IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFnQixDQUFDLENBQUM7SUFDL0csQ0FBQzs7eUdBbkVVLG1CQUFtQjtxR0FBbkIsbUJBQW1COztRQ1BoQyw4QkFFb0UsYUFBQTtRQUVoRSxrRkFBNEY7UUFDNUYsOEJBQXFCLGFBQUE7UUFFakIseUJBQTJCO1FBQzdCLGlCQUFNLEVBQUEsRUFBQSxFQUFBO1FBS1osdUhBNEJjOzs7UUF4Q1oseUVBQTRELG1DQUFBLDJCQUFBLG9DQUFBO1FBRHpDLG9EQUF1QztRQUkzQyxlQUFnRTtRQUFoRSw4RUFBZ0U7O3VGREdwRSxtQkFBbUI7Y0FML0IsU0FBUzsyQkFDRSxhQUFhOzZEQU1oQixhQUFhO2tCQURuQixLQUFLO1lBSUMsdUJBQXVCO2tCQUQ3QixLQUFLO1lBSUMsa0JBQWtCO2tCQUR4QixLQUFLO1lBSUMsa0JBQWtCO2tCQUR4QixLQUFLO1lBSUMsa0JBQWtCO2tCQUR4QixLQUFLO1lBSUMsVUFBVTtrQkFEaEIsS0FBSztZQUlDLGNBQWM7a0JBRHBCLEtBQUs7WUFJQyxrQkFBa0I7a0JBRHhCLEtBQUs7WUFJQyxrQkFBa0I7a0JBRHhCLEtBQUs7WUFJQyxlQUFlO2tCQURyQixLQUFLO1lBSUMsaUJBQWlCO2tCQUR2QixLQUFLO1lBSUMsMEJBQTBCO2tCQURoQyxLQUFLO1lBSUMsZ0JBQWdCO2tCQUR0QixLQUFLO1lBSUMsMEJBQTBCO2tCQURoQyxLQUFLO1lBSUMsaUJBQWlCO2tCQUR2QixLQUFLO1lBSUMsZUFBZTtrQkFEckIsS0FBSztZQUlDLFNBQVM7a0JBRGYsS0FBSztZQUlDLGdCQUFnQjtrQkFEdEIsS0FBSztZQUlDLFlBQVk7a0JBRGxCLEtBQUs7WUFJQyxVQUFVO2tCQURoQixLQUFLO1lBSUMsZUFBZTtrQkFEckIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtdG9vbGJhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi10b29sYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wZGYtdG9vbGJhci5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZGZUb29sYmFyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY3VzdG9tVG9vbGJhcjogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbW9iaWxlRnJpZW5kbHlab29tU2NhbGUgPSAxO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBwcmltYXJ5TWVudVZpc2libGUgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93Qm9va21hcmtCdXR0b24gPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RG93bmxvYWRCdXR0b24gPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RWRpdG9yID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGaW5kQnV0dG9uOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93SGFuZFRvb2xCdXR0b24gPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93T3BlbkZpbGVCdXR0b24gPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93UHJpbnRCdXR0b24gPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93UGFnaW5nQnV0dG9ucyA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dQcmVzZW50YXRpb25Nb2RlQnV0dG9uID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dSb3RhdGVCdXR0b24gPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93U2Vjb25kYXJ5VG9vbGJhckJ1dHRvbiA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dTaWRlYmFyQnV0dG9uID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1pvb21CdXR0b25zID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgdGV4dExheWVyOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyB0b29sYmFyTWFyZ2luVG9wID0gJzBweCc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHRvb2xiYXJXaWR0aCA9ICcxMDAlJztcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgem9vbUxldmVscyA9IFsnYXV0bycsICdwYWdlLWFjdHVhbCcsICdwYWdlLWZpdCcsICdwYWdlLXdpZHRoJywgMC41LCAwLjc1LCAxLCAxLjI1LCAxLjUsIDIsIDMsIDRdO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgb25Ub29sYmFyTG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxIVE1MRWxlbWVudD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub29sYmFyTG9hZGVkLmVtaXQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG9vbGJhcicpWzBdIGFzIEhUTUxFbGVtZW50KTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInRvb2xiYXJcIiBbY2xhc3MuaW52aXNpYmxlXT1cIiFwcmltYXJ5TWVudVZpc2libGVcIlxyXG4gIFtzdHlsZS50cmFuc2Zvcm1dPVwiJ3NjYWxlKCcgKyBtb2JpbGVGcmllbmRseVpvb21TY2FsZSArICcpJ1wiIFtzdHlsZS50cmFuc2Zvcm1PcmlnaW5dPVwiJ2xlZnQgY2VudGVyJ1wiXHJcbiAgW3N0eWxlLndpZHRoXT1cInRvb2xiYXJXaWR0aFwiIFtzdHlsZS5tYXJnaW5Ub3BdPVwidG9vbGJhck1hcmdpblRvcFwiPlxyXG4gIDxkaXYgaWQ9XCJ0b29sYmFyQ29udGFpbmVyXCI+XHJcbiAgICA8bmctY29udGVudCAqbmdUZW1wbGF0ZU91dGxldD1cImN1c3RvbVRvb2xiYXIgPyBjdXN0b21Ub29sYmFyIDogZGVmYXVsdFRvb2xiYXJcIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8ZGl2IGlkPVwibG9hZGluZ0JhclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2xpbW1lclwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRvb2xiYXI+XHJcbiAgPGRpdiBpZD1cInRvb2xiYXJWaWV3ZXJcIj5cclxuICAgIDxkaXYgaWQ9XCJ0b29sYmFyVmlld2VyTGVmdFwiPlxyXG4gICAgICA8cGRmLXRvZ2dsZS1zaWRlYmFyIFtzaG93U2lkZWJhckJ1dHRvbl09XCJzaG93U2lkZWJhckJ1dHRvblwiPjwvcGRmLXRvZ2dsZS1zaWRlYmFyPlxyXG4gICAgICA8cGRmLWZpbmQtYnV0dG9uIFtzaG93RmluZEJ1dHRvbl09XCJzaG93RmluZEJ1dHRvblwiIFt0ZXh0TGF5ZXJdPVwidGV4dExheWVyXCI+PC9wZGYtZmluZC1idXR0b24+XHJcbiAgICAgIDxwZGYtcGFnaW5nLWFyZWEgW3Nob3dQYWdpbmdCdXR0b25zXT1cInNob3dQYWdpbmdCdXR0b25zXCI+PC9wZGYtcGFnaW5nLWFyZWE+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxwZGYtem9vbS10b29sYmFyIFtzaG93Wm9vbUJ1dHRvbnNdPVwic2hvd1pvb21CdXR0b25zXCIgW3pvb21MZXZlbHNdPVwiem9vbUxldmVsc1wiPjwvcGRmLXpvb20tdG9vbGJhcj5cclxuICAgIDxkaXYgaWQ9XCJ0b29sYmFyVmlld2VyUmlnaHRcIj5cclxuXHJcblxyXG4gICAgICA8cGRmLWhhbmQtdG9vbCBbc2hvd0hhbmRUb29sQnV0dG9uXT1cInNob3dIYW5kVG9vbEJ1dHRvblwiPjwvcGRmLWhhbmQtdG9vbD5cclxuICAgICAgPHBkZi1zZWxlY3QtdG9vbCBbc2hvd1NlbGVjdFRvb2xCdXR0b25dPVwic2hvd0hhbmRUb29sQnV0dG9uXCI+PC9wZGYtc2VsZWN0LXRvb2w+XHJcbiAgICAgIDxwZGYtcm90YXRlLXBhZ2UgW3Nob3dSb3RhdGVCdXR0b25dPVwic2hvd1JvdGF0ZUJ1dHRvblwiIFtjbG9ja3dpc2VdPVwidHJ1ZVwiIFtjb3VudGVyQ2xvY2t3aXNlXT1cImZhbHNlXCI+XHJcbiAgICAgIDwvcGRmLXJvdGF0ZS1wYWdlPlxyXG4gICAgICA8cGRmLXJvdGF0ZS1wYWdlIFtzaG93Um90YXRlQnV0dG9uXT1cInNob3dSb3RhdGVCdXR0b25cIiBbY2xvY2t3aXNlXT1cImZhbHNlXCIgW2NvdW50ZXJDbG9ja3dpc2VdPVwidHJ1ZVwiPlxyXG4gICAgICA8L3BkZi1yb3RhdGUtcGFnZT5cclxuICAgICAgPHBkZi1wcmVzZW50YXRpb24tbW9kZSBbc2hvd1ByZXNlbnRhdGlvbk1vZGVCdXR0b25dPVwic2hvd1ByZXNlbnRhdGlvbk1vZGVCdXR0b25cIj48L3BkZi1wcmVzZW50YXRpb24tbW9kZT5cclxuICAgICAgPHBkZi1vcGVuLWZpbGUgW3Nob3dPcGVuRmlsZUJ1dHRvbl09XCJzaG93T3BlbkZpbGVCdXR0b25cIj48L3BkZi1vcGVuLWZpbGU+XHJcbiAgICAgIDxwZGYtcHJpbnQgW3Nob3dQcmludEJ1dHRvbl09XCJzaG93UHJpbnRCdXR0b25cIj48L3BkZi1wcmludD5cclxuICAgICAgPHBkZi1kb3dubG9hZCBbc2hvd0Rvd25sb2FkQnV0dG9uXT1cInNob3dEb3dubG9hZEJ1dHRvblwiPjwvcGRmLWRvd25sb2FkPlxyXG5cclxuICAgICAgPHBkZi1lZGl0b3IgW3Nob3dFZGl0b3JdPVwic2hvd0VkaXRvclwiPjwvcGRmLWVkaXRvcj5cclxuICAgICAgPHBkZi10b2dnbGUtc2Vjb25kYXJ5LXRvb2xiYXIgW3Nob3dTZWNvbmRhcnlUb29sYmFyQnV0dG9uXT1cInNob3dTZWNvbmRhcnlUb29sYmFyQnV0dG9uXCI+XHJcbiAgICAgIDwvcGRmLXRvZ2dsZS1zZWNvbmRhcnktdG9vbGJhcj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19
import { Component, Input, TemplateRef } from '@angular/core';
import { getVersionSuffix, pdfDefaultOptions } from '../../options/pdf-default-options';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./pdf-find-input-area/pdf-find-input-area.component";
import * as i3 from "./pdf-findbar-options-one-container/pdf-find-highlight-all/pdf-find-highlight-all.component";
import * as i4 from "./pdf-findbar-options-one-container/pdf-find-match-case/pdf-find-match-case.component";
import * as i5 from "./pdf-find-current-page-only/pdf-find-current-page-only.component";
import * as i6 from "./pdf-find-range/pdf-find-range.component";
import * as i7 from "./pdf-findbar-options-two-container/pdf-find-entire-word/pdf-find-entire-word.component";
import * as i8 from "./pdf-findbar-options-two-container/pdf-find-entire-phrase/pdf-find-entire-phrase.component";
import * as i9 from "./pdf-findbar-options-three-container/pdf-find-ignore-accents/pdf-find-ignore-accents.component";
import * as i10 from "./pdf-findbar-options-three-container/pdf-find-fuzzily/pdf-find-fuzzily.component";
import * as i11 from "./pdf-findbar-options-three-container/pdf-find-results-count/pdf-find-results-count.component";
import * as i12 from "./pdf-findbar-message-container/pdf-findbar-message-container.component";
function PdfFindbarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementContainer(1, 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const _r2 = i0.ɵɵreference(4);
    i0.ɵɵstyleProp("transform", "scale(" + ctx_r1.mobileFriendlyZoomScale + ")")("transform-origin", "left center")("left", ctx_r1.findbarLeft)("top", ctx_r1.findbarTop);
    i0.ɵɵclassProp("invisible", !ctx_r1.showFindButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.customFindbarButtons ? ctx_r1.customFindbarButtons : _r2);
} }
function PdfFindbarComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "pdf-find-input-area", 4)(1, "pdf-find-highlight-all")(2, "pdf-find-match-case")(3, "pdf-find-current-page-only")(4, "pdf-find-range")(5, "pdf-find-entire-word")(6, "pdf-find-entire-phrase")(7, "pdf-find-ignore-accents")(8, "pdf-find-fuzzily")(9, "pdf-find-results-count")(10, "pdf-findbar-message-container");
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("customFindbarInputArea", ctx_r3.customFindbarInputArea);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("hidden", !ctx_r3.showFindHighlightAll);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("hidden", !ctx_r3.showFindMatchCase);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("hidden", !ctx_r3.showFindCurrentPageOnly);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("hidden", !ctx_r3.showFindPageRange);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("hidden", !ctx_r3.showFindEntireWord);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("hidden", !ctx_r3.showFindEntirePhrase);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("hidden", !ctx_r3.showFindIgnoreAccents);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("hidden", !ctx_r3.showFindFuzzySearch);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("hidden", !ctx_r3.showFindResultsCount);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("hidden", !ctx_r3.showFindMessages);
} }
export class PdfFindbarComponent {
    constructor() {
        this.showFindButton = true;
        this.showFindHighlightAll = true;
        this.showFindMatchCase = true;
        this.showFindCurrentPageOnly = true;
        this.showFindPageRange = true;
        this.showFindEntireWord = true;
        this.showFindEntirePhrase = true;
        this.showFindIgnoreAccents = true;
        this.showFindFuzzySearch = true;
        this.showFindResultsCount = true;
        this.showFindMessages = true;
        this.pdfJsVersion = getVersionSuffix(pdfDefaultOptions.assetsFolder);
    }
}
/** @nocollapse */ PdfFindbarComponent.ɵfac = function PdfFindbarComponent_Factory(t) { return new (t || PdfFindbarComponent)(); };
/** @nocollapse */ PdfFindbarComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfFindbarComponent, selectors: [["pdf-findbar"]], inputs: { showFindButton: "showFindButton", mobileFriendlyZoomScale: "mobileFriendlyZoomScale", findbarLeft: "findbarLeft", findbarTop: "findbarTop", customFindbarInputArea: "customFindbarInputArea", customFindbar: "customFindbar", customFindbarButtons: "customFindbarButtons", showFindHighlightAll: "showFindHighlightAll", showFindMatchCase: "showFindMatchCase", showFindCurrentPageOnly: "showFindCurrentPageOnly", showFindPageRange: "showFindPageRange", showFindEntireWord: "showFindEntireWord", showFindEntirePhrase: "showFindEntirePhrase", showFindIgnoreAccents: "showFindIgnoreAccents", showFindFuzzySearch: "showFindFuzzySearch", showFindResultsCount: "showFindResultsCount", showFindMessages: "showFindMessages" }, decls: 5, vars: 1, consts: [[3, "ngTemplateOutlet"], ["defaultFindbar", ""], ["defaultFindbarButtons", ""], ["id", "findbar", 1, "findbar", "hidden", "doorHanger"], [3, "customFindbarInputArea"]], template: function PdfFindbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainer(0, 0);
        i0.ɵɵtemplate(1, PdfFindbarComponent_ng_template_1_Template, 2, 11, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, PdfFindbarComponent_ng_template_3_Template, 11, 21, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.customFindbar ? ctx.customFindbar : _r0);
    } }, directives: [i1.NgTemplateOutlet, i2.PdfFindInputAreaComponent, i3.PdfFindHighlightAllComponent, i4.PdfFindMatchCaseComponent, i5.PdfFindCurrentPageOnlyComponent, i6.PdfFindRangeComponent, i7.PdfFindEntireWordComponent, i8.PdfFindMultipleSearchTextsComponent, i9.PdfFindIgnoreAccentsComponent, i10.PdfFindFuzzilyComponent, i11.PdfFindResultsCountComponent, i12.PdfFindbarMessageContainerComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfFindbarComponent, [{
        type: Component,
        args: [{ selector: 'pdf-findbar', template: "<ng-container [ngTemplateOutlet]=\"customFindbar ? customFindbar : defaultFindbar\">\r\n</ng-container>\r\n\r\n<ng-template #defaultFindbar>\r\n  <div\r\n    class=\"findbar hidden doorHanger\"\r\n    [class.invisible]=\"!showFindButton\"\r\n    id=\"findbar\"\r\n    [style.transform]=\"'scale(' + mobileFriendlyZoomScale + ')'\"\r\n    [style.transformOrigin]=\"'left center'\"\r\n    [style.left]=\"findbarLeft\"\r\n    [style.top]=\"findbarTop\"\r\n  >\r\n    <ng-container [ngTemplateOutlet]=\"customFindbarButtons ? customFindbarButtons : defaultFindbarButtons\"> </ng-container>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #defaultFindbarButtons>\r\n  <pdf-find-input-area [customFindbarInputArea]=\"customFindbarInputArea\"></pdf-find-input-area>\r\n  <pdf-find-highlight-all [class.hidden]=\"!showFindHighlightAll\"></pdf-find-highlight-all>\r\n  <pdf-find-match-case [class.hidden]=\"!showFindMatchCase\"></pdf-find-match-case>\r\n  <pdf-find-current-page-only [class.hidden]=\"!showFindCurrentPageOnly\"></pdf-find-current-page-only>\r\n  <pdf-find-range [class.hidden]=\"!showFindPageRange\"></pdf-find-range>\r\n  <pdf-find-entire-word [class.hidden]=\"!showFindEntireWord\"></pdf-find-entire-word>\r\n  <pdf-find-entire-phrase [class.hidden]=\"!showFindEntirePhrase\"></pdf-find-entire-phrase>\r\n  <pdf-find-ignore-accents [class.hidden]=\"!showFindIgnoreAccents\"></pdf-find-ignore-accents>\r\n  <pdf-find-fuzzily [class.hidden]=\"!showFindFuzzySearch\"></pdf-find-fuzzily>\r\n  <pdf-find-results-count [class.hidden]=\"!showFindResultsCount\"></pdf-find-results-count>\r\n  <pdf-findbar-message-container [class.hidden]=\"!showFindMessages\"></pdf-findbar-message-container>\r\n</ng-template>\r\n", styles: [""] }]
    }], null, { showFindButton: [{
            type: Input
        }], mobileFriendlyZoomScale: [{
            type: Input
        }], findbarLeft: [{
            type: Input
        }], findbarTop: [{
            type: Input
        }], customFindbarInputArea: [{
            type: Input
        }], customFindbar: [{
            type: Input
        }], customFindbarButtons: [{
            type: Input
        }], showFindHighlightAll: [{
            type: Input
        }], showFindMatchCase: [{
            type: Input
        }], showFindCurrentPageOnly: [{
            type: Input
        }], showFindPageRange: [{
            type: Input
        }], showFindEntireWord: [{
            type: Input
        }], showFindEntirePhrase: [{
            type: Input
        }], showFindIgnoreAccents: [{
            type: Input
        }], showFindFuzzySearch: [{
            type: Input
        }], showFindResultsCount: [{
            type: Input
        }], showFindMessages: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWZpbmRiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7Ozs7Ozs7Ozs7OztJQ0d0Riw4QkFRQztJQUNDLDJCQUF1SDtJQUN2SCxpQkFBTTs7OztJQU5OLDRFQUE0RCxtQ0FBQSw0QkFBQSwwQkFBQTtJQUY1RCxtREFBbUM7SUFPckIsZUFBd0Y7SUFBeEYsa0dBQXdGOzs7SUFLeEcseUNBQTZGLDZCQUFBLDBCQUFBLGlDQUFBLHFCQUFBLDJCQUFBLDZCQUFBLDhCQUFBLHVCQUFBLDZCQUFBLHFDQUFBOzs7SUFBeEUsc0VBQWlEO0lBQzlDLGVBQXNDO0lBQXRDLHNEQUFzQztJQUN6QyxlQUFtQztJQUFuQyxtREFBbUM7SUFDNUIsZUFBeUM7SUFBekMseURBQXlDO0lBQ3JELGVBQW1DO0lBQW5DLG1EQUFtQztJQUM3QixlQUFvQztJQUFwQyxvREFBb0M7SUFDbEMsZUFBc0M7SUFBdEMsc0RBQXNDO0lBQ3JDLGVBQXVDO0lBQXZDLHVEQUF1QztJQUM5QyxlQUFxQztJQUFyQyxxREFBcUM7SUFDL0IsZUFBc0M7SUFBdEMsc0RBQXNDO0lBQy9CLGVBQWtDO0lBQWxDLGtEQUFrQzs7QURwQm5FLE1BQU0sT0FBTyxtQkFBbUI7SUFMaEM7UUFPUyxtQkFBYyxHQUFHLElBQUksQ0FBQztRQXNCdEIseUJBQW9CLEdBQUcsSUFBSSxDQUFDO1FBRzVCLHNCQUFpQixHQUFHLElBQUksQ0FBQztRQUd6Qiw0QkFBdUIsR0FBRyxJQUFJLENBQUM7UUFHL0Isc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBR3pCLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUcxQix5QkFBb0IsR0FBRyxJQUFJLENBQUM7UUFHNUIsMEJBQXFCLEdBQUcsSUFBSSxDQUFDO1FBRzdCLHdCQUFtQixHQUFHLElBQUksQ0FBQztRQUczQix5QkFBb0IsR0FBRyxJQUFJLENBQUM7UUFHNUIscUJBQWdCLEdBQUcsSUFBSSxDQUFDO1FBRXhCLGlCQUFZLEdBQUcsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7S0FDeEU7O3lHQXREWSxtQkFBbUI7cUdBQW5CLG1CQUFtQjtRQ1JoQywyQkFDZTtRQUVmLHNIQVljO1FBRWQsdUhBWWM7OztRQTdCQSw4RUFBbUU7O3VGRFFwRSxtQkFBbUI7Y0FML0IsU0FBUzsyQkFDRSxhQUFhO2dCQU1oQixjQUFjO2tCQURwQixLQUFLO1lBSUMsdUJBQXVCO2tCQUQ3QixLQUFLO1lBSUMsV0FBVztrQkFEakIsS0FBSztZQUlDLFVBQVU7a0JBRGhCLEtBQUs7WUFLQyxzQkFBc0I7a0JBRDVCLEtBQUs7WUFJQyxhQUFhO2tCQURuQixLQUFLO1lBSUMsb0JBQW9CO2tCQUQxQixLQUFLO1lBSUMsb0JBQW9CO2tCQUQxQixLQUFLO1lBSUMsaUJBQWlCO2tCQUR2QixLQUFLO1lBSUMsdUJBQXVCO2tCQUQ3QixLQUFLO1lBSUMsaUJBQWlCO2tCQUR2QixLQUFLO1lBSUMsa0JBQWtCO2tCQUR4QixLQUFLO1lBSUMsb0JBQW9CO2tCQUQxQixLQUFLO1lBSUMscUJBQXFCO2tCQUQzQixLQUFLO1lBSUMsbUJBQW1CO2tCQUR6QixLQUFLO1lBSUMsb0JBQW9CO2tCQUQxQixLQUFLO1lBSUMsZ0JBQWdCO2tCQUR0QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZ2V0VmVyc2lvblN1ZmZpeCwgcGRmRGVmYXVsdE9wdGlvbnMgfSBmcm9tICcuLi8uLi9vcHRpb25zL3BkZi1kZWZhdWx0LW9wdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtZmluZGJhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1maW5kYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wZGYtZmluZGJhci5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZkZpbmRiYXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGaW5kQnV0dG9uID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbW9iaWxlRnJpZW5kbHlab29tU2NhbGU6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZmluZGJhckxlZnQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZmluZGJhclRvcDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG5cclxuICAvKiBVSSB0ZW1wbGF0ZXMgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjdXN0b21GaW5kYmFySW5wdXRBcmVhOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjdXN0b21GaW5kYmFyOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjdXN0b21GaW5kYmFyQnV0dG9uczogVGVtcGxhdGVSZWY8YW55PiAgfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGaW5kSGlnaGxpZ2h0QWxsID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0ZpbmRNYXRjaENhc2UgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZEN1cnJlbnRQYWdlT25seSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGaW5kUGFnZVJhbmdlID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0ZpbmRFbnRpcmVXb3JkID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0ZpbmRFbnRpcmVQaHJhc2UgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZElnbm9yZUFjY2VudHMgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZEZ1enp5U2VhcmNoID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0ZpbmRSZXN1bHRzQ291bnQgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZE1lc3NhZ2VzID0gdHJ1ZTtcclxuXHJcbiAgcHVibGljIHBkZkpzVmVyc2lvbiA9IGdldFZlcnNpb25TdWZmaXgocGRmRGVmYXVsdE9wdGlvbnMuYXNzZXRzRm9sZGVyKTtcclxufVxyXG4iLCI8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1c3RvbUZpbmRiYXIgPyBjdXN0b21GaW5kYmFyIDogZGVmYXVsdEZpbmRiYXJcIj5cclxuPC9uZy1jb250YWluZXI+XHJcblxyXG48bmctdGVtcGxhdGUgI2RlZmF1bHRGaW5kYmFyPlxyXG4gIDxkaXZcclxuICAgIGNsYXNzPVwiZmluZGJhciBoaWRkZW4gZG9vckhhbmdlclwiXHJcbiAgICBbY2xhc3MuaW52aXNpYmxlXT1cIiFzaG93RmluZEJ1dHRvblwiXHJcbiAgICBpZD1cImZpbmRiYXJcIlxyXG4gICAgW3N0eWxlLnRyYW5zZm9ybV09XCInc2NhbGUoJyArIG1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlICsgJyknXCJcclxuICAgIFtzdHlsZS50cmFuc2Zvcm1PcmlnaW5dPVwiJ2xlZnQgY2VudGVyJ1wiXHJcbiAgICBbc3R5bGUubGVmdF09XCJmaW5kYmFyTGVmdFwiXHJcbiAgICBbc3R5bGUudG9wXT1cImZpbmRiYXJUb3BcIlxyXG4gID5cclxuICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tRmluZGJhckJ1dHRvbnMgPyBjdXN0b21GaW5kYmFyQnV0dG9ucyA6IGRlZmF1bHRGaW5kYmFyQnV0dG9uc1wiPiA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlICNkZWZhdWx0RmluZGJhckJ1dHRvbnM+XHJcbiAgPHBkZi1maW5kLWlucHV0LWFyZWEgW2N1c3RvbUZpbmRiYXJJbnB1dEFyZWFdPVwiY3VzdG9tRmluZGJhcklucHV0QXJlYVwiPjwvcGRmLWZpbmQtaW5wdXQtYXJlYT5cclxuICA8cGRmLWZpbmQtaGlnaGxpZ2h0LWFsbCBbY2xhc3MuaGlkZGVuXT1cIiFzaG93RmluZEhpZ2hsaWdodEFsbFwiPjwvcGRmLWZpbmQtaGlnaGxpZ2h0LWFsbD5cclxuICA8cGRmLWZpbmQtbWF0Y2gtY2FzZSBbY2xhc3MuaGlkZGVuXT1cIiFzaG93RmluZE1hdGNoQ2FzZVwiPjwvcGRmLWZpbmQtbWF0Y2gtY2FzZT5cclxuICA8cGRmLWZpbmQtY3VycmVudC1wYWdlLW9ubHkgW2NsYXNzLmhpZGRlbl09XCIhc2hvd0ZpbmRDdXJyZW50UGFnZU9ubHlcIj48L3BkZi1maW5kLWN1cnJlbnQtcGFnZS1vbmx5PlxyXG4gIDxwZGYtZmluZC1yYW5nZSBbY2xhc3MuaGlkZGVuXT1cIiFzaG93RmluZFBhZ2VSYW5nZVwiPjwvcGRmLWZpbmQtcmFuZ2U+XHJcbiAgPHBkZi1maW5kLWVudGlyZS13b3JkIFtjbGFzcy5oaWRkZW5dPVwiIXNob3dGaW5kRW50aXJlV29yZFwiPjwvcGRmLWZpbmQtZW50aXJlLXdvcmQ+XHJcbiAgPHBkZi1maW5kLWVudGlyZS1waHJhc2UgW2NsYXNzLmhpZGRlbl09XCIhc2hvd0ZpbmRFbnRpcmVQaHJhc2VcIj48L3BkZi1maW5kLWVudGlyZS1waHJhc2U+XHJcbiAgPHBkZi1maW5kLWlnbm9yZS1hY2NlbnRzIFtjbGFzcy5oaWRkZW5dPVwiIXNob3dGaW5kSWdub3JlQWNjZW50c1wiPjwvcGRmLWZpbmQtaWdub3JlLWFjY2VudHM+XHJcbiAgPHBkZi1maW5kLWZ1enppbHkgW2NsYXNzLmhpZGRlbl09XCIhc2hvd0ZpbmRGdXp6eVNlYXJjaFwiPjwvcGRmLWZpbmQtZnV6emlseT5cclxuICA8cGRmLWZpbmQtcmVzdWx0cy1jb3VudCBbY2xhc3MuaGlkZGVuXT1cIiFzaG93RmluZFJlc3VsdHNDb3VudFwiPjwvcGRmLWZpbmQtcmVzdWx0cy1jb3VudD5cclxuICA8cGRmLWZpbmRiYXItbWVzc2FnZS1jb250YWluZXIgW2NsYXNzLmhpZGRlbl09XCIhc2hvd0ZpbmRNZXNzYWdlc1wiPjwvcGRmLWZpbmRiYXItbWVzc2FnZS1jb250YWluZXI+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==
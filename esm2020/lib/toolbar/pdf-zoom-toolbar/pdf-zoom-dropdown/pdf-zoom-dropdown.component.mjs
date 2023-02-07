import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _c0 = ["sizeSelector"];
function PdfZoomDropdownComponent_option_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const level_r2 = ctx.$implicit;
    i0.ɵɵproperty("id", level_r2.id);
    i0.ɵɵattribute("value", level_r2.value)("data-l10n-id", level_r2.dataL10nId)("data-l10n-args", level_r2.dataL10nArgs);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", level_r2.displayValue, " ");
} }
export class PdfZoomDropdownComponent {
    constructor(element) {
        this.element = element;
        this._zoomLevels = [];
    }
    set zoomLevels(levels) {
        this._zoomLevels = levels.map((l) => this.valueToZoomLevel(l));
    }
    valueToZoomLevel(value) {
        if (value.toString().endsWith('%')) {
            value = value.toString().replace('%', '');
            value = Number(value) / 100;
        }
        const numericalValue = Number(value);
        if (!numericalValue) {
            const v = String(value);
            return {
                id: this.snakeToCamel(value + 'Option'),
                value: v,
                dataL10nId: 'page_scale_' + v.replace('page-', ''),
                dataL10nArgs: undefined,
                displayValue: v,
            };
        }
        const percentage = Math.round(numericalValue * 100);
        return {
            id: `scale_${percentage}`,
            value: String(numericalValue),
            dataL10nId: 'page_scale_percent',
            dataL10nArgs: `{ "scale": ${percentage} }`,
            displayValue: String(percentage) + '%',
        };
    }
    snakeToCamel(str) {
        // idea found here: https://hisk.io/javascript-snake-to-camel/
        return str.replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', ''));
    }
}
/** @nocollapse */ PdfZoomDropdownComponent.ɵfac = function PdfZoomDropdownComponent_Factory(t) { return new (t || PdfZoomDropdownComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
/** @nocollapse */ PdfZoomDropdownComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfZoomDropdownComponent, selectors: [["pdf-zoom-dropdown"]], viewQuery: function PdfZoomDropdownComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sizeSelector = _t.first);
    } }, inputs: { zoomLevels: "zoomLevels" }, decls: 5, vars: 1, consts: [["id", "scaleSelectContainer"], ["id", "scaleSelect", "title", "Zoom", "data-l10n-id", "zoom"], ["sizeSelector", ""], [3, "id", 4, "ngFor", "ngForOf"], ["id", "customScaleOption", "title", "", "value", "custom", "disabled", "disabled", "hidden", "true"], [3, "id"]], template: function PdfZoomDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0)(1, "select", 1, 2);
        i0.ɵɵtemplate(3, PdfZoomDropdownComponent_option_3_Template, 2, 5, "option", 3);
        i0.ɵɵelement(4, "option", 4);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx._zoomLevels);
    } }, directives: [i1.NgForOf, i2.NgSelectOption, i2.ɵNgSelectMultipleOption], styles: ["select[_ngcontent-%COMP%]{font-size:12px;height:26px;cursor:pointer;border-radius:2px;border-width:1px;border-style:solid;padding-top:0;padding-bottom:0}#customScaleOption[_ngcontent-%COMP%]{display:none}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfZoomDropdownComponent, [{
        type: Component,
        args: [{ selector: 'pdf-zoom-dropdown', template: "<span id=\"scaleSelectContainer\">\r\n  <select\r\n    id=\"scaleSelect\"\r\n    title=\"Zoom\"\r\n    data-l10n-id=\"zoom\"\r\n    #sizeSelector\r\n  >\r\n    <option *ngFor=\"let level of _zoomLevels\"\r\n      [id]=\"level.id\"\r\n      [attr.value]=\"level.value\"\r\n      [attr.data-l10n-id]=\"level.dataL10nId\"\r\n      [attr.data-l10n-args]=\"level.dataL10nArgs\">\r\n      {{level.displayValue}}\r\n    </option>\r\n    <option\r\n    id=\"customScaleOption\"\r\n    title=\"\"\r\n    value=\"custom\"\r\n    disabled=\"disabled\"\r\n    hidden=\"true\"\r\n  ></option>\r\n\r\n  </select>\r\n</span>\r\n", styles: ["select{font-size:12px;height:26px;cursor:pointer;border-radius:2px;border-width:1px;border-style:solid;padding-top:0;padding-bottom:0}#customScaleOption{display:none}\n"] }]
    }], function () { return [{ type: i0.ElementRef }]; }, { zoomLevels: [{
            type: Input
        }], sizeSelector: [{
            type: ViewChild,
            args: ['sizeSelector']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXpvb20tZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi16b29tLXRvb2xiYXIvcGRmLXpvb20tZHJvcGRvd24vcGRmLXpvb20tZHJvcGRvd24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi16b29tLXRvb2xiYXIvcGRmLXpvb20tZHJvcGRvd24vcGRmLXpvb20tZHJvcGRvd24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lDT3BFLGlDQUk2QztJQUMzQyxZQUNGO0lBQUEsaUJBQVM7OztJQUxQLGdDQUFlO0lBQ2YsdUNBQTBCLHFDQUFBLHlDQUFBO0lBRzFCLGVBQ0Y7SUFERSxzREFDRjs7QURDSixNQUFNLE9BQU8sd0JBQXdCO0lBVW5DLFlBQW9CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFUaEMsZ0JBQVcsR0FBcUIsRUFBRSxDQUFDO0lBU0EsQ0FBQztJQVAzQyxJQUNXLFVBQVUsQ0FBQyxNQUE4QjtRQUNsRCxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFNTyxnQkFBZ0IsQ0FBQyxLQUFzQjtRQUM3QyxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbEMsS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQzdCO1FBQ0QsTUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDbkIsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hCLE9BQU87Z0JBQ0wsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztnQkFDdkMsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsVUFBVSxFQUFFLGFBQWEsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7Z0JBQ2xELFlBQVksRUFBRSxTQUFTO2dCQUN2QixZQUFZLEVBQUUsQ0FBQzthQUNoQixDQUFDO1NBQ0g7UUFDRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNwRCxPQUFPO1lBQ0wsRUFBRSxFQUFFLFNBQVMsVUFBVSxFQUFFO1lBQ3pCLEtBQUssRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDO1lBQzdCLFVBQVUsRUFBRSxvQkFBb0I7WUFDaEMsWUFBWSxFQUFFLGNBQWMsVUFBVSxJQUFJO1lBQzFDLFlBQVksRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRztTQUN2QyxDQUFDO0lBQ0osQ0FBQztJQUVPLFlBQVksQ0FBQyxHQUFXO1FBQzlCLDhEQUE4RDtRQUM5RCxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdkcsQ0FBQzs7bUhBekNVLHdCQUF3QjswR0FBeEIsd0JBQXdCOzs7Ozs7UUNkckMsK0JBQWdDLG1CQUFBO1FBTzVCLCtFQU1TO1FBQ1QsNEJBTVE7UUFFVixpQkFBUyxFQUFBOztRQWZtQixlQUFjO1FBQWQseUNBQWM7O3VGRE8vQix3QkFBd0I7Y0FMcEMsU0FBUzsyQkFDRSxtQkFBbUI7NkRBUWxCLFVBQVU7a0JBRHBCLEtBQUs7WUFLcUIsWUFBWTtrQkFBdEMsU0FBUzttQkFBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbnRlcmZhY2UgWm9vbUxldmVsIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIGRhdGFMMTBuSWQ6IHN0cmluZztcclxuICBkYXRhTDEwbkFyZ3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG4gIGRpc3BsYXlWYWx1ZTogc3RyaW5nO1xyXG59XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGRmLXpvb20tZHJvcGRvd24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtem9vbS1kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLXpvb20tZHJvcGRvd24uY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmWm9vbURyb3Bkb3duQ29tcG9uZW50IHtcclxuICBwdWJsaWMgX3pvb21MZXZlbHM6IEFycmF5PFpvb21MZXZlbD4gPSBbXTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IHpvb21MZXZlbHMobGV2ZWxzOiBBcnJheTxzdHJpbmcgfCBudW1iZXI+KSB7XHJcbiAgICB0aGlzLl96b29tTGV2ZWxzID0gbGV2ZWxzLm1hcCgobCkgPT4gdGhpcy52YWx1ZVRvWm9vbUxldmVsKGwpKTtcclxuICB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3NpemVTZWxlY3RvcicpIHNpemVTZWxlY3RvcjogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHt9XHJcblxyXG4gIHByaXZhdGUgdmFsdWVUb1pvb21MZXZlbCh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogWm9vbUxldmVsIHtcclxuICAgIGlmICh2YWx1ZS50b1N0cmluZygpLmVuZHNXaXRoKCclJykpIHtcclxuICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpLnJlcGxhY2UoJyUnLCAnJyk7XHJcbiAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKSAvIDEwMDtcclxuICAgIH1cclxuICAgIGNvbnN0IG51bWVyaWNhbFZhbHVlID0gTnVtYmVyKHZhbHVlKTtcclxuICAgIGlmICghbnVtZXJpY2FsVmFsdWUpIHtcclxuICAgICAgY29uc3QgdiA9IFN0cmluZyh2YWx1ZSk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQ6IHRoaXMuc25ha2VUb0NhbWVsKHZhbHVlICsgJ09wdGlvbicpLFxyXG4gICAgICAgIHZhbHVlOiB2LFxyXG4gICAgICAgIGRhdGFMMTBuSWQ6ICdwYWdlX3NjYWxlXycgKyB2LnJlcGxhY2UoJ3BhZ2UtJywgJycpLFxyXG4gICAgICAgIGRhdGFMMTBuQXJnczogdW5kZWZpbmVkLFxyXG4gICAgICAgIGRpc3BsYXlWYWx1ZTogdixcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSBNYXRoLnJvdW5kKG51bWVyaWNhbFZhbHVlICogMTAwKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkOiBgc2NhbGVfJHtwZXJjZW50YWdlfWAsXHJcbiAgICAgIHZhbHVlOiBTdHJpbmcobnVtZXJpY2FsVmFsdWUpLFxyXG4gICAgICBkYXRhTDEwbklkOiAncGFnZV9zY2FsZV9wZXJjZW50JyxcclxuICAgICAgZGF0YUwxMG5BcmdzOiBgeyBcInNjYWxlXCI6ICR7cGVyY2VudGFnZX0gfWAsXHJcbiAgICAgIGRpc3BsYXlWYWx1ZTogU3RyaW5nKHBlcmNlbnRhZ2UpICsgJyUnLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc25ha2VUb0NhbWVsKHN0cjogc3RyaW5nKSB7XHJcbiAgICAvLyBpZGVhIGZvdW5kIGhlcmU6IGh0dHBzOi8vaGlzay5pby9qYXZhc2NyaXB0LXNuYWtlLXRvLWNhbWVsL1xyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy1fXVthLXpdKS9nLCAoZ3JvdXApID0+IGdyb3VwLnRvVXBwZXJDYXNlKCkucmVwbGFjZSgnLScsICcnKS5yZXBsYWNlKCdfJywgJycpKTtcclxuICB9XHJcbn1cclxuIiwiPHNwYW4gaWQ9XCJzY2FsZVNlbGVjdENvbnRhaW5lclwiPlxyXG4gIDxzZWxlY3RcclxuICAgIGlkPVwic2NhbGVTZWxlY3RcIlxyXG4gICAgdGl0bGU9XCJab29tXCJcclxuICAgIGRhdGEtbDEwbi1pZD1cInpvb21cIlxyXG4gICAgI3NpemVTZWxlY3RvclxyXG4gID5cclxuICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGxldmVsIG9mIF96b29tTGV2ZWxzXCJcclxuICAgICAgW2lkXT1cImxldmVsLmlkXCJcclxuICAgICAgW2F0dHIudmFsdWVdPVwibGV2ZWwudmFsdWVcIlxyXG4gICAgICBbYXR0ci5kYXRhLWwxMG4taWRdPVwibGV2ZWwuZGF0YUwxMG5JZFwiXHJcbiAgICAgIFthdHRyLmRhdGEtbDEwbi1hcmdzXT1cImxldmVsLmRhdGFMMTBuQXJnc1wiPlxyXG4gICAgICB7e2xldmVsLmRpc3BsYXlWYWx1ZX19XHJcbiAgICA8L29wdGlvbj5cclxuICAgIDxvcHRpb25cclxuICAgIGlkPVwiY3VzdG9tU2NhbGVPcHRpb25cIlxyXG4gICAgdGl0bGU9XCJcIlxyXG4gICAgdmFsdWU9XCJjdXN0b21cIlxyXG4gICAgZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXHJcbiAgICBoaWRkZW49XCJ0cnVlXCJcclxuICA+PC9vcHRpb24+XHJcblxyXG4gIDwvc2VsZWN0PlxyXG48L3NwYW4+XHJcbiJdfQ==
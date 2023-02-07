import { Component, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
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
PdfZoomDropdownComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: PdfZoomDropdownComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
PdfZoomDropdownComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: PdfZoomDropdownComponent, selector: "pdf-zoom-dropdown", inputs: { zoomLevels: "zoomLevels" }, viewQueries: [{ propertyName: "sizeSelector", first: true, predicate: ["sizeSelector"], descendants: true }], ngImport: i0, template: "<span id=\"scaleSelectContainer\">\r\n  <select\r\n    id=\"scaleSelect\"\r\n    title=\"Zoom\"\r\n    data-l10n-id=\"zoom\"\r\n    #sizeSelector\r\n  >\r\n    <option *ngFor=\"let level of _zoomLevels\"\r\n      [id]=\"level.id\"\r\n      [attr.value]=\"level.value\"\r\n      [attr.data-l10n-id]=\"level.dataL10nId\"\r\n      [attr.data-l10n-args]=\"level.dataL10nArgs\">\r\n      {{level.displayValue}}\r\n    </option>\r\n    <option\r\n    id=\"customScaleOption\"\r\n    title=\"\"\r\n    value=\"custom\"\r\n    disabled=\"disabled\"\r\n    hidden=\"true\"\r\n  ></option>\r\n\r\n  </select>\r\n</span>\r\n", styles: ["select{font-size:12px;height:26px;cursor:pointer;border-radius:2px;border-width:1px;border-style:solid;padding-top:0;padding-bottom:0}#customScaleOption{display:none}\n"], directives: [{ type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { type: i2.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: PdfZoomDropdownComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-zoom-dropdown', template: "<span id=\"scaleSelectContainer\">\r\n  <select\r\n    id=\"scaleSelect\"\r\n    title=\"Zoom\"\r\n    data-l10n-id=\"zoom\"\r\n    #sizeSelector\r\n  >\r\n    <option *ngFor=\"let level of _zoomLevels\"\r\n      [id]=\"level.id\"\r\n      [attr.value]=\"level.value\"\r\n      [attr.data-l10n-id]=\"level.dataL10nId\"\r\n      [attr.data-l10n-args]=\"level.dataL10nArgs\">\r\n      {{level.displayValue}}\r\n    </option>\r\n    <option\r\n    id=\"customScaleOption\"\r\n    title=\"\"\r\n    value=\"custom\"\r\n    disabled=\"disabled\"\r\n    hidden=\"true\"\r\n  ></option>\r\n\r\n  </select>\r\n</span>\r\n", styles: ["select{font-size:12px;height:26px;cursor:pointer;border-radius:2px;border-width:1px;border-style:solid;padding-top:0;padding-bottom:0}#customScaleOption{display:none}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { zoomLevels: [{
                type: Input
            }], sizeSelector: [{
                type: ViewChild,
                args: ['sizeSelector']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXpvb20tZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi16b29tLXRvb2xiYXIvcGRmLXpvb20tZHJvcGRvd24vcGRmLXpvb20tZHJvcGRvd24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi16b29tLXRvb2xiYXIvcGRmLXpvb20tZHJvcGRvd24vcGRmLXpvb20tZHJvcGRvd24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBY3hFLE1BQU0sT0FBTyx3QkFBd0I7SUFVbkMsWUFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQVRoQyxnQkFBVyxHQUFxQixFQUFFLENBQUM7SUFTQSxDQUFDO0lBUDNDLElBQ1csVUFBVSxDQUFDLE1BQThCO1FBQ2xELElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQU1PLGdCQUFnQixDQUFDLEtBQXNCO1FBQzdDLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNsQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDMUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDN0I7UUFDRCxNQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNuQixNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEIsT0FBTztnQkFDTCxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO2dCQUN2QyxLQUFLLEVBQUUsQ0FBQztnQkFDUixVQUFVLEVBQUUsYUFBYSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztnQkFDbEQsWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCLFlBQVksRUFBRSxDQUFDO2FBQ2hCLENBQUM7U0FDSDtRQUNELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3BELE9BQU87WUFDTCxFQUFFLEVBQUUsU0FBUyxVQUFVLEVBQUU7WUFDekIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUM7WUFDN0IsVUFBVSxFQUFFLG9CQUFvQjtZQUNoQyxZQUFZLEVBQUUsY0FBYyxVQUFVLElBQUk7WUFDMUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHO1NBQ3ZDLENBQUM7SUFDSixDQUFDO0lBRU8sWUFBWSxDQUFDLEdBQVc7UUFDOUIsOERBQThEO1FBQzlELE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2RyxDQUFDOztzSEF6Q1Usd0JBQXdCOzBHQUF4Qix3QkFBd0IsNk1DZHJDLHVtQkF3QkE7NEZEVmEsd0JBQXdCO2tCQUxwQyxTQUFTOytCQUNFLG1CQUFtQjtpR0FRbEIsVUFBVTtzQkFEcEIsS0FBSztnQkFLcUIsWUFBWTtzQkFBdEMsU0FBUzt1QkFBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbnRlcmZhY2UgWm9vbUxldmVsIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIGRhdGFMMTBuSWQ6IHN0cmluZztcclxuICBkYXRhTDEwbkFyZ3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG4gIGRpc3BsYXlWYWx1ZTogc3RyaW5nO1xyXG59XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGRmLXpvb20tZHJvcGRvd24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtem9vbS1kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLXpvb20tZHJvcGRvd24uY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmWm9vbURyb3Bkb3duQ29tcG9uZW50IHtcclxuICBwdWJsaWMgX3pvb21MZXZlbHM6IEFycmF5PFpvb21MZXZlbD4gPSBbXTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IHpvb21MZXZlbHMobGV2ZWxzOiBBcnJheTxzdHJpbmcgfCBudW1iZXI+KSB7XHJcbiAgICB0aGlzLl96b29tTGV2ZWxzID0gbGV2ZWxzLm1hcCgobCkgPT4gdGhpcy52YWx1ZVRvWm9vbUxldmVsKGwpKTtcclxuICB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3NpemVTZWxlY3RvcicpIHNpemVTZWxlY3RvcjogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHt9XHJcblxyXG4gIHByaXZhdGUgdmFsdWVUb1pvb21MZXZlbCh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogWm9vbUxldmVsIHtcclxuICAgIGlmICh2YWx1ZS50b1N0cmluZygpLmVuZHNXaXRoKCclJykpIHtcclxuICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpLnJlcGxhY2UoJyUnLCAnJyk7XHJcbiAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKSAvIDEwMDtcclxuICAgIH1cclxuICAgIGNvbnN0IG51bWVyaWNhbFZhbHVlID0gTnVtYmVyKHZhbHVlKTtcclxuICAgIGlmICghbnVtZXJpY2FsVmFsdWUpIHtcclxuICAgICAgY29uc3QgdiA9IFN0cmluZyh2YWx1ZSk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQ6IHRoaXMuc25ha2VUb0NhbWVsKHZhbHVlICsgJ09wdGlvbicpLFxyXG4gICAgICAgIHZhbHVlOiB2LFxyXG4gICAgICAgIGRhdGFMMTBuSWQ6ICdwYWdlX3NjYWxlXycgKyB2LnJlcGxhY2UoJ3BhZ2UtJywgJycpLFxyXG4gICAgICAgIGRhdGFMMTBuQXJnczogdW5kZWZpbmVkLFxyXG4gICAgICAgIGRpc3BsYXlWYWx1ZTogdixcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSBNYXRoLnJvdW5kKG51bWVyaWNhbFZhbHVlICogMTAwKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkOiBgc2NhbGVfJHtwZXJjZW50YWdlfWAsXHJcbiAgICAgIHZhbHVlOiBTdHJpbmcobnVtZXJpY2FsVmFsdWUpLFxyXG4gICAgICBkYXRhTDEwbklkOiAncGFnZV9zY2FsZV9wZXJjZW50JyxcclxuICAgICAgZGF0YUwxMG5BcmdzOiBgeyBcInNjYWxlXCI6ICR7cGVyY2VudGFnZX0gfWAsXHJcbiAgICAgIGRpc3BsYXlWYWx1ZTogU3RyaW5nKHBlcmNlbnRhZ2UpICsgJyUnLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc25ha2VUb0NhbWVsKHN0cjogc3RyaW5nKSB7XHJcbiAgICAvLyBpZGVhIGZvdW5kIGhlcmU6IGh0dHBzOi8vaGlzay5pby9qYXZhc2NyaXB0LXNuYWtlLXRvLWNhbWVsL1xyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy1fXVthLXpdKS9nLCAoZ3JvdXApID0+IGdyb3VwLnRvVXBwZXJDYXNlKCkucmVwbGFjZSgnLScsICcnKS5yZXBsYWNlKCdfJywgJycpKTtcclxuICB9XHJcbn1cclxuIiwiPHNwYW4gaWQ9XCJzY2FsZVNlbGVjdENvbnRhaW5lclwiPlxyXG4gIDxzZWxlY3RcclxuICAgIGlkPVwic2NhbGVTZWxlY3RcIlxyXG4gICAgdGl0bGU9XCJab29tXCJcclxuICAgIGRhdGEtbDEwbi1pZD1cInpvb21cIlxyXG4gICAgI3NpemVTZWxlY3RvclxyXG4gID5cclxuICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGxldmVsIG9mIF96b29tTGV2ZWxzXCJcclxuICAgICAgW2lkXT1cImxldmVsLmlkXCJcclxuICAgICAgW2F0dHIudmFsdWVdPVwibGV2ZWwudmFsdWVcIlxyXG4gICAgICBbYXR0ci5kYXRhLWwxMG4taWRdPVwibGV2ZWwuZGF0YUwxMG5JZFwiXHJcbiAgICAgIFthdHRyLmRhdGEtbDEwbi1hcmdzXT1cImxldmVsLmRhdGFMMTBuQXJnc1wiPlxyXG4gICAgICB7e2xldmVsLmRpc3BsYXlWYWx1ZX19XHJcbiAgICA8L29wdGlvbj5cclxuICAgIDxvcHRpb25cclxuICAgIGlkPVwiY3VzdG9tU2NhbGVPcHRpb25cIlxyXG4gICAgdGl0bGU9XCJcIlxyXG4gICAgdmFsdWU9XCJjdXN0b21cIlxyXG4gICAgZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXHJcbiAgICBoaWRkZW49XCJ0cnVlXCJcclxuICA+PC9vcHRpb24+XHJcblxyXG4gIDwvc2VsZWN0PlxyXG48L3NwYW4+XHJcbiJdfQ==
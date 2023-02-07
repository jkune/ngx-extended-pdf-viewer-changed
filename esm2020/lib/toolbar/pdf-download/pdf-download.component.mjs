import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class PdfDownloadComponent {
    constructor() {
        this.showDownloadButton = true;
    }
}
PdfDownloadComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: PdfDownloadComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfDownloadComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: PdfDownloadComponent, selector: "pdf-download", inputs: { showDownloadButton: "showDownloadButton" }, ngImport: i0, template: "<button\r\n  type=\"button\"\r\n  id=\"download\"\r\n  class=\"toolbarButton hiddenSmallView\"\r\n  [class.invisible]=\"!showDownloadButton\"\r\n  title=\"Download\"\r\n  data-l10n-id=\"download\"\r\n>\r\n  <svg style=\"width:20px;height:20px\" viewBox=\"0 0 24 24\">\r\n    <path fill=\"currentColor\" d=\"M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,19L8,15H10.5V12H13.5V15H16L12,19Z\" />\r\n  </svg>\r\n  <span data-l10n-id=\"download_label\">Download</span>\r\n</button>\r\n", styles: [":host{margin-top:0}:host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: PdfDownloadComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-download', template: "<button\r\n  type=\"button\"\r\n  id=\"download\"\r\n  class=\"toolbarButton hiddenSmallView\"\r\n  [class.invisible]=\"!showDownloadButton\"\r\n  title=\"Download\"\r\n  data-l10n-id=\"download\"\r\n>\r\n  <svg style=\"width:20px;height:20px\" viewBox=\"0 0 24 24\">\r\n    <path fill=\"currentColor\" d=\"M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,19L8,15H10.5V12H13.5V15H16L12,19Z\" />\r\n  </svg>\r\n  <span data-l10n-id=\"download_label\">Download</span>\r\n</button>\r\n", styles: [":host{margin-top:0}:host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0}\n"] }]
        }], propDecorators: { showDownloadButton: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWRvd25sb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtZG93bmxvYWQvcGRmLWRvd25sb2FkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtZG93bmxvYWQvcGRmLWRvd25sb2FkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU9qRCxNQUFNLE9BQU8sb0JBQW9CO0lBTGpDO1FBT1MsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO0tBQ2xDOztrSEFIWSxvQkFBb0I7c0dBQXBCLG9CQUFvQiwwR0NQakMsNmdCQWFBOzRGRE5hLG9CQUFvQjtrQkFMaEMsU0FBUzsrQkFDRSxjQUFjOzhCQU1qQixrQkFBa0I7c0JBRHhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BkZi1kb3dubG9hZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1kb3dubG9hZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLWRvd25sb2FkLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZkRvd25sb2FkQ29tcG9uZW50IHtcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RG93bmxvYWRCdXR0b24gPSB0cnVlO1xyXG59XHJcbiIsIjxidXR0b25cclxuICB0eXBlPVwiYnV0dG9uXCJcclxuICBpZD1cImRvd25sb2FkXCJcclxuICBjbGFzcz1cInRvb2xiYXJCdXR0b24gaGlkZGVuU21hbGxWaWV3XCJcclxuICBbY2xhc3MuaW52aXNpYmxlXT1cIiFzaG93RG93bmxvYWRCdXR0b25cIlxyXG4gIHRpdGxlPVwiRG93bmxvYWRcIlxyXG4gIGRhdGEtbDEwbi1pZD1cImRvd25sb2FkXCJcclxuPlxyXG4gIDxzdmcgc3R5bGU9XCJ3aWR0aDoyMHB4O2hlaWdodDoyMHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTQsMkwyMCw4VjIwQTIsMiAwIDAsMSAxOCwyMkg2QTIsMiAwIDAsMSA0LDIwVjRBMiwyIDAgMCwxIDYsMkgxNE0xOCwyMFY5SDEzVjRINlYyMEgxOE0xMiwxOUw4LDE1SDEwLjVWMTJIMTMuNVYxNUgxNkwxMiwxOVpcIiAvPlxyXG4gIDwvc3ZnPlxyXG4gIDxzcGFuIGRhdGEtbDEwbi1pZD1cImRvd25sb2FkX2xhYmVsXCI+RG93bmxvYWQ8L3NwYW4+XHJcbjwvYnV0dG9uPlxyXG4iXX0=
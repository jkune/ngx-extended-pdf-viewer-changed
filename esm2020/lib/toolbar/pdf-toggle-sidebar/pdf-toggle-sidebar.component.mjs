import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class PdfToggleSidebarComponent {
    constructor() {
        this.showSidebarButton = true;
    }
}
PdfToggleSidebarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: PdfToggleSidebarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfToggleSidebarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: PdfToggleSidebarComponent, selector: "pdf-toggle-sidebar", inputs: { showSidebarButton: "showSidebarButton" }, ngImport: i0, template: "<button\r\n  type=\"button\"\r\n  [class.invisible]=\"!showSidebarButton\"\r\n  id=\"sidebarToggle\"\r\n  title=\"Toggle Sidebar\"\r\n  class=\"toolbarButton\"\r\n  data-l10n-id=\"toggle_sidebar\"\r\n>\r\n  <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\r\n    <path fill=\"currentColor\" d=\"M3,9H17V7H3V9M3,13H17V11H3V13M3,17H17V15H3V17M19,17H21V15H19V17M19,7V9H21V7H19M19,13H21V11H19V13Z\" />\r\n  </svg>\r\n  <span data-l10n-id=\"toggle_sidebar_label\">Toggle Sidebar</span>\r\n</button>\r\n", styles: [":host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button#sidebarToggle{height:24px;width:24px;margin-right:5px!important}button{padding:0}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: PdfToggleSidebarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-toggle-sidebar', template: "<button\r\n  type=\"button\"\r\n  [class.invisible]=\"!showSidebarButton\"\r\n  id=\"sidebarToggle\"\r\n  title=\"Toggle Sidebar\"\r\n  class=\"toolbarButton\"\r\n  data-l10n-id=\"toggle_sidebar\"\r\n>\r\n  <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\r\n    <path fill=\"currentColor\" d=\"M3,9H17V7H3V9M3,13H17V11H3V13M3,17H17V15H3V17M19,17H21V15H19V17M19,7V9H21V7H19M19,13H21V11H19V13Z\" />\r\n  </svg>\r\n  <span data-l10n-id=\"toggle_sidebar_label\">Toggle Sidebar</span>\r\n</button>\r\n", styles: [":host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button#sidebarToggle{height:24px;width:24px;margin-right:5px!important}button{padding:0}\n"] }]
        }], propDecorators: { showSidebarButton: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXRvZ2dsZS1zaWRlYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtdG9nZ2xlLXNpZGViYXIvcGRmLXRvZ2dsZS1zaWRlYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtdG9nZ2xlLXNpZGViYXIvcGRmLXRvZ2dsZS1zaWRlYmFyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU9qRCxNQUFNLE9BQU8seUJBQXlCO0lBTHRDO1FBT1Msc0JBQWlCLEdBQUcsSUFBSSxDQUFDO0tBQ2pDOzt1SEFIWSx5QkFBeUI7MkdBQXpCLHlCQUF5Qiw4R0NQdEMsK2ZBYUE7NEZETmEseUJBQXlCO2tCQUxyQyxTQUFTOytCQUNFLG9CQUFvQjs4QkFNdkIsaUJBQWlCO3NCQUR2QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtdG9nZ2xlLXNpZGViYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtdG9nZ2xlLXNpZGViYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BkZi10b2dnbGUtc2lkZWJhci5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZGZUb2dnbGVTaWRlYmFyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93U2lkZWJhckJ1dHRvbiA9IHRydWU7XHJcbn1cclxuIiwiPGJ1dHRvblxyXG4gIHR5cGU9XCJidXR0b25cIlxyXG4gIFtjbGFzcy5pbnZpc2libGVdPVwiIXNob3dTaWRlYmFyQnV0dG9uXCJcclxuICBpZD1cInNpZGViYXJUb2dnbGVcIlxyXG4gIHRpdGxlPVwiVG9nZ2xlIFNpZGViYXJcIlxyXG4gIGNsYXNzPVwidG9vbGJhckJ1dHRvblwiXHJcbiAgZGF0YS1sMTBuLWlkPVwidG9nZ2xlX3NpZGViYXJcIlxyXG4+XHJcbiAgPHN2ZyBzdHlsZT1cIndpZHRoOjI0cHg7aGVpZ2h0OjI0cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zLDlIMTdWN0gzVjlNMywxM0gxN1YxMUgzVjEzTTMsMTdIMTdWMTVIM1YxN00xOSwxN0gyMVYxNUgxOVYxN00xOSw3VjlIMjFWN0gxOU0xOSwxM0gyMVYxMUgxOVYxM1pcIiAvPlxyXG4gIDwvc3ZnPlxyXG4gIDxzcGFuIGRhdGEtbDEwbi1pZD1cInRvZ2dsZV9zaWRlYmFyX2xhYmVsXCI+VG9nZ2xlIFNpZGViYXI8L3NwYW4+XHJcbjwvYnV0dG9uPlxyXG4iXX0=
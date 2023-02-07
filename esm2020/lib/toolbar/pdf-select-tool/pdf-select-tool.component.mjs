import { PdfCursorTools } from './../../options/pdf-cursor-tools';
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../pdf-notification-service";
export class PdfSelectToolComponent {
    constructor(notificationService) {
        this.notificationService = notificationService;
        this.showSelectToolButton = true;
        this.isSelected = true;
        const subscription = this.notificationService.onPDFJSInit.subscribe(() => {
            this.onPdfJsInit();
            subscription.unsubscribe();
        });
    }
    onPdfJsInit() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.on('cursortoolchanged', ({ tool }) => (this.isSelected = tool === PdfCursorTools.SELECT));
    }
    onClick() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('switchcursortool', { tool: PdfCursorTools.SELECT });
    }
}
PdfSelectToolComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: PdfSelectToolComponent, deps: [{ token: i1.PDFNotificationService }], target: i0.ɵɵFactoryTarget.Component });
PdfSelectToolComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: PdfSelectToolComponent, selector: "pdf-select-tool", inputs: { showSelectToolButton: "showSelectToolButton" }, ngImport: i0, template: "<button\r\n  (click)=\"onClick()\"\r\n  type=\"button\"\r\n  [class.invisible]=\"!showSelectToolButton\"\r\n  [class.toggled]=\"isSelected\"\r\n  id=\"primaryCursorSelectTool\"\r\n  class=\"toolbarButton hiddenXXLView\"\r\n  title=\"Enable text selection tool\"\r\n  data-l10n-id=\"cursor_text_select_tool\">\r\n  <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\r\n    <path fill=\"currentColor\" d=\"M2 4C2 2.89 2.9 2 4 2H7V4H4V7H2V4M22 4V7H20V4H17V2H20C21.1 2 22 2.89 22 4M2 20V17H4V20H7V22H4C2.9 22 2 21.11 2 20M10 2H14V4H10V2M10 20H14V22H10V20M2 10H4V14H2V10M18.5 13C20.4 13 22 14.6 22 16.5C22 19.1 18.5 23 18.5 23C18.5 23 15 19.1 15 16.5C15 14.6 16.6 13 18.5 13M18.5 17.8C19.2 17.8 19.8 17.2 19.7 16.6C19.7 16 19.1 15.4 18.5 15.4C17.9 15.4 17.3 15.9 17.3 16.6C17.3 17.2 17.8 17.8 18.5 17.8M20 10H22V12.34C21.42 11.84 20.74 11.45 20 11.23V10Z\" />\r\n  </svg>\r\n  <span data-l10n-id=\"cursor_text_select_tool_label\">Text selection tool</span>\r\n</button>\r\n", styles: [":host{margin-top:0;margin-right:0}:host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}.toggled{background-color:#646464;border-color:rgba(0,0,0,.4) rgba(0,0,0,.45) rgba(0,0,0,.5);box-shadow:0 1px 1px #0000001a inset,0 0 1px #0003 inset,0 1px #ffffff0d}button{padding:0}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: PdfSelectToolComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-select-tool', template: "<button\r\n  (click)=\"onClick()\"\r\n  type=\"button\"\r\n  [class.invisible]=\"!showSelectToolButton\"\r\n  [class.toggled]=\"isSelected\"\r\n  id=\"primaryCursorSelectTool\"\r\n  class=\"toolbarButton hiddenXXLView\"\r\n  title=\"Enable text selection tool\"\r\n  data-l10n-id=\"cursor_text_select_tool\">\r\n  <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\r\n    <path fill=\"currentColor\" d=\"M2 4C2 2.89 2.9 2 4 2H7V4H4V7H2V4M22 4V7H20V4H17V2H20C21.1 2 22 2.89 22 4M2 20V17H4V20H7V22H4C2.9 22 2 21.11 2 20M10 2H14V4H10V2M10 20H14V22H10V20M2 10H4V14H2V10M18.5 13C20.4 13 22 14.6 22 16.5C22 19.1 18.5 23 18.5 23C18.5 23 15 19.1 15 16.5C15 14.6 16.6 13 18.5 13M18.5 17.8C19.2 17.8 19.8 17.2 19.7 16.6C19.7 16 19.1 15.4 18.5 15.4C17.9 15.4 17.3 15.9 17.3 16.6C17.3 17.2 17.8 17.8 18.5 17.8M20 10H22V12.34C21.42 11.84 20.74 11.45 20 11.23V10Z\" />\r\n  </svg>\r\n  <span data-l10n-id=\"cursor_text_select_tool_label\">Text selection tool</span>\r\n</button>\r\n", styles: [":host{margin-top:0;margin-right:0}:host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}.toggled{background-color:#646464;border-color:rgba(0,0,0,.4) rgba(0,0,0,.45) rgba(0,0,0,.5);box-shadow:0 1px 1px #0000001a inset,0 0 1px #0003 inset,0 1px #ffffff0d}button{padding:0}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.PDFNotificationService }]; }, propDecorators: { showSelectToolButton: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNlbGVjdC10b29sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtc2VsZWN0LXRvb2wvcGRmLXNlbGVjdC10b29sLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtc2VsZWN0LXRvb2wvcGRmLXNlbGVjdC10b29sLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBVWpELE1BQU0sT0FBTyxzQkFBc0I7SUFNakMsWUFBb0IsbUJBQTJDO1FBQTNDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBd0I7UUFKeEQseUJBQW9CLEdBQUcsSUFBSSxDQUFDO1FBRTVCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFHdkIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ3ZFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sV0FBVztRQUNqQixNQUFNLG9CQUFvQixHQUEyQixNQUFjLENBQUMsb0JBQW9CLENBQUM7UUFDekYsb0JBQW9CLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsRUFDbEQsQ0FBQyxFQUFFLElBQUksRUFBbUIsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksS0FBSyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBRU0sT0FBTztRQUNaLE1BQU0sb0JBQW9CLEdBQTJCLE1BQWMsQ0FBQyxvQkFBb0IsQ0FBQztRQUN6RixvQkFBb0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsSUFBSSxFQUFFLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQzlGLENBQUM7O29IQXRCVSxzQkFBc0I7d0dBQXRCLHNCQUFzQixpSENYbkMsbzlCQWNBOzRGREhhLHNCQUFzQjtrQkFMbEMsU0FBUzsrQkFDRSxpQkFBaUI7NkdBTXBCLG9CQUFvQjtzQkFEMUIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBkZkN1cnNvclRvb2xzIH0gZnJvbSAnLi8uLi8uLi9vcHRpb25zL3BkZi1jdXJzb3ItdG9vbHMnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElQREZWaWV3ZXJBcHBsaWNhdGlvbiB9IGZyb20gJy4uLy4uL29wdGlvbnMvcGRmLXZpZXdlci1hcHBsaWNhdGlvbic7XHJcbmltcG9ydCB7IFBERk5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9wZGYtbm90aWZpY2F0aW9uLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIYW5kdG9vbENoYW5nZWQgfSBmcm9tICcuLi8uLi9ldmVudHMvaGFuZHRvb2wtY2hhbmdlZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BkZi1zZWxlY3QtdG9vbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1zZWxlY3QtdG9vbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLXNlbGVjdC10b29sLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmU2VsZWN0VG9vbENvbXBvbmVudCB7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1NlbGVjdFRvb2xCdXR0b24gPSB0cnVlO1xyXG5cclxuICBwdWJsaWMgaXNTZWxlY3RlZCA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbm90aWZpY2F0aW9uU2VydmljZTogUERGTm90aWZpY2F0aW9uU2VydmljZSkge1xyXG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLm9uUERGSlNJbml0LnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMub25QZGZKc0luaXQoKTtcclxuICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25QZGZKc0luaXQoKSB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ2N1cnNvcnRvb2xjaGFuZ2VkJyxcclxuICAgICAgKHsgdG9vbCB9OiBIYW5kdG9vbENoYW5nZWQpID0+ICh0aGlzLmlzU2VsZWN0ZWQgPSB0b29sID09PSBQZGZDdXJzb3JUb29scy5TRUxFQ1QpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkNsaWNrKCk6IHZvaWQge1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLmRpc3BhdGNoKCdzd2l0Y2hjdXJzb3J0b29sJywgeyB0b29sOiBQZGZDdXJzb3JUb29scy5TRUxFQ1QgfSk7XHJcbiAgfVxyXG59XHJcbiIsIjxidXR0b25cclxuICAoY2xpY2spPVwib25DbGljaygpXCJcclxuICB0eXBlPVwiYnV0dG9uXCJcclxuICBbY2xhc3MuaW52aXNpYmxlXT1cIiFzaG93U2VsZWN0VG9vbEJ1dHRvblwiXHJcbiAgW2NsYXNzLnRvZ2dsZWRdPVwiaXNTZWxlY3RlZFwiXHJcbiAgaWQ9XCJwcmltYXJ5Q3Vyc29yU2VsZWN0VG9vbFwiXHJcbiAgY2xhc3M9XCJ0b29sYmFyQnV0dG9uIGhpZGRlblhYTFZpZXdcIlxyXG4gIHRpdGxlPVwiRW5hYmxlIHRleHQgc2VsZWN0aW9uIHRvb2xcIlxyXG4gIGRhdGEtbDEwbi1pZD1cImN1cnNvcl90ZXh0X3NlbGVjdF90b29sXCI+XHJcbiAgPHN2ZyBzdHlsZT1cIndpZHRoOjIycHg7aGVpZ2h0OjIycHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yIDRDMiAyLjg5IDIuOSAyIDQgMkg3VjRINFY3SDJWNE0yMiA0VjdIMjBWNEgxN1YySDIwQzIxLjEgMiAyMiAyLjg5IDIyIDRNMiAyMFYxN0g0VjIwSDdWMjJINEMyLjkgMjIgMiAyMS4xMSAyIDIwTTEwIDJIMTRWNEgxMFYyTTEwIDIwSDE0VjIySDEwVjIwTTIgMTBINFYxNEgyVjEwTTE4LjUgMTNDMjAuNCAxMyAyMiAxNC42IDIyIDE2LjVDMjIgMTkuMSAxOC41IDIzIDE4LjUgMjNDMTguNSAyMyAxNSAxOS4xIDE1IDE2LjVDMTUgMTQuNiAxNi42IDEzIDE4LjUgMTNNMTguNSAxNy44QzE5LjIgMTcuOCAxOS44IDE3LjIgMTkuNyAxNi42QzE5LjcgMTYgMTkuMSAxNS40IDE4LjUgMTUuNEMxNy45IDE1LjQgMTcuMyAxNS45IDE3LjMgMTYuNkMxNy4zIDE3LjIgMTcuOCAxNy44IDE4LjUgMTcuOE0yMCAxMEgyMlYxMi4zNEMyMS40MiAxMS44NCAyMC43NCAxMS40NSAyMCAxMS4yM1YxMFpcIiAvPlxyXG4gIDwvc3ZnPlxyXG4gIDxzcGFuIGRhdGEtbDEwbi1pZD1cImN1cnNvcl90ZXh0X3NlbGVjdF90b29sX2xhYmVsXCI+VGV4dCBzZWxlY3Rpb24gdG9vbDwvc3Bhbj5cclxuPC9idXR0b24+XHJcbiJdfQ==
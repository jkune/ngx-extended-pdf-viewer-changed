import { PdfCursorTools } from './../../options/pdf-cursor-tools';
import { Component, Input } from '@angular/core';
import { PDFNotificationService } from '../../pdf-notification-service';
import * as i0 from "@angular/core";
import * as i1 from "../../pdf-notification-service";
export class PdfHandToolComponent {
    constructor(notificationService) {
        this.notificationService = notificationService;
        this.showHandToolButton = true;
        this.isSelected = false;
        const subscription = this.notificationService.onPDFJSInit.subscribe(() => {
            this.onPdfJsInit();
            subscription.unsubscribe();
        });
    }
    onPdfJsInit() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.on('cursortoolchanged', ({ tool }) => (this.isSelected = tool === PdfCursorTools.HAND));
    }
    onClick() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('switchcursortool', { tool: PdfCursorTools.HAND });
    }
}
/** @nocollapse */ PdfHandToolComponent.ɵfac = function PdfHandToolComponent_Factory(t) { return new (t || PdfHandToolComponent)(i0.ɵɵdirectiveInject(i1.PDFNotificationService)); };
/** @nocollapse */ PdfHandToolComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfHandToolComponent, selectors: [["pdf-hand-tool"]], inputs: { showHandToolButton: "showHandToolButton" }, decls: 5, vars: 4, consts: [["type", "button", "id", "primaryCursorHandTool", "title", "Enable hand tool", "data-l10n-id", "cursor_hand_tool", 1, "toolbarButton", "hiddenXXLView", 3, "click"], ["viewBox", "0 0 24 24", 2, "width", "22px", "height", "22px"], ["fill", "currentColor", "d", "M13,6V11H18V7.75L22.25,12L18,16.25V13H13V18H16.25L12,22.25L7.75,18H11V13H6V16.25L1.75,12L6,7.75V11H11V6H7.75L12,1.75L16.25,6H13Z"], ["data-l10n-id", "cursor_hand_tool_label"]], template: function PdfHandToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function PdfHandToolComponent_Template_button_click_0_listener() { return ctx.onClick(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(1, "svg", 1);
        i0.ɵɵelement(2, "path", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(3, "span", 3);
        i0.ɵɵtext(4, "Hand Tool");
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵclassProp("invisible", !ctx.showHandToolButton)("toggled", ctx.isSelected);
    } }, styles: ["[_nghost-%COMP%]{margin-top:0}[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus{outline:none}svg[_ngcontent-%COMP%]:focus{outline:none}.toggled[_ngcontent-%COMP%]{background-color:#646464;border-color:rgba(0,0,0,.4) rgba(0,0,0,.45) rgba(0,0,0,.5);box-shadow:0 1px 1px #0000001a inset,0 0 1px #0003 inset,0 1px #ffffff0d}button[_ngcontent-%COMP%]{padding:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfHandToolComponent, [{
        type: Component,
        args: [{ selector: 'pdf-hand-tool', template: "<button\r\n  (click)=\"onClick()\"\r\n  type=\"button\"\r\n  [class.invisible]=\"!showHandToolButton\"\r\n  [class.toggled]=\"isSelected\"\r\n  id=\"primaryCursorHandTool\"\r\n  class=\"toolbarButton hiddenXXLView\"\r\n  title=\"Enable hand tool\"\r\n  data-l10n-id=\"cursor_hand_tool\">\r\n  <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\r\n    <path fill=\"currentColor\" d=\"M13,6V11H18V7.75L22.25,12L18,16.25V13H13V18H16.25L12,22.25L7.75,18H11V13H6V16.25L1.75,12L6,7.75V11H11V6H7.75L12,1.75L16.25,6H13Z\" />\r\n  </svg>\r\n  <span data-l10n-id=\"cursor_hand_tool_label\">Hand Tool</span>\r\n</button>\r\n", styles: [":host{margin-top:0}:host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}.toggled{background-color:#646464;border-color:rgba(0,0,0,.4) rgba(0,0,0,.45) rgba(0,0,0,.5);box-shadow:0 1px 1px #0000001a inset,0 0 1px #0003 inset,0 1px #ffffff0d}button{padding:0}\n"] }]
    }], function () { return [{ type: i1.PDFNotificationService }]; }, { showHandToolButton: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWhhbmQtdG9vbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLWhhbmQtdG9vbC9wZGYtaGFuZC10b29sLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtaGFuZC10b29sL3BkZi1oYW5kLXRvb2wuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7QUFReEUsTUFBTSxPQUFPLG9CQUFvQjtJQU0vQixZQUFvQixtQkFBMkM7UUFBM0Msd0JBQW1CLEdBQW5CLG1CQUFtQixDQUF3QjtRQUp4RCx1QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFFMUIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUd4QixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDdkUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxXQUFXO1FBQ2pCLE1BQU0sb0JBQW9CLEdBQTJCLE1BQWMsQ0FBQyxvQkFBb0IsQ0FBQztRQUN6RixvQkFBb0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLG1CQUFtQixFQUNsRCxDQUFDLEVBQUUsSUFBSSxFQUFtQixFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxLQUFLLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFFTSxPQUFPO1FBQ1osTUFBTSxvQkFBb0IsR0FBMkIsTUFBYyxDQUFDLG9CQUFvQixDQUFDO1FBQ3pGLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxJQUFJLEVBQUUsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDNUYsQ0FBQzs7MkdBdEJVLG9CQUFvQjtzR0FBcEIsb0JBQW9CO1FDWGpDLGlDQVFrQztRQVBoQyxpR0FBUyxhQUFTLElBQUM7UUFRbkIsbUJBQXdEO1FBQXhELDhCQUF3RDtRQUN0RCwwQkFBaUs7UUFDbkssaUJBQU07UUFDTixvQkFBNEM7UUFBNUMsK0JBQTRDO1FBQUEseUJBQVM7UUFBQSxpQkFBTyxFQUFBOztRQVQ1RCxvREFBdUMsMkJBQUE7O3VGRFE1QixvQkFBb0I7Y0FMaEMsU0FBUzsyQkFDRSxlQUFlO3lFQU1sQixrQkFBa0I7a0JBRHhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQZGZDdXJzb3JUb29scyB9IGZyb20gJy4vLi4vLi4vb3B0aW9ucy9wZGYtY3Vyc29yLXRvb2xzJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJUERGVmlld2VyQXBwbGljYXRpb24gfSBmcm9tICcuLi8uLi9vcHRpb25zL3BkZi12aWV3ZXItYXBwbGljYXRpb24nO1xyXG5pbXBvcnQgeyBQREZOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcGRmLW5vdGlmaWNhdGlvbi1zZXJ2aWNlJztcclxuaW1wb3J0IHsgSGFuZHRvb2xDaGFuZ2VkIH0gZnJvbSAnLi4vLi4vZXZlbnRzL2hhbmR0b29sLWNoYW5nZWQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtaGFuZC10b29sJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLWhhbmQtdG9vbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLWhhbmQtdG9vbC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZkhhbmRUb29sQ29tcG9uZW50IHtcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93SGFuZFRvb2xCdXR0b24gPSB0cnVlO1xyXG5cclxuICBwdWJsaWMgaXNTZWxlY3RlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IFBERk5vdGlmaWNhdGlvblNlcnZpY2UpIHtcclxuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5vblBERkpTSW5pdC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLm9uUGRmSnNJbml0KCk7XHJcbiAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uUGRmSnNJbml0KCkge1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdjdXJzb3J0b29sY2hhbmdlZCcsXHJcbiAgICAgICh7IHRvb2wgfTogSGFuZHRvb2xDaGFuZ2VkKSA9PiAodGhpcy5pc1NlbGVjdGVkID0gdG9vbCA9PT0gUGRmQ3Vyc29yVG9vbHMuSEFORCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uQ2xpY2soKTogdm9pZCB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMuZGlzcGF0Y2goJ3N3aXRjaGN1cnNvcnRvb2wnLCB7IHRvb2w6IFBkZkN1cnNvclRvb2xzLkhBTkQgfSk7XHJcbiAgfVxyXG59XHJcbiIsIjxidXR0b25cclxuICAoY2xpY2spPVwib25DbGljaygpXCJcclxuICB0eXBlPVwiYnV0dG9uXCJcclxuICBbY2xhc3MuaW52aXNpYmxlXT1cIiFzaG93SGFuZFRvb2xCdXR0b25cIlxyXG4gIFtjbGFzcy50b2dnbGVkXT1cImlzU2VsZWN0ZWRcIlxyXG4gIGlkPVwicHJpbWFyeUN1cnNvckhhbmRUb29sXCJcclxuICBjbGFzcz1cInRvb2xiYXJCdXR0b24gaGlkZGVuWFhMVmlld1wiXHJcbiAgdGl0bGU9XCJFbmFibGUgaGFuZCB0b29sXCJcclxuICBkYXRhLWwxMG4taWQ9XCJjdXJzb3JfaGFuZF90b29sXCI+XHJcbiAgPHN2ZyBzdHlsZT1cIndpZHRoOjIycHg7aGVpZ2h0OjIycHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xMyw2VjExSDE4VjcuNzVMMjIuMjUsMTJMMTgsMTYuMjVWMTNIMTNWMThIMTYuMjVMMTIsMjIuMjVMNy43NSwxOEgxMVYxM0g2VjE2LjI1TDEuNzUsMTJMNiw3Ljc1VjExSDExVjZINy43NUwxMiwxLjc1TDE2LjI1LDZIMTNaXCIgLz5cclxuICA8L3N2Zz5cclxuICA8c3BhbiBkYXRhLWwxMG4taWQ9XCJjdXJzb3JfaGFuZF90b29sX2xhYmVsXCI+SGFuZCBUb29sPC9zcGFuPlxyXG48L2J1dHRvbj5cclxuIl19
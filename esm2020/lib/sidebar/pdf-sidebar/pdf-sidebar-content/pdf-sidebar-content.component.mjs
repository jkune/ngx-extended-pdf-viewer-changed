import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["thumbnailViewTemplate"];
function PdfSidebarContentComponent_ng_content_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 0, ["*ngTemplateOutlet", "customThumbnail ? customThumbnail : defaultThumbnail"]);
} }
function PdfSidebarContentComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 8)(1, "div", 9);
    i0.ɵɵelement(2, "div", 10);
    i0.ɵɵelementEnd()();
} }
const _c1 = ["*"];
const THUMBNAIL_CANVAS_BORDER_WIDTH = 1; // one pixel
export class PdfSidebarContentComponent {
    constructor() {
        this.hideSidebarToolbar = false;
        this.mobileFriendlyZoomScale = 1.0;
        this.thumbnailDrawn = new EventEmitter();
        if (typeof window !== 'undefined') {
            window.pdfThumbnailGeneratorReady = () => this.pdfThumbnailGeneratorReady();
            window.pdfThumbnailGenerator = (pdfThumbnailView, linkService, id, container, thumbPageTitlePromise) => this.createThumbnail(pdfThumbnailView, linkService, id, container, thumbPageTitlePromise);
        }
    }
    get top() {
        let top = 0;
        if (!this.hideSidebarToolbar) {
            top = 32 * this.mobileFriendlyZoomScale;
            if (top === 32) {
                top = 33; // prevent the border of the sidebar toolbar from being cut off
            }
        }
        return `${top}px`;
    }
    ngOnDestroy() {
        this.linkService = undefined;
    }
    pdfThumbnailGeneratorReady() {
        if (!this.thumbnailViewTemplate) {
            return false;
        }
        const t = this.thumbnailViewTemplate.nativeElement;
        return !!t && !!t.innerHTML && t.innerHTML.length > 0;
    }
    createThumbnail(pdfThumbnailView, linkService, id, container, thumbPageTitlePromise) {
        this.linkService = linkService;
        const template = this.thumbnailViewTemplate;
        // get the inner HTML without the attributes and classes added by Angular
        const inner = template.nativeElement.innerHTML
            .split(/_ng\w+-\w+-\w+=""/g)
            .join('')
            .split(/ng-\w+-\w+/g)
            .join('')
            .split(/<!--[\s\S]*?-->/g)
            .join('');
        const borderAdjustment = 2 * THUMBNAIL_CANVAS_BORDER_WIDTH;
        const widthOfRing = `${pdfThumbnailView.canvasWidth + borderAdjustment}px`;
        const heightOfRing = `${pdfThumbnailView.canvasHeight + borderAdjustment}px`;
        const newHtml = inner.split('WIDTH_OF_RING').join(widthOfRing).split('HEIGHT_OF_RING').join(heightOfRing).split('PAGE_NUMBER').join(id);
        const newElement = this.createElementFromHTML(newHtml);
        newElement.classList.remove('pdf-viewer-template');
        const anchor = newElement;
        anchor.href = linkService.getAnchorUrl(`#page=${id}`);
        thumbPageTitlePromise.then((msg) => {
            anchor.title = msg;
        });
        anchor.onclick = () => {
            linkService.page = id;
            return false;
        };
        pdfThumbnailView.anchor = anchor;
        const ring = newElement.getElementsByClassName('image-container')[0];
        pdfThumbnailView.ring = ring;
        pdfThumbnailView.div = newElement.getElementsByClassName('thumbnail')[0];
        container.appendChild(newElement);
        const thumbnailDrawnEvent = {
            thumbnail: newElement,
            container: container,
            pageId: id,
        };
        this.thumbnailDrawn.emit(thumbnailDrawnEvent);
    }
    getTrustedHtml(html) {
        const ttWindow = window;
        if (ttWindow.trustedTypes) {
            // Create a policy that can create TrustedHTML values
            // after sanitizing the input strings with DOMPurify library.
            const sanitizer = ttWindow.trustedTypes.createPolicy('foo', {
                createHTML: (input) => input,
            });
            return sanitizer.createHTML(html); // Puts the sanitized value into the DOM.
        }
        else {
            return html;
        }
    }
    createElementFromHTML(htmlString) {
        const div = document.createElement('div');
        const trustedHtml = this.getTrustedHtml(htmlString.trim());
        div.innerHTML = trustedHtml;
        // Change this to div.childNodes to support multiple top-level nodes
        return div.firstChild;
    }
    onKeyDown(event) {
        if (event.code === 'ArrowDown') {
            if (this.linkService) {
                if (event.ctrlKey || event.metaKey) {
                    this.linkService.page = this.linkService.pagesCount;
                }
                else if (this.linkService.page < this.linkService.pagesCount) {
                    this.linkService.page = this.linkService.page + 1;
                }
                event.preventDefault();
            }
        }
        else if (event.code === 'ArrowUp') {
            if (this.linkService) {
                if (event.ctrlKey || event.metaKey) {
                    this.linkService.page = 1;
                }
                else if (this.linkService.page > 1) {
                    this.linkService.page = this.linkService.page - 1;
                }
                event.preventDefault();
            }
        }
    }
}
/** @nocollapse */ PdfSidebarContentComponent.ɵfac = function PdfSidebarContentComponent_Factory(t) { return new (t || PdfSidebarContentComponent)(); };
/** @nocollapse */ PdfSidebarContentComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfSidebarContentComponent, selectors: [["pdf-sidebar-content"]], viewQuery: function PdfSidebarContentComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.thumbnailViewTemplate = _t.first);
    } }, inputs: { customThumbnail: "customThumbnail", hideSidebarToolbar: "hideSidebarToolbar", mobileFriendlyZoomScale: "mobileFriendlyZoomScale" }, outputs: { thumbnailDrawn: "thumbnailDrawn" }, ngContentSelectors: _c1, decls: 10, vars: 3, consts: [["id", "sidebarContent"], ["thumbnailViewTemplate", ""], [4, "ngTemplateOutlet"], ["id", "thumbnailView", 3, "keydown"], ["id", "outlineView", 1, "hidden"], ["id", "attachmentsView", 1, "hidden"], ["id", "layersView", 1, "hidden"], ["defaultThumbnail", ""], [1, "pdf-viewer-template"], ["data-page-number", "$page", 1, "thumbnail"], [1, "thumbnailSelectionRing", "image-container", 2, "width", "WIDTH_OF_RING", "height", "HEIGHT_OF_RING"]], template: function PdfSidebarContentComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0)(1, "div", null, 1);
        i0.ɵɵtemplate(3, PdfSidebarContentComponent_ng_content_3_Template, 1, 0, "ng-content", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵlistener("keydown", function PdfSidebarContentComponent_Template_div_keydown_4_listener($event) { return ctx.onKeyDown($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelement(5, "div", 4)(6, "div", 5)(7, "div", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, PdfSidebarContentComponent_ng_template_8_Template, 3, 0, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r2 = i0.ɵɵreference(9);
        i0.ɵɵstyleProp("top", ctx.top);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.customThumbnail ? ctx.customThumbnail : _r2);
    } }, directives: [i1.NgTemplateOutlet], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfSidebarContentComponent, [{
        type: Component,
        args: [{ selector: 'pdf-sidebar-content', template: "<div id=\"sidebarContent\" [style.top]=\"top\">\r\n  <div #thumbnailViewTemplate>\r\n    <ng-content *ngTemplateOutlet=\"customThumbnail ? customThumbnail : defaultThumbnail\"></ng-content>\r\n  </div>\r\n  <div id=\"thumbnailView\" (keydown)=\"onKeyDown($event)\"></div>\r\n  <div id=\"outlineView\" class=\"hidden\"></div>\r\n  <div id=\"attachmentsView\" class=\"hidden\"></div>\r\n  <div id=\"layersView\" class=\"hidden\"></div>\r\n</div>\r\n\r\n<ng-template #defaultThumbnail>\r\n  <a class=\"pdf-viewer-template\">\r\n    <div class=\"thumbnail\" data-page-number=\"$page\">\r\n      <div class=\"thumbnailSelectionRing image-container\" style=\"width: WIDTH_OF_RING; height: HEIGHT_OF_RING\">\r\n        <!-- image is automatically inserted here -->\r\n        <!-- <img class=\"thumbnailImage\" style=\"width: 98px; height: 73px;\" /> -->\r\n      </div>\r\n    </div>\r\n  </a>\r\n</ng-template>\r\n", styles: [""] }]
    }], function () { return []; }, { customThumbnail: [{
            type: Input
        }], hideSidebarToolbar: [{
            type: Input
        }], mobileFriendlyZoomScale: [{
            type: Input
        }], thumbnailViewTemplate: [{
            type: ViewChild,
            args: ['thumbnailViewTemplate']
        }], thumbnailDrawn: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNpZGViYXItY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3NpZGViYXIvcGRmLXNpZGViYXIvcGRmLXNpZGViYXItY29udGVudC9wZGYtc2lkZWJhci1jb250ZW50LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvc2lkZWJhci9wZGYtc2lkZWJhci9wZGYtc2lkZWJhci1jb250ZW50L3BkZi1zaWRlYmFyLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQWUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztJQ0VsSCxvR0FBa0c7OztJQVNwRyw0QkFBK0IsYUFBQTtJQUUzQiwwQkFHTTtJQUNSLGlCQUFNLEVBQUE7OztBRENWLE1BQU0sNkJBQTZCLEdBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWTtBQU9yRCxNQUFNLE9BQU8sMEJBQTBCO0lBNkJyQztRQXhCTyx1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFHM0IsNEJBQXVCLEdBQUcsR0FBRyxDQUFDO1FBUTlCLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQTBCLENBQUM7UUFjakUsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7WUFDaEMsTUFBYyxDQUFDLDBCQUEwQixHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1lBQ3BGLE1BQWMsQ0FBQyxxQkFBcUIsR0FBRyxDQUN0QyxnQkFBa0MsRUFDbEMsV0FBZ0IsRUFDaEIsRUFBVSxFQUNWLFNBQXlCLEVBQ3pCLHFCQUFzQyxF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Q0FBQzs7dUhBdEpVLDBCQUEwQjs0R0FBMUIsMEJBQTBCOzs7Ozs7O1FDekJ2Qyw4QkFBMkMsbUJBQUE7UUFFdkMseUZBQWtHO1FBQ3BHLGlCQUFNO1FBQ04sOEJBQXNEO1FBQTlCLDhHQUFXLHFCQUFpQixJQUFDO1FBQUMsaUJBQU07UUFDNUQseUJBQTJDLGFBQUEsYUFBQTtRQUc3QyxpQkFBTTtRQUVOLDRIQVNjOzs7UUFuQlcsOEJBQWlCO1FBRXpCLGVBQXNFO1FBQXRFLGtGQUFzRTs7dUZEdUIxRSwwQkFBMEI7Y0FMdEMsU0FBUzsyQkFDRSxxQkFBcUI7c0NBTXhCLGVBQWU7a0JBRHJCLEtBQUs7WUFJQyxrQkFBa0I7a0JBRHhCLEtBQUs7WUFJQyx1QkFBdUI7a0JBRDdCLEtBQUs7WUFJQyxxQkFBcUI7a0JBRDNCLFNBQVM7bUJBQUMsdUJBQXVCO1lBTTNCLGNBQWM7a0JBRHBCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT3V0cHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRydXN0ZWRUeXBlc1dpbmRvdyB9IGZyb20gJ3RydXN0ZWQtdHlwZXMvbGliJztcclxuaW1wb3J0IHsgUGRmVGh1bWJuYWlsRHJhd25FdmVudCB9IGZyb20gJy4uLy4uLy4uL2V2ZW50cy9wZGYtdGh1bWJuYWlsLWRyYXduLWV2ZW50JztcclxuXHJcbmRlY2xhcmUgY2xhc3MgUERGVGh1bWJuYWlsVmlldyB7XHJcbiAgYW5jaG9yOiBIVE1MQW5jaG9yRWxlbWVudDtcclxuICBkaXY6IEhUTUxFbGVtZW50O1xyXG4gIHJpbmc6IEhUTUxFbGVtZW50O1xyXG4gIGNhbnZhc1dpZHRoOiBudW1iZXI7XHJcbiAgY2FudmFzSGVpZ2h0OiBudW1iZXI7XHJcbn1cclxuXHJcbmRlY2xhcmUgY2xhc3MgUERGTGlua1NlcnZpY2Uge1xyXG4gIHB1YmxpYyBwYWdlOiBudW1iZXI7XHJcbiAgcHVibGljIHBhZ2VzQ291bnQ6IG51bWJlcjtcclxuICBwdWJsaWMgZ2V0QW5jaG9yVXJsKHRhcmdldFVybDogc3RyaW5nKTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBUSFVNQk5BSUxfQ0FOVkFTX0JPUkRFUl9XSURUSCA9IDE7IC8vIG9uZSBwaXhlbFxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtc2lkZWJhci1jb250ZW50JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLXNpZGViYXItY29udGVudC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLXNpZGViYXItY29udGVudC5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZGZTaWRlYmFyQ29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY3VzdG9tVGh1bWJuYWlsOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBoaWRlU2lkZWJhclRvb2xiYXIgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbW9iaWxlRnJpZW5kbHlab29tU2NhbGUgPSAxLjA7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3RodW1ibmFpbFZpZXdUZW1wbGF0ZScpXHJcbiAgcHVibGljIHRodW1ibmFpbFZpZXdUZW1wbGF0ZTogRWxlbWVudFJlZjtcclxuXHJcbiAgcHJpdmF0ZSBsaW5rU2VydmljZTogUERGTGlua1NlcnZpY2UgfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyB0aHVtYm5haWxEcmF3biA9IG5ldyBFdmVudEVtaXR0ZXI8UGRmVGh1bWJuYWlsRHJhd25FdmVudD4oKTtcclxuXHJcbiAgcHVibGljIGdldCB0b3AoKTogc3RyaW5nIHtcclxuICAgIGxldCB0b3AgPSAwO1xyXG4gICAgaWYgKCF0aGlzLmhpZGVTaWRlYmFyVG9vbGJhcikge1xyXG4gICAgICB0b3AgPSAzMiAqIHRoaXMubW9iaWxlRnJpZW5kbHlab29tU2NhbGU7XHJcbiAgICAgIGlmICh0b3AgPT09IDMyKSB7XHJcbiAgICAgICAgdG9wID0gMzM7IC8vIHByZXZlbnQgdGhlIGJvcmRlciBvZiB0aGUgc2lkZWJhciB0b29sYmFyIGZyb20gYmVpbmcgY3V0IG9mZlxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYCR7dG9wfXB4YDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICh3aW5kb3cgYXMgYW55KS5wZGZUaHVtYm5haWxHZW5lcmF0b3JSZWFkeSA9ICgpID0+IHRoaXMucGRmVGh1bWJuYWlsR2VuZXJhdG9yUmVhZHkoKTtcclxuICAgICAgKHdpbmRvdyBhcyBhbnkpLnBkZlRodW1ibmFpbEdlbmVyYXRvciA9IChcclxuICAgICAgICBwZGZUaHVtYm5haWxWaWV3OiBQREZUaHVtYm5haWxWaWV3LFxyXG4gICAgICAgIGxpbmtTZXJ2aWNlOiBhbnksXHJcbiAgICAgICAgaWQ6IG51bWJlcixcclxuICAgICAgICBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50LFxyXG4gICAgICAgIHRodW1iUGFnZVRpdGxlUHJvbWlzZTogUHJvbWlzZTxzdHJpbmc+XHJcbiAgICAgICkgPT4gdGhpcy5jcmVhdGVUaHVtYm5haWwocGRmVGh1bWJuYWlsVmlldywgbGlua1NlcnZpY2UsIGlkLCBjb250YWluZXIsIHRodW1iUGFnZVRpdGxlUHJvbWlzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmxpbmtTZXJ2aWNlID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBkZlRodW1ibmFpbEdlbmVyYXRvclJlYWR5KCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF0aGlzLnRodW1ibmFpbFZpZXdUZW1wbGF0ZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0ID0gdGhpcy50aHVtYm5haWxWaWV3VGVtcGxhdGUubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgIHJldHVybiAhIXQgJiYgISF0LmlubmVySFRNTCAmJiB0LmlubmVySFRNTC5sZW5ndGggPiAwO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVUaHVtYm5haWwoXHJcbiAgICBwZGZUaHVtYm5haWxWaWV3OiBQREZUaHVtYm5haWxWaWV3LFxyXG4gICAgbGlua1NlcnZpY2U6IFBERkxpbmtTZXJ2aWNlLFxyXG4gICAgaWQ6IG51bWJlcixcclxuICAgIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQsXHJcbiAgICB0aHVtYlBhZ2VUaXRsZVByb21pc2U6IFByb21pc2U8c3RyaW5nPlxyXG4gICkge1xyXG4gICAgdGhpcy5saW5rU2VydmljZSA9IGxpbmtTZXJ2aWNlO1xyXG4gICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLnRodW1ibmFpbFZpZXdUZW1wbGF0ZTtcclxuICAgIC8vIGdldCB0aGUgaW5uZXIgSFRNTCB3aXRob3V0IHRoZSBhdHRyaWJ1dGVzIGFuZCBjbGFzc2VzIGFkZGVkIGJ5IEFuZ3VsYXJcclxuICAgIGNvbnN0IGlubmVyID0gdGVtcGxhdGUubmF0aXZlRWxlbWVudC5pbm5lckhUTUxcclxuICAgICAgLnNwbGl0KC9fbmdcXHcrLVxcdystXFx3Kz1cIlwiL2cpXHJcbiAgICAgIC5qb2luKCcnKVxyXG4gICAgICAuc3BsaXQoL25nLVxcdystXFx3Ky9nKVxyXG4gICAgICAuam9pbignJylcclxuICAgICAgLnNwbGl0KC88IS0tW1xcc1xcU10qPy0tPi9nKVxyXG4gICAgICAuam9pbignJyk7XHJcblxyXG4gICAgY29uc3QgYm9yZGVyQWRqdXN0bWVudCA9IDIgKiBUSFVNQk5BSUxfQ0FOVkFTX0JPUkRFUl9XSURUSDtcclxuXHJcbiAgICBjb25zdCB3aWR0aE9mUmluZyA9IGAke3BkZlRodW1ibmFpbFZpZXcuY2FudmFzV2lkdGggKyBib3JkZXJBZGp1c3RtZW50fXB4YDtcclxuICAgIGNvbnN0IGhlaWdodE9mUmluZyA9IGAke3BkZlRodW1ibmFpbFZpZXcuY2FudmFzSGVpZ2h0ICsgYm9yZGVyQWRqdXN0bWVudH1weGA7XHJcblxyXG4gICAgY29uc3QgbmV3SHRtbCA9IGlubmVyLnNwbGl0KCdXSURUSF9PRl9SSU5HJykuam9pbih3aWR0aE9mUmluZykuc3BsaXQoJ0hFSUdIVF9PRl9SSU5HJykuam9pbihoZWlnaHRPZlJpbmcpLnNwbGl0KCdQQUdFX05VTUJFUicpLmpvaW4oaWQpO1xyXG4gICAgY29uc3QgbmV3RWxlbWVudCA9IHRoaXMuY3JlYXRlRWxlbWVudEZyb21IVE1MKG5ld0h0bWwpO1xyXG4gICAgbmV3RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdwZGYtdmlld2VyLXRlbXBsYXRlJyk7XHJcblxyXG4gICAgY29uc3QgYW5jaG9yID0gbmV3RWxlbWVudCBhcyBIVE1MQW5jaG9yRWxlbWVudDtcclxuICAgIGFuY2hvci5ocmVmID0gbGlua1NlcnZpY2UuZ2V0QW5jaG9yVXJsKGAjcGFnZT0ke2lkfWApO1xyXG4gICAgdGh1bWJQYWdlVGl0bGVQcm9taXNlLnRoZW4oKG1zZykgPT4ge1xyXG4gICAgICBhbmNob3IudGl0bGUgPSBtc2c7XHJcbiAgICB9KTtcclxuICAgIGFuY2hvci5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICBsaW5rU2VydmljZS5wYWdlID0gaWQ7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBwZGZUaHVtYm5haWxWaWV3LmFuY2hvciA9IGFuY2hvcjtcclxuXHJcbiAgICBjb25zdCByaW5nID0gbmV3RWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbWFnZS1jb250YWluZXInKVswXSBhcyBIVE1MRWxlbWVudDtcclxuICAgIHBkZlRodW1ibmFpbFZpZXcucmluZyA9IHJpbmc7XHJcbiAgICBwZGZUaHVtYm5haWxWaWV3LmRpdiA9IG5ld0VsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGh1bWJuYWlsJylbMF0gYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xyXG5cclxuICAgIGNvbnN0IHRodW1ibmFpbERyYXduRXZlbnQ6IFBkZlRodW1ibmFpbERyYXduRXZlbnQgPSB7XHJcbiAgICAgIHRodW1ibmFpbDogbmV3RWxlbWVudCxcclxuICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXHJcbiAgICAgIHBhZ2VJZDogaWQsXHJcbiAgICB9O1xyXG4gICAgdGhpcy50aHVtYm5haWxEcmF3bi5lbWl0KHRodW1ibmFpbERyYXduRXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRUcnVzdGVkSHRtbChodG1sOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHR0V2luZG93ID0gd2luZG93IGFzIHVua25vd24gYXMgVHJ1c3RlZFR5cGVzV2luZG93O1xyXG4gICAgaWYgKHR0V2luZG93LnRydXN0ZWRUeXBlcykge1xyXG4gICAgICAvLyBDcmVhdGUgYSBwb2xpY3kgdGhhdCBjYW4gY3JlYXRlIFRydXN0ZWRIVE1MIHZhbHVlc1xyXG4gICAgICAvLyBhZnRlciBzYW5pdGl6aW5nIHRoZSBpbnB1dCBzdHJpbmdzIHdpdGggRE9NUHVyaWZ5IGxpYnJhcnkuXHJcbiAgICAgIGNvbnN0IHNhbml0aXplciA9IHR0V2luZG93LnRydXN0ZWRUeXBlcy5jcmVhdGVQb2xpY3koJ2ZvbycsIHtcclxuICAgICAgICBjcmVhdGVIVE1MOiAoaW5wdXQpID0+IGlucHV0LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiBzYW5pdGl6ZXIuY3JlYXRlSFRNTChodG1sKSBhcyB1bmtub3duIGFzIGFueTsgLy8gUHV0cyB0aGUgc2FuaXRpemVkIHZhbHVlIGludG8gdGhlIERPTS5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBodG1sO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVFbGVtZW50RnJvbUhUTUwoaHRtbFN0cmluZyk6IEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgdHJ1c3RlZEh0bWwgPSB0aGlzLmdldFRydXN0ZWRIdG1sKGh0bWxTdHJpbmcudHJpbSgpKTtcclxuICAgIGRpdi5pbm5lckhUTUwgPSB0cnVzdGVkSHRtbDtcclxuXHJcbiAgICAvLyBDaGFuZ2UgdGhpcyB0byBkaXYuY2hpbGROb2RlcyB0byBzdXBwb3J0IG11bHRpcGxlIHRvcC1sZXZlbCBub2Rlc1xyXG4gICAgcmV0dXJuIGRpdi5maXJzdENoaWxkIGFzIEhUTUxFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGV2ZW50LmNvZGUgPT09ICdBcnJvd0Rvd24nKSB7XHJcbiAgICAgIGlmICh0aGlzLmxpbmtTZXJ2aWNlKSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSkge1xyXG4gICAgICAgICAgdGhpcy5saW5rU2VydmljZS5wYWdlID0gdGhpcy5saW5rU2VydmljZS5wYWdlc0NvdW50O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5saW5rU2VydmljZS5wYWdlIDwgdGhpcy5saW5rU2VydmljZS5wYWdlc0NvdW50KSB7XHJcbiAgICAgICAgICB0aGlzLmxpbmtTZXJ2aWNlLnBhZ2UgPSB0aGlzLmxpbmtTZXJ2aWNlLnBhZ2UgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmNvZGUgPT09ICdBcnJvd1VwJykge1xyXG4gICAgICBpZiAodGhpcy5saW5rU2VydmljZSkge1xyXG4gICAgICAgIGlmIChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpIHtcclxuICAgICAgICAgIHRoaXMubGlua1NlcnZpY2UucGFnZSA9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxpbmtTZXJ2aWNlLnBhZ2UgPiAxKSB7XHJcbiAgICAgICAgICB0aGlzLmxpbmtTZXJ2aWNlLnBhZ2UgPSB0aGlzLmxpbmtTZXJ2aWNlLnBhZ2UgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgaWQ9XCJzaWRlYmFyQ29udGVudFwiIFtzdHlsZS50b3BdPVwidG9wXCI+XHJcbiAgPGRpdiAjdGh1bWJuYWlsVmlld1RlbXBsYXRlPlxyXG4gICAgPG5nLWNvbnRlbnQgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjdXN0b21UaHVtYm5haWwgPyBjdXN0b21UaHVtYm5haWwgOiBkZWZhdWx0VGh1bWJuYWlsXCI+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgaWQ9XCJ0aHVtYm5haWxWaWV3XCIgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIj48L2Rpdj5cclxuICA8ZGl2IGlkPVwib3V0bGluZVZpZXdcIiBjbGFzcz1cImhpZGRlblwiPjwvZGl2PlxyXG4gIDxkaXYgaWQ9XCJhdHRhY2htZW50c1ZpZXdcIiBjbGFzcz1cImhpZGRlblwiPjwvZGl2PlxyXG4gIDxkaXYgaWQ9XCJsYXllcnNWaWV3XCIgY2xhc3M9XCJoaWRkZW5cIj48L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48bmctdGVtcGxhdGUgI2RlZmF1bHRUaHVtYm5haWw+XHJcbiAgPGEgY2xhc3M9XCJwZGYtdmlld2VyLXRlbXBsYXRlXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwidGh1bWJuYWlsXCIgZGF0YS1wYWdlLW51bWJlcj1cIiRwYWdlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0aHVtYm5haWxTZWxlY3Rpb25SaW5nIGltYWdlLWNvbnRhaW5lclwiIHN0eWxlPVwid2lkdGg6IFdJRFRIX09GX1JJTkc7IGhlaWdodDogSEVJR0hUX09GX1JJTkdcIj5cclxuICAgICAgICA8IS0tIGltYWdlIGlzIGF1dG9tYXRpY2FsbHkgaW5zZXJ0ZWQgaGVyZSAtLT5cclxuICAgICAgICA8IS0tIDxpbWcgY2xhc3M9XCJ0aHVtYm5haWxJbWFnZVwiIHN0eWxlPVwid2lkdGg6IDk4cHg7IGhlaWdodDogNzNweDtcIiAvPiAtLT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2E+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==
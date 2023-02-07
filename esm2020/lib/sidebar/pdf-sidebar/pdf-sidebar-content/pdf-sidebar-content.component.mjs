import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
PdfSidebarContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: PdfSidebarContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfSidebarContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: PdfSidebarContentComponent, selector: "pdf-sidebar-content", inputs: { customThumbnail: "customThumbnail", hideSidebarToolbar: "hideSidebarToolbar", mobileFriendlyZoomScale: "mobileFriendlyZoomScale" }, outputs: { thumbnailDrawn: "thumbnailDrawn" }, viewQueries: [{ propertyName: "thumbnailViewTemplate", first: true, predicate: ["thumbnailViewTemplate"], descendants: true }], ngImport: i0, template: "<div id=\"sidebarContent\" [style.top]=\"top\">\r\n  <div #thumbnailViewTemplate>\r\n    <ng-content *ngTemplateOutlet=\"customThumbnail ? customThumbnail : defaultThumbnail\"></ng-content>\r\n  </div>\r\n  <div id=\"thumbnailView\" (keydown)=\"onKeyDown($event)\"></div>\r\n  <div id=\"outlineView\" class=\"hidden\"></div>\r\n  <div id=\"attachmentsView\" class=\"hidden\"></div>\r\n  <div id=\"layersView\" class=\"hidden\"></div>\r\n</div>\r\n\r\n<ng-template #defaultThumbnail>\r\n  <a class=\"pdf-viewer-template\">\r\n    <div class=\"thumbnail\" data-page-number=\"$page\">\r\n      <div class=\"thumbnailSelectionRing image-container\" style=\"width: WIDTH_OF_RING; height: HEIGHT_OF_RING\">\r\n        <!-- image is automatically inserted here -->\r\n        <!-- <img class=\"thumbnailImage\" style=\"width: 98px; height: 73px;\" /> -->\r\n      </div>\r\n    </div>\r\n  </a>\r\n</ng-template>\r\n", styles: [""], directives: [{ type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: PdfSidebarContentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-sidebar-content', template: "<div id=\"sidebarContent\" [style.top]=\"top\">\r\n  <div #thumbnailViewTemplate>\r\n    <ng-content *ngTemplateOutlet=\"customThumbnail ? customThumbnail : defaultThumbnail\"></ng-content>\r\n  </div>\r\n  <div id=\"thumbnailView\" (keydown)=\"onKeyDown($event)\"></div>\r\n  <div id=\"outlineView\" class=\"hidden\"></div>\r\n  <div id=\"attachmentsView\" class=\"hidden\"></div>\r\n  <div id=\"layersView\" class=\"hidden\"></div>\r\n</div>\r\n\r\n<ng-template #defaultThumbnail>\r\n  <a class=\"pdf-viewer-template\">\r\n    <div class=\"thumbnail\" data-page-number=\"$page\">\r\n      <div class=\"thumbnailSelectionRing image-container\" style=\"width: WIDTH_OF_RING; height: HEIGHT_OF_RING\">\r\n        <!-- image is automatically inserted here -->\r\n        <!-- <img class=\"thumbnailImage\" style=\"width: 98px; height: 73px;\" /> -->\r\n      </div>\r\n    </div>\r\n  </a>\r\n</ng-template>\r\n", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { customThumbnail: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNpZGViYXItY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3NpZGViYXIvcGRmLXNpZGViYXIvcGRmLXNpZGViYXItY29udGVudC9wZGYtc2lkZWJhci1jb250ZW50LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvc2lkZWJhci9wZGYtc2lkZWJhci9wZGYtc2lkZWJhci1jb250ZW50L3BkZi1zaWRlYmFyLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBZSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQWtCdEgsTUFBTSw2QkFBNkIsR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZO0FBT3JELE1BQU0sT0FBTywwQkFBMEI7SUE2QnJDO1FBeEJPLHVCQUFrQixHQUFHLEtBQUssQ0FBQztRQUczQiw0QkFBdUIsR0FBRyxHQUFHLENBQUM7UUFROUIsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBMEIsQ0FBQztRQWNqRSxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtZQUNoQyxNQUFjLENBQUMsMEJBQTBCLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7WUFDcEYsTUFBYyxDQUFDLHFCQUFxQixHQUFHLENBQ3RDLGdCQUFrQyxFQUNsQyxXQUFnQixFQUNoQixFQUFVLEVBQ1YsU0FBeUIsRUFDekIscUJBQXNDLEVBQ3RDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsU0FBUyxF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UzsrQkFDRSxxQkFBcUI7MEVBTXhCLGVBQWU7c0JBRHJCLEtBQUs7Z0JBSUMsa0JBQWtCO3NCQUR4QixLQUFLO2dCQUlDLHVCQUF1QjtzQkFEN0IsS0FBSztnQkFJQyxxQkFBcUI7c0JBRDNCLFNBQVM7dUJBQUMsdUJBQXVCO2dCQU0zQixjQUFjO3NCQURwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE91dHB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcnVzdGVkVHlwZXNXaW5kb3cgfSBmcm9tICd0cnVzdGVkLXR5cGVzL2xpYic7XHJcbmltcG9ydCB7IFBkZlRodW1ibmFpbERyYXduRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9ldmVudHMvcGRmLXRodW1ibmFpbC1kcmF3bi1ldmVudCc7XHJcblxyXG5kZWNsYXJlIGNsYXNzIFBERlRodW1ibmFpbFZpZXcge1xyXG4gIGFuY2hvcjogSFRNTEFuY2hvckVsZW1lbnQ7XHJcbiAgZGl2OiBIVE1MRWxlbWVudDtcclxuICByaW5nOiBIVE1MRWxlbWVudDtcclxuICBjYW52YXNXaWR0aDogbnVtYmVyO1xyXG4gIGNhbnZhc0hlaWdodDogbnVtYmVyO1xyXG59XHJcblxyXG5kZWNsYXJlIGNsYXNzIFBERkxpbmtTZXJ2aWNlIHtcclxuICBwdWJsaWMgcGFnZTogbnVtYmVyO1xyXG4gIHB1YmxpYyBwYWdlc0NvdW50OiBudW1iZXI7XHJcbiAgcHVibGljIGdldEFuY2hvclVybCh0YXJnZXRVcmw6IHN0cmluZyk6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgVEhVTUJOQUlMX0NBTlZBU19CT1JERVJfV0lEVEggPSAxOyAvLyBvbmUgcGl4ZWxcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGRmLXNpZGViYXItY29udGVudCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1zaWRlYmFyLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BkZi1zaWRlYmFyLWNvbnRlbnQuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmU2lkZWJhckNvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbVRodW1ibmFpbDogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgaGlkZVNpZGViYXJUb29sYmFyID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIG1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlID0gMS4wO1xyXG5cclxuICBAVmlld0NoaWxkKCd0aHVtYm5haWxWaWV3VGVtcGxhdGUnKVxyXG4gIHB1YmxpYyB0aHVtYm5haWxWaWV3VGVtcGxhdGU6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHByaXZhdGUgbGlua1NlcnZpY2U6IFBERkxpbmtTZXJ2aWNlIHwgdW5kZWZpbmVkO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgdGh1bWJuYWlsRHJhd24gPSBuZXcgRXZlbnRFbWl0dGVyPFBkZlRodW1ibmFpbERyYXduRXZlbnQ+KCk7XHJcblxyXG4gIHB1YmxpYyBnZXQgdG9wKCk6IHN0cmluZyB7XHJcbiAgICBsZXQgdG9wID0gMDtcclxuICAgIGlmICghdGhpcy5oaWRlU2lkZWJhclRvb2xiYXIpIHtcclxuICAgICAgdG9wID0gMzIgKiB0aGlzLm1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlO1xyXG4gICAgICBpZiAodG9wID09PSAzMikge1xyXG4gICAgICAgIHRvcCA9IDMzOyAvLyBwcmV2ZW50IHRoZSBib3JkZXIgb2YgdGhlIHNpZGViYXIgdG9vbGJhciBmcm9tIGJlaW5nIGN1dCBvZmZcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGAke3RvcH1weGA7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAod2luZG93IGFzIGFueSkucGRmVGh1bWJuYWlsR2VuZXJhdG9yUmVhZHkgPSAoKSA9PiB0aGlzLnBkZlRodW1ibmFpbEdlbmVyYXRvclJlYWR5KCk7XHJcbiAgICAgICh3aW5kb3cgYXMgYW55KS5wZGZUaHVtYm5haWxHZW5lcmF0b3IgPSAoXHJcbiAgICAgICAgcGRmVGh1bWJuYWlsVmlldzogUERGVGh1bWJuYWlsVmlldyxcclxuICAgICAgICBsaW5rU2VydmljZTogYW55LFxyXG4gICAgICAgIGlkOiBudW1iZXIsXHJcbiAgICAgICAgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCxcclxuICAgICAgICB0aHVtYlBhZ2VUaXRsZVByb21pc2U6IFByb21pc2U8c3RyaW5nPlxyXG4gICAgICApID0+IHRoaXMuY3JlYXRlVGh1bWJuYWlsKHBkZlRodW1ibmFpbFZpZXcsIGxpbmtTZXJ2aWNlLCBpZCwgY29udGFpbmVyLCB0aHVtYlBhZ2VUaXRsZVByb21pc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5saW5rU2VydmljZSA9IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwZGZUaHVtYm5haWxHZW5lcmF0b3JSZWFkeSgpOiBib29sZWFuIHtcclxuICAgIGlmICghdGhpcy50aHVtYm5haWxWaWV3VGVtcGxhdGUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdCA9IHRoaXMudGh1bWJuYWlsVmlld1RlbXBsYXRlLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICByZXR1cm4gISF0ICYmICEhdC5pbm5lckhUTUwgJiYgdC5pbm5lckhUTUwubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlVGh1bWJuYWlsKFxyXG4gICAgcGRmVGh1bWJuYWlsVmlldzogUERGVGh1bWJuYWlsVmlldyxcclxuICAgIGxpbmtTZXJ2aWNlOiBQREZMaW5rU2VydmljZSxcclxuICAgIGlkOiBudW1iZXIsXHJcbiAgICBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50LFxyXG4gICAgdGh1bWJQYWdlVGl0bGVQcm9taXNlOiBQcm9taXNlPHN0cmluZz5cclxuICApIHtcclxuICAgIHRoaXMubGlua1NlcnZpY2UgPSBsaW5rU2VydmljZTtcclxuICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy50aHVtYm5haWxWaWV3VGVtcGxhdGU7XHJcbiAgICAvLyBnZXQgdGhlIGlubmVyIEhUTUwgd2l0aG91dCB0aGUgYXR0cmlidXRlcyBhbmQgY2xhc3NlcyBhZGRlZCBieSBBbmd1bGFyXHJcbiAgICBjb25zdCBpbm5lciA9IHRlbXBsYXRlLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MXHJcbiAgICAgIC5zcGxpdCgvX25nXFx3Ky1cXHcrLVxcdys9XCJcIi9nKVxyXG4gICAgICAuam9pbignJylcclxuICAgICAgLnNwbGl0KC9uZy1cXHcrLVxcdysvZylcclxuICAgICAgLmpvaW4oJycpXHJcbiAgICAgIC5zcGxpdCgvPCEtLVtcXHNcXFNdKj8tLT4vZylcclxuICAgICAgLmpvaW4oJycpO1xyXG5cclxuICAgIGNvbnN0IGJvcmRlckFkanVzdG1lbnQgPSAyICogVEhVTUJOQUlMX0NBTlZBU19CT1JERVJfV0lEVEg7XHJcblxyXG4gICAgY29uc3Qgd2lkdGhPZlJpbmcgPSBgJHtwZGZUaHVtYm5haWxWaWV3LmNhbnZhc1dpZHRoICsgYm9yZGVyQWRqdXN0bWVudH1weGA7XHJcbiAgICBjb25zdCBoZWlnaHRPZlJpbmcgPSBgJHtwZGZUaHVtYm5haWxWaWV3LmNhbnZhc0hlaWdodCArIGJvcmRlckFkanVzdG1lbnR9cHhgO1xyXG5cclxuICAgIGNvbnN0IG5ld0h0bWwgPSBpbm5lci5zcGxpdCgnV0lEVEhfT0ZfUklORycpLmpvaW4od2lkdGhPZlJpbmcpLnNwbGl0KCdIRUlHSFRfT0ZfUklORycpLmpvaW4oaGVpZ2h0T2ZSaW5nKS5zcGxpdCgnUEFHRV9OVU1CRVInKS5qb2luKGlkKTtcclxuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSB0aGlzLmNyZWF0ZUVsZW1lbnRGcm9tSFRNTChuZXdIdG1sKTtcclxuICAgIG5ld0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncGRmLXZpZXdlci10ZW1wbGF0ZScpO1xyXG5cclxuICAgIGNvbnN0IGFuY2hvciA9IG5ld0VsZW1lbnQgYXMgSFRNTEFuY2hvckVsZW1lbnQ7XHJcbiAgICBhbmNob3IuaHJlZiA9IGxpbmtTZXJ2aWNlLmdldEFuY2hvclVybChgI3BhZ2U9JHtpZH1gKTtcclxuICAgIHRodW1iUGFnZVRpdGxlUHJvbWlzZS50aGVuKChtc2cpID0+IHtcclxuICAgICAgYW5jaG9yLnRpdGxlID0gbXNnO1xyXG4gICAgfSk7XHJcbiAgICBhbmNob3Iub25jbGljayA9ICgpID0+IHtcclxuICAgICAgbGlua1NlcnZpY2UucGFnZSA9IGlkO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgcGRmVGh1bWJuYWlsVmlldy5hbmNob3IgPSBhbmNob3I7XHJcblxyXG4gICAgY29uc3QgcmluZyA9IG5ld0VsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW1hZ2UtY29udGFpbmVyJylbMF0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBwZGZUaHVtYm5haWxWaWV3LnJpbmcgPSByaW5nO1xyXG4gICAgcGRmVGh1bWJuYWlsVmlldy5kaXYgPSBuZXdFbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RodW1ibmFpbCcpWzBdIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcclxuXHJcbiAgICBjb25zdCB0aHVtYm5haWxEcmF3bkV2ZW50OiBQZGZUaHVtYm5haWxEcmF3bkV2ZW50ID0ge1xyXG4gICAgICB0aHVtYm5haWw6IG5ld0VsZW1lbnQsXHJcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxyXG4gICAgICBwYWdlSWQ6IGlkLFxyXG4gICAgfTtcclxuICAgIHRoaXMudGh1bWJuYWlsRHJhd24uZW1pdCh0aHVtYm5haWxEcmF3bkV2ZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0VHJ1c3RlZEh0bWwoaHRtbDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCB0dFdpbmRvdyA9IHdpbmRvdyBhcyB1bmtub3duIGFzIFRydXN0ZWRUeXBlc1dpbmRvdztcclxuICAgIGlmICh0dFdpbmRvdy50cnVzdGVkVHlwZXMpIHtcclxuICAgICAgLy8gQ3JlYXRlIGEgcG9saWN5IHRoYXQgY2FuIGNyZWF0ZSBUcnVzdGVkSFRNTCB2YWx1ZXNcclxuICAgICAgLy8gYWZ0ZXIgc2FuaXRpemluZyB0aGUgaW5wdXQgc3RyaW5ncyB3aXRoIERPTVB1cmlmeSBsaWJyYXJ5LlxyXG4gICAgICBjb25zdCBzYW5pdGl6ZXIgPSB0dFdpbmRvdy50cnVzdGVkVHlwZXMuY3JlYXRlUG9saWN5KCdmb28nLCB7XHJcbiAgICAgICAgY3JlYXRlSFRNTDogKGlucHV0KSA9PiBpbnB1dCxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gc2FuaXRpemVyLmNyZWF0ZUhUTUwoaHRtbCkgYXMgdW5rbm93biBhcyBhbnk7IC8vIFB1dHMgdGhlIHNhbml0aXplZCB2YWx1ZSBpbnRvIHRoZSBET00uXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gaHRtbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlRWxlbWVudEZyb21IVE1MKGh0bWxTdHJpbmcpOiBIVE1MRWxlbWVudCB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHRydXN0ZWRIdG1sID0gdGhpcy5nZXRUcnVzdGVkSHRtbChodG1sU3RyaW5nLnRyaW0oKSk7XHJcbiAgICBkaXYuaW5uZXJIVE1MID0gdHJ1c3RlZEh0bWw7XHJcblxyXG4gICAgLy8gQ2hhbmdlIHRoaXMgdG8gZGl2LmNoaWxkTm9kZXMgdG8gc3VwcG9ydCBtdWx0aXBsZSB0b3AtbGV2ZWwgbm9kZXNcclxuICAgIHJldHVybiBkaXYuZmlyc3RDaGlsZCBhcyBIVE1MRWxlbWVudDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChldmVudC5jb2RlID09PSAnQXJyb3dEb3duJykge1xyXG4gICAgICBpZiAodGhpcy5saW5rU2VydmljZSkge1xyXG4gICAgICAgIGlmIChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpIHtcclxuICAgICAgICAgIHRoaXMubGlua1NlcnZpY2UucGFnZSA9IHRoaXMubGlua1NlcnZpY2UucGFnZXNDb3VudDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGlua1NlcnZpY2UucGFnZSA8IHRoaXMubGlua1NlcnZpY2UucGFnZXNDb3VudCkge1xyXG4gICAgICAgICAgdGhpcy5saW5rU2VydmljZS5wYWdlID0gdGhpcy5saW5rU2VydmljZS5wYWdlICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChldmVudC5jb2RlID09PSAnQXJyb3dVcCcpIHtcclxuICAgICAgaWYgKHRoaXMubGlua1NlcnZpY2UpIHtcclxuICAgICAgICBpZiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSB7XHJcbiAgICAgICAgICB0aGlzLmxpbmtTZXJ2aWNlLnBhZ2UgPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5saW5rU2VydmljZS5wYWdlID4gMSkge1xyXG4gICAgICAgICAgdGhpcy5saW5rU2VydmljZS5wYWdlID0gdGhpcy5saW5rU2VydmljZS5wYWdlIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGlkPVwic2lkZWJhckNvbnRlbnRcIiBbc3R5bGUudG9wXT1cInRvcFwiPlxyXG4gIDxkaXYgI3RodW1ibmFpbFZpZXdUZW1wbGF0ZT5cclxuICAgIDxuZy1jb250ZW50ICpuZ1RlbXBsYXRlT3V0bGV0PVwiY3VzdG9tVGh1bWJuYWlsID8gY3VzdG9tVGh1bWJuYWlsIDogZGVmYXVsdFRodW1ibmFpbFwiPjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGlkPVwidGh1bWJuYWlsVmlld1wiIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCI+PC9kaXY+XHJcbiAgPGRpdiBpZD1cIm91dGxpbmVWaWV3XCIgY2xhc3M9XCJoaWRkZW5cIj48L2Rpdj5cclxuICA8ZGl2IGlkPVwiYXR0YWNobWVudHNWaWV3XCIgY2xhc3M9XCJoaWRkZW5cIj48L2Rpdj5cclxuICA8ZGl2IGlkPVwibGF5ZXJzVmlld1wiIGNsYXNzPVwiaGlkZGVuXCI+PC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPG5nLXRlbXBsYXRlICNkZWZhdWx0VGh1bWJuYWlsPlxyXG4gIDxhIGNsYXNzPVwicGRmLXZpZXdlci10ZW1wbGF0ZVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInRodW1ibmFpbFwiIGRhdGEtcGFnZS1udW1iZXI9XCIkcGFnZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGh1bWJuYWlsU2VsZWN0aW9uUmluZyBpbWFnZS1jb250YWluZXJcIiBzdHlsZT1cIndpZHRoOiBXSURUSF9PRl9SSU5HOyBoZWlnaHQ6IEhFSUdIVF9PRl9SSU5HXCI+XHJcbiAgICAgICAgPCEtLSBpbWFnZSBpcyBhdXRvbWF0aWNhbGx5IGluc2VydGVkIGhlcmUgLS0+XHJcbiAgICAgICAgPCEtLSA8aW1nIGNsYXNzPVwidGh1bWJuYWlsSW1hZ2VcIiBzdHlsZT1cIndpZHRoOiA5OHB4OyBoZWlnaHQ6IDczcHg7XCIgLz4gLS0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9hPlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=
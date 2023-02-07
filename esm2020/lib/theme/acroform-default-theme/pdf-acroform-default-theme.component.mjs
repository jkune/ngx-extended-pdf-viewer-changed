import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { addTrustedHTML } from '../sanitized-css-injector';
import { css } from './pdf-acroform-default-colors-css';
import * as i0 from "@angular/core";
export class PdfAcroformDefaultThemeComponent {
    constructor(renderer, document) {
        this.renderer = renderer;
        this.document = document;
    }
    ngOnInit() {
        this.injectStyle();
    }
    injectStyle() {
        const styles = this.document.createElement('STYLE');
        styles.id = 'pdf-acroform-css';
        addTrustedHTML(styles, css);
        this.renderer.appendChild(this.document.head, styles);
    }
    ngOnDestroy() {
        const styles = this.document.getElementById('pdf-acroform-css');
        if (styles && styles.parentElement) {
            styles.parentElement.removeChild(styles);
        }
    }
}
/** @nocollapse */ PdfAcroformDefaultThemeComponent.ɵfac = function PdfAcroformDefaultThemeComponent_Factory(t) { return new (t || PdfAcroformDefaultThemeComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(DOCUMENT)); };
/** @nocollapse */ PdfAcroformDefaultThemeComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfAcroformDefaultThemeComponent, selectors: [["pdf-acroform-default-theme"]], decls: 0, vars: 0, template: function PdfAcroformDefaultThemeComponent_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfAcroformDefaultThemeComponent, [{
        type: Component,
        args: [{ selector: 'pdf-acroform-default-theme', template: '', styles: [] }]
    }], function () { return [{ type: i0.Renderer2 }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWFjcm9mb3JtLWRlZmF1bHQtdGhlbWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90aGVtZS9hY3JvZm9ybS1kZWZhdWx0LXRoZW1lL3BkZi1hY3JvZm9ybS1kZWZhdWx0LXRoZW1lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQXFCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztBQWF4RCxNQUFNLE9BQU8sZ0NBQWdDO0lBQzNDLFlBQW9CLFFBQW1CLEVBQTRCLFFBQWE7UUFBNUQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUE0QixhQUFRLEdBQVIsUUFBUSxDQUFLO0lBQUcsQ0FBQztJQUU3RSxRQUFRO1FBQ2IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTyxXQUFXO1FBQ2pCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBcUIsQ0FBQztRQUN4RSxNQUFNLENBQUMsRUFBRSxHQUFHLGtCQUFrQixDQUFDO1FBQy9CLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVNLFdBQVc7UUFDaEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQWdCLENBQUM7UUFDL0UsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLGFBQWEsRUFBRTtZQUNqQyxNQUFNLENBQUMsYUFBcUIsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDOzttSUFuQlUsZ0NBQWdDLDJEQUNNLFFBQVE7a0hBRDlDLGdDQUFnQzt1RkFBaEMsZ0NBQWdDO2NBWDVDLFNBQVM7MkJBQ0UsNEJBQTRCLFlBQzVCLEVBQUU7O3NCQVU4QixNQUFNO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGFkZFRydXN0ZWRIVE1MIH0gZnJvbSAnLi4vc2FuaXRpemVkLWNzcy1pbmplY3Rvcic7XHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJy4vcGRmLWFjcm9mb3JtLWRlZmF1bHQtY29sb3JzLWNzcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BkZi1hY3JvZm9ybS1kZWZhdWx0LXRoZW1lJyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbiAgc3R5bGVVcmxzOiBbXHJcbiAgICAvLyAgICAnLi9wZGYtYWNyb2Zvcm0tZGVmYXVsdC1jb2xvcnMuc2NzcycsXHJcbiAgICAvLyAgICAnLi4vY29tbW9uL2Fubm90YXRpb24tbGF5ZXItYnVpbGRlci5zY3NzJyxcclxuICAgIC8vICAgICcuLi9jb21tb24veGZhX2xheWVyX2J1aWxkZXIuc2NzcycsXHJcbiAgICAvLyAgICAnLi4vY29tbW9uL2Fubm90YXRpb25fZWRpdG9yX2xheWVyX2J1aWxkZXIuY3NzJyxcclxuICBdLFxyXG4gIC8vICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmQWNyb2Zvcm1EZWZhdWx0VGhlbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnkpIHt9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5qZWN0U3R5bGUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5qZWN0U3R5bGUoKSB7XHJcbiAgICBjb25zdCBzdHlsZXMgPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1NUWUxFJykgYXMgSFRNTFN0eWxlRWxlbWVudDtcclxuICAgIHN0eWxlcy5pZCA9ICdwZGYtYWNyb2Zvcm0tY3NzJztcclxuICAgIGFkZFRydXN0ZWRIVE1MKHN0eWxlcywgY3NzKTtcclxuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5kb2N1bWVudC5oZWFkLCBzdHlsZXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xyXG4gICAgY29uc3Qgc3R5bGVzID0gdGhpcy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGRmLWFjcm9mb3JtLWNzcycpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgaWYgKHN0eWxlcyAmJiBzdHlsZXMucGFyZW50RWxlbWVudCkge1xyXG4gICAgICAoc3R5bGVzLnBhcmVudEVsZW1lbnQgYXMgYW55KS5yZW1vdmVDaGlsZChzdHlsZXMpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
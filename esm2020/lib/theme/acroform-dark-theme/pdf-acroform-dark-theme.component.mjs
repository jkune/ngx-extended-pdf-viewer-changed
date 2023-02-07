import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { addTrustedHTML } from '../sanitized-css-injector';
import { css } from './pdf-acroform-dark-colors-css';
import * as i0 from "@angular/core";
export class PdfAcroformDarkThemeComponent {
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
/** @nocollapse */ PdfAcroformDarkThemeComponent.ɵfac = function PdfAcroformDarkThemeComponent_Factory(t) { return new (t || PdfAcroformDarkThemeComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(DOCUMENT)); };
/** @nocollapse */ PdfAcroformDarkThemeComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfAcroformDarkThemeComponent, selectors: [["pdf-acroform-dark-theme"]], decls: 0, vars: 0, template: function PdfAcroformDarkThemeComponent_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfAcroformDarkThemeComponent, [{
        type: Component,
        args: [{ selector: 'pdf-acroform-dark-theme', template: '', styles: [] }]
    }], function () { return [{ type: i0.Renderer2 }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWFjcm9mb3JtLWRhcmstdGhlbWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90aGVtZS9hY3JvZm9ybS1kYXJrLXRoZW1lL3BkZi1hY3JvZm9ybS1kYXJrLXRoZW1lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQXFCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQWFyRCxNQUFNLE9BQU8sNkJBQTZCO0lBQ3hDLFlBQW9CLFFBQW1CLEVBQTRCLFFBQWE7UUFBNUQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUE0QixhQUFRLEdBQVIsUUFBUSxDQUFLO0lBQUcsQ0FBQztJQUU3RSxRQUFRO1FBQ2IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTyxXQUFXO1FBQ2pCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBcUIsQ0FBQztRQUN4RSxNQUFNLENBQUMsRUFBRSxHQUFHLGtCQUFrQixDQUFDO1FBQy9CLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVNLFdBQVc7UUFDaEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQWdCLENBQUM7UUFDL0UsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLGFBQWEsRUFBRTtZQUNqQyxNQUFNLENBQUMsYUFBcUIsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDOzs2SEFuQlUsNkJBQTZCLDJEQUNTLFFBQVE7K0dBRDlDLDZCQUE2Qjt1RkFBN0IsNkJBQTZCO2NBWHpDLFNBQVM7MkJBQ0UseUJBQXlCLFlBQ3pCLEVBQUU7O3NCQVU4QixNQUFNO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGFkZFRydXN0ZWRIVE1MIH0gZnJvbSAnLi4vc2FuaXRpemVkLWNzcy1pbmplY3Rvcic7XHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJy4vcGRmLWFjcm9mb3JtLWRhcmstY29sb3JzLWNzcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BkZi1hY3JvZm9ybS1kYXJrLXRoZW1lJyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbiAgc3R5bGVVcmxzOiBbXHJcbiAgICAvLycuL3BkZi1hY3JvZm9ybS1kYXJrLWNvbG9ycy5zY3NzJyxcclxuICAgIC8vJy4uL2NvbW1vbi9hbm5vdGF0aW9uLWxheWVyLWJ1aWxkZXIuc2NzcycsXHJcbiAgICAvLycuLi9jb21tb24veGZhX2xheWVyX2J1aWxkZXIuc2NzcycsXHJcbiAgICAvLycuLi9jb21tb24vYW5ub3RhdGlvbl9lZGl0b3JfbGF5ZXJfYnVpbGRlci5jc3MnLFxyXG4gIF0sXHJcbiAgLy8gZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZkFjcm9mb3JtRGFya1RoZW1lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55KSB7fVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluamVjdFN0eWxlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluamVjdFN0eWxlKCkge1xyXG4gICAgY29uc3Qgc3R5bGVzID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdTVFlMRScpIGFzIEhUTUxTdHlsZUVsZW1lbnQ7XHJcbiAgICBzdHlsZXMuaWQgPSAncGRmLWFjcm9mb3JtLWNzcyc7XHJcbiAgICBhZGRUcnVzdGVkSFRNTChzdHlsZXMsIGNzcyk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZG9jdW1lbnQuaGVhZCwgc3R5bGVzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcclxuICAgIGNvbnN0IHN0eWxlcyA9IHRoaXMuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BkZi1hY3JvZm9ybS1jc3MnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIGlmIChzdHlsZXMgJiYgc3R5bGVzLnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgKHN0eWxlcy5wYXJlbnRFbGVtZW50IGFzIGFueSkucmVtb3ZlQ2hpbGQoc3R5bGVzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
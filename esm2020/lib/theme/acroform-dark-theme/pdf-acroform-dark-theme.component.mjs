import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
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
PdfAcroformDarkThemeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: PdfAcroformDarkThemeComponent, deps: [{ token: i0.Renderer2 }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Component });
PdfAcroformDarkThemeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: PdfAcroformDarkThemeComponent, selector: "pdf-acroform-dark-theme", ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: PdfAcroformDarkThemeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-acroform-dark-theme', template: '', styles: [] }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWFjcm9mb3JtLWRhcmstdGhlbWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90aGVtZS9hY3JvZm9ybS1kYXJrLXRoZW1lL3BkZi1hY3JvZm9ybS1kYXJrLXRoZW1lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQWdDLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0FBYXJELE1BQU0sT0FBTyw2QkFBNkI7SUFDeEMsWUFBb0IsUUFBbUIsRUFBNEIsUUFBYTtRQUE1RCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQTRCLGFBQVEsR0FBUixRQUFRLENBQUs7SUFBRyxDQUFDO0lBRTdFLFFBQVE7UUFDYixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVPLFdBQVc7UUFDakIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFxQixDQUFDO1FBQ3hFLE1BQU0sQ0FBQyxFQUFFLEdBQUcsa0JBQWtCLENBQUM7UUFDL0IsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRU0sV0FBVztRQUNoQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBZ0IsQ0FBQztRQUMvRSxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsYUFBYSxFQUFFO1lBQ2pDLE1BQU0sQ0FBQyxhQUFxQixDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNuRDtJQUNILENBQUM7OzJIQW5CVSw2QkFBNkIsMkNBQ1MsUUFBUTsrR0FEOUMsNkJBQTZCLCtEQVQ5QixFQUFFOzRGQVNELDZCQUE2QjtrQkFYekMsU0FBUzsrQkFDRSx5QkFBeUIsWUFDekIsRUFBRTs7MEJBVThCLE1BQU07MkJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIE9uRGVzdHJveSwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgYWRkVHJ1c3RlZEhUTUwgfSBmcm9tICcuLi9zYW5pdGl6ZWQtY3NzLWluamVjdG9yJztcclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnLi9wZGYtYWNyb2Zvcm0tZGFyay1jb2xvcnMtY3NzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGRmLWFjcm9mb3JtLWRhcmstdGhlbWUnLFxyXG4gIHRlbXBsYXRlOiAnJyxcclxuICBzdHlsZVVybHM6IFtcclxuICAgIC8vJy4vcGRmLWFjcm9mb3JtLWRhcmstY29sb3JzLnNjc3MnLFxyXG4gICAgLy8nLi4vY29tbW9uL2Fubm90YXRpb24tbGF5ZXItYnVpbGRlci5zY3NzJyxcclxuICAgIC8vJy4uL2NvbW1vbi94ZmFfbGF5ZXJfYnVpbGRlci5zY3NzJyxcclxuICAgIC8vJy4uL2NvbW1vbi9hbm5vdGF0aW9uX2VkaXRvcl9sYXllcl9idWlsZGVyLmNzcycsXHJcbiAgXSxcclxuICAvLyBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmQWNyb2Zvcm1EYXJrVGhlbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnkpIHt9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5qZWN0U3R5bGUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5qZWN0U3R5bGUoKSB7XHJcbiAgICBjb25zdCBzdHlsZXMgPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1NUWUxFJykgYXMgSFRNTFN0eWxlRWxlbWVudDtcclxuICAgIHN0eWxlcy5pZCA9ICdwZGYtYWNyb2Zvcm0tY3NzJztcclxuICAgIGFkZFRydXN0ZWRIVE1MKHN0eWxlcywgY3NzKTtcclxuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5kb2N1bWVudC5oZWFkLCBzdHlsZXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xyXG4gICAgY29uc3Qgc3R5bGVzID0gdGhpcy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGRmLWFjcm9mb3JtLWNzcycpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgaWYgKHN0eWxlcyAmJiBzdHlsZXMucGFyZW50RWxlbWVudCkge1xyXG4gICAgICAoc3R5bGVzLnBhcmVudEVsZW1lbnQgYXMgYW55KS5yZW1vdmVDaGlsZChzdHlsZXMpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class TranslatePipe {
    transform(key, fallback) {
        return this.translate(key, fallback);
    }
    async translate(key, englishText) {
        const PDFViewerApplication = window.PDFViewerApplication;
        return PDFViewerApplication.l10n.get(key, null, englishText);
    }
}
/** @nocollapse */ TranslatePipe.ɵfac = function TranslatePipe_Factory(t) { return new (t || TranslatePipe)(); };
/** @nocollapse */ TranslatePipe.ɵpipe = /** @pureOrBreakMyCode */ i0.ɵɵdefinePipe({ name: "translate", type: TranslatePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TranslatePipe, [{
        type: Pipe,
        args: [{
                name: 'translate'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3RyYW5zbGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQU1wRCxNQUFNLE9BQU8sYUFBYTtJQUV4QixTQUFTLENBQUMsR0FBVyxFQUFFLFFBQWdCO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVNLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBVyxFQUFFLFdBQW1CO1FBQ3JELE1BQU0sb0JBQW9CLEdBQTJCLE1BQWMsQ0FBQyxvQkFBb0IsQ0FBQztRQUV6RixPQUFPLG9CQUFvQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs2RkFWVSxhQUFhOzhHQUFiLGFBQWE7dUZBQWIsYUFBYTtjQUh6QixJQUFJO2VBQUM7Z0JBQ0osSUFBSSxFQUFFLFdBQVc7YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElQREZWaWV3ZXJBcHBsaWNhdGlvbiB9IGZyb20gJy4vb3B0aW9ucy9wZGYtdmlld2VyLWFwcGxpY2F0aW9uJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAndHJhbnNsYXRlJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICB0cmFuc2Zvcm0oa2V5OiBzdHJpbmcsIGZhbGxiYWNrOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlKGtleSwgZmFsbGJhY2spO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIHRyYW5zbGF0ZShrZXk6IHN0cmluZywgZW5nbGlzaFRleHQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG5cclxuICAgIHJldHVybiBQREZWaWV3ZXJBcHBsaWNhdGlvbi5sMTBuLmdldChrZXksIG51bGwsIGVuZ2xpc2hUZXh0KTtcclxuICB9XHJcbn1cclxuIl19
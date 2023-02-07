import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { getVersionSuffix, pdfDefaultOptions } from './options/pdf-default-options';
import * as i0 from "@angular/core";
export class PDFNotificationService {
    constructor() {
        // this event is fired when the pdf.js library has been loaded and objects like PDFApplication are available
        this.onPDFJSInit = new Subject();
        this.pdfjsVersion = getVersionSuffix(pdfDefaultOptions.assetsFolder);
    }
}
/** @nocollapse */ PDFNotificationService.ɵfac = function PDFNotificationService_Factory(t) { return new (t || PDFNotificationService)(); };
/** @nocollapse */ PDFNotificationService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: PDFNotificationService, factory: PDFNotificationService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PDFNotificationService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLW5vdGlmaWNhdGlvbi1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9wZGYtbm90aWZpY2F0aW9uLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQUtwRixNQUFNLE9BQU8sc0JBQXNCO0lBSG5DO1FBSUUsNEdBQTRHO1FBQ3JHLGdCQUFXLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUVsQyxpQkFBWSxHQUFHLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ3hFOzsrR0FMWSxzQkFBc0I7MkdBQXRCLHNCQUFzQixXQUF0QixzQkFBc0IsbUJBRnJCLE1BQU07dUZBRVAsc0JBQXNCO2NBSGxDLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBnZXRWZXJzaW9uU3VmZml4LCBwZGZEZWZhdWx0T3B0aW9ucyB9IGZyb20gJy4vb3B0aW9ucy9wZGYtZGVmYXVsdC1vcHRpb25zJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQREZOb3RpZmljYXRpb25TZXJ2aWNlIHtcclxuICAvLyB0aGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHBkZi5qcyBsaWJyYXJ5IGhhcyBiZWVuIGxvYWRlZCBhbmQgb2JqZWN0cyBsaWtlIFBERkFwcGxpY2F0aW9uIGFyZSBhdmFpbGFibGVcclxuICBwdWJsaWMgb25QREZKU0luaXQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICBwdWJsaWMgcGRmanNWZXJzaW9uID0gZ2V0VmVyc2lvblN1ZmZpeChwZGZEZWZhdWx0T3B0aW9ucy5hc3NldHNGb2xkZXIpO1xyXG59XHJcbiJdfQ==
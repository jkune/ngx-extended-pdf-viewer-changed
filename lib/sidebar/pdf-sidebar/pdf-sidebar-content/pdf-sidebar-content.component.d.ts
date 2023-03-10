import { ElementRef, EventEmitter, OnDestroy, TemplateRef } from '@angular/core';
import { PdfThumbnailDrawnEvent } from '../../../events/pdf-thumbnail-drawn-event';
import * as i0 from "@angular/core";
export declare class PdfSidebarContentComponent implements OnDestroy {
    customThumbnail: TemplateRef<any> | undefined;
    hideSidebarToolbar: boolean;
    mobileFriendlyZoomScale: number;
    thumbnailViewTemplate: ElementRef;
    private linkService;
    thumbnailDrawn: EventEmitter<PdfThumbnailDrawnEvent>;
    get top(): string;
    constructor();
    ngOnDestroy(): void;
    pdfThumbnailGeneratorReady(): boolean;
    private createThumbnail;
    private getTrustedHtml;
    private createElementFromHTML;
    onKeyDown(event: KeyboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PdfSidebarContentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PdfSidebarContentComponent, "pdf-sidebar-content", never, { "customThumbnail": "customThumbnail"; "hideSidebarToolbar": "hideSidebarToolbar"; "mobileFriendlyZoomScale": "mobileFriendlyZoomScale"; }, { "thumbnailDrawn": "thumbnailDrawn"; }, never, ["*"]>;
}

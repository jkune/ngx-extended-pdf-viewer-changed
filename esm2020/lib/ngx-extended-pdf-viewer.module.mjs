// tslint:disable:max-line-length
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxExtendedPdfViewerCommonModule } from './ngx-extended-pdf-viewer-common.module';
import { NgxExtendedPdfViewerComponent } from './ngx-extended-pdf-viewer.component';
import { NgxExtendedPdfViewerService } from './ngx-extended-pdf-viewer.service';
import { NgxConsole } from './options/ngx-console';
import { PdfDocumentPropertiesDialogComponent } from './pdf-dialog/pdf-document-properties-dialog/pdf-document-properties-dialog.component';
import { PdfErrorMessageComponent } from './pdf-dialog/pdf-error-message/pdf-error-message.component';
import { PdfPasswordDialogComponent } from './pdf-dialog/pdf-password-dialog/pdf-password-dialog.component';
import { PdfPreparePrintingDialogComponent } from './pdf-dialog/pdf-prepare-printing-dialog/pdf-prepare-printing-dialog.component';
import { PdfSecondaryToolbarComponent } from './secondary-toolbar/pdf-secondary-toolbar/pdf-secondary-toolbar.component';
import { PdfSidebarContentComponent } from './sidebar/pdf-sidebar/pdf-sidebar-content/pdf-sidebar-content.component';
import { PdfSidebarToolbarComponent } from './sidebar/pdf-sidebar/pdf-sidebar-toolbar/pdf-sidebar-toolbar.component';
import { PdfSidebarComponent } from './sidebar/pdf-sidebar/pdf-sidebar.component';
import { PdfAcroformDarkThemeComponent } from './theme/acroform-dark-theme/pdf-acroform-dark-theme.component';
import { PdfAcroformDefaultThemeComponent } from './theme/acroform-default-theme/pdf-acroform-default-theme.component';
import { PdfContextMenuComponent } from './toolbar/pdf-context-menu/pdf-context-menu.component';
import { PdfDownloadComponent } from './toolbar/pdf-download/pdf-download.component';
import { PdfEditorComponent } from './toolbar/pdf-editor/pdf-editor.component';
import { PdfFindButtonComponent } from './toolbar/pdf-find-button/pdf-find-button.component';
import { PdfFindCurrentPageOnlyComponent } from './toolbar/pdf-findbar/pdf-find-current-page-only/pdf-find-current-page-only.component';
import { PdfFindInputAreaComponent } from './toolbar/pdf-findbar/pdf-find-input-area/pdf-find-input-area.component';
import { PdfFindNextComponent } from './toolbar/pdf-findbar/pdf-find-next/pdf-find-next.component';
import { PdfFindPreviousComponent } from './toolbar/pdf-findbar/pdf-find-previous/pdf-find-previous.component';
import { PdfFindRangeComponent } from './toolbar/pdf-findbar/pdf-find-range/pdf-find-range.component';
import { PdfFindbarMessageContainerComponent } from './toolbar/pdf-findbar/pdf-findbar-message-container/pdf-findbar-message-container.component';
import { PdfFindHighlightAllComponent } from './toolbar/pdf-findbar/pdf-findbar-options-one-container/pdf-find-highlight-all/pdf-find-highlight-all.component';
import { PdfFindMatchCaseComponent } from './toolbar/pdf-findbar/pdf-findbar-options-one-container/pdf-find-match-case/pdf-find-match-case.component';
import { PdfFindbarOptionsOneContainerComponent } from './toolbar/pdf-findbar/pdf-findbar-options-one-container/pdf-findbar-options-one-container.component';
import { PdfFindIgnoreAccentsComponent } from './toolbar/pdf-findbar/pdf-findbar-options-three-container/pdf-find-ignore-accents/pdf-find-ignore-accents.component';
import { PdfFindResultsCountComponent } from './toolbar/pdf-findbar/pdf-findbar-options-three-container/pdf-find-results-count/pdf-find-results-count.component';
import { PdfFindbarOptionsThreeContainerComponent } from './toolbar/pdf-findbar/pdf-findbar-options-three-container/pdf-findbar-options-three-container.component';
import { PdfFindMultipleSearchTextsComponent } from './toolbar/pdf-findbar/pdf-findbar-options-two-container/pdf-find-entire-phrase/pdf-find-entire-phrase.component';
import { PdfFindEntireWordComponent } from './toolbar/pdf-findbar/pdf-findbar-options-two-container/pdf-find-entire-word/pdf-find-entire-word.component';
import { PdfFindbarOptionsTwoContainerComponent } from './toolbar/pdf-findbar/pdf-findbar-options-two-container/pdf-findbar-options-two-container.component';
import { PdfFindbarComponent } from './toolbar/pdf-findbar/pdf-findbar.component';
import { PdfSearchInputFieldComponent } from './toolbar/pdf-findbar/pdf-search-input-field/pdf-search-input-field.component';
import { PdfHandToolComponent } from './toolbar/pdf-hand-tool/pdf-hand-tool.component';
import { PdfOpenFileComponent } from './toolbar/pdf-open-file/pdf-open-file.component';
import { PdfFirstPageComponent } from './toolbar/pdf-paging-area/pdf-first-page/pdf-first-page.component';
import { PdfLastPageComponent } from './toolbar/pdf-paging-area/pdf-last-page/pdf-last-page.component';
import { PdfNextPageComponent } from './toolbar/pdf-paging-area/pdf-next-page/pdf-next-page.component';
import { PdfPageNumberComponent } from './toolbar/pdf-paging-area/pdf-page-number/pdf-page-number.component';
import { PdfPagingAreaComponent } from './toolbar/pdf-paging-area/pdf-paging-area.component';
import { PdfPreviousPageComponent } from './toolbar/pdf-paging-area/pdf-previous-page/pdf-previous-page.component';
import { PdfPresentationModeComponent } from './toolbar/pdf-presentation-mode/pdf-presentation-mode.component';
import { PdfPrintComponent } from './toolbar/pdf-print/pdf-print.component';
import { PdfRotatePageComponent } from './toolbar/pdf-rotate-page/pdf-rotate-page.component';
import { PdfSelectToolComponent } from './toolbar/pdf-select-tool/pdf-select-tool.component';
import { PdfToggleSecondaryToolbarComponent } from './toolbar/pdf-toggle-secondary-toolbar/pdf-toggle-secondary-toolbar.component';
import { PdfToggleSidebarComponent } from './toolbar/pdf-toggle-sidebar/pdf-toggle-sidebar.component';
import { PdfToolbarComponent } from './toolbar/pdf-toolbar/pdf-toolbar.component';
import { PdfZoomDropdownComponent } from './toolbar/pdf-zoom-toolbar/pdf-zoom-dropdown/pdf-zoom-dropdown.component';
import { PdfZoomInComponent } from './toolbar/pdf-zoom-toolbar/pdf-zoom-in/pdf-zoom-in.component';
import { PdfZoomOutComponent } from './toolbar/pdf-zoom-toolbar/pdf-zoom-out/pdf-zoom-out.component';
import { PdfZoomToolbarComponent } from './toolbar/pdf-zoom-toolbar/pdf-zoom-toolbar.component';
import * as i0 from "@angular/core";
if (new Date().getTime() === 0) {
    new NgxConsole().log('');
}
if (!Promise['allSettled']) {
    if (!!window['Zone'] && !window['__zone_symbol__Promise.allSettled']) {
        console.error("Please update zone.js to version 0.10.3 or higher. Otherwise, you'll run the slow ECMAScript 5 version even on modern browser that can run the fast ESMAScript 2015 version.");
    }
}
function isKeyIgnored(cmd, keycode) {
    const PDFViewerApplicationOptions = window.PDFViewerApplicationOptions;
    const ignoreKeys = PDFViewerApplicationOptions.get('ignoreKeys');
    const acceptKeys = PDFViewerApplicationOptions.get('acceptKeys');
    if (keycode === 'WHEEL') {
        if (isKeyInList(ignoreKeys, cmd, 'WHEEL')) {
            return true;
        }
        if (!!acceptKeys && acceptKeys.length > 0) {
            return !isKeyInList(acceptKeys, cmd, 'WHEEL');
        }
        return false;
    }
    if (keycode === 16 || keycode === 17 || keycode === 18 || keycode === 224) {
        // ignore solitary SHIFT, ALT, CMD, and CTRL because they only make sense as two-key-combinations
        return true;
    }
    // cmd is a bit-array:
    // 1 == CTRL
    // 2 == ALT
    // 4 == SHIFT
    // 8 == META
    const ignoreKeyboard = PDFViewerApplicationOptions.get('ignoreKeyboard');
    if (!!ignoreKeyboard) {
        return true;
    }
    if (!!ignoreKeys && ignoreKeys.length > 0) {
        if (isKeyInList(ignoreKeys, cmd, keycode)) {
            return true;
        }
    }
    if (!!acceptKeys && acceptKeys.length > 0) {
        return !isKeyInList(acceptKeys, cmd, keycode);
    }
    return false;
}
function isKeyInList(settings, cmd, keycode) {
    if (!settings) {
        return true;
    }
    return settings.some((keyDef) => isKey(keyDef, cmd, keycode));
}
function isKey(keyDef, cmd, keycode) {
    let cmdDef = 0;
    let key = 0;
    keyDef = keyDef.toLowerCase();
    // tslint:disable: no-bitwise
    if (keyDef.includes('ctrl+')) {
        cmdDef |= 1;
        keyDef = keyDef.replace('ctrl+', '');
    }
    if (keyDef.includes('cmd+')) {
        cmdDef |= 8;
        keyDef = keyDef.replace('cmd+', '');
    }
    if (keyDef.includes('alt+')) {
        cmdDef |= 2;
        keyDef = keyDef.replace('alt+', '');
    }
    if (keyDef.includes('shift+')) {
        cmdDef |= 4;
        keyDef = keyDef.replace('shift+', '');
    }
    if (keyDef.includes('meta+')) {
        cmdDef |= 8;
        keyDef = keyDef.replace('meta+', '');
    }
    if (keyDef === 'up') {
        key = 38;
    }
    else if (keyDef === 'down') {
        key = 40;
    }
    else if (keyDef === '+' || keyDef === '"+"') {
        key = 171;
    }
    else if (keyDef === '-' || keyDef === '"-"') {
        key = 173;
    }
    else if (keyDef === 'esc') {
        key = 27;
    }
    else if (keyDef === 'enter') {
        key = 13;
    }
    else if (keyDef === 'space') {
        key = 32;
    }
    else if (keyDef === 'f4') {
        key = 115;
    }
    else if (keyDef === 'backspace') {
        key = 8;
    }
    else if (keyDef === 'home') {
        key = 36;
    }
    else if (keyDef === 'end') {
        key = 35;
    }
    else if (keyDef === 'left') {
        key = 37;
    }
    else if (keyDef === 'right') {
        key = 39;
    }
    else if (keyDef === 'pagedown') {
        key = 34;
    }
    else if (keyDef === 'pageup') {
        key = 33;
    }
    else {
        key = keyDef.toUpperCase().charCodeAt(0);
    }
    if (keycode === 'WHEEL') {
        return keyDef === 'wheel' && cmd === cmdDef;
    }
    return key === keycode && cmd === cmdDef;
}
if (typeof window !== 'undefined') {
    window.isKeyIgnored = isKeyIgnored;
}
export class NgxExtendedPdfViewerModule {
}
NgxExtendedPdfViewerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: NgxExtendedPdfViewerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxExtendedPdfViewerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: NgxExtendedPdfViewerModule, declarations: [NgxExtendedPdfViewerComponent], imports: [NgxExtendedPdfViewerCommonModule, CommonModule, FormsModule], exports: [PdfZoomDropdownComponent,
        PdfContextMenuComponent,
        PdfPresentationModeComponent,
        PdfOpenFileComponent,
        PdfPrintComponent,
        PdfDownloadComponent,
        PdfEditorComponent,
        PdfZoomToolbarComponent,
        PdfPagingAreaComponent,
        PdfFindbarComponent,
        PdfSidebarComponent,
        PdfSidebarContentComponent,
        PdfSidebarToolbarComponent,
        PdfSecondaryToolbarComponent,
        PdfSearchInputFieldComponent,
        PdfFindPreviousComponent,
        PdfFindNextComponent,
        PdfFindInputAreaComponent,
        PdfFindbarOptionsTwoContainerComponent,
        PdfFindbarOptionsOneContainerComponent,
        PdfFindMatchCaseComponent,
        PdfFindHighlightAllComponent,
        PdfFindRangeComponent,
        PdfFindCurrentPageOnlyComponent,
        PdfFindEntireWordComponent,
        PdfFindMultipleSearchTextsComponent,
        PdfFindIgnoreAccentsComponent,
        PdfFindbarOptionsThreeContainerComponent,
        PdfFindResultsCountComponent,
        PdfFindbarMessageContainerComponent,
        PdfHandToolComponent,
        PdfRotatePageComponent,
        PdfSelectToolComponent,
        PdfToolbarComponent,
        PdfFindButtonComponent,
        PdfToggleSidebarComponent,
        PdfToggleSecondaryToolbarComponent,
        PdfLastPageComponent,
        PdfFirstPageComponent,
        PdfNextPageComponent,
        PdfPreviousPageComponent,
        PdfPageNumberComponent,
        PdfZoomInComponent,
        PdfZoomOutComponent,
        NgxExtendedPdfViewerComponent,
        PdfAcroformDefaultThemeComponent,
        PdfAcroformDarkThemeComponent,
        PdfDocumentPropertiesDialogComponent,
        PdfPasswordDialogComponent,
        PdfPreparePrintingDialogComponent,
        PdfErrorMessageComponent] });
NgxExtendedPdfViewerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: NgxExtendedPdfViewerModule, providers: [NgxExtendedPdfViewerService], imports: [[NgxExtendedPdfViewerCommonModule, CommonModule, FormsModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: NgxExtendedPdfViewerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [NgxExtendedPdfViewerCommonModule, CommonModule, FormsModule],
                    declarations: [NgxExtendedPdfViewerComponent],
                    providers: [NgxExtendedPdfViewerService],
                    exports: [
                        PdfZoomDropdownComponent,
                        PdfContextMenuComponent,
                        PdfPresentationModeComponent,
                        PdfOpenFileComponent,
                        PdfPrintComponent,
                        PdfDownloadComponent,
                        PdfEditorComponent,
                        PdfZoomToolbarComponent,
                        PdfPagingAreaComponent,
                        PdfFindbarComponent,
                        PdfSidebarComponent,
                        PdfSidebarContentComponent,
                        PdfSidebarToolbarComponent,
                        PdfSecondaryToolbarComponent,
                        PdfSearchInputFieldComponent,
                        PdfFindPreviousComponent,
                        PdfFindNextComponent,
                        PdfFindInputAreaComponent,
                        PdfFindbarOptionsTwoContainerComponent,
                        PdfFindbarOptionsOneContainerComponent,
                        PdfFindMatchCaseComponent,
                        PdfFindHighlightAllComponent,
                        PdfFindRangeComponent,
                        PdfFindCurrentPageOnlyComponent,
                        PdfFindEntireWordComponent,
                        PdfFindMultipleSearchTextsComponent,
                        PdfFindIgnoreAccentsComponent,
                        PdfFindbarOptionsThreeContainerComponent,
                        PdfFindResultsCountComponent,
                        PdfFindbarMessageContainerComponent,
                        PdfHandToolComponent,
                        PdfRotatePageComponent,
                        PdfSelectToolComponent,
                        PdfToolbarComponent,
                        PdfFindButtonComponent,
                        PdfToggleSidebarComponent,
                        PdfToggleSecondaryToolbarComponent,
                        PdfLastPageComponent,
                        PdfFirstPageComponent,
                        PdfNextPageComponent,
                        PdfPreviousPageComponent,
                        PdfPageNumberComponent,
                        PdfZoomInComponent,
                        PdfZoomOutComponent,
                        NgxExtendedPdfViewerComponent,
                        PdfAcroformDefaultThemeComponent,
                        PdfAcroformDarkThemeComponent,
                        PdfDocumentPropertiesDialogComponent,
                        PdfPasswordDialogComponent,
                        PdfPreparePrintingDialogComponent,
                        PdfErrorMessageComponent,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUNBQWlDO0FBQ2pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMzRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFbkQsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sc0ZBQXNGLENBQUM7QUFDNUksT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDdEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDNUcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sZ0ZBQWdGLENBQUM7QUFDbkksT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUFDekgsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDckgsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDckgsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUFFLDZCQUE2QixFQUFF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QTZCO3dCQUM3QixvQ0FBb0M7d0JBQ3BDLDBCQUEwQjt3QkFDMUIsaUNBQWlDO3dCQUNqQyx3QkFBd0I7cUJBQ3pCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoXHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOZ3hFeHRlbmRlZFBkZlZpZXdlckNvbW1vbk1vZHVsZSB9IGZyb20gJy4vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXItY29tbW9uLm1vZHVsZSc7XHJcbmltcG9ydCB7IE5neEV4dGVuZGVkUGRmVmlld2VyQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ3hFeHRlbmRlZFBkZlZpZXdlclNlcnZpY2UgfSBmcm9tICcuL25neC1leHRlbmRlZC1wZGYtdmlld2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOZ3hDb25zb2xlIH0gZnJvbSAnLi9vcHRpb25zL25neC1jb25zb2xlJztcclxuaW1wb3J0IHsgSVBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucyB9IGZyb20gJy4vb3B0aW9ucy9wZGYtdmlld2VyLWFwcGxpY2F0aW9uLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBQZGZEb2N1bWVudFByb3BlcnRpZXNEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3BkZi1kaWFsb2cvcGRmLWRvY3VtZW50LXByb3BlcnRpZXMtZGlhbG9nL3BkZi1kb2N1bWVudC1wcm9wZXJ0aWVzLWRpYWxvZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZFcnJvck1lc3NhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BkZi1kaWFsb2cvcGRmLWVycm9yLW1lc3NhZ2UvcGRmLWVycm9yLW1lc3NhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmUGFzc3dvcmREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3BkZi1kaWFsb2cvcGRmLXBhc3N3b3JkLWRpYWxvZy9wZGYtcGFzc3dvcmQtZGlhbG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlByZXBhcmVQcmludGluZ0RpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vcGRmLWRpYWxvZy9wZGYtcHJlcGFyZS1wcmludGluZy1kaWFsb2cvcGRmLXByZXBhcmUtcHJpbnRpbmctZGlhbG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3NlY29uZGFyeS10b29sYmFyL3BkZi1zZWNvbmRhcnktdG9vbGJhci9wZGYtc2Vjb25kYXJ5LXRvb2xiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmU2lkZWJhckNvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXIvcGRmLXNpZGViYXIvcGRmLXNpZGViYXItY29udGVudC9wZGYtc2lkZWJhci1jb250ZW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlNpZGViYXJUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlYmFyL3BkZi1zaWRlYmFyL3BkZi1zaWRlYmFyLXRvb2xiYXIvcGRmLXNpZGViYXItdG9vbGJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZTaWRlYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlYmFyL3BkZi1zaWRlYmFyL3BkZi1zaWRlYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkFjcm9mb3JtRGFya1RoZW1lQ29tcG9uZW50IH0gZnJvbSAnLi90aGVtZS9hY3JvZm9ybS1kYXJrLXRoZW1lL3BkZi1hY3JvZm9ybS1kYXJrLXRoZW1lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkFjcm9mb3JtRGVmYXVsdFRoZW1lQ29tcG9uZW50IH0gZnJvbSAnLi90aGVtZS9hY3JvZm9ybS1kZWZhdWx0LXRoZW1lL3BkZi1hY3JvZm9ybS1kZWZhdWx0LXRoZW1lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkNvbnRleHRNZW51Q29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1jb250ZXh0LW1lbnUvcGRmLWNvbnRleHQtbWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZEb3dubG9hZENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZG93bmxvYWQvcGRmLWRvd25sb2FkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZWRpdG9yL3BkZi1lZGl0b3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRmluZEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZC1idXR0b24vcGRmLWZpbmQtYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkZpbmRDdXJyZW50UGFnZU9ubHlDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmQtY3VycmVudC1wYWdlLW9ubHkvcGRmLWZpbmQtY3VycmVudC1wYWdlLW9ubHkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRmluZElucHV0QXJlYUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZC1pbnB1dC1hcmVhL3BkZi1maW5kLWlucHV0LWFyZWEuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRmluZE5leHRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmQtbmV4dC9wZGYtZmluZC1uZXh0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkZpbmRQcmV2aW91c0NvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZC1wcmV2aW91cy9wZGYtZmluZC1wcmV2aW91cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZGaW5kUmFuZ2VDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmQtcmFuZ2UvcGRmLWZpbmQtcmFuZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRmluZGJhck1lc3NhZ2VDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItbWVzc2FnZS1jb250YWluZXIvcGRmLWZpbmRiYXItbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRmluZEhpZ2hsaWdodEFsbENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1vcHRpb25zLW9uZS1jb250YWluZXIvcGRmLWZpbmQtaGlnaGxpZ2h0LWFsbC9wZGYtZmluZC1oaWdobGlnaHQtYWxsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkZpbmRNYXRjaENhc2VDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy1vbmUtY29udGFpbmVyL3BkZi1maW5kLW1hdGNoLWNhc2UvcGRmLWZpbmQtbWF0Y2gtY2FzZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZGaW5kYmFyT3B0aW9uc09uZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1vcHRpb25zLW9uZS1jb250YWluZXIvcGRmLWZpbmRiYXItb3B0aW9ucy1vbmUtY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkZpbmRJZ25vcmVBY2NlbnRzQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kYmFyLW9wdGlvbnMtdGhyZWUtY29udGFpbmVyL3BkZi1maW5kLWlnbm9yZS1hY2NlbnRzL3BkZi1maW5kLWlnbm9yZS1hY2NlbnRzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkZpbmRSZXN1bHRzQ291bnRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy10aHJlZS1jb250YWluZXIvcGRmLWZpbmQtcmVzdWx0cy1jb3VudC9wZGYtZmluZC1yZXN1bHRzLWNvdW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkZpbmRiYXJPcHRpb25zVGhyZWVDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy10aHJlZS1jb250YWluZXIvcGRmLWZpbmRiYXItb3B0aW9ucy10aHJlZS1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRmluZE11bHRpcGxlU2VhcmNoVGV4dHNDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy10d28tY29udGFpbmVyL3BkZi1maW5kLWVudGlyZS1waHJhc2UvcGRmLWZpbmQtZW50aXJlLXBocmFzZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZGaW5kRW50aXJlV29yZENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1vcHRpb25zLXR3by1jb250YWluZXIvcGRmLWZpbmQtZW50aXJlLXdvcmQvcGRmLWZpbmQtZW50aXJlLXdvcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRmluZGJhck9wdGlvbnNUd29Db250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy10d28tY29udGFpbmVyL3BkZi1maW5kYmFyLW9wdGlvbnMtdHdvLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZGaW5kYmFyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlNlYXJjaElucHV0RmllbGRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLXNlYXJjaC1pbnB1dC1maWVsZC9wZGYtc2VhcmNoLWlucHV0LWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkhhbmRUb29sQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1oYW5kLXRvb2wvcGRmLWhhbmQtdG9vbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZPcGVuRmlsZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtb3Blbi1maWxlL3BkZi1vcGVuLWZpbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRmlyc3RQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1wYWdpbmctYXJlYS9wZGYtZmlyc3QtcGFnZS9wZGYtZmlyc3QtcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZMYXN0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGRmLWxhc3QtcGFnZS9wZGYtbGFzdC1wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZk5leHRQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1wYWdpbmctYXJlYS9wZGYtbmV4dC1wYWdlL3BkZi1uZXh0LXBhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmUGFnZU51bWJlckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGRmLXBhZ2UtbnVtYmVyL3BkZi1wYWdlLW51bWJlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZQYWdpbmdBcmVhQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1wYWdpbmctYXJlYS9wZGYtcGFnaW5nLWFyZWEuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmUHJldmlvdXNQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1wYWdpbmctYXJlYS9wZGYtcHJldmlvdXMtcGFnZS9wZGYtcHJldmlvdXMtcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZQcmVzZW50YXRpb25Nb2RlQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1wcmVzZW50YXRpb24tbW9kZS9wZGYtcHJlc2VudGF0aW9uLW1vZGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmUHJpbnRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXByaW50L3BkZi1wcmludC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZSb3RhdGVQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1yb3RhdGUtcGFnZS9wZGYtcm90YXRlLXBhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmU2VsZWN0VG9vbENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtc2VsZWN0LXRvb2wvcGRmLXNlbGVjdC10b29sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlRvZ2dsZVNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXRvZ2dsZS1zZWNvbmRhcnktdG9vbGJhci9wZGYtdG9nZ2xlLXNlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlRvZ2dsZVNpZGViYXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXRvZ2dsZS1zaWRlYmFyL3BkZi10b2dnbGUtc2lkZWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi10b29sYmFyL3BkZi10b29sYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlpvb21Ecm9wZG93bkNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtem9vbS10b29sYmFyL3BkZi16b29tLWRyb3Bkb3duL3BkZi16b29tLWRyb3Bkb3duLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlpvb21JbkNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtem9vbS10b29sYmFyL3BkZi16b29tLWluL3BkZi16b29tLWluLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlpvb21PdXRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXpvb20tdG9vbGJhci9wZGYtem9vbS1vdXQvcGRmLXpvb20tb3V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlpvb21Ub29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi16b29tLXRvb2xiYXIvcGRmLXpvb20tdG9vbGJhci5jb21wb25lbnQnO1xyXG5cclxuaWYgKG5ldyBEYXRlKCkuZ2V0VGltZSgpID09PSAwKSB7XHJcbiAgbmV3IE5neENvbnNvbGUoKS5sb2coJycpO1xyXG59XHJcblxyXG5pZiAoIVByb21pc2VbJ2FsbFNldHRsZWQnXSkge1xyXG4gIGlmICghIXdpbmRvd1snWm9uZSddICYmICF3aW5kb3dbJ19fem9uZV9zeW1ib2xfX1Byb21pc2UuYWxsU2V0dGxlZCddKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICBcIlBsZWFzZSB1cGRhdGUgem9uZS5qcyB0byB2ZXJzaW9uIDAuMTAuMyBvciBoaWdoZXIuIE90aGVyd2lzZSwgeW91J2xsIHJ1biB0aGUgc2xvdyBFQ01BU2NyaXB0IDUgdmVyc2lvbiBldmVuIG9uIG1vZGVybiBicm93c2VyIHRoYXQgY2FuIHJ1biB0aGUgZmFzdCBFU01BU2NyaXB0IDIwMTUgdmVyc2lvbi5cIlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzS2V5SWdub3JlZChjbWQ6IG51bWJlciwga2V5Y29kZTogbnVtYmVyIHwgJ1dIRUVMJyk6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9uczogSVBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucyA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XHJcblxyXG4gIGNvbnN0IGlnbm9yZUtleXM6IEFycmF5PHN0cmluZz4gPSBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuZ2V0KCdpZ25vcmVLZXlzJyk7XHJcbiAgY29uc3QgYWNjZXB0S2V5czogQXJyYXk8c3RyaW5nPiA9IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5nZXQoJ2FjY2VwdEtleXMnKTtcclxuICBpZiAoa2V5Y29kZSA9PT0gJ1dIRUVMJykge1xyXG4gICAgaWYgKGlzS2V5SW5MaXN0KGlnbm9yZUtleXMsIGNtZCwgJ1dIRUVMJykpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoISFhY2NlcHRLZXlzICYmIGFjY2VwdEtleXMubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXR1cm4gIWlzS2V5SW5MaXN0KGFjY2VwdEtleXMsIGNtZCwgJ1dIRUVMJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaWYgKGtleWNvZGUgPT09IDE2IHx8IGtleWNvZGUgPT09IDE3IHx8IGtleWNvZGUgPT09IDE4IHx8IGtleWNvZGUgPT09IDIyNCkge1xyXG4gICAgLy8gaWdub3JlIHNvbGl0YXJ5IFNISUZULCBBTFQsIENNRCwgYW5kIENUUkwgYmVjYXVzZSB0aGV5IG9ubHkgbWFrZSBzZW5zZSBhcyB0d28ta2V5LWNvbWJpbmF0aW9uc1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIC8vIGNtZCBpcyBhIGJpdC1hcnJheTpcclxuICAvLyAxID09IENUUkxcclxuICAvLyAyID09IEFMVFxyXG4gIC8vIDQgPT0gU0hJRlRcclxuICAvLyA4ID09IE1FVEFcclxuICBjb25zdCBpZ25vcmVLZXlib2FyZCA9IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5nZXQoJ2lnbm9yZUtleWJvYXJkJyk7XHJcbiAgaWYgKCEhaWdub3JlS2V5Ym9hcmQpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaWYgKCEhaWdub3JlS2V5cyAmJiBpZ25vcmVLZXlzLmxlbmd0aCA+IDApIHtcclxuICAgIGlmIChpc0tleUluTGlzdChpZ25vcmVLZXlzLCBjbWQsIGtleWNvZGUpKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKCEhYWNjZXB0S2V5cyAmJiBhY2NlcHRLZXlzLmxlbmd0aCA+IDApIHtcclxuICAgIHJldHVybiAhaXNLZXlJbkxpc3QoYWNjZXB0S2V5cywgY21kLCBrZXljb2RlKTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0tleUluTGlzdChzZXR0aW5nczogQXJyYXk8c3RyaW5nPiwgY21kOiBudW1iZXIsIGtleWNvZGU6IG51bWJlciB8ICdXSEVFTCcpOiBib29sZWFuIHtcclxuICBpZiAoIXNldHRpbmdzKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgcmV0dXJuIHNldHRpbmdzLnNvbWUoKGtleURlZikgPT4gaXNLZXkoa2V5RGVmLCBjbWQsIGtleWNvZGUpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNLZXkoa2V5RGVmOiBzdHJpbmcsIGNtZDogbnVtYmVyLCBrZXljb2RlOiBudW1iZXIgfCAnV0hFRUwnKTogYm9vbGVhbiB7XHJcbiAgbGV0IGNtZERlZiA9IDA7XHJcbiAgbGV0IGtleSA9IDA7XHJcbiAga2V5RGVmID0ga2V5RGVmLnRvTG93ZXJDYXNlKCk7XHJcbiAgLy8gdHNsaW50OmRpc2FibGU6IG5vLWJpdHdpc2VcclxuICBpZiAoa2V5RGVmLmluY2x1ZGVzKCdjdHJsKycpKSB7XHJcbiAgICBjbWREZWYgfD0gMTtcclxuICAgIGtleURlZiA9IGtleURlZi5yZXBsYWNlKCdjdHJsKycsICcnKTtcclxuICB9XHJcbiAgaWYgKGtleURlZi5pbmNsdWRlcygnY21kKycpKSB7XHJcbiAgICBjbWREZWYgfD0gODtcclxuICAgIGtleURlZiA9IGtleURlZi5yZXBsYWNlKCdjbWQrJywgJycpO1xyXG4gIH1cclxuICBpZiAoa2V5RGVmLmluY2x1ZGVzKCdhbHQrJykpIHtcclxuICAgIGNtZERlZiB8PSAyO1xyXG4gICAga2V5RGVmID0ga2V5RGVmLnJlcGxhY2UoJ2FsdCsnLCAnJyk7XHJcbiAgfVxyXG4gIGlmIChrZXlEZWYuaW5jbHVkZXMoJ3NoaWZ0KycpKSB7XHJcbiAgICBjbWREZWYgfD0gNDtcclxuICAgIGtleURlZiA9IGtleURlZi5yZXBsYWNlKCdzaGlmdCsnLCAnJyk7XHJcbiAgfVxyXG4gIGlmIChrZXlEZWYuaW5jbHVkZXMoJ21ldGErJykpIHtcclxuICAgIGNtZERlZiB8PSA4O1xyXG4gICAga2V5RGVmID0ga2V5RGVmLnJlcGxhY2UoJ21ldGErJywgJycpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGtleURlZiA9PT0gJ3VwJykge1xyXG4gICAga2V5ID0gMzg7XHJcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdkb3duJykge1xyXG4gICAga2V5ID0gNDA7XHJcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICcrJyB8fCBrZXlEZWYgPT09ICdcIitcIicpIHtcclxuICAgIGtleSA9IDE3MTtcclxuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJy0nIHx8IGtleURlZiA9PT0gJ1wiLVwiJykge1xyXG4gICAga2V5ID0gMTczO1xyXG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnZXNjJykge1xyXG4gICAga2V5ID0gMjc7XHJcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdlbnRlcicpIHtcclxuICAgIGtleSA9IDEzO1xyXG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnc3BhY2UnKSB7XHJcbiAgICBrZXkgPSAzMjtcclxuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJ2Y0Jykge1xyXG4gICAga2V5ID0gMTE1O1xyXG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnYmFja3NwYWNlJykge1xyXG4gICAga2V5ID0gODtcclxuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJ2hvbWUnKSB7XHJcbiAgICBrZXkgPSAzNjtcclxuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJ2VuZCcpIHtcclxuICAgIGtleSA9IDM1O1xyXG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnbGVmdCcpIHtcclxuICAgIGtleSA9IDM3O1xyXG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAncmlnaHQnKSB7XHJcbiAgICBrZXkgPSAzOTtcclxuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJ3BhZ2Vkb3duJykge1xyXG4gICAga2V5ID0gMzQ7XHJcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdwYWdldXAnKSB7XHJcbiAgICBrZXkgPSAzMztcclxuICB9IGVsc2Uge1xyXG4gICAga2V5ID0ga2V5RGVmLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKTtcclxuICB9XHJcbiAgaWYgKGtleWNvZGUgPT09ICdXSEVFTCcpIHtcclxuICAgIHJldHVybiBrZXlEZWYgPT09ICd3aGVlbCcgJiYgY21kID09PSBjbWREZWY7XHJcbiAgfVxyXG4gIHJldHVybiBrZXkgPT09IGtleWNvZGUgJiYgY21kID09PSBjbWREZWY7XHJcbn1cclxuXHJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICh3aW5kb3cgYXMgYW55KS5pc0tleUlnbm9yZWQgPSBpc0tleUlnbm9yZWQ7XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW05neEV4dGVuZGVkUGRmVmlld2VyQ29tbW9uTW9kdWxlLCBDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtOZ3hFeHRlbmRlZFBkZlZpZXdlckNvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbTmd4RXh0ZW5kZWRQZGZWaWV3ZXJTZXJ2aWNlXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBQZGZab29tRHJvcGRvd25Db21wb25lbnQsXHJcbiAgICBQZGZDb250ZXh0TWVudUNvbXBvbmVudCxcclxuICAgIFBkZlByZXNlbnRhdGlvbk1vZGVDb21wb25lbnQsXHJcbiAgICBQZGZPcGVuRmlsZUNvbXBvbmVudCxcclxuICAgIFBkZlByaW50Q29tcG9uZW50LFxyXG4gICAgUGRmRG93bmxvYWRDb21wb25lbnQsXHJcbiAgICBQZGZFZGl0b3JDb21wb25lbnQsXHJcbiAgICBQZGZab29tVG9vbGJhckNvbXBvbmVudCxcclxuICAgIFBkZlBhZ2luZ0FyZWFDb21wb25lbnQsXHJcbiAgICBQZGZGaW5kYmFyQ29tcG9uZW50LFxyXG4gICAgUGRmU2lkZWJhckNvbXBvbmVudCxcclxuICAgIFBkZlNpZGViYXJDb250ZW50Q29tcG9uZW50LFxyXG4gICAgUGRmU2lkZWJhclRvb2xiYXJDb21wb25lbnQsXHJcbiAgICBQZGZTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50LFxyXG4gICAgUGRmU2VhcmNoSW5wdXRGaWVsZENvbXBvbmVudCxcclxuICAgIFBkZkZpbmRQcmV2aW91c0NvbXBvbmVudCxcclxuICAgIFBkZkZpbmROZXh0Q29tcG9uZW50LFxyXG4gICAgUGRmRmluZElucHV0QXJlYUNvbXBvbmVudCxcclxuICAgIFBkZkZpbmRiYXJPcHRpb25zVHdvQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZGJhck9wdGlvbnNPbmVDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBQZGZGaW5kTWF0Y2hDYXNlQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZEhpZ2hsaWdodEFsbENvbXBvbmVudCxcclxuICAgIFBkZkZpbmRSYW5nZUNvbXBvbmVudCxcclxuICAgIFBkZkZpbmRDdXJyZW50UGFnZU9ubHlDb21wb25lbnQsXHJcbiAgICBQZGZGaW5kRW50aXJlV29yZENvbXBvbmVudCxcclxuICAgIFBkZkZpbmRNdWx0aXBsZVNlYXJjaFRleHRzQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZElnbm9yZUFjY2VudHNDb21wb25lbnQsXHJcbiAgICBQZGZGaW5kYmFyT3B0aW9uc1RocmVlQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZFJlc3VsdHNDb3VudENvbXBvbmVudCxcclxuICAgIFBkZkZpbmRiYXJNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgUGRmSGFuZFRvb2xDb21wb25lbnQsXHJcbiAgICBQZGZSb3RhdGVQYWdlQ29tcG9uZW50LFxyXG4gICAgUGRmU2VsZWN0VG9vbENvbXBvbmVudCxcclxuICAgIFBkZlRvb2xiYXJDb21wb25lbnQsXHJcbiAgICBQZGZGaW5kQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgUGRmVG9nZ2xlU2lkZWJhckNvbXBvbmVudCxcclxuICAgIFBkZlRvZ2dsZVNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQsXHJcbiAgICBQZGZMYXN0UGFnZUNvbXBvbmVudCxcclxuICAgIFBkZkZpcnN0UGFnZUNvbXBvbmVudCxcclxuICAgIFBkZk5leHRQYWdlQ29tcG9uZW50LFxyXG4gICAgUGRmUHJldmlvdXNQYWdlQ29tcG9uZW50LFxyXG4gICAgUGRmUGFnZU51bWJlckNvbXBvbmVudCxcclxuICAgIFBkZlpvb21JbkNvbXBvbmVudCxcclxuICAgIFBkZlpvb21PdXRDb21wb25lbnQsXHJcbiAgICBOZ3hFeHRlbmRlZFBkZlZpZXdlckNvbXBvbmVudCxcclxuICAgIFBkZkFjcm9mb3JtRGVmYXVsdFRoZW1lQ29tcG9uZW50LFxyXG4gICAgUGRmQWNyb2Zvcm1EYXJrVGhlbWVDb21wb25lbnQsXHJcbiAgICBQZGZEb2N1bWVudFByb3BlcnRpZXNEaWFsb2dDb21wb25lbnQsXHJcbiAgICBQZGZQYXNzd29yZERpYWxvZ0NvbXBvbmVudCxcclxuICAgIFBkZlByZXBhcmVQcmludGluZ0RpYWxvZ0NvbXBvbmVudCxcclxuICAgIFBkZkVycm9yTWVzc2FnZUNvbXBvbmVudCxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJNb2R1bGUge31cclxuIl19
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
/** @nocollapse */ NgxExtendedPdfViewerModule.ɵfac = function NgxExtendedPdfViewerModule_Factory(t) { return new (t || NgxExtendedPdfViewerModule)(); };
/** @nocollapse */ NgxExtendedPdfViewerModule.ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: NgxExtendedPdfViewerModule });
/** @nocollapse */ NgxExtendedPdfViewerModule.ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ providers: [NgxExtendedPdfViewerService], imports: [[NgxExtendedPdfViewerCommonModule, CommonModule, FormsModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxExtendedPdfViewerModule, [{
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
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxExtendedPdfViewerModule, { declarations: [NgxExtendedPdfViewerComponent], imports: [NgxExtendedPdfViewerCommonModule, CommonModule, FormsModule], exports: [PdfZoomDropdownComponent,
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
        PdfErrorMessageComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUNBQWlDO0FBQ2pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMzRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFbkQsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sc0ZBQXNGLENBQUM7QUFDNUksT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDdEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDNUcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sZ0ZBQWdGLENBQUM7QUFDbkksT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUFDekgsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDckgsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDckgsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDOUcsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFDdkgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDaEcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDckYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDN0YsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdUZBQXVGLENBQUM7QUFDeEksT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDcEgsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDbkcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFDL0csT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDdEcsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sNkZBQTZGLENBQUM7QUFDbEosT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0saUhBQWlILENBQUM7QUFDL0osT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkdBQTJHLENBQUM7QUFDdEosT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0scUdBQXFHLENBQUM7QUFDN0osT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scUhBQXFILENBQUM7QUFDcEssT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUhBQW1ILENBQUM7QUFDakssT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0seUdBQXlHLENBQUM7QUFDbkssT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0saUhBQWlILENBQUM7QUFDdEssT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkdBQTZHLENBQUM7QUFDekosT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0scUdBQXFHLENBQUM7QUFDN0osT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sK0VBQStFLENBQUM7QUFDN0gsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdkYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdkYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDMUcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDdkcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDdkcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFDN0csT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDN0YsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDbkgsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDL0csT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDN0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDN0YsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sK0VBQStFLENBQUM7QUFDbkksT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDdEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFDcEgsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDbEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDckcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdURBQXVELENBQUM7O0FBRWhHLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUU7SUFDOUIsSUFBSSxVQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDMUI7QUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFO0lBQzFCLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQ0FBbUMsQ0FBQyxFQUFFO1FBQ3BFLE9BQU8sQ0FBQyxLQUFLLENBQ1gsOEtBQThLLENBQy9LLENBQUM7S0FDSDtDQUNGO0FBRUQsU0FBUyxZQUFZLENBQUMsR0FBVyxFQUFFLE9BQXlCO0lBQzFELE1BQU0sMkJBQTJCLEdBQWtDLE1BQWMsQ0FBQywyQkFBMkIsQ0FBQztJQUU5RyxNQUFNLFVBQVUsR0FBa0IsMkJBQTJCLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hGLE1BQU0sVUFBVSxHQUFrQiwyQkFBMkIsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDaEYsSUFBSSxPQUFPLEtBQUssT0FBTyxFQUFFO1FBQ3ZCLElBQUksV0FBVyxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDekMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksQ0FBQyxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN6QyxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDL0M7UUFFRCxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBSSxPQUFPLEtBQUssRUFBRSxJQUFJLE9BQU8sS0FBSyxFQUFFLElBQUksT0FBTyxLQUFLLEVBQUUsSUFBSSxPQUFPLEtBQUssR0FBRyxFQUFFO1FBQ3pFLGlHQUFpRztRQUNqRyxPQUFPLElBQUksQ0FBQztLQUNiO0lBQ0Qsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLFlBQVk7SUFDWixNQUFNLGNBQWMsR0FBRywyQkFBMkIsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN6RSxJQUFJLENBQUMsQ0FBQyxjQUFjLEVBQUU7UUFDcEIsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUVELElBQUksQ0FBQyxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUN6QyxJQUFJLFdBQVcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQ3pDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7S0FDRjtJQUVELElBQUksQ0FBQyxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUN6QyxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDL0M7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxRQUF1QixFQUFFLEdBQVcsRUFBRSxPQUF5QjtJQUNsRixJQUFJLENBQUMsUUFBUSxFQUFFO1FBQ2IsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUNELE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNoRSxDQUFDO0FBRUQsU0FBUyxLQUFLLENBQUMsTUFBYyxFQUFFLEdBQVcsRUFBRSxPQUF5QjtJQUNuRSxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDZixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDWixNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlCLDZCQUE2QjtJQUM3QixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDNUIsTUFBTSxJQUFJLENBQUMsQ0FBQztRQUNaLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztLQUN0QztJQUNELElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUMzQixNQUFNLElBQUksQ0FBQyxDQUFDO1FBQ1osTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQ3JDO0lBQ0QsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQzNCLE1BQU0sSUFBSSxDQUFDLENBQUM7UUFDWixNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDckM7SUFDRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDN0IsTUFBTSxJQUFJLENBQUMsQ0FBQztRQUNaLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUN2QztJQUNELElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUM1QixNQUFNLElBQUksQ0FBQyxDQUFDO1FBQ1osTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQ3RDO0lBRUQsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO1FBQ25CLEdBQUcsR0FBRyxFQUFFLENBQUM7S0FDVjtTQUFNLElBQUksTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUM1QixHQUFHLEdBQUcsRUFBRSxDQUFDO0tBQ1Y7U0FBTSxJQUFJLE1BQU0sS0FBSyxHQUFHLElBQUksTUFBTSxLQUFLLEtBQUssRUFBRTtRQUM3QyxHQUFHLEdBQUcsR0FBRyxDQUFDO0tBQ1g7U0FBTSxJQUFJLE1BQU0sS0FBSyxHQUFHLElBQUksTUFBTSxLQUFLLEtBQUssRUFBRTtRQUM3QyxHQUFHLEdBQUcsR0FBRyxDQUFDO0tBQ1g7U0FBTSxJQUFJLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDM0IsR0FBRyxHQUFHLEVBQUUsQ0FBQztLQUNWO1NBQU0sSUFBSSxNQUFNLEtBQUssT0FBTyxFQUFFO1FBQzdCLEdBQUcsR0FBRyxFQUFFLENBQUM7S0FDVjtTQUFNLElBQUksTUFBTSxLQUFLLE9BQU8sRUFBRTtRQUM3QixHQUFHLEdBQUcsRUFBRSxDQUFDO0tBQ1Y7U0FBTSxJQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUU7UUFDMUIsR0FBRyxHQUFHLEdBQUcsQ0FBQztLQUNYO1NBQU0sSUFBSSxNQUFNLEtBQUssV0FBVyxFQUFFO1FBQ2pDLEdBQUcsR0FBRyxDQUFDLENBQUM7S0FDVDtTQUFNLElBQUksTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUM1QixHQUFHLEdBQUcsRUFBRSxDQUFDO0tBQ1Y7U0FBTSxJQUFJLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDM0IsR0FBRyxHQUFHLEVBQUUsQ0FBQztLQUNWO1NBQU0sSUFBSSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQzVCLEdBQUcsR0FBRyxFQUFFLENBQUM7S0FDVjtTQUFNLElBQUksTUFBTSxLQUFLLE9BQU8sRUFBRTtRQUM3QixHQUFHLEdBQUcsRUFBRSxDQUFDO0tBQ1Y7U0FBTSxJQUFJLE1BQU0sS0FBSyxVQUFVLEVBQUU7UUFDaEMsR0FBRyxHQUFHLEVBQUUsQ0FBQztLQUNWO1NBQU0sSUFBSSxNQUFNLEtBQUssUUFBUSxFQUFFO1FBQzlCLEdBQUcsR0FBRyxFQUFFLENBQUM7S0FDVjtTQUFNO1FBQ0wsR0FBRyxHQUFHLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDMUM7SUFDRCxJQUFJLE9BQU8sS0FBSyxPQUFPLEVBQUU7UUFDdkIsT0FBTyxNQUFNLEtBQUssT0FBTyxJQUFJLEdBQUcsS0FBSyxNQUFNLENBQUM7S0FDN0M7SUFDRCxPQUFPLEdBQUcsS0FBSyxPQUFPLElBQUksR0FBRyxLQUFLLE1BQU0sQ0FBQztBQUMzQyxDQUFDO0FBRUQsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7SUFDaEMsTUFBYyxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7Q0FDN0M7QUE0REQsTUFBTSxPQUFPLDBCQUEwQjs7dUhBQTFCLDBCQUEwQjsyR0FBMUIsMEJBQTBCO2dIQXZEMUIsQ0FBQywyQkFBMkIsQ0FBQyxZQUYvQixDQUFDLGdDQUFnQyxFQUFFLFlBQVksRUFBRSxXQUFXLENBQUM7dUZBeUQzRCwwQkFBMEI7Y0ExRHRDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxnQ0FBZ0MsRUFBRSxZQUFZLEVBQUUsV0FBVyxDQUFDO2dCQUN0RSxZQUFZLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztnQkFDN0MsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7Z0JBQ3hDLE9BQU8sRUFBRTtvQkFDUCx3QkFBd0I7b0JBQ3hCLHVCQUF1QjtvQkFDdkIsNEJBQTRCO29CQUM1QixvQkFBb0I7b0JBQ3BCLGlCQUFpQjtvQkFDakIsb0JBQW9CO29CQUNwQixrQkFBa0I7b0JBQ2xCLHVCQUF1QjtvQkFDdkIsc0JBQXNCO29CQUN0QixtQkFBbUI7b0JBQ25CLG1CQUFtQjtvQkFDbkIsMEJBQTBCO29CQUMxQiwwQkFBMEI7b0JBQzFCLDRCQUE0QjtvQkFDNUIsNEJBQTRCO29CQUM1Qix3QkFBd0I7b0JBQ3hCLG9CQUFvQjtvQkFDcEIseUJBQXlCO29CQUN6QixzQ0FBc0M7b0JBQ3RDLHNDQUFzQztvQkFDdEMseUJBQXlCO29CQUN6Qiw0QkFBNEI7b0JBQzVCLHFCQUFxQjtvQkFDckIsK0JBQStCO29CQUMvQiwwQkFBMEI7b0JBQzFCLG1DQUFtQztvQkFDbkMsNkJBQTZCO29CQUM3Qix3Q0FBd0M7b0JBQ3hDLDRCQUE0QjtvQkFDNUIsbUNBQW1DO29CQUNuQyxvQkFBb0I7b0JBQ3BCLHNCQUFzQjtvQkFDdEIsc0JBQXNCO29CQUN0QixtQkFBbUI7b0JBQ25CLHNCQUFzQjtvQkFDdEIseUJBQXlCO29CQUN6QixrQ0FBa0M7b0JBQ2xDLG9CQUFvQjtvQkFDcEIscUJBQXFCO29CQUNyQixvQkFBb0I7b0JBQ3BCLHdCQUF3QjtvQkFDeEIsc0JBQXNCO29CQUN0QixrQkFBa0I7b0JBQ2xCLG1CQUFtQjtvQkFDbkIsNkJBQTZCO29CQUM3QixnQ0FBZ0M7b0JBQ2hDLDZCQUE2QjtvQkFDN0Isb0NBQW9DO29CQUNwQywwQkFBMEI7b0JBQzFCLGlDQUFpQztvQkFDakMsd0JBQXdCO2lCQUN6QjthQUNGOzt3RkFDWSwwQkFBMEIsbUJBeER0Qiw2QkFBNkIsYUFEbEMsZ0NBQWdDLEVBQUUsWUFBWSxFQUFFLFdBQVcsYUFJbkUsd0JBQXdCO1FBQ3hCLHVCQUF1QjtRQUN2Qiw0QkFBNEI7UUFDNUIsb0JBQW9CO1FBQ3BCLGlCQUFpQjtRQUNqQixvQkFBb0I7UUFDcEIsa0JBQWtCO1FBQ2xCLHVCQUF1QjtRQUN2QixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQiwwQkFBMEI7UUFDMUIsMEJBQTBCO1FBQzFCLDRCQUE0QjtRQUM1Qiw0QkFBNEI7UUFDNUIsd0JBQXdCO1FBQ3hCLG9CQUFvQjtRQUNwQix5QkFBeUI7UUFDekIsc0NBQXNDO1FBQ3RDLHNDQUFzQztRQUN0Qyx5QkFBeUI7UUFDekIsNEJBQTRCO1FBQzVCLHFCQUFxQjtRQUNyQiwrQkFBK0I7UUFDL0IsMEJBQTBCO1FBQzFCLG1DQUFtQztRQUNuQyw2QkFBNkI7UUFDN0Isd0NBQXdDO1FBQ3hDLDRCQUE0QjtRQUM1QixtQ0FBbUM7UUFDbkMsb0JBQW9CO1FBQ3BCLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLHNCQUFzQjtRQUN0Qix5QkFBeUI7UUFDekIsa0NBQWtDO1FBQ2xDLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsb0JBQW9CO1FBQ3BCLHdCQUF3QjtRQUN4QixzQkFBc0I7UUFDdEIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQiw2QkFBNkI7UUFDN0IsZ0NBQWdDO1FBQ2hDLDZCQUE2QjtRQUM3QixvQ0FBb0M7UUFDcEMsMEJBQTBCO1FBQzFCLGlDQUFpQztRQUNqQyx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGhcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5neEV4dGVuZGVkUGRmVmlld2VyQ29tbW9uTW9kdWxlIH0gZnJvbSAnLi9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci1jb21tb24ubW9kdWxlJztcclxuaW1wb3J0IHsgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQgfSBmcm9tICcuL25neC1leHRlbmRlZC1wZGYtdmlld2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5neEV4dGVuZGVkUGRmVmlld2VyU2VydmljZSB9IGZyb20gJy4vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IE5neENvbnNvbGUgfSBmcm9tICcuL29wdGlvbnMvbmd4LWNvbnNvbGUnO1xyXG5pbXBvcnQgeyBJUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zIH0gZnJvbSAnLi9vcHRpb25zL3BkZi12aWV3ZXItYXBwbGljYXRpb24tb3B0aW9ucyc7XHJcbmltcG9ydCB7IFBkZkRvY3VtZW50UHJvcGVydGllc0RpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vcGRmLWRpYWxvZy9wZGYtZG9jdW1lbnQtcHJvcGVydGllcy1kaWFsb2cvcGRmLWRvY3VtZW50LXByb3BlcnRpZXMtZGlhbG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkVycm9yTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4vcGRmLWRpYWxvZy9wZGYtZXJyb3ItbWVzc2FnZS9wZGYtZXJyb3ItbWVzc2FnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZQYXNzd29yZERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vcGRmLWRpYWxvZy9wZGYtcGFzc3dvcmQtZGlhbG9nL3BkZi1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmUHJlcGFyZVByaW50aW5nRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9wZGYtZGlhbG9nL3BkZi1wcmVwYXJlLXByaW50aW5nLWRpYWxvZy9wZGYtcHJlcGFyZS1wcmludGluZy1kaWFsb2cuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vc2Vjb25kYXJ5LXRvb2xiYXIvcGRmLXNlY29uZGFyeS10b29sYmFyL3BkZi1zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZTaWRlYmFyQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci9wZGYtc2lkZWJhci9wZGYtc2lkZWJhci1jb250ZW50L3BkZi1zaWRlYmFyLWNvbnRlbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmU2lkZWJhclRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXIvcGRmLXNpZGViYXIvcGRmLXNpZGViYXItdG9vbGJhci9wZGYtc2lkZWJhci10b29sYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlNpZGViYXJDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXIvcGRmLXNpZGViYXIvcGRmLXNpZGViYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmQWNyb2Zvcm1EYXJrVGhlbWVDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lL2Fjcm9mb3JtLWRhcmstdGhlbWUvcGRmLWFjcm9mb3JtLWRhcmstdGhlbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmQWNyb2Zvcm1EZWZhdWx0VGhlbWVDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lL2Fjcm9mb3JtLWRlZmF1bHQtdGhlbWUvcGRmLWFjcm9mb3JtLWRlZmF1bHQtdGhlbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmQ29udGV4dE1lbnVDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWNvbnRleHQtbWVudS9wZGYtY29udGV4dC1tZW51LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkRvd25sb2FkQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1kb3dubG9hZC9wZGYtZG93bmxvYWQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1lZGl0b3IvcGRmLWVkaXRvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZGaW5kQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kLWJ1dHRvbi9wZGYtZmluZC1idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRmluZEN1cnJlbnRQYWdlT25seUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZC1jdXJyZW50LXBhZ2Utb25seS9wZGYtZmluZC1jdXJyZW50LXBhZ2Utb25seS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZGaW5kSW5wdXRBcmVhQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kLWlucHV0LWFyZWEvcGRmLWZpbmQtaW5wdXQtYXJlYS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZGaW5kTmV4dENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZC1uZXh0L3BkZi1maW5kLW5leHQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRmluZFByZXZpb3VzQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kLXByZXZpb3VzL3BkZi1maW5kLXByZXZpb3VzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkZpbmRSYW5nZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZC1yYW5nZS9wZGYtZmluZC1yYW5nZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZGaW5kYmFyTWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1tZXNzYWdlLWNvbnRhaW5lci9wZGYtZmluZGJhci1tZXNzYWdlLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZGaW5kSGlnaGxpZ2h0QWxsQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kYmFyLW9wdGlvbnMtb25lLWNvbnRhaW5lci9wZGYtZmluZC1oaWdobGlnaHQtYWxsL3BkZi1maW5kLWhpZ2hsaWdodC1hbGwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRmluZE1hdGNoQ2FzZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1vcHRpb25zLW9uZS1jb250YWluZXIvcGRmLWZpbmQtbWF0Y2gtY2FzZS9wZGYtZmluZC1tYXRjaC1jYXNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkZpbmRiYXJPcHRpb25zT25lQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kYmFyLW9wdGlvbnMtb25lLWNvbnRhaW5lci9wZGYtZmluZGJhci1vcHRpb25zLW9uZS1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRmluZElnbm9yZUFjY2VudHNDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy10aHJlZS1jb250YWluZXIvcGRmLWZpbmQtaWdub3JlLWFjY2VudHMvcGRmLWZpbmQtaWdub3JlLWFjY2VudHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRmluZFJlc3VsdHNDb3VudENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1vcHRpb25zLXRocmVlLWNvbnRhaW5lci9wZGYtZmluZC1yZXN1bHRzLWNvdW50L3BkZi1maW5kLXJlc3VsdHMtY291bnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRmluZGJhck9wdGlvbnNUaHJlZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1vcHRpb25zLXRocmVlLWNvbnRhaW5lci9wZGYtZmluZGJhci1vcHRpb25zLXRocmVlLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZGaW5kTXVsdGlwbGVTZWFyY2hUZXh0c0NvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1vcHRpb25zLXR3by1jb250YWluZXIvcGRmLWZpbmQtZW50aXJlLXBocmFzZS9wZGYtZmluZC1lbnRpcmUtcGhyYXNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkZpbmRFbnRpcmVXb3JkQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kYmFyLW9wdGlvbnMtdHdvLWNvbnRhaW5lci9wZGYtZmluZC1lbnRpcmUtd29yZC9wZGYtZmluZC1lbnRpcmUtd29yZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZGaW5kYmFyT3B0aW9uc1R3b0NvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1vcHRpb25zLXR3by1jb250YWluZXIvcGRmLWZpbmRiYXItb3B0aW9ucy10d28tY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkZpbmRiYXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmU2VhcmNoSW5wdXRGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtc2VhcmNoLWlucHV0LWZpZWxkL3BkZi1zZWFyY2gtaW5wdXQtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmSGFuZFRvb2xDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWhhbmQtdG9vbC9wZGYtaGFuZC10b29sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZk9wZW5GaWxlQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1vcGVuLWZpbGUvcGRmLW9wZW4tZmlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZGaXJzdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1maXJzdC1wYWdlL3BkZi1maXJzdC1wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkxhc3RQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1wYWdpbmctYXJlYS9wZGYtbGFzdC1wYWdlL3BkZi1sYXN0LXBhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmTmV4dFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1uZXh0LXBhZ2UvcGRmLW5leHQtcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZQYWdlTnVtYmVyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1wYWdpbmctYXJlYS9wZGYtcGFnZS1udW1iZXIvcGRmLXBhZ2UtbnVtYmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlBhZ2luZ0FyZWFDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1wYWdpbmctYXJlYS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZQcmV2aW91c1BhZ2VDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1wcmV2aW91cy1wYWdlL3BkZi1wcmV2aW91cy1wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlByZXNlbnRhdGlvbk1vZGVDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXByZXNlbnRhdGlvbi1tb2RlL3BkZi1wcmVzZW50YXRpb24tbW9kZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZQcmludENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtcHJpbnQvcGRmLXByaW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlJvdGF0ZVBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXJvdGF0ZS1wYWdlL3BkZi1yb3RhdGUtcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZTZWxlY3RUb29sQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1zZWxlY3QtdG9vbC9wZGYtc2VsZWN0LXRvb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmVG9nZ2xlU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtdG9nZ2xlLXNlY29uZGFyeS10b29sYmFyL3BkZi10b2dnbGUtc2Vjb25kYXJ5LXRvb2xiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmVG9nZ2xlU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtdG9nZ2xlLXNpZGViYXIvcGRmLXRvZ2dsZS1zaWRlYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXRvb2xiYXIvcGRmLXRvb2xiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmWm9vbURyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi16b29tLXRvb2xiYXIvcGRmLXpvb20tZHJvcGRvd24vcGRmLXpvb20tZHJvcGRvd24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmWm9vbUluQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi16b29tLXRvb2xiYXIvcGRmLXpvb20taW4vcGRmLXpvb20taW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmWm9vbU91dENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtem9vbS10b29sYmFyL3BkZi16b29tLW91dC9wZGYtem9vbS1vdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmWm9vbVRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXpvb20tdG9vbGJhci9wZGYtem9vbS10b29sYmFyLmNvbXBvbmVudCc7XHJcblxyXG5pZiAobmV3IERhdGUoKS5nZXRUaW1lKCkgPT09IDApIHtcclxuICBuZXcgTmd4Q29uc29sZSgpLmxvZygnJyk7XHJcbn1cclxuXHJcbmlmICghUHJvbWlzZVsnYWxsU2V0dGxlZCddKSB7XHJcbiAgaWYgKCEhd2luZG93Wydab25lJ10gJiYgIXdpbmRvd1snX196b25lX3N5bWJvbF9fUHJvbWlzZS5hbGxTZXR0bGVkJ10pIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgIFwiUGxlYXNlIHVwZGF0ZSB6b25lLmpzIHRvIHZlcnNpb24gMC4xMC4zIG9yIGhpZ2hlci4gT3RoZXJ3aXNlLCB5b3UnbGwgcnVuIHRoZSBzbG93IEVDTUFTY3JpcHQgNSB2ZXJzaW9uIGV2ZW4gb24gbW9kZXJuIGJyb3dzZXIgdGhhdCBjYW4gcnVuIHRoZSBmYXN0IEVTTUFTY3JpcHQgMjAxNSB2ZXJzaW9uLlwiXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNLZXlJZ25vcmVkKGNtZDogbnVtYmVyLCBrZXljb2RlOiBudW1iZXIgfCAnV0hFRUwnKTogYm9vbGVhbiB7XHJcbiAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zOiBJUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucztcclxuXHJcbiAgY29uc3QgaWdub3JlS2V5czogQXJyYXk8c3RyaW5nPiA9IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5nZXQoJ2lnbm9yZUtleXMnKTtcclxuICBjb25zdCBhY2NlcHRLZXlzOiBBcnJheTxzdHJpbmc+ID0gUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLmdldCgnYWNjZXB0S2V5cycpO1xyXG4gIGlmIChrZXljb2RlID09PSAnV0hFRUwnKSB7XHJcbiAgICBpZiAoaXNLZXlJbkxpc3QoaWdub3JlS2V5cywgY21kLCAnV0hFRUwnKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICghIWFjY2VwdEtleXMgJiYgYWNjZXB0S2V5cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiAhaXNLZXlJbkxpc3QoYWNjZXB0S2V5cywgY21kLCAnV0hFRUwnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAoa2V5Y29kZSA9PT0gMTYgfHwga2V5Y29kZSA9PT0gMTcgfHwga2V5Y29kZSA9PT0gMTggfHwga2V5Y29kZSA9PT0gMjI0KSB7XHJcbiAgICAvLyBpZ25vcmUgc29saXRhcnkgU0hJRlQsIEFMVCwgQ01ELCBhbmQgQ1RSTCBiZWNhdXNlIHRoZXkgb25seSBtYWtlIHNlbnNlIGFzIHR3by1rZXktY29tYmluYXRpb25zXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgLy8gY21kIGlzIGEgYml0LWFycmF5OlxyXG4gIC8vIDEgPT0gQ1RSTFxyXG4gIC8vIDIgPT0gQUxUXHJcbiAgLy8gNCA9PSBTSElGVFxyXG4gIC8vIDggPT0gTUVUQVxyXG4gIGNvbnN0IGlnbm9yZUtleWJvYXJkID0gUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLmdldCgnaWdub3JlS2V5Ym9hcmQnKTtcclxuICBpZiAoISFpZ25vcmVLZXlib2FyZCkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBpZiAoISFpZ25vcmVLZXlzICYmIGlnbm9yZUtleXMubGVuZ3RoID4gMCkge1xyXG4gICAgaWYgKGlzS2V5SW5MaXN0KGlnbm9yZUtleXMsIGNtZCwga2V5Y29kZSkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoISFhY2NlcHRLZXlzICYmIGFjY2VwdEtleXMubGVuZ3RoID4gMCkge1xyXG4gICAgcmV0dXJuICFpc0tleUluTGlzdChhY2NlcHRLZXlzLCBjbWQsIGtleWNvZGUpO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzS2V5SW5MaXN0KHNldHRpbmdzOiBBcnJheTxzdHJpbmc+LCBjbWQ6IG51bWJlciwga2V5Y29kZTogbnVtYmVyIHwgJ1dIRUVMJyk6IGJvb2xlYW4ge1xyXG4gIGlmICghc2V0dGluZ3MpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gc2V0dGluZ3Muc29tZSgoa2V5RGVmKSA9PiBpc0tleShrZXlEZWYsIGNtZCwga2V5Y29kZSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0tleShrZXlEZWY6IHN0cmluZywgY21kOiBudW1iZXIsIGtleWNvZGU6IG51bWJlciB8ICdXSEVFTCcpOiBib29sZWFuIHtcclxuICBsZXQgY21kRGVmID0gMDtcclxuICBsZXQga2V5ID0gMDtcclxuICBrZXlEZWYgPSBrZXlEZWYudG9Mb3dlckNhc2UoKTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZTogbm8tYml0d2lzZVxyXG4gIGlmIChrZXlEZWYuaW5jbHVkZXMoJ2N0cmwrJykpIHtcclxuICAgIGNtZERlZiB8PSAxO1xyXG4gICAga2V5RGVmID0ga2V5RGVmLnJlcGxhY2UoJ2N0cmwrJywgJycpO1xyXG4gIH1cclxuICBpZiAoa2V5RGVmLmluY2x1ZGVzKCdjbWQrJykpIHtcclxuICAgIGNtZERlZiB8PSA4O1xyXG4gICAga2V5RGVmID0ga2V5RGVmLnJlcGxhY2UoJ2NtZCsnLCAnJyk7XHJcbiAgfVxyXG4gIGlmIChrZXlEZWYuaW5jbHVkZXMoJ2FsdCsnKSkge1xyXG4gICAgY21kRGVmIHw9IDI7XHJcbiAgICBrZXlEZWYgPSBrZXlEZWYucmVwbGFjZSgnYWx0KycsICcnKTtcclxuICB9XHJcbiAgaWYgKGtleURlZi5pbmNsdWRlcygnc2hpZnQrJykpIHtcclxuICAgIGNtZERlZiB8PSA0O1xyXG4gICAga2V5RGVmID0ga2V5RGVmLnJlcGxhY2UoJ3NoaWZ0KycsICcnKTtcclxuICB9XHJcbiAgaWYgKGtleURlZi5pbmNsdWRlcygnbWV0YSsnKSkge1xyXG4gICAgY21kRGVmIHw9IDg7XHJcbiAgICBrZXlEZWYgPSBrZXlEZWYucmVwbGFjZSgnbWV0YSsnLCAnJyk7XHJcbiAgfVxyXG5cclxuICBpZiAoa2V5RGVmID09PSAndXAnKSB7XHJcbiAgICBrZXkgPSAzODtcclxuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJ2Rvd24nKSB7XHJcbiAgICBrZXkgPSA0MDtcclxuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJysnIHx8IGtleURlZiA9PT0gJ1wiK1wiJykge1xyXG4gICAga2V5ID0gMTcxO1xyXG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnLScgfHwga2V5RGVmID09PSAnXCItXCInKSB7XHJcbiAgICBrZXkgPSAxNzM7XHJcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdlc2MnKSB7XHJcbiAgICBrZXkgPSAyNztcclxuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJ2VudGVyJykge1xyXG4gICAga2V5ID0gMTM7XHJcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdzcGFjZScpIHtcclxuICAgIGtleSA9IDMyO1xyXG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnZjQnKSB7XHJcbiAgICBrZXkgPSAxMTU7XHJcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdiYWNrc3BhY2UnKSB7XHJcbiAgICBrZXkgPSA4O1xyXG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnaG9tZScpIHtcclxuICAgIGtleSA9IDM2O1xyXG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnZW5kJykge1xyXG4gICAga2V5ID0gMzU7XHJcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdsZWZ0Jykge1xyXG4gICAga2V5ID0gMzc7XHJcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdyaWdodCcpIHtcclxuICAgIGtleSA9IDM5O1xyXG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAncGFnZWRvd24nKSB7XHJcbiAgICBrZXkgPSAzNDtcclxuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJ3BhZ2V1cCcpIHtcclxuICAgIGtleSA9IDMzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBrZXkgPSBrZXlEZWYudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApO1xyXG4gIH1cclxuICBpZiAoa2V5Y29kZSA9PT0gJ1dIRUVMJykge1xyXG4gICAgcmV0dXJuIGtleURlZiA9PT0gJ3doZWVsJyAmJiBjbWQgPT09IGNtZERlZjtcclxuICB9XHJcbiAgcmV0dXJuIGtleSA9PT0ga2V5Y29kZSAmJiBjbWQgPT09IGNtZERlZjtcclxufVxyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgKHdpbmRvdyBhcyBhbnkpLmlzS2V5SWdub3JlZCA9IGlzS2V5SWdub3JlZDtcclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21tb25Nb2R1bGUsIENvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW05neEV4dGVuZGVkUGRmVmlld2VyQ29tcG9uZW50XSxcclxuICBwcm92aWRlcnM6IFtOZ3hFeHRlbmRlZFBkZlZpZXdlclNlcnZpY2VdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFBkZlpvb21Ecm9wZG93bkNvbXBvbmVudCxcclxuICAgIFBkZkNvbnRleHRNZW51Q29tcG9uZW50LFxyXG4gICAgUGRmUHJlc2VudGF0aW9uTW9kZUNvbXBvbmVudCxcclxuICAgIFBkZk9wZW5GaWxlQ29tcG9uZW50LFxyXG4gICAgUGRmUHJpbnRDb21wb25lbnQsXHJcbiAgICBQZGZEb3dubG9hZENvbXBvbmVudCxcclxuICAgIFBkZkVkaXRvckNvbXBvbmVudCxcclxuICAgIFBkZlpvb21Ub29sYmFyQ29tcG9uZW50LFxyXG4gICAgUGRmUGFnaW5nQXJlYUNvbXBvbmVudCxcclxuICAgIFBkZkZpbmRiYXJDb21wb25lbnQsXHJcbiAgICBQZGZTaWRlYmFyQ29tcG9uZW50LFxyXG4gICAgUGRmU2lkZWJhckNvbnRlbnRDb21wb25lbnQsXHJcbiAgICBQZGZTaWRlYmFyVG9vbGJhckNvbXBvbmVudCxcclxuICAgIFBkZlNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQsXHJcbiAgICBQZGZTZWFyY2hJbnB1dEZpZWxkQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZFByZXZpb3VzQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZE5leHRDb21wb25lbnQsXHJcbiAgICBQZGZGaW5kSW5wdXRBcmVhQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZGJhck9wdGlvbnNUd29Db250YWluZXJDb21wb25lbnQsXHJcbiAgICBQZGZGaW5kYmFyT3B0aW9uc09uZUNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIFBkZkZpbmRNYXRjaENhc2VDb21wb25lbnQsXHJcbiAgICBQZGZGaW5kSGlnaGxpZ2h0QWxsQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZFJhbmdlQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZEN1cnJlbnRQYWdlT25seUNvbXBvbmVudCxcclxuICAgIFBkZkZpbmRFbnRpcmVXb3JkQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZE11bHRpcGxlU2VhcmNoVGV4dHNDb21wb25lbnQsXHJcbiAgICBQZGZGaW5kSWdub3JlQWNjZW50c0NvbXBvbmVudCxcclxuICAgIFBkZkZpbmRiYXJPcHRpb25zVGhyZWVDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBQZGZGaW5kUmVzdWx0c0NvdW50Q29tcG9uZW50LFxyXG4gICAgUGRmRmluZGJhck1lc3NhZ2VDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBQZGZIYW5kVG9vbENvbXBvbmVudCxcclxuICAgIFBkZlJvdGF0ZVBhZ2VDb21wb25lbnQsXHJcbiAgICBQZGZTZWxlY3RUb29sQ29tcG9uZW50LFxyXG4gICAgUGRmVG9vbGJhckNvbXBvbmVudCxcclxuICAgIFBkZkZpbmRCdXR0b25Db21wb25lbnQsXHJcbiAgICBQZGZUb2dnbGVTaWRlYmFyQ29tcG9uZW50LFxyXG4gICAgUGRmVG9nZ2xlU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudCxcclxuICAgIFBkZkxhc3RQYWdlQ29tcG9uZW50LFxyXG4gICAgUGRmRmlyc3RQYWdlQ29tcG9uZW50LFxyXG4gICAgUGRmTmV4dFBhZ2VDb21wb25lbnQsXHJcbiAgICBQZGZQcmV2aW91c1BhZ2VDb21wb25lbnQsXHJcbiAgICBQZGZQYWdlTnVtYmVyQ29tcG9uZW50LFxyXG4gICAgUGRmWm9vbUluQ29tcG9uZW50LFxyXG4gICAgUGRmWm9vbU91dENvbXBvbmVudCxcclxuICAgIE5neEV4dGVuZGVkUGRmVmlld2VyQ29tcG9uZW50LFxyXG4gICAgUGRmQWNyb2Zvcm1EZWZhdWx0VGhlbWVDb21wb25lbnQsXHJcbiAgICBQZGZBY3JvZm9ybURhcmtUaGVtZUNvbXBvbmVudCxcclxuICAgIFBkZkRvY3VtZW50UHJvcGVydGllc0RpYWxvZ0NvbXBvbmVudCxcclxuICAgIFBkZlBhc3N3b3JkRGlhbG9nQ29tcG9uZW50LFxyXG4gICAgUGRmUHJlcGFyZVByaW50aW5nRGlhbG9nQ29tcG9uZW50LFxyXG4gICAgUGRmRXJyb3JNZXNzYWdlQ29tcG9uZW50LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hFeHRlbmRlZFBkZlZpZXdlck1vZHVsZSB7fVxyXG4iXX0=
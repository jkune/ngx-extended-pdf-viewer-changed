import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import { addTrustedHTML } from '../theme/sanitized-css-injector';
import * as i0 from "@angular/core";
export class DynamicCssComponent {
    constructor(renderer, document) {
        this.renderer = renderer;
        this.document = document;
        this.zoom = 1.0;
        this.width = 100;
        this.xs = 490;
        this.sm = 560;
        this.md = 610;
        this.lg = 660;
        this.xl = 740;
        this.xxl = 830;
    }
    get style() {
        return `
@media all and (max-width: ${this.xl}px) {
  #toolbarViewerMiddle {
    display: table;
    margin: auto;
    left: auto;
    position: inherit;
    transform: none;
  }
}

@media all and (max-width: 840px) {
  #sidebarContent {
    background-color: rgba(0, 0, 0, 0.7);
  }

  html[dir='ltr'] #outerContainer.sidebarOpen #viewerContainer {
    left: 0px !important;
  }
  html[dir='rtl'] #outerContainer.sidebarOpen #viewerContainer {
    right: 0px !important;
  }

  #outerContainer .hiddenLargeView,
  #outerContainer .hiddenMediumView {
    display: inherit;
  }
  #outerContainer .visibleLargeView,
  #outerContainer .visibleMediumView {
    display: none;
  }
}

@media all and (max-width: ${this.lg}px) {
  .toolbarButtonSpacer {
    width: 15px;
  }

  #outerContainer .hiddenLargeView {
    display: none;
  }
  #outerContainer .visibleLargeView {
    display: inherit;
  }
}

@media all and (max-width: ${this.md}px) {
  .toolbarButtonSpacer {
    display: none;
  }
  #outerContainer .hiddenMediumView {
    display: none;
  }
  #outerContainer .visibleMediumView {
    display: inherit;
  }
}

@media all and (max-width: ${this.sm}px) {
  #outerContainer .hiddenSmallView,
  #outerContainer .hiddenSmallView * {
    display: none;
  }
  #outerContainer .visibleSmallView {
    display: inherit;
  }
  .toolbarButtonSpacer {
    width: 0;
  }
  html[dir='ltr'] .findbar {
    left: 38px;
  }
  html[dir='rtl'] .findbar {
    right: 38px;
  }
}

@media all and (max-width: ${this.xs}px) {
  #scaleSelectContainer {
    display: none;
  }
}

#outerContainer .visibleXLView,
#outerContainer .visibleXXLView,
#outerContainer .visibleTinyView {
  display: none;
}

#outerContainer .hiddenXLView,
#outerContainer .hiddenXXLView {
  display: unset;
}

@media all and (max-width: ${this.xl}px) {
  #outerContainer .hiddenXLView {
    display: none;
  }
  #outerContainer .visibleXLView {
    display: inherit;
  }

  #toolbarViewerMiddle {
    -webkit-transform: translateX(-36%);
    transform: translateX(-36%);
    display: unset;
    margin: unset;
    left: 50%;
    position: absolute;
  }
}

@media all and (max-width: ${this.xxl}px) {
  #outerContainer .hiddenXXLView {
    display: none;
  }
  #outerContainer .visibleXXLView {
    display: inherit;
  }
}

@media all and (max-width: ${this.md}px) {
  #toolbarViewerMiddle {
    -webkit-transform: translateX(-26%);
    transform: translateX(-26%);
  }
}

@media all and (max-width: ${this.xs}px) {
  #outerContainer .hiddenTinyView,
  #outerContainer .hiddenTinyView * {
    display: none;
  }
  #outerContainer .visibleTinyView {
    display: inherit;
  }
}
  `;
    }
    ngOnInit() {
        this.injectStyle();
    }
    ngOnChanges() {
        const fullWith = this.document.body.clientWidth;
        const partialViewScale = fullWith / this.width;
        const scaleFactor = partialViewScale * (this.zoom ? this.zoom : 1);
        this.xs = scaleFactor * 490;
        this.sm = scaleFactor * 560;
        this.md = scaleFactor * 610;
        this.lg = scaleFactor * 660;
        this.xl = scaleFactor * 740;
        this.xxl = scaleFactor * 830;
        const styles = this.document.getElementById('pdf-dynamic-css');
        if (styles) {
            addTrustedHTML(styles, this.style);
        }
    }
    injectStyle() {
        const styles = this.document.createElement('STYLE');
        styles.id = 'pdf-dynamic-css';
        addTrustedHTML(styles, this.style);
        this.renderer.appendChild(this.document.head, styles);
    }
    ngOnDestroy() {
        const styles = this.document.getElementById('pdf-dynamic-css');
        if (styles && styles.parentElement) {
            styles.parentElement.removeChild(styles);
        }
    }
}
DynamicCssComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: DynamicCssComponent, deps: [{ token: i0.Renderer2 }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Component });
DynamicCssComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: DynamicCssComponent, selector: "pdf-dynamic-css", inputs: { zoom: "zoom", width: "width" }, usesOnChanges: true, ngImport: i0, template: "", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: DynamicCssComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-dynamic-css', template: "", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; }, propDecorators: { zoom: [{
                type: Input
            }], width: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1jc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9keW5hbWljLWNzcy9keW5hbWljLWNzcy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL2R5bmFtaWMtY3NzL2R5bmFtaWMtY3NzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQTJDLE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7QUFPakUsTUFBTSxPQUFPLG1CQUFtQjtJQWdLOUIsWUFBb0IsUUFBbUIsRUFBNEIsUUFBYTtRQUE1RCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQTRCLGFBQVEsR0FBUixRQUFRLENBQUs7UUE5SnpFLFNBQUksR0FBRyxHQUFHLENBQUM7UUFHWCxVQUFLLEdBQUcsR0FBRyxDQUFDO1FBRVosT0FBRSxHQUFHLEdBQUcsQ0FBQztRQUVULE9BQUUsR0FBRyxHQUFHLENBQUM7UUFFVCxPQUFFLEdBQUcsR0FBRyxDQUFDO1FBRVQsT0FBRSxHQUFHLEdBQUcsQ0FBQztRQUVULE9BQUUsR0FBRyxHQUFHLENBQUM7UUFFVCxRQUFHLEdBQUcsR0FBRyxDQUFDO0lBK0lrRSxDQUFDO0lBN0lwRixJQUFXLEtBQUs7UUFDZCxPQUFPOzZCQUNrQixJQUFJLENBQUMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBZ0NQLElBQUksQ0FBQyxFQUFFOzs7Ozs7Ozs7Ozs7OzZCQWFQLElBQUksQ0FBQyxFQUFFOzs7Ozs7Ozs7Ozs7NkJBWVAsSUFBSSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBbUJQLElBQUksQ0FBQyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFpQlAsSUFBSSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFrQlAsSUFBSSxDQUFDLEdBQUc7Ozs7Ozs7Ozs2QkFTUixJQUFJLENBQUMsRUFBRTs7Ozs7Ozs2QkFPUCxJQUFJLENBQUMsRUFBRTs7Ozs7Ozs7O0dBU2pDLENBQUM7SUFDRixDQUFDO0lBSUQsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsV0FBVztRQUNULE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNoRCxNQUFNLGdCQUFnQixHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQy9DLE1BQU0sV0FBVyxHQUFHLGdCQUFnQixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFbkUsSUFBSSxDQUFDLEVBQUUsR0FBRyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQyxFQUFFLEdBQUcsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUM1QixJQUFJLENBQUMsRUFBRSxHQUFHLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDNUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQyxFQUFFLEdBQUcsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxHQUFHLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFFN0IsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMvRCxJQUFJLE1BQU0sRUFBRTtZQUNWLGNBQWMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUVPLFdBQVc7UUFDakIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFxQixDQUFDO1FBQ3hFLE1BQU0sQ0FBQyxFQUFFLEdBQUcsaUJBQWlCLENBQUM7UUFDOUIsY0FBYyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVNLFdBQVc7UUFDaEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQWdCLENBQUM7UUFDOUUsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLGFBQWEsRUFBRTtZQUNqQyxNQUFNLENBQUMsYUFBcUIsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDOztpSEFyTVUsbUJBQW1CLDJDQWdLbUIsUUFBUTtxR0FoSzlDLG1CQUFtQixzSENUaEMsRUFBQTs0RkRTYSxtQkFBbUI7a0JBTC9CLFNBQVM7K0JBQ0UsaUJBQWlCOzswQkFvS2UsTUFBTTsyQkFBQyxRQUFROzRDQTlKbEQsSUFBSTtzQkFEVixLQUFLO2dCQUlDLEtBQUs7c0JBRFgsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgYWRkVHJ1c3RlZEhUTUwgfSBmcm9tICcuLi90aGVtZS9zYW5pdGl6ZWQtY3NzLWluamVjdG9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGRmLWR5bmFtaWMtY3NzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZHluYW1pYy1jc3MuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2R5bmFtaWMtY3NzLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNDc3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyB6b29tID0gMS4wO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyB3aWR0aCA9IDEwMDtcclxuXHJcbiAgcHVibGljIHhzID0gNDkwO1xyXG5cclxuICBwdWJsaWMgc20gPSA1NjA7XHJcblxyXG4gIHB1YmxpYyBtZCA9IDYxMDtcclxuXHJcbiAgcHVibGljIGxnID0gNjYwO1xyXG5cclxuICBwdWJsaWMgeGwgPSA3NDA7XHJcblxyXG4gIHB1YmxpYyB4eGwgPSA4MzA7XHJcblxyXG4gIHB1YmxpYyBnZXQgc3R5bGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6ICR7dGhpcy54bH1weCkge1xyXG4gICN0b29sYmFyVmlld2VyTWlkZGxlIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbGVmdDogYXV0bztcclxuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogODQwcHgpIHtcclxuICAjc2lkZWJhckNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gIH1cclxuXHJcbiAgaHRtbFtkaXI9J2x0ciddICNvdXRlckNvbnRhaW5lci5zaWRlYmFyT3BlbiAjdmlld2VyQ29udGFpbmVyIHtcclxuICAgIGxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBodG1sW2Rpcj0ncnRsJ10gI291dGVyQ29udGFpbmVyLnNpZGViYXJPcGVuICN2aWV3ZXJDb250YWluZXIge1xyXG4gICAgcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgI291dGVyQ29udGFpbmVyIC5oaWRkZW5MYXJnZVZpZXcsXHJcbiAgI291dGVyQ29udGFpbmVyIC5oaWRkZW5NZWRpdW1WaWV3IHtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgfVxyXG4gICNvdXRlckNvbnRhaW5lciAudmlzaWJsZUxhcmdlVmlldyxcclxuICAjb3V0ZXJDb250YWluZXIgLnZpc2libGVNZWRpdW1WaWV3IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAke3RoaXMubGd9cHgpIHtcclxuICAudG9vbGJhckJ1dHRvblNwYWNlciB7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICB9XHJcblxyXG4gICNvdXRlckNvbnRhaW5lciAuaGlkZGVuTGFyZ2VWaWV3IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gICNvdXRlckNvbnRhaW5lciAudmlzaWJsZUxhcmdlVmlldyB7XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogJHt0aGlzLm1kfXB4KSB7XHJcbiAgLnRvb2xiYXJCdXR0b25TcGFjZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgI291dGVyQ29udGFpbmVyIC5oaWRkZW5NZWRpdW1WaWV3IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gICNvdXRlckNvbnRhaW5lciAudmlzaWJsZU1lZGl1bVZpZXcge1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6ICR7dGhpcy5zbX1weCkge1xyXG4gICNvdXRlckNvbnRhaW5lciAuaGlkZGVuU21hbGxWaWV3LFxyXG4gICNvdXRlckNvbnRhaW5lciAuaGlkZGVuU21hbGxWaWV3ICoge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgI291dGVyQ29udGFpbmVyIC52aXNpYmxlU21hbGxWaWV3IHtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIC50b29sYmFyQnV0dG9uU3BhY2VyIHtcclxuICAgIHdpZHRoOiAwO1xyXG4gIH1cclxuICBodG1sW2Rpcj0nbHRyJ10gLmZpbmRiYXIge1xyXG4gICAgbGVmdDogMzhweDtcclxuICB9XHJcbiAgaHRtbFtkaXI9J3J0bCddIC5maW5kYmFyIHtcclxuICAgIHJpZ2h0OiAzOHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogJHt0aGlzLnhzfXB4KSB7XHJcbiAgI3NjYWxlU2VsZWN0Q29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4jb3V0ZXJDb250YWluZXIgLnZpc2libGVYTFZpZXcsXHJcbiNvdXRlckNvbnRhaW5lciAudmlzaWJsZVhYTFZpZXcsXHJcbiNvdXRlckNvbnRhaW5lciAudmlzaWJsZVRpbnlWaWV3IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jb3V0ZXJDb250YWluZXIgLmhpZGRlblhMVmlldyxcclxuI291dGVyQ29udGFpbmVyIC5oaWRkZW5YWExWaWV3IHtcclxuICBkaXNwbGF5OiB1bnNldDtcclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogJHt0aGlzLnhsfXB4KSB7XHJcbiAgI291dGVyQ29udGFpbmVyIC5oaWRkZW5YTFZpZXcge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgI291dGVyQ29udGFpbmVyIC52aXNpYmxlWExWaWV3IHtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgfVxyXG5cclxuICAjdG9vbGJhclZpZXdlck1pZGRsZSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzYlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzYlKTtcclxuICAgIGRpc3BsYXk6IHVuc2V0O1xyXG4gICAgbWFyZ2luOiB1bnNldDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6ICR7dGhpcy54eGx9cHgpIHtcclxuICAjb3V0ZXJDb250YWluZXIgLmhpZGRlblhYTFZpZXcge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgI291dGVyQ29udGFpbmVyIC52aXNpYmxlWFhMVmlldyB7XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogJHt0aGlzLm1kfXB4KSB7XHJcbiAgI3Rvb2xiYXJWaWV3ZXJNaWRkbGUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI2JSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI2JSk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAke3RoaXMueHN9cHgpIHtcclxuICAjb3V0ZXJDb250YWluZXIgLmhpZGRlblRpbnlWaWV3LFxyXG4gICNvdXRlckNvbnRhaW5lciAuaGlkZGVuVGlueVZpZXcgKiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAjb3V0ZXJDb250YWluZXIgLnZpc2libGVUaW55VmlldyB7XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gIH1cclxufVxyXG4gIGA7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluamVjdFN0eWxlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIGNvbnN0IGZ1bGxXaXRoID0gdGhpcy5kb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xyXG4gICAgY29uc3QgcGFydGlhbFZpZXdTY2FsZSA9IGZ1bGxXaXRoIC8gdGhpcy53aWR0aDtcclxuICAgIGNvbnN0IHNjYWxlRmFjdG9yID0gcGFydGlhbFZpZXdTY2FsZSAqICh0aGlzLnpvb20gPyB0aGlzLnpvb20gOiAxKTtcclxuXHJcbiAgICB0aGlzLnhzID0gc2NhbGVGYWN0b3IgKiA0OTA7XHJcbiAgICB0aGlzLnNtID0gc2NhbGVGYWN0b3IgKiA1NjA7XHJcbiAgICB0aGlzLm1kID0gc2NhbGVGYWN0b3IgKiA2MTA7XHJcbiAgICB0aGlzLmxnID0gc2NhbGVGYWN0b3IgKiA2NjA7XHJcbiAgICB0aGlzLnhsID0gc2NhbGVGYWN0b3IgKiA3NDA7XHJcbiAgICB0aGlzLnh4bCA9IHNjYWxlRmFjdG9yICogODMwO1xyXG5cclxuICAgIGNvbnN0IHN0eWxlcyA9IHRoaXMuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BkZi1keW5hbWljLWNzcycpO1xyXG4gICAgaWYgKHN0eWxlcykge1xyXG4gICAgICBhZGRUcnVzdGVkSFRNTChzdHlsZXMsIHRoaXMuc3R5bGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbmplY3RTdHlsZSgpIHtcclxuICAgIGNvbnN0IHN0eWxlcyA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnU1RZTEUnKSBhcyBIVE1MU3R5bGVFbGVtZW50O1xyXG4gICAgc3R5bGVzLmlkID0gJ3BkZi1keW5hbWljLWNzcyc7XHJcbiAgICBhZGRUcnVzdGVkSFRNTChzdHlsZXMsIHRoaXMuc3R5bGUpO1xyXG5cclxuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5kb2N1bWVudC5oZWFkLCBzdHlsZXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xyXG4gICAgY29uc3Qgc3R5bGVzID0gdGhpcy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGRmLWR5bmFtaWMtY3NzJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBpZiAoc3R5bGVzICYmIHN0eWxlcy5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgIChzdHlsZXMucGFyZW50RWxlbWVudCBhcyBhbnkpLnJlbW92ZUNoaWxkKHN0eWxlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiJdfQ==
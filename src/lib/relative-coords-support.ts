import { NgZone } from '@angular/core';
import { PagesLoadedEvent } from '../public_api';
import { NgxExtendedPdfViewerComponent } from './ngx-extended-pdf-viewer.component';
import { IPDFViewerApplicationOptions } from './options/pdf-viewer-application-options';

export class RelativeCoordsSupport {

  private options: any = {
    debug: false,
    moveEnabled: true,
    disableEventHandling: false,
  };
  private viewer: any;

  private startX = 0;
  private startY = 0;
  private moveX = 0;
  private moveY = 0;
  private startLeft = 0;
  private startTop = 0;

  private state: "idle" | "move" | "zoom" = "idle";
  private initialPinchDistance = 0;
  private currentScale = 1.0;

  private pointEnd: any = {

  }

  // private transformScale = -1;

  private boundOnViewerTouchStart: any;
  private boundOnViewerTouchMove: any;
  private boundOnViewerTouchEnd: any;

  private boundOnViewerMouseDown: any;
  private boundOnViewerMouseMove: any;
  private boundOnViewerMouseUp: any;
  private boundOnViewerWheel: any;

  private debug = {
    enabled: false,
    nf: new Intl.NumberFormat('en-US', { style: 'decimal', maximumFractionDigits: 2 }),
    x: 0,
    y: 0
  }


  constructor(private _zone: NgZone, private component: NgxExtendedPdfViewerComponent, options: any) {
    options = options || {};
    Object.keys(this.options).forEach(attribut => {
      if (options[attribut] === undefined) options[attribut] = this.options[attribut];
    });
    this.options = options;


    this.debug.enabled = this.options.debug;
    if (this.debug.enabled) console.log("RelativeCoordsSupport.constructor");
    this.boundOnViewerTouchStart = this.onViewerTouchStart.bind(this);
    this.boundOnViewerTouchMove = this.onViewerTouchMove.bind(this);
    this.boundOnViewerTouchEnd = this.onViewerTouchEnd.bind(this);

    this.boundOnViewerMouseDown = this.onViewerMouseDown.bind(this);
    this.boundOnViewerMouseMove = this.onViewerMouseMove.bind(this);
    this.boundOnViewerMouseUp = this.onViewerMouseUp.bind(this);

    this.boundOnViewerWheel = this.onViewerWheel.bind(this);

    this.initializeRelativeCoords();
  }

  private isMobile() {

    return (navigator.maxTouchPoints > 0) || ((<any>navigator).msMaxTouchPoints > 0);  // ('ontouchstart' in window) || 
  }

  private onViewerTouchStart(event: TouchEvent): void {
    if (this.options.disableEventHandling) return;

    this.initialPinchDistance = 0;

    if (event.touches.length === 2) {
      const container = document.getElementById('viewerContainer') as HTMLDivElement;
      const rect = container.getBoundingClientRect();
      if (event.touches[0].pageX >= rect.left && event.touches[0].pageX <= rect.right) {
        if (event.touches[0].pageY >= (rect.top + window.scrollY) && event.touches[0].pageY <= (rect.bottom + window.scrollY)) {
          if (event.touches[1].pageX >= rect.left && event.touches[1].pageX <= rect.right) {
            if (event.touches[1].pageY >= (rect.top + window.scrollY) && event.touches[1].pageY <= (rect.bottom + window.scrollY)) {
              this.startX = (event.touches[0].pageX + event.touches[1].pageX) / 2;
              this.startY = (event.touches[0].pageY + event.touches[1].pageY) / 2;
              this.initialPinchDistance = Math.hypot(event.touches[1].pageX - event.touches[0].pageX, event.touches[1].pageY - event.touches[0].pageY);

              this.startLeft = parseFloat(getComputedStyle(this.viewer).left) || 0;
              this.startTop = parseFloat(getComputedStyle(this.viewer).top) || 0;
              this.state = "zoom";

              if (event.cancelable) {
                event.preventDefault();
              }
              event.stopPropagation();
            }
          }
        }
      }
    }

    if (event.touches.length === 1) {
      let touch = event.touches[0]
      if (this.options.moveEnabled && this.isInsideContainer([touch]) && this.state == "idle") {
        const viewerContainer = document.getElementById('viewerContainer') as HTMLDivElement;
        const rect = viewerContainer.getBoundingClientRect();

        let pageX = touch.pageX - rect.left;
        let pageY = touch.pageY - rect.top;

        if (this.debug.enabled) this.debugPoint(pageX, pageY);

        this.startX = pageX;
        this.startY = pageY;

        let left = parseFloat(getComputedStyle(this.viewer).left) || 0;
        let top = parseFloat(getComputedStyle(this.viewer).top) || 0;



        if (this.debug.enabled) {
          console.log("TouchStart: "
            + this.debug.nf.format(pageX) + " / " + this.debug.nf.format(pageY)
            + ", startX/Y: " + this.debug.nf.format(this.startX) + " / " + this.debug.nf.format(this.startY)
            + ", startLeft/Top: " + this.debug.nf.format(this.startLeft) + " -> " + this.debug.nf.format(left) + " / " + this.debug.nf.format(this.startTop) + " -> " + this.debug.nf.format(top)
            + ", state: " + this.state,
            ", dims: ", this.getDimensions(this.viewer)
          );
        }

        this.startLeft = left;
        this.startTop = top;
        this.state = "move";

        if (event.cancelable) {
          event.preventDefault();
        }
        event.stopPropagation();

      } else {
        // console.log("TouchStart: isInside: " +  this.isInsideContainer([ touch ]) + ", state: " + this.state);
      }


    }
  }




  // private getCurrentPagesInView():number[] {
  //   const PDFViewerApplication: any = (window as any).PDFViewerApplication;

  //   let page = PDFViewerApplication.page;
  //   let pageCount = PDFViewerApplication.pdfViewer._pages.length;

  //   let spreadMode = PDFViewerApplication.pdfViewer.spreadMode as SpreadModeType;

  //   let pages = [ page ];

  //   if (page == 1) return pages;

  //   let isSpread = spreadMode == SpreadModeType.EVEN || SpreadModeType.ODD;
  //   // console.log("isSpread: " + isSpread+ ", pages: " + pages.join(","));
  //   if (!isSpread) return pages;

  //   if (page % 2 == 1) {
  //     page--;
  //     pages = [ page ];
  //   }
  //   // if (page % 2 == 1)
  //   let nextPage = page + 1;
  //   if (nextPage <= pageCount) pages.push(nextPage);
  //   // console.log("nextPage: " + nextPage + ", pageCount: " + pageCount+ ", pages: " + pages.join(","));
  //   return  pages;
  // }

  private debugPoint(x: number, y: number, viewer: boolean = false) {
    if (!this.options.debugPoint) return;
    const viewerContainer = document.getElementById('viewerContainer') as HTMLDivElement;
    let id = 'debug-point' + (viewer ? "-viewer" : "");

    let point = document.getElementById(id);
    let size = viewer ? 10 : 5;
    if (!point) {
      point = document.createElement("div");
      point.id = id;
      point.style.position = "absolute";
      point.style.width = size + "px";
      point.style.height = size + "px";
      point.style.borderRadius = "100px";

      point.style.backgroundColor = viewer ? "red" : "blue";

      if (!viewer) viewerContainer.appendChild(point);
      else this.viewer.appendChild(point);
    }




    let dims = this.getDimensions(this.viewer);

    if (viewer) {
      // this.debug.xv = x;
      // this.debug.yv = y;

      // console.log("debugPoint.viewer: " + this.debug.nf.format(x) + " / " + this.debug.nf.format(y) + ", | " + this.debug.nf.format(x / dims.elem.width * 100) + " % / " + this.debug.nf.format(y / dims.elem.height * 100) + " %, dims: ", dims.elem);


      // let vts = this.getViewerTransformScale();
      // if(vts != 1.0) {
      //   x /= vts;
      //   y /= vts;
      //   console.log("debugPoint.viewer: " + this.debug.nf.format(x) + " / " + this.debug.nf.format(y));
      // }

    } else {

      this.debug.x = x;
      this.debug.y = y;


      // console.log("debugPoint.cont: " + this.debug.nf.format(x) + " / " + this.debug.nf.format(y) + " | " + this.debug.nf.format(x / dims.parent.width * 100) + " % /  " + this.debug.nf.format(y / dims.parent.height * 100) + " %, dims: ", dims.parent);

    }


    point.style.left = (x - (size / 2)) + "px";
    point.style.top = (y - (size / 2)) + "px";


  }

  private onViewerTouchMove(event: TouchEvent): void {
    if (this.options.disableEventHandling) return;

    const PDFViewerApplicationOptions: IPDFViewerApplicationOptions = (window as any).PDFViewerApplicationOptions;
    const PDFViewerApplication: any = (window as any).PDFViewerApplication;

    const viewerContainer = document.getElementById('viewerContainer') as HTMLDivElement;
    const rect = viewerContainer.getBoundingClientRect();
    const vr = this.viewer.getBoundingClientRect();

    if (this.initialPinchDistance <= 0 || event.touches.length !== 2) {


      if (event.touches.length == 1 && this.state == "move") {
        const touch = event.touches[0];


        let pageX = touch.pageX - rect.left + viewerContainer.scrollLeft;
        let pageY = touch.pageY - rect.top + viewerContainer.scrollTop;

        if (this.debug.enabled) this.debugPoint(pageX, pageY);

        let diffX = pageX - this.startX;
        let diffY = pageY - this.startY;

        let left = this.startLeft + diffX;
        let top = this.startTop + diffY;

        let constrain = this.constrain({ left: left, top: top });
        left = constrain.left;
        top = constrain.top;

        if (this.debug.enabled) {
          console.log("TouchMove: "
            + this.debug.nf.format(pageX) + " / " + this.debug.nf.format(pageY)
            + ", startX/Y: " + this.debug.nf.format(this.startX) + " / " + this.debug.nf.format(this.startY)
            + ", diff: " + this.debug.nf.format(diffX) + " / " + this.debug.nf.format(diffY)
            + ", l/t: " + this.debug.nf.format(left) + " / " + this.debug.nf.format(top)
            + ", viewer.w/h: " + this.debug.nf.format(vr.width) + " / " + this.debug.nf.format(vr.height)

          );
        }

        this.viewer.style.left = left + "px";
        this.viewer.style.top = top + "px";

        if (event.cancelable) {
          event.preventDefault();
        }
        event.stopPropagation();
      }

      return;
    }

    const pinchDistance = Math.hypot(event.touches[1].pageX - event.touches[0].pageX, event.touches[1].pageY - event.touches[0].pageY);
    // const container = document.getElementById('viewerContainer') as HTMLDivElement;
    // const containerRect = container.getBoundingClientRect();

    let pageX = (event.touches[1].pageX + event.touches[0].pageX) / 2;
    let pageY = (event.touches[1].pageY + event.touches[0].pageY) / 2;

    this.moveX = pageX;
    this.moveY = pageY;


    let dims = this.getDimensions(this.viewer, { pageX: pageX, pageY: pageY })


    // //const viewerRect = this.viewer.getBoundingClientRect();
    // pageX -= rect.left;
    // pageY -= rect.top;

    // pageX -= vr.left;
    // pageY -= vr.top;


    // pageX = dims.scaled.width * dims.point.v.xp;
    // pageY = dims.scaled.height * dims.point.v.yp;


    // let originX = pageX; // + viewerContainer.scrollLeft; // this.startX + container.scrollLeft;
    // let originY = pageY; // + viewerContainer.scrollTop ; //this.startY + container.scrollTop;

    const originX = dims.scaled.width * dims.point.v.xp;
    const originY = dims.scaled.height * dims.point.v.yp;


    if (this.debug.enabled) this.debugPoint(this.moveX - rect.left, this.moveY - rect.top);

    let prevScale = this.currentScale;
    this.currentScale = pinchDistance / this.initialPinchDistance;
    let minZoom = Number(PDFViewerApplicationOptions.get('minZoom'));
    if (!minZoom) {
      minZoom = 0.1;
    }

    const currentZoom = PDFViewerApplication.pdfViewer._currentScale;
    if (currentZoom * this.currentScale < minZoom) {
      this.currentScale = minZoom / currentZoom;
    }
    let maxZoom = Number(PDFViewerApplicationOptions.get('maxZoom'));
    if (!maxZoom) {
      maxZoom = 10;
    }
    if (currentZoom * this.currentScale > maxZoom) {
      this.currentScale = maxZoom / currentZoom;
    }




    if (this.debug.enabled) {
      console.log("TouchMove PINCH: "
        + ", startX/Y: " + this.debug.nf.format(this.startX) + " / " + this.debug.nf.format(this.startY)
        + ", moveX/Y: " + + this.debug.nf.format(this.moveX) + " / " + this.debug.nf.format(this.moveY)
        + ", rect.l/t: " + this.debug.nf.format(rect.left) + " / " + this.debug.nf.format(rect.top)
        + ", viewer.l/t: " + this.debug.nf.format(vr.left) + " / " + this.debug.nf.format(vr.top)
        // + ", viewerContainer.sl/st: " + this.debug.nf.format(viewerContainer.scrollLeft) + " / " + this.debug.nf.format(viewerContainer.scrollTop)
        + ", originX/Y: " + this.debug.nf.format(originX) + " / " + this.debug.nf.format(originY)

        + ", viewer.w/h: " + this.debug.nf.format(vr.width) + " / " + this.debug.nf.format(vr.height)
        + ", currentScale: " + this.debug.nf.format(prevScale) + " -> " + this.debug.nf.format(this.currentScale)
        + ", dims: ", dims


      );
    }


    this.viewer.style.transform = `scale(${this.currentScale})`;
    this.viewer.style.transformOrigin = `${originX}px ${originY}px`;

    // this.transformScale = this.currentScale;



    if (event.cancelable) {
      event.preventDefault();
    }
    event.stopPropagation();
  }

  private onViewerTouchEnd(event: TouchEvent): void {
    if (this.options.disableEventHandling) return;

    if (this.debug.enabled) console.log("onViewerTouchEnd"
      + ", vts: " + this.getViewerTransformScale("onViewerTouchEnd")
      + ', state: ' + this.state
      + ", initialPinchDistance: " + this.initialPinchDistance
    );

    const PDFViewerApplication: any = (window as any).PDFViewerApplication;


    // let to = this.viewer.style.transformOrigin;

    // this.viewer.style.transform = `none`;
    // this.viewer.style.transformOrigin = `unset`;

    let dimsStart = this.getDimensions(this.viewer);


    let tl = event.changedTouches.length;
    let pageX = this.moveX;
    let pageY = this.moveY;

    if (tl > 1) {
      pageX = (event.changedTouches[1].pageX + event.changedTouches[0].pageX) / 2;
      pageY = (event.changedTouches[1].pageY + event.changedTouches[0].pageY) / 2;

    }
    else {
      if (this.debug.enabled) console.log("end.moveX/Y: " + this.moveX + " -> " + pageX + ", moveY: " + this.moveY + " -> " + pageY + ", tl: " + tl);
    }

    // this.currentScale = 1;



    let now = new Date().getTime();
    if (this.pointEnd.time) {
      let pe = this.pointEnd;

      let diff = now - pe.time;
      // console.log("pointEnd.diff: " + diff);

      if (pe.pageX == pageX && pe.pageY == pageY && diff < 300) {

        let PDFViewerApplication: any = (window as any).PDFViewerApplication;
        let currentScale = PDFViewerApplication.pdfViewer.currentScale;
        let scaleFactor = 1.4;

        let newScale = this.isZooming() ? (currentScale / scaleFactor) : (currentScale * scaleFactor);

        // let newScale = currentScale * 1.2;
        // if (this.debug.enabled) console.log("pointEnd.point mateches, new scale: " + newScale);

        if (this.initialPinchDistance <= 0 || this.state == "move") {
          if (event.cancelable) {
            event.preventDefault();
          }
          event.stopPropagation();
        }

        setTimeout(() => {

          this.setViewerScale(newScale);
          this.pointEnd = {};
        }, 5);

        return;
      }

    }

    this.pointEnd = {
      time: now,
      pageX: pageX,
      pageY: pageY
    }


    if (this.state == "move") {
      this.resetPinchZoomParams();
      return;
    }

    if (this.initialPinchDistance <= 0) {
      this.resetPinchZoomParams();
      return;
    }


    let currentScale = PDFViewerApplication.pdfViewer.currentScale;
    let newScale = currentScale * this.currentScale;
    // let scaleChange = 1 + (newScale - currentScale) / currentScale;


    const container = document.getElementById('viewerContainer') as HTMLDivElement;
    const rect = container.getBoundingClientRect();
    const viewerRect = this.viewer.getBoundingClientRect();

    let dims = this.getDimensions(this.viewer);


    if (this.debug.enabled) this.debugPoint(pageX, pageY);



    if (this.debug.enabled) {
      console.log("TouchEnd: "
        + ", scale: " + this.debug.nf.format(currentScale) + " -> " + this.debug.nf.format(newScale) + ", cs: " + this.currentScale

        + ", pageX/Y: " + this.debug.nf.format(pageX) + " / " + this.debug.nf.format(pageY)
        + ", startX/Y: " + this.debug.nf.format(this.startX) + " / " + this.debug.nf.format(this.startY)
        // + ", diff: " + this.debug.nf.format(diffX) + " / " + this.debug.nf.format(diffY)
        // + ", diffs: " + this.debug.nf.format(diffXs) + " / " + this.debug.nf.format(diffYs)

        // + ", l/t: " + this.debug.nf.format(viewerRect.left) + " -> " +this.debug.nf.format(left) + " / " + this.debug.nf.format(viewerRect.top) + " -> " +this.debug.nf.format(top)
        + ", viewer.w/h: " + this.debug.nf.format(viewerRect.width) + " / " + this.debug.nf.format(viewerRect.height)
        + ", dims: ", dims

      );
    }


    this.setViewerScale(newScale, { resetTransform: true });


    this.resetPinchZoomParams();

    // }, 50);

    if (event.cancelable) {
      event.preventDefault();
    }
    event.stopPropagation();


    // if (tl == 1) {
    // let pageX = event.changedTouches[0].pageX;
    // let pageY = event.changedTouches[0].pageY;



    // }
  }


  private onViewerMouseDown(event: MouseEvent): void {
    if (this.options.disableEventHandling) return;

    let isInside = this.isInsideContainer([event])
    if (!isInside) return;

    if (!this.options.moveEnabled) return;

    let dims = this.getDimensions(this.viewer, event);

    // this.zoomToPoint(event, event.pageX, event.pageY);
    if (this.debug.enabled) {
      this.debugPoint(dims.point.c.x, dims.point.c.y);
      this.debugPoint(dims.point.v.x, dims.point.v.x, true);
    }


    this.startX = dims.point.c.x;
    this.startY = dims.point.c.y;

    this.startLeft = parseFloat(getComputedStyle(this.viewer).left) || 0;
    this.startTop = parseFloat(getComputedStyle(this.viewer).top) || 0

    this.state = "move";

    if (event.cancelable) {
      event.preventDefault();
    }
    event.stopPropagation();

  }
  private onViewerMouseMove(event: MouseEvent): void {
    if (this.options.disableEventHandling) return;

    if (this.state != "move") {
      // console.log("mousemove: state!=move: " + this.state);
      return;
    }

    let dims = this.getDimensions(this.viewer, event);


    if (this.debug.enabled) this.debugPoint(dims.point.c.x, dims.point.c.y);

    let diffX = dims.point.c.x - this.startX;
    let diffY = dims.point.c.y - this.startY;

    let left = this.startLeft + diffX;
    let top = this.startTop + diffY;

    let constrain = this.constrain({ left: left, top: top });
    left = constrain.left;
    top = constrain.top;


    this.viewer.style.left = left + "px";
    this.viewer.style.top = top + "px";


    if (this.debug.enabled) {
      console.log("mousemove: "
        + this.debug.nf.format(dims.point.c.x) + " / " + this.debug.nf.format(dims.point.c.y)
        + ", diff: " + this.debug.nf.format(diffX) + " / " + this.debug.nf.format(diffY)
        + ", l/t: " + this.debug.nf.format(left) + " / " + this.debug.nf.format(top)
      );
    }

    if (event.cancelable) {
      event.preventDefault();
    }
    event.stopPropagation();


  }
  private onViewerMouseUp(event: MouseEvent): void {
    if (this.options.disableEventHandling) return;

    let isInside = this.isInsideContainer([event]);
    if (this.debug.enabled) console.log("mouseup: " + this.debug.nf.format(event.pageX) + " / " + this.debug.nf.format(event.pageY) + "; inside: " + isInside);
    // document.removeEventListener("mousemove", event);

    if (!isInside) return;

    this.resetPinchZoomParams();

    //TODO: kan ikke bruke preventDefault hvis vi skal kunne støtte dobbeltklikk

    if (event.cancelable) {
      event.preventDefault();
    }
    event.stopPropagation();

    let pageX = event.pageX;
    let pageY = event.pageY;
    let now = new Date().getTime();
    if (this.pointEnd.time) {
      let pe = this.pointEnd;

      let diff = now - pe.time;
      // console.log("pointEnd.diff: " + diff);

      if (pe.pageX == pageX && pe.pageY == pageY && diff < 300) {

        let PDFViewerApplication: any = (window as any).PDFViewerApplication;
        let currentScale = PDFViewerApplication.pdfViewer.currentScale;
        let scaleFactor = 1.4;

        let newScale = this.isZooming() ? (currentScale / scaleFactor) : (currentScale * scaleFactor);
        // if (this.debug.enabled) console.log("pointEnd.point mateches, isZ: "+this.isZooming() +", new scale: " + currentScale + " -> " + newScale);

        setTimeout(() => {

          this.setViewerScale(newScale);
          this.pointEnd = {};
        }, 5);

        return;
      }

    }

    this.pointEnd = {
      time: now,
      pageX: pageX,
      pageY: pageY
    }



    // console.log("updateing pointEnd: ", this.pointEnd);


  }


  private resetPinchZoomParams(): void {
    this.startX = this.startY = this.moveX = this.moveY = this.startLeft = this.startTop = this.initialPinchDistance = 0;
    this.currentScale = 1;
    this.state = "idle";
  }

  private getBoxStyle(
    elem: HTMLElement | SVGElement,
    name: string,
    style: CSSStyleDeclaration = window.getComputedStyle(elem)
  ) {
    const suffix = name === 'border' ? 'Width' : ''
    return {
      left: parseFloat(style[`${name}Left${suffix}`]) || 0,
      right: parseFloat(style[`${name}Right${suffix}`]) || 0,
      top: parseFloat(style[`${name}Top${suffix}`]) || 0,
      bottom: parseFloat(style[`${name}Bottom${suffix}`]) || 0,
    }
  }


  private getDimensions(elem: HTMLElement, point?: ({ pageX: number, pageY: number })) {
    const parent = elem.parentNode as HTMLElement
    const style = window.getComputedStyle(elem)
    const parentStyle = window.getComputedStyle(parent)
    const rectElem = elem.getBoundingClientRect()
    const rectParent = parent.getBoundingClientRect()


    const vts = this.getViewerTransformScale("getDimensions");
    const vto = this.getViewerTransformOrigin();

    let res: any = {
      elem: {
        style,
        width: rectElem.width,
        height: rectElem.height,
        top: rectElem.top,
        bottom: rectElem.bottom,
        left: rectElem.left,
        right: rectElem.right,
        margin: this.getBoxStyle(elem, 'margin', style),
        border: this.getBoxStyle(elem, 'border', style)
      },
      rel: {
        width: rectElem.width,
        height: rectElem.height,
        top: rectElem.top - rectParent.top,
        left: rectElem.left - rectParent.left,
        bottom: rectElem.bottom - rectParent.top,
        right: rectElem.right - rectParent.left,
      },

      parent: {
        style: parentStyle,
        width: rectParent.width,
        height: rectParent.height,
        top: rectParent.top,
        bottom: rectParent.bottom,
        left: rectParent.left,
        right: rectParent.right,
        padding: this.getBoxStyle(parent, 'padding', parentStyle),
        border: this.getBoxStyle(parent, 'border', parentStyle)
      }
    };

    if (vts == 1.0) res.scaled = res.rel;
    else {
      let sw = res.rel.width / vts;
      let sh = res.rel.height / vts;
      let wd = res.rel.width - sw;  // 118
      let hd = res.rel.height - sh;


      res.scaled = {
        vts: vts,
        vto: vto,
        width: sw,
        height: sh,

        left: res.rel.left + wd / 2,
        right: res.rel.right - wd / 2,
        top: res.rel.top + hd / 2,
        bottom: res.rel.bottom - hd / 2,

        wd: wd,
        hd: hd,
      }
    }



    let vx = point ? point.pageX - rectElem.left : rectElem.width / 2;
    let vy = point ? point.pageY - rectElem.top : rectElem.height / 2;

    let cx = point ? point.pageX - rectParent.left : vx + res.rel.left;
    let cy = point ? point.pageY - rectParent.top : vy + res.rel.top;

    let vxp = vx / rectElem.width;
    let vyp = vy / rectElem.height;
    let cxp = cx / rectParent.width;
    let cyp = cy / rectParent.height;

    res.point = {
      src: point,
      v: {
        x: vx,
        y: vy,
        xp: vxp,
        yp: vyp
      },
      c: {
        x: cx,
        y: cy,
        xp: cxp,
        yp: cyp
      }
    }




    return res;
  }



  //   return res;
  // }

  private getDimDiff(start: any, end: any) {
    // let se = start.elem;
    // let ee = end.elem;
    // let sp = start.parent;
    // let ep = end.parent;

    let input = {
      elem: {
        start: start.elem,
        end: end.elem
      },
      parent: {
        start: start.parent,
        end: end.parent
      },
      rel: {
        start: start.rel,
        end: end.rel
      },
      scaled: {
        start: start.scaled,
        end: end.scaled
      },
    }

    let res: any = {};
    for (let type of ["elem", "parent", "rel", "scaled"]) {
      let s = input[type].start;
      let e = input[type].end;

      res[type] = {};

      for (let prop of ["width", "height", "top", "bottom", "left", "right"]) {
        let sv = s[prop];
        let ev = e[prop];
        let diff = ev - sv;

        res[type][prop + "Label"] = this.debug.nf.format(sv) + " -> " + this.debug.nf.format(ev) + ", diff: " + this.debug.nf.format(diff) + " (" + this.debug.nf.format(diff / sv * 100.0) + " %)";
        res[type][prop] = diff;
      }
    }

    return res;


  }


  private constrain(p: ({ left: number, top: number })): ({ left: number, top: number }) {
    const dims = this.getDimensions(this.viewer)

    let isScaled = dims.scaled.vts !== undefined && dims.scaled.vts != 1.0;

    let minX = p.left, maxX = p.left, minY = p.top, maxY = p.top;

    if (dims.elem.width <= dims.parent.width) {
      // inside
      minX = 0;
      maxX = (dims.parent.width - dims.elem.width)
    } else {
      // outside
      minX = -(dims.elem.width - dims.parent.width);
      maxX = 0;

    }
    if (dims.elem.height <= dims.parent.height) {
      // inside
      minY = 0;
      maxY = (dims.parent.height - dims.elem.height);

    } else {
      // outside
      minY = -(dims.elem.height - dims.parent.height);
      maxY = 0;

    }

    if (isScaled) {
      let vto = dims.scaled.vto;
      let xp = vto ? vto.x / dims.scaled.width : 0.5;
      let yp = vto ? vto.y / dims.scaled.height : 0.5;

      minX += dims.scaled.wd * xp;
      maxX += dims.scaled.wd * xp;

      minY += dims.scaled.hd * yp;
      maxY += dims.scaled.hd * yp;
    }



    let cLeft = Math.max(Math.min(p.left, maxX), minX)
    let cTop = Math.max(Math.min(p.top, maxY), minY)

    // if (this.debug.enabled) console.log("constrain, left:  " + p.left + " -> " + cLeft + " ("+minX + "-"+maxX+")" + ", top: " + p.top + " -> " + cTop + " ("+minY + "-"+maxY+"), dims: ", dims);

    return { left: cLeft, top: cTop };
  }

  private isInsideContainer(points: ({ pageX: number, pageY: number, target: any })[]) {
    const viewerContainer = document.getElementById('viewerContainer') as HTMLDivElement;
    const rect = viewerContainer.getBoundingClientRect();

    if (points === undefined || points.length == 0) return false;

    //TODO: Check event, is target.parent the viewerContainer? 

    // let allInside = true;
    for (let point of points) {

      let target = point.target;
      if (target) {
        let closest = target.closest("#viewerContainer");
        // console.log("closest: ", closest)
        if (closest == undefined) {
          return false;
        }
      }


      let pageX = point.pageX; // + viewerContainer.scrollLeft;
      let pageY = point.pageY; // + viewerContainer.scrollTop;


      let inside = false;
      if (pageX >= rect.left && pageX <= rect.right) {
        if (pageY >= (rect.top + window.scrollY) && pageY <= (rect.bottom + window.scrollY)) {
          inside = true;
        }
      }

      // console.log("pageX/Y: " + pageX + " / " + pageY + ", inside: " + inside + "; rect: ", rect, ", point: ", point);

      if (!inside) return false;
    }

    return true;
  }

  private getViewerTransformScale(src: string) {
    let tf = getComputedStyle(this.viewer).transform;

    if (tf == "none" || tf.indexOf("(") < 0) {
      let vts = 1.0;

      // if (this.transformScale > 0.0) {
      //   vts = this.transformScale
      // }

      // if (this.debug.enabled) console.log("getViewerTransformScale, tf: " + tf + ", indexOf (: " + tf.indexOf("(") + ", src: " + src + ", vts: " + vts);

      return vts;
    }

    let isScale = tf.indexOf("scale") >= 0;
    let transformScale = parseFloat(
      tf.substring(tf.indexOf("(") + 1,
        tf.indexOf(isScale ? ")" : ","))
    );
    // if (this.debug.enabled) console.log("getViewerTransformScale, tf: " + tf + ", indexOf (: " + tf.indexOf("(") + ", transformScale: " + transformScale + ", src: " + src);
    return transformScale;
  }

  private getViewerTransformOrigin() {
    let to = this.viewer.style.transformOrigin;
    if (to == undefined || to == "unset") return undefined;

    let parts = to.split(" ");
    if (parts.length != 2) return undefined;

    return { x: parseFloat(parts[0]), y: parseFloat(parts[1]) };
  }

  public checkContraint(): boolean {
    const dims = this.getDimensions(this.viewer);
    let constrain: any = this.constrain({ left: dims.elem.left, top: dims.elem.top });
    return constrain.left != dims.elem.left && constrain.top != dims.elem.top;
  }

  public updateViewerPosition(forceUpdate: boolean = false) {
    let viewerContainer = document.getElementById('viewerContainer') as HTMLDivElement;
    this.viewer = document.getElementById('viewer') as HTMLDivElement;

    const dims = this.getDimensions(this.viewer);


    let constrain: any = this.constrain({ left: dims.elem.left, top: dims.elem.top }); // ;
    let transformScale = this.getViewerTransformScale("updateViewerPosition");

    // if (transformScale == 1.0)

    if (this.debug.enabled) {
      // console.log("updateViewerPosition"
      //   + ", updateLeft: " + (dims.elem.width <= dims.parent.width) 
      //   + ", updateTop: " + (dims.elem.height <= dims.parent.height)
      //   + ", checkContraint: " + this.checkContraint()
      //   + ", transformScale: " + transformScale 
      //   + ", dims: ", dims);

    }
    let point: ({ left: number | undefined, top: number | undefined }) = {
      left: undefined,
      top: undefined
    }

    if (forceUpdate || dims.elem.width <= dims.parent.width || (constrain && constrain.left != dims.elem.left)) {
      let left = (dims.parent.width - (dims.elem.width / transformScale)) / 2;
      // console.log("updateViewerPosition, left: " + this.viewer.style.left  + " -> " + left);
      // this.viewer.style.left = left + "px";
      point.left = left;
    }
    if (forceUpdate || dims.elem.height <= dims.parent.height || (constrain && constrain.top != dims.elem.top)) {
      let top = (dims.parent.height - (dims.elem.height / transformScale)) / 2;
      // console.log("updateViewerPosition, top: " + this.viewer.style.top  + " -> " + top);
      // this.viewer.style.top = top + "px";
      point.top = top;
    }

    if (point.left || point.top) {

      this.viewer.style.left = point.left + "px";
      this.viewer.style.top = point.top + "px";
    }

  }

  private setViewerScale(newScale, options: any = {}) {
    let vtsSource = getComputedStyle(this.viewer).transform;
    if (this.debug.enabled) console.log("setViewerScale, newScale: " + newScale + ", vtsSource: " + vtsSource);

    let origin = options.origin;
    // let resetTransform = options.resetTransform === undefined || options.resetTransform === true; 

    let vts = this.getViewerTransformScale("setViewerScale");


    let dims = this.getDimensions(this.viewer);
    // let dimsAfterTransformReset = dims; 

    let reset: any = { left: undefined, top: undefined };

    if (vts != 1.0) { // resetTransform && 

      if (vtsSource != "none") {

        reset.left = dims.rel.left;
        reset.top = dims.rel.top;
      }

      this.viewer.style.transform = 'none';
      this.viewer.style.transformOrigin = 'unset';

      // this.transformScale = -1;
      // dimsAfterTransformReset = this.getDimensions(this.viewer);

    }

    let PDFViewerApplication: any = (window as any).PDFViewerApplication;
    let currentScale = PDFViewerApplication.pdfViewer.currentScale;

    if (origin == undefined) {
      origin = { x: dims.elem.width / 2, y: dims.elem.height / 2 };
    }

    let oxp = origin.x / dims.elem.width;
    let oyp = origin.y / dims.elem.height;

    if (this.debug.enabled) {
      console.log("setViewerScale, currentScale: " + this.debug.nf.format(currentScale) + " -> " + this.debug.nf.format(newScale) + ", vts: " + this.debug.nf.format(vts) + " (" + vtsSource + ")"
        + ", origin: " + this.debug.nf.format(origin.x) + " (" + this.debug.nf.format(oxp * 100) + ") / " + this.debug.nf.format(origin.y) + " (" + this.debug.nf.format(oyp * 100) + ")"
        + ", debug.x/Y: " + this.debug.nf.format(this.debug.x) + " / " + + this.debug.nf.format(this.debug.y)
        + ", isZooming: " + this.isZooming()
        + ", dims: ", dims);
    }

    PDFViewerApplication.pdfViewer._setScale(newScale, true);

    let dimsAfter = this.getDimensions(this.viewer);
    let dimDiff = this.getDimDiff(dims, dimsAfter);

    let dimsCorr: any = {
      left: parseFloat(getComputedStyle(this.viewer).left) || 0,
      top: parseFloat(getComputedStyle(this.viewer).top) || 0,
    }
    dimsCorr.leftDiff = - (dimDiff.elem.width * oxp);
    dimsCorr.topDiff = - (dimDiff.elem.height * oyp);

    dimsCorr.leftNext = dimsCorr.left + dimsCorr.leftDiff;
    dimsCorr.topNext = dimsCorr.top + dimsCorr.topDiff;

    if (reset.left) {
      if (this.debug.enabled) {
        console.log("dimsCorr.leftNext: " + this.debug.nf.format(dimsCorr.leftNext) + " -> " + this.debug.nf.format(reset.left));
        console.log("dimsCorr.topNext: " + this.debug.nf.format(dimsCorr.topNext) + " -> " + this.debug.nf.format(reset.top));
      }

      dimsCorr.leftNext = reset.left;
      dimsCorr.topNext = reset.top;

    }

    this.viewer.style.left = dimsCorr.leftNext + "px";
    this.viewer.style.top = dimsCorr.topNext + "px";

    if (this.debug.enabled) {
      console.log("setViewerScale2, newCurrentScale: " + this.debug.nf.format(PDFViewerApplication.pdfViewer.currentScale)
        + ", isZooming: " + this.isZooming()
        + ", dimsAfter: ", dimsAfter,
        ", dimDiff: ", dimDiff,
        ", dimsCorr: ", dimsCorr
      );
    }

  }

  isZooming() {
    let PDFViewerApplication: any = (window as any).PDFViewerApplication;
    const PDFViewerApplicationOptions: IPDFViewerApplicationOptions = (window as any).PDFViewerApplicationOptions;

    let currentScale = PDFViewerApplication.pdfViewer.currentScale;

    let czf = Math.round(currentScale * 10000);

    let minZoom = Math.round(Number(PDFViewerApplicationOptions.get('minZoom')) * 10000);
    //  console.log("isZooming, czf: "  + czf + ", minZoom: " + minZoom + "; isZ: " + (czf > minZoom));
    return czf > minZoom;
  }

  onViewerWheel(event: Event) {
    if (this.options.disableEventHandling) return;
    if (this.debug.enabled) console.log("onWheel: event: ", event);

    setTimeout(() => {

      this.updateViewerPosition();
    }, 2)

  };

  public initializeRelativeCoords(): void {

    let viewerContainer = document.getElementById('viewerContainer') as HTMLDivElement;
    this.viewer = document.getElementById('viewer') as HTMLDivElement;

    this.component.root.nativeElement.classList.add("relative-coords");

    let stfItemHack = document.createElement("div");
    stfItemHack.classList.add("stf__item");
    viewerContainer.appendChild(stfItemHack);


    if (this.debug.enabled) console.log("initializeRelativeCoords: isMobile: " + this.isMobile());

    let onContainerScoll = (event: Event) => {
      //console.log("onContainerScoll: l/t: " + viewerContainer.scrollLeft + " / " + viewerContainer.scrollTop + ", event: " , event);
      if (viewerContainer.scrollLeft != 0 || viewerContainer.scrollTop != 0) viewerContainer.scroll({ left: 0, top: 0 })
    }

    viewerContainer.addEventListener('scroll', onContainerScoll);


    this.component.pagesLoaded.subscribe(async (event: PagesLoadedEvent) => {
      if (this.debug.enabled) console.log("initializeRelativeCoords: scrollTop: ", viewerContainer.scrollTop);
      setTimeout(() => {
        // console.log("pageChange: pages: ", this.getCurrentPagesInView())
        this.updateViewerPosition(true);
      }, 10);
    });

    this.component.pageChange.subscribe(async (event: any) => {
      if (this.debug.enabled) console.log("pageChange: event: ", event, ", dims: ", this.getDimensions(this.viewer));
      // console.log("pageChange: pages: ", this.getCurrentPagesInView())
      setTimeout(() => {
        // console.log("pageChange: pages: ", this.getCurrentPagesInView())
        this.updateViewerPosition(true);
      }, 10);

    });
    // this.component.zoomChange.subscribe(async (event: any) => {
    //   console.log("zoomChange: event: ", event);
    // });
    this.component.currentZoomFactor.subscribe(async (event: any) => {
      if (this.debug.enabled) console.log("currentZoomFactor: event: ", event);
      // this.updateViewerPosition();
    });

    if (!this.isMobile()) {

      // let onWheel = 


      this._zone.runOutsideAngular(() => {
        // Panning support on desktop
        document.addEventListener('mousedown', this.boundOnViewerMouseDown);
        document.addEventListener('mousemove', this.boundOnViewerMouseMove, { passive: false });
        document.addEventListener('mouseup', this.boundOnViewerMouseUp);

        window.addEventListener("wheel", this.boundOnViewerWheel, { passive: false });

      });


    } else {

      this._zone.runOutsideAngular(() => {
        document.addEventListener('touchstart', this.boundOnViewerTouchStart);
        document.addEventListener('touchmove', this.boundOnViewerTouchMove, { passive: false });
        document.addEventListener('touchend', this.boundOnViewerTouchEnd);

      });


    }




    if (this.debug.enabled) {

      let onKeyup = (event: KeyboardEvent) => {
        console.log("onKeyup: event.key: " + event.key);
        let dims = this.getDimensions(this.viewer);
        const PDFViewerApplication: any = (window as any).PDFViewerApplication;

        if (event.key == "q") {



          this.viewer.style.transform = `none`;
          this.viewer.style.transformOrigin = `unset`;
          this.currentScale = 1.0;

          let dimsAfter = this.getDimensions(this.viewer);
          console.log("dimsAfter: ", dimsAfter.scaled);
          console.log("dimsDiff: ", this.getDimDiff(dims, dimsAfter).scaled);

        } else if (event.key == "w") {
          let originX = this.debug.x || dims.parent.width / 2;
          let originY = this.debug.y || dims.parent.height / 2;
          originX -= dims.elem.left - dims.parent.left;
          originY -= dims.elem.top - dims.parent.top;
          this.currentScale = 1.3;

          console.log("originX/Y: " + originX + " / " + originY + ", scale: " + this.currentScale + "; dims: ", dims);
          console.log("originX/Y (%): " + this.debug.nf.format(originX / dims.elem.width * 100) + " / " + this.debug.nf.format(originY / dims.elem.height * 100));


          this.viewer.style.transform = `scale(${this.currentScale})`;
          this.viewer.style.transformOrigin = `${originX}px ${originY}px`;

          let dimsAfter = this.getDimensions(this.viewer);
          console.log("dimsAfter: ", dimsAfter.elem);
          console.log("dimsDiff: ", this.getDimDiff(dims, dimsAfter).elem);

        } else if (event.key == "e") {

          // this.viewer.style.transform = `none`;
          // this.viewer.style.transformOrigin = `unset`;


          let currentScale = PDFViewerApplication.pdfViewer.currentScale;
          let newScale = currentScale * this.currentScale;

          console.log("currentScale: " + currentScale + " -> " + newScale + ", cs: " + this.currentScale + ", dims: ", dims);


          // PDFViewerApplication.pdfViewer._setScale(newScale, true);
          this.setViewerScale(newScale, { resetTransform: true });

          let dimsAfter = this.getDimensions(this.viewer);

          console.log("dimsAfter: ", dimsAfter.elem);
          console.log("dimsDiff: ", this.getDimDiff(dims, dimsAfter).elem);

          // } else  if (event.key == "r") { // Rotate
        } else if (event.key == "s") {
          let originX = this.debug.x || dims.parent.width / 2;
          let originY = this.debug.y || dims.parent.height / 2;
          originX -= dims.elem.left - dims.parent.left;
          originY -= dims.elem.top - dims.parent.top;

          // reset pdfViewer.scale
          let currentScale = PDFViewerApplication.pdfViewer.currentScale;
          let prevScale = currentScale / this.currentScale;
          // console.log("currentScale: " + currentScale + " -> " + prevScale + ", originX/Y: " + originX + " / " + originY);
          console.log("originX/Y: " + originX + " / " + originY + ", scale: " + currentScale + " -> " + prevScale + ", t.cs: " + this.currentScale + "; dims: ", dims);
          console.log("originX/Y (%): " + (originX / dims.elem.width) + " / " + (originY / dims.elem.height));

          // PDFViewerApplication.pdfViewer._setScale(prevScale, true);
          if (currentScale != prevScale) this.setViewerScale(prevScale);


          originX = this.debug.x || dims.parent.width / 2;
          originY = this.debug.y || dims.parent.height / 2;
          let dimsAfter = this.getDimensions(this.viewer);
          originX -= dimsAfter.elem.left - dimsAfter.parent.left;
          originY -= dimsAfter.elem.top - dimsAfter.parent.top;

          console.log("originX/Y: " + originX + " / " + originY + ", scale: " + currentScale + " -> " + prevScale + ", t.cs: " + this.currentScale + "; dimsAfter: ", dimsAfter);
          console.log("originX/Y (%): " + (originX / dimsAfter.elem.width) + " / " + (originY / dimsAfter.elem.height));

          this.viewer.style.transform = `scale(${this.currentScale})`;
          this.viewer.style.transformOrigin = `${originX}px ${originY}px`;

        } else if (event.key == "t") {

          // bare PDF.js-zoom
          let originX = this.debug.x || dims.parent.width / 2;
          let originY = this.debug.y || dims.parent.height / 2;
          originX -= dims.elem.left - dims.parent.left;
          originY -= dims.elem.top - dims.parent.top;

          if (this.currentScale == 1.0) this.currentScale = 1.3;

          let currentScale = PDFViewerApplication.pdfViewer.currentScale;
          let newScale = currentScale * this.currentScale;
          this.setViewerScale(newScale, { origin: { x: originX, y: originY } });



        } else if (event.key == "y") {

          let originX = this.debug.x || dims.parent.width / 2;
          let originY = this.debug.y || dims.parent.height / 2;
          originX -= dims.elem.left - dims.parent.left;
          originY -= dims.elem.top - dims.parent.top;

          let currentScale = PDFViewerApplication.pdfViewer.currentScale;
          let prevScale = currentScale / this.currentScale;

          console.log("y, currentScale: " + currentScale + "; prevScale: " + prevScale);
          // PDFViewerApplication.pdfViewer._setScale(prevScale, true);
          this.setViewerScale(prevScale, { origin: { x: originX, y: originY } });
          // this.currentScale = 1.0;

          // let dimsAfter = this.getDimensions(this.viewer);

          // console.log("dimsAfter: ", dimsAfter.elem);
          // console.log("dimsDiff: ", this.getDimDiff(dims, dimsAfter).elem);


        } else if (event.key == "u") {
          this.updateViewerPosition();

        } else if (event.key == "i") {
          let corrLeft = 200;
          console.log("beforeCorr: ", this.getDimensions(this.viewer).elem);
          console.log("this.viewer.style: ", this.viewer.style);
          console.log("this.viewer.style.left: " + this.viewer.style.left + " -> " + corrLeft);
          this.viewer.style.left = corrLeft + "px";
          console.log("afterCorr: ", this.getDimensions(this.viewer).elem);
          console.log("this.viewer.style: ", this.viewer.style);

        } else if (event.key == "o") {

          let originX = this.debug.x || dims.parent.width / 2;
          let originY = this.debug.y || dims.parent.height / 2;
          originX -= dims.elem.left - dims.parent.left;
          originY -= dims.elem.top - dims.parent.top;

          console.log("originX/Y: " + originX + " / " + originY + ", scale: " + this.currentScale);

          this.viewer.style.transform = `scale(${this.currentScale})`;
          this.viewer.style.transformOrigin = `${originX}px ${originY}px`;

        } else if (event.key == "p") {


          console.log("dims: ", dims);
          // let originX = this.debug.x || dims.parent.width / 2; 
          // let originY = this.debug.y || dims.parent.height / 2; 


          console.log("getViewerTransformScale: ", this.getViewerTransformScale("key == p"));

          this.viewer.style.transform = `none`;
          this.viewer.style.transformOrigin = `unset`;

          let dimsAfter = this.getDimensions(this.viewer);
          console.log("dimsAfter: ", dimsAfter);
          console.log("dimsDiff: ", this.getDimDiff(dims, dimsAfter));


        } else if (event.key == "f") {


        } else if (event.key == "d") {

          console.log("dims: ", this.getDimensions(this.viewer));

        } else if (event.key == "z") {

        } else if (event.key == "x") {

        }
      };


      window.addEventListener("keyup", onKeyup);
    }



  }

  public destroyRelativeCoords(): void {
    if (!this.isMobile()) {
      document.removeEventListener('mousedown', this.boundOnViewerMouseDown);
      document.removeEventListener('mousemove', this.boundOnViewerMouseMove);
      document.removeEventListener('mouseup', this.boundOnViewerMouseUp);

      window.removeEventListener("wheel", this.boundOnViewerWheel);

      return;
    }
    document.removeEventListener('touchstart', this.boundOnViewerTouchStart);
    document.removeEventListener('touchmove', this.boundOnViewerTouchMove);
    document.removeEventListener('touchend', this.boundOnViewerTouchEnd);
  }
}

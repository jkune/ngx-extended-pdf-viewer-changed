export class RelativeCoordsSupport {
    constructor(_zone, component, options) {
        this._zone = _zone;
        this.component = component;
        this.options = {
            debug: false,
            moveEnabled: true,
            disableEventHandling: false,
        };
        this.startX = 0;
        this.startY = 0;
        this.moveX = 0;
        this.moveY = 0;
        this.startLeft = 0;
        this.startTop = 0;
        this.state = "idle";
        this.initialPinchDistance = 0;
        this.currentScale = 1.0;
        this.pointEnd = {};
        this.debug = {
            enabled: false,
            nf: new Intl.NumberFormat('en-US', { style: 'decimal', maximumFractionDigits: 2 }),
            x: 0,
            y: 0
        };
        options = options || {};
        Object.keys(this.options).forEach(attribut => {
            if (options[attribut] === undefined)
                options[attribut] = this.options[attribut];
        });
        this.options = options;
        this.debug.enabled = this.options.debug;
        if (this.debug.enabled)
            console.log("RelativeCoordsSupport.constructor");
        this.boundOnViewerTouchStart = this.onViewerTouchStart.bind(this);
        this.boundOnViewerTouchMove = this.onViewerTouchMove.bind(this);
        this.boundOnViewerTouchEnd = this.onViewerTouchEnd.bind(this);
        this.boundOnViewerMouseDown = this.onViewerMouseDown.bind(this);
        this.boundOnViewerMouseMove = this.onViewerMouseMove.bind(this);
        this.boundOnViewerMouseUp = this.onViewerMouseUp.bind(this);
        this.boundOnViewerWheel = this.onViewerWheel.bind(this);
        this.initializeRelativeCoords();
    }
    isMobile() {
        return (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0); // ('ontouchstart' in window) || 
    }
    onViewerTouchStart(event) {
        if (this.options.disableEventHandling)
            return;
        this.initialPinchDistance = 0;
        if (event.touches.length === 2) {
            const container = document.getElementById('viewerContainer');
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
            let touch = event.touches[0];
            if (this.options.moveEnabled && this.isInsideContainer([touch]) && this.state == "idle") {
                const viewerContainer = document.getElementById('viewerContainer');
                const rect = viewerContainer.getBoundingClientRect();
                let pageX = touch.pageX - rect.left;
                let pageY = touch.pageY - rect.top;
                if (this.debug.enabled)
                    this.debugPoint(pageX, pageY);
                this.startX = pageX;
                this.startY = pageY;
                let left = parseFloat(getComputedStyle(this.viewer).left) || 0;
                let top = parseFloat(getComputedStyle(this.viewer).top) || 0;
                if (this.debug.enabled) {
                    console.log("TouchStart: "
                        + this.debug.nf.format(pageX) + " / " + this.debug.nf.format(pageY)
                        + ", startX/Y: " + this.debug.nf.format(this.startX) + " / " + this.debug.nf.format(this.startY)
                        + ", startLeft/Top: " + this.debug.nf.format(this.startLeft) + " -> " + this.debug.nf.format(left) + " / " + this.debug.nf.format(this.startTop) + " -> " + this.debug.nf.format(top)
                        + ", state: " + this.state, ", dims: ", this.getDimensions(this.viewer));
                }
                this.startLeft = left;
                this.startTop = top;
                this.state = "move";
                if (event.cancelable) {
                    event.preventDefault();
                }
                event.stopPropagation();
            }
            else {
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
    debugPoint(x, y, viewer = false) {
        if (!this.options.debugPoint)
            return;
        const viewerContainer = document.getElementById('viewerContainer');
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
            if (!viewer)
                viewerContainer.appendChild(point);
            else
                this.viewer.appendChild(point);
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
        }
        else {
            this.debug.x = x;
            this.debug.y = y;
            // console.log("debugPoint.cont: " + this.debug.nf.format(x) + " / " + this.debug.nf.format(y) + " | " + this.debug.nf.format(x / dims.parent.width * 100) + " % /  " + this.debug.nf.format(y / dims.parent.height * 100) + " %, dims: ", dims.parent);
        }
        point.style.left = (x - (size / 2)) + "px";
        point.style.top = (y - (size / 2)) + "px";
    }
    onViewerTouchMove(event) {
        if (this.options.disableEventHandling)
            return;
        const PDFViewerApplicationOptions = window.PDFViewerApplicationOptions;
        const PDFViewerApplication = window.PDFViewerApplication;
        const viewerContainer = document.getElementById('viewerContainer');
        const rect = viewerContainer.getBoundingClientRect();
        const vr = this.viewer.getBoundingClientRect();
        if (this.initialPinchDistance <= 0 || event.touches.length !== 2) {
            if (event.touches.length == 1 && this.state == "move") {
                const touch = event.touches[0];
                let pageX = touch.pageX - rect.left + viewerContainer.scrollLeft;
                let pageY = touch.pageY - rect.top + viewerContainer.scrollTop;
                if (this.debug.enabled)
                    this.debugPoint(pageX, pageY);
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
                        + ", viewer.w/h: " + this.debug.nf.format(vr.width) + " / " + this.debug.nf.format(vr.height));
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
        let dims = this.getDimensions(this.viewer, { pageX: pageX, pageY: pageY });
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
        if (this.debug.enabled)
            this.debugPoint(this.moveX - rect.left, this.moveY - rect.top);
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
                + ", moveX/Y: " + +this.debug.nf.format(this.moveX) + " / " + this.debug.nf.format(this.moveY)
                + ", rect.l/t: " + this.debug.nf.format(rect.left) + " / " + this.debug.nf.format(rect.top)
                + ", viewer.l/t: " + this.debug.nf.format(vr.left) + " / " + this.debug.nf.format(vr.top)
                // + ", viewerContainer.sl/st: " + this.debug.nf.format(viewerContainer.scrollLeft) + " / " + this.debug.nf.format(viewerContainer.scrollTop)
                + ", originX/Y: " + this.debug.nf.format(originX) + " / " + this.debug.nf.format(originY)
                + ", viewer.w/h: " + this.debug.nf.format(vr.width) + " / " + this.debug.nf.format(vr.height)
                + ", currentScale: " + this.debug.nf.format(prevScale) + " -> " + this.debug.nf.format(this.currentScale)
                + ", dims: ", dims);
        }
        this.viewer.style.transform = `scale(${this.currentScale})`;
        this.viewer.style.transformOrigin = `${originX}px ${originY}px`;
        // this.transformScale = this.currentScale;
        if (event.cancelable) {
            event.preventDefault();
        }
        event.stopPropagation();
    }
    onViewerTouchEnd(event) {
        if (this.options.disableEventHandling)
            return;
        if (this.debug.enabled)
            console.log("onViewerTouchEnd"
                + ", vts: " + this.getViewerTransformScale("onViewerTouchEnd")
                + ', state: ' + this.state
                + ", initialPinchDistance: " + this.initialPinchDistance);
        const PDFViewerApplication = window.PDFViewerApplication;
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
            if (this.debug.enabled)
                console.log("end.moveX/Y: " + this.moveX + " -> " + pageX + ", moveY: " + this.moveY + " -> " + pageY + ", tl: " + tl);
        }
        // this.currentScale = 1;
        let now = new Date().getTime();
        if (this.pointEnd.time) {
            let pe = this.pointEnd;
            let diff = now - pe.time;
            // console.log("pointEnd.diff: " + diff);
            if (pe.pageX == pageX && pe.pageY == pageY && diff < 300) {
                let PDFViewerApplication = window.PDFViewerApplication;
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
        };
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
        const container = document.getElementById('viewerContainer');
        const rect = container.getBoundingClientRect();
        const viewerRect = this.viewer.getBoundingClientRect();
        let dims = this.getDimensions(this.viewer);
        if (this.debug.enabled)
            this.debugPoint(pageX, pageY);
        if (this.debug.enabled) {
            console.log("TouchEnd: "
                + ", scale: " + this.debug.nf.format(currentScale) + " -> " + this.debug.nf.format(newScale) + ", cs: " + this.currentScale
                + ", pageX/Y: " + this.debug.nf.format(pageX) + " / " + this.debug.nf.format(pageY)
                + ", startX/Y: " + this.debug.nf.format(this.startX) + " / " + this.debug.nf.format(this.startY)
                // + ", diff: " + this.debug.nf.format(diffX) + " / " + this.debug.nf.format(diffY)
                // + ", diffs: " + this.debug.nf.format(diffXs) + " / " + this.debug.nf.format(diffYs)
                // + ", l/t: " + this.debug.nf.format(viewerRect.left) + " -> " +this.debug.nf.format(left) + " / " + this.debug.nf.format(viewerRect.top) + " -> " +this.debug.nf.format(top)
                + ", viewer.w/h: " + this.debug.nf.format(viewerRect.width) + " / " + this.debug.nf.format(viewerRect.height)
                + ", dims: ", dims);
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
    onViewerMouseDown(event) {
        if (this.options.disableEventHandling)
            return;
        let isInside = this.isInsideContainer([event]);
        if (!isInside)
            return;
        if (!this.options.moveEnabled)
            return;
        let dims = this.getDimensions(this.viewer, event);
        // this.zoomToPoint(event, event.pageX, event.pageY);
        if (this.debug.enabled) {
            this.debugPoint(dims.point.c.x, dims.point.c.y);
            this.debugPoint(dims.point.v.x, dims.point.v.x, true);
        }
        this.startX = dims.point.c.x;
        this.startY = dims.point.c.y;
        this.startLeft = parseFloat(getComputedStyle(this.viewer).left) || 0;
        this.startTop = parseFloat(getComputedStyle(this.viewer).top) || 0;
        this.state = "move";
        if (event.cancelable) {
            event.preventDefault();
        }
        event.stopPropagation();
    }
    onViewerMouseMove(event) {
        if (this.options.disableEventHandling)
            return;
        if (this.state != "move") {
            // console.log("mousemove: state!=move: " + this.state);
            return;
        }
        let dims = this.getDimensions(this.viewer, event);
        if (this.debug.enabled)
            this.debugPoint(dims.point.c.x, dims.point.c.y);
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
                + ", l/t: " + this.debug.nf.format(left) + " / " + this.debug.nf.format(top));
        }
        if (event.cancelable) {
            event.preventDefault();
        }
        event.stopPropagation();
    }
    onViewerMouseUp(event) {
        if (this.options.disableEventHandling)
            return;
        let isInside = this.isInsideContainer([event]);
        if (this.debug.enabled)
            console.log("mouseup: " + this.debug.nf.format(event.pageX) + " / " + this.debug.nf.format(event.pageY) + "; inside: " + isInside);
        // document.removeEventListener("mousemove", event);
        if (!isInside)
            return;
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
                let PDFViewerApplication = window.PDFViewerApplication;
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
        };
        // console.log("updateing pointEnd: ", this.pointEnd);
    }
    resetPinchZoomParams() {
        this.startX = this.startY = this.moveX = this.moveY = this.startLeft = this.startTop = this.initialPinchDistance = 0;
        this.currentScale = 1;
        this.state = "idle";
    }
    getBoxStyle(elem, name, style = window.getComputedStyle(elem)) {
        const suffix = name === 'border' ? 'Width' : '';
        return {
            left: parseFloat(style[`${name}Left${suffix}`]) || 0,
            right: parseFloat(style[`${name}Right${suffix}`]) || 0,
            top: parseFloat(style[`${name}Top${suffix}`]) || 0,
            bottom: parseFloat(style[`${name}Bottom${suffix}`]) || 0,
        };
    }
    getDimensions(elem, point) {
        const parent = elem.parentNode;
        const style = window.getComputedStyle(elem);
        const parentStyle = window.getComputedStyle(parent);
        const rectElem = elem.getBoundingClientRect();
        const rectParent = parent.getBoundingClientRect();
        const vts = this.getViewerTransformScale("getDimensions");
        const vto = this.getViewerTransformOrigin();
        let res = {
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
        if (vts == 1.0)
            res.scaled = res.rel;
        else {
            let sw = res.rel.width / vts;
            let sh = res.rel.height / vts;
            let wd = res.rel.width - sw; // 118
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
            };
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
        };
        return res;
    }
    //   return res;
    // }
    getDimDiff(start, end) {
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
        };
        let res = {};
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
    constrain(p) {
        const dims = this.getDimensions(this.viewer);
        let isScaled = dims.scaled.vts !== undefined && dims.scaled.vts != 1.0;
        let minX = p.left, maxX = p.left, minY = p.top, maxY = p.top;
        if (dims.elem.width <= dims.parent.width) {
            // inside
            minX = 0;
            maxX = (dims.parent.width - dims.elem.width);
        }
        else {
            // outside
            minX = -(dims.elem.width - dims.parent.width);
            maxX = 0;
        }
        if (dims.elem.height <= dims.parent.height) {
            // inside
            minY = 0;
            maxY = (dims.parent.height - dims.elem.height);
        }
        else {
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
        let cLeft = Math.max(Math.min(p.left, maxX), minX);
        let cTop = Math.max(Math.min(p.top, maxY), minY);
        // if (this.debug.enabled) console.log("constrain, left:  " + p.left + " -> " + cLeft + " ("+minX + "-"+maxX+")" + ", top: " + p.top + " -> " + cTop + " ("+minY + "-"+maxY+"), dims: ", dims);
        return { left: cLeft, top: cTop };
    }
    isInsideContainer(points) {
        const viewerContainer = document.getElementById('viewerContainer');
        const rect = viewerContainer.getBoundingClientRect();
        if (points === undefined || points.length == 0)
            return false;
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
            if (!inside)
                return false;
        }
        return true;
    }
    getViewerTransformScale(src) {
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
        let transformScale = parseFloat(tf.substring(tf.indexOf("(") + 1, tf.indexOf(isScale ? ")" : ",")));
        // if (this.debug.enabled) console.log("getViewerTransformScale, tf: " + tf + ", indexOf (: " + tf.indexOf("(") + ", transformScale: " + transformScale + ", src: " + src);
        return transformScale;
    }
    getViewerTransformOrigin() {
        let to = this.viewer.style.transformOrigin;
        if (to == undefined || to == "unset")
            return undefined;
        let parts = to.split(" ");
        if (parts.length != 2)
            return undefined;
        return { x: parseFloat(parts[0]), y: parseFloat(parts[1]) };
    }
    checkContraint() {
        const dims = this.getDimensions(this.viewer);
        let constrain = this.constrain({ left: dims.elem.left, top: dims.elem.top });
        return constrain.left != dims.elem.left && constrain.top != dims.elem.top;
    }
    updateViewerPosition(forceUpdate = false) {
        let viewerContainer = document.getElementById('viewerContainer');
        this.viewer = document.getElementById('viewer');
        const dims = this.getDimensions(this.viewer);
        let constrain = this.constrain({ left: dims.elem.left, top: dims.elem.top }); // ;
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
        let point = {
            left: undefined,
            top: undefined
        };
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
    setViewerScale(newScale, options = {}) {
        let vtsSource = getComputedStyle(this.viewer).transform;
        if (this.debug.enabled)
            console.log("setViewerScale, newScale: " + newScale + ", vtsSource: " + vtsSource);
        let origin = options.origin;
        // let resetTransform = options.resetTransform === undefined || options.resetTransform === true; 
        let vts = this.getViewerTransformScale("setViewerScale");
        let dims = this.getDimensions(this.viewer);
        // let dimsAfterTransformReset = dims; 
        let reset = { left: undefined, top: undefined };
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
        let PDFViewerApplication = window.PDFViewerApplication;
        let currentScale = PDFViewerApplication.pdfViewer.currentScale;
        if (origin == undefined) {
            origin = { x: dims.elem.width / 2, y: dims.elem.height / 2 };
        }
        let oxp = origin.x / dims.elem.width;
        let oyp = origin.y / dims.elem.height;
        if (this.debug.enabled) {
            console.log("setViewerScale, currentScale: " + this.debug.nf.format(currentScale) + " -> " + this.debug.nf.format(newScale) + ", vts: " + this.debug.nf.format(vts) + " (" + vtsSource + ")"
                + ", origin: " + this.debug.nf.format(origin.x) + " (" + this.debug.nf.format(oxp * 100) + ") / " + this.debug.nf.format(origin.y) + " (" + this.debug.nf.format(oyp * 100) + ")"
                + ", debug.x/Y: " + this.debug.nf.format(this.debug.x) + " / " + +this.debug.nf.format(this.debug.y)
                + ", isZooming: " + this.isZooming()
                + ", dims: ", dims);
        }
        PDFViewerApplication.pdfViewer._setScale(newScale, true);
        let dimsAfter = this.getDimensions(this.viewer);
        let dimDiff = this.getDimDiff(dims, dimsAfter);
        let dimsCorr = {
            left: parseFloat(getComputedStyle(this.viewer).left) || 0,
            top: parseFloat(getComputedStyle(this.viewer).top) || 0,
        };
        dimsCorr.leftDiff = -(dimDiff.elem.width * oxp);
        dimsCorr.topDiff = -(dimDiff.elem.height * oyp);
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
                + ", dimsAfter: ", dimsAfter, ", dimDiff: ", dimDiff, ", dimsCorr: ", dimsCorr);
        }
    }
    isZooming() {
        let PDFViewerApplication = window.PDFViewerApplication;
        const PDFViewerApplicationOptions = window.PDFViewerApplicationOptions;
        let currentScale = PDFViewerApplication.pdfViewer.currentScale;
        let czf = Math.round(currentScale * 10000);
        let minZoom = Math.round(Number(PDFViewerApplicationOptions.get('minZoom')) * 10000);
        //  console.log("isZooming, czf: "  + czf + ", minZoom: " + minZoom + "; isZ: " + (czf > minZoom));
        return czf > minZoom;
    }
    onViewerWheel(event) {
        if (this.options.disableEventHandling)
            return;
        if (this.debug.enabled)
            console.log("onWheel: event: ", event);
        setTimeout(() => {
            this.updateViewerPosition();
        }, 2);
    }
    ;
    initializeRelativeCoords() {
        let viewerContainer = document.getElementById('viewerContainer');
        this.viewer = document.getElementById('viewer');
        this.component.root.nativeElement.classList.add("relative-coords");
        let stfItemHack = document.createElement("div");
        stfItemHack.classList.add("stf__item");
        viewerContainer.appendChild(stfItemHack);
        if (this.debug.enabled)
            console.log("initializeRelativeCoords: isMobile: " + this.isMobile());
        let onContainerScoll = (event) => {
            //console.log("onContainerScoll: l/t: " + viewerContainer.scrollLeft + " / " + viewerContainer.scrollTop + ", event: " , event);
            if (viewerContainer.scrollLeft != 0 || viewerContainer.scrollTop != 0)
                viewerContainer.scroll({ left: 0, top: 0 });
        };
        viewerContainer.addEventListener('scroll', onContainerScoll);
        this.component.pagesLoaded.subscribe(async (event) => {
            if (this.debug.enabled)
                console.log("initializeRelativeCoords: scrollTop: ", viewerContainer.scrollTop);
            setTimeout(() => {
                // console.log("pageChange: pages: ", this.getCurrentPagesInView())
                this.updateViewerPosition(true);
            }, 10);
        });
        this.component.pageChange.subscribe(async (event) => {
            if (this.debug.enabled)
                console.log("pageChange: event: ", event, ", dims: ", this.getDimensions(this.viewer));
            // console.log("pageChange: pages: ", this.getCurrentPagesInView())
            setTimeout(() => {
                // console.log("pageChange: pages: ", this.getCurrentPagesInView())
                this.updateViewerPosition(true);
            }, 10);
        });
        // this.component.zoomChange.subscribe(async (event: any) => {
        //   console.log("zoomChange: event: ", event);
        // });
        this.component.currentZoomFactor.subscribe(async (event) => {
            if (this.debug.enabled)
                console.log("currentZoomFactor: event: ", event);
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
        }
        else {
            this._zone.runOutsideAngular(() => {
                document.addEventListener('touchstart', this.boundOnViewerTouchStart);
                document.addEventListener('touchmove', this.boundOnViewerTouchMove, { passive: false });
                document.addEventListener('touchend', this.boundOnViewerTouchEnd);
            });
        }
        if (this.debug.enabled) {
            let onKeyup = (event) => {
                console.log("onKeyup: event.key: " + event.key);
                let dims = this.getDimensions(this.viewer);
                const PDFViewerApplication = window.PDFViewerApplication;
                if (event.key == "q") {
                    this.viewer.style.transform = `none`;
                    this.viewer.style.transformOrigin = `unset`;
                    this.currentScale = 1.0;
                    let dimsAfter = this.getDimensions(this.viewer);
                    console.log("dimsAfter: ", dimsAfter.scaled);
                    console.log("dimsDiff: ", this.getDimDiff(dims, dimsAfter).scaled);
                }
                else if (event.key == "w") {
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
                }
                else if (event.key == "e") {
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
                }
                else if (event.key == "s") {
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
                    if (currentScale != prevScale)
                        this.setViewerScale(prevScale);
                    originX = this.debug.x || dims.parent.width / 2;
                    originY = this.debug.y || dims.parent.height / 2;
                    let dimsAfter = this.getDimensions(this.viewer);
                    originX -= dimsAfter.elem.left - dimsAfter.parent.left;
                    originY -= dimsAfter.elem.top - dimsAfter.parent.top;
                    console.log("originX/Y: " + originX + " / " + originY + ", scale: " + currentScale + " -> " + prevScale + ", t.cs: " + this.currentScale + "; dimsAfter: ", dimsAfter);
                    console.log("originX/Y (%): " + (originX / dimsAfter.elem.width) + " / " + (originY / dimsAfter.elem.height));
                    this.viewer.style.transform = `scale(${this.currentScale})`;
                    this.viewer.style.transformOrigin = `${originX}px ${originY}px`;
                }
                else if (event.key == "t") {
                    // bare PDF.js-zoom
                    let originX = this.debug.x || dims.parent.width / 2;
                    let originY = this.debug.y || dims.parent.height / 2;
                    originX -= dims.elem.left - dims.parent.left;
                    originY -= dims.elem.top - dims.parent.top;
                    if (this.currentScale == 1.0)
                        this.currentScale = 1.3;
                    let currentScale = PDFViewerApplication.pdfViewer.currentScale;
                    let newScale = currentScale * this.currentScale;
                    this.setViewerScale(newScale, { origin: { x: originX, y: originY } });
                }
                else if (event.key == "y") {
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
                }
                else if (event.key == "u") {
                    this.updateViewerPosition();
                }
                else if (event.key == "i") {
                    let corrLeft = 200;
                    console.log("beforeCorr: ", this.getDimensions(this.viewer).elem);
                    console.log("this.viewer.style: ", this.viewer.style);
                    console.log("this.viewer.style.left: " + this.viewer.style.left + " -> " + corrLeft);
                    this.viewer.style.left = corrLeft + "px";
                    console.log("afterCorr: ", this.getDimensions(this.viewer).elem);
                    console.log("this.viewer.style: ", this.viewer.style);
                }
                else if (event.key == "o") {
                    let originX = this.debug.x || dims.parent.width / 2;
                    let originY = this.debug.y || dims.parent.height / 2;
                    originX -= dims.elem.left - dims.parent.left;
                    originY -= dims.elem.top - dims.parent.top;
                    console.log("originX/Y: " + originX + " / " + originY + ", scale: " + this.currentScale);
                    this.viewer.style.transform = `scale(${this.currentScale})`;
                    this.viewer.style.transformOrigin = `${originX}px ${originY}px`;
                }
                else if (event.key == "p") {
                    console.log("dims: ", dims);
                    // let originX = this.debug.x || dims.parent.width / 2; 
                    // let originY = this.debug.y || dims.parent.height / 2; 
                    console.log("getViewerTransformScale: ", this.getViewerTransformScale("key == p"));
                    this.viewer.style.transform = `none`;
                    this.viewer.style.transformOrigin = `unset`;
                    let dimsAfter = this.getDimensions(this.viewer);
                    console.log("dimsAfter: ", dimsAfter);
                    console.log("dimsDiff: ", this.getDimDiff(dims, dimsAfter));
                }
                else if (event.key == "f") {
                }
                else if (event.key == "d") {
                    console.log("dims: ", this.getDimensions(this.viewer));
                }
                else if (event.key == "z") {
                }
                else if (event.key == "x") {
                }
            };
            window.addEventListener("keyup", onKeyup);
        }
    }
    destroyRelativeCoords() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsYXRpdmUtY29vcmRzLXN1cHBvcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3JlbGF0aXZlLWNvb3Jkcy1zdXBwb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLE1BQU0sT0FBTyxxQkFBcUI7SUEyQ2hDLFlBQW9CLEtBQWEsRUFBVSxTQUF3QyxFQUFFLE9BQVk7UUFBN0UsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQStCO1FBekMzRSxZQUFPLEdBQVE7WUFDckIsS0FBSyxFQUFFLEtBQUs7WUFDWixXQUFXLEVBQUUsSUFBSTtZQUNqQixvQkFBb0IsRUFBRSxLQUFLO1NBQzVCLENBQUM7UUFHTSxXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNYLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFFYixVQUFLLEdBQTZCLE1BQU0sQ0FBQztRQUN6Qyx5QkFBb0IsR0FBRyxDQUFDLENBQUM7UUFDekIsaUJBQVksR0FBRyxHQUFHLENBQUM7UUFFbkIsYUFBUSxHQUFRLEVBRXZCLENBQUE7UUFhTyxVQUFLLEdBQUc7WUFDZCxPQUFPLEVBQUUsS0FBSztZQUNkLEVBQUUsRUFBRSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxxQkFBcUIsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNsRixDQUFDLEVBQUUsQ0FBQztZQUNKLENBQUMsRUFBRSxDQUFDO1NBQ0wsQ0FBQTtRQUlDLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxD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O2FBQ1AsQ0FBQTtTQUNGO1FBSUQsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2xFLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUVsRSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ25FLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFFakUsSUFBSSxHQUFHLEdBQUcsRUFBRSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDOUIsSUFBSSxHQUFHLEdBQUcsRUFBRSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDL0IsSUFBSSxHQUFHLEdBQUcsRUFBRSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsRUFBRSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFFakMsR0FBRyxDQUFDLEtBQUssR0FBRztZQUNWLEdBQUcsRUFBRSxLQUFLO1lBQ1YsQ0FBQyxFQUFFO2dCQUNELENBQUMsRUFBRSxFQUFFO2dCQUNMLENBQUMsRUFBRSxFQUFFO2dCQUNMLEVBQUUsRUFBRSxHQUFHO2dCQUNQLEVBQUUsRUFBRSxHQUFHO2FBQ1I7WUFDRCxDQUFDLEVBQUU7Z0JBQ0QsQ0FBQyxF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LElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBRTdELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDeEMsU0FBUztZQUNULElBQUksR0FBRyxDQUFDLENBQUM7WUFDVCxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQzdDO2FBQU07WUFDTCxVQUFVO1lBQ1YsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlDLElBQUksR0FBRyxDQUFDLENBQUM7U0FFVjtRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDMUMsU0FBUztZQUNULElBQUksR0FBRyxDQUFDLENBQUM7WUFDVCxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBRWhEO2FBQU07WUFDTCxVQUFVO1lBQ1YsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hELElBQUksR0FBRyxDQUFDLENBQUM7U0FFVjtRQUVELElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDMUIsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDL0MsSUFBSSxFQUFFLEdBQUcs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QUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO1NBQzlEO1FBRUQsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNyQyxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRXRDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxTQUFTLEdBQUcsR0FBRztrQkFDeEwsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRztrQkFDL0ssZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFFLElBQUksQ0FBQyxL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QUMsR0FBRyxJQUFJLEdBQUcsRUFBRTtpQkFFNUI7cUJBQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRTtpQkFFNUI7WUFDSCxDQUFDLENBQUM7WUFHRixNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzNDO0lBSUgsQ0FBQztJQUVNLHFCQUFxQjtRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ3BCLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDdkUsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUN2RSxRQUFRLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBRW5FLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFFN0QsT0FBTztTQUNSO1FBQ0QsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUN6RSxRQUFRLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3ZFLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDdkUsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBhZ2VzTG9hZGVkRXZlbnQgfSBmcm9tICcuLi9wdWJsaWNfYXBpJztcclxuaW1wb3J0IHsgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQgfSBmcm9tICcuL25neC1leHRlbmRlZC1wZGYtdmlld2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMvcGRmLXZpZXdlci1hcHBsaWNhdGlvbi1vcHRpb25zJztcclxuXHJcbmV4cG9ydCBjbGFzcyBSZWxhdGl2ZUNvb3Jkc1N1cHBvcnQge1xyXG5cclxuICBwcml2YXRlIG9wdGlvbnM6IGFueSA9IHtcclxuICAgIGRlYnVnOiBmYWxzZSxcclxuICAgIG1vdmVFbmFibGVkOiB0cnVlLFxyXG4gICAgZGlzYWJsZUV2ZW50SGFuZGxpbmc6IGZhbHNlLFxyXG4gIH07XHJcbiAgcHJpdmF0ZSB2aWV3ZXI6IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBzdGFydFggPSAwO1xyXG4gIHByaXZhdGUgc3RhcnRZID0gMDtcclxuICBwcml2YXRlIG1vdmVYID0gMDtcclxuICBwcml2YXRlIG1vdmVZID0gMDtcclxuICBwcml2YXRlIHN0YXJ0TGVmdCA9IDA7XHJcbiAgcHJpdmF0ZSBzdGFydFRvcCA9IDA7XHJcblxyXG4gIHByaXZhdGUgc3RhdGU6IFwiaWRsZVwiIHwgXCJtb3ZlXCIgfCBcInpvb21cIiA9IFwiaWRsZVwiO1xyXG4gIHByaXZhdGUgaW5pdGlhbFBpbmNoRGlzdGFuY2UgPSAwO1xyXG4gIHByaXZhdGUgY3VycmVudFNjYWxlID0gMS4wO1xyXG5cclxuICBwcml2YXRlIHBvaW50RW5kOiBhbnkgPSB7XHJcblxyXG4gIH1cclxuXHJcbiAgLy8gcHJpdmF0ZSB0cmFuc2Zvcm1TY2FsZSA9IC0xO1xyXG5cclxuICBwcml2YXRlIGJvdW5kT25WaWV3ZXJUb3VjaFN0YXJ0OiBhbnk7XHJcbiAgcHJpdmF0ZSBib3VuZE9uVmlld2VyVG91Y2hNb3ZlOiBhbnk7XHJcbiAgcHJpdmF0ZSBib3VuZE9uVmlld2VyVG91Y2hFbmQ6IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBib3VuZE9uVmlld2VyTW91c2VEb3duOiBhbnk7XHJcbiAgcHJpdmF0ZSBib3VuZE9uVmlld2VyTW91c2VNb3ZlOiBhbnk7XHJcbiAgcHJpdmF0ZSBib3VuZE9uVmlld2VyTW91c2VVcDogYW55O1xyXG4gIHByaXZhdGUgYm91bmRPblZpZXdlcldoZWVsOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgZGVidWcgPSB7XHJcbiAgICBlbmFibGVkOiBmYWxzZSxcclxuICAgIG5mOiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywgeyBzdHlsZTogJ2RlY2ltYWwnLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSksXHJcbiAgICB4OiAwLFxyXG4gICAgeTogMFxyXG4gIH1cclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3pvbmU6IE5nWm9uZSwgcHJpdmF0ZSBjb21wb25lbnQ6IE5neEV4dGVuZGVkUGRmVmlld2VyQ29tcG9uZW50LCBvcHRpb25zOiBhbnkpIHtcclxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgT2JqZWN0LmtleXModGhpcy5vcHRpb25zKS5mb3JFYWNoKGF0dHJpYnV0ID0+IHtcclxuICAgICAgaWYgKG9wdGlvbnNbYXR0cmlidXRdID09PSB1bmRlZmluZWQpIG9wdGlvbnNbYXR0cmlidXRdID0gdGhpcy5vcHRpb25zW2F0dHJpYnV0XTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuXHJcblxyXG4gICAgdGhpcy5kZWJ1Zy5lbmFibGVkID0gdGhpcy5vcHRpb25zLmRlYnVnO1xyXG4gICAgaWYgKHRoaXMuZGVidWcuZW5hYmxlZCkgY29uc29sZS5sb2coXCJSZWxhdGl2ZUNvb3Jkc1N1cHBvcnQuY29uc3RydWN0b3JcIik7XHJcbiAgICB0aGlzLmJvdW5kT25WaWV3ZXJUb3VjaFN0YXJ0ID0gdGhpcy5vblZpZXdlclRvdWNoU3RhcnQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuYm91bmRPblZpZXdlclRvdWNoTW92ZSA9IHRoaXMub25WaWV3ZXJUb3VjaE1vdmUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuYm91bmRPblZpZXdlclRvdWNoRW5kID0gdGhpcy5vblZpZXdlclRvdWNoRW5kLmJpbmQodGhpcyk7XHJcblxyXG4gICAgdGhpcy5ib3VuZE9uVmlld2VyTW91c2VEb3duID0gdGhpcy5vblZpZXdlck1vdXNlRG93bi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5ib3VuZE9uVmlld2VyTW91c2VNb3ZlID0gdGhpcy5vblZpZXdlck1vdXNlTW92ZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5ib3VuZE9uVmlld2VyTW91c2VVcCA9IHRoaXMub25WaWV3ZXJNb3VzZVVwLmJpbmQodGhpcyk7XHJcblxyXG4gICAgdGhpcy5ib3VuZE9uVmlld2VyV2hlZWwgPSB0aGlzLm9uVmlld2VyV2hlZWwuYmluZCh0aGlzKTtcclxuXHJcbiAgICB0aGlzLmluaXRpYWxpemVSZWxhdGl2ZUNvb3JkcygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc01vYmlsZSgpIHtcclxuXHJcbiAgICByZXR1cm4gKG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDApIHx8ICgoPGFueT5uYXZpZ2F0b3IpLm1zTWF4VG91Y2hQb2ludHMgPiAwKTsgIC8vICgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHx8IFxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblZpZXdlclRvdWNoU3RhcnQoZXZlbnQ6IFRvdWNoRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWJsZUV2ZW50SGFuZGxpbmcpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmluaXRpYWxQaW5jaERpc3RhbmNlID0gMDtcclxuXHJcbiAgICBpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdlckNvbnRhaW5lcicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICBjb25zdCByZWN0ID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICBpZiAoZXZlbnQudG91Y2hlc1swXS5wYWdlWCA+PSByZWN0LmxlZnQgJiYgZXZlbnQudG91Y2hlc1swXS5wYWdlWCA8PSByZWN0LnJpZ2h0KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRvdWNoZXNbMF0ucGFnZVkgPj0gKHJlY3QudG9wICsgd2luZG93LnNjcm9sbFkpICYmIGV2ZW50LnRvdWNoZXNbMF0ucGFnZVkgPD0gKHJlY3QuYm90dG9tICsgd2luZG93LnNjcm9sbFkpKSB7XHJcbiAgICAgICAgICBpZiAoZXZlbnQudG91Y2hlc1sxXS5wYWdlWCA+PSByZWN0LmxlZnQgJiYgZXZlbnQudG91Y2hlc1sxXS5wYWdlWCA8PSByZWN0LnJpZ2h0KSB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC50b3VjaGVzWzFdLnBhZ2VZID49IChyZWN0LnRvcCArIHdpbmRvdy5zY3JvbGxZKSAmJiBldmVudC50b3VjaGVzWzFdLnBhZ2VZIDw9IChyZWN0LmJvdHRvbSArIHdpbmRvdy5zY3JvbGxZKSkge1xyXG4gICAgICAgICAgICAgIHRoaXMuc3RhcnRYID0gKGV2ZW50LnRvdWNoZXNbMF0ucGFnZVggKyBldmVudC50b3VjaGVzWzFdLnBhZ2VYKSAvIDI7XHJcbiAgICAgICAgICAgICAgdGhpcy5zdGFydFkgPSAoZXZlbnQudG91Y2hlc1swXS5wYWdlWSArIGV2ZW50LnRvdWNoZXNbMV0ucGFnZVkpIC8gMjtcclxuICAgICAgICAgICAgICB0aGlzLmluaXRpYWxQaW5jaERpc3RhbmNlID0gTWF0aC5oeXBvdChldmVudC50b3VjaGVzWzFdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1swXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sxXS5wYWdlWSAtIGV2ZW50LnRvdWNoZXNbMF0ucGFnZVkpO1xyXG5cclxuICAgICAgICAgICAgICB0aGlzLnN0YXJ0TGVmdCA9IHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLnZpZXdlcikubGVmdCkgfHwgMDtcclxuICAgICAgICAgICAgICB0aGlzLnN0YXJ0VG9wID0gcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKHRoaXMudmlld2VyKS50b3ApIHx8IDA7XHJcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFwiem9vbVwiO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoZXZlbnQuY2FuY2VsYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgbGV0IHRvdWNoID0gZXZlbnQudG91Y2hlc1swXVxyXG4gICAgICBpZiAodGhpcy5vcHRpb25zLm1vdmVFbmFibGVkICYmIHRoaXMuaXNJbnNpZGVDb250YWluZXIoW3RvdWNoXSkgJiYgdGhpcy5zdGF0ZSA9PSBcImlkbGVcIikge1xyXG4gICAgICAgIGNvbnN0IHZpZXdlckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3ZXJDb250YWluZXInKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICBjb25zdCByZWN0ID0gdmlld2VyQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgICBsZXQgcGFnZVggPSB0b3VjaC5wYWdlWCAtIHJlY3QubGVmdDtcclxuICAgICAgICBsZXQgcGFnZVkgPSB0b3VjaC5wYWdlWSAtIHJlY3QudG9wO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5kZWJ1Zy5lbmFibGVkKSB0aGlzLmRlYnVnUG9pbnQocGFnZVgsIHBhZ2VZKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGFydFggPSBwYWdlWDtcclxuICAgICAgICB0aGlzLnN0YXJ0WSA9IHBhZ2VZO1xyXG5cclxuICAgICAgICBsZXQgbGVmdCA9IHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLnZpZXdlcikubGVmdCkgfHwgMDtcclxuICAgICAgICBsZXQgdG9wID0gcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKHRoaXMudmlld2VyKS50b3ApIHx8IDA7XHJcblxyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGVidWcuZW5hYmxlZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJUb3VjaFN0YXJ0OiBcIlxyXG4gICAgICAgICAgICArIHRoaXMuZGVidWcubmYuZm9ybWF0KHBhZ2VYKSArIFwiIC8gXCIgKyB0aGlzLmRlYnVnLm5mLmZvcm1hdChwYWdlWSlcclxuICAgICAgICAgICAgKyBcIiwgc3RhcnRYL1k6IFwiICsgdGhpcy5kZWJ1Zy5uZi5mb3JtYXQodGhpcy5zdGFydFgpICsgXCIgLyBcIiArIHRoaXMuZGVidWcubmYuZm9ybWF0KHRoaXMuc3RhcnRZKVxyXG4gICAgICAgICAgICArIFwiLCBzdGFydExlZnQvVG9wOiBcIiArIHRoaXMuZGVidWcubmYuZm9ybWF0KHRoaXMuc3RhcnRMZWZ0KSArIFwiIC0+IFwiICsgdGhpcy5kZWJ1Zy5uZi5mb3JtYXQobGVmdCkgKyBcIiAvIFwiICsgdGhpcy5kZWJ1Zy5uZi5mb3JtYXQodGhpcy5zdGFydFRvcCkgKyBcIiAtPiBcIiArIHRoaXMuZGVidWcubmYuZm9ybWF0KHRvcClcclxuICAgICAgICAgICAgKyBcIiwgc3RhdGU6IFwiICsgdGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgXCIsIGRpbXM6IFwiLCB0aGlzLmdldERpbWVuc2lvbnModGhpcy52aWV3ZXIpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zdGFydExlZnQgPSBsZWZ0O1xyXG4gICAgICAgIHRoaXMuc3RhcnRUb3AgPSB0b3A7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFwibW92ZVwiO1xyXG5cclxuICAgICAgICBpZiAoZXZlbnQuY2FuY2VsYWJsZSkge1xyXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVG91Y2hTdGFydDogaXNJbnNpZGU6IFwiICsgIHRoaXMuaXNJbnNpZGVDb250YWluZXIoWyB0b3VjaCBdKSArIFwiLCBzdGF0ZTogXCIgKyB0aGlzLnN0YXRlKTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuICAvLyBwcml2YXRlIGdldEN1cnJlbnRQYWdlc0luVmlldygpOm51bWJlcltdIHtcclxuICAvLyAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBhbnkgPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcblxyXG4gIC8vICAgbGV0IHBhZ2UgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wYWdlO1xyXG4gIC8vICAgbGV0IHBhZ2VDb3VudCA9IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5fcGFnZXMubGVuZ3RoO1xyXG5cclxuICAvLyAgIGxldCBzcHJlYWRNb2RlID0gUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnNwcmVhZE1vZGUgYXMgU3ByZWFkTW9kZVR5cGU7XHJcblxyXG4gIC8vICAgbGV0IHBhZ2VzID0gWyBwYWdlIF07XHJcblxyXG4gIC8vICAgaWYgKHBhZ2UgPT0gMSkgcmV0dXJuIHBhZ2VzO1xyXG5cclxuICAvLyAgIGxldCBpc1NwcmVhZCA9IHNwcmVhZE1vZGUgPT0gU3ByZWFkTW9kZVR5cGUuRVZFTiB8fCBTcHJlYWRNb2RlVHlwZS5PREQ7XHJcbiAgLy8gICAvLyBjb25zb2xlLmxvZyhcImlzU3ByZWFkOiBcIiArIGlzU3ByZWFkKyBcIiwgcGFnZXM6IFwiICsgcGFnZXMuam9pbihcIixcIikpO1xyXG4gIC8vICAgaWYgKCFpc1NwcmVhZCkgcmV0dXJuIHBhZ2VzO1xyXG5cclxuICAvLyAgIGlmIChwYWdlICUgMiA9PSAxKSB7XHJcbiAgLy8gICAgIHBhZ2UtLTtcclxuICAvLyAgICAgcGFnZXMgPSBbIHBhZ2UgXTtcclxuICAvLyAgIH1cclxuICAvLyAgIC8vIGlmIChwYWdlICUgMiA9PSAxKVxyXG4gIC8vICAgbGV0IG5leHRQYWdlID0gcGFnZSArIDE7XHJcbiAgLy8gICBpZiAobmV4dFBhZ2UgPD0gcGFnZUNvdW50KSBwYWdlcy5wdXNoKG5leHRQYWdlKTtcclxuICAvLyAgIC8vIGNvbnNvbGUubG9nKFwibmV4dFBhZ2U6IFwiICsgbmV4dFBhZ2UgKyBcIiwgcGFnZUNvdW50OiBcIiArIHBhZ2VDb3VudCsgXCIsIHBhZ2VzOiBcIiArIHBhZ2VzLmpvaW4oXCIsXCIpKTtcclxuICAvLyAgIHJldHVybiAgcGFnZXM7XHJcbiAgLy8gfVxyXG5cclxuICBwcml2YXRlIGRlYnVnUG9pbnQoeDogbnVtYmVyLCB5OiBudW1iZXIsIHZpZXdlcjogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5kZWJ1Z1BvaW50KSByZXR1cm47XHJcbiAgICBjb25zdCB2aWV3ZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld2VyQ29udGFpbmVyJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBsZXQgaWQgPSAnZGVidWctcG9pbnQnICsgKHZpZXdlciA/IFwiLXZpZXdlclwiIDogXCJcIik7XHJcblxyXG4gICAgbGV0IHBvaW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgbGV0IHNpemUgPSB2aWV3ZXIgPyAxMCA6IDU7XHJcbiAgICBpZiAoIXBvaW50KSB7XHJcbiAgICAgIHBvaW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgcG9pbnQuaWQgPSBpZDtcclxuICAgICAgcG9pbnQuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgIHBvaW50LnN0eWxlLndpZHRoID0gc2l6ZSArIFwicHhcIjtcclxuICAgICAgcG9pbnQuc3R5bGUuaGVpZ2h0ID0gc2l6ZSArIFwicHhcIjtcclxuICAgICAgcG9pbnQuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMDBweFwiO1xyXG5cclxuICAgICAgcG9pbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdmlld2VyID8gXCJyZWRcIiA6IFwiYmx1ZVwiO1xyXG5cclxuICAgICAgaWYgKCF2aWV3ZXIpIHZpZXdlckNvbnRhaW5lci5hcHBlbmRDaGlsZChwb2ludCk7XHJcbiAgICAgIGVsc2UgdGhpcy52aWV3ZXIuYXBwZW5kQ2hpbGQocG9pbnQpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIGxldCBkaW1zID0gdGhpcy5nZXREaW1lbnNpb25zKHRoaXMudmlld2VyKTtcclxuXHJcbiAgICBpZiAodmlld2VyKSB7XHJcbiAgICAgIC8vIHRoaXMuZGVidWcueHYgPSB4O1xyXG4gICAgICAvLyB0aGlzLmRlYnVnLnl2ID0geTtcclxuXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZGVidWdQb2ludC52aWV3ZXI6IFwiICsgdGhpcy5kZWJ1Zy5uZi5mb3JtYXQoeCkgKyBcIiAvIFwiICsgdGhpcy5kZWJ1Zy5uZi5mb3JtYXQoeSkgKyBcIiwgfCBcIiArIHRoaXMuZGVidWcubmYuZm9ybWF0KHggLyBkaW1zLmVsZW0ud2lkdGggKiAxMDApICsgXCIgJSAvIFwiICsgdGhpcy5kZWJ1Zy5uZi5mb3JtYXQoeSAvIGRpbXMuZWxlbS5oZWlnaHQgKiAxMDApICsgXCIgJSwgZGltczogXCIsIGRpbXMuZWxlbSk7XHJcblxyXG5cclxuICAgICAgLy8gbGV0IHZ0cyA9IHRoaXMuZ2V0Vmlld2VyVHJhbnNmb3JtU2NhbGUoKTtcclxuICAgICAgLy8gaWYodnRzICE9IDEuMCkge1xyXG4gICAgICAvLyAgIHggLz0gdnRzO1xyXG4gICAgICAvLyAgIHkgLz0gdnRzO1xyXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKFwiZGVidWdQb2ludC52aWV3ZXI6IFwiICsgdGhpcy5kZWJ1Zy5uZi5mb3JtYXQoeCkgKyBcIiAvIFwiICsgdGhpcy5kZWJ1Zy5uZi5mb3JtYXQoeSkpO1xyXG4gICAgICAvLyB9XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIHRoaXMuZGVidWcueCA9IHg7XHJcbiAgICAgIHRoaXMuZGVidWcueSA9IHk7XHJcblxyXG5cclxuICAgICAgLy8gY29uc29sZS5sb2coXCJkZWJ1Z1BvaW50LmNvbnQ6IFwiICsgdGhpcy5kZWJ1Zy5uZi5mb3JtYXQoeCkgKyBcIiAvIFwiICsgdGhpcy5kZWJ1Zy5uZi5mb3JtYXQoeSkgKyBcIiB8IFwiICsgdGhpcy5kZWJ1Zy5uZi5mb3JtYXQoeCAvIGRpbXMucGFyZW50LndpZHRoICogMTAwKSArIFwiICUgLyAgXCIgKyB0aGlzLmRlYnVnLm5mLmZvcm1hdCh5IC8gZGltcy5wYXJlbnQuaGVpZ2h0ICogMTAwKSArIFwiICUsIGRpbXM6IFwiLCBkaW1zLnBhcmVudCk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwb2ludC5zdHlsZS5sZWZ0ID0gKHggLSAoc2l6ZSAvIDIpKSArIFwicHhcIjtcclxuICAgIHBvaW50LnN0eWxlLnRvcCA9ICh5IC0gKHNpemUgLyAyKSkgKyBcInB4XCI7XHJcblxyXG5cclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25WaWV3ZXJUb3VjaE1vdmUoZXZlbnQ6IFRvdWNoRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWJsZUV2ZW50SGFuZGxpbmcpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM6IElQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMgPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IGFueSA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuXHJcbiAgICBjb25zdCB2aWV3ZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld2VyQ29udGFpbmVyJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBjb25zdCByZWN0ID0gdmlld2VyQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgdnIgPSB0aGlzLnZpZXdlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICBpZiAodGhpcy5pbml0aWFsUGluY2hEaXN0YW5jZSA8PSAwIHx8IGV2ZW50LnRvdWNoZXMubGVuZ3RoICE9PSAyKSB7XHJcblxyXG5cclxuICAgICAgaWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09IDEgJiYgdGhpcy5zdGF0ZSA9PSBcIm1vdmVcIikge1xyXG4gICAgICAgIGNvbnN0IHRvdWNoID0gZXZlbnQudG91Y2hlc1swXTtcclxuXHJcblxyXG4gICAgICAgIGxldCBwYWdlWCA9IHRvdWNoLnBhZ2VYIC0gcmVjdC5sZWZ0ICsgdmlld2VyQ29udGFpbmVyLnNjcm9sbExlZnQ7XHJcbiAgICAgICAgbGV0IHBhZ2VZID0gdG91Y2gucGFnZVkgLSByZWN0LnRvcCArIHZpZXdlckNvbnRhaW5lci5zY3JvbGxUb3A7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRlYnVnLmVuYWJsZWQpIHRoaXMuZGVidWdQb2ludChwYWdlWCwgcGFnZVkpO1xyXG5cclxuICAgICAgICBsZXQgZGlmZlggPSBwYWdlWCAtIHRoaXMuc3RhcnRYO1xyXG4gICAgICAgIGxldCBkaWZmWSA9IHBhZ2VZIC0gdGhpcy5zdGFydFk7XHJcblxyXG4gICAgICAgIGxldCBsZWZ0ID0gdGhpcy5zdGFydExlZnQgKyBkaWZmWDtcclxuICAgICAgICBsZXQgdG9wID0gdGhpcy5zdGFydFRvcCArIGRpZmZZO1xyXG5cclxuICAgICAgICBsZXQgY29uc3RyYWluID0gdGhpcy5jb25zdHJhaW4oeyBsZWZ0OiBsZWZ0LCB0b3A6IHRvcCB9KTtcclxuICAgICAgICBsZWZ0ID0gY29uc3RyYWluLmxlZnQ7XHJcbiAgICAgICAgdG9wID0gY29uc3RyYWluLnRvcDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGVidWcuZW5hYmxlZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJUb3VjaE1vdmU6IFwiXHJcbiAgICAgICAgICAgICsgdGhpcy5kZWJ1Zy5uZi5mb3JtYXQocGFnZVgpICsgXCIgLyBcIiArIHRoaXMuZGVidWcubmYuZm9ybWF0KHBhZ2VZKVxyXG4gICAgICAgICAgICArIFwiLCBzdGFydFgvWTogXCIgKyB0aGlzLmRlYnVnLm5mLmZvcm1hdCh0aGlzLnN0YXJ0WCkgKyBcIiAvIFwiICsgdGhpcy5kZWJ1Zy5uZi5mb3JtYXQodGhpcy5zdGFydFkpXHJcbiAgICAgICAgICAgICsgXCIsIGRpZmY6IFwiICsgdGhpcy5kZWJ1Zy5uZi5mb3JtYXQoZGlmZlgpICsgXCIgLyBcIiArIHRoaXMuZGVidWcubmYuZm9ybWF0KGRpZmZZKVxyXG4gICAgICAgICAgICArIFwiLCBsL3Q6IFwiICsgdGhpcy5kZWJ1Zy5uZi5mb3JtYXQobGVmdCkgKyBcIiAvIFwiICsgdGhpcy5kZWJ1Zy5uZi5mb3JtYXQodG9wKVxyXG4gICAgICAgICAgICArIFwiLCB2aWV3ZXIudy9oOiBcIiArIHRoaXMuZGVidWcubmYuZm9ybWF0KHZyLndpZHRoKSArIFwiIC8gXCIgKyB0aGlzLmRlYnVnLm5mLmZvcm1hdCh2ci5oZWlnaHQpXHJcblxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudmlld2VyLnN0eWxlLmxlZnQgPSBsZWZ0ICsgXCJweFwiO1xyXG4gICAgICAgIHRoaXMudmlld2VyLnN0eWxlLnRvcCA9IHRvcCArIFwicHhcIjtcclxuXHJcbiAgICAgICAgaWYgKGV2ZW50LmNhbmNlbGFibGUpIHtcclxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGluY2hEaXN0YW5jZSA9IE1hdGguaHlwb3QoZXZlbnQudG91Y2hlc1sxXS5wYWdlWCAtIGV2ZW50LnRvdWNoZXNbMF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbMV0ucGFnZVkgLSBldmVudC50b3VjaGVzWzBdLnBhZ2VZKTtcclxuICAgIC8vIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3ZXJDb250YWluZXInKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIC8vIGNvbnN0IGNvbnRhaW5lclJlY3QgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgbGV0IHBhZ2VYID0gKGV2ZW50LnRvdWNoZXNbMV0ucGFnZVggKyBldmVudC50b3VjaGVzWzBdLnBhZ2VYKSAvIDI7XHJcbiAgICBsZXQgcGFnZVkgPSAoZXZlbnQudG91Y2hlc1sxXS5wYWdlWSArIGV2ZW50LnRvdWNoZXNbMF0ucGFnZVkpIC8gMjtcclxuXHJcbiAgICB0aGlzLm1vdmVYID0gcGFnZVg7XHJcbiAgICB0aGlzLm1vdmVZID0gcGFnZVk7XHJcblxyXG5cclxuICAgIGxldCBkaW1zID0gdGhpcy5nZXREaW1lbnNpb25zKHRoaXMudmlld2VyLCB7IHBhZ2VYOiBwYWdlWCwgcGFnZVk6IHBhZ2VZIH0pXHJcblxyXG5cclxuICAgIC8vIC8vY29uc3Qgdmlld2VyUmVjdCA9IHRoaXMudmlld2VyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgLy8gcGFnZVggLT0gcmVjdC5sZWZ0O1xyXG4gICAgLy8gcGFnZVkgLT0gcmVjdC50b3A7XHJcblxyXG4gICAgLy8gcGFnZVggLT0gdnIubGVmdDtcclxuICAgIC8vIHBhZ2VZIC09IHZyLnRvcDtcclxuXHJcblxyXG4gICAgLy8gcGFnZVggPSBkaW1zLnNjYWxlZC53aWR0aCAqIGRpbXMucG9pbnQudi54cDtcclxuICAgIC8vIHBhZ2VZID0gZGltcy5zY2FsZWQuaGVpZ2h0ICogZGltcy5wb2ludC52LnlwO1xyXG5cclxuXHJcbiAgICAvLyBsZXQgb3JpZ2luWCA9IHBhZ2VYOyAvLyArIHZpZXdlckNvbnRhaW5lci5zY3JvbGxMZWZ0OyAvLyB0aGlzLnN0YXJ0WCArIGNvbnRhaW5lci5zY3JvbGxMZWZ0O1xyXG4gICAgLy8gbGV0IG9yaWdpblkgPSBwYWdlWTsgLy8gKyB2aWV3ZXJDb250YWluZXIuc2Nyb2xsVG9wIDsgLy90aGlzLnN0YXJ0WSArIGNvbnRhaW5lci5zY3JvbGxUb3A7XHJcblxyXG4gICAgY29uc3Qgb3JpZ2luWCA9IGRpbXMuc2NhbGVkLndpZHRoICogZGltcy5wb2ludC52LnhwO1xyXG4gICAgY29uc3Qgb3JpZ2luWSA9IGRpbXMuc2NhbGVkLmhlaWdodCAqIGRpbXMucG9pbnQudi55cDtcclxuXHJcblxyXG4gICAgaWYgKHRoaXMuZGVidWcuZW5hYmxlZCkgdGhpcy5kZWJ1Z1BvaW50KHRoaXMubW92ZVggLSByZWN0LmxlZnQsIHRoaXMubW92ZVkgLSByZWN0LnRvcCk7XHJcblxyXG4gICAgbGV0IHByZXZTY2FsZSA9IHRoaXMuY3VycmVudFNjYWxlO1xyXG4gICAgdGhpcy5jdXJyZW50U2NhbGUgPSBwaW5jaERpc3RhbmNlIC8gdGhpcy5pbml0aWFsUGluY2hEaXN0YW5jZTtcclxuICAgIGxldCBtaW5ab29tID0gTnVtYmVyKFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5nZXQoJ21pblpvb20nKSk7XHJcbiAgICBpZiAoIW1pblpvb20pIHtcclxuICAgICAgbWluWm9vbSA9IDAuMTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjdXJyZW50Wm9vbSA9IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5fY3VycmVudFNjYWxlO1xyXG4gICAgaWYgKGN1cnJlbnRab29tICogdGhpcy5jdXJyZW50U2NhbGUgPCBtaW5ab29tKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFNjYWxlID0gbWluWm9vbSAvIGN1cnJlbnRab29tO1xyXG4gICAgfVxyXG4gICAgbGV0IG1heFpvb20gPSBOdW1iZXIoUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLmdldCgnbWF4Wm9vbScpKTtcclxuICAgIGlmICghbWF4Wm9vbSkge1xyXG4gICAgICBtYXhab29tID0gMTA7XHJcbiAgICB9XHJcbiAgICBpZiAoY3VycmVudFpvb20gKiB0aGlzLmN1cnJlbnRTY2FsZSA+IG1heFpvb20pIHtcclxuICAgICAgdGhpcy5jdXJyZW50U2NhbGUgPSBtYXhab29tIC8gY3VycmVudFpvb207XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgaWYgKHRoaXMuZGVidWcuZW5hYmxlZCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlRvdWNoTW92ZSBQSU5DSDogXCJcclxuICAgICAgICArIFwiLCBzdGFydFgvWTogXCIgKyB0aGlzLmRlYnVnLm5mLmZvcm1hdCh0aGlzLnN0YXJ0WCkgKyBcIiAvIFwiICsgdGhpcy5kZWJ1Zy5uZi5mb3JtYXQodGhpcy5zdGFydFkpXHJcbiAgICAgICAgKyBcIiwgbW92ZVgvWTogXCIgKyArIHRoaXMuZGVidWcubmYuZm9ybWF0KHRoaXMubW92ZVgpICsgXCIgLyBcIiArIHRoaXMuZGVidWcubmYuZm9ybWF0KHRoaXMubW92ZVkpXHJcbiAgICAgICAgKyBcIiwgcmVjdC5sL3Q6IFwiICsgdGhpcy5kZWJ1Zy5uZi5mb3JtYXQocmVjdC5sZWZ0KSArIFwiIC8gXCIgKyB0aGlzLmRlYnVnLm5mLmZvcm1hdChyZWN0LnRvcClcclxuICAgICAgICArIFwiLCB2aWV3ZXIubC90OiBcIiArIHRoaXMuZGVidWcubmYuZm9ybWF0KHZyLmxlZnQpICsgXCIgLyBcIiArIHRoaXMuZGVidWcubmYuZm9ybWF0KHZyLnRvcClcclxuICAgICAgICAvLyArIFwiLCB2aWV3ZXJDb250YWluZXIuc2wvc3Q6IFwiICsgdGhpcy5kZWJ1Zy5uZi5mb3JtYXQodmlld2VyQ29udGFpbmVyLnNjcm9sbExlZnQpICsgXCIgLyBcIiArIHRoaXMuZGVidWcubmYuZm9ybWF0KHZpZXdlckNvbnRhaW5lci5zY3JvbGxUb3ApXHJcbiAgICAgICAgKyBcIiwgb3JpZ2luWC9ZOiBcIiArIHRoaXMuZGVidWcubmYuZm9ybWF0KG9yaWdpblgpICsgXCIgLyBcIiArIHRoaXMuZGVidWcubmYuZm9ybWF0KG9yaWdpblkpXHJcblxyXG4gICAgICAgICsgXCIsIHZpZXdlci53L2g6IFwiICsgdGhpcy5kZWJ1Zy5uZi5mb3JtYXQodnIud2lkdGgpICsgXCIgLyBcIiArIHRoaXMuZGVidWcubmYuZm9ybWF0KHZyLmhlaWdodClcclxuICAgICAgICArIFwiLCBjdXJyZW50U2NhbGU6IFwiICsgdGhpcy5kZWJ1Zy5uZi5mb3JtYXQocHJldlNjYWxlKSArIFwiIC0+IFwiICsgdGhpcy5kZWJ1Zy5uZi5mb3JtYXQodGhpcy5jdXJyZW50U2NhbGUpXHJcbiAgICAgICAgKyBcIiwgZGltczogXCIsIGRpbXNcclxuXHJcblxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0aGlzLnZpZXdlci5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHt0aGlzLmN1cnJlbnRTY2FsZX0pYDtcclxuICAgIHRoaXMudmlld2VyLnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IGAke29yaWdpblh9cHggJHtvcmlnaW5ZfXB4YDtcclxuXHJcbiAgICAvLyB0aGlzLnRyYW5zZm9ybVNjYWxlID0gdGhpcy5jdXJyZW50U2NhbGU7XHJcblxyXG5cclxuXHJcbiAgICBpZiAoZXZlbnQuY2FuY2VsYWJsZSkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uVmlld2VyVG91Y2hFbmQoZXZlbnQ6IFRvdWNoRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWJsZUV2ZW50SGFuZGxpbmcpIHJldHVybjtcclxuXHJcbiAgICBpZiAodGhpcy5kZWJ1Zy5lbmFibGVkKSBjb25zb2xlLmxvZyhcIm9uVmlld2VyVG91Y2hFbmRcIlxyXG4gICAgICArIFwiLCB2dHM6IFwiICsgdGhpcy5nZXRWaWV3ZXJUcmFuc2Zvcm1TY2FsZShcIm9uVmlld2VyVG91Y2hFbmRcIilcclxuICAgICAgKyAnLCBzdGF0ZTogJyArIHRoaXMuc3RhdGVcclxuICAgICAgKyBcIiwgaW5pdGlhbFBpbmNoRGlzdGFuY2U6IFwiICsgdGhpcy5pbml0aWFsUGluY2hEaXN0YW5jZVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogYW55ID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG5cclxuXHJcbiAgICAvLyBsZXQgdG8gPSB0aGlzLnZpZXdlci5zdHlsZS50cmFuc2Zvcm1PcmlnaW47XHJcblxyXG4gICAgLy8gdGhpcy52aWV3ZXIuc3R5bGUudHJhbnNmb3JtID0gYG5vbmVgO1xyXG4gICAgLy8gdGhpcy52aWV3ZXIuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gYHVuc2V0YDtcclxuXHJcbiAgICBsZXQgZGltc1N0YXJ0ID0gdGhpcy5nZXREaW1lbnNpb25zKHRoaXMudmlld2VyKTtcclxuXHJcblxyXG4gICAgbGV0IHRsID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoO1xyXG4gICAgbGV0IHBhZ2VYID0gdGhpcy5tb3ZlWDtcclxuICAgIGxldCBwYWdlWSA9IHRoaXMubW92ZVk7XHJcblxyXG4gICAgaWYgKHRsID4gMSkge1xyXG4gICAgICBwYWdlWCA9IChldmVudC5jaGFuZ2VkVG91Y2hlc1sxXS5wYWdlWCArIGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYKSAvIDI7XHJcbiAgICAgIHBhZ2VZID0gKGV2ZW50LmNoYW5nZWRUb3VjaGVzWzFdLnBhZ2VZICsgZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkpIC8gMjtcclxuXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuZGVidWcuZW5hYmxlZCkgY29uc29sZS5sb2coXCJlbmQubW92ZVgvWTogXCIgKyB0aGlzLm1vdmVYICsgXCIgLT4gXCIgKyBwYWdlWCArIFwiLCBtb3ZlWTogXCIgKyB0aGlzLm1vdmVZICsgXCIgLT4gXCIgKyBwYWdlWSArIFwiLCB0bDogXCIgKyB0bCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhpcy5jdXJyZW50U2NhbGUgPSAxO1xyXG5cclxuXHJcblxyXG4gICAgbGV0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgaWYgKHRoaXMucG9pbnRFbmQudGltZSkge1xyXG4gICAgICBsZXQgcGUgPSB0aGlzLnBvaW50RW5kO1xyXG5cclxuICAgICAgbGV0IGRpZmYgPSBub3cgLSBwZS50aW1lO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcInBvaW50RW5kLmRpZmY6IFwiICsgZGlmZik7XHJcblxyXG4gICAgICBpZiAocGUucGFnZVggPT0gcGFnZVggJiYgcGUucGFnZVkgPT0gcGFnZVkgJiYgZGlmZiA8IDMwMCkge1xyXG5cclxuICAgICAgICBsZXQgUERGVmlld2VyQXBwbGljYXRpb246IGFueSA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgICAgICBsZXQgY3VycmVudFNjYWxlID0gUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLmN1cnJlbnRTY2FsZTtcclxuICAgICAgICBsZXQgc2NhbGVGYWN0b3IgPSAxLjQ7XHJcblxyXG4gICAgICAgIGxldCBuZXdTY2FsZSA9IHRoaXMuaXNab29taW5nKCkgPyAoY3VycmVudFNjYWxlIC8gc2NhbGVGYWN0b3IpIDogKGN1cnJlbnRTY2FsZSAqIHNjYWxlRmFjdG9yKTtcclxuXHJcbiAgICAgICAgLy8gbGV0IG5ld1NjYWxlID0gY3VycmVudFNjYWxlICogMS4yO1xyXG4gICAgICAgIC8vIGlmICh0aGlzLmRlYnVnLmVuYWJsZWQpIGNvbnNvbGUubG9nKFwicG9pbnRFbmQucG9pbnQgbWF0ZWNoZXMsIG5ldyBzY2FsZTogXCIgKyBuZXdTY2FsZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmluaXRpYWxQaW5jaERpc3RhbmNlIDw9IDAgfHwgdGhpcy5zdGF0ZSA9PSBcIm1vdmVcIikge1xyXG4gICAgICAgICAgaWYgKGV2ZW50LmNhbmNlbGFibGUpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgdGhpcy5zZXRWaWV3ZXJTY2FsZShuZXdTY2FsZSk7XHJcbiAgICAgICAgICB0aGlzLnBvaW50RW5kID0ge307XHJcbiAgICAgICAgfSwgNSk7XHJcblxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBvaW50RW5kID0ge1xyXG4gICAgICB0aW1lOiBub3csXHJcbiAgICAgIHBhZ2VYOiBwYWdlWCxcclxuICAgICAgcGFnZVk6IHBhZ2VZXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlID09IFwibW92ZVwiKSB7XHJcbiAgICAgIHRoaXMucmVzZXRQaW5jaFpvb21QYXJhbXMoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmluaXRpYWxQaW5jaERpc3RhbmNlIDw9IDApIHtcclxuICAgICAgdGhpcy5yZXNldFBpbmNoWm9vbVBhcmFtcygpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGxldCBjdXJyZW50U2NhbGUgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuY3VycmVudFNjYWxlO1xyXG4gICAgbGV0IG5ld1NjYWxlID0gY3VycmVudFNjYWxlICogdGhpcy5jdXJyZW50U2NhbGU7XHJcbiAgICAvLyBsZXQgc2NhbGVDaGFuZ2UgPSAxICsgKG5ld1NjYWxlIC0gY3VycmVudFNjYWxlKSAvIGN1cnJlbnRTY2FsZTtcclxuXHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdlckNvbnRhaW5lcicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgY29uc3QgcmVjdCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHZpZXdlclJlY3QgPSB0aGlzLnZpZXdlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICBsZXQgZGltcyA9IHRoaXMuZ2V0RGltZW5zaW9ucyh0aGlzLnZpZXdlcik7XHJcblxyXG5cclxuICAgIGlmICh0aGlzLmRlYnVnLmVuYWJsZWQpIHRoaXMuZGVidWdQb2ludChwYWdlWCwgcGFnZVkpO1xyXG5cclxuXHJcblxyXG4gICAgaWYgKHRoaXMuZGVidWcuZW5hYmxlZCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlRvdWNoRW5kOiBcIlxyXG4gICAgICAgICsgXCIsIHNjYWxlOiBcIiArIHRoaXMuZGVidWcubmYuZm9ybWF0KGN1cnJlbnRTY2FsZSkgKyBcIiAtPiBcIiArIHRoaXMuZGVidWcubmYuZm9ybWF0KG5ld1NjYWxlKSArIFwiLCBjczogXCIgKyB0aGlzLmN1cnJlbnRTY2FsZVxyXG5cclxuICAgICAgICArIFwiLCBwYWdlWC9ZOiBcIiArIHRoaXMuZGVidWcubmYuZm9ybWF0KHBhZ2VYKSArIFwiIC8gXCIgKyB0aGlzLmRlYnVnLm5mLmZvcm1hdChwYWdlWSlcclxuICAgICAgICArIFwiLCBzdGFydFgvWTogXCIgKyB0aGlzLmRlYnVnLm5mLmZvcm1hdCh0aGlzLnN0YXJ0WCkgKyBcIiAvIFwiICsgdGhpcy5kZWJ1Zy5uZi5mb3JtYXQodGhpcy5zdGFydFkpXHJcbiAgICAgICAgLy8gKyBcIiwgZGlmZjogXCIgKyB0aGlzLmRlYnVnLm5mLmZvcm1hdChkaWZmWCkgKyBcIiAvIFwiICsgdGhpcy5kZWJ1Zy5uZi5mb3JtYXQoZGlmZlkpXHJcbiAgICAgICAgLy8gKyBcIiwgZGlmZnM6IFwiICsgdGhpcy5kZWJ1Zy5uZi5mb3JtYXQoZGlmZlhzKSArIFwiIC8gXCIgKyB0aGlzLmRlYnVnLm5mLmZvcm1hdChkaWZmWXMpXHJcblxyXG4gICAgICAgIC8vICsgXCIsIGwvdDogXCIgKyB0aGlzLmRlYnVnLm5mLmZvcm1hdCh2aWV3ZXJSZWN0LmxlZnQpICsgXCIgLT4gXCIgK3RoaXMuZGVidWcubmYuZm9ybWF0KGxlZnQpICsgXCIgLyBcIiArIHRoaXMuZGVidWcubmYuZm9ybWF0KHZpZXdlclJlY3QudG9wKSArIFwiIC0+IFwiICt0aGlzLmRlYnVnLm5mLmZvcm1hdCh0b3ApXHJcbiAgICAgICAgKyBcIiwgdmlld2VyLncvaDogXCIgKyB0aGlzLmRlYnVnLm5mLmZvcm1hdCh2aWV3ZXJSZWN0LndpZHRoKSArIFwiIC8gXCIgKyB0aGlzLmRlYnVnLm5mLmZvcm1hdCh2aWV3ZXJSZWN0LmhlaWdodClcclxuICAgICAgICArIFwiLCBkaW1zOiBcIiwgZGltc1xyXG5cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdGhpcy5zZXRWaWV3ZXJTY2FsZShuZXdTY2FsZSwgeyByZXNldFRyYW5zZm9ybTogdHJ1ZSB9KTtcclxuXHJcblxyXG4gICAgdGhpcy5yZXNldFBpbmNoWm9vbVBhcmFtcygpO1xyXG5cclxuICAgIC8vIH0sIDUwKTtcclxuXHJcbiAgICBpZiAoZXZlbnQuY2FuY2VsYWJsZSkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cclxuICAgIC8vIGlmICh0bCA9PSAxKSB7XHJcbiAgICAvLyBsZXQgcGFnZVggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWDtcclxuICAgIC8vIGxldCBwYWdlWSA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZO1xyXG5cclxuXHJcblxyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgb25WaWV3ZXJNb3VzZURvd24oZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWJsZUV2ZW50SGFuZGxpbmcpIHJldHVybjtcclxuXHJcbiAgICBsZXQgaXNJbnNpZGUgPSB0aGlzLmlzSW5zaWRlQ29udGFpbmVyKFtldmVudF0pXHJcbiAgICBpZiAoIWlzSW5zaWRlKSByZXR1cm47XHJcblxyXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMubW92ZUVuYWJsZWQpIHJldHVybjtcclxuXHJcbiAgICBsZXQgZGltcyA9IHRoaXMuZ2V0RGltZW5zaW9ucyh0aGlzLnZpZXdlciwgZXZlbnQpO1xyXG5cclxuICAgIC8vIHRoaXMuem9vbVRvUG9pbnQoZXZlbnQsIGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XHJcbiAgICBpZiAodGhpcy5kZWJ1Zy5lbmFibGVkKSB7XHJcbiAgICAgIHRoaXMuZGVidWdQb2ludChkaW1zLnBvaW50LmMueCwgZGltcy5wb2ludC5jLnkpO1xyXG4gICAgICB0aGlzLmRlYnVnUG9pbnQoZGltcy5wb2ludC52LngsIGRpbXMucG9pbnQudi54LCB0cnVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdGhpcy5zdGFydFggPSBkaW1zLnBvaW50LmMueDtcclxuICAgIHRoaXMuc3RhcnRZID0gZGltcy5wb2ludC5jLnk7XHJcblxyXG4gICAgdGhpcy5zdGFydExlZnQgPSBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUodGhpcy52aWV3ZXIpLmxlZnQpIHx8IDA7XHJcbiAgICB0aGlzLnN0YXJ0VG9wID0gcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKHRoaXMudmlld2VyKS50b3ApIHx8IDBcclxuXHJcbiAgICB0aGlzLnN0YXRlID0gXCJtb3ZlXCI7XHJcblxyXG4gICAgaWYgKGV2ZW50LmNhbmNlbGFibGUpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICB9XHJcbiAgcHJpdmF0ZSBvblZpZXdlck1vdXNlTW92ZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5kaXNhYmxlRXZlbnRIYW5kbGluZykgcmV0dXJuO1xyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlICE9IFwibW92ZVwiKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwibW91c2Vtb3ZlOiBzdGF0ZSE9bW92ZTogXCIgKyB0aGlzLnN0YXRlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBkaW1zID0gdGhpcy5nZXREaW1lbnNpb25zKHRoaXMudmlld2VyLCBldmVudCk7XHJcblxyXG5cclxuICAgIGlmICh0aGlzLmRlYnVnLmVuYWJsZWQpIHRoaXMuZGVidWdQb2ludChkaW1zLnBvaW50LmMueCwgZGltcy5wb2ludC5jLnkpO1xyXG5cclxuICAgIGxldCBkaWZmWCA9IGRpbXMucG9pbnQuYy54IC0gdGhpcy5zdGFydFg7XHJcbiAgICBsZXQgZGlmZlkgPSBkaW1zLnBvaW50LmMueSAtIHRoaXMuc3RhcnRZO1xyXG5cclxuICAgIGxldCBsZWZ0ID0gdGhpcy5zdGFydExlZnQgKyBkaWZmWDtcclxuICAgIGxldCB0b3AgPSB0aGlzLnN0YXJ0VG9wICsgZGlmZlk7XHJcblxyXG4gICAgbGV0IGNvbnN0cmFpbiA9IHRoaXMuY29uc3RyYWluKHsgbGVmdDogbGVmdCwgdG9wOiB0b3AgfSk7XHJcbiAgICBsZWZ0ID0gY29uc3RyYWluLmxlZnQ7XHJcbiAgICB0b3AgPSBjb25zdHJhaW4udG9wO1xyXG5cclxuXHJcbiAgICB0aGlzLnZpZXdlci5zdHlsZS5sZWZ0ID0gbGVmdCArIFwicHhcIjtcclxuICAgIHRoaXMudmlld2VyLnN0eWxlLnRvcCA9IHRvcCArIFwicHhcIjtcclxuXHJcblxyXG4gICAgaWYgKHRoaXMuZGVidWcuZW5hYmxlZCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm1vdXNlbW92ZTogXCJcclxuICAgICAgICArIHRoaXMuZGVidWcubmYuZm9ybWF0KGRpbXMucG9pbnQuYy54KSArIFwiIC8gXCIgKyB0aGlzLmRlYnVnLm5mLmZvcm1hdChkaW1zLnBvaW50LmMueSlcclxuICAgICAgICArIFwiLCBkaWZmOiBcIiArIHRoaXMuZGVidWcubmYuZm9ybWF0KGRpZmZYKSArIFwiIC8gXCIgKyB0aGlzLmRlYnVnLm5mLmZvcm1hdChkaWZmWSlcclxuICAgICAgICArIFwiLCBsL3Q6IFwiICsgdGhpcy5kZWJ1Zy5uZi5mb3JtYXQobGVmdCkgKyBcIiAvIFwiICsgdGhpcy5kZWJ1Zy5uZi5mb3JtYXQodG9wKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChldmVudC5jYW5jZWxhYmxlKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblxyXG4gIH1cclxuICBwcml2YXRlIG9uVmlld2VyTW91c2VVcChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5kaXNhYmxlRXZlbnRIYW5kbGluZykgcmV0dXJuO1xyXG5cclxuICAgIGxldCBpc0luc2lkZSA9IHRoaXMuaXNJbnNpZGVDb250YWluZXIoW2V2ZW50XSk7XHJcbiAgICBpZiAodGhpcy5kZWJ1Zy5lbmFibGVkKSBjb25zb2xlLmxvZyhcIm1vdXNldXA6IFwiICsgdGhpcy5kZWJ1Zy5uZi5mb3JtYXQoZXZlbnQucGFnZVgpICsgXCIgLyBcIiArIHRoaXMuZGVidWcubmYuZm9ybWF0KGV2ZW50LnBhZ2VZKSArIFwiOyBpbnNpZGU6IFwiICsgaXNJbnNpZGUpO1xyXG4gICAgLy8gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBldmVudCk7XHJcblxyXG4gICAgaWYgKCFpc0luc2lkZSkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMucmVzZXRQaW5jaFpvb21QYXJhbXMoKTtcclxuXHJcbiAgICAvL1RPRE86IGthbiBpa2tlIGJydWtlIHByZXZlbnREZWZhdWx0IGh2aXMgdmkgc2thbCBrdW5uZSBzdMO4dHRlIGRvYmJlbHRrbGlra1xyXG5cclxuICAgIGlmIChldmVudC5jYW5jZWxhYmxlKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICBsZXQgcGFnZVggPSBldmVudC5wYWdlWDtcclxuICAgIGxldCBwYWdlWSA9IGV2ZW50LnBhZ2VZO1xyXG4gICAgbGV0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgaWYgKHRoaXMucG9pbnRFbmQudGltZSkge1xyXG4gICAgICBsZXQgcGUgPSB0aGlzLnBvaW50RW5kO1xyXG5cclxuICAgICAgbGV0IGRpZmYgPSBub3cgLSBwZS50aW1lO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcInBvaW50RW5kLmRpZmY6IFwiICsgZGlmZik7XHJcblxyXG4gICAgICBpZiAocGUucGFnZVggPT0gcGFnZVggJiYgcGUucGFnZVkgPT0gcGFnZVkgJiYgZGlmZiA8IDMwMCkge1xyXG5cclxuICAgICAgICBsZXQgUERGVmlld2VyQXBwbGljYXRpb246IGFueSA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgICAgICBsZXQgY3VycmVudFNjYWxlID0gUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLmN1cnJlbnRTY2FsZTtcclxuICAgICAgICBsZXQgc2NhbGVGYWN0b3IgPSAxLjQ7XHJcblxyXG4gICAgICAgIGxldCBuZXdTY2FsZSA9IHRoaXMuaXNab29taW5nKCkgPyAoY3VycmVudFNjYWxlIC8gc2NhbGVGYWN0b3IpIDogKGN1cnJlbnRTY2FsZSAqIHNjYWxlRmFjdG9yKTtcclxuICAgICAgICAvLyBpZiAodGhpcy5kZWJ1Zy5lbmFibGVkKSBjb25zb2xlLmxvZyhcInBvaW50RW5kLnBvaW50IG1hdGVjaGVzLCBpc1o6IFwiK3RoaXMuaXNab29taW5nKCkgK1wiLCBuZXcgc2NhbGU6IFwiICsgY3VycmVudFNjYWxlICsgXCIgLT4gXCIgKyBuZXdTY2FsZSk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cclxuICAgICAgICAgIHRoaXMuc2V0Vmlld2VyU2NhbGUobmV3U2NhbGUpO1xyXG4gICAgICAgICAgdGhpcy5wb2ludEVuZCA9IHt9O1xyXG4gICAgICAgIH0sIDUpO1xyXG5cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wb2ludEVuZCA9IHtcclxuICAgICAgdGltZTogbm93LFxyXG4gICAgICBwYWdlWDogcGFnZVgsXHJcbiAgICAgIHBhZ2VZOiBwYWdlWVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coXCJ1cGRhdGVpbmcgcG9pbnRFbmQ6IFwiLCB0aGlzLnBvaW50RW5kKTtcclxuXHJcblxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgcmVzZXRQaW5jaFpvb21QYXJhbXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0YXJ0WCA9IHRoaXMuc3RhcnRZID0gdGhpcy5tb3ZlWCA9IHRoaXMubW92ZVkgPSB0aGlzLnN0YXJ0TGVmdCA9IHRoaXMuc3RhcnRUb3AgPSB0aGlzLmluaXRpYWxQaW5jaERpc3RhbmNlID0gMDtcclxuICAgIHRoaXMuY3VycmVudFNjYWxlID0gMTtcclxuICAgIHRoaXMuc3RhdGUgPSBcImlkbGVcIjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Qm94U3R5bGUoXHJcbiAgICBlbGVtOiBIVE1MRWxlbWVudCB8IFNWR0VsZW1lbnQsXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBzdHlsZTogQ1NTU3R5bGVEZWNsYXJhdGlvbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW0pXHJcbiAgKSB7XHJcbiAgICBjb25zdCBzdWZmaXggPSBuYW1lID09PSAnYm9yZGVyJyA/ICdXaWR0aCcgOiAnJ1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbGVmdDogcGFyc2VGbG9hdChzdHlsZVtgJHtuYW1lfUxlZnQke3N1ZmZpeH1gXSkgfHwgMCxcclxuICAgICAgcmlnaHQ6IHBhcnNlRmxvYXQoc3R5bGVbYCR7bmFtZX1SaWdodCR7c3VmZml4fWBdKSB8fCAwLFxyXG4gICAgICB0b3A6IHBhcnNlRmxvYXQoc3R5bGVbYCR7bmFtZX1Ub3Ake3N1ZmZpeH1gXSkgfHwgMCxcclxuICAgICAgYm90dG9tOiBwYXJzZUZsb2F0KHN0eWxlW2Ake25hbWV9Qm90dG9tJHtzdWZmaXh9YF0pIHx8IDAsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBnZXREaW1lbnNpb25zKGVsZW06IEhUTUxFbGVtZW50LCBwb2ludD86ICh7IHBhZ2VYOiBudW1iZXIsIHBhZ2VZOiBudW1iZXIgfSkpIHtcclxuICAgIGNvbnN0IHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudFxyXG4gICAgY29uc3Qgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKVxyXG4gICAgY29uc3QgcGFyZW50U3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpXHJcbiAgICBjb25zdCByZWN0RWxlbSA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgIGNvbnN0IHJlY3RQYXJlbnQgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuXHJcblxyXG4gICAgY29uc3QgdnRzID0gdGhpcy5nZXRWaWV3ZXJUcmFuc2Zvcm1TY2FsZShcImdldERpbWVuc2lvbnNcIik7XHJcbiAgICBjb25zdCB2dG8gPSB0aGlzLmdldFZpZXdlclRyYW5zZm9ybU9yaWdpbigpO1xyXG5cclxuICAgIGxldCByZXM6IGFueSA9IHtcclxuICAgICAgZWxlbToge1xyXG4gICAgICAgIHN0eWxlLFxyXG4gICAgICAgIHdpZHRoOiByZWN0RWxlbS53aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IHJlY3RFbGVtLmhlaWdodCxcclxuICAgICAgICB0b3A6IHJlY3RFbGVtLnRvcCxcclxuICAgICAgICBib3R0b206IHJlY3RFbGVtLmJvdHRvbSxcclxuICAgICAgICBsZWZ0OiByZWN0RWxlbS5sZWZ0LFxyXG4gICAgICAgIHJpZ2h0OiByZWN0RWxlbS5yaWdodCxcclxuICAgICAgICBtYXJnaW46IHRoaXMuZ2V0Qm94U3R5bGUoZWxlbSwgJ21hcmdpbicsIHN0eWxlKSxcclxuICAgICAgICBib3JkZXI6IHRoaXMuZ2V0Qm94U3R5bGUoZWxlbSwgJ2JvcmRlcicsIHN0eWxlKVxyXG4gICAgICB9LFxyXG4gICAgICByZWw6IHtcclxuICAgICAgICB3aWR0aDogcmVjdEVsZW0ud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiByZWN0RWxlbS5oZWlnaHQsXHJcbiAgICAgICAgdG9wOiByZWN0RWxlbS50b3AgLSByZWN0UGFyZW50LnRvcCxcclxuICAgICAgICBsZWZ0OiByZWN0RWxlbS5sZWZ0IC0gcmVjdFBhcmVudC5sZWZ0LFxyXG4gICAgICAgIGJvdHRvbTogcmVjdEVsZW0uYm90dG9tIC0gcmVjdFBhcmVudC50b3AsXHJcbiAgICAgICAgcmlnaHQ6IHJlY3RFbGVtLnJpZ2h0IC0gcmVjdFBhcmVudC5sZWZ0LFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgcGFyZW50OiB7XHJcbiAgICAgICAgc3R5bGU6IHBhcmVudFN0eWxlLFxyXG4gICAgICAgIHdpZHRoOiByZWN0UGFyZW50LndpZHRoLFxyXG4gICAgICAgIGhlaWdodDogcmVjdFBhcmVudC5oZWlnaHQsXHJcbiAgICAgICAgdG9wOiByZWN0UGFyZW50LnRvcCxcclxuICAgICAgICBib3R0b206IHJlY3RQYXJlbnQuYm90dG9tLFxyXG4gICAgICAgIGxlZnQ6IHJlY3RQYXJlbnQubGVmdCxcclxuICAgICAgICByaWdodDogcmVjdFBhcmVudC5yaWdodCxcclxuICAgICAgICBwYWRkaW5nOiB0aGlzLmdldEJveFN0eWxlKHBhcmVudCwgJ3BhZGRpbmcnLCBwYXJlbnRTdHlsZSksXHJcbiAgICAgICAgYm9yZGVyOiB0aGlzLmdldEJveFN0eWxlKHBhcmVudCwgJ2JvcmRlcicsIHBhcmVudFN0eWxlKVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh2dHMgPT0gMS4wKSByZXMuc2NhbGVkID0gcmVzLnJlbDtcclxuICAgIGVsc2Uge1xyXG4gICAgICBsZXQgc3cgPSByZXMucmVsLndpZHRoIC8gdnRzO1xyXG4gICAgICBsZXQgc2ggPSByZXMucmVsLmhlaWdodCAvIHZ0cztcclxuICAgICAgbGV0IHdkID0gcmVzLnJlbC53aWR0aCAtIHN3OyAgLy8gMTE4XHJcbiAgICAgIGxldCBoZCA9IHJlcy5yZWwuaGVpZ2h0IC0gc2g7XHJcblxyXG5cclxuICAgICAgcmVzLnNjYWxlZCA9IHtcclxuICAgICAgICB2dHM6IHZ0cyxcclxuICAgICAgICB2dG86IHZ0byxcclxuICAgICAgICB3aWR0aDogc3csXHJcbiAgICAgICAgaGVpZ2h0OiBzaCxcclxuXHJcbiAgICAgICAgbGVmdDogcmVzLnJlbC5sZWZ0ICsgd2QgLyAyLFxyXG4gICAgICAgIHJpZ2h0OiByZXMucmVsLnJpZ2h0IC0gd2QgLyAyLFxyXG4gICAgICAgIHRvcDogcmVzLnJlbC50b3AgKyBoZCAvIDIsXHJcbiAgICAgICAgYm90dG9tOiByZXMucmVsLmJvdHRvbSAtIGhkIC8gMixcclxuXHJcbiAgICAgICAgd2Q6IHdkLFxyXG4gICAgICAgIGhkOiBoZCxcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgbGV0IHZ4ID0gcG9pbnQgPyBwb2ludC5wYWdlWCAtIHJlY3RFbGVtLmxlZnQgOiByZWN0RWxlbS53aWR0aCAvIDI7XHJcbiAgICBsZXQgdnkgPSBwb2ludCA/IHBvaW50LnBhZ2VZIC0gcmVjdEVsZW0udG9wIDogcmVjdEVsZW0uaGVpZ2h0IC8gMjtcclxuXHJcbiAgICBsZXQgY3ggPSBwb2ludCA/IHBvaW50LnBhZ2VYIC0gcmVjdFBhcmVudC5sZWZ0IDogdnggKyByZXMucmVsLmxlZnQ7XHJcbiAgICBsZXQgY3kgPSBwb2ludCA/IHBvaW50LnBhZ2VZIC0gcmVjdFBhcmVudC50b3AgOiB2eSArIHJlcy5yZWwudG9wO1xyXG5cclxuICAgIGxldCB2eHAgPSB2eCAvIHJlY3RFbGVtLndpZHRoO1xyXG4gICAgbGV0IHZ5cCA9IHZ5IC8gcmVjdEVsZW0uaGVpZ2h0O1xyXG4gICAgbGV0IGN4cCA9IGN4IC8gcmVjdFBhcmVudC53aWR0aDtcclxuICAgIGxldCBjeXAgPSBjeSAvIHJlY3RQYXJlbnQuaGVpZ2h0O1xyXG5cclxuICAgIHJlcy5wb2ludCA9IHtcclxuICAgICAgc3JjOiBwb2ludCxcclxuICAgICAgdjoge1xyXG4gICAgICAgIHg6IHZ4LFxyXG4gICAgICAgIHk6IHZ5LFxyXG4gICAgICAgIHhwOiB2eHAsXHJcbiAgICAgICAgeXA6IHZ5cFxyXG4gICAgICB9LFxyXG4gICAgICBjOiB7XHJcbiAgICAgICAgeDogY3gsXHJcbiAgICAgICAgeTogY3ksXHJcbiAgICAgICAgeHA6IGN4cCxcclxuICAgICAgICB5cDogY3lwXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICAvLyAgIHJldHVybiByZXM7XHJcbiAgLy8gfVxyXG5cclxuICBwcml2YXRlIGdldERpbURpZmYoc3RhcnQ6IGFueSwgZW5kOiBhbnkpIHtcclxuICAgIC8vIGxldCBzZSA9IHN0YXJ0LmVsZW07XHJcbiAgICAvLyBsZXQgZWUgPSBlbmQuZWxlbTtcclxuICAgIC8vIGxldCBzcCA9IHN0YXJ0LnBhcmVudDtcclxuICAgIC8vIGxldCBlcCA9IGVuZC5wYXJlbnQ7XHJcblxyXG4gICAgbGV0IGlucHV0ID0ge1xyXG4gICAgICBlbGVtOiB7XHJcbiAgICAgICAgc3RhcnQ6IHN0YXJ0LmVsZW0sXHJcbiAgICAgICAgZW5kOiBlbmQuZWxlbVxyXG4gICAgICB9LFxyXG4gICAgICBwYXJlbnQ6IHtcclxuICAgICAgICBzdGFydDogc3RhcnQucGFyZW50LFxyXG4gICAgICAgIGVuZDogZW5kLnBhcmVudFxyXG4gICAgICB9LFxyXG4gICAgICByZWw6IHtcclxuICAgICAgICBzdGFydDogc3RhcnQucmVsLFxyXG4gICAgICAgIGVuZDogZW5kLnJlbFxyXG4gICAgICB9LFxyXG4gICAgICBzY2FsZWQ6IHtcclxuICAgICAgICBzdGFydDogc3RhcnQuc2NhbGVkLFxyXG4gICAgICAgIGVuZDogZW5kLnNjYWxlZFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG5cclxuICAgIGxldCByZXM6IGFueSA9IHt9O1xyXG4gICAgZm9yIChsZXQgdHlwZSBvZiBbXCJlbGVtXCIsIFwicGFyZW50XCIsIFwicmVsXCIsIFwic2NhbGVkXCJdKSB7XHJcbiAgICAgIGxldCBzID0gaW5wdXRbdHlwZV0uc3RhcnQ7XHJcbiAgICAgIGxldCBlID0gaW5wdXRbdHlwZV0uZW5kO1xyXG5cclxuICAgICAgcmVzW3R5cGVdID0ge307XHJcblxyXG4gICAgICBmb3IgKGxldCBwcm9wIG9mIFtcIndpZHRoXCIsIFwiaGVpZ2h0XCIsIFwidG9wXCIsIFwiYm90dG9tXCIsIFwibGVmdFwiLCBcInJpZ2h0XCJdKSB7XHJcbiAgICAgICAgbGV0IHN2ID0gc1twcm9wXTtcclxuICAgICAgICBsZXQgZXYgPSBlW3Byb3BdO1xyXG4gICAgICAgIGxldCBkaWZmID0gZXYgLSBzdjtcclxuXHJcbiAgICAgICAgcmVzW3R5cGVdW3Byb3AgKyBcIkxhYmVsXCJdID0gdGhpcy5kZWJ1Zy5uZi5mb3JtYXQoc3YpICsgXCIgLT4gXCIgKyB0aGlzLmRlYnVnLm5mLmZvcm1hdChldikgKyBcIiwgZGlmZjogXCIgKyB0aGlzLmRlYnVnLm5mLmZvcm1hdChkaWZmKSArIFwiIChcIiArIHRoaXMuZGVidWcubmYuZm9ybWF0KGRpZmYgLyBzdiAqIDEwMC4wKSArIFwiICUpXCI7XHJcbiAgICAgICAgcmVzW3R5cGVdW3Byb3BdID0gZGlmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXM7XHJcblxyXG5cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGNvbnN0cmFpbihwOiAoeyBsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyIH0pKTogKHsgbGVmdDogbnVtYmVyLCB0b3A6IG51bWJlciB9KSB7XHJcbiAgICBjb25zdCBkaW1zID0gdGhpcy5nZXREaW1lbnNpb25zKHRoaXMudmlld2VyKVxyXG5cclxuICAgIGxldCBpc1NjYWxlZCA9IGRpbXMuc2NhbGVkLnZ0cyAhPT0gdW5kZWZpbmVkICYmIGRpbXMuc2NhbGVkLnZ0cyAhPSAxLjA7XHJcblxyXG4gICAgbGV0IG1pblggPSBwLmxlZnQsIG1heFggPSBwLmxlZnQsIG1pblkgPSBwLnRvcCwgbWF4WSA9IHAudG9wO1xyXG5cclxuICAgIGlmIChkaW1zLmVsZW0ud2lkdGggPD0gZGltcy5wYXJlbnQud2lkdGgpIHtcclxuICAgICAgLy8gaW5zaWRlXHJcbiAgICAgIG1pblggPSAwO1xyXG4gICAgICBtYXhYID0gKGRpbXMucGFyZW50LndpZHRoIC0gZGltcy5lbGVtLndpZHRoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gb3V0c2lkZVxyXG4gICAgICBtaW5YID0gLShkaW1zLmVsZW0ud2lkdGggLSBkaW1zLnBhcmVudC53aWR0aCk7XHJcbiAgICAgIG1heFggPSAwO1xyXG5cclxuICAgIH1cclxuICAgIGlmIChkaW1zLmVsZW0uaGVpZ2h0IDw9IGRpbXMucGFyZW50LmhlaWdodCkge1xyXG4gICAgICAvLyBpbnNpZGVcclxuICAgICAgbWluWSA9IDA7XHJcbiAgICAgIG1heFkgPSAoZGltcy5wYXJlbnQuaGVpZ2h0IC0gZGltcy5lbGVtLmhlaWdodCk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gb3V0c2lkZVxyXG4gICAgICBtaW5ZID0gLShkaW1zLmVsZW0uaGVpZ2h0IC0gZGltcy5wYXJlbnQuaGVpZ2h0KTtcclxuICAgICAgbWF4WSA9IDA7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc1NjYWxlZCkge1xyXG4gICAgICBsZXQgdnRvID0gZGltcy5zY2FsZWQudnRvO1xyXG4gICAgICBsZXQgeHAgPSB2dG8gPyB2dG8ueCAvIGRpbXMuc2NhbGVkLndpZHRoIDogMC41O1xyXG4gICAgICBsZXQgeXAgPSB2dG8gPyB2dG8ueSAvIGRpbXMuc2NhbGVkLmhlaWdodCA6IDAuNTtcclxuXHJcbiAgICAgIG1pblggKz0gZGltcy5zY2FsZWQud2QgKiB4cDtcclxuICAgICAgbWF4WCArPSBkaW1zLnNjYWxlZC53ZCAqIHhwO1xyXG5cclxuICAgICAgbWluWSArPSBkaW1zLnNjYWxlZC5oZCAqIHlwO1xyXG4gICAgICBtYXhZICs9IGRpbXMuc2NhbGVkLmhkICogeXA7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBsZXQgY0xlZnQgPSBNYXRoLm1heChNYXRoLm1pbihwLmxlZnQsIG1heFgpLCBtaW5YKVxyXG4gICAgbGV0IGNUb3AgPSBNYXRoLm1heChNYXRoLm1pbihwLnRvcCwgbWF4WSksIG1pblkpXHJcblxyXG4gICAgLy8gaWYgKHRoaXMuZGVidWcuZW5hYmxlZCkgY29uc29sZS5sb2coXCJjb25zdHJhaW4sIGxlZnQ6ICBcIiArIHAubGVmdCArIFwiIC0+IFwiICsgY0xlZnQgKyBcIiAoXCIrbWluWCArIFwiLVwiK21heFgrXCIpXCIgKyBcIiwgdG9wOiBcIiArIHAudG9wICsgXCIgLT4gXCIgKyBjVG9wICsgXCIgKFwiK21pblkgKyBcIi1cIittYXhZK1wiKSwgZGltczogXCIsIGRpbXMpO1xyXG5cclxuICAgIHJldHVybiB7IGxlZnQ6IGNMZWZ0LCB0b3A6IGNUb3AgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNJbnNpZGVDb250YWluZXIocG9pbnRzOiAoeyBwYWdlWDogbnVtYmVyLCBwYWdlWTogbnVtYmVyLCB0YXJnZXQ6IGFueSB9KVtdKSB7XHJcbiAgICBjb25zdCB2aWV3ZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld2VyQ29udGFpbmVyJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBjb25zdCByZWN0ID0gdmlld2VyQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgIGlmIChwb2ludHMgPT09IHVuZGVmaW5lZCB8fCBwb2ludHMubGVuZ3RoID09IDApIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAvL1RPRE86IENoZWNrIGV2ZW50LCBpcyB0YXJnZXQucGFyZW50IHRoZSB2aWV3ZXJDb250YWluZXI/IFxyXG5cclxuICAgIC8vIGxldCBhbGxJbnNpZGUgPSB0cnVlO1xyXG4gICAgZm9yIChsZXQgcG9pbnQgb2YgcG9pbnRzKSB7XHJcblxyXG4gICAgICBsZXQgdGFyZ2V0ID0gcG9pbnQudGFyZ2V0O1xyXG4gICAgICBpZiAodGFyZ2V0KSB7XHJcbiAgICAgICAgbGV0IGNsb3Nlc3QgPSB0YXJnZXQuY2xvc2VzdChcIiN2aWV3ZXJDb250YWluZXJcIik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjbG9zZXN0OiBcIiwgY2xvc2VzdClcclxuICAgICAgICBpZiAoY2xvc2VzdCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICBsZXQgcGFnZVggPSBwb2ludC5wYWdlWDsgLy8gKyB2aWV3ZXJDb250YWluZXIuc2Nyb2xsTGVmdDtcclxuICAgICAgbGV0IHBhZ2VZID0gcG9pbnQucGFnZVk7IC8vICsgdmlld2VyQ29udGFpbmVyLnNjcm9sbFRvcDtcclxuXHJcblxyXG4gICAgICBsZXQgaW5zaWRlID0gZmFsc2U7XHJcbiAgICAgIGlmIChwYWdlWCA+PSByZWN0LmxlZnQgJiYgcGFnZVggPD0gcmVjdC5yaWdodCkge1xyXG4gICAgICAgIGlmIChwYWdlWSA+PSAocmVjdC50b3AgKyB3aW5kb3cuc2Nyb2xsWSkgJiYgcGFnZVkgPD0gKHJlY3QuYm90dG9tICsgd2luZG93LnNjcm9sbFkpKSB7XHJcbiAgICAgICAgICBpbnNpZGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gY29uc29sZS5sb2coXCJwYWdlWC9ZOiBcIiArIHBhZ2VYICsgXCIgLyBcIiArIHBhZ2VZICsgXCIsIGluc2lkZTogXCIgKyBpbnNpZGUgKyBcIjsgcmVjdDogXCIsIHJlY3QsIFwiLCBwb2ludDogXCIsIHBvaW50KTtcclxuXHJcbiAgICAgIGlmICghaW5zaWRlKSByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFZpZXdlclRyYW5zZm9ybVNjYWxlKHNyYzogc3RyaW5nKSB7XHJcbiAgICBsZXQgdGYgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMudmlld2VyKS50cmFuc2Zvcm07XHJcblxyXG4gICAgaWYgKHRmID09IFwibm9uZVwiIHx8IHRmLmluZGV4T2YoXCIoXCIpIDwgMCkge1xyXG4gICAgICBsZXQgdnRzID0gMS4wO1xyXG5cclxuICAgICAgLy8gaWYgKHRoaXMudHJhbnNmb3JtU2NhbGUgPiAwLjApIHtcclxuICAgICAgLy8gICB2dHMgPSB0aGlzLnRyYW5zZm9ybVNjYWxlXHJcbiAgICAgIC8vIH1cclxuXHJcbiAgICAgIC8vIGlmICh0aGlzLmRlYnVnLmVuYWJsZWQpIGNvbnNvbGUubG9nKFwiZ2V0Vmlld2VyVHJhbnNmb3JtU2NhbGUsIHRmOiBcIiArIHRmICsgXCIsIGluZGV4T2YgKDogXCIgKyB0Zi5pbmRleE9mKFwiKFwiKSArIFwiLCBzcmM6IFwiICsgc3JjICsgXCIsIHZ0czogXCIgKyB2dHMpO1xyXG5cclxuICAgICAgcmV0dXJuIHZ0cztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaXNTY2FsZSA9IHRmLmluZGV4T2YoXCJzY2FsZVwiKSA+PSAwO1xyXG4gICAgbGV0IHRyYW5zZm9ybVNjYWxlID0gcGFyc2VGbG9hdChcclxuICAgICAgdGYuc3Vic3RyaW5nKHRmLmluZGV4T2YoXCIoXCIpICsgMSxcclxuICAgICAgICB0Zi5pbmRleE9mKGlzU2NhbGUgPyBcIilcIiA6IFwiLFwiKSlcclxuICAgICk7XHJcbiAgICAvLyBpZiAodGhpcy5kZWJ1Zy5lbmFibGVkKSBjb25zb2xlLmxvZyhcImdldFZpZXdlclRyYW5zZm9ybVNjYWxlLCB0ZjogXCIgKyB0ZiArIFwiLCBpbmRleE9mICg6IFwiICsgdGYuaW5kZXhPZihcIihcIikgKyBcIiwgdHJhbnNmb3JtU2NhbGU6IFwiICsgdHJhbnNmb3JtU2NhbGUgKyBcIiwgc3JjOiBcIiArIHNyYyk7XHJcbiAgICByZXR1cm4gdHJhbnNmb3JtU2NhbGU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFZpZXdlclRyYW5zZm9ybU9yaWdpbigpIHtcclxuICAgIGxldCB0byA9IHRoaXMudmlld2VyLnN0eWxlLnRyYW5zZm9ybU9yaWdpbjtcclxuICAgIGlmICh0byA9PSB1bmRlZmluZWQgfHwgdG8gPT0gXCJ1bnNldFwiKSByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgIGxldCBwYXJ0cyA9IHRvLnNwbGl0KFwiIFwiKTtcclxuICAgIGlmIChwYXJ0cy5sZW5ndGggIT0gMikgcmV0dXJuIHVuZGVmaW5lZDtcclxuXHJcbiAgICByZXR1cm4geyB4OiBwYXJzZUZsb2F0KHBhcnRzWzBdKSwgeTogcGFyc2VGbG9hdChwYXJ0c1sxXSkgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGVja0NvbnRyYWludCgpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGRpbXMgPSB0aGlzLmdldERpbWVuc2lvbnModGhpcy52aWV3ZXIpO1xyXG4gICAgbGV0IGNvbnN0cmFpbjogYW55ID0gdGhpcy5jb25zdHJhaW4oeyBsZWZ0OiBkaW1zLmVsZW0ubGVmdCwgdG9wOiBkaW1zLmVsZW0udG9wIH0pO1xyXG4gICAgcmV0dXJuIGNvbnN0cmFpbi5sZWZ0ICE9IGRpbXMuZWxlbS5sZWZ0ICYmIGNvbnN0cmFpbi50b3AgIT0gZGltcy5lbGVtLnRvcDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVWaWV3ZXJQb3NpdGlvbihmb3JjZVVwZGF0ZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBsZXQgdmlld2VyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdlckNvbnRhaW5lcicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgdGhpcy52aWV3ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld2VyJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3QgZGltcyA9IHRoaXMuZ2V0RGltZW5zaW9ucyh0aGlzLnZpZXdlcik7XHJcblxyXG5cclxuICAgIGxldCBjb25zdHJhaW46IGFueSA9IHRoaXMuY29uc3RyYWluKHsgbGVmdDogZGltcy5lbGVtLmxlZnQsIHRvcDogZGltcy5lbGVtLnRvcCB9KTsgLy8gO1xyXG4gICAgbGV0IHRyYW5zZm9ybVNjYWxlID0gdGhpcy5nZXRWaWV3ZXJUcmFuc2Zvcm1TY2FsZShcInVwZGF0ZVZpZXdlclBvc2l0aW9uXCIpO1xyXG5cclxuICAgIC8vIGlmICh0cmFuc2Zvcm1TY2FsZSA9PSAxLjApXHJcblxyXG4gICAgaWYgKHRoaXMuZGVidWcuZW5hYmxlZCkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcInVwZGF0ZVZpZXdlclBvc2l0aW9uXCJcclxuICAgICAgLy8gICArIFwiLCB1cGRhdGVMZWZ0OiBcIiArIChkaW1zLmVsZW0ud2lkdGggPD0gZGltcy5wYXJlbnQud2lkdGgpIFxyXG4gICAgICAvLyAgICsgXCIsIHVwZGF0ZVRvcDogXCIgKyAoZGltcy5lbGVtLmhlaWdodCA8PSBkaW1zLnBhcmVudC5oZWlnaHQpXHJcbiAgICAgIC8vICAgKyBcIiwgY2hlY2tDb250cmFpbnQ6IFwiICsgdGhpcy5jaGVja0NvbnRyYWludCgpXHJcbiAgICAgIC8vICAgKyBcIiwgdHJhbnNmb3JtU2NhbGU6IFwiICsgdHJhbnNmb3JtU2NhbGUgXHJcbiAgICAgIC8vICAgKyBcIiwgZGltczogXCIsIGRpbXMpO1xyXG5cclxuICAgIH1cclxuICAgIGxldCBwb2ludDogKHsgbGVmdDogbnVtYmVyIHwgdW5kZWZpbmVkLCB0b3A6IG51bWJlciB8IHVuZGVmaW5lZCB9KSA9IHtcclxuICAgICAgbGVmdDogdW5kZWZpbmVkLFxyXG4gICAgICB0b3A6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIGlmIChmb3JjZVVwZGF0ZSB8fCBkaW1zLmVsZW0ud2lkdGggPD0gZGltcy5wYXJlbnQud2lkdGggfHwgKGNvbnN0cmFpbiAmJiBjb25zdHJhaW4ubGVmdCAhPSBkaW1zLmVsZW0ubGVmdCkpIHtcclxuICAgICAgbGV0IGxlZnQgPSAoZGltcy5wYXJlbnQud2lkdGggLSAoZGltcy5lbGVtLndpZHRoIC8gdHJhbnNmb3JtU2NhbGUpKSAvIDI7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwidXBkYXRlVmlld2VyUG9zaXRpb24sIGxlZnQ6IFwiICsgdGhpcy52aWV3ZXIuc3R5bGUubGVmdCAgKyBcIiAtPiBcIiArIGxlZnQpO1xyXG4gICAgICAvLyB0aGlzLnZpZXdlci5zdHlsZS5sZWZ0ID0gbGVmdCArIFwicHhcIjtcclxuICAgICAgcG9pbnQubGVmdCA9IGxlZnQ7XHJcbiAgICB9XHJcbiAgICBpZiAoZm9yY2VVcGRhdGUgfHwgZGltcy5lbGVtLmhlaWdodCA8PSBkaW1zLnBhcmVudC5oZWlnaHQgfHwgKGNvbnN0cmFpbiAmJiBjb25zdHJhaW4udG9wICE9IGRpbXMuZWxlbS50b3ApKSB7XHJcbiAgICAgIGxldCB0b3AgPSAoZGltcy5wYXJlbnQuaGVpZ2h0IC0gKGRpbXMuZWxlbS5oZWlnaHQgLyB0cmFuc2Zvcm1TY2FsZSkpIC8gMjtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJ1cGRhdGVWaWV3ZXJQb3NpdGlvbiwgdG9wOiBcIiArIHRoaXMudmlld2VyLnN0eWxlLnRvcCAgKyBcIiAtPiBcIiArIHRvcCk7XHJcbiAgICAgIC8vIHRoaXMudmlld2VyLnN0eWxlLnRvcCA9IHRvcCArIFwicHhcIjtcclxuICAgICAgcG9pbnQudG9wID0gdG9wO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwb2ludC5sZWZ0IHx8IHBvaW50LnRvcCkge1xyXG5cclxuICAgICAgdGhpcy52aWV3ZXIuc3R5bGUubGVmdCA9IHBvaW50LmxlZnQgKyBcInB4XCI7XHJcbiAgICAgIHRoaXMudmlld2VyLnN0eWxlLnRvcCA9IHBvaW50LnRvcCArIFwicHhcIjtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFZpZXdlclNjYWxlKG5ld1NjYWxlLCBvcHRpb25zOiBhbnkgPSB7fSkge1xyXG4gICAgbGV0IHZ0c1NvdXJjZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy52aWV3ZXIpLnRyYW5zZm9ybTtcclxuICAgIGlmICh0aGlzLmRlYnVnLmVuYWJsZWQpIGNvbnNvbGUubG9nKFwic2V0Vmlld2VyU2NhbGUsIG5ld1NjYWxlOiBcIiArIG5ld1NjYWxlICsgXCIsIHZ0c1NvdXJjZTogXCIgKyB2dHNTb3VyY2UpO1xyXG5cclxuICAgIGxldCBvcmlnaW4gPSBvcHRpb25zLm9yaWdpbjtcclxuICAgIC8vIGxldCByZXNldFRyYW5zZm9ybSA9IG9wdGlvbnMucmVzZXRUcmFuc2Zvcm0gPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnJlc2V0VHJhbnNmb3JtID09PSB0cnVlOyBcclxuXHJcbiAgICBsZXQgdnRzID0gdGhpcy5nZXRWaWV3ZXJUcmFuc2Zvcm1TY2FsZShcInNldFZpZXdlclNjYWxlXCIpO1xyXG5cclxuXHJcbiAgICBsZXQgZGltcyA9IHRoaXMuZ2V0RGltZW5zaW9ucyh0aGlzLnZpZXdlcik7XHJcbiAgICAvLyBsZXQgZGltc0FmdGVyVHJhbnNmb3JtUmVzZXQgPSBkaW1zOyBcclxuXHJcbiAgICBsZXQgcmVzZXQ6IGFueSA9IHsgbGVmdDogdW5kZWZpbmVkLCB0b3A6IHVuZGVmaW5lZCB9O1xyXG5cclxuICAgIGlmICh2dHMgIT0gMS4wKSB7IC8vIHJlc2V0VHJhbnNmb3JtICYmIFxyXG5cclxuICAgICAgaWYgKHZ0c1NvdXJjZSAhPSBcIm5vbmVcIikge1xyXG5cclxuICAgICAgICByZXNldC5sZWZ0ID0gZGltcy5yZWwubGVmdDtcclxuICAgICAgICByZXNldC50b3AgPSBkaW1zLnJlbC50b3A7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudmlld2VyLnN0eWxlLnRyYW5zZm9ybSA9ICdub25lJztcclxuICAgICAgdGhpcy52aWV3ZXIuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gJ3Vuc2V0JztcclxuXHJcbiAgICAgIC8vIHRoaXMudHJhbnNmb3JtU2NhbGUgPSAtMTtcclxuICAgICAgLy8gZGltc0FmdGVyVHJhbnNmb3JtUmVzZXQgPSB0aGlzLmdldERpbWVuc2lvbnModGhpcy52aWV3ZXIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsZXQgUERGVmlld2VyQXBwbGljYXRpb246IGFueSA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIGxldCBjdXJyZW50U2NhbGUgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuY3VycmVudFNjYWxlO1xyXG5cclxuICAgIGlmIChvcmlnaW4gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIG9yaWdpbiA9IHsgeDogZGltcy5lbGVtLndpZHRoIC8gMiwgeTogZGltcy5lbGVtLmhlaWdodCAvIDIgfTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgb3hwID0gb3JpZ2luLnggLyBkaW1zLmVsZW0ud2lkdGg7XHJcbiAgICBsZXQgb3lwID0gb3JpZ2luLnkgLyBkaW1zLmVsZW0uaGVpZ2h0O1xyXG5cclxuICAgIGlmICh0aGlzLmRlYnVnLmVuYWJsZWQpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJzZXRWaWV3ZXJTY2FsZSwgY3VycmVudFNjYWxlOiBcIiArIHRoaXMuZGVidWcubmYuZm9ybWF0KGN1cnJlbnRTY2FsZSkgKyBcIiAtPiBcIiArIHRoaXMuZGVidWcubmYuZm9ybWF0KG5ld1NjYWxlKSArIFwiLCB2dHM6IFwiICsgdGhpcy5kZWJ1Zy5uZi5mb3JtYXQodnRzKSArIFwiIChcIiArIHZ0c1NvdXJjZSArIFwiKVwiXHJcbiAgICAgICAgKyBcIiwgb3JpZ2luOiBcIiArIHRoaXMuZGVidWcubmYuZm9ybWF0KG9yaWdpbi54KSArIFwiIChcIiArIHRoaXMuZGVidWcubmYuZm9ybWF0KG94cCAqIDEwMCkgKyBcIikgLyBcIiArIHRoaXMuZGVidWcubmYuZm9ybWF0KG9yaWdpbi55KSArIFwiIChcIiArIHRoaXMuZGVidWcubmYuZm9ybWF0KG95cCAqIDEwMCkgKyBcIilcIlxyXG4gICAgICAgICsgXCIsIGRlYnVnLngvWTogXCIgKyB0aGlzLmRlYnVnLm5mLmZvcm1hdCh0aGlzLmRlYnVnLngpICsgXCIgLyBcIiArICsgdGhpcy5kZWJ1Zy5uZi5mb3JtYXQodGhpcy5kZWJ1Zy55KVxyXG4gICAgICAgICsgXCIsIGlzWm9vbWluZzogXCIgKyB0aGlzLmlzWm9vbWluZygpXHJcbiAgICAgICAgKyBcIiwgZGltczogXCIsIGRpbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5fc2V0U2NhbGUobmV3U2NhbGUsIHRydWUpO1xyXG5cclxuICAgIGxldCBkaW1zQWZ0ZXIgPSB0aGlzLmdldERpbWVuc2lvbnModGhpcy52aWV3ZXIpO1xyXG4gICAgbGV0IGRpbURpZmYgPSB0aGlzLmdldERpbURpZmYoZGltcywgZGltc0FmdGVyKTtcclxuXHJcbiAgICBsZXQgZGltc0NvcnI6IGFueSA9IHtcclxuICAgICAgbGVmdDogcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKHRoaXMudmlld2VyKS5sZWZ0KSB8fCAwLFxyXG4gICAgICB0b3A6IHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLnZpZXdlcikudG9wKSB8fCAwLFxyXG4gICAgfVxyXG4gICAgZGltc0NvcnIubGVmdERpZmYgPSAtIChkaW1EaWZmLmVsZW0ud2lkdGggKiBveHApO1xyXG4gICAgZGltc0NvcnIudG9wRGlmZiA9IC0gKGRpbURpZmYuZWxlbS5oZWlnaHQgKiBveXApO1xyXG5cclxuICAgIGRpbXNDb3JyLmxlZnROZXh0ID0gZGltc0NvcnIubGVmdCArIGRpbXNDb3JyLmxlZnREaWZmO1xyXG4gICAgZGltc0NvcnIudG9wTmV4dCA9IGRpbXNDb3JyLnRvcCArIGRpbXNDb3JyLnRvcERpZmY7XHJcblxyXG4gICAgaWYgKHJlc2V0LmxlZnQpIHtcclxuICAgICAgaWYgKHRoaXMuZGVidWcuZW5hYmxlZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGltc0NvcnIubGVmdE5leHQ6IFwiICsgdGhpcy5kZWJ1Zy5uZi5mb3JtYXQoZGltc0NvcnIubGVmdE5leHQpICsgXCIgLT4gXCIgKyB0aGlzLmRlYnVnLm5mLmZvcm1hdChyZXNldC5sZWZ0KSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkaW1zQ29yci50b3BOZXh0OiBcIiArIHRoaXMuZGVidWcubmYuZm9ybWF0KGRpbXNDb3JyLnRvcE5leHQpICsgXCIgLT4gXCIgKyB0aGlzLmRlYnVnLm5mLmZvcm1hdChyZXNldC50b3ApKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGltc0NvcnIubGVmdE5leHQgPSByZXNldC5sZWZ0O1xyXG4gICAgICBkaW1zQ29yci50b3BOZXh0ID0gcmVzZXQudG9wO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnZpZXdlci5zdHlsZS5sZWZ0ID0gZGltc0NvcnIubGVmdE5leHQgKyBcInB4XCI7XHJcbiAgICB0aGlzLnZpZXdlci5zdHlsZS50b3AgPSBkaW1zQ29yci50b3BOZXh0ICsgXCJweFwiO1xyXG5cclxuICAgIGlmICh0aGlzLmRlYnVnLmVuYWJsZWQpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJzZXRWaWV3ZXJTY2FsZTIsIG5ld0N1cnJlbnRTY2FsZTogXCIgKyB0aGlzLmRlYnVnLm5mLmZvcm1hdChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuY3VycmVudFNjYWxlKVxyXG4gICAgICAgICsgXCIsIGlzWm9vbWluZzogXCIgKyB0aGlzLmlzWm9vbWluZygpXHJcbiAgICAgICAgKyBcIiwgZGltc0FmdGVyOiBcIiwgZGltc0FmdGVyLFxyXG4gICAgICAgIFwiLCBkaW1EaWZmOiBcIiwgZGltRGlmZixcclxuICAgICAgICBcIiwgZGltc0NvcnI6IFwiLCBkaW1zQ29yclxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGlzWm9vbWluZygpIHtcclxuICAgIGxldCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogYW55ID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zOiBJUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucztcclxuXHJcbiAgICBsZXQgY3VycmVudFNjYWxlID0gUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLmN1cnJlbnRTY2FsZTtcclxuXHJcbiAgICBsZXQgY3pmID0gTWF0aC5yb3VuZChjdXJyZW50U2NhbGUgKiAxMDAwMCk7XHJcblxyXG4gICAgbGV0IG1pblpvb20gPSBNYXRoLnJvdW5kKE51bWJlcihQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuZ2V0KCdtaW5ab29tJykpICogMTAwMDApO1xyXG4gICAgLy8gIGNvbnNvbGUubG9nKFwiaXNab29taW5nLCBjemY6IFwiICArIGN6ZiArIFwiLCBtaW5ab29tOiBcIiArIG1pblpvb20gKyBcIjsgaXNaOiBcIiArIChjemYgPiBtaW5ab29tKSk7XHJcbiAgICByZXR1cm4gY3pmID4gbWluWm9vbTtcclxuICB9XHJcblxyXG4gIG9uVmlld2VyV2hlZWwoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmRpc2FibGVFdmVudEhhbmRsaW5nKSByZXR1cm47XHJcbiAgICBpZiAodGhpcy5kZWJ1Zy5lbmFibGVkKSBjb25zb2xlLmxvZyhcIm9uV2hlZWw6IGV2ZW50OiBcIiwgZXZlbnQpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cclxuICAgICAgdGhpcy51cGRhdGVWaWV3ZXJQb3NpdGlvbigpO1xyXG4gICAgfSwgMilcclxuXHJcbiAgfTtcclxuXHJcbiAgcHVibGljIGluaXRpYWxpemVSZWxhdGl2ZUNvb3JkcygpOiB2b2lkIHtcclxuXHJcbiAgICBsZXQgdmlld2VyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdlckNvbnRhaW5lcicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgdGhpcy52aWV3ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld2VyJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgdGhpcy5jb21wb25lbnQucm9vdC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJyZWxhdGl2ZS1jb29yZHNcIik7XHJcblxyXG4gICAgbGV0IHN0Zkl0ZW1IYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHN0Zkl0ZW1IYWNrLmNsYXNzTGlzdC5hZGQoXCJzdGZfX2l0ZW1cIik7XHJcbiAgICB2aWV3ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RmSXRlbUhhY2spO1xyXG5cclxuXHJcbiAgICBpZiAodGhpcy5kZWJ1Zy5lbmFibGVkKSBjb25zb2xlLmxvZyhcImluaXRpYWxpemVSZWxhdGl2ZUNvb3JkczogaXNNb2JpbGU6IFwiICsgdGhpcy5pc01vYmlsZSgpKTtcclxuXHJcbiAgICBsZXQgb25Db250YWluZXJTY29sbCA9IChldmVudDogRXZlbnQpID0+IHtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcIm9uQ29udGFpbmVyU2NvbGw6IGwvdDogXCIgKyB2aWV3ZXJDb250YWluZXIuc2Nyb2xsTGVmdCArIFwiIC8gXCIgKyB2aWV3ZXJDb250YWluZXIuc2Nyb2xsVG9wICsgXCIsIGV2ZW50OiBcIiAsIGV2ZW50KTtcclxuICAgICAgaWYgKHZpZXdlckNvbnRhaW5lci5zY3JvbGxMZWZ0ICE9IDAgfHwgdmlld2VyQ29udGFpbmVyLnNjcm9sbFRvcCAhPSAwKSB2aWV3ZXJDb250YWluZXIuc2Nyb2xsKHsgbGVmdDogMCwgdG9wOiAwIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdmlld2VyQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uQ29udGFpbmVyU2NvbGwpO1xyXG5cclxuXHJcbiAgICB0aGlzLmNvbXBvbmVudC5wYWdlc0xvYWRlZC5zdWJzY3JpYmUoYXN5bmMgKGV2ZW50OiBQYWdlc0xvYWRlZEV2ZW50KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmRlYnVnLmVuYWJsZWQpIGNvbnNvbGUubG9nKFwiaW5pdGlhbGl6ZVJlbGF0aXZlQ29vcmRzOiBzY3JvbGxUb3A6IFwiLCB2aWV3ZXJDb250YWluZXIuc2Nyb2xsVG9wKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJwYWdlQ2hhbmdlOiBwYWdlczogXCIsIHRoaXMuZ2V0Q3VycmVudFBhZ2VzSW5WaWV3KCkpXHJcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3ZXJQb3NpdGlvbih0cnVlKTtcclxuICAgICAgfSwgMTApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb21wb25lbnQucGFnZUNoYW5nZS5zdWJzY3JpYmUoYXN5bmMgKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgaWYgKHRoaXMuZGVidWcuZW5hYmxlZCkgY29uc29sZS5sb2coXCJwYWdlQ2hhbmdlOiBldmVudDogXCIsIGV2ZW50LCBcIiwgZGltczogXCIsIHRoaXMuZ2V0RGltZW5zaW9ucyh0aGlzLnZpZXdlcikpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcInBhZ2VDaGFuZ2U6IHBhZ2VzOiBcIiwgdGhpcy5nZXRDdXJyZW50UGFnZXNJblZpZXcoKSlcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJwYWdlQ2hhbmdlOiBwYWdlczogXCIsIHRoaXMuZ2V0Q3VycmVudFBhZ2VzSW5WaWV3KCkpXHJcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3ZXJQb3NpdGlvbih0cnVlKTtcclxuICAgICAgfSwgMTApO1xyXG5cclxuICAgIH0pO1xyXG4gICAgLy8gdGhpcy5jb21wb25lbnQuem9vbUNoYW5nZS5zdWJzY3JpYmUoYXN5bmMgKGV2ZW50OiBhbnkpID0+IHtcclxuICAgIC8vICAgY29uc29sZS5sb2coXCJ6b29tQ2hhbmdlOiBldmVudDogXCIsIGV2ZW50KTtcclxuICAgIC8vIH0pO1xyXG4gICAgdGhpcy5jb21wb25lbnQuY3VycmVudFpvb21GYWN0b3Iuc3Vic2NyaWJlKGFzeW5jIChldmVudDogYW55KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmRlYnVnLmVuYWJsZWQpIGNvbnNvbGUubG9nKFwiY3VycmVudFpvb21GYWN0b3I6IGV2ZW50OiBcIiwgZXZlbnQpO1xyXG4gICAgICAvLyB0aGlzLnVwZGF0ZVZpZXdlclBvc2l0aW9uKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaXNNb2JpbGUoKSkge1xyXG5cclxuICAgICAgLy8gbGV0IG9uV2hlZWwgPSBcclxuXHJcblxyXG4gICAgICB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgICAvLyBQYW5uaW5nIHN1cHBvcnQgb24gZGVza3RvcFxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuYm91bmRPblZpZXdlck1vdXNlRG93bik7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5ib3VuZE9uVmlld2VyTW91c2VNb3ZlLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmJvdW5kT25WaWV3ZXJNb3VzZVVwKTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCB0aGlzLmJvdW5kT25WaWV3ZXJXaGVlbCwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcclxuXHJcbiAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuYm91bmRPblZpZXdlclRvdWNoU3RhcnQpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuYm91bmRPblZpZXdlclRvdWNoTW92ZSwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuYm91bmRPblZpZXdlclRvdWNoRW5kKTtcclxuXHJcbiAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgaWYgKHRoaXMuZGVidWcuZW5hYmxlZCkge1xyXG5cclxuICAgICAgbGV0IG9uS2V5dXAgPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uS2V5dXA6IGV2ZW50LmtleTogXCIgKyBldmVudC5rZXkpO1xyXG4gICAgICAgIGxldCBkaW1zID0gdGhpcy5nZXREaW1lbnNpb25zKHRoaXMudmlld2VyKTtcclxuICAgICAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogYW55ID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG5cclxuICAgICAgICBpZiAoZXZlbnQua2V5ID09IFwicVwiKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICB0aGlzLnZpZXdlci5zdHlsZS50cmFuc2Zvcm0gPSBgbm9uZWA7XHJcbiAgICAgICAgICB0aGlzLnZpZXdlci5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSBgdW5zZXRgO1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50U2NhbGUgPSAxLjA7XHJcblxyXG4gICAgICAgICAgbGV0IGRpbXNBZnRlciA9IHRoaXMuZ2V0RGltZW5zaW9ucyh0aGlzLnZpZXdlcik7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImRpbXNBZnRlcjogXCIsIGRpbXNBZnRlci5zY2FsZWQpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJkaW1zRGlmZjogXCIsIHRoaXMuZ2V0RGltRGlmZihkaW1zLCBkaW1zQWZ0ZXIpLnNjYWxlZCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09IFwid1wiKSB7XHJcbiAgICAgICAgICBsZXQgb3JpZ2luWCA9IHRoaXMuZGVidWcueCB8fCBkaW1zLnBhcmVudC53aWR0aCAvIDI7XHJcbiAgICAgICAgICBsZXQgb3JpZ2luWSA9IHRoaXMuZGVidWcueSB8fCBkaW1zLnBhcmVudC5oZWlnaHQgLyAyO1xyXG4gICAgICAgICAgb3JpZ2luWCAtPSBkaW1zLmVsZW0ubGVmdCAtIGRpbXMucGFyZW50LmxlZnQ7XHJcbiAgICAgICAgICBvcmlnaW5ZIC09IGRpbXMuZWxlbS50b3AgLSBkaW1zLnBhcmVudC50b3A7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTY2FsZSA9IDEuMztcclxuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIm9yaWdpblgvWTogXCIgKyBvcmlnaW5YICsgXCIgLyBcIiArIG9yaWdpblkgKyBcIiwgc2NhbGU6IFwiICsgdGhpcy5jdXJyZW50U2NhbGUgKyBcIjsgZGltczogXCIsIGRpbXMpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJvcmlnaW5YL1kgKCUpOiBcIiArIHRoaXMuZGVidWcubmYuZm9ybWF0KG9yaWdpblggLyBkaW1zLmVsZW0ud2lkdGggKiAxMDApICsgXCIgLyBcIiArIHRoaXMuZGVidWcubmYuZm9ybWF0KG9yaWdpblkgLyBkaW1zLmVsZW0uaGVpZ2h0ICogMTAwKSk7XHJcblxyXG5cclxuICAgICAgICAgIHRoaXMudmlld2VyLnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgke3RoaXMuY3VycmVudFNjYWxlfSlgO1xyXG4gICAgICAgICAgdGhpcy52aWV3ZXIuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gYCR7b3JpZ2luWH1weCAke29yaWdpbll9cHhgO1xyXG5cclxuICAgICAgICAgIGxldCBkaW1zQWZ0ZXIgPSB0aGlzLmdldERpbWVuc2lvbnModGhpcy52aWV3ZXIpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJkaW1zQWZ0ZXI6IFwiLCBkaW1zQWZ0ZXIuZWxlbSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImRpbXNEaWZmOiBcIiwgdGhpcy5nZXREaW1EaWZmKGRpbXMsIGRpbXNBZnRlcikuZWxlbSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09IFwiZVwiKSB7XHJcblxyXG4gICAgICAgICAgLy8gdGhpcy52aWV3ZXIuc3R5bGUudHJhbnNmb3JtID0gYG5vbmVgO1xyXG4gICAgICAgICAgLy8gdGhpcy52aWV3ZXIuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gYHVuc2V0YDtcclxuXHJcblxyXG4gICAgICAgICAgbGV0IGN1cnJlbnRTY2FsZSA9IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5jdXJyZW50U2NhbGU7XHJcbiAgICAgICAgICBsZXQgbmV3U2NhbGUgPSBjdXJyZW50U2NhbGUgKiB0aGlzLmN1cnJlbnRTY2FsZTtcclxuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnRTY2FsZTogXCIgKyBjdXJyZW50U2NhbGUgKyBcIiAtPiBcIiArIG5ld1NjYWxlICsgXCIsIGNzOiBcIiArIHRoaXMuY3VycmVudFNjYWxlICsgXCIsIGRpbXM6IFwiLCBkaW1zKTtcclxuXHJcblxyXG4gICAgICAgICAgLy8gUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLl9zZXRTY2FsZShuZXdTY2FsZSwgdHJ1ZSk7XHJcbiAgICAgICAgICB0aGlzLnNldFZpZXdlclNjYWxlKG5ld1NjYWxlLCB7IHJlc2V0VHJhbnNmb3JtOiB0cnVlIH0pO1xyXG5cclxuICAgICAgICAgIGxldCBkaW1zQWZ0ZXIgPSB0aGlzLmdldERpbWVuc2lvbnModGhpcy52aWV3ZXIpO1xyXG5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGltc0FmdGVyOiBcIiwgZGltc0FmdGVyLmVsZW0pO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJkaW1zRGlmZjogXCIsIHRoaXMuZ2V0RGltRGlmZihkaW1zLCBkaW1zQWZ0ZXIpLmVsZW0pO1xyXG5cclxuICAgICAgICAgIC8vIH0gZWxzZSAgaWYgKGV2ZW50LmtleSA9PSBcInJcIikgeyAvLyBSb3RhdGVcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PSBcInNcIikge1xyXG4gICAgICAgICAgbGV0IG9yaWdpblggPSB0aGlzLmRlYnVnLnggfHwgZGltcy5wYXJlbnQud2lkdGggLyAyO1xyXG4gICAgICAgICAgbGV0IG9yaWdpblkgPSB0aGlzLmRlYnVnLnkgfHwgZGltcy5wYXJlbnQuaGVpZ2h0IC8gMjtcclxuICAgICAgICAgIG9yaWdpblggLT0gZGltcy5lbGVtLmxlZnQgLSBkaW1zLnBhcmVudC5sZWZ0O1xyXG4gICAgICAgICAgb3JpZ2luWSAtPSBkaW1zLmVsZW0udG9wIC0gZGltcy5wYXJlbnQudG9wO1xyXG5cclxuICAgICAgICAgIC8vIHJlc2V0IHBkZlZpZXdlci5zY2FsZVxyXG4gICAgICAgICAgbGV0IGN1cnJlbnRTY2FsZSA9IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5jdXJyZW50U2NhbGU7XHJcbiAgICAgICAgICBsZXQgcHJldlNjYWxlID0gY3VycmVudFNjYWxlIC8gdGhpcy5jdXJyZW50U2NhbGU7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImN1cnJlbnRTY2FsZTogXCIgKyBjdXJyZW50U2NhbGUgKyBcIiAtPiBcIiArIHByZXZTY2FsZSArIFwiLCBvcmlnaW5YL1k6IFwiICsgb3JpZ2luWCArIFwiIC8gXCIgKyBvcmlnaW5ZKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwib3JpZ2luWC9ZOiBcIiArIG9yaWdpblggKyBcIiAvIFwiICsgb3JpZ2luWSArIFwiLCBzY2FsZTogXCIgKyBjdXJyZW50U2NhbGUgKyBcIiAtPiBcIiArIHByZXZTY2FsZSArIFwiLCB0LmNzOiBcIiArIHRoaXMuY3VycmVudFNjYWxlICsgXCI7IGRpbXM6IFwiLCBkaW1zKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwib3JpZ2luWC9ZICglKTogXCIgKyAob3JpZ2luWCAvIGRpbXMuZWxlbS53aWR0aCkgKyBcIiAvIFwiICsgKG9yaWdpblkgLyBkaW1zLmVsZW0uaGVpZ2h0KSk7XHJcblxyXG4gICAgICAgICAgLy8gUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLl9zZXRTY2FsZShwcmV2U2NhbGUsIHRydWUpO1xyXG4gICAgICAgICAgaWYgKGN1cnJlbnRTY2FsZSAhPSBwcmV2U2NhbGUpIHRoaXMuc2V0Vmlld2VyU2NhbGUocHJldlNjYWxlKTtcclxuXHJcblxyXG4gICAgICAgICAgb3JpZ2luWCA9IHRoaXMuZGVidWcueCB8fCBkaW1zLnBhcmVudC53aWR0aCAvIDI7XHJcbiAgICAgICAgICBvcmlnaW5ZID0gdGhpcy5kZWJ1Zy55IHx8IGRpbXMucGFyZW50LmhlaWdodCAvIDI7XHJcbiAgICAgICAgICBsZXQgZGltc0FmdGVyID0gdGhpcy5nZXREaW1lbnNpb25zKHRoaXMudmlld2VyKTtcclxuICAgICAgICAgIG9yaWdpblggLT0gZGltc0FmdGVyLmVsZW0ubGVmdCAtIGRpbXNBZnRlci5wYXJlbnQubGVmdDtcclxuICAgICAgICAgIG9yaWdpblkgLT0gZGltc0FmdGVyLmVsZW0udG9wIC0gZGltc0FmdGVyLnBhcmVudC50b3A7XHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJvcmlnaW5YL1k6IFwiICsgb3JpZ2luWCArIFwiIC8gXCIgKyBvcmlnaW5ZICsgXCIsIHNjYWxlOiBcIiArIGN1cnJlbnRTY2FsZSArIFwiIC0+IFwiICsgcHJldlNjYWxlICsgXCIsIHQuY3M6IFwiICsgdGhpcy5jdXJyZW50U2NhbGUgKyBcIjsgZGltc0FmdGVyOiBcIiwgZGltc0FmdGVyKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwib3JpZ2luWC9ZICglKTogXCIgKyAob3JpZ2luWCAvIGRpbXNBZnRlci5lbGVtLndpZHRoKSArIFwiIC8gXCIgKyAob3JpZ2luWSAvIGRpbXNBZnRlci5lbGVtLmhlaWdodCkpO1xyXG5cclxuICAgICAgICAgIHRoaXMudmlld2VyLnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgke3RoaXMuY3VycmVudFNjYWxlfSlgO1xyXG4gICAgICAgICAgdGhpcy52aWV3ZXIuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gYCR7b3JpZ2luWH1weCAke29yaWdpbll9cHhgO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PSBcInRcIikge1xyXG5cclxuICAgICAgICAgIC8vIGJhcmUgUERGLmpzLXpvb21cclxuICAgICAgICAgIGxldCBvcmlnaW5YID0gdGhpcy5kZWJ1Zy54IHx8IGRpbXMucGFyZW50LndpZHRoIC8gMjtcclxuICAgICAgICAgIGxldCBvcmlnaW5ZID0gdGhpcy5kZWJ1Zy55IHx8IGRpbXMucGFyZW50LmhlaWdodCAvIDI7XHJcbiAgICAgICAgICBvcmlnaW5YIC09IGRpbXMuZWxlbS5sZWZ0IC0gZGltcy5wYXJlbnQubGVmdDtcclxuICAgICAgICAgIG9yaWdpblkgLT0gZGltcy5lbGVtLnRvcCAtIGRpbXMucGFyZW50LnRvcDtcclxuXHJcbiAgICAgICAgICBpZiAodGhpcy5jdXJyZW50U2NhbGUgPT0gMS4wKSB0aGlzLmN1cnJlbnRTY2FsZSA9IDEuMztcclxuXHJcbiAgICAgICAgICBsZXQgY3VycmVudFNjYWxlID0gUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLmN1cnJlbnRTY2FsZTtcclxuICAgICAgICAgIGxldCBuZXdTY2FsZSA9IGN1cnJlbnRTY2FsZSAqIHRoaXMuY3VycmVudFNjYWxlO1xyXG4gICAgICAgICAgdGhpcy5zZXRWaWV3ZXJTY2FsZShuZXdTY2FsZSwgeyBvcmlnaW46IHsgeDogb3JpZ2luWCwgeTogb3JpZ2luWSB9IH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09IFwieVwiKSB7XHJcblxyXG4gICAgICAgICAgbGV0IG9yaWdpblggPSB0aGlzLmRlYnVnLnggfHwgZGltcy5wYXJlbnQud2lkdGggLyAyO1xyXG4gICAgICAgICAgbGV0IG9yaWdpblkgPSB0aGlzLmRlYnVnLnkgfHwgZGltcy5wYXJlbnQuaGVpZ2h0IC8gMjtcclxuICAgICAgICAgIG9yaWdpblggLT0gZGltcy5lbGVtLmxlZnQgLSBkaW1zLnBhcmVudC5sZWZ0O1xyXG4gICAgICAgICAgb3JpZ2luWSAtPSBkaW1zLmVsZW0udG9wIC0gZGltcy5wYXJlbnQudG9wO1xyXG5cclxuICAgICAgICAgIGxldCBjdXJyZW50U2NhbGUgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuY3VycmVudFNjYWxlO1xyXG4gICAgICAgICAgbGV0IHByZXZTY2FsZSA9IGN1cnJlbnRTY2FsZSAvIHRoaXMuY3VycmVudFNjYWxlO1xyXG5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwieSwgY3VycmVudFNjYWxlOiBcIiArIGN1cnJlbnRTY2FsZSArIFwiOyBwcmV2U2NhbGU6IFwiICsgcHJldlNjYWxlKTtcclxuICAgICAgICAgIC8vIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5fc2V0U2NhbGUocHJldlNjYWxlLCB0cnVlKTtcclxuICAgICAgICAgIHRoaXMuc2V0Vmlld2VyU2NhbGUocHJldlNjYWxlLCB7IG9yaWdpbjogeyB4OiBvcmlnaW5YLCB5OiBvcmlnaW5ZIH0gfSk7XHJcbiAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRTY2FsZSA9IDEuMDtcclxuXHJcbiAgICAgICAgICAvLyBsZXQgZGltc0FmdGVyID0gdGhpcy5nZXREaW1lbnNpb25zKHRoaXMudmlld2VyKTtcclxuXHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRpbXNBZnRlcjogXCIsIGRpbXNBZnRlci5lbGVtKTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZGltc0RpZmY6IFwiLCB0aGlzLmdldERpbURpZmYoZGltcywgZGltc0FmdGVyKS5lbGVtKTtcclxuXHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09IFwidVwiKSB7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZVZpZXdlclBvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09IFwiaVwiKSB7XHJcbiAgICAgICAgICBsZXQgY29yckxlZnQgPSAyMDA7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImJlZm9yZUNvcnI6IFwiLCB0aGlzLmdldERpbWVuc2lvbnModGhpcy52aWV3ZXIpLmVsZW0pO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLnZpZXdlci5zdHlsZTogXCIsIHRoaXMudmlld2VyLnN0eWxlKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy52aWV3ZXIuc3R5bGUubGVmdDogXCIgKyB0aGlzLnZpZXdlci5zdHlsZS5sZWZ0ICsgXCIgLT4gXCIgKyBjb3JyTGVmdCk7XHJcbiAgICAgICAgICB0aGlzLnZpZXdlci5zdHlsZS5sZWZ0ID0gY29yckxlZnQgKyBcInB4XCI7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImFmdGVyQ29ycjogXCIsIHRoaXMuZ2V0RGltZW5zaW9ucyh0aGlzLnZpZXdlcikuZWxlbSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMudmlld2VyLnN0eWxlOiBcIiwgdGhpcy52aWV3ZXIuc3R5bGUpO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PSBcIm9cIikge1xyXG5cclxuICAgICAgICAgIGxldCBvcmlnaW5YID0gdGhpcy5kZWJ1Zy54IHx8IGRpbXMucGFyZW50LndpZHRoIC8gMjtcclxuICAgICAgICAgIGxldCBvcmlnaW5ZID0gdGhpcy5kZWJ1Zy55IHx8IGRpbXMucGFyZW50LmhlaWdodCAvIDI7XHJcbiAgICAgICAgICBvcmlnaW5YIC09IGRpbXMuZWxlbS5sZWZ0IC0gZGltcy5wYXJlbnQubGVmdDtcclxuICAgICAgICAgIG9yaWdpblkgLT0gZGltcy5lbGVtLnRvcCAtIGRpbXMucGFyZW50LnRvcDtcclxuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIm9yaWdpblgvWTogXCIgKyBvcmlnaW5YICsgXCIgLyBcIiArIG9yaWdpblkgKyBcIiwgc2NhbGU6IFwiICsgdGhpcy5jdXJyZW50U2NhbGUpO1xyXG5cclxuICAgICAgICAgIHRoaXMudmlld2VyLnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgke3RoaXMuY3VycmVudFNjYWxlfSlgO1xyXG4gICAgICAgICAgdGhpcy52aWV3ZXIuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gYCR7b3JpZ2luWH1weCAke29yaWdpbll9cHhgO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PSBcInBcIikge1xyXG5cclxuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImRpbXM6IFwiLCBkaW1zKTtcclxuICAgICAgICAgIC8vIGxldCBvcmlnaW5YID0gdGhpcy5kZWJ1Zy54IHx8IGRpbXMucGFyZW50LndpZHRoIC8gMjsgXHJcbiAgICAgICAgICAvLyBsZXQgb3JpZ2luWSA9IHRoaXMuZGVidWcueSB8fCBkaW1zLnBhcmVudC5oZWlnaHQgLyAyOyBcclxuXHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJnZXRWaWV3ZXJUcmFuc2Zvcm1TY2FsZTogXCIsIHRoaXMuZ2V0Vmlld2VyVHJhbnNmb3JtU2NhbGUoXCJrZXkgPT0gcFwiKSk7XHJcblxyXG4gICAgICAgICAgdGhpcy52aWV3ZXIuc3R5bGUudHJhbnNmb3JtID0gYG5vbmVgO1xyXG4gICAgICAgICAgdGhpcy52aWV3ZXIuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gYHVuc2V0YDtcclxuXHJcbiAgICAgICAgICBsZXQgZGltc0FmdGVyID0gdGhpcy5nZXREaW1lbnNpb25zKHRoaXMudmlld2VyKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGltc0FmdGVyOiBcIiwgZGltc0FmdGVyKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGltc0RpZmY6IFwiLCB0aGlzLmdldERpbURpZmYoZGltcywgZGltc0FmdGVyKSk7XHJcblxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PSBcImZcIikge1xyXG5cclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT0gXCJkXCIpIHtcclxuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImRpbXM6IFwiLCB0aGlzLmdldERpbWVuc2lvbnModGhpcy52aWV3ZXIpKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT0gXCJ6XCIpIHtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT0gXCJ4XCIpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgb25LZXl1cCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveVJlbGF0aXZlQ29vcmRzKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzTW9iaWxlKCkpIHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5ib3VuZE9uVmlld2VyTW91c2VEb3duKTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5ib3VuZE9uVmlld2VyTW91c2VNb3ZlKTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRPblZpZXdlck1vdXNlVXApO1xyXG5cclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCB0aGlzLmJvdW5kT25WaWV3ZXJXaGVlbCk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5ib3VuZE9uVmlld2VyVG91Y2hTdGFydCk7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmJvdW5kT25WaWV3ZXJUb3VjaE1vdmUpO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmJvdW5kT25WaWV3ZXJUb3VjaEVuZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
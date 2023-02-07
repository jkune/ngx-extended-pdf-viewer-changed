export const css = `:root{--form-anchor-hover-color: rgba(255, 255, 0, 1);--annotation-unfocused-field-background: unset;--form-widget-border-color: lightgrey;--form-widget-color: lightgrey;--form-widget-background-color: black;--form-check-color: lightgrey;--annotation-popup-background-color: rgba(255, 255, 153, 1);--annotation-popup-shadow-color: rgba(136, 136, 136, 1);--annotation-popup-border-top-color: lightgrey;--xfa-layer-highlight: rgba(239, 203, 237, 1);--xfa-unfocused-field-background: url("data:image/svg+xml;charset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13);'/></svg>");--xfa-highlight-selected-background-color: rgba(203, 223, 203, 1);--xfa-selection-background-color: rgba(0, 0, 255, 1)} :root{--annotation-unfocused-field-background: url("data:image/svg+xml;charset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13);'/></svg>")}@media(forced-colors: active){.annotationLayer .textWidgetAnnotation input:required,.annotationLayer .textWidgetAnnotation textarea:required,.annotationLayer .choiceWidgetAnnotation select:required,.annotationLayer .buttonWidgetAnnotation.checkBox input:required,.annotationLayer .buttonWidgetAnnotation.radioButton input:required{outline:1.5px solid selectedItem}}.annotationLayer{position:absolute;top:0;left:0;pointer-events:none;transform-origin:0 0}.annotationLayer section{position:absolute;text-align:initial;pointer-events:auto;box-sizing:border-box;transform-origin:0 0}.annotationLayer .linkAnnotation>a,.annotationLayer .buttonWidgetAnnotation.pushButton>a{position:absolute;font-size:1em;top:0;left:0;width:100%;height:100%}.annotationLayer .buttonWidgetAnnotation.pushButton>canvas{width:100%;height:100%}.annotationLayer .linkAnnotation>a:hover,.annotationLayer .buttonWidgetAnnotation.pushButton>a:hover{opacity:.2;background:#ff0;box-shadow:0 2px 10px #ff0}.annotationLayer .textAnnotation img{position:absolute;cursor:pointer;width:100%;height:100%}.annotationLayer .textWidgetAnnotation input,.annotationLayer .textWidgetAnnotation textarea,.annotationLayer .choiceWidgetAnnotation select,.annotationLayer .buttonWidgetAnnotation.checkBox input,.annotationLayer .buttonWidgetAnnotation.radioButton input{background-image:var(--annotation-unfocused-field-background);border:1px solid rgba(0,0,0,0);box-sizing:border-box;font:calc(9px*var(--scale-factor)) sans-serif;height:100%;margin:0;vertical-align:top;width:100%}.annotationLayer .textWidgetAnnotation input:required,.annotationLayer .textWidgetAnnotation textarea:required,.annotationLayer .choiceWidgetAnnotation select:required,.annotationLayer .buttonWidgetAnnotation.checkBox input:required,.annotationLayer .buttonWidgetAnnotation.radioButton input:required{outline:1.5px solid red}.annotationLayer .choiceWidgetAnnotation select option{padding:0}.annotationLayer .buttonWidgetAnnotation.radioButton input{border-radius:50%}.annotationLayer .textWidgetAnnotation textarea{resize:none}.annotationLayer .textWidgetAnnotation input[disabled],.annotationLayer .textWidgetAnnotation textarea[disabled],.annotationLayer .choiceWidgetAnnotation select[disabled],.annotationLayer .buttonWidgetAnnotation.checkBox input[disabled],.annotationLayer .buttonWidgetAnnotation.radioButton input[disabled]{background:none;border:1px solid rgba(0,0,0,0);cursor:not-allowed}.annotationLayer .textWidgetAnnotation input:hover,.annotationLayer .textWidgetAnnotation textarea:hover,.annotationLayer .choiceWidgetAnnotation select:hover,.annotationLayer .buttonWidgetAnnotation.checkBox input:hover,.annotationLayer .buttonWidgetAnnotation.radioButton input:hover{border:1px solid #000}.annotationLayer .textWidgetAnnotation input:focus,.annotationLayer .textWidgetAnnotation textarea:focus,.annotationLayer .choiceWidgetAnnotation select:focus{background:none;border:1px solid rgba(0,0,0,0)}.annotationLayer .textWidgetAnnotation input :focus,.annotationLayer .textWidgetAnnotation textarea :focus,.annotationLayer .choiceWidgetAnnotation select :focus,.annotationLayer .buttonWidgetAnnotation.checkBox :focus,.annotationLayer .buttonWidgetAnnotation.radioButton :focus{background-image:none;background-color:rgba(0,0,0,0);outline:auto}.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before,.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after,.annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before{background-color:CanvasText;content:"";display:block;position:absolute}.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before,.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after{height:80%;left:45%;width:1px}.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before{transform:rotate(45deg)}.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after{transform:rotate(-45deg)}.annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before{border-radius:50%;height:50%;left:30%;top:20%;width:50%}.annotationLayer .textWidgetAnnotation input.comb{font-family:monospace;padding-left:2px;padding-right:0}.annotationLayer .textWidgetAnnotation input.comb:focus{width:103%}.annotationLayer .buttonWidgetAnnotation.checkBox input,.annotationLayer .buttonWidgetAnnotation.radioButton input{appearance:none}.annotationLayer .popupTriggerArea{height:100%;width:100%}.annotationLayer .popupWrapper{position:absolute;font-size:calc(9px*var(--scale-factor));width:100%;min-width:calc(180px*var(--scale-factor));pointer-events:none}.annotationLayer .popup{position:absolute;z-index:200;max-width:calc(180px*var(--scale-factor));background-color:#ff9;box-shadow:0 calc(2px*var(--scale-factor)) calc(5px*var(--scale-factor)) #888;border-radius:calc(2px*var(--scale-factor));padding:calc(6px*var(--scale-factor));margin-left:calc(5px*var(--scale-factor));cursor:pointer;font:message-box;white-space:normal;word-wrap:break-word;pointer-events:auto}.annotationLayer .popup>*{font-size:calc(9px*var(--scale-factor))}.annotationLayer .popup h1{display:inline-block}.annotationLayer .popupDate{display:inline-block;margin-left:calc(5px*var(--scale-factor))}.annotationLayer .popupContent{border-top:1px solid #333;margin-top:calc(2px*var(--scale-factor));padding-top:calc(2px*var(--scale-factor))}.annotationLayer .richText>*{white-space:pre-wrap;font-size:calc(9px*var(--scale-factor))}.annotationLayer .highlightAnnotation,.annotationLayer .underlineAnnotation,.annotationLayer .squigglyAnnotation,.annotationLayer .strikeoutAnnotation,.annotationLayer .freeTextAnnotation,.annotationLayer .lineAnnotation svg line,.annotationLayer .squareAnnotation svg rect,.annotationLayer .circleAnnotation svg ellipse,.annotationLayer .polylineAnnotation svg polyline,.annotationLayer .polygonAnnotation svg polygon,.annotationLayer .caretAnnotation,.annotationLayer .inkAnnotation svg polyline,.annotationLayer .stampAnnotation,.annotationLayer .fileAttachmentAnnotation{cursor:pointer}.annotationLayer section svg{position:absolute;width:100%;height:100%}.annotationLayer .annotationTextContent{position:absolute;width:100%;height:100%;opacity:0;color:rgba(0,0,0,0);user-select:none;pointer-events:none}.annotationLayer .annotationTextContent span{width:100%;display:inline-block} .xfaLayer .highlight{margin:-1px;padding:1px;background-color:var(--xfa-layer-highlight);border-radius:4px}.xfaLayer .highlight.appended{position:initial}.xfaLayer .highlight.begin{border-radius:4px 0 0 4px}.xfaLayer .highlight.end{border-radius:0 4px 4px 0}.xfaLayer .highlight.middle{border-radius:0}.xfaLayer .highlight.selected{background-color:var(--xfa-highlight-selected-background-color)}.xfaLayer ::selection{background:var(--xfa-selection-background-color)}.xfaPage{overflow:hidden;position:relative}.xfaContentarea{position:absolute}.xfaPrintOnly{display:none}.xfaLayer{position:absolute;text-align:initial;top:0;left:0;transform-origin:0 0;line-height:1.2}.xfaLayer *{color:inherit;font:inherit;font-style:inherit;font-weight:inherit;font-kerning:inherit;letter-spacing:-0.01px;text-align:inherit;text-decoration:inherit;box-sizing:border-box;background-color:rgba(0,0,0,0);padding:0;margin:0;pointer-events:auto;line-height:inherit}.xfaLayer div{pointer-events:none}.xfaLayer svg{pointer-events:none}.xfaLayer svg *{pointer-events:none}.xfaLayer a{color:blue}.xfaRich li{margin-left:3em}.xfaFont{color:#000;font-weight:normal;font-kerning:none;font-size:10px;font-style:normal;letter-spacing:0;text-decoration:none;vertical-align:0}.xfaCaption{overflow:hidden;flex:0 0 auto}.xfaCaptionForCheckButton{overflow:hidden;flex:1 1 auto}.xfaLabel{height:100%;width:100%}.xfaLeft{display:flex;flex-direction:row;align-items:center}.xfaRight{display:flex;flex-direction:row-reverse;align-items:center}.xfaLeft>.xfaCaption,.xfaLeft>.xfaCaptionForCheckButton,.xfaRight>.xfaCaption,.xfaRight>.xfaCaptionForCheckButton{max-height:100%}.xfaTop{display:flex;flex-direction:column;align-items:flex-start}.xfaBottom{display:flex;flex-direction:column-reverse;align-items:flex-start}.xfaTop>.xfaCaption,.xfaTop>.xfaCaptionForCheckButton,.xfaBottom>.xfaCaption,.xfaBottom>.xfaCaptionForCheckButton{width:100%}.xfaBorder{background-color:rgba(0,0,0,0);position:absolute;pointer-events:none}.xfaWrapped{width:100%;height:100%}.xfaTextfield:focus,.xfaSelect:focus{background-image:none;background-color:rgba(0,0,0,0);outline:auto;outline-offset:-1px}.xfaCheckbox:focus,.xfaRadio:focus{outline:auto}.xfaTextfield,.xfaSelect{height:100%;width:100%;flex:1 1 auto;border:none;resize:none;background-image:var(--xfa-unfocused-field-background)}.xfaTop>.xfaTextfield,.xfaTop>.xfaSelect,.xfaBottom>.xfaTextfield,.xfaBottom>.xfaSelect{flex:0 1 auto}.xfaButton{cursor:pointer;width:100%;height:100%;border:none;text-align:center}.xfaLink{width:100%;height:100%;position:absolute;top:0;left:0}.xfaCheckbox,.xfaRadio{width:100%;height:100%;flex:0 0 auto;border:none}.xfaRich{white-space:pre-wrap;width:100%;height:100%}.xfaImage{object-position:left top;object-fit:contain;width:100%;height:100%}.xfaLrTb,.xfaRlTb,.xfaTb{display:flex;flex-direction:column;align-items:stretch}.xfaLr{display:flex;flex-direction:row;align-items:stretch}.xfaRl{display:flex;flex-direction:row-reverse;align-items:stretch}.xfaTb>div{justify-content:left}.xfaPosition{position:relative}.xfaArea{position:relative}.xfaValignMiddle{display:flex;align-items:center}.xfaTable{display:flex;flex-direction:column;align-items:stretch}.xfaTable .xfaRow{display:flex;flex-direction:row;align-items:stretch}.xfaTable .xfaRlRow{display:flex;flex-direction:row-reverse;align-items:stretch;flex:1}.xfaTable .xfaRlRow>div{flex:1}.xfaNonInteractive input,.xfaNonInteractive textarea,.xfaDisabled input,.xfaDisabled textarea,.xfaReadOnly input,.xfaReadOnly textarea{background:initial}@media print{.xfaTextfield,.xfaSelect{background:rgba(0,0,0,0)}.xfaSelect{appearance:none;text-indent:1px;text-overflow:""}} :root{--focus-outline: solid 2px blue;--hover-outline: dashed 2px blue;--freetext-line-height: 1.35;--freetext-padding: 2px;--editorFreeText-editing-cursor: text;--editorInk-editing-cursor: url("data:image/svg+xml;charset=UTF-8,<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M2.49913 12.6251C2.61913 12.6251 2.73913 12.6051 2.85713 12.5661L6.29013 11.4201L13.2891 4.4221C14.0191 3.6911 14.0191 2.5011 13.2891 1.7701L12.2291 0.710098C11.4971 -0.0199023 10.3091 -0.0199023 9.57713 0.710098L2.57813 7.7091L1.43313 11.1451C1.29813 11.5511 1.40213 11.9931 1.70513 12.2951C1.92113 12.5101 2.20613 12.6251 2.49913 12.6251ZM10.4611 1.5951C10.7031 1.3511 11.1021 1.3511 11.3441 1.5951L12.4051 2.6561C12.6491 2.8991 12.6491 3.2961 12.4051 3.5391L11.3401 4.6051L9.39513 2.6601L10.4611 1.5951ZM3.67013 8.3851L8.51013 3.5451L10.4541 5.4891L5.61413 10.3301L2.69713 11.3031L3.67013 8.3851Z' fill='black'/><path d='M14.8169 13.314L13.0229 13.862C12.3309 14.073 11.5909 14.111 10.8859 13.968L8.80391 13.551C7.58491 13.308 6.29791 13.48 5.18491 14.036C3.95291 14.652 2.46691 14.412 1.49191 13.436L1.44091 13.385L0.60791 14.321C1.46291 15.175 2.59991 15.625 3.75291 15.625C4.42891 15.625 5.10991 15.471 5.74391 15.153C6.60891 14.721 7.60891 14.586 8.55891 14.777L10.6409 15.194C11.5509 15.376 12.5009 15.327 13.3879 15.056L15.1819 14.508L14.8169 13.314Z' fill='black'/></svg>") 0 16, pointer;--editorFreeText-editing-cursor: url("data:image/svg+xml;charset=UTF-8,<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12 2.75H12.5V2.25V1V0.5H12H10.358C9.91165 0.5 9.47731 0.625661 9.09989 0.860442L9.09886 0.861087L8 1.54837L6.89997 0.860979L6.89911 0.860443C6.5218 0.625734 6.08748 0.5 5.642 0.5H4H3.5V1V2.25V2.75H4H5.642C5.66478 2.75 5.6885 2.75641 5.71008 2.76968C5.71023 2.76977 5.71038 2.76986 5.71053 2.76995L6.817 3.461C6.81704 3.46103 6.81709 3.46105 6.81713 3.46108C6.81713 3.46108 6.81713 3.46108 6.81714 3.46109C6.8552 3.48494 6.876 3.52285 6.876 3.567V8V12.433C6.876 12.4771 6.85523 12.515 6.81722 12.5389C6.81715 12.5389 6.81707 12.539 6.817 12.539L5.70953 13.23C5.70941 13.2301 5.70929 13.2302 5.70917 13.2303C5.68723 13.2438 5.6644 13.25 5.641 13.25H4H3.5V13.75V15V15.5H4H5.642C6.08835 15.5 6.52269 15.3743 6.90011 15.1396L6.90086 15.1391L8 14.4526L9.10003 15.14L9.10089 15.1406C9.47831 15.3753 9.91265 15.501 10.359 15.501H12H12.5V15.001V13.751V13.251H12H10.358C10.3352 13.251 10.3115 13.2446 10.2899 13.2313C10.2897 13.2312 10.2896 13.2311 10.2895 13.231L9.183 12.54C9.18298 12.54 9.18295 12.54 9.18293 12.54C9.18291 12.5399 9.18288 12.5399 9.18286 12.5399C9.14615 12.5169 9.125 12.4797 9.125 12.434V8V3.567C9.125 3.52266 9.14603 3.48441 9.18364 3.4606C9.18377 3.46052 9.1839 3.46043 9.18404 3.46035L10.2895 2.76995C10.2896 2.76985 10.2898 2.76975 10.2899 2.76966C10.3119 2.75619 10.3346 2.75 10.358 2.75H12Z' fill='black' stroke='white'/></svg>") 0 16, text}@media screen and (forced-colors: active){:root{--focus-outline: solid 3px ButtonText;--hover-outline: dashed 3px ButtonText}}[data-editor-rotation="90"]{transform:rotate(90deg)}[data-editor-rotation="180"]{transform:rotate(180deg)}[data-editor-rotation="270"]{transform:rotate(270deg)}.annotationEditorLayer{background:transparent;position:absolute;top:0;left:0;font-size:calc(100px*var(--scale-factor));transform-origin:0 0;cursor:auto;z-index:4}.annotationEditorLayer.freeTextEditing{cursor:var(--editorFreeText-editing-cursor)}.annotationEditorLayer.inkEditing{cursor:var(--editorInk-editing-cursor)}.annotationEditorLayer .selectedEditor{outline:var(--focus-outline);resize:none}.annotationEditorLayer .freeTextEditor{position:absolute;background:transparent;border-radius:3px;padding:calc(var(--freetext-padding)*var(--scale-factor));resize:none;width:auto;height:auto;z-index:1;transform-origin:0 0;touch-action:none;cursor:auto}.annotationEditorLayer .freeTextEditor .internal{background:transparent;border:none;top:0;left:0;overflow:visible;white-space:nowrap;resize:none;font:10px sans-serif;line-height:var(--freetext-line-height)}.annotationEditorLayer .freeTextEditor .overlay{position:absolute;display:none;background:transparent;top:0;left:0;width:100%;height:100%}.annotationEditorLayer .freeTextEditor .overlay.enabled{display:block}.annotationEditorLayer .freeTextEditor .internal:empty::before{content:attr(default-content);color:gray}.annotationEditorLayer .freeTextEditor .internal:focus{outline:none}.annotationEditorLayer .inkEditor.disabled{resize:none}.annotationEditorLayer .inkEditor.disabled.selectedEditor{resize:horizontal}.annotationEditorLayer .freeTextEditor:hover:not(.selectedEditor),.annotationEditorLayer .inkEditor:hover:not(.selectedEditor){outline:var(--hover-outline)}.annotationEditorLayer .inkEditor{position:absolute;background:transparent;border-radius:3px;overflow:auto;width:100%;height:100%;z-index:1;transform-origin:0 0;cursor:auto}.annotationEditorLayer .inkEditor.editing{resize:none;cursor:inherit}.annotationEditorLayer .inkEditor .inkEditorCanvas{position:absolute;top:0;left:0;width:100%;height:100%;touch-action:none}`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWFjcm9mb3JtLWRhcmstY29sb3JzLWNzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdGhlbWUvYWNyb2Zvcm0tZGFyay10aGVtZS9wZGYtYWNyb2Zvcm0tZGFyay1jb2xvcnMtY3NzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBQyxvd2ZBQW93ZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNzcz1gOnJvb3R7LS1mb3JtLWFuY2hvci1ob3Zlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMCwgMSk7LS1hbm5vdGF0aW9uLXVuZm9jdXNlZC1maWVsZC1iYWNrZ3JvdW5kOiB1bnNldDstLWZvcm0td2lkZ2V0LWJvcmRlci1jb2xvcjogbGlnaHRncmV5Oy0tZm9ybS13aWRnZXQtY29sb3I6IGxpZ2h0Z3JleTstLWZvcm0td2lkZ2V0LWJhY2tncm91bmQtY29sb3I6IGJsYWNrOy0tZm9ybS1jaGVjay1jb2xvcjogbGlnaHRncmV5Oy0tYW5ub3RhdGlvbi1wb3B1cC1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAxNTMsIDEpOy0tYW5ub3RhdGlvbi1wb3B1cC1zaGFkb3ctY29sb3I6IHJnYmEoMTM2LCAxMzYsIDEzNiwgMSk7LS1hbm5vdGF0aW9uLXBvcHVwLWJvcmRlci10b3AtY29sb3I6IGxpZ2h0Z3JleTstLXhmYS1sYXllci1oaWdobGlnaHQ6IHJnYmEoMjM5LCAyMDMsIDIzNywgMSk7LS14ZmEtdW5mb2N1c2VkLWZpZWxkLWJhY2tncm91bmQ6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PVVURi04LDxzdmcgd2lkdGg9JzFweCcgaGVpZ2h0PScxcHgnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgc3R5bGU9J2ZpbGw6cmdiYSgwLCA1NCwgMjU1LCAwLjEzKTsnLz48L3N2Zz5cIik7LS14ZmEtaGlnaGxpZ2h0LXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAzLCAyMjMsIDIwMywgMSk7LS14ZmEtc2VsZWN0aW9uLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAxKX0gOnJvb3R7LS1hbm5vdGF0aW9uLXVuZm9jdXNlZC1maWVsZC1iYWNrZ3JvdW5kOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VVEYtOCw8c3ZnIHdpZHRoPScxcHgnIGhlaWdodD0nMXB4JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIHN0eWxlPSdmaWxsOnJnYmEoMCwgNTQsIDI1NSwgMC4xMyk7Jy8+PC9zdmc+XCIpfUBtZWRpYShmb3JjZWQtY29sb3JzOiBhY3RpdmUpey5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIGlucHV0OnJlcXVpcmVkLC5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIHRleHRhcmVhOnJlcXVpcmVkLC5hbm5vdGF0aW9uTGF5ZXIgLmNob2ljZVdpZGdldEFubm90YXRpb24gc2VsZWN0OnJlcXVpcmVkLC5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24uY2hlY2tCb3ggaW5wdXQ6cmVxdWlyZWQsLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5yYWRpb0J1dHRvbiBpbnB1dDpyZXF1aXJlZHtvdXRsaW5lOjEuNXB4IHNvbGlkIHNlbGVjdGVkSXRlbX19LmFubm90YXRpb25MYXllcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cG9pbnRlci1ldmVudHM6bm9uZTt0cmFuc2Zvcm0tb3JpZ2luOjAgMH0uYW5ub3RhdGlvbkxheWVyIHNlY3Rpb257cG9zaXRpb246YWJzb2x1dGU7dGV4dC1hbGlnbjppbml0aWFsO3BvaW50ZXItZXZlbnRzOmF1dG87Ym94LXNpemluZzpib3JkZXItYm94O3RyYW5zZm9ybS1vcmlnaW46MCAwfS5hbm5vdGF0aW9uTGF5ZXIgLmxpbmtBbm5vdGF0aW9uPmEsLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5wdXNoQnV0dG9uPmF7cG9zaXRpb246YWJzb2x1dGU7Zm9udC1zaXplOjFlbTt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLnB1c2hCdXR0b24+Y2FudmFze3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9LmFubm90YXRpb25MYXllciAubGlua0Fubm90YXRpb24+YTpob3ZlciwuYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLnB1c2hCdXR0b24+YTpob3ZlcntvcGFjaXR5Oi4yO2JhY2tncm91bmQ6I2ZmMDtib3gtc2hhZG93OjAgMnB4IDEwcHggI2ZmMH0uYW5ub3RhdGlvbkxheWVyIC50ZXh0QW5ub3RhdGlvbiBpbWd7cG9zaXRpb246YWJzb2x1dGU7Y3Vyc29yOnBvaW50ZXI7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0uYW5ub3RhdGlvbkxheWVyIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiBpbnB1dCwuYW5ub3RhdGlvbkxheWVyIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiB0ZXh0YXJlYSwuYW5ub3RhdGlvbkxheWVyIC5jaG9pY2VXaWRnZXRBbm5vdGF0aW9uIHNlbGVjdCwuYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IGlucHV0LC5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24ucmFkaW9CdXR0b24gaW5wdXR7YmFja2dyb3VuZC1pbWFnZTp2YXIoLS1hbm5vdGF0aW9uLXVuZm9jdXNlZC1maWVsZC1iYWNrZ3JvdW5kKTtib3JkZXI6MXB4IHNvbGlkIHJnYmEoMCwwLDAsMCk7Ym94LXNpemluZzpib3JkZXItYm94O2ZvbnQ6Y2FsYyg5cHgqdmFyKC0tc2NhbGUtZmFjdG9yKSkgc2Fucy1zZXJpZjtoZWlnaHQ6MTAwJTttYXJnaW46MDt2ZXJ0aWNhbC1hbGlnbjp0b3A7d2lkdGg6MTAwJX0uYW5ub3RhdGlvbkxheWVyIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiBpbnB1dDpyZXF1aXJlZCwuYW5ub3RhdGlvbkxheWVyIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiB0ZXh0YXJlYTpyZXF1aXJlZCwuYW5ub3RhdGlvbkxheWVyIC5jaG9pY2VXaWRnZXRBbm5vdGF0aW9uIHNlbGVjdDpyZXF1aXJlZCwuYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IGlucHV0OnJlcXVpcmVkLC5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24ucmFkaW9CdXR0b24gaW5wdXQ6cmVxdWlyZWR7b3V0bGluZToxLjVweCBzb2xpZCByZWR9LmFubm90YXRpb25MYXllciAuY2hvaWNlV2lkZ2V0QW5ub3RhdGlvbiBzZWxlY3Qgb3B0aW9ue3BhZGRpbmc6MH0uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLnJhZGlvQnV0dG9uIGlucHV0e2JvcmRlci1yYWRpdXM6NTAlfS5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIHRleHRhcmVhe3Jlc2l6ZTpub25lfS5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIGlucHV0W2Rpc2FibGVkXSwuYW5ub3RhdGlvbkxheWVyIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiB0ZXh0YXJlYVtkaXNhYmxlZF0sLmFubm90YXRpb25MYXllciAuY2hvaWNlV2lkZ2V0QW5ub3RhdGlvbiBzZWxlY3RbZGlzYWJsZWRdLC5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24uY2hlY2tCb3ggaW5wdXRbZGlzYWJsZWRdLC5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24ucmFkaW9CdXR0b24gaW5wdXRbZGlzYWJsZWRde2JhY2tncm91bmQ6bm9uZTtib3JkZXI6MXB4IHNvbGlkIHJnYmEoMCwwLDAsMCk7Y3Vyc29yOm5vdC1hbGxvd2VkfS5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIGlucHV0OmhvdmVyLC5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIHRleHRhcmVhOmhvdmVyLC5hbm5vdGF0aW9uTGF5ZXIgLmNob2ljZVdpZGdldEFubm90YXRpb24gc2VsZWN0OmhvdmVyLC5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24uY2hlY2tCb3ggaW5wdXQ6aG92ZXIsLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5yYWRpb0J1dHRvbiBpbnB1dDpob3Zlcntib3JkZXI6MXB4IHNvbGlkICMwMDB9LmFubm90YXRpb25MYXllciAudGV4dFdpZGdldEFubm90YXRpb24gaW5wdXQ6Zm9jdXMsLmFubm90YXRpb25MYXllciAudGV4dFdpZGdldEFubm90YXRpb24gdGV4dGFyZWE6Zm9jdXMsLmFubm90YXRpb25MYXllciAuY2hvaWNlV2lkZ2V0QW5ub3RhdGlvbiBzZWxlY3Q6Zm9jdXN7YmFja2dyb3VuZDpub25lO2JvcmRlcjoxcHggc29saWQgcmdiYSgwLDAsMCwwKX0uYW5ub3RhdGlvbkxheWVyIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiBpbnB1dCA6Zm9jdXMsLmFubm90YXRpb25MYXllciAudGV4dFdpZGdldEFubm90YXRpb24gdGV4dGFyZWEgOmZvY3VzLC5hbm5vdGF0aW9uTGF5ZXIgLmNob2ljZVdpZGdldEFubm90YXRpb24gc2VsZWN0IDpmb2N1cywuYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IDpmb2N1cywuYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLnJhZGlvQnV0dG9uIDpmb2N1c3tiYWNrZ3JvdW5kLWltYWdlOm5vbmU7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDApO291dGxpbmU6YXV0b30uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IGlucHV0OmNoZWNrZWQ6YmVmb3JlLC5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24uY2hlY2tCb3ggaW5wdXQ6Y2hlY2tlZDphZnRlciwuYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLnJhZGlvQnV0dG9uIGlucHV0OmNoZWNrZWQ6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6Q2FudmFzVGV4dDtjb250ZW50OlwiXCI7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZX0uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IGlucHV0OmNoZWNrZWQ6YmVmb3JlLC5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24uY2hlY2tCb3ggaW5wdXQ6Y2hlY2tlZDphZnRlcntoZWlnaHQ6ODAlO2xlZnQ6NDUlO3dpZHRoOjFweH0uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IGlucHV0OmNoZWNrZWQ6YmVmb3Jle3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpfS5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24uY2hlY2tCb3ggaW5wdXQ6Y2hlY2tlZDphZnRlcnt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9LmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5yYWRpb0J1dHRvbiBpbnB1dDpjaGVja2VkOmJlZm9yZXtib3JkZXItcmFkaXVzOjUwJTtoZWlnaHQ6NTAlO2xlZnQ6MzAlO3RvcDoyMCU7d2lkdGg6NTAlfS5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIGlucHV0LmNvbWJ7Zm9udC1mYW1pbHk6bW9ub3NwYWNlO3BhZGRpbmctbGVmdDoycHg7cGFkZGluZy1yaWdodDowfS5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIGlucHV0LmNvbWI6Zm9jdXN7d2lkdGg6MTAzJX0uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IGlucHV0LC5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24ucmFkaW9CdXR0b24gaW5wdXR7YXBwZWFyYW5jZTpub25lfS5hbm5vdGF0aW9uTGF5ZXIgLnBvcHVwVHJpZ2dlckFyZWF7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJX0uYW5ub3RhdGlvbkxheWVyIC5wb3B1cFdyYXBwZXJ7cG9zaXRpb246YWJzb2x1dGU7Zm9udC1zaXplOmNhbGMoOXB4KnZhcigtLXNjYWxlLWZhY3RvcikpO3dpZHRoOjEwMCU7bWluLXdpZHRoOmNhbGMoMTgwcHgqdmFyKC0tc2NhbGUtZmFjdG9yKSk7cG9pbnRlci1ldmVudHM6bm9uZX0uYW5ub3RhdGlvbkxheWVyIC5wb3B1cHtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjIwMDttYXgtd2lkdGg6Y2FsYygxODBweCp2YXIoLS1zY2FsZS1mYWN0b3IpKTtiYWNrZ3JvdW5kLWNvbG9yOiNmZjk7Ym94LXNoYWRvdzowIGNhbGMoMnB4KnZhcigtLXNjYWxlLWZhY3RvcikpIGNhbGMoNXB4KnZhcigtLXNjYWxlLWZhY3RvcikpICM4ODg7Ym9yZGVyLXJhZGl1czpjYWxjKDJweCp2YXIoLS1zY2FsZS1mYWN0b3IpKTtwYWRkaW5nOmNhbGMoNnB4KnZhcigtLXNjYWxlLWZhY3RvcikpO21hcmdpbi1sZWZ0OmNhbGMoNXB4KnZhcigtLXNjYWxlLWZhY3RvcikpO2N1cnNvcjpwb2ludGVyO2ZvbnQ6bWVzc2FnZS1ib3g7d2hpdGUtc3BhY2U6bm9ybWFsO3dvcmQtd3JhcDpicmVhay13b3JkO3BvaW50ZXItZXZlbnRzOmF1dG99LmFubm90YXRpb25MYXllciAucG9wdXA+Kntmb250LXNpemU6Y2FsYyg5cHgqdmFyKC0tc2NhbGUtZmFjdG9yKSl9LmFubm90YXRpb25MYXllciAucG9wdXAgaDF7ZGlzcGxheTppbmxpbmUtYmxvY2t9LmFubm90YXRpb25MYXllciAucG9wdXBEYXRle2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbi1sZWZ0OmNhbGMoNXB4KnZhcigtLXNjYWxlLWZhY3RvcikpfS5hbm5vdGF0aW9uTGF5ZXIgLnBvcHVwQ29udGVudHtib3JkZXItdG9wOjFweCBzb2xpZCAjMzMzO21hcmdpbi10b3A6Y2FsYygycHgqdmFyKC0tc2NhbGUtZmFjdG9yKSk7cGFkZGluZy10b3A6Y2FsYygycHgqdmFyKC0tc2NhbGUtZmFjdG9yKSl9LmFubm90YXRpb25MYXllciAucmljaFRleHQ+Knt3aGl0ZS1zcGFjZTpwcmUtd3JhcDtmb250LXNpemU6Y2FsYyg5cHgqdmFyKC0tc2NhbGUtZmFjdG9yKSl9LmFubm90YXRpb25MYXllciAuaGlnaGxpZ2h0QW5ub3RhdGlvbiwuYW5ub3RhdGlvbkxheWVyIC51bmRlcmxpbmVBbm5vdGF0aW9uLC5hbm5vdGF0aW9uTGF5ZXIgLnNxdWlnZ2x5QW5ub3RhdGlvbiwuYW5ub3RhdGlvbkxheWVyIC5zdHJpa2VvdXRBbm5vdGF0aW9uLC5hbm5vdGF0aW9uTGF5ZXIgLmZyZWVUZXh0QW5ub3RhdGlvbiwuYW5ub3RhdGlvbkxheWVyIC5saW5lQW5ub3RhdGlvbiBzdmcgbGluZSwuYW5ub3RhdGlvbkxheWVyIC5zcXVhcmVBbm5vdGF0aW9uIHN2ZyByZWN0LC5hbm5vdGF0aW9uTGF5ZXIgLmNpcmNsZUFubm90YXRpb24gc3ZnIGVsbGlwc2UsLmFubm90YXRpb25MYXllciAucG9seWxpbmVBbm5vdGF0aW9uIHN2ZyBwb2x5bGluZSwuYW5ub3RhdGlvbkxheWVyIC5wb2x5Z29uQW5ub3RhdGlvbiBzdmcgcG9seWdvbiwuYW5ub3RhdGlvbkxheWVyIC5jYXJldEFubm90YXRpb24sLmFubm90YXRpb25MYXllciAuaW5rQW5ub3RhdGlvbiBzdmcgcG9seWxpbmUsLmFubm90YXRpb25MYXllciAuc3RhbXBBbm5vdGF0aW9uLC5hbm5vdGF0aW9uTGF5ZXIgLmZpbGVBdHRhY2htZW50QW5ub3RhdGlvbntjdXJzb3I6cG9pbnRlcn0uYW5ub3RhdGlvbkxheWVyIHNlY3Rpb24gc3Zne3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9LmFubm90YXRpb25MYXllciAuYW5ub3RhdGlvblRleHRDb250ZW50e3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7b3BhY2l0eTowO2NvbG9yOnJnYmEoMCwwLDAsMCk7dXNlci1zZWxlY3Q6bm9uZTtwb2ludGVyLWV2ZW50czpub25lfS5hbm5vdGF0aW9uTGF5ZXIgLmFubm90YXRpb25UZXh0Q29udGVudCBzcGFue3dpZHRoOjEwMCU7ZGlzcGxheTppbmxpbmUtYmxvY2t9IC54ZmFMYXllciAuaGlnaGxpZ2h0e21hcmdpbjotMXB4O3BhZGRpbmc6MXB4O2JhY2tncm91bmQtY29sb3I6dmFyKC0teGZhLWxheWVyLWhpZ2hsaWdodCk7Ym9yZGVyLXJhZGl1czo0cHh9LnhmYUxheWVyIC5oaWdobGlnaHQuYXBwZW5kZWR7cG9zaXRpb246aW5pdGlhbH0ueGZhTGF5ZXIgLmhpZ2hsaWdodC5iZWdpbntib3JkZXItcmFkaXVzOjRweCAwIDAgNHB4fS54ZmFMYXllciAuaGlnaGxpZ2h0LmVuZHtib3JkZXItcmFkaXVzOjAgNHB4IDRweCAwfS54ZmFMYXllciAuaGlnaGxpZ2h0Lm1pZGRsZXtib3JkZXItcmFkaXVzOjB9LnhmYUxheWVyIC5oaWdobGlnaHQuc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS14ZmEtaGlnaGxpZ2h0LXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3IpfS54ZmFMYXllciA6OnNlbGVjdGlvbntiYWNrZ3JvdW5kOnZhcigtLXhmYS1zZWxlY3Rpb24tYmFja2dyb3VuZC1jb2xvcil9LnhmYVBhZ2V7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOnJlbGF0aXZlfS54ZmFDb250ZW50YXJlYXtwb3NpdGlvbjphYnNvbHV0ZX0ueGZhUHJpbnRPbmx5e2Rpc3BsYXk6bm9uZX0ueGZhTGF5ZXJ7cG9zaXRpb246YWJzb2x1dGU7dGV4dC1hbGlnbjppbml0aWFsO3RvcDowO2xlZnQ6MDt0cmFuc2Zvcm0tb3JpZ2luOjAgMDtsaW5lLWhlaWdodDoxLjJ9LnhmYUxheWVyICp7Y29sb3I6aW5oZXJpdDtmb250OmluaGVyaXQ7Zm9udC1zdHlsZTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXQ7Zm9udC1rZXJuaW5nOmluaGVyaXQ7bGV0dGVyLXNwYWNpbmc6LTAuMDFweDt0ZXh0LWFsaWduOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7Ym94LXNpemluZzpib3JkZXItYm94O2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwKTtwYWRkaW5nOjA7bWFyZ2luOjA7cG9pbnRlci1ldmVudHM6YXV0bztsaW5lLWhlaWdodDppbmhlcml0fS54ZmFMYXllciBkaXZ7cG9pbnRlci1ldmVudHM6bm9uZX0ueGZhTGF5ZXIgc3Zne3BvaW50ZXItZXZlbnRzOm5vbmV9LnhmYUxheWVyIHN2ZyAqe3BvaW50ZXItZXZlbnRzOm5vbmV9LnhmYUxheWVyIGF7Y29sb3I6Ymx1ZX0ueGZhUmljaCBsaXttYXJnaW4tbGVmdDozZW19LnhmYUZvbnR7Y29sb3I6IzAwMDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1rZXJuaW5nOm5vbmU7Zm9udC1zaXplOjEwcHg7Zm9udC1zdHlsZTpub3JtYWw7bGV0dGVyLXNwYWNpbmc6MDt0ZXh0LWRlY29yYXRpb246bm9uZTt2ZXJ0aWNhbC1hbGlnbjowfS54ZmFDYXB0aW9ue292ZXJmbG93OmhpZGRlbjtmbGV4OjAgMCBhdXRvfS54ZmFDYXB0aW9uRm9yQ2hlY2tCdXR0b257b3ZlcmZsb3c6aGlkZGVuO2ZsZXg6MSAxIGF1dG99LnhmYUxhYmVse2hlaWdodDoxMDAlO3dpZHRoOjEwMCV9LnhmYUxlZnR7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdzthbGlnbi1pdGVtczpjZW50ZXJ9LnhmYVJpZ2h0e2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3ctcmV2ZXJzZTthbGlnbi1pdGVtczpjZW50ZXJ9LnhmYUxlZnQ+LnhmYUNhcHRpb24sLnhmYUxlZnQ+LnhmYUNhcHRpb25Gb3JDaGVja0J1dHRvbiwueGZhUmlnaHQ+LnhmYUNhcHRpb24sLnhmYVJpZ2h0Pi54ZmFDYXB0aW9uRm9yQ2hlY2tCdXR0b257bWF4LWhlaWdodDoxMDAlfS54ZmFUb3B7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpmbGV4LXN0YXJ0fS54ZmFCb3R0b217ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbi1yZXZlcnNlO2FsaWduLWl0ZW1zOmZsZXgtc3RhcnR9LnhmYVRvcD4ueGZhQ2FwdGlvbiwueGZhVG9wPi54ZmFDYXB0aW9uRm9yQ2hlY2tCdXR0b24sLnhmYUJvdHRvbT4ueGZhQ2FwdGlvbiwueGZhQm90dG9tPi54ZmFDYXB0aW9uRm9yQ2hlY2tCdXR0b257d2lkdGg6MTAwJX0ueGZhQm9yZGVye2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwKTtwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czpub25lfS54ZmFXcmFwcGVke3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9LnhmYVRleHRmaWVsZDpmb2N1cywueGZhU2VsZWN0OmZvY3Vze2JhY2tncm91bmQtaW1hZ2U6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMCk7b3V0bGluZTphdXRvO291dGxpbmUtb2Zmc2V0Oi0xcHh9LnhmYUNoZWNrYm94OmZvY3VzLC54ZmFSYWRpbzpmb2N1c3tvdXRsaW5lOmF1dG99LnhmYVRleHRmaWVsZCwueGZhU2VsZWN0e2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7ZmxleDoxIDEgYXV0bztib3JkZXI6bm9uZTtyZXNpemU6bm9uZTtiYWNrZ3JvdW5kLWltYWdlOnZhcigtLXhmYS11bmZvY3VzZWQtZmllbGQtYmFja2dyb3VuZCl9LnhmYVRvcD4ueGZhVGV4dGZpZWxkLC54ZmFUb3A+LnhmYVNlbGVjdCwueGZhQm90dG9tPi54ZmFUZXh0ZmllbGQsLnhmYUJvdHRvbT4ueGZhU2VsZWN0e2ZsZXg6MCAxIGF1dG99LnhmYUJ1dHRvbntjdXJzb3I6cG9pbnRlcjt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JvcmRlcjpub25lO3RleHQtYWxpZ246Y2VudGVyfS54ZmFMaW5re3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowfS54ZmFDaGVja2JveCwueGZhUmFkaW97d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtmbGV4OjAgMCBhdXRvO2JvcmRlcjpub25lfS54ZmFSaWNoe3doaXRlLXNwYWNlOnByZS13cmFwO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9LnhmYUltYWdle29iamVjdC1wb3NpdGlvbjpsZWZ0IHRvcDtvYmplY3QtZml0OmNvbnRhaW47d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0ueGZhTHJUYiwueGZhUmxUYiwueGZhVGJ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpzdHJldGNofS54ZmFMcntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2FsaWduLWl0ZW1zOnN0cmV0Y2h9LnhmYVJse2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3ctcmV2ZXJzZTthbGlnbi1pdGVtczpzdHJldGNofS54ZmFUYj5kaXZ7anVzdGlmeS1jb250ZW50OmxlZnR9LnhmYVBvc2l0aW9ue3Bvc2l0aW9uOnJlbGF0aXZlfS54ZmFBcmVhe3Bvc2l0aW9uOnJlbGF0aXZlfS54ZmFWYWxpZ25NaWRkbGV7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcn0ueGZhVGFibGV7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpzdHJldGNofS54ZmFUYWJsZSAueGZhUm93e2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7YWxpZ24taXRlbXM6c3RyZXRjaH0ueGZhVGFibGUgLnhmYVJsUm93e2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3ctcmV2ZXJzZTthbGlnbi1pdGVtczpzdHJldGNoO2ZsZXg6MX0ueGZhVGFibGUgLnhmYVJsUm93PmRpdntmbGV4OjF9LnhmYU5vbkludGVyYWN0aXZlIGlucHV0LC54ZmFOb25JbnRlcmFjdGl2ZSB0ZXh0YXJlYSwueGZhRGlzYWJsZWQgaW5wdXQsLnhmYURpc2FibGVkIHRleHRhcmVhLC54ZmFSZWFkT25seSBpbnB1dCwueGZhUmVhZE9ubHkgdGV4dGFyZWF7YmFja2dyb3VuZDppbml0aWFsfUBtZWRpYSBwcmludHsueGZhVGV4dGZpZWxkLC54ZmFTZWxlY3R7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDApfS54ZmFTZWxlY3R7YXBwZWFyYW5jZTpub25lO3RleHQtaW5kZW50OjFweDt0ZXh0LW92ZXJmbG93OlwiXCJ9fSA6cm9vdHstLWZvY3VzLW91dGxpbmU6IHNvbGlkIDJweCBibHVlOy0taG92ZXItb3V0bGluZTogZGFzaGVkIDJweCBibHVlOy0tZnJlZXRleHQtbGluZS1oZWlnaHQ6IDEuMzU7LS1mcmVldGV4dC1wYWRkaW5nOiAycHg7LS1lZGl0b3JGcmVlVGV4dC1lZGl0aW5nLWN1cnNvcjogdGV4dDstLWVkaXRvckluay1lZGl0aW5nLWN1cnNvcjogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVRGLTgsPHN2ZyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIHZpZXdCb3g9JzAgMCAxNiAxNicgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNMi40OTkxMyAxMi42MjUxQzIuNjE5MTMgMTIuNjI1MSAyLjczOTEzIDEyLjYwNTEgMi44NTcxMyAxMi41NjYxTDYuMjkwMTMgMTEuNDIwMUwxMy4yODkxIDQuNDIyMUMxNC4wMTkxIDMuNjkxMSAxNC4wMTkxIDIuNTAxMSAxMy4yODkxIDEuNzcwMUwxMi4yMjkxIDAuNzEwMDk4QzExLjQ5NzEgLTAuMDE5OTAyMyAxMC4zMDkxIC0wLjAxOTkwMjMgOS41NzcxMyAwLjcxMDA5OEwyLjU3ODEzIDcuNzA5MUwxLjQzMzEzIDExLjE0NTFDMS4yOTgxMyAxMS41NTExIDEuNDAyMTMgMTEuOTkzMSAxLjcwNTEzIDEyLjI5NTFDMS45MjExMyAxMi41MTAxIDIuMjA2MTMgMTIuNjI1MSAyLjQ5OTEzIDEyLjYyNTFaTTEwLjQ2MTEgMS41OTUxQzEwLjcwMzEgMS4zNTExIDExLjEwMjEgMS4zNTExIDExLjM0NDEgMS41OTUxTDEyLjQwNTEgMi42NTYxQzEyLjY0OTEgMi44OTkxIDEyLjY0OTEgMy4yOTYxIDEyLjQwNTEgMy41MzkxTDExLjM0MDEgNC42MDUxTDkuMzk1MTMgMi42NjAxTDEwLjQ2MTEgMS41OTUxWk0zLjY3MDEzIDguMzg1MUw4LjUxMDEzIDMuNTQ1MUwxMC40NTQxIDUuNDg5MUw1LjYxNDEzIDEwLjMzMDFMMi42OTcxMyAxMS4zMDMxTDMuNjcwMTMgOC4zODUxWicgZmlsbD0nYmxhY2snLz48cGF0aCBkPSdNMTQuODE2OSAxMy4zMTRMMTMuMDIyOSAxMy44NjJDMTIuMzMwOSAxNC4wNzMgMTEuNTkwOSAxNC4xMTEgMTAuODg1OSAxMy45NjhMOC44MDM5MSAxMy41NTFDNy41ODQ5MSAxMy4zMDggNi4yOTc5MSAxMy40OCA1LjE4NDkxIDE0LjAzNkMzLjk1MjkxIDE0LjY1MiAyLjQ2NjkxIDE0LjQxMiAxLjQ5MTkxIDEzLjQzNkwxLjQ0MDkxIDEzLjM4NUwwLjYwNzkxIDE0LjMyMUMxLjQ2MjkxIDE1LjE3NSAyLjU5OTkxIDE1LjYyNSAzLjc1MjkxIDE1LjYyNUM0LjQyODkxIDE1LjYyNSA1LjEwOTkxIDE1LjQ3MSA1Ljc0MzkxIDE1LjE1M0M2LjYwODkxIDE0LjcyMSA3LjYwODkxIDE0LjU4NiA4LjU1ODkxIDE0Ljc3N0wxMC42NDA5IDE1LjE5NEMxMS41NTA5IDE1LjM3NiAxMi41MDA5IDE1LjMyNyAxMy4zODc5IDE1LjA1NkwxNS4xODE5IDE0LjUwOEwxNC44MTY5IDEzLjMxNFonIGZpbGw9J2JsYWNrJy8+PC9zdmc+XCIpIDAgMTYsIHBvaW50ZXI7LS1lZGl0b3JGcmVlVGV4dC1lZGl0aW5nLWN1cnNvcjogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVRGLTgsPHN2ZyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIHZpZXdCb3g9JzAgMCAxNiAxNicgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNMTIgMi43NUgxMi41VjIuMjVWMVYwLjVIMTJIMTAuMzU4QzkuOTExNjUgMC41IDkuNDc3MzEgMC42MjU2NjEgOS4wOTk4OSAwLjg2MDQ0Mkw5LjA5ODg2IDAuODYxMDg3TDggMS41NDgzN0w2Ljg5OTk3IDAuODYwOTc5TDYuODk5MTEgMC44NjA0NDNDNi41MjE4IDAuNjI1NzM0IDYuMDg3NDggMC41IDUuNjQyIDAuNUg0SDMuNVYxVjIuMjVWMi43NUg0SDUuNjQyQzUuNjY0NzggMi43NSA1LjY4ODUgMi43NTY0MSA1LjcxMDA4IDIuNzY5NjhDNS43MTAyMyAyLjc2OTc3IDUuNzEwMzggMi43Njk4NiA1LjcxMDUzIDIuNzY5OTVMNi44MTcgMy40NjFDNi44MTcwNCAzLjQ2MTAzIDYuODE3MDkgMy40NjEwNSA2LjgxNzEzIDMuNDYxMDhDNi44MTcxMyAzLjQ2MTA4IDYuODE3MTMgMy40NjEwOCA2LjgxNzE0IDMuNDYxMDlDNi44NTUyIDMuNDg0OTQgNi44NzYgMy41MjI4NSA2Ljg3NiAzLjU2N1Y4VjEyLjQzM0M2Ljg3NiAxMi40NzcxIDYuODU1MjMgMTIuNTE1IDYuODE3MjIgMTIuNTM4OUM2LjgxNzE1IDEyLjUzODkgNi44MTcwNyAxMi41MzkgNi44MTcgMTIuNTM5TDUuNzA5NTMgMTMuMjNDNS43MDk0MSAxMy4yMzAxIDUuNzA5MjkgMTMuMjMwMiA1LjcwOTE3IDEzLjIzMDNDNS42ODcyMyAxMy4yNDM4IDUuNjY0NCAxMy4yNSA1LjY0MSAxMy4yNUg0SDMuNVYxMy43NVYxNVYxNS41SDRINS42NDJDNi4wODgzNSAxNS41IDYuNTIyNjkgMTUuMzc0MyA2LjkwMDExIDE1LjEzOTZMNi45MDA4NiAxNS4xMzkxTDggMTQuNDUyNkw5LjEwMDAzIDE1LjE0TDkuMTAwODkgMTUuMTQwNkM5LjQ3ODMxIDE1LjM3NTMgOS45MTI2NSAxNS41MDEgMTAuMzU5IDE1LjUwMUgxMkgxMi41VjE1LjAwMVYxMy43NTFWMTMuMjUxSDEySDEwLjM1OEMxMC4zMzUyIDEzLjI1MSAxMC4zMTE1IDEzLjI0NDYgMTAuMjg5OSAxMy4yMzEzQzEwLjI4OTcgMTMuMjMxMiAxMC4yODk2IDEzLjIzMTEgMTAuMjg5NSAxMy4yMzFMOS4xODMgMTIuNTRDOS4xODI5OCAxMi41NCA5LjE4Mjk1IDEyLjU0IDkuMTgyOTMgMTIuNTRDOS4xODI5MSAxMi41Mzk5IDkuMTgyODggMTIuNTM5OSA5LjE4Mjg2IDEyLjUzOTlDOS4xNDYxNSAxMi41MTY5IDkuMTI1IDEyLjQ3OTcgOS4xMjUgMTIuNDM0VjhWMy41NjdDOS4xMjUgMy41MjI2NiA5LjE0NjAzIDMuNDg0NDEgOS4xODM2NCAzLjQ2MDZDOS4xODM3NyAzLjQ2MDUyIDkuMTgzOSAzLjQ2MDQzIDkuMTg0MDQgMy40NjAzNUwxMC4yODk1IDIuNzY5OTVDMTAuMjg5NiAyLjc2OTg1IDEwLjI4OTggMi43Njk3NSAxMC4yODk5IDIuNzY5NjZDMTAuMzExOSAyLjc1NjE5IDEwLjMzNDYgMi43NSAxMC4zNTggMi43NUgxMlonIGZpbGw9J2JsYWNrJyBzdHJva2U9J3doaXRlJy8+PC9zdmc+XCIpIDAgMTYsIHRleHR9QG1lZGlhIHNjcmVlbiBhbmQgKGZvcmNlZC1jb2xvcnM6IGFjdGl2ZSl7OnJvb3R7LS1mb2N1cy1vdXRsaW5lOiBzb2xpZCAzcHggQnV0dG9uVGV4dDstLWhvdmVyLW91dGxpbmU6IGRhc2hlZCAzcHggQnV0dG9uVGV4dH19W2RhdGEtZWRpdG9yLXJvdGF0aW9uPVwiOTBcIl17dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyl9W2RhdGEtZWRpdG9yLXJvdGF0aW9uPVwiMTgwXCJde3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKX1bZGF0YS1lZGl0b3Itcm90YXRpb249XCIyNzBcIl17dHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpfS5hbm5vdGF0aW9uRWRpdG9yTGF5ZXJ7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7Zm9udC1zaXplOmNhbGMoMTAwcHgqdmFyKC0tc2NhbGUtZmFjdG9yKSk7dHJhbnNmb3JtLW9yaWdpbjowIDA7Y3Vyc29yOmF1dG87ei1pbmRleDo0fS5hbm5vdGF0aW9uRWRpdG9yTGF5ZXIuZnJlZVRleHRFZGl0aW5ne2N1cnNvcjp2YXIoLS1lZGl0b3JGcmVlVGV4dC1lZGl0aW5nLWN1cnNvcil9LmFubm90YXRpb25FZGl0b3JMYXllci5pbmtFZGl0aW5ne2N1cnNvcjp2YXIoLS1lZGl0b3JJbmstZWRpdGluZy1jdXJzb3IpfS5hbm5vdGF0aW9uRWRpdG9yTGF5ZXIgLnNlbGVjdGVkRWRpdG9ye291dGxpbmU6dmFyKC0tZm9jdXMtb3V0bGluZSk7cmVzaXplOm5vbmV9LmFubm90YXRpb25FZGl0b3JMYXllciAuZnJlZVRleHRFZGl0b3J7cG9zaXRpb246YWJzb2x1dGU7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtib3JkZXItcmFkaXVzOjNweDtwYWRkaW5nOmNhbGModmFyKC0tZnJlZXRleHQtcGFkZGluZykqdmFyKC0tc2NhbGUtZmFjdG9yKSk7cmVzaXplOm5vbmU7d2lkdGg6YXV0bztoZWlnaHQ6YXV0bzt6LWluZGV4OjE7dHJhbnNmb3JtLW9yaWdpbjowIDA7dG91Y2gtYWN0aW9uOm5vbmU7Y3Vyc29yOmF1dG99LmFubm90YXRpb25FZGl0b3JMYXllciAuZnJlZVRleHRFZGl0b3IgLmludGVybmFse2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ym9yZGVyOm5vbmU7dG9wOjA7bGVmdDowO292ZXJmbG93OnZpc2libGU7d2hpdGUtc3BhY2U6bm93cmFwO3Jlc2l6ZTpub25lO2ZvbnQ6MTBweCBzYW5zLXNlcmlmO2xpbmUtaGVpZ2h0OnZhcigtLWZyZWV0ZXh0LWxpbmUtaGVpZ2h0KX0uYW5ub3RhdGlvbkVkaXRvckxheWVyIC5mcmVlVGV4dEVkaXRvciAub3ZlcmxheXtwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5Om5vbmU7YmFja2dyb3VuZDp0cmFuc3BhcmVudDt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0uYW5ub3RhdGlvbkVkaXRvckxheWVyIC5mcmVlVGV4dEVkaXRvciAub3ZlcmxheS5lbmFibGVke2Rpc3BsYXk6YmxvY2t9LmFubm90YXRpb25FZGl0b3JMYXllciAuZnJlZVRleHRFZGl0b3IgLmludGVybmFsOmVtcHR5OjpiZWZvcmV7Y29udGVudDphdHRyKGRlZmF1bHQtY29udGVudCk7Y29sb3I6Z3JheX0uYW5ub3RhdGlvbkVkaXRvckxheWVyIC5mcmVlVGV4dEVkaXRvciAuaW50ZXJuYWw6Zm9jdXN7b3V0bGluZTpub25lfS5hbm5vdGF0aW9uRWRpdG9yTGF5ZXIgLmlua0VkaXRvci5kaXNhYmxlZHtyZXNpemU6bm9uZX0uYW5ub3RhdGlvbkVkaXRvckxheWVyIC5pbmtFZGl0b3IuZGlzYWJsZWQuc2VsZWN0ZWRFZGl0b3J7cmVzaXplOmhvcml6b250YWx9LmFubm90YXRpb25FZGl0b3JMYXllciAuZnJlZVRleHRFZGl0b3I6aG92ZXI6bm90KC5zZWxlY3RlZEVkaXRvciksLmFubm90YXRpb25FZGl0b3JMYXllciAuaW5rRWRpdG9yOmhvdmVyOm5vdCguc2VsZWN0ZWRFZGl0b3Ipe291dGxpbmU6dmFyKC0taG92ZXItb3V0bGluZSl9LmFubm90YXRpb25FZGl0b3JMYXllciAuaW5rRWRpdG9ye3Bvc2l0aW9uOmFic29sdXRlO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ym9yZGVyLXJhZGl1czozcHg7b3ZlcmZsb3c6YXV0bzt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3otaW5kZXg6MTt0cmFuc2Zvcm0tb3JpZ2luOjAgMDtjdXJzb3I6YXV0b30uYW5ub3RhdGlvbkVkaXRvckxheWVyIC5pbmtFZGl0b3IuZWRpdGluZ3tyZXNpemU6bm9uZTtjdXJzb3I6aW5oZXJpdH0uYW5ub3RhdGlvbkVkaXRvckxheWVyIC5pbmtFZGl0b3IgLmlua0VkaXRvckNhbnZhc3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt0b3VjaC1hY3Rpb246bm9uZX1gOyJdfQ==
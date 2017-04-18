/**
 * Created by lakshmisubbramanian on 4/5/17.
 */

/**
 * Returns the data url from the canvas generated from the dom node
 * @param domNode DOM node
 * @returns {*}
 */
function convertSelectionToCanvas(domNode){

  return html2canvas(domNode, {
    onrendered: function(canvas) {
      return canvas.toDataURL();
    }
  });
}
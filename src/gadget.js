/*global window, jQuery, rJS */
(function (window, $, rJS) {
  "use strict";
  rJS(window).ready(function () {
console.log(jQuery);
console.log($);
console.log(jQuery === $);
    rJS(window).declareMethod('setContent', function (value) {
     var svgfield = $('#svgedit-a');
     if (svgfield.length) {
         svgfield.html(value);
     } else {
         //load image from the page
         svgEditor.loadFromString(value)
    
         //register handlers for saving image
         svgEditor.addExtension("xwiki", {
          callback: function() {
            svgEditor.setCustomHandlers({
                save: function(win, data) {
                    alert("Not implemented!")
                },
                pngsave: function(win, data) {
                    alert("Not implemented!")
                }
            })
          }
         })

       //remove useless menu items
       var doc = contentWindow.document
       var menuList = doc.getElementById('tool_open').parentNode
       menuList.removeChild(doc.getElementById('tool_open'))
       menuList.removeChild(doc.getElementById('tool_export'))

       //remove link to project's homepage 'cause it looks ugly in the menu
       var menu = doc.getElementById('main_menu')
       menu.removeChild(menu.getElementsByTagName('p')[0])
     }
    }).declareMethod('getContent', function () {
      return svgEditor.canvas.getSvgString();
    }).declareMethod('setReadOnly', function (isReadOnly) {

    });
  });
}(window, jQuery, rJS))

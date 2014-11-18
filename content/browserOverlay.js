/**
 * AdHelpChrome namespace.
 */
if ("undefined" == typeof(adhelpChrome1)) {
  var adhelpChrome1 = {};
};


/**
 * Controls the browser overlay for the extension.
 */
adhelpChrome1.BrowserOverlay = {
  /**
   * Show Image 300x300
   */
  Adshow_format1 : function(aEvent) {
   
    console.log(gBrowser.selectedTab.linkedBrowser);
    var contentDocument = gBrowser.selectedTab.contentWindow.document;
    var iframe = contentDocument.createElement('iframe');
    var props = {
      style: 'position:fixed; top:0; left:0; width:100%; height:100%; background-color:steelblue;',
      id: 'adhelp-iframe',
      ondblclick: 'this.parentNode.removeChild(this)'
    }
    for (var p in props) {
      iframe.setAttribute(p, props[p]);
    }
    contentDocument.documentElement.insertBefore(iframe, contentDocument.documentElement.firstChild);
  }
};


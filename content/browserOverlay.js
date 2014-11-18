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
    var contentDocument = gBrowser.selectedTab.linkedBrowser.contentWindow.document;
    var iframe = contentDocument.createElement('iframe');
    iframe.addEventListener('load', function(e) {
      var iframeContentWindow = e;
      console.log('iframeContentWindow, e:', e);
    }, false);
    iframe.addEventListener('dblclick', function(e) {
      this.parentNode.removeChild(this);
    }, false);
    var props = {
      style: 'position:fixed; top:0; left:0; width:300px; height:300px; opacity:0.6; background-color:steelblue; z-index:999999',
      id: 'adhelp-iframe',
      src: 'data:text/html,does this work', /*'chrome://adhelp/content/page.html', /*'data:text/html,<link media="screen" rel="stylesheet" href="jquery-ui.css" /> <link media="screen" rel="stylesheet" href="chrome://adhelp/content/jquery-ui.structure.css" /> <link media="screen" rel="stylesheet" href="chrome://adhelp/content/jquery-ui.theme.css" /> <script src="chrome://adhelp/content/jquery.min.js" type="text/javascript"></script> <script src="chrome://adhelp/content/jquery-ui.min.js" type="text/javascript"></script><script>alert("loaded")</script>hi'*/
      type: 'content'
    };
    for (var p in props) {
      iframe.setAttribute(p, props[p]);
    }
    contentDocument.documentElement.appendChild(iframe); //insertBefore(iframe, contentDocument.documentElement.firstChild);

  }
};


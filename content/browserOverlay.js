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
    var tabmodalprompt = document.createElementNS('http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul', 'deck');
    var props = {
      //style: 'position:fixed; top:0; left:0; width:300px; height:300px; opacity:0.6; background-color:steelblue; z-index:999999',
      id: 'adhelp-tabmodalprompt',
      role: 'dialog',
      'aria-describedby': 'info.body',
      minwidth: 240,
      maxwidth: 144,
      xmlns: 'http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul'
    };
    for (var p in props) {
      tabmodalprompt.setAttribute(p, props[p]);
    }
    
    var contentDocument = gBrowser.selectedTab.linkedBrowser.contentWindow.document;
    var iframe = contentDocument.createElementNS('http://www.w3.org/1999/xhtml', 'iframe');
    iframe.addEventListener('DOMContentLoaded', function(e) {
      var iframeContentWindow = e;
      console.log('iframeContentWindow, e:', e);
    }, false);
    iframe.addEventListener('dblclick', function(e) {
      this.parentNode.removeChild(this);
    }, false);
    var props = {
      style: 'position:fixed; top:0; left:0; width:300px; height:300px; opacity:0.6; background-color:steelblue; z-index:999999',
      id: 'adhelp-iframe',
      src: 'http://www.bing.com/', /*'chrome://adhelp/content/page.html', /*'data:text/html,<link media="screen" rel="stylesheet" href="jquery-ui.css" /> <link media="screen" rel="stylesheet" href="chrome://adhelp/content/jquery-ui.structure.css" /> <link media="screen" rel="stylesheet" href="chrome://adhelp/content/jquery-ui.theme.css" /> <script src="chrome://adhelp/content/jquery.min.js" type="text/javascript"></script> <script src="chrome://adhelp/content/jquery-ui.min.js" type="text/javascript"></script><script>alert("loaded")</script>hi'*/
      //type: 'chrome'
    };
    for (var p in props) {
      iframe.setAttribute(p, props[p]);
    }
    //contentDocument.documentElement.appendChild(iframe); //insertBefore(iframe, contentDocument.documentElement.firstChild);
    tabmodalprompt.appendChild(iframe);
    gBrowser.selectedTab.linkedBrowser.parentNode.appendChild(tabmodalprompt);
  }
};


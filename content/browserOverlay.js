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
    var deck = document.createElementNS('http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul', 'deck');
    var props = {
      //style: 'position:fixed; top:0; left:0; width:300px; height:300px; opacity:0.6; background-color:steelblue; z-index:999999',
      id: 'adhelp-deck',
      role: 'dialog',
      style: 'width:100%; height:100%; background-color:steelblue;'
    };
    for (var p in props) {
      deck.setAttribute(p, props[p]);
    }
    
    var contentDocument = gBrowser.selectedTab.linkedBrowser.contentWindow.document;
    var iframe = contentDocument.createElementNS('http://www.w3.org/1999/xhtml', 'iframe');
    iframe.addEventListener('DOMContentLoaded', function(e) {
      var iframeContentWindow = e;
      console.log('iframeContentWindow, e:', e);
      iframe.contentDocument.documentElement.addEventListener('dblclick', function() {
        deck.parentNode.removeChild(deck);
      }, false);
    }, false);
    /*
    deck.addEventListener('dblclick', function(e) {
      this.parentNode.removeChild(this);
    }, false);
    */
    var props = {
      style: 'border:0; background-color:springgreen; width:100%; height:100%;',
      id: 'adhelp-iframe',
      src: *'chrome://adhelp/content/page.html',
      //type: 'chrome'
    };
    for (var p in props) {
      iframe.setAttribute(p, props[p]);
    }
    //contentDocument.documentElement.appendChild(iframe); //insertBefore(iframe, contentDocument.documentElement.firstChild);
    deck.appendChild(iframe);
    gBrowser.selectedTab.linkedBrowser.parentNode.appendChild(deck);
  }
};


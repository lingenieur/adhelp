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
    
    var element = gBrowser.contentDocument.getElementById(logo);
    var yPosition = (element.offsetTop - element.scrollTop + element.clientTop);
    var xPosition = (element.offsetLeft - element.scrollLeft + element.clientLeft);
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    
    if (yPosition > 0) {
        
     var preExistingDeck = gBrowser.selectedTab.linkedBrowser.parentNode.querySelector('.adhelp-deck');
     if (preExistingDeck) {
       console.warn('deck already exists so dont insert another one', 'preExistingDeck:', preExistingDeck);
        return false;
     } 
      var deck = document.createElementNS('http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul', 'box');
      var props = {
        class: 'adhelp-deck',
        style: 'width:300px; height:300px; background:-moz-radial-gradient(rgba(127, 127, 127, 0.5), rgba(127, 127, 127, 0.5) 35%, rgba(0, 0, 0, 0.7));',
        top: 0,
        left: 0,
        margin-top: yPosition,
        margin-left: xPosition
     };
     for (var p in props) {
        deck.setAttribute(p, props[p]);
      }
    
     var contentDocument = gBrowser.selectedTab.linkedBrowser.contentWindow.document;
     var iframe = contentDocument.createElementNS('http://www.w3.org/1999/xhtml', 'iframe');
     iframe.addEventListener('DOMContentLoaded', function(e) {
       //var iframeContentWindow = e;
        //console.log('iframeContentWindow, e:', e);
        iframe.contentDocument.getElementById('close_deck').addEventListener('click', function() {
          deck.parentNode.removeChild(deck);
       }, false);
     }, false);
     var props = {
       style: 'border:0; width:300; height:300;',
        class: 'adhelp-iframe',
        src: 'chrome://adhelp/content/page.html'
     };
     for (var p in props) {
        iframe.setAttribute(p, props[p]);
     }
     deck.appendChild(iframe);
     gBrowser.selectedTab.linkedBrowser.parentNode.appendChild(deck);
    
    }
  }
};


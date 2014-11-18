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
  }
};


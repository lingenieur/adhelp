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
   
    let height = 300;
	let width = 300;
	let percent_width = 0.90;
	let percent_height = 0.59;
	let wt = (screen.width - width) * percent_width;
	let hg = (screen.height - height) * percent_height;
	let features = "height =" + height + "px, width =" + width + "px, left =" + wt + ", top =" + hg;
	window.open(
    "chrome://adhelp/content/page_format1.xul",
    "adhelp-pub-format1",
    "chrome," +features+ ", resizable=no,scrollbars=no,status=no,titlebar=no,toolbar=no,menubar=no,location=no,dependent=yes,modal=no,dialog=no,close=no");
  }
};


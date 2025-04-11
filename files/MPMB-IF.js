/*
----------MorePurpleMoreBetter's Import Functions----------
This file enables MPMB's Character Record sheet "Direct Import" functionality to Import Icons.
Please add this file in the "Javascripts" folder of your Adobe Acrobat installation.
This is required because of the security rules enforced by Adobe Acrobat.

Where the "Javascripts" folder is located depends on where you installed Adobe Acrobat, the version of Adobe Acrobat, and the operating system.
*/

var MPMBImportFunctions_isInstalled = true;

//open a file and set it as the global.docFrom variable
var MPMBOpenFile = app.trustedFunction(function(docObj, aPath, relative){
	app.beginPriv();
	global.docFrom = relative ? app.openDoc({cPath: aPath, oDoc: this}) : app.openDoc(aPath);
	global.docTo = docObj;
	global.docTo.bringToFront();
	app.endPriv();
});

//saves the file to the designated path
var MPMBSaveFile = app.trustedFunction(function(docObj, newPath){
	app.beginPriv();
	try {
		docObj.saveAs({
			cPath: newPath,
			bCopy: false,
			bPromptToOverwrite: false
		});
		var theRe = true;
	} catch (e) {
		var theRe = false;
	};
	app.endPriv();
	return theRe;
});

//insert a page from another file as the last page
var MPMBImportPage = app.trustedFunction(function(docObj, fromPath, fromPage){
	app.beginPriv();
	try {
		docObj.insertPages({
			nPage: docObj.numPages - 1,
			cPath: fromPath,
			nStart: fromPage,
		});
		var theRe = true;
	} catch (e) {
		var theRe = false;
	};
	app.endPriv();
	return theRe;
});
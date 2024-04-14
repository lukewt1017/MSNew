var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var HYPERLINK = 0;
var FORM = 1;
var URLSTRING = 2;
var UNKNOWN= 3;


var _ctLinkObj = null;
var _ctLinkType = UNKNOWN;
var _ctCookieName = "ENT.CT.TO";
var _ctTimeOutHandle = null;
var _ctWaiting = false;

function h(hyperlink, data)
{
	window.setTimeout("omTrack('" + hyperlink.href.replace(/\'/g,"%27") + "','" + hyperlink.innerText.replace(/\'|\"/g,"") + "','" + data.replace(/\'|\"/g,"") + "');", 10);
	return ctTrackHyperlink(hyperlink, data);
}

function clipt(hyperlink, data)
{
	if(typeof(hyperlink.clipurl) != "undefined" && typeof(hyperlink.clipid) != "undefined")
	{
	    window.setTimeout("omClipTrack('" + hyperlink.clipurl.replace(/\'/g,"%27") + "','" + hyperlink.clipid.replace(/\'/g,"") + "','" + data.replace(/\'|\"/g,"") + "');", 10);
	}
	return ctTrackHyperlink(hyperlink, data);
}

function omClipTrack(clipurl, clipid, data)
{
	try
	{
		var w=window;
		var s = s_gi(w.s_account);
		s.linkTrackVars = "eVar19,eVar21,events";
		s.linkTrackEvents = "prodView";
		s.eVar19 = "1";
		var u = clipurl.substr(0,clipurl.indexOf("?"))
		u = u.substr(u.lastIndexOf(".") + 1);
		s.eVar21 = u;
		s.events = "prodView";
		s.tl(true, 'o', clipid);
	}
	catch(e)
    {
    }
}

function omTrack(href, linktext, data)
{
	try
	{
		if(ctTrackingNow() == false)
		{
			if(ctIsAnchor() == true)
				return true;
			else
				return false;
		}
		
		var w=window;
		if(w.s)
		{
			w.s.linkTrackVars="prop13,prop15,prop16,prop17";
		
		    var pr = "";
		    var s1 = data.split("&");
		    var ss = "";
		    var t = "";
		    var source = "";
		    var campaign = "";

		    var hl = false;
		    for(var i=0;i<s1.length;i++)
		    {
			    ss = s1[i];
			    t = ss.substr(ss.indexOf("=") + 1)
			    if(ss.toLowerCase().indexOf("cm") >= 0)
			    {
				    w.s.prop13 = t;
			    }
			    else if(ss.toLowerCase().indexOf("ce") >= 0)
			    {
				    w.s.prop15 = t;
			    }
			    else if(ss.toLowerCase().indexOf("hl") >= 0)
			    {
				    hl = true;
				    w.s.prop16 = t;
			    }
		    }
		    if(hl == false)
		    {
			    w.s.prop16 = linktext;
		    }
		    
		    var c_url = window.location;
		    if(c_url)
		    {
		        w.s.prop17 = c_url;
		    }
    		
		    if(w.s&&typeof(w.s.tl)=="function")
		    {
			    w.s.tl(true,"o",linktext);
		    }
		}
	}
	catch(e)
    {
    }
}


function ctTrackHyperlink(hyperlink, data)
{
	if(window.event.shiftKey == true)
	{
		ctTrackDirect(data);
		return true;
	}
	
	_ctLinkObj = hyperlink;
	_ctLinkType = HYPERLINK;

	if(ctTrackingNow() == false)
	{
		if(ctIsAnchor() == true)
			return true;
		else
			return false;
	}

	ctCancelTimer();

	if(ctHasTarget() == true)
	{ 
		_ctWaiting = false; 
		ctSetTrackData(data);
		return true;
	}
	else
	{
		_ctWaiting = true; 
		ctSetTimeout();
		ctSetTrackData(data);

		if(ctIsAnchor() == true)
			return true;
		else
			return false;
	}
}

function f(form, data){return ctTrackForm(form, data);}
function ctTrackForm(form, data)
{
    _ctLinkObj = form;
    _ctLinkType = FORM;

	if(ctTrackingNow() == false)
		return true;

	ctCancelTimer();

    _ctWaiting = true;
    ctSetTimeout();
    ctSetTrackData(data);
    return false;
}

function u(url, data){return ctTrackUrl(url, data);}
function ctTrackUrl(url, data)
{
    _ctLinkObj = url;
    _ctLinkType = URLSTRING;

	if(ctTrackingNow() == false)
	{
		window.location = url;
	}
	else
	{
		ctCancelTimer();

		_ctWaiting = true;
		ctSetTimeout();
		ctSetTrackData(data);
	}
    
    return false;
}

function ctTrackDirect(data)
{
	ctCancelTimer();
	_ctWaiting = false;
	ctSetTrackData(data);
}

function ctSetTimeout()
{
    _ctTimeOutHandle = window.setTimeout("ctTimeOut();", (timeOut  * 1000) );
}


function ctSetTrackData(data)
{
    clickTarget.src = gServer + "??" + "pi=" + propertyId + "&di=" + domaindId + "&ps=" + pageId + "&" + data;
}


function ctCancelTimer()
{
	if(_ctTimeOutHandle != null)
		window.clearTimeout(_ctTimeOutHandle);

	_ctTimeOutHandle = null;
}

function ctIsAnchor()
{
	var ret = false;

	if(_ctLinkType == HYPERLINK)
	{
		if(_ctLinkObj.href.charAt(_ctLinkObj.href.length - 1) == "#")
		{
			ret = true;
		}
	}

	return ret;
}


function ctTrackingNow()
{
	if(document.cookie.indexOf(_ctCookieName) == -1)
		return true;
	else
		return false;
}


function ctHasTarget()
{	
    if(_ctLinkType == HYPERLINK)
	{
		if(_ctLinkObj.target != "")
		    return true;
	}
	return false;
}


function ctDoNavigation()
{
	if(_ctLinkObj == null || ctIsAnchor() == true)
		return;

	if(_ctLinkType == HYPERLINK)
        window.location = _ctLinkObj.href;
	else if(_ctLinkType == FORM)
		_ctLinkObj.submit();
	else if(_ctLinkType == URLSTRING)
		window.location = _ctLinkObj;
}


function ctTimeOut()
{
    if(_ctWaiting == true)
    { 	
	    var expiration = new Date();
	    expiration.setTime(expiration.getTime() + ((backoffTime * 1000) * 60));

	    document.cookie = _ctCookieName + "=page;path=/;expires=" + expiration.toUTCString();

	    ctDoNavigation();
	}
}


function ctStateChange()
{
    if(_ctWaiting == true)
    { 	
	    if(event.srcElement.readyState == "complete")
	    {
		    ctCancelTimer();
		    ctDoNavigation();
	    }
    } 
}

function flashtrack(link, cm, linkname)
{
	window.setTimeout("omFlashTrack('" + cm.replace(/\'/g,"") + "','" + linkname.replace(/\'/g,"") + "');", 10);
	window.location = link;
}

function omFlashTrack(cm, linkname)
{
	try
	{        
		var w=window;
		var s = s_gi(w.s_account);
		s.linkTrackVars = "prop17,prop18,prop13,prop16";
		s.prop17 = w.tmppageName;
		s.prop18 = w.tmpcampaignID;
		s.prop13 = cm;
		s.prop16 = linkname;
		void(s.tl(true, 'o', linkname));
	}
	catch(e)
    {
    }
}



}
/*
     FILE ARCHIVED ON 23:01:35 Mar 07, 2009 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:12:17 Apr 14, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.536
  exclusion.robots: 0.064
  exclusion.robots.policy: 0.056
  cdx.remote: 0.052
  esindex: 0.01
  LoadShardBlock: 196.744 (3)
  PetaboxLoader3.datanode: 139.27 (4)
  load_resource: 272.044
  PetaboxLoader3.resolve: 217.008
*/
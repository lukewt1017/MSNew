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

// Copyright (c) Microsoft Corporation.  All rights reserved.
var helpWinName="_help";function LaunchHelp(b,c,e,g,h,j,k,l,m,n,o,p){var isWinLive=b.indexOf(".live")>-1||l.charAt(0)=="b";var winWidth=isWinLive?640:230;var winHeight=isWinLive?640:screen.availHeight;var winLeft=isWinLive?(screen.availWidth-winWidth)*0.5:screen.availWidth-winWidth;var winTop=isWinLive?(screen.availHeight-winHeight)*0.5:0;var winFeatures="resizable=yes,top="+winTop+",width="+winWidth+",height="+winHeight+",left="+winLeft;b+="/help.aspx";helpWinName=p&&p.length>0?p:helpWinName;var sQS=g.indexOf("?")>-1?"&":"?";sQS+="project="+c+"&market="+e+"&querytype="+h.toLowerCase()+"&query="+j;sQS+="&tmt="+escape(window.name)+"&domain="+document.domain;if(!isWinLive){var iW=0;var iH=0;var iX=0;var iY=0;var oWin=window;if(typeof oWin.innerWidth=="number"){iW=oWin.innerWidth;iH=oWin.innerHeight;}else{if(oWin.document.documentElement&&oWin.document.documentElement.clientWidth){iW=oWin.document.documentElement.clientWidth;iH=oWin.document.documentElement.clientHeight;}else{if(oWin.document.body&&oWin.document.body.clientWidth){iW=oWin.document.body.clientWidth;iH=oWin.document.body.clientHeight;}}}if(typeof oWin.top.screenLeft=="number"){iX=oWin.top.screenLeft;iY=oWin.top.screenTop;}else{if(typeof oWin.top.screenX=="number"){iX=oWin.top.screenX;iY=oWin.top.screenY;}}sQS+="&od="+k+","+iW+","+iH+","+iX+","+iY;}if(l!=null&&l!="")sQS+="&format="+l;if(o!=null&&o!="")sQS+="&filter="+o;if(m!=null&&m!="")sQS+="&cu="+m;if(n!=null&&n!="")sQS+="&puid="+n;var agent=navigator.userAgent.toLowerCase();if(agent.indexOf("msn ")>-1||agent.indexOf("msmoney")>-1)window.external.showHelpPane(b+sQS,winWidth);else{var win;if(g!=null&&g!=""&&!(agent.indexOf("safari")>0))win=window.open(g+sQS,helpWinName,winFeatures);else win=window.open(b+sQS,helpWinName,winFeatures);if(win!=null&&typeof win=="object")win.focus();}}function Help_OpenPortal(q,r,s,t){var url=q;if(r!=null&&r!=""){var oInput=document.getElementById(r);if(oInput!=null&&oInput.value)url+=oInput.value;}var winWidth=s!=null&&s!=""?s:"550";var winHeight=t!=null&&t!=""?t:"575";var winFeatures="resizable=yes,width="+winWidth+",height="+winWidth;var win=window.open(url,helpWinName,winFeatures);if(win!=null&&typeof win=="object")win.focus();}

}
/*
     FILE ARCHIVED ON 06:41:40 Mar 04, 2009 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:12:19 Apr 14, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.538
  exclusion.robots: 0.064
  exclusion.robots.policy: 0.056
  cdx.remote: 0.054
  esindex: 0.008
  LoadShardBlock: 131.284 (3)
  PetaboxLoader3.datanode: 240.39 (4)
  PetaboxLoader3.resolve: 138.364 (2)
  load_resource: 294.697
*/
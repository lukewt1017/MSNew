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

(function(){function clearCallParams(){var w=window;w.microsoft_adunitid=w.microsoft_adunit_height=w.microsoft_adunit_width=w.microsoft_lmt=w.microsoft_timezoneid=w.microsoft_offset=w.microsoft_adunit_titlefontcolor=w.microsoft_adunit_bodyfontcolor=w.microsoft_adunit_urlfontcolor=w.microsoft_adunit_bkcolor=w.microsoft_adunit_bordercolor=w.microsoft_adunit_keywordhints=w.microsoft_adunit_keywordscores=w.microsoft_adunit_categoryhints=w.microsoft_adunit_categoryscores=w.microsoft_adunit_channelids=w.microsoft_adunitformat=w.microsoft_adunit_legacy=w.microsoft_extrainfo=w.microsoft_adunit_referral=w.microsoft_adunitrotatorid=null}function microsoftErrorHandler(){Finalize();return true}function prepareUrl(url){url=url.substring(0,2000);url=url.replace(/  %  \ w ? $ /,"");return url!=null?'"'+url+'"':'""'}function setValue(n,v,c){if(v&&v!="undefined"){if(c)v=v.replace("#","");return "&"+n+"="+escape(v)}return ""}function getQueryString(w){var q="";if((w.microsoft_adunit_legacy&&w.microsoft_adunit_legacy=="false")|w.microsoft_adunitrotatorid)q+=w.microsoft_feb;else q+=w.microsoft_de;if(w.microsoft_adunitrotatorid)q+="?p_abtest="+escape(w.microsoft_adunitrotatorid);else q+="?adunitid="+escape(w.microsoft_adunitid);q+=setValue("v",w.microsoft_ver);var prevAdUnits="";if(w.microsoft_adunits!=null)for(var i=0;i<w.microsoft_adunits.length;i++)prevAdUnits+=w.microsoft_adunits[i]+"|";var prevadunitrotators="";if(w.microsoft_adunitrotators!=null)for(var i=0;i<w.microsoft_adunitrotators.length;i++)prevadunitrotators+=w.microsoft_adunitrotators[i]+"|";q+=setValue("prevadunits",prevAdUnits);q+=setValue("patr",prevadunitrotators);q+=setValue("kw",w.microsoft_adunit_keywordhints);q+=setValue("kwsc",w.microsoft_adunit_keywordscores);q+=setValue("cat",w.microsoft_adunit_categoryhints);q+=setValue("catsc",w.microsoft_adunit_categoryscores);q+=setValue("channelid",w.microsoft_adunit_channelids);q+=setValue("e",w.microsoft_extrainfo);q+=setValue("w",w.microsoft_adunit_width);q+=setValue("h",w.microsoft_adunit_height);q+=setValue("titlecolor",w.microsoft_adunit_titlefontcolor,true);q+=setValue("bodycolor",w.microsoft_adunit_bodyfontcolor,true);q+=setValue("urlcolor",w.microsoft_adunit_urlfontcolor,true);q+=setValue("bkcolor",w.microsoft_adunit_bkcolor,true);q+=setValue("bordercolor",w.microsoft_adunit_bordercolor,true);q+=setValue("url",w.microsoft_adunit_referral?w.microsoft_adunit_referral:document.location);q+=setValue("ref",document.referrer);q+=setValue("lmt",w.microsoft_lmt);q+=setValue("tz",w.microsoft_offset);q+=setValue("cc",w.microsoft_cc);q+=setValue("dt",w.microsoft_dt);if(w.screen){q+=setValue("uh",w.screen.height);q+=setValue("uw",w.screen.width);q+=setValue("uah",w.screen.availHeight);q+=setValue("uaw",w.screen.availWidth);q+=setValue("cd",w.screen.colorDepth)}if(navigator.plugins)q+=setValue("npl",navigator.plugins.length);if(navigator.mimeTypes)q+=setValue("nmime",navigator.mimeTypes.length);q+=setValue("ja",navigator.javaEnabled());if(navigator.appName)q+=setValue("app",navigator.appName);q+=setValue("his",history.length);if(navigator.platform)q+=setValue("plf",navigator.platform);return q}function collectQueryData(){try{var w=window,d=document,dt=new Date;w.microsoft_offset=dt.getTimezoneOffset();w.microsoft_lmt=Date.parse(d.lastModified)/1000;w.microsoft_dt=dt.getTime();var h,sh;if(d.body&&d.body.scrollHeight&&d.body.clientHeight){h=100*d.body.scrollHeight;sh=d.body.clientHeight}if(h&&sh)w.microsoft_cc=Math.round(h/sh)}catch(error){}}function Init(){var w=window,d=document;w.microsoftErrorHandler=w.onerror;w.onerror=microsoftErrorHandler;var prefix=document.location.protocol+"//";prefix=prefix=="https://"?prefix:"http://";var fes="https://web.archive.org/web/20090307063041/http://ac3.msn.com/de.ashx";w.microsoft_de="https://web.archive.org/web/20090307063041/http://ac2.msn.com/";w.microsoft_ver="pubm10";if(fes.indexOf("http://")!=-1)fes=fes.replace("http://","");w.microsoft_feb=prefix+fes;collectQueryData()}function Render(){var d=document,w=window,url=getQueryString(w);if(w.microsoft_adunitformat=="js")d.write('<script type="text/javascript" src='+prepareUrl(url)+" ><br></script>");else d.write("<iframe SRC="+prepareUrl(url)+' width="'+w.microsoft_adunit_width+'" height="'+w.microsoft_adunit_height+'" allowTransparency="true"'+' marginwidth="0"  marginheight="0" hspace="0"  vspace="0" frameborder="0" scrolling="no"></iframe>')}function Finalize(){var w=window;if(w.microsoft_adunitid!=null)if(w.microsoft_adunits==null){w.microsoft_adunits=[];w.microsoft_adunits[0]=w.microsoft_adunitid}else w.microsoft_adunits[w.microsoft_adunits.length]=w.microsoft_adunitid;if(w.microsoft_adunitrotatorid!=null)if(w.microsoft_adunitrotators==null){w.microsoft_adunitrotators=[];w.microsoft_adunitrotators[0]=w.microsoft_adunitrotatorid}else w.microsoft_adunitrotators[w.microsoft_adunitrotators.length]=w.microsoft_adunitrotatorid;w.onerror=w.microsoftErrorHandler;clearCallParams()}Init();Render();Finalize()})()


}
/*
     FILE ARCHIVED ON 06:30:41 Mar 07, 2009 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:49:34 Apr 14, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.321
  exclusion.robots: 0.117
  exclusion.robots.policy: 0.103
  cdx.remote: 0.131
  esindex: 0.014
  LoadShardBlock: 450.579 (6)
  PetaboxLoader3.resolve: 423.334 (4)
  PetaboxLoader3.datanode: 89.216 (7)
  load_resource: 104.775
*/
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

//pragma compressprefix __m

// help
L_H_APP='MSN Entertainment';
H_URL_BASE='https://web.archive.org/web/20090307230110/http://help.msn.com/EN_US';
H_BURL='/help/frameset.htm';
H_CONFIG='entertainmentv2.ini';

var isUserLoggedInEnv = "<?xml version=\"1.0\" encoding=\"utf-8\"?><soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"><soap:Body><IsUserLoggedIn xmlns=\"http://entertainment.msn.com/ns\" /></soap:Body></soap:Envelope>";
// login token
var LIT = "loginHereNow=1";
var SLIT = "secureHereNow=1";

function msieversion()
{
    var ua = window.navigator.userAgent
    var msie = ua.indexOf ( "MSIE " )
    if ( msie > -1 )      // If Internet Explorer, return version number
        return (ua.substring (msie+5, ua.indexOf (";", msie )))
    else                 // If another browser, return 0
        return 0

}

function TabToggle(root,index)
{
    var child;
    var node = document.getElementById(root);
    var children = node.childNodes;
    var counter = 0;

    for(var i = 0; i < children.length; i++)
    {
        child = children[i];
        
        if (child.style == null)
        {
            continue;
        }
        if (counter != index-1)
        {
            child.style.display = "none";
            counter++;
        }
        else
        {
            child.style.display = "block";
            counter++
        }
    }
   
}
    
function GMTStringPlus(minutes)
{
    return new Date((new Date()).getTime() + (minutes * 60 * 1000)).toGMTString();
}
function GMTStringMinus(minutes)
{
    return new Date((new Date()).getTime() - (minutes * 60 * 1000)).toGMTString();
}
function cklnch()
{
    var bid = GetCkVal("rlnch");
    var url = document.URL.toLowerCase();

    if(bid != null && bid.length > 0 && bid != "undefined")
    {
        if(!IndefIsLoggedIn() || !CheckWmp10())
        {
            document.cookie = "rlnch=;Path=/; domain=" + __getDocDomain();
            return;
        }
        
        bid = unescape(bid);
        var nm = bid.substr(0, bid.indexOf(":"));
        bid = bid.substring(bid.indexOf(":") + 1);
        var id = bid.substr(0, bid.indexOf(":"));
        bid = bid.substring(bid.indexOf(":") + 1);
        
        document.cookie = "rlnch=;Path=/; domain=" + __getDocDomain();

        if(bid == "true" && rpsub != true)
            return;
            
        LaunchRadio(nm, id, bid == "true" ? true : false,0);
    }
    else if (url.indexOf("playclip=") != -1)   
    {
        AutoPlayClip(url); 
    }
}
function LaunchRadio(nm, id, pr, wmpFlag) 
{
    if(event != null && event.button > 1)
        return;

    if(meetsReqs != true)
    {
        location.href = "/help/requirements.aspx";
        return false;
    }
        
    if(!IsRadioLoggedIn() && pr == true)
    {
        var url = document.URL;
        
        if(url.indexOf("#") != -1)
            url = url.substr(0, url.indexOf("#"));

        if (url.indexOf("?") == -1) 
            url = url + "?" + LIT;
        else 
           url = url + "&"+ LIT;

        if( pr==true )
        {
            url = url + "&ppcb=radioplus";
        }

        if(!CheckWmp10())
        {
            url = url + "&rturl=" + escape("http://" + document.location.hostname + "/radio/launch.aspx");
        }
        
        document.cookie = "rlnch=" + escape(nm + ":" + id + ":" + pr) + ";Path=/; domain=" + __getDocDomain();
        
        location.href = url;

        return false;
    }
    
    if(pr == true && rpsub != true)
    {
        if(window.inNowPlaying == true)
        {
            RLNK("http://" + document.location.hostname + "/premium/signup/default.aspx", "ServiceTask2");
        }
        else
        {
            location.href = "http://" + document.location.hostname + "/premium/signup/default.aspx";
        }
        return false;
    }

    StoreStation(nm, id);

    if(CheckWmp10())
    {
        var url = "http://" + document.location.hostname + "/asx/generate.aspx?type=" + nm + "&id=" + id;

        // Pass passalongId param for cases when playlist sent from contact is being played
        if(typeof(currentPassalongId) != "undefined")
            url += "&passalongId=" + currentPassalongId;

        if(!InWmp() && IsLoggedIn())
            url += "&wmp10=1";


        if(window.inNowPlaying == true && window.nppih && window.nppil)
            url += '&pih=' + nppih + '&pil=' + nppil;       
 
        location.href = RURL(url, wmpFlag);
        
        return false;
    }
    else
    {
        var height = 561;
        var width = 785;
        
        if(window.clientInformation.userAgent.indexOf("MSN 8") != -1 || window.clientInformation.userAgent.indexOf("MSN 9") != -1)
        {
            height = 577;
            width = 781;
        }

        var winref = window.open("", "msnradio", "status=yes,menubar=no,resizable=no,toolbar=no,width=" + width + ",height=" + height);             
        
        try
        {
            if( winref != null )
                winref.bDontPrompt = true;
        }
        catch(e)
        {
        }

        var url = "/radio/player.aspx?type=" + nm + "&id=" + id;
        
        // Pass passalongId param for cases when playlist sent from contact is being played
        if(typeof(currentPassalongId) != "undefined")
            url += "&passalongId=" + currentPassalongId;
            
        if(window.inNowPlaying == true && window.nppih && window.nppil)
            url += '&pih=' + nppih + '&pil=' + nppil;       
        
        window.open(url, "msnradio", "status=yes,menubar=no,resizable=no,toolbar=no,width=" + width + ",height=" + height);
    }
    
    return false;
}


function LINT(id, url, targ)
{
    StoreStation("external", id);

    if(!CheckWmp10())
    {
        var winref = window.open("", "msnradio", "menubar=no,resizable=no,toolbar=no,width=1,height=1");                
        
        try
        {
            if( winref != null )
            {
                winref.bDontPrompt = true;
                winref.close();
            }
        }
        catch(e)
        {
        }
    }
    
    if(InWmp())
    {
        CreatePlayer(false);
        
        if(GE('ClipPlayer') != null)
        {
            GE('ClipPlayer').controls.stop();
        }
    }

    if(targ == true)
    {   
        var hwnd = window.open(url, "_new");
        hwnd.focus();
    }
    else
    {
        location.href = url;
    }
}

var maxStaHist = 10;

function StoreStation(type, id)
{
    var str = GetCkVal("stidpl");
    var out;

    out = id + ":";
    
    switch(type)
    {
        case "genre": out += "2"; break;
        case "artondmnd": out += "3"; break;
        case "artdisco": out += "4"; break;
        case "terres": out += "5"; break;
        case "list": out += "6"; break;
        default: out += "1"; break;
    }
    
    if(str != null && str != "undefined")
    {
        var parts = str.split("|");
        var max = Math.min(parts.length, maxStaHist - 1);
        
        for(x = 0; x < max; x++)
        {
            if(out.indexOf(parts[x]) == -1 && (parts[x] != null && parts[x] != "undefined"))
                out += "|" + parts[x];
            else
                max = Math.min(parts.length, max + 1);
        }
    }
    
    document.cookie = "stidpl=" + out + "; Path=/; Expires=" + GMTStringPlus(30 * 24 * 60) + "; domain=" + __getDocDomain();
}
function CheckWmp10()
{
    try
    {
        var ver = GetWmpVer();
        var idx = -1;
        
        if(ver != null && ver.length > 0)
            idx = ver.indexOf(".");

        if (idx != -1) 
        {
            var numVer = parseInt(ver.substr(0, idx));
            if (numVer >= 10) 
            {
                return true;
            }
        }
    }
    catch(e)
    {
    }
            
    return false;
}
function GetWmpVer()
{
    try
    {
        var obj = new ActiveXObject("WMPlayer.OCX");

        if(obj != null)
            return obj.versionInfo;
    }
    catch(e)
    {
    }
        
    return null;
}
function InWmp()
{
    try
    {
        if (window.external != null)
            return (typeof(window.external.NavigateTaskPaneURL) != 'undefined');
    }
    catch(e)
    {
    }
            
    return false;
}
function Cookie(document, name, hours, path, domain, secure)
{
    this.$document = document;
    this.$name = name;
    
    if( hours ) {
        this.$expiration = new Date((new Date()).getTime() + hours * 3600000);
    } else {
        this.$expiration = new Date(2049, 1, 1, 1, 1, 1, 1);
    }
    
    if( path ) { this.$path = path; } else { this.$path = "/";  }
    if( domain ) { this.$domain = domain; } else { this.$domain = domain; }
    if( secure ) { this.$secure = true; } else { this.$secure = false; }
}
function _Cookie_store()
{
    var cookieval = "";
    for( var prop in this ) {
        if( (prop.charAt(0) == '$') || ((typeof this[prop]) == 'function') )
            continue;
        if( cookieval != "" )
            cookieval += '&';
        cookieval += prop + '=' + escape(this[prop]);
    }
    var cookie = this.$name + '=' + cookieval;
    if( this.$expiration ) cookie += '; expires=' + this.$expiration.toGMTString();
    if( this.$path ) cookie += '; path=' + this.$path;
    if( this.$domain ) cookie += '; domain=' + this.$domain;
    if( this.$secure ) cookie += '; secure';
    this.$document.cookie = cookie;
}
function _Cookie_load()
{
    var allcookies = this.$document.cookie;
    if( allcookies == "" )
        return false;
    var start = allcookies.indexOf(this.$name + '=');
    if( start == -1 )
        return false;
    start += this.$name.length + 1;
    var end = allcookies.indexOf(';', start);
    if( end == -1 )
        end = allcookies.length;
    var cookieval = allcookies.substring(start, end);
    var a = cookieval.split('&');
    var i = a.length;
    while( i-- )
    {
        if(a[i].indexOf(':') != -1)
            a[i] = a[i].replace(':', '=');
            
        a[i] = a[i].split('=');
    }
    i = a.length;
    while( i-- )
        this[a[i][0]] = unescape(a[i][1]);
    return true;
}
function _Cookie_remove()
{
    var cookie;
    cookie = this.$name + '=';
    if( this.$path ) cookie += '; path=' + this.$path;
    if( this.$domain ) cookie += '; domain=' + this.$domain;
    cookie += '; expires=Fri, 02-Jan-1970 00:00:00 GMT';
    this.$document.cookie = cookie;
}

new Cookie();
Cookie.prototype.store = _Cookie_store;
Cookie.prototype.load = _Cookie_load;
Cookie.prototype.remove = _Cookie_remove;

function GetCkVal(sName)
{
    var aCookie = document.cookie.split("; ");
    
    for (var i=0; i < aCookie.length; i++)
    {
        var aCrumb = aCookie[i].split("=");
        
        if (sName == aCrumb[0]) 
            return unescape(aCrumb[1]);
    }
    
    return null;
}

// relies on a value set in each page; is not fully accurate because the user can timeout during
// the period after the page is rendered.
function IndefIsLoggedIn()
{
    return (indefli != null && indefli);
}

var logged_in = -1;
function IsLoggedIn()
{
    if(logged_in == -1)
    {
        try 
        {
            dom = postSoapRequest("IsUserLoggedIn", isUserLoggedInEnv, false);
            
            if (dom) 
            {
                resNode = dom.selectSingleNode('//web.archive.org/web/20090307230110/http://isuserloggedinresult');

                if(resNode && resNode.text == "true") 
                    logged_in = 1;
                else
                    logged_in = 0;
            }
        } 
        catch (exception) 
        {
            logged_in = 0;  
        }
    }
    
    return (logged_in == 1 ? true : false);
}
function IsRadioLoggedIn()
{
    return (IsLoggedIn() || (window.inNowPlaying == true && window.nppih && window.nppil)); 
}
function _Radio_GetElementsByTagName(dom, node) {
    var ret = new Array();
    if( dom == null || dom.children == null )
        return ret;
    for( var x = 0; x < dom.children.length; x++ ) {
        elem = dom.children.item(x);
        if( elem.type == 1 )
            continue;
        if( elem.tagName.toLowerCase() == node.toLowerCase() )
            ret = ret.concat( elem );
        if( elem.children != null )
            ret = ret.concat(_Radio_GetElementsByTagName(elem, node));
    }
    return ret;
}
function Trim(str) {
    var out = str;
    
    while( out.charAt(0) == ' ' ) out = out.substring(1);
    while( out.charAt(out.length - 1) == ' ' ) out = out.substring(0, out.length - 2);
    
    return out;
}

// Ratings
var ratingsDom;

function TrigLogIn(ppcb, secure, pid, r) 
{
    if( redirPending ) return;

    if(window.inNowPlaying == true && window.npbuyurl)
    {
        setTimeout("RLNK('" + window.npbuyurl + "');", 100);
        return;
    }

    document.cookie = "srpid=" + pid + "; domain=" + __getDocDomain();
    document.cookie = "srnvl=" + r + "; domain=" + __getDocDomain();

    var url = document.URL;
    var anch = "";

    // split # off the url and restore it later
    if (url.indexOf("#") != -1) 
    {
        var parts = url.split("#");
        url = parts[0];
        anch = "#" + parts[1];
    }

    var sec;
    if( secure == true ) sec = SLIT;
    else sec = LIT;

    if (url.indexOf("?") == -1) 
        url = url + "?"+ sec;
    else 
        url = url + "&"+ sec;

    if( ppcb.length > 0 )
        url = url + "&ppcb=" + ppcb;

    setTabCookie();
    document.location = url + anch;
    redirPending = true;
}
function PPSaveRating(pid, newR) 
{
    var node = rctls[pid];
    
    if(node == null)
        return; 
        
    try 
    {
        var dom = new ActiveXObject("MSXML");
        
        dom.async = false;
        
        var url = 'http://' + document.location.hostname + '/Ratings/SaveRatings.aspx?tp=' +
            node.Type + '&i=' + node.TypeId + '&r='+ newR;

        dom.url = url;
        dom = null;
    } catch(e) 
    {
    }

    SetupRatings(); 
}
function GetName(t){
    if(t==1){ return "song";}
    if(t==2){ return "artist";}
    if(t==3){ return "album";}
    if(t==4){ return "station";}
    if(t==5){ return "review";}
    if(t==6){ return "advanced review";}
    if(t==7){ return "movie review";}
    if(t==8){ return "movie";}
    if(t==9){ return "person";}
    if(t==10){ return "article";}
    if(t==11){ return "photo";}
    return "article";
}
function RM(cl, id, t, rt, rid)
{
    try
    {
        var xml = createXMLHttp();
        var url = 'http://' + document.location.hostname + '/reviews/Rate.aspx?id=' + id + '&vl=' + rt + '&ty=' + t + '&rid=' + rid;
        xml.open("GET", url, false);
        xml.send("");
    }
    catch(e)
    {
    }
    document.getElementById(cl + '_rvw_hlp_2').style.display = 'inline';
    document.getElementById(cl + '_rvw_hlp_3').style.display = 'none';
    document.getElementById(cl + '_rvw_hlp_1').innerText = 'Thanks for the Feedback!';
}
function PP(authUrl)
{
    location.href = authUrl;
}
function sHS()
{
    if (( null != document.all))
    {
        if(document.all.sbs1) {
            var iWidth = document.body.clientWidth;
            document.all.sbs1.style.display = (iWidth > 773 ? 'inline' : 'none');
            document.all.sbs2.style.display = (iWidth > 773 ? 'inline' : 'none');
        }
    }
}

var sdd = true;
    
// Safe window.onload function
var gsl = new Array(); 

function SOL(f) 
{ 
    gsl[gsl.length] = f;        
} 

function SOLF() 
{ 
    for(var i=0; i < gsl.length; i++) 
        gsl[i](); 
}
function WriteObjectTag(objTag)
{
    document.write(objTag);
}
function GetObjectTag(page, ctrlid, param, ctype)
{
    try
    {
        var xml = createXMLHttp();
        var url = "/script/dynascript.aspx?pg=" + page + "&id=" + ctrlid + param;
        if(ctype=="gp")
        {
            var url = "/script/dynascript_gp.aspx?pg=" + page + "&id=" + ctrlid + param;
        }
        xml.open("GET", url, false);
        xml.send("");
        if(xml == null)
            return;
            
        document.write(xml.responseXML.firstChild.childNodes[0].data);

    }
    catch(e)
    {
    }
}

function createXMLHttp() 
{
    if (typeof XMLHttpRequest != "undefined") 
    {
    
        return new XMLHttpRequest();
    } 
    else if (window.ActiveXObject) 
    {
        var aVersions = 
        [ "MSXML2.XMLHttp.5.0",
            "MSXML2.XMLHttp.4.0","MSXML2.XMLHttp.3.0",
            "MSXML2.XMLHttp","Microsoft.XMLHttp"
        ];

        for (var i = 0; i < aVersions.length; i++) 
        {
            try 
            {
                var oXmlHttp = new ActiveXObject(aVersions[i]);
                return oXmlHttp;
            } 
            catch (oError) 
            {
                //Do nothing
            }
        }
        throw new Error("XMLHttp object could be created.");
    }
}

// instantiate images (with sizes!) for mouseover performance
var ruimgs = new Array(5);
ruimgs[0] = new Image(64, 11); ruimgs[0].src = imgPre + "/i/r_su_1.gif";
ruimgs[1] = new Image(64, 11); ruimgs[1].src = imgPre + "/i/r_su_2.gif";
ruimgs[2] = new Image(64, 11); ruimgs[2].src = imgPre + "/i/r_su_3.gif";
ruimgs[3] = new Image(64, 11); ruimgs[3].src = imgPre + "/i/r_su_4.gif";
ruimgs[4] = new Image(64, 11); ruimgs[4].src = imgPre + "/i/r_su_5.gif";
var rctls = new Array();
var RatingTimers = new Array();
var PrevMousedRating = -1;
var reviewWritten = false;

// Rating object
function Rating(span, type, id)
{
    this.Span = span;
    this.Type = type;
    this.TypeId = id;
    this.Rating = -1;
    this.Image = 0;
    this.PartImage = -1;
}

Rating.prototype.toString = function() { return this.Type +":" + this.TypeId; };

function SetupRatings()
{
    var spans = document.getElementsByTagName("SPAN");
    var x = spans.length - 1;
    do
    {
        var itm = spans[x];
        var rtp = itm.getAttribute("RTP");
        var rid = itm.getAttribute("RID");
        var avg = itm.getAttribute("AVG");
        var sroc = itm.getAttribute("SROC");
        var node;
        if(rtp != null && rid != null && avg != null) {
            node = new Rating(itm, rtp, rid);
            var avgs = avg.split('_');
            if (avgs[0] != null)
            {
                node.Rating = avgs[0];
                if (GetRRateInputBoxValue() != "")
                {
                    node.Rating = GetRRateInputBoxValue();
                    node.PartImage = -1;
                    node.Image = 1;
                }
            }
            if (avgs[1] != null)
                node.PartImage = avgs[1];
                
            node.saveRatingOnClick = true;
            if (sroc != null && sroc == "0")
                node.saveRatingOnClick = false;

            rctls[rtp + ":" + rid] = node;
        }
    } 
    while (x--);

    window.setTimeout( "InitFillRatings()", 1 );
    if (IndefIsLoggedIn() || window.inNowPlaying == true)
        __LoadRatings();
}
function __LoadRatings()
{
    var request = 'http://' +  document.location.hostname + "/ratings/loadratings.aspx?i=";
    var sep = null;
    var cnt = 0;
    
    for(var prop in rctls)
    {
        if(sep == null)
            sep = ",";
        else
            request += sep;

        request += prop;            
        cnt++;
    }
    
    if(cnt == 0)
        return;
        
    if(window.inNowPlaying == true && window.nppih && window.nppil)
    {
        request += '&pih=' + nppih + '&pil=' + nppil;       
    }
    
    try 
    {
       ratingsDom = createXMLHttp();
        
        if (ratingsDom)
        {
            ratingsDom.onreadystatechange = __ParseRatings;
        }

        ratingsDom.open("GET", request, true);
        ratingsDom.send("");
    } 
    catch(e) 
    {
        ratingsDom = null;
        return;
    }
}
function __ParseRatings()
{
     if (ratingsDom == null || ratingsDom.responseXML.documentElement == null || ratingsDom.readyState != 4)
        return;

    var i = 0;
    var nodeUser = null;
    var nodeRatings = null;
    var ratings = new Array();

    for ( i = 0; i < ratingsDom.responseXML.documentElement.childNodes.length ; i++)
    {
        if (ratingsDom.responseXML.documentElement.childNodes[i].nodeName == "USER" )
        {
             nodeUser = ratingsDom.responseXML.documentElement.childNodes[i];
        }
        
        if (ratingsDom.responseXML.documentElement.childNodes[i].nodeName == "RATINGS" )
        {
             nodeRatings = ratingsDom.responseXML.documentElement.childNodes[i];
        }

    }

    if(nodeUser != null) 
    {
        if(nodeUser != null && nodeUser.getAttribute("LI") != null) 
            logged_in = 1;
        else
            logged_in = 0;
    }

    for ( i = 0; i < nodeRatings.childNodes.length ; i++)
    {
        if (nodeRatings.childNodes[i].nodeName == "RATING" )
        {
             ratings.push(nodeRatings.childNodes[i]);
        }
    }

   
    for(var i = 0, len = ratings.length; i < len; i++) 
    {
        // [] is 2x faster than iten()
        var node = ratings[i];
        
        if(node == null || node.hasChildNodes() == false)
            continue;
            
       
       var type = null;
       var typeid = null;
       var usrNode = null;
       
       for ( j = 0; j < node.childNodes.length ; j++)
       {
            if (node.childNodes[j].nodeName == "T" )
            {
                 type = node.childNodes[j];
            }
            
            if (node.childNodes[j].nodeName == "ID" )
            {
                 typeid = node.childNodes[j];
            }

            if (node.childNodes[j].nodeName == "USR" )
            {
                 usrNode = node.childNodes[j];
            }

       }
      
        var typeText = type.getAttribute("R");
        var typeIdText = typeid.getAttribute("R");
        var usrNodeText = usrNode.getAttribute("R");
 
        var rating = null;
        
        rating = rctls[typeText + ":" + typeIdText];
        
        if(usrNode != null)
        {
            if (GetRRateInputBoxValue() == "" || GetRRateInputBoxValue() <= 0)
            {
                rating.Rating = parseInt(usrNodeText);
            }
            FillRRateInputBox(rating.Rating);
            rating.Image = 1;
            rating.PartImage = -1;
        }
            
            
    }
    
    ratingsDom = null;
    window.setTimeout( "FillRatings()", 1 );
}

function GetRRateInputBoxValue()
{
    // search for rrate input box and set it's value to num
    var rrate = GE('rrate');
    if (rrate != null)
    {
        return (rrate.value);
    }
    else
    {
        return "";
    }
}

function FillRRateInputBox(rating)
{
    if (rating > 0)
    {
        // search for rrate input box and set it's value to num
        var rrate = GE('rrate');
        if (rrate != null)
        {
            rrate.value = rating;
            ChkFrm();
        }
    }
}

function InitFillRatings()
{
	  for(var prop in rctls)
    {
        __DrawRating(rctls[prop]);
    }
    
    var rpid = GetCkVal("srpid");
    var newR = GetCkVal("srnvl");

    if(rpid != null && parseInt(rpid) > 0 && newR != null && parseInt(newR) > 0)
    {
        document.cookie = "srpid=" + "; domain=" + __getDocDomain();
        document.cookie = "srnvl=" + "; domain=" + __getDocDomain();
        
        PPSaveRating(rpid, newR);
    }
}
function FillRatings()
{
    for(var prop in rctls)
    {
        __DrawRatingImage(rctls[prop]);
    }
}
function __DrawRating(node)
{
    if ( null!=node && null!=node.Span)
    {
        node.Span.innerHTML = __RatingHTML(node);
    }
}
function __RatingHTML(node)
{
        var html = "<map id='rating_"+node.Type+"_"+node.TypeId+"' name='rating_"+node.Type+"_"+node.TypeId+"'>"+
        "<area shape=\"rect\" coords=\"0,0,12,13\"  onclick=\"rtclk(this, 1);\" onmouseover=\"rtmovr(this, 1);\" onmouseout=\"rtmout(this);\">"+
        "<area shape=\"rect\" coords=\"13,0,24,13\" onclick=\"rtclk(this, 2);\" onmouseover=\"rtmovr(this, 2);\" onmouseout=\"rtmout(this);\">"+
        "<area shape=\"rect\" coords=\"25,0,37,13\" onclick=\"rtclk(this, 3);\" onmouseover=\"rtmovr(this, 3);\" onmouseout=\"rtmout(this);\">"+
        "<area shape=\"rect\" coords=\"38,0,50,13\" onclick=\"rtclk(this, 4);\" onmouseover=\"rtmovr(this, 4);\" onmouseout=\"rtmout(this);\">"+
        "<area shape=\"rect\" coords=\"51,0,65,13\" onclick=\"rtclk(this, 5);\" onmouseover=\"rtmovr(this, 5);\" onmouseout=\"rtmout(this);\"></map>"+
        "<img id=\"ratingimg_"+node.Type+"_"+node.TypeId+"\" src=\""+ __RatingImage(node) +"\" usemap=\"#rating_"+node.Type+"_"+node.TypeId+"\" width=\"64\" height=\"11\" border=\"0\">";
    return html;
}
function __RatingImage(node)
{
    if (node.Rating < 1)
        return imgPre + "/i/r_s_0.gif";

    var imageName;
    if(node.Image == 0) { 
        imageName = "sc"; 
    } else {
        imageName = "su";
    }

    return imgPre +"/i/r_"+ imageName +"_"+ node.Rating + ((node.PartImage != -1) ? "_"+node.PartImage : "") + ".gif";
}
function __DrawRatingImage(node)
{
    if ( null!=node && null!=node.Span && null!=node.Span.lastChild)
    {
       node.Span.lastChild.src = __RatingImage(node);
    }
}

// rating mouse over
function rtmovr(star, num)
{
    var span = star.parentNode.parentNode;
    var rtstr = span.getAttribute("RTP") +":"+ span.getAttribute("RID");
        
    // cancel a previous revert timer on this rating control
    if (RatingTimers[rtstr] != 0) {
        window.clearTimeout(RatingTimers[rtstr]);
        RatingTimers[rtstr] = 0;
    }

    // cancel the restore timer for a previous control (eliminates vertical ghosting)
    if (PrevMousedRating != -1 && PrevMousedRating != rtstr)
    {
        __RevertRating(PrevMousedRating);
    }
    PrevMousedRating = rtstr;

    // inline this rating draw for max perf
    span.lastChild.src = ruimgs[num - 1].src;
}

// rating mouse out
function rtmout(star)
{
    var span = star.parentNode.parentNode;
    var rtstr = span.getAttribute("RTP") +":"+ span.getAttribute("RID");
    
    if (! RatingTimers[rtstr]) {
        RatingTimers[rtstr] = window.setTimeout("__RevertRating(\""+ rtstr +"\")", 120);
    }
}
function __RevertRating(rtstr)
{
    var node = rctls[rtstr];
    
    if(node == null)
        return; 

    RatingTimers[rtstr] = 0;
    __DrawRatingImage(node);
}

// rating click
function rtclk(star, num)
{
	var span = star.parentNode.parentNode;
    var rtp = span.getAttribute("RTP");
    var rid = span.getAttribute("RID");
    var node = rctls[rtp + ":" + rid];


    if(node == null)
        return; 
        
    node.Rating = num;
    FillRRateInputBox(node.Rating); 
    node.PartImage = -1;
    node.Image = 1;
    
    __DrawRatingImage(node);

	
    if (node.saveRatingOnClick == true)
    {
        if(!IsLoggedIn() && !(window.inNowPlaying == true))
        { 
            TrigLogIn('', false, rtp + ":" + rid, node.Rating); 
            return; 
        }

        try 
        {
			ClientSideVC(node.TypeId, 3, node.Rating);
    
            var dom = createXMLHttp();
			
            var url = 'http://' + document.location.hostname + '/Ratings/SaveRatings.aspx?tp=' +
                node.Type + '&i=' + node.TypeId + '&r='+ node.Rating;

            if(window.inNowPlaying == true && window.nppih && window.nppil)
            {
                url += '&pih=' + nppih + '&pil=' + nppil;
            }
            
            dom.open("GET", url, true);
            dom.send("");
            if(dom == null)
                return;

        } 
        catch(e) 
        {
        }
    }
    
    window.status = "";
    return false;
}
// Clips in page code
var CurrentPlayImage;
var timeHandle = -1;
var skipFlag = 0;

function StopPlayer()
{
    if(GE('ClipPlayer') != null)
    {
        GE('ClipPlayer').controls.stop();
        GE('ClipPlayer').settings.setMode("loop", wmplp);
        GE('ClipPlayer').settings.setMode("shuffle", wmpsh);
    }
        
    if(CurrentPlayImage != null)
    {
        var item = CurrentPlayImage;

        var tmp = CurrentPlayImage.children[0].alt;
        tmp = tmp.replace("Stop", "Play");

        CurrentPlayImage.children[0].alt = tmp;
        
        CurrentPlayImage = null;
        clpot(item);
    }
}
function StopPlayerNow()
{
    skipFlag = 1;
    
    if(GE('ClipPlayer') != null)
    {
        GE('ClipPlayer').controls.stop();
        GE('ClipPlayer').settings.setMode("loop", wmplp);
        GE('ClipPlayer').settings.setMode("shuffle", wmpsh);
    }
}
function ClipPlayState(NewState)
{
    if(skipFlag == 1)
        return;
        
    if(timeHandle != -1)
    {
        window.clearTimeout(timeHandle);
        timeHandle = -1;
    }
    
    if(NewState == 3 && CurrentPlayImage != null)
    {
        CurrentPlayImage.children[0].isLoading = false;
        CurrentPlayImage.children[0].src = imgPre + "/i/ms/bt_stop.gif";

        var tmp = CurrentPlayImage.children[0].alt;
        tmp = tmp.replace("Play", "Stop");

        CurrentPlayImage.children[0].alt = tmp;
    }
    
    if(NewState == 1)
        StopPlayer();
        
    if(NewState == 10 && CurrentPlayImage != null)
    {
        timeHandle = window.setTimeout(StopPlayer, 1000);
    }
}
function CreatePlayer(redir)
{
    if(GE('ClipPlayer') == null)
    {
        try
        {
            var doc = GE("clipSpan");

            var tag = '<object id="ClipPlayer" classid="CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6" width="0" height="0">';
            tag += '<param name="autoStart" value="false">';
            tag += '<param name="uimode" value="invisible">';
            tag += '<param name="enableContextMenu" value="false">';
            tag += '</object>';
            tag += '<script for="ClipPlayer" event="PlayStateChange(NewState)" language="javascript">ClipPlayState(NewState);</script>';
            tag += '<script for="ClipPlayer" event="error()" language="javascript">StopPlayer();</script>';
            
            doc.innerHTML = tag;
            doc.style.display = 'none';
            
            var idx = -1;
            var ver = GE('ClipPlayer').versionInfo;

            if(ver != null && ver.length > 0)
            {
                idx = ver.indexOf(".");
            }
            else
            {
                throw "wrong version";
            }

            if(idx != -1 && parseInt(ver.substr(0, idx)) < 7)
            {
                throw "wrong version";
            }
        }
        catch(e)
        {
            if(redir == true)
                location.href = "/help/requirements.aspx";
                
            return;
        }
    }
}

var wmplp = false;
var wmpsh = false;

function AutoPlayClip(url)
{
    var ids = url.match(/song\=(\d+)/);
    if (ids != null && ids.length > 0)
    {
        var id = ids[1];
        var item = GE('clp_'+id);
        if (item != null)
        {
            clpup(item, id);
        }
    }
}
function PlayClip(url, id)
{
    if(CurrentPlayImage.children[0]) 
    {
        CurrentPlayImage.children[0].isLoading = true;
        CurrentPlayImage.children[0].src = imgPre + "/i/ms/bt_load.gif";
    }
    
    var cp = GE('ClipPlayer');
    if(cp == null)
    {
        CreatePlayer(true);
        cp = GE('ClipPlayer');
    }
    
    if(!CheckWmp10())
        window.onbeforeunload = StopPlayerNow;

    if(cp != null)
    {
        wmplp = cp.settings.getMode("loop");
        wmpsh = cp.settings.getMode("shuffle");
        cp.settings.setMode("loop", false);
        cp.settings.setMode("shuffle", false);
        cp.URL = url;
        cp.controls.play();
    }
}
function clpov(item)
{
    if(item == CurrentPlayImage)
    {
        if(CurrentPlayImage.children[0].isLoading != true)
            CurrentPlayImage.children[0].src = imgPre + "/i/ms/bt_stop_o.gif";
    }
    else if(item.children[0]) 
        item.children[0].src = imgPre + "/i/ms/bt_play_o.gif";
}
function clpot(item)
{
    if(item == CurrentPlayImage)
    {
        if(CurrentPlayImage.children[0].isLoading != true)
            CurrentPlayImage.children[0].src = imgPre + "/i/ms/bt_stop.gif";
    }
    else if(item.children[0])
        item.children[0].src = imgPre + "/i/ms/bt_play.gif";
}
function clpdn(item)
{
    if(event != null && event.button > 1)
        return;

    if(item == CurrentPlayImage)
    {
        if(CurrentPlayImage.children[0].isLoading != true)
            CurrentPlayImage.children[0].src = imgPre + "/i/ms/bt_stop_d.gif";
    }
    else if(item.children[0]) 
        item.children[0].src = imgPre + "/i/ms/bt_play_d.gif";
}
function clpup(item, id)
{
    if(event != null && event.button > 1)
        return;

    if(item.clipid == null)
    {
        var len = document.all.length;
        var fnd = false;
        
        for(var x = 0; x < len; x++)
        {
            var ele = document.all[x];
            
            if(ele.tagName.toLowerCase() == "a" && ele.clipid == id)
            {
                item = ele;
                fnd = true;
                break;
            }
        }
        
        if(fnd == false)
            return;
    }
    
    if(item == CurrentPlayImage)
    {
        var tmp = CurrentPlayImage.children[0].alt;
        tmp = tmp.replace("Stop", "Play");

        CurrentPlayImage.children[0].alt = tmp;

        GE('ClipPlayer').controls.stop();
        GE('ClipPlayer').settings.setMode("loop", wmplp);
        GE('ClipPlayer').settings.setMode("shuffle", wmpsh);

        CurrentPlayImage = null;
        clpot(item);
        
        return;
    }
    
    if(CurrentPlayImage != null)
    {
        var tmp = CurrentPlayImage;
        var tmps = CurrentPlayImage.children[0].alt;
        tmps = tmps.replace("Stop", "Play");

        GE('ClipPlayer').settings.setMode("loop", wmplp);
        GE('ClipPlayer').settings.setMode("shuffle", wmpsh);

        CurrentPlayImage.children[0].alt = tmps;
        CurrentPlayImage = null;
        clpot(tmp);
    }

    CurrentPlayImage = item;
    clpot(item);
    var clpurl = GetClipUrl(item.mnid);
    PlayClip(clpurl, id);
}
function GetClipUrl(cid)
{
    var newEnv;
    var retval = "error";
    if(typeof(cid) != "undefined" && cid !="0")
    {
        newEnv = musicnetEnv;
        newEnv = newEnv.replace("#SONGID#", cid);
        
        try
        {
            dom = postCustomSoapRequest("GetSampleUrl", "https://web.archive.org/web/20090307230110/http://entertainment.msn.com/services/", newEnv, MUSICNETSERVICE_URL, false);
            if (dom)
            {
                var resNode = dom.selectSingleNode('//web.archive.org/web/20090307230110/http://getsampleurlresult');
                if(resNode)
                    return resNode.text;
            }
        }
        catch(e){}
    }
    return retval;
}
function PCBL()
{
    alert('Parental Controls have been applied.  Purchase of explicit content is not allowed on this account.');
}
function PCPC()
{
    if(event != null && event.button > 1)
        return;
        
    alert('Parental Controls have been applied.  Sampling of explicit content is not allowed on this account.');
}
// Buy buttons and logic
// buy globals
var frzBuy = false;
var buyImages;
var npbid;
// support script for ImageButtonCtrl
function chkbb()
{   
    // If redirPending or blockChkbb is set, do not execute chkbb to consume incorrectly bbuy cookie 
    if(meetsReqs && !redirPending && typeof(blockChkbb) == "undefined")
    {
        
        // Wait until onload() JS handler is invoked to complete purchase, this is to avoid 
        // JS flyout animation timeouts to causes IE to error while remaining of JS global code is executed 
         __CheckNoHassleCookie();
        if(document.readyState == "complete" || (typeof(noHassle) != "undefined" && noHassle != 1))
        {
            // preload the images
            __PreloadBuyImages();

            var bid = GetCkVal("bbuy");
            if(bid != null && bid.length > 0 && bid != "undefined")
            {
                if( GetCkVal("secauth") != "1" && GetCkVal("secauth") != "2" && NeedSecure())
                {
                    // Do secure login - DO NOT CLEAR the Buy cookie
                    // Set secauth cookie to 2 to avoid loops when auth is aborted / fails
                    expSet = GMTStringPlus(10);
                    document.cookie = "secauth=2;Path=/; expires=" + expSet + "; domain=" + __getDocDomain();
                    TrigLogIn(defaultBuyPpcb, true);
                }
                else
                {   
                    if( GetCkVal("secauth") == "2" )
                    {                   
                        document.cookie = "secauth=;Path=/; expires=" + expDel + "; domain=" + __getDocDomain();
                
                        if( !IndefIsLoggedIn() )
                        {               
                            // If user refused to log in once redirected to passport sign in page, we should give up
                            // with trying to complete the purchase - otherwise user may be redirected to secured 
                            // passport sign in page again when continuing browsing music pages.
                            document.cookie = "bbuy=;Path=/; expires=" + expDel + "; domain=" + __getDocDomain();
                            return;
                        }
                    }

                    if( (GE(bid) != null && GE(bid).pctrl == true && pcontr == true) )
                    {
                        document.cookie = "bbuy=;Path=/; expires=" + expDel + "; domain=" + __getDocDomain();
                        return;
                    }

                    var frmnp = GetCkVal("frmnp");
                    
                    if(GE(bid) != null && (frmnp != null && frmnp.length > 0 && frmnp != "undefined"))
                    {
                        document.cookie = "frmnp=;Path=/; domain=" + __getDocDomain();
                        npbid = bid;
                        __ShowNotifyDialog(GE(bid));
                    }
                    else if(IndefIsLoggedIn() && GE(bid) != null && window.inNowPlaying != true)
                    {
                        var top = 0, lft = 0;
                        var ele = GE(bid);  
                        // determine pixel location of the button on the page
                        do {
                            top += ele.offsetTop;
                            lft += ele.offsetLeft;
                                        
                            ele = ele.offsetParent;
                        } while (ele != null)
        
                        // only scroll to the button if it's off the page               
                        if(top > document.body.clientHeight)
                            GE(bid).scrollIntoView(true);

                        ele = GE("cn" + bid.substr(2));
                        
                        if (ele != null) 
                        {
                            var redir = GetCkVal("red");
                            var firstAttempt = (redir == null || redir == "undefined");
                            
                            // We don't want to redirect if this is not the first attempt to complete buy process
                            if (!firstAttempt)
                                blockRedir = true;
                            
                            // Elements may be created dynamically - don't clear cookie unless the element is already on the page
                            document.cookie = "bbuy=;Path=/;domain=" + __getDocDomain() + ";expires=" + GMTStringMinus(10);
                            bc(GE("cn" + bid.substr(2)), GE(bid));
                            
                            // If this is the first attempt to complete buy process, set cookie to keep track of this
                            // and restore bbuy cookie
                            if (redirPending && firstAttempt)
                            {
                                document.cookie = "red=1;Path=/; expires=" + GMTStringPlus(10) + "; domain=" + __getDocDomain();
                                document.cookie = "bbuy=" + bid + ";Path=/; expires=" + expSet + "; domain=" + __getDocDomain();
                            }
                        }
                    }
                }
            }
        }
    }
}

function tk(t,i,p) { return t+":"+i+":"+p;}
function bbi(t, i, p, o)
{
    if(event != null && event.button > 1)
        return;

    // if the user mouses over an image before the onload scripts have run (possible!)
    if (!buyImages)
        __PreloadBuyImages();

    var k = tk(t,i,p);
    if (!buyImages[k])
    {
        __AddBuyImageToCache(t,i,p);
    }

    if(o == null) 
        event.srcElement.src = buyImages[k].src;
    else 
        o.src = buyImages[k].src;   
}

//text button mouse events. t= type of button, i = mouseevent;
function bti(t, i, p, o)
{
    if(event != null && event.button > 1)
        return;
    
    // if the user mouses over an image before the onload scripts have run (possible!)
    if (!buyImages)
        __PreloadBuyImages();

    var k = tk(t,i,p);
    if (!buyImages[k])
    {
        __AddBuyImageToCache(t,i,p);
    }

    if(o != null) 
    {
        var par = o.parentElement;
        var child2 = o.children[1];
        child2.src = buyImages[k].src;   
    }
}

function bs(s, o) 
{ 
    if(event != null && event.button > 1)
        return;

    if(o == null) 
        event.srcElement.src = s; 
    else 
        o.src = s; 
}
function nbs(s, o) 
{ 
    if (typeof(event) != 'undefined')
    {
        if(event != null && event.button > 1)
        return;
    }
    
    if(o == null && s !== null) 
    {
        if (typeof(event) != 'undefined')
        {
            if(s.complete == true)
                event.srcElement.src = s.src; 
        }
    }
    else if(s !== null)
    {
        if(s.complete == true)  
            o.src = s.src; 
    }       
}
function tbs(s, o) 
{ 
    if(event != null && event.button > 1)
        return;

    //var par = o.parentElement;
    var i = o.children[0];
    
    if(s != null)
    {
        if(s.complete == true)  
            i.src = s.src; 
    }       
}

//sign-up for prepaid cards, entry point - reedem prepaid card link
function rprepaid()
{
    if(event != null && event.button > 1)
        return;
     var url = "http://" + document.location.hostname + "/musicstore/signup/default.aspx";
     if (!IsLoggedIn())
     {
        if (url.indexOf("?") == -1) 
            url = url + "?"+ LIT;
        else 
            url = url + "&"+ LIT;
    }
    if (url.indexOf("?") == -1)
        url = url + "?subType=prepaid";
    else
        url = url + "&subType=prepaid";
        
    if(window.ctTrackUrl != null)
    {
        try
        {
            ctTrackUrl(url, "cm=" + event.srcElement.parentElement.cmvl + "&ce=SUBC" + event.srcElement.parentElement.cevl);
        }
        catch(e)
        {
            location.href = url;
            redirPending = true;
        }
    }
    else
    {   
        location.href = url;
        redirPending = true;
    }
    return;
}

//music rental signup, from juice promotional link/page
function mrsignup(subCat)
{
    if(event != null && event.button > 1)
        return;
     //if not logged in, redirect to sign-in/up page with service type = "musicrental" orelse redirect to default page for juice.
     var url = "http://" + document.location.hostname + "/musicstore/signup/subscriptioncheck.aspx";
     if (!IsLoggedIn())
     {
        if (url.indexOf("?") == -1) 
            url = url + "?"+ LIT;
        else 
            url = url + "&"+ LIT;
    }
    if (url.indexOf("?") == -1)
        url = url + "?subType=rental";
    else
        url = url + "&subType=rental";
    
    if (subCat != "")
    {
        url = url + "&subCat=" + subCat;
    }
    
    document.cookie = "suburl=" + escape(document.URL) + "; Path=/; expires=" + expSet + "; domain=" + __getDocDomain();
        
    if(window.ctTrackUrl != null)
    {
        try
        {
            ctTrackUrl(url, "cm=" + event.srcElement.parentElement.cmvl + "&ce=SUBC" + event.srcElement.parentElement.cevl);
        }
        catch(e)
        {
            location.href = url;
            redirPending = true;
        }
    }
    else
    {   
        location.href = url;
        redirPending = true;
    }
    return;
}
function bc(ele, obj)
{
    if(event != null && event.button > 1)
        return;
    
    if(event != null)
    {
        document.cookie = "red=; Path=/; expires=" + expDel + "; domain=" + __getDocDomain();
        blockRedir = false;
    }
    
    window.setTimeout("omBuyTrack('" + obj.id + "','" + ele.bytp + "','buystart');", 10);
    
    if(frzBuy == true)
        return;

    // IndefIsLoggedIn is not 100% accurate as it relies on a value set in the entertainment page
    // however, it does not require a roundtrip and if the user is not logged in, the buy code can
    // handle this and initiate the login at that point
    var sec = NeedSecure();
    if( !IndefIsLoggedIn() || (GetCkVal("secauth") != "1" && GetCkVal("secauth") != "2" && sec) )
    {
        var url = parent.document.URL;

        // Secure login anyone who may need to go through computer enrollment
        // to save a redirect later
        if (url.indexOf("?") == -1) 
            url = url + "?"+ (sec ? SLIT : LIT);
        else 
            url = url + "&"+ (sec ? SLIT : LIT);
    
        url = url + "&ppcb=musicstore";
        expSet = GMTStringPlus(10);
        var bbid;
        if(obj != null)
        {
            bbid = obj.id;
        }
        document.cookie = "bbuy=" + bbid + ";Path=/; expires=" + expSet + "; domain=" + __getDocDomain();
        document.cookie = "buyurl=" + escape(document.URL) + "; Path=/; expires=" + expSet + "; domain=" + __getDocDomain();
        document.cookie = "secauth=2;Path=/; expires=" + expSet + "; domain=" + __getDocDomain();

        //going to redir,if present set tab cookie
        setTabCookie(); 
        
        if(window.inNowPlaying == true && window.npbuyurl)
        {
            setTimeout("RLNK('" + window.npbuyurl + "');", 100);
            return;
        }
        

        if(window.ctTrackUrl != null)
        {
            try
            {
                ctTrackUrl(url, "cm=" + event.srcElement.parentElement.cmvl + "&ce=BUYPP" + event.srcElement.parentElement.cevl);
            }
            catch(e)
            {
                location.href = url;
                redirPending = true;
            }
        }
        else
        {   
            location.href = url;
            redirPending = true;
        }
        
        return;
    }
            
    var o = (event == null ? null : event.srcElement);
    
    if(obj != null)
        o = obj.children[0];
    
    // if bst dne or is not set, set it now
    // this assures cancel will operate correctly
    // (note repeat purchase cancels can occur even in noHassle)
    if (o != null && !o.bst)
    {
        o.bst = 1;
        if (typeof(o.baksr) == "undefined") o.baksr = o.src;
        if (typeof(o.bakov) == "undefined") o.bakov = o.onmouseenter;
        if (typeof(o.bakot) == "undefined") o.bakot = o.onmouseleave;
        if (typeof(o.bakdn) == "undefined") o.bakdn = o.onmousedown;
        if (typeof(o.bakup) == "undefined") o.bakup = o.onmouseup;
        if (typeof(o.bakkdn) == "undefined") o.bakkdn = o.onkeydown;
        if (typeof(o.bakkup) == "undefined") o.bakkup = o.onkeyup;
        if (typeof(o.baktxt) == "undefined") o.baktxt = o.children[0].innerText;
        if (typeof(o.bakcls) == "undefined") o.bakcls = o.className;
        
        // noHassle is -1, 0 or 1 (unknown, no, yes)
        __CheckNoHassleCookie();
        if(noHassle > 0)
        {
            if(window.ctTrackUrl != null && event != null)
            {
                try
                {
                    ctTrackDirect("cm=" + event.srcElement.parentElement.cmvl + "&ce=BUYONE" + event.srcElement.parentElement.cevl);
                    
                }
                catch(e) {}
            }
            // is noHassle buy and not repeat buy cancel
            window.setTimeout("omBuyTrack('" + obj.id + "','" + ele.bytp + "','buyconfirm');", 10);
            
            __DoBuy(o);
        }
        else
        {
            // conduct pre-buy checks prior to confirm button display
            res = eval('Pre'+ o.parentElement.conck);
            if (res != 0) return;

            if(window.ctTrackUrl != null && event != null)
            {
                try
                {
                    ctTrackDirect("cm=" + event.srcElement.parentElement.cmvl + "&ce=BUY" + event.srcElement.parentElement.cevl);
                }
                catch(e) {}
            }

            // is standard buy and not repeat buy cancel
            eval("bti('" + o.parentElement.bytp + "','up','con',o);");

            window.setTimeout("omBuyTrack('" + obj.id + "','" + ele.bytp + "','buyconfirm');", 10);
            
            o.children[0].innerText = "confirm";
            __mSetHandlers(o, bm);

            
            if(ele && ele.style)
            {
                // wire up cancel button events and make visible
                ele.title = "Cancel";
                __mSetHandlers(ele, bcan);
                ele.tabIndex = 0;
                ele.style.visibility = 'visible';
            }
            o.bst = 1;
        }
    }
    else if(o != null)
    {
        // is cancel click, revert to buy button and clear the BBUrl
        __mClearBBUrl();
        
        o.src = o.baksr;
        o.className = o.bakcls;
        o.onmouseenter = o.bakov;
        o.onmouseleave = o.bakot;
        o.onmousedown = o.bakdn;
        o.onmouseup = o.bakup;
        o.onkeydown = o.bakkdn;                         
        o.onkeyup = o.bakkup;
        o.children[0].innerText = o.baktxt;
        if(o.parentElement.bytp)
            bti(o.parentElement.bytp, 'up', 'reg', o);
        if(ele && ele.style)
            ele.style.visibility = 'hidden';
        o.bst = 0;
    }
}
function bkchk()
{
    return (event.keyCode == 13 || event.keyCode == 32 );
}
function bn(cnele, ele)
{
    bc(cnele, ele);
}

// handle all buy button events
function bbuy(o)
{
    if(event != null && event.button > 1)
        return;

    //tst(o);
    if(o==null)
        o = event.srcElement;
    var par = o.parentElement;
    switch(event.type)
    {
        case 'mouseenter': bti(par.bytp, 'hv', 'reg', o); break;
        case 'mouseleave' : bti(par.bytp, 'up', 'reg', o); break;
        
        // Warning : key events fall through
        case 'keydown': if(!bkchk()) break;
        case 'mousedown':bti(par.bytp, 'dn', 'reg', o);break;
        
        case 'keyup': if (!bkchk()) break;
        case 'mouseup':             
            // backup image src/event handler
            o.baksr = o.src;
            o.bakov = o.onmouseenter;
            o.bakot = o.onmouseleave;
            o.bakdn = o.onmousedown;
            o.bakup = o.onmouseup;
            o.bakkdn = o.onkeydown;
            o.bakkup = o.onkeyup;
            o.baktxt = o.children[0].innerText;
            o.bakwid = o.offsetWidth;
            o.bakcls = o.className;
            // flip the button to 'processing'
            __mSetHandlers(o, null);
            bti(par.bytp, 'up', 'pro', o); 
            o.children[0].innerText = "";
            o.id = par.id+ "_bbtn";
            eval(par.clck);
            break;
    }
}
// handle all context menu events
function ccm()
{
    var o = event.srcElement;
    switch(event.type)
    {
        case 'mouseenter': bbi('com', 'hv', 'cm', o); break;
        case 'mouseleave' : bbi('com', 'up', 'cm', o); break;
        
        // Warning : key events fall through
        case 'keydown': if(!bkchk()) break;
        case 'mousedown': bbi('com', 'dn', 'cm', o); break;
        
        case 'keyup': if (!bkchk()) break;
        case 'mouseup':             
            // backup image src/event handler
            bbi('com', 'up', 'cm', o);
            eval(cmenu());
            break;
    }
}
// handle all cancel button events
function bcan()
{
    var o = event.srcElement;
    if(o.item == null || typeof(o.item) == "undefined")
    {
        o = o.parentElement;
    }
    
    var chld = o.children[0];
    
    switch(event.type)
    {
        case 'mouseenter': bbi('com', 'hv', 'can', chld); break;
        case 'mouseleave': bbi('com', 'up', 'can', chld); break;
        
        // Warning : key events fall through 
        case 'keydown': if(!bkchk()) break;
        case 'mousedown': bbi('com', 'dn', 'can', chld); break;
      
        case 'keyup': if (!bkchk()) break;
        case 'mouseup': 
            bbi('com','up', 'can', chld);
            eval("bn(GE('cn"+ o.item +"'), GE('by" + o.item + "'));"); 
            break;
    }
}

// handle all confirm button events
function bm()
{
    if(event != null && event.button > 1)
        return;

    var par = this.parentElement;
    switch(event.type)
    {
        case 'mouseenter': bti(par.bytp, 'hv', 'con', this); break;
        case 'mouseleave': this.children[0].innerText="confirm";bti(par.bytp, 'up', 'con', this);break;
        
        // Warning : key events fall through
        case 'keydown': if(!bkchk()) break;
        case 'mousedown': this.children[0].innerText="";bti(par.bytp, 'up', 'pro', this); break;
        
        case 'keyup': if (!bkchk()) break;
        case 'mouseup': 
            // flip the button to 'processing'
            // no handler backup required
            __mSetHandlers(this, null);
            this.id = par.id+ "_cbtn"; 
                  
            if(window.ctTrackUrl != null)
            {
                try
                {
                    ctTrackDirect("cm=" + par.cmvl + "&ce=CONFIRM" + par.cevl);
                }
                catch(e) {}
            }
            __DoBuy(this);
            
            break;  
    }
}
function __DoBuy(o)
{   
    var par = o.parentElement;
    var retval = eval(par.conck);

    if(window.inNowPlaying == true && retval != 0)
    {
        bc(GE('cn' + par.id.substring(2)), par);
        return;
    }

    if(retval == 0)
    {
        window.setTimeout("omBuyTrack('" + par.id + "','" + par.bytp + "','buycomplete');", 10);
    }
    else
    {
        window.setTimeout("omBuyTrack('" + par.id + "','" + par.bytp + "','buyfailed');", 10);
    }
    
    if(retval == 0) 
        bdn(o);
    else if(retval == 2)
        frzBuy = true;
    else if(retval > 0 || retval == -5)
        bc(GE('cn' + par.id.substring(2)), par);
    
    __mNoHassleClearBBUrl(retval);
}
function bdn(ele)
{
    var par = ele.parentElement;
    bFly(par);
    __mSetHandlers(ele, null);
    ele.style.cursor = "default";
    // set the purchase image (should be preloaded)
    bti(par.bytp, 'up', 'reg', ele);
    ele.children[0].innerText = "Purchased";
    ele.title = "Purchased";
    try
    {
        if(document.all["cn" + par.id.substring(2)])
             document.all["cn" + par.id.substring(2)].style.visibility = "hidden";
    }        
    catch(e){}
    if(window.inPostLic == null || window.inPostLic != true) 
        __ShowNoHassleDialog(par);
}
// No Hassle
// display the no hassle dialog box
// ele is the main buy span
function __ShowNoHassleDialog(ele)
{
    // if noHassle has been set, do not ask them again
    __CheckNoHassleCookie();
    if (noHassle != -1) 
        return;

    // insert the dialog HTML now
    if (!document.all["nhassle"])
    {
        // there is quite a bit of thought in this HTML: the seemingly irrational position directive on the nhin (even the presence of nhin)
        // is to fool IE into believing nhin is outside of the filter, the filter was blocking the buttons from accepting clicks
        // do not adjust this HTML recklessly!
        ele.insertAdjacentHTML("afterEnd", "<span id=nhassle class=nhassle><table id=nhout cellpadding=0 cellspacing=0 border=0 class=nhout><tr><td>"+
                        "<table style='position:relative;top: -2px' cellpadding=0 cellspacing=0 border=0 class=nhin><tr><td class=bp5><table cellpadding=0 cellspacing=0 "+
                        "border=0 width=100%><tr><td><span class='txt4'>Congratulations!</span></td><td align=right valign=top style='padding-right:11px'><img src=" +
                        imgPre + "/i/nh_close.gif border=0 style='cursor:hand' onclick='nhset(0)'></td></tr></table></td></tr><tr><td><span class='lnk6'>You've completed your first "+
                        "purchase from MSN Music!<br><br>You can monitor your download progress at any time by clicking<br>\"<span class='lnk1'>" +
                        "Download Status</span>\" in the upper right corner of the page.<br><br>You can also configure your purchase settings to "+
                        "make buying easier;<br>please select an option below to do this now:<br><br></td></tr><tr><td class=lnk1><input type='radio' "+
                        "name='nhv' style='margin-bottom:-1px'> Don't ask me to &quot;confirm&quot; each purchase</td></tr>"+
                        "<tr><td class=lnk1><input type='radio' style='margin-bottom:-1px' name='nhv' checked> Ask me to &quot;confirm&quot; each purchase</td></tr>"+
                        "<tr><td class=tb10l15><img name='nhy' style='cursor:hand' src='"+ imgPre + "/i/bt_sst_s.gif' onmouseover='bs(\"" + imgPre + "/i/bt_sst_h.gif\", this)' "+
                        "onmouseout='bs(\"" + imgPre + "/i/bt_sst_s.gif\", this)' onmousedown='bs(\"" + imgPre + "/i/bt_sst_d.gif\", this)' onmouseup='bc(\""+
                        imgPre + "/i/bt_sst_h.gif\", this)' onclick='nhset(1)'></td></tr><tr><td class=lnk6 style='font-size:7pt'>You can access this setting later by clicking \""+
                        "<span class=lnk1>My Settings</span>\".</td></tr></table></tr></td></table></span>");
    }

    var nh = document.all["nhassle"];

    var body = document.body;
    var top = 0, lft = 0;
                
    // determine pixel location of the button on the page
    do {
        top += ele.offsetTop;
        lft += ele.offsetLeft;
                    
        ele = ele.offsetParent;
    } while (ele != null)

    __CoverPage();
    
    // pop the noHassle dialog
    nh.style.display = "inline";
    nh.style.zIndex = 3;

    // if we are on IE 5.5 and above, use alpha png for the dialog, otherwise use a gif image
    if ((navigator.appVersion.indexOf("MSIE") > 0) && (navigator.appVersion.indexOf("MSIE 5") > 0)) 
    {
        // downlevel
        document.all["nhout"].style.backgroundImage = "url("+ imgPre + "/i/nh_bubble_lg.gif)";
    }
    else
    {
        // uplevel
        document.all["nhout"].style.filter = "filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ imgPre + "/i/nh_bubble_lg.png')";
    }

    document.all["nhy"].focus();

    // place the dialog on the page
    // if the nh will hang off the right side of the page (happens on search results)
    // pull it in so it butts against the edge of the page. otherwise make it even with
    // the button
    var scw = body.offsetWidth - nh.offsetWidth + body.scrollLeft;
    nh.style.left = (scw < lft) ? scw - 25 : lft;
    nh.style.top = top - nh.clientHeight;
    // if the window is scrolled so that the dialog will be covered, scroll up to expose it
    // even worse move the dialog down if scrolling alone cannot improve the situation
    var off = nh.offsetTop - body.scrollTop;
    if (off < 0)
        window.scrollBy(0, off);
    if (nh.offsetTop < 0)
        nh.style.top = 0;
}
function __CheckNoHassleCookie()
{
    var nhCkie = GetCkVal("nh");
    if(nhCkie != null && nhCkie.length > 0 && nhCkie != "undefined") noHassle = (nhCkie);
}

// extend the pseudo-modal cover to the edges of the page
function __ResizeNoHassleDialog()
{
    var body = document.body;
    var nhct = document.all["nhct"];
    nhct.height = body.scrollHeight;
    nhct.width = body.scrollWidth;
}

// sets the no hassle property via mini-webservice
function nhset(val)
{
    if(val == 1)
    {
        if(GE('nhv')[0].checked)
            val = 1;
        else
            val = 0;
    }
    
    noHassle = (val);
    XmlHttpGet('http://' + document.location.hostname + '/user/nohassle.aspx?nh=' + noHassle);
    __HideNoHassleDialog()
}
function XmlHttpGet(url)
{
    try 
    {
        var dom = new ActiveXObject("MSXML");
        dom.async = false;
        dom.url = url;
        dom = null;
    } 
    catch(e) 
    {
    }
}

// remove no hassle dialog from screen
function __HideNoHassleDialog()
{
    document.all["nhassle"].style.display = "none";
    __UncoverPage();
}
function __SetAllSelectDisplay(disp)
{
    // hide all drop downs on the page (are unaffected by the page cover)
    var slcts = document.all.tags("select");
    var l=slcts.length - 1;
    if(l>0)
    {
        do {
            slcts[l].style.display = disp;
        } while (l--)
    }
}
function __ShowHidePromoMods(show)
{
    var slcts = document.all.tags("span");
    var l=slcts.length - 1;
    do {
        if(slcts[l].id.substr(0, 4).toLowerCase() == "div1")
        {
            if(show == true)
                slcts[l].style.display = 'inline';
            else
                slcts[l].style.display = 'none';
        }
    } while (l--)   
}

// No Hassle end

function RURL(u, wmpFlag)
{
    if(InWmp() || wmpFlag == 1)
    {
        if(u.indexOf("?") == -1)
            u += "?WMPFriendly=1";
        else
            u += "&WMPFriendly=1";
    }
    return u;
}
function RLNK(u, task)
{

    if(InWmp())
    {
        if(u.indexOf("?") == -1)
            u += "?WMPFriendly=1";
        else
            u += "&WMPFriendly=1";
        
        window.external.NavigateTaskPaneURL('MSNMusic', task != null ? task : 'ServiceTask1', 'url=' + escape(u));
        return;
    }
    else
    {
        var targ = "_new";
        var hwnd = null;
        
        try
        {   
            hwnd = window.open("", "MSNMusic");

            if(hwnd != null && hwnd.name == "MSNMusic")
                targ = "MSNMusic";
                            
        } catch(e) 
        { 
            hwnd = null;
            targ = "_new";
        }
        
        hwnd = window.open(u, targ);
        if(hwnd != null)
            hwnd.focus();
    }
}

// retun user to last buy page
function ReturnToBuy(u)
{
    var bval = GetCkVal("buyurl");
    if(bval != null && bval.length > 0 && bval != "undefined")
    {
        location.href = bval;
    }
    else if(u != null && u != "" && u.length > 0 && u != "undefined")
    {
        var secure = "secure.";
        var hostname = document.location.hostname;

        // Strip off the https://secure. on https->http redirects
        if( location.protocol == "https:" 
            && hostname.substring(0, secure.length).toLowerCase() == secure )
        {
            hostname = hostname.substr(secure.length);
        }
        location.href = ("http://" + hostname + u);
    }

}

// preload confirm button images for snappy buy button perf
function __PreloadBuyImages()
{
   if (!buyImages)
   {
        buyImages = new Object();
        
        // if nohassle is not enabled preload the confirm states
        if (IndefIsLoggedIn() && noHassle != 1)
        {
            var pT = ['al','so', 'pl'];
            var pI = ['up','dn','hv'];
            var pP = ['con', 'reg'];

            for(var tp in pT)
            {
                var t = pT[tp];

                for(var ti in pI)
                {
                    var i = pI[ti];

                    for(var tp in pP)
                    {
                        var p = pP[tp];
                        __AddBuyImageToCache(t, i, p);
                    }
                }
            }
        }
        
        // also add processing and purchased images
        __AddBuyImageToCache('al', 'up', 'pro');
        __AddBuyImageToCache('so', 'up', 'pro');
        __AddBuyImageToCache('pl', 'up', 'pro');
        
    }
}

// add an image to the image cache (used by preload and bbi)
function __AddBuyImageToCache(t, i, p)
{
    var k = tk(t,i,p);

    // need to size the image exactly for the preload to be persistent
    if ((p == 'can')||(p == 'cm')) buyImages[k] = new Image(20,16);
    else if (t == 'al') buyImages[k] = new Image(112,16);
    else if (t == 'pl') buyImages[k] = new Image(122,16);
    else buyImages[k] = new Image(80,16);

    buyImages[k].src = imgPre + "/i/lbbt/" + t + "_" + p + "_" + i + ".gif";
}

//verify drm for client install and sysrequirements purposes
function VerifyDRM()
{
   document.write('<span style="visibility:hidden"><object classid="clsid:A9FC132B-096D-460B-B7D5-1DB0FAE0C062" height="0" id="GetLicenseObj" width="0" VIEWASTEXT></object></span>');
   
   var drmVer;
   try
   {
       drmVer = GetLicenseObj.GetDRMVersion();
   }
   catch(e){ return false;}
   
   if(drmVer) 
   {
       return CompareVersions(MIN_DRM_VER, drmVer);
   }
   else
   {
       return false;
   }
}
// Flying Buttons
//d=dest,s=source,f=fly,b=button,ufo=flynobj,j=jumps,rFly=recurringFly,T-W-L-HDecr=top,width,length,height-decrements 
var fTmr, ufoCSS, fOn;
function bFly(oSrc)
{
    if(oSrc == null || typeof(destLink) == "undefined" || destLink == null) return;
    if(fOn) return;
    fOn = true;
    
    var sLeft, sTop, sWide, sHt, fLeft, fTop, jump, delay;
    var oDest = destLink;
        
    //flying object
    var doc = document.body;
    var ufo = oSrc.cloneNode(true);
    ufo.style.display = "none";
    doc.insertBefore(ufo);
    ufo.id = "flynB";
    
    //start params
    sTop  = calcDist(oSrc, "top");
    sLeft = calcDist(oSrc, "left");
    sWide = oSrc.offsetWidth;
    sHt   = oSrc.offsetHeight;
    
    //finish params
    fTop  = calcDist(oDest, "top") + (oDest.offsetHeight/2) + 5;
    fLeft = calcDist(oDest, "left") + (oDest.offsetWidth/2);

    // i tweaked these values to reduce the load on a slower computer
    jump = 15; // originally 20
    delay = 20;  // originally 10

     try
     {
        ufoCSS = flynB.style;
        ufoCSS.position = "absolute";   
        ufoCSS.overflow = "hidden";      
        ufoCSS.border = "1px SOLID BLACK";
        ufoCSS.left = sLeft;
        ufoCSS.top = sTop;
        ufoCSS.width = sWide;
        ufoCSS.height = sHt;

        var LDecr = (fLeft - sLeft)/jump;
        var TDecr = (fTop - sTop)/jump;
        var WDecr = 0;
        var HDecr = 0;

        rFly(WDecr, HDecr, LDecr, TDecr, 0, jump)
    }
    catch(e){}
}
function calcDist(o, corner)
{
    var i, bTop;
    i = 0;
    bTop = (corner == "top");
    
    while("object" == typeof(o) && o.tagName.toLowerCase() != "body")
    {
        i += bTop ? o.offsetTop : o.offsetLeft;
        o = o.offsetParent;
    }
    return i;
}
function rFly(WDecr, HDecr, LDecr, TDecr, i, j)
{
    ufoCSS.posTop += TDecr;
    ufoCSS.posWidth -= WDecr;
    ufoCSS.posHeight -= HDecr;
    ufoCSS.posLeft += LDecr;
    ufoCSS.display = "block";

    if(ufoCSS.posHeight == 0) ufoCSS.posHeight = -1; 

    if(++i < j)
    {
        fTmr = window.setTimeout("rFly(" + WDecr + ", " + HDecr + ", " + LDecr + ", " + TDecr + ", " + i + ", " + j + ")", 30);
    }
    else
    {
        dFlash();
        window.setTimeout("dRest()",500);
        sClean();
    }
}
function dFlash()
{
    if( typeof(destLink) == "undefined" || destLink != null )
    {
        destLink.style.fontWeight = "bold";
    }
}
function dRest() 
{
    if( typeof(destLink) == "undefined" || destLink != null )
    {
        destLink.style.fontWeight = "normal";
    }
}
function sClean()
{
    window.clearTimeout(fTmr);
    window.setTimeout("sDel()",20)
}
function sDel()
{
   flynB.removeNode(true);
   fOn = false;
}

// Reviews script

function SetNickname(nicknameString)
{
    var textBox = document.getElementById("rname");
    
    textBox.value = nicknameString;
}

function ChkFrm()
{
    var ff = true;
    
    if(GE('rrate').value == 0) ff = false;
    if(GE('rname').value.length == 0) ff = false;
    if(GE('rtitle').value.length == 0) ff = false;
    if(GE('rbody').value.length == 0) ff = false;
    
    GE('prevb').disabled = !ff;
}
function SubFrm(v)
{
    var rbody = GE('rbody');
    
    rbody.value = rbody.value.replace(/<br>/g, "\r\n");

    return true;
}

function chkCmt()
{
    var rbody = GE('comment');
    
    rbody.value = rbody.value.replace(/<br>/g, "\r\n");

    if(GE('cancelForm'))
        GE('cancelForm').submit();
    return true;
}

function previewReview(v, rtype)
{
var rbody = GE('rbody');
var rrate = GE('rrate'); 
var rname = GE('rname');
var rtitle = GE('rtitle');

if(rbody && rrate && rname && rtitle)
{
    
    rbody.value = rbody.value.replace(/<br>/g, "\r\n");

    GE('p_rtitle_wr').innerText = rtitle.value;
    GE('p_rrate_wr').src = imgPre + "/i/r_sr_"+ rrate.value +".gif";
    GE('p_rdate_wr').innerText = "";
    
    GE('p_rname_wr').innerText = rname.value;
    GE('p_rbody_wr').innerText = rbody.value;
    
    //show preview
    GE('divWR').style.display = "none";
    GE('divPR').style.display = "block";
                                    
    GE('rtitle2').value = rtitle.value;
    GE('rrate2').value = rrate.value;
    GE('rname2').value = rname.value;
    GE('rbody2').value = rbody.value;                              
}
return false;
}

function submitReview(v, rtype)
{
    var rrate =  GE('rrate2'); 
    var rname =  GE('rname2');
    var rtitle = GE('rtitle2');
    var rbody =  GE('rbody2');
    var rsv    = GE('rsv2');
    var id    =  GE('objid');

    rbody.value = rbody.value.replace(/<br>/g, "\r\n");

    if(typeof(rtype) != "undefined")
    {
        var DataToSend;
        DataToSend = "rsv=" + rsv.value + "&rtitle=" + escape(rtitle.value) + "&rrate=" + rrate.value + "&rname=" + escape(rname.value) + "&rbody=" +  escape(rbody.value) + "&id=" + id.value;
        var xmlhttpObj = new ActiveXObject("Microsoft.XMLHTTP");
        xmlhttpObj.Open("POST","/xml/reviews/save"+ rtype +"Review.aspx",false);
        xmlhttpObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xmlhttpObj.send(DataToSend);
        GE('divWR').style.display = "none";
        GE('divPR').style.display = "none";  
        GE('divTR').style.display = "block";  
        if(typeof(reviewWritten) != "undefined")
            reviewWritten = true;  
    }
    return false;
}

function editReview()
{
    GE('divPR').style.display = "none";               
    GE('divTR').style.display = "none";   
    GE('divWR').style.display = "block";
    return false;
}

function cancelReview()
{
    document.forms["rvfrm"].reset();
    GE('divTR').style.display = "none";  
    GE('divPR').style.display = "none";  
    GE('divWR').style.display = "block";
    return false;
}

// Dl Manager script
var SERVER = "http://" + document.location.hostname;
var NOCLIENT_URL = SERVER + "/client/install.aspx";
var SYSREQ_URL = SERVER + "/help/requirements.aspx";
var CLIENTUPGRADE_URL = SERVER + "/client/install.aspx";
var INDIVID_URL = SERVER + "/client/install.aspx";
var WMPDOWNLOAD_URL = "https://web.archive.org/web/20090307230110/http://www.microsoft.com/windows/windowsmedia/default.aspx";
var ENROLL_URL = SERVER + "/managecomputer/default.aspx";
var SIGNUP_URL = "/musicstore/signup/default.aspx";
var SUBSCRIPTION_CHECK_URL = "/musicstore/signup/subscriptioncheck.aspx";
var BAM_URL = "/premium/BAM/default.aspx";
var CUSTOMERSERVICE_URL = SERVER + "/help/errormesgs.aspx?";
var WEBSERVICE_SSLRELURL = "/clientservice/ssl/default.asmx";
var WEBSERVICE_RELURL = "/clientservice/default.asmx";
var PUBLICSERVICE_SSLRELURL = "/services/publiclistservice.asmx";
var PUBLICSERVICE_RELURL = "/services/publiclistservice.asmx";
var USERINFOSERVICE_RELURL = "/services/userinfoservice.asmx";
var MIN_ACTIVEX_VER = "4.2.2609.2";
var ACTIVEX_CLASSNAME = "MsnMusicAxLib.MsnMusicAx.2";
var MIN_SERVICEXML_VER = 3;
var MIN_PLAYER_VER = "7.1.0.0";
var MIN_DRM_VER = "7.1.0.0";
var MIN_DRM_SEC_VER = "2.0.0.0";
var CLIENT_STATUS_URL = SERVER + "/music/dlstatus.aspx";
var MUSICNETSERVICE_URL = "/services/musicnet.asmx";
// Default PPCB - login type for Passport due to Buy button
var defaultBuyPpcb = "musicstore";
var emailRegex = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
var clientRegisteredForCurrentUserEnv = "<?xml version=\"1.0\" encoding=\"utf-8\"?><soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"><soap:Body><ClientRegisteredForCurrentUser xmlns=\"http://entertainment.msn.com/ns\"><computerId>#COMPUTERID#</computerId></ClientRegisteredForCurrentUser></soap:Body></soap:Envelope>";
var clientRegisteredForCurrentUser2Env = "<?xml version=\"1.0\" encoding=\"utf-8\"?><soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"><soap:Body><ClientRegisteredForCurrentUser2 xmlns=\"http://entertainment.msn.com/ns\"><computerId>#COMPUTERID#</computerId></ClientRegisteredForCurrentUser2></soap:Body></soap:Envelope>";
var registerClientEnv = "<?xml version=\"1.0\" encoding=\"utf-8\"?><soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"><soap:Body><RegisterClient xmlns=\"http://entertainment.msn.com/ns\"><machineName>#MACHINENAME#</machineName><DRMChallenge>#DRMCHALLENGE#</DRMChallenge><computerId>#COMPUTERID#</computerId><clientHash>#CLIENTHASH#</clientHash></RegisterClient></soap:Body></soap:Envelope>";
var unregisterClientEnv = "<?xml version=\"1.0\" encoding=\"utf-8\"?><soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"><soap:Body><UnregisterClient xmlns=\"http://entertainment.msn.com/ns\"><computerId>#COMPUTERID#</computerId><hash>#HASH#</hash></UnregisterClient></soap:Body></soap:Envelope>";
var beginUnregisterClientEnv = "<?xml version=\"1.0\" encoding=\"utf-8\"?><soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"><soap:Body><BeginUnregisterClient xmlns=\"http://entertainment.msn.com/ns\"><computerId>#COMPUTERID#</computerId><hash>#HASH#</hash></BeginUnregisterClient></soap:Body></soap:Envelope>";
var updateUserComputerNameEnv = "<?xml version=\"1.0\" encoding=\"utf-8\"?><soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"><soap:Body><UpdateComputerName xmlns=\"http://entertainment.msn.com/ns\"><computerId>#COMPUTERID#</computerId><machineName>#MACHINENAME#</machineName></UpdateComputerName></soap:Body></soap:Envelope>";
var purchaseEnv = "<?xml version=\"1.0\" encoding=\"utf-8\"?><soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"><soap:Body><Buy xmlns=\"http://entertainment.msn.com/ns\"><contentId>#CONTENTID#</contentId><contentTypeId>#CONTENTTYPE#</contentTypeId><offerId>#OFFERID#</offerId><computerId>#COMPUTERID#</computerId><affiliateId>#AFFILIATEID#</affiliateId><clickTrackInfo>#CLICKTRACKINFO#</clickTrackInfo><buyAgain>#BUYAGAIN#</buyAgain><buyRevoked>#BUYREVOKED#</buyRevoked><forceCreditCard>#FORCECREDITCARD#</forceCreditCard><hash>#HASH#</hash></Buy></soap:Body></soap:Envelope>";
var getDateEnv = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">\n<soap:Body>\n<GetDate xmlns=\"http://entertainment.msn.com/ns\" />\n</soap:Body>\n</soap:Envelope>\n";
var isBillableEnv = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">\n<soap:Body>\n<CheckSignupBillable xmlns=\"http://entertainment.msn.com/ns\" />\n</soap:Body>\n</soap:Envelope>\n";
var purchasePlaylistEnv = "<?xml version=\"1.0\" encoding=\"utf-8\"?><soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"><soap:Body><BuyPlaylist xmlns=\"http://entertainment.msn.com/ns\"><playlistId>#PLAYLISTID#</playlistId><buyPartialList>#BUYPARTIALLIST#</buyPartialList><computerId>#COMPUTERID#</computerId><affiliateId>#AFFILIATEID#</affiliateId><clickTrackInfo>#CLICKTRACKINFO#</clickTrackInfo><buyAgain>#BUYAGAIN#</buyAgain><buyRevoked>#BUYREVOKED#</buyRevoked><forceCreditCard>#FORCECREDITCARD#</forceCreditCard><hash>#HASH#</hash></BuyPlaylist></soap:Body></soap:Envelope>";
var passalongEnv = "<?xml version=\"1.0\" encoding=\"utf-8\"?><soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"><soap:Body><SendItemToUser xmlns=\"http://entertainment.msn.com/services\"><email>#EMAIL#</email><id>#CONTENTID#</id><contentType>#CONTENTTYPE#</contentType></SendItemToUser></soap:Body></soap:Envelope>";
var removePassalongEnv = "<?xml version=\"1.0\" encoding=\"utf-8\"?><soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"><soap:Body><RemovePassalong xmlns=\"http://entertainment.msn.com/services\"><passalongId>#PASSALONGID#</passalongId></RemovePassalong></soap:Body></soap:Envelope>";
var nickNameEnv = "<?xml version=\"1.0\" encoding=\"utf-8\"?><soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"><soap:Body><SetNickName xmlns=\"http://entertainment.msn.com/services\"><nickName>#NICKNAME#</nickName></SetNickName></soap:Body></soap:Envelope>";
var flagPlistEnv = "<?xml version=\"1.0\" encoding=\"utf-8\"?><soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"><soap:Body><FlagPlaylist xmlns=\"http://entertainment.msn.com/services\"><listid>#LISTID#</listid></FlagPlaylist></soap:Body></soap:Envelope>";
var onCodeInstalledEnv = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">\n<soap:Body>\n<OnCodeInstalled xmlns=\"http://entertainment.msn.com/ns\">\n<args>#ARG#</args>\n</OnCodeInstalled>\n</soap:Body>\n</soap:Envelope>\n";
var musicnetEnv = "<?xml version=\"1.0\" encoding=\"utf-8\"?><soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"><soap:Body><GetSampleUrl xmlns=\"http://entertainment.msn.com/services\"><songid>#SONGID#</songid></GetSampleUrl></soap:Body></soap:Envelope>";

var xmlhttp, dom, msxml, resNode, res, clientId, affiliateId, Player, output, redirPending = false;
var msnmusax = null;
var rmgetlic = null;
var lastBuyResult = 0;
var newComputerName = "";
var buyFailTxt = "The download did not complete. You will not be charged for this transaction.";
var errorUrl = null;

var rewardNotifications = null;
var rewardNotifyIndex;

//buy cookie expiry times for set and delete cookie
var expSet, expDel;

//
// PreBuy() and Buy() Return values:
// Any negative value indicates purchase is not complete
//  0: Purchase or PrePurchase checks success
//  1: User chose not to purchase
//  2: Indiv kicked off, buy will be attempted after indiv
// -1: Not signed in
// -2: Not signed up
// -3: Not billable
// -4: Could not enroll
// -5: Unexpected buy failure
// -6: Started indiv, buy will complete asynchronously
// -7: An async buy with indiv is pending
// -8: Radio purchase specific
// -10: System requirements not met
// -11: Msn Music Assistant not installed
//
function PreBuy(id, type, offer, clickTrackInfo)
{
//ifdef debug
    __mClearStat();
    __mdbgout("Initiating purchase id=" + id + " Type=" + type + " Offer=" + offer);
//endif

    // set expiration times now
    expSet = GMTStringPlus(10);
    expDel = GMTStringMinus(10);

    //write buy url cookie
    if( event && event.srcElement )
    {
        document.cookie = "bbuy=by" + id + "; Path=/; expires=" + expSet + "; domain=" + __getDocDomain();
        document.cookie = "red=; Path=/; expires=" + expDel + "; domain=" + __getDocDomain();
        blockRedir = false;
    }
    
    if(window.inNowPlaying == true)
    {
        if(redirPending && !__mInWmp10())
        {
            //downlevel radio user re-clicked confirm button
            var rUrl = (npbuyurl != "") ? npbuyurl : "/music/";
            setTimeout("RLNK('" + rUrl + "');", 100);
            return -8;  
        }
        else
        {
            //set buy url to a music page instead of temporary radio page
            document.cookie = "buyurl=" + escape(npbuyurl) + "; Path=/; expires=" + expSet + "; domain=" + __getDocDomain();
        }
    }
    else
    {
        document.cookie = "buyurl=" + escape(document.URL) + "; Path=/; expires=" + expSet + "; domain=" + __getDocDomain();
    }
    
    // Check requirements - none of this hits the server
    res = CheckSetupPreIndiv();
    if (res != 0) {
        setTabCookie();
        redirectPage(CUSTOMERSERVICE_URL + "#checkreqfail");
        return res;
    }

    // don't check indiv yet because it requires no input
    // and the callback does the real Buy()
    return 0;
}
function Buy(id, type, offer, clickTrackInfo)
{
    // rerun these checks (fast) to preserve the exotic scenerios
    res = PreBuy(id, type, offer, clickTrackInfo);
    if (res != 0) return res;

    // Check indiv and kick off async indiv if not individualized
    res = DoIndiv();
    if( res == 0 )
    {
        output = "NAK";
        try {
            output = msnmusax.Do("GETID", "");
        } catch (e) {
//ifdef debug
            __mdbgout("Exception in GETID()");
//endif
            redirectPage(CUSTOMERSERVICE_URL + "#getid");
            return -4;
        }

        // If computer has no ID, enroll it
        // Otherwise, we may or may not be enrolled for this user - doesn't matter
        if( output == "NAK" )
        {
            if( !EnrollComputer("") )
            {
                redirectPage(CUSTOMERSERVICE_URL + "#enrollfailure");
                return -4;
            }
        }
        else
        {
            clientId = output;
        }

        var buyResult;
        buyResult = __mBuyInternal(id, type, offer, false, false, clickTrackInfo, false, 0, false);

        //     public enum BuyResult : short
        // NotSignedIn         = 0,
        // LoggedIn            = 1,
        // SignedUp            = 2,
        // Billable            = 3,
        // ClientRegistered    = 4,
        // PurchaseFailed      = 100,
        // WholeOwned          = 101,
        // SubitemsOwned       = 102,
        // WholeRevoked        = 103,
        // SubitemsRevoked     = 104,
        // CreditsExpired       = 106,
        // ValidCredits         = 107,
        // CreditCardNotEnabled= 108,
        // InsuffCreditsBillable= 109,
        // InsuffCredNotBillable= 110,
        // InsuffCredNotSignedUp= 111,
        // EmptyUserAccountSiid= 112,
        // BuyDisabled         = 113,
        // BuySuccess          = 32000
        
        if( buyResult == 32000 )
        {
            __mClearBBUrl();
            return 0;
        }
        else if( buyResult == 0 )
        {
            // Not logged in
            TrigLogIn(defaultBuyPpcb);
            return -1;
        }
        else if( buyResult == 1 )
        {
            // No account
            redirectPage(SUBSCRIPTION_CHECK_URL + "?fbuy=1");
            return -2;
        }
        else if( buyResult == 2 )
        {
            // Not billable
            redirectPage(BAM_URL);
            return -3;
        }
        else if( buyResult == 3 )
        {
            // Make sure not to loop forever if enroll doesn't work right
            if( lastBuyResult != buyResult )
            {
                // Not enrolled
                if( !EnrollComputer("") )
                {
                    redirectPage(CUSTOMERSERVICE_URL + "#enrollfailure");
                    return -4;
                }

                lastBuyResult = buyResult;

                return Buy(id, type, offer, clickTrackInfo);
            }
            else
            {
                redirectPage(CUSTOMERSERVICE_URL + "#enrollfailure2");
                return -4;
            }
        }
        else if( buyResult == 101 || buyResult == 102 || buyResult == 103 || buyResult == 104 || buyResult == 106 || buyResult == 108 || buyResult == 109 || buyResult == 110 || buyResult == 111)
        {
            // User chose not to repurchase or buy revoked or chose not to use credit card (credits)
            __mClearBBUrl();
            return 1;
        }
        else if( buyResult == 113 )
        {
            // Purchasing disabled
            __mClearBBUrl();
            redirectPage(errorUrl);
            return -6;
        }
        else
        {
            // Buy results 4, 100, 107, 112 : all unexpected failures
            __mClearBBUrl();
            //alert(buyFailTxt);
            return -5;
        }
    }
    // unreachable
    return -5;
}
function __mInWmp10()
{
    var ret = false;
    if( InWmp() )
    {
        try {
            var _wver = window.external.version;
            var _wversplit = _wver.split(".");
            if( _wversplit[0] >= 10 )
            {
                ret = true;
//ifdef debug
                __mdbgout("Inside WMP10");
//endif
            }
        } catch(e) {
        }
    }
    return ret;
}
function __getDocDomain()
{
    var host = document.location.hostname;
    var tmp = host.substr(0, host.lastIndexOf('.'));
    
    return host.substring(tmp.lastIndexOf("."))
}
function __mSetHandlers(o, h)
{
    o.onmouseenter = h;
    o.onmouseleave = h;
    o.onmousedown = h;
    o.onmouseup = h;
    o.onclick = h;
    o.onkeydown = h;
    o.onkeyup = h;
}

function __mClearBBUrl()
{
    var bval = GetCkVal("buyurl");
    
    if(bval != null && bval.length > 0 && bval != "undefined")
    {
        document.cookie = "buyurl=; Path=/; expires=" + expDel + "; domain=" + __getDocDomain();
    }

    bval = GetCkVal("bbuy");
    
    if(bval != null && bval.length > 0 && bval != "undefined")
    {
        document.cookie = "bbuy=; Path=/; expires=" + expDel + "; domain=" + __getDocDomain();
    }

    document.cookie = "secauth=;Path=/; expires=" + expDel + "; domain=" + __getDocDomain();

}
function __CoverPage()
{
    var body = document.body;
    // insert the cover table just after the body open tag (otherwise it does not cover properly)
    if (!document.all["nhcover"])
    {
        body.insertAdjacentHTML("afterBegin", "<span id='nhcover' style='display: none;'>"+
            "<table id='nhct' class='nhcover' cellpadding=0 cellspacing=0 border=0><tr><td>&nbsp;</td></tr></table></span>"); 
    }

    // activate cover
    var nhc = document.all["nhcover"].style;
    nhc.display = "inline";
    nhc.zIndex = 2;
    // resize the covering table to fill all available space (Height and Width=100% only fills above the folds)
    __ResizeNoHassleDialog();
    window.onresize = __ResizeNoHassleDialog;
    // hide all drop downs on the page (are unaffected by the page cover)
    __SetAllSelectDisplay("none");
    __ShowHidePromoMods(false);
}
function __UncoverPage()
{
    document.all["nhcover"].style.display = "none";
    __SetAllSelectDisplay("inline");
    __ShowHidePromoMods(true);
    window.onresize = null;
}
function __mNoHassleClearBBUrl(retval)
{
    //clean cookie if nohassle buyer got redirected to error page
    if ( (noHassle > 0) && (retval == -10 || retval == -4 || retval == -3) )
        __mClearBBUrl();
}
function __mBuyInternal(id, type, offer, repurchase, repurchaseRevoked, clickTrackInfo, forceCC, lastError, buyPartial)
{
    var newEnv;
    var buyResult = -1;
    var playlistType = 13; //i guess this is 13 but have to dbl check
    var contentType = "album";
    
    __mCheckAffiliate();
    
    if(type == playlistType)
        newEnv = purchasePlaylistEnv;
    else    
        newEnv = purchaseEnv;
        
    if( repurchase == true )
    {   
        newEnv = newEnv.replace("#BUYAGAIN#", "true");
    }
    else
    {
        newEnv = newEnv.replace("#BUYAGAIN#", "false");
    }
    if( repurchaseRevoked == true )
    {
        newEnv = newEnv.replace("#BUYREVOKED#", "true");    
    }
    else
    {
        newEnv = newEnv.replace("#BUYREVOKED#", "false");    
    }
    if( forceCC == true )
    {
        newEnv = newEnv.replace("#FORCECREDITCARD#", "true");    
    }
    else
    {
        newEnv = newEnv.replace("#FORCECREDITCARD#", "false");    
    }
    
    if(type == playlistType)
    {
        contentType = "playlist";
        newEnv = newEnv.replace("#BUYPARTIALLIST#", buyPartial);
        newEnv = newEnv.replace("#PLAYLISTID#", id);
    }
    else
    {
        newEnv = newEnv.replace("#CONTENTID#", id);
        newEnv = newEnv.replace("#CONTENTTYPE#", type);
        newEnv = newEnv.replace("#OFFERID#", offer);
    }
    
    newEnv = newEnv.replace("#COMPUTERID#", clientId);
    newEnv = newEnv.replace("#AFFILIATEID#", affiliateId);
    newEnv = newEnv.replace("#CLICKTRACKINFO#", "<![CDATA[" + clickTrackInfo + "]]>");

    // Playlist and item IDs are formatted the same way, GUID or int
    var toHashString = clientId.toLowerCase() + ":" + id + ":" + type + ":" + offer;
    var hash;
    try
    {
        hash = msnmusax.Do("HASH", toHashString);
    }
    catch(e)
    {
    }

    if( hash != null )
    {
        newEnv = newEnv.replace("#HASH#", "<![CDATA[" + hash + "]]>");

        if(type == playlistType)
            dom = postSoapRequest("BuyPlaylist", newEnv, false);
        else
            dom = postSoapRequest("Buy", newEnv, false);

        if( dom )
        {
            if(type == playlistType)
                resNode = dom.selectSingleNode('//web.archive.org/web/20090307230110/http://buyplaylistresult');
            else
                resNode = dom.selectSingleNode('//web.archive.org/web/20090307230110/http://buyresult');
                
            if( resNode != null )
            {
                buyResult = resNode.text;
            }
        }
    }

    if (buyResult == 32000 ) {
//ifdef debug
        __mdbgout("Purchase id=" + id + " Type=" + type + " Offer=" + offer + " succeeded");
//endif

        // Notify user if song got credited
        var resNodes = dom.selectNodes('//web.archive.org/web/20090307230110/http://promotions/ReceivedPromotion');
        if (resNodes != null && resNodes.length > 0 ) 
        {
            // Kick off async notifications in order
            rewardNotifications = resNodes;
            rewardNotifyIndex = 0;
            window.setTimeout('NotifySongsCredited()', 2000); 
        }

        // Update credit UI if required
        resNode = dom.selectSingleNode('//web.archive.org/web/20090307230110/http://creditbalance');
        if( resNode != null && resNode.text != "" && resNode.text != "-1")
        {
            UpdateCreditBalance(parseInt(resNode.text));
        }
          
        TrigPull();
    } 
    else if( repurchase == false && buyResult == 103 )
    {
        var mbxText;
        resNode = dom.selectSingleNode('//web.archive.org/web/20090307230110/http://items');
        if( resNode != null )
        {
            mbxText = 'This computer has been previously de-authorized and \"' + resNode.text + '\" will not play. Are you sure you want to purchase it?';
        }
        else
        {
            mbxText = 'This computer has been previously de-authorized and this item will not play. Are you sure you want to purchase it?';
        }
        
        res = confirm(mbxText);
        if( res == true )
        {
            buyResult = __mBuyInternal(id, type, offer, repurchase, true, clickTrackInfo, forceCC, buyResult, buyPartial);
        }
    }    
    else if( repurchaseRevoked == false && buyResult == 104 )
    {
        resNode = dom.selectNodes('//web.archive.org/web/20090307230110/http://string');
        var mbxText;
        if( resNode.length != 0 )
        {
            var i;
            mbxText = 'This computer has been previously de-authorized and these tracks will not play:\n\n';
            for( i = 0; i < resNode.length; i++ )
            {
                mbxText = mbxText + '     \"' + resNode.item(i).text + '\"\n';
            }
            mbxText = mbxText + '\nAre you sure you want to purchase this ' + contentType +'?';
        }
        else
        {
            mbxText = 'This computer has been previously de-authorized and some of the tracks on this ' + contentType +' will not play. Are you sure you want to purchase this ' + contentType +'?'
        }
        res = confirm(mbxText);
        if( res == true )
        {
            buyResult = __mBuyInternal(id, type, offer, repurchase, true, clickTrackInfo, forceCC, buyResult, buyPartial);
        }
    }
    else if( buyResult == 105 && lastBuyResult != buyResult )
    {
        // Sequence was invalid
        // See if we have a new sequence sent by the server, and if we can apply it, buy again
        try
        {
            resNode = dom.selectSingleNode('//web.archive.org/web/20090307230110/http://requiredsequence');
            if( resNode != null && resNode.text != "")
            {
                // Throws on error
                msnmusax.Do("HASHRESPONSE", resNode.text);

                // Sequence should be updated now, retry buy
                buyResult = __mBuyInternal(id, type, offer, repurchase, true, clickTrackInfo, forceCC, buyResult, buyPartial);
            }
        }
        catch(e)
        {
            // invalid server sequence - no retry
        }
    }
    else if( repurchase == false && buyResult == 101 )
    {
        var mbxText;
        resNode = dom.selectSingleNode('//web.archive.org/web/20090307230110/http://items');
        if( resNode != null )
        {
            mbxText = 'You have already purchased \"' + resNode.text + '\", would you like to purchase it again?';
        }
        else
        {
            mbxText = 'You have already purchased this item, would you like to purchase it again?';
        }
        
        res = confirm(mbxText);
        if( res == true )
        {
            buyResult = __mBuyInternal(id, type, offer, true, repurchaseRevoked, clickTrackInfo, forceCC, buyResult, buyPartial);
            __mConfirmRebuySucceeded(buyResult);
        }
    }
    else if( buyPartial == false && repurchase == false && buyResult == 102 )
    {
        var mbxText;
        var maxDisp = 10;
        resNode = dom.selectNodes('//web.archive.org/web/20090307230110/http://string');
        var i;
        if(type == playlistType)// playlist
        {
            if( resNode.length != 0 )
            {
                mbxText = 'You have already purchased some of the songs on this playlist including:\n\n';
                if(resNode.length <= maxDisp)
                {
                    for( i = 0; i < resNode.length; i++ )
                    {
                        mbxText = mbxText + '     \"' + resNode.item(i).text + '\"\n';
                    }
                    mbxText = mbxText + '\n\n Do you want to purchase only the songs you don\'t have yet?';
                }
                else
                {
                    var count = resNode.length - maxDisp;
                    for( i = 0; i < maxDisp; i++ )
                    {
                        mbxText = mbxText + '     \"' + resNode.item(i).text + '\"\n';
                    }
                    
                    mbxText = mbxText + '\n and ' + count +  ' other song(s) \n\n Do you want to purchase only the songs you don\'t have yet?';
                }
            }
            else
            {
                mbxText = 'You have already purchased some items from this collection.\n\n Do you want to purchase only the songs you don\'t have yet?';
            }
            res = confirm(mbxText);
            if( res == true )
            {
                //buy partial playlist.
                buyResult = __mBuyInternal(id, type, offer, false, repurchaseRevoked, clickTrackInfo, forceCC, buyResult, true);
                __mConfirmRebuySucceeded(buyResult);
            }
            //else //buy playlist again
            //{
                //do nothing bug 28562
               // buyResult = __mBuyInternal(id, type, offer, true, repurchaseRevoked, clickTrackInfo, forceCC, buyResult, false);
               // __mConfirmRebuySucceeded(buyResult);
                
            //}
        }
        else //non playlist ( album )
        {
            if( resNode.length != 0 )
            {
                mbxText = 'You have already purchased some of the songs on this ' + contentType +':\n\n';
                for( i = 0; i < resNode.length; i++ )
                {
                    mbxText = mbxText + '     \"' + resNode.item(i).text + '\"\n';
                }
                mbxText = mbxText + '\nAre you sure you want to buy these tracks again when you purchase the ' + contentType +'?';
            }
            else
            {
                mbxText = 'You have already purchased some items from this collection, would you like to purchase them again?';
            }
            res = confirm(mbxText);
            if( res == true )
            {
                buyResult = __mBuyInternal(id, type, offer, true, repurchaseRevoked, clickTrackInfo, forceCC, buyResult, buyPartial);
                __mConfirmRebuySucceeded(buyResult);
            }
        }
        
    }
    else if( buyResult == 110 )     // User has no credits, is signed up but is not billable.
    {
        var mbxText;
        mbxText = 'You do not have enough song credits to purchase this ' + contentType +'.  Do you want to use a credit card to purchase this ' + contentType +' now?';
        res = confirm(mbxText);
        if( res == true )
            buyResult = 2; // return 2 to force redirection to BAM       
        else
            buyResult = 110; // where it cleans up the buyurl cookie( same as cancel) 
    }
    else if( buyResult == 111 )     // User has no credits and is not signed up.
    {
        var mbxText;
        mbxText = 'You do not have enough song credits to purchase this ' + contentType +'.  Do you want to use a credit card to purchase this ' + contentType +' now?';
        res = confirm(mbxText);
        if( res == true )
            buyResult = 1; // return 1 to force redirection to sign up       
        else
            buyResult = 111; // where it cleans up the buyurl cookie( same as cancel) 
    }
    else if( buyResult == 113 )
    {
        // Purchasing disabled
        resNode = dom.selectNodes('//web.archive.org/web/20090307230110/http://string');
        if( resNode.length > 0 )
        {
            errorUrl = resNode.item(0).text;
        }
        else
        {
            errorUrl = CUSTOMERSERVICE_URL + "#purchasedisabled";
        }
    }
    else if( buyResult == 109 )     // User has credits, is signed up and billable, but not enough to buy the contentType in question
    {
        var mbxText;
        mbxText = 'You do not have enough song credits to make this purchase, would you like to charge it to your credit card?';
        res = confirm(mbxText);
        if( res == true )
        {
            buyResult = __mBuyInternal(id, type, offer, repurchase, repurchaseRevoked, clickTrackInfo, true, buyResult, buyPartial);       
        }        
    }
    else if( buyResult == 108 )     // Ask user to enable cc everytime they toggle between credit and cc purchase. This is different than forcecc.
    {
        var mbxText;
        mbxText = 'Your credit card is not enabled, would you like to enable your credit card?';
        res = confirm(mbxText);
        if( res == true )
        {
            eccSet("true");
            buyResult = __mBuyInternal(id, type, offer, repurchase, repurchaseRevoked, clickTrackInfo, forceCC, buyResult, buyPartial);    
        }        
    }
    else if( buyResult == 106 )     // Expired credits, query user to force cc
    {
        var mbxText;
        mbxText = 'Your song credits have expired, would you like to charge it to your credit card?';
        res = confirm(mbxText);
        if( res == true )
        {
            buyResult = __mBuyInternal(id, type, offer, repurchase, repurchaseRevoked, clickTrackInfo, true, buyResult, buyPartial);       
        }        
    }

    return buyResult;
}
function __mConfirmRebuySucceeded(buyResult)
{
    if ( buyResult == 101 || buyResult == 102 )
    {
        // The only way that we can get 101 or 102 error back if we passed a "true"
        // to Buy() for the "repurchase" parameter is if the total retail value of the
        // offer was 0, meaning this was a freebie promotional.  Why would Buy() return
        // 101 || 102 in this case?  Because we don't want a bad guy to downlaod the 
        // same free content millions of times.
        alert('Sorry, you can only download free promotional content once.');
    }
}
//check affiliate now first checks for affId cookie set by entpage.cs
//if it cant find it sets it to -1
function __mCheckAffiliate()
{
    var affCk = GetCkVal("affID");
    if(affCk != null && affCk.length > 0 && affCk != "undefined")
        affiliateId = affCk;
    else
        affiliateId = "-1";
}
// sets the enable property via mini-webservice
function eccSet(val)
{
    if(val == "true" || val == "false")
        XmlHttpGet('http://' + document.location.hostname + '/user/enablecc.aspx?ecc=' + val);  
}
function CheckSignupBillable(noredir)
{
    var ret = false;
    dom = postSoapRequest("CheckSignupBillable", isBillableEnv, false);
    if (dom) 
    {  
        resNode = dom.selectSingleNode('//web.archive.org/web/20090307230110/http://checksignupbillableresult');
        if(resNode && resNode.text != "false")
        {       
            resNode = dom.selectSingleNode('//web.archive.org/web/20090307230110/http://tokenuser');
            if(resNode && resNode.text == "true")
            {
                res = true;
            }
            else
            {
                resNode = dom.selectSingleNode('//web.archive.org/web/20090307230110/http://prepaiduser');
                if(resNode && resNode.text == "true")
                {
                    res = true;
                }
                else
                {
                    resNode = dom.selectSingleNode('//web.archive.org/web/20090307230110/http://signedup');
                    if (resNode && resNode.text == "false")
                    {
                        // No account.
                        if(noredir != true)
                        {
                            redirectPage(SUBSCRIPTION_CHECK_URL + "?fbuy=1");
                        }
                    }
                    else
                    {  
                        resNode = dom.selectSingleNode('//web.archive.org/web/20090307230110/http://billable');
                        if (resNode && resNode.text == "false")
                        {
                            // Not billable
                            if(noredir != true)
                            {
                                redirectPage(BAM_URL);
                            }
                        }
                        res = true;
                    }
                }
            }
        }
    }
    return res;
}
function CheckSetupPreIndiv()
{
    if(!CreateXmlHttp(true)) return -10;
    if(!CheckPlayerObject(true)) return -10;
    if(!CheckActiveX(false, false, true)) return -11;
    return 0;
}
function CompareVersions(expected, actual)
{
    var match = false;
    var exps = expected.split(".");
    var acts = actual.split(".");
    if( exps.length == acts.length )
    {
        match = true;
        var e;
        var a;
        for( var i = 0; i < exps.length; i++ )
        {
            e = parseInt(exps[i]);
            a = parseInt(acts[i]);
            if( isNaN(e) || isNaN(a) || e > a)
            {
                match = false;
                break;
            }
            else if( a > e )
                break;
        }
    }

    return match;
}
function NeedSecure()
{
    try
    {
        if( CheckActiveX(true, false, false) )
        {
            clientId = msnmusax.Do("GETID", "");
            if("NAK" != clientId) {
                return false;
            }
        }
    }
    catch(e)
    {
    }
    return true;
}
function CheckActiveX(noredir, noversioncheck, checksignupbillable)
{
    var ret = false;
    try { 
        if(null == msnmusax || typeof msnmusax != "object")   
        {
            msnmusax = new ActiveXObject(ACTIVEX_CLASSNAME);
//ifdef debug
            __mdbgout("Have ActiveX");
//endif
            // For newer ActiveX's, set the serviceId
            try { msnmusax.SetService(serviceid, MIN_SERVICEXML_VER); } catch(e) {}

            var version = msnmusax.Do("GETACTIVEXVERSION", "");
            if( true == noversioncheck || true == CompareVersions(MIN_ACTIVEX_VER, version) )
            {
                ret = true;
            }
            else
            {
                msnmusax = null;
                if (checksignupbillable == true)
                {
                    CheckSignupBillable(noredir);
                }
                if(noredir != true)
                {
                    redirectPage(CLIENTUPGRADE_URL);
                }
            }
        }
        else
        {
            ret = true;
        }
    } catch (e) {
        msnmusax = null;
        if (checksignupbillable == true)
        {
            CheckSignupBillable(noredir);
        }
        if(noredir != true)
        {
            redirectPage(NOCLIENT_URL);
        }
    }
    if( !ret )
    {
        msnmusax = null;
    }
    return ret;
}
function CheckOldAx()
{
    var ret = false;
    if(!CheckActiveX(true, false, false))
    {
        try 
        {
            var oldax = new ActiveXObject("MsnMusicAxLib.MsnMusicAx.1");
            ret = true;
            oldax = null;
        }
        catch(e) {}
    }
    return ret;
}
function CheckPlayerObject(redirOnFail)
{
    var ret = false;
    try {
        if(Player == null) Player = new ActiveXObject('WMPlayer.OCX');
        if (null != Player.versionInfo) {
            if( CompareVersions(MIN_PLAYER_VER, Player.versionInfo) ) {
                ret = true;
            }
        }
    } catch (e) {
    }
    if( !ret && redirOnFail ) redirectPage(WMPDOWNLOAD_URL);
    return ret;
}
function CreateXmlHttp(redirOnFail)
{
    try {
//ifdef debug
        __mdbgout("Instantiating xmlhttp");
//endif
        if (msieversion()!=0)
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        else
            xmlhttp = new XMLHttpRequest();
//ifdef debug
        __mdbgout("xmlhttp instantiated");
//endif
    } catch(e) {
        xmlhttp = null;
//ifdef debug
        __mdbgout("could not instanciate xmlhttp");
//endif
        if( redirOnFail ) redirectPage(SYSREQ_URL + "#activex");
        
        return false;
    }
    return true;
}
function CreateRMGetLicense(redirOnFail)
{
    if( rmgetlic == null ){
        try { rmgetlic = new ActiveXObject("DRM.GetLicense"); } catch(e) {}
    }
    if( rmgetlic == null && redirOnFail ) redirectPage(CUSTOMERSERVICE_URL + "#nodrm");
    return (rmgetlic != null);
}
function SetUiMode()
{
    try {
        if( CheckActiveX(true, false, false) ) {
            // Outside WMP this should be 3
            // Inside WMP it should be 8
            // UMF_None        = 0, // No UI - Crescent purchase
            // UMF_TrayIcon    = 0x00000001, // Show tray icon
            // UMF_Baloons     = 0x00000002, // Show baloons (if preferences allow)
            // UMF_MainWindow  = 0x00000004, // Show main window (debug only)
            // UMF_QuitWithWmp = 0x00000008, // Quit when WMP sets service plugin to inactive
            // UMF_NoDelete    = 0x00000010  // Do not delete on exit
            if( __mInWmp10() ) {
                output = msnmusax.Do("SETUI", "24");
            } else {
                output = msnmusax.Do("SETUI", "19");
            }
        }
    } catch (e) {
//ifdef debug
        __mdbgout("Exception caught in SetUiMode()");
//endif
    }
}
function TrigPull() 
{
    try {
        if( !CheckActiveX() )
        {
            return;
        }

        SetUiMode();
//ifdef debug
        __mdbgout("Sending pull request");
//endif
        var pullEnv = '<?xml version="1.0" encoding="utf-16" ?><Request xmlns="https://web.archive.org/web/20090307230110/http://entertainment.msn.com/ns"><Command name="Pull" downloads="true"/><Command name="Pull" licenses="true"/></Request>';
        output = msnmusax.Do("DO", pullEnv);
//ifdef debug
        __mdbgout("Pull response : " + output);
//endif
    } catch (e) {
//ifdef debug
        __mdbgout("Exception caught in TrigPull()");
//endif
    }
}
function postSoapRequest(func, request, secure) {
    if( secure == true )
    {
        if(!CheckActiveX()) return;
        var headers = "SOAPAction: http://entertainment.msn.com/ns/" + func + "\r\nContent-Type: text/xml; charset=utf-8\r\n";
    //ifdef debug
        __mdbgout('sending SSL SOAP request: ' + request);
    //endif
        try {
            var response = msnmusax.Http( WEBSERVICE_SSLRELURL, true, headers, request);
        } 
        catch (e) {
    //ifdef debug
            __mdbgout('Exception caught in postSoapRequest() : ' + e);
        //endif
            return;
        }
        
    //ifdef debug
        __mdbgout('receiving SSL SOAP response : ' + response);
    //endif
        var xmldoc = new ActiveXObject("Microsoft.XMLDOM");
        xmldoc.async = "false";
        // Have to replace the utf-8 in the response with utf-16 for the 2.1 DOM to succeed in loading the string
        response = response.replace('encoding="utf-8"', 'encoding="utf-16"');
        xmldoc.loadXML(response);

        return xmldoc;
    }
    else
    {
        if (!xmlhttp && !CreateXmlHttp(true)) {
            return;
        }
        xmlhttp.open("POST", document.location.protocol + "//" + document.location.hostname + WEBSERVICE_RELURL , false);
        xmlhttp.setRequestHeader("SOAPAction", "https://web.archive.org/web/20090307230110/http://entertainment.msn.com/ns/" + func);
        xmlhttp.setRequestHeader("Content-Type","text/xml; charset=utf-8");
    //ifdef debug
        __mdbgout('sending SOAP request : ' + request);
    //endif
        xmlhttp.send(request);
    //ifdef debug
        __mdbgout('receiving SOAP response : ' + xmlhttp.responseXML.xml);
    //endif
        return xmlhttp.responseXML;
    }
}

function postCustomSoapRequest(func, nspace, request, serviceurl, secure) {
    if( secure == true )
    {
        if(!CheckActiveX()) return;
        var headers = "SOAPAction: "+ nspace + func + "\r\nContent-Type: text/xml; charset=utf-8\r\n";
    //ifdef debug
        __mdbgout('sending SSL SOAP request: ' + request);
    //endif
        try {
            var response = msnmusax.Http( serviceurl, true, headers, request);
        } 
        catch (e) {
    //ifdef debug
            __mdbgout('Exception caught in postSoapRequest() : ' + e);
        //endif
            return;
        }
        
    //ifdef debug
        __mdbgout('receiving SSL SOAP response : ' + response);
    //endif
        var xmldoc = new ActiveXObject("Microsoft.XMLDOM");
        xmldoc.async = "false";
        // Have to replace the utf-8 in the response with utf-16 for the 2.1 DOM to succeed in loading the string
        response = response.replace('encoding="utf-8"', 'encoding="utf-16"');
        xmldoc.loadXML(response);

        return xmldoc;
    }
    else
    {
        if (!xmlhttp && !CreateXmlHttp(true)) {
            return;
        }
        xmlhttp.open("POST", document.location.protocol + "//" + document.location.hostname + serviceurl , false);
        xmlhttp.setRequestHeader("SOAPAction", nspace + func);
        xmlhttp.setRequestHeader("Content-Type","text/xml; charset=utf-8");
    //ifdef debug
        __mdbgout('sending SOAP request : ' + request);
    //endif
        xmlhttp.send(request);
    //ifdef debug
        __mdbgout('receiving SOAP response : ' + xmlhttp.responseXML.xml);
    //endif
        return xmlhttp.responseXML;
    }
}

//ifdef debug
function __mdbgout(t)
{ 
    if (document.all["stat"] != null)
    {
        __mdbgtxt(t)
        stat.innerHTML += "<br><li>"+t;
    }
}
function __mdbgtxt(t)
{
    t = t.replace(/\</g, "&lt;");
    t = t.replace(/\>/g, "&gt;");
    t = t.replace(/\n/g, "<br>");
    return t;
}
function __mClearStat()
{
    if (document.all["stat"] != null)
    {
        stat.innerHTML = "";
    }
}
//endif
var blockRedir = false;
function redirectPage(pageUrl) 
{
    if (!redirPending && !blockRedir) 
    {
        redirPending = true;
        if(window.inNowPlaying != true)
        {
            setTimeout("window.location.href = '" + pageUrl + "';" , 100);
        }
        else
        {
            if(window.npbuyurl)
                setTimeout("RLNK('" + window.npbuyurl + "');", 100);
        }
    }
}
function IsComputerEnrolled(noredir)
{
    try {
        if (!CheckActiveX(noredir, false, false))
            return false;
        
        output = msnmusax.Do("GETID", "");
        if ("NAK" != output)
        {       
            // Test if computer is enrolled with current user
            var newClientRegisteredForCurrentUserEnv = clientRegisteredForCurrentUserEnv.replace("#COMPUTERID#", output);
            dom = postSoapRequest("ClientRegisteredForCurrentUser", newClientRegisteredForCurrentUserEnv, false);
            if (!dom)
                return false;
            resNode = dom.selectSingleNode('//web.archive.org/web/20090307230110/http://clientregisteredforcurrentuserresponse');
            if (resNode) {
                if (resNode.text == "true")
                {
                    clientId = output;
                    return true;
                }
            }
        }
    } catch (e) {
//ifdef debug
        __mdbgout("Exception caught in IsComputerEnrolled()");
//endif
    }   
    return false;
}
function GetDefaultComputerName()
{
    var name = ""
    try
    {
        name = msnmusax.Do("GETCOMPUTERNAME", "");
    }
    catch(e)
    {
    }
    return name;
}
function EnrollComputer(machineName)
{
    // NOTE: This should be called after indiv is already checked
    if( !CheckActiveX() ) return false;

    var enrollExisting;
    var hash = "";
    var registerResult = -2;
    var clientEnrolled = false;

    try {
        clientId = msnmusax.Do("GETID", "");
        if("NAK" == clientId) {
            // No ID yet - do clean enroll
            enrollExisting = false;
            clientId = "00000000-0000-0000-0000-000000000000";
            registerResult = -1;
        } else {
            // Get challenge and do existing enroll with hash
            enrollExisting = true;
            var newEnv = clientRegisteredForCurrentUser2Env.replace("#COMPUTERID#", clientId);
            dom = postSoapRequest("ClientRegisteredForCurrentUser2", newEnv, false);
            if( dom ) { 
                resNode = dom.selectSingleNode("//web.archive.org/web/20090307230110/http://clientregisteredforcurrentuser2result");
                if( resNode ) {
                    if( "true" == resNode.text ) {
                        // Already enrolled - server returns same error code
                        registerResult = 205;
                        clientEnrolled = true;
                    } else {
                        resNode = dom.selectSingleNode("//web.archive.org/web/20090307230110/http://returnid");
                        if( resNode ) {
                            hash = msnmusax.Do("BEGINREG", "{" + resNode.text + "}");
                            if( "NAK" != hash ) {
                                registerResult = -1;
                            } 
                        }
                    }
                }
            }
        }

        if( registerResult == -1 && machineName == "" )
        {
            machineName = GetDefaultComputerName();
        }

        // If the above step succeeds (either branch), registerResult should be -1
        if( registerResult == -1 ) {
            var clientInfo = msnmusax.Do("GETCLIENTINFO", "");
            var newEnv = registerClientEnv.replace("#MACHINENAME#", machineName);
            newEnv = newEnv.replace("#DRMCHALLENGE#", "<![CDATA[" + clientInfo + "]]>");
            newEnv = newEnv.replace("#COMPUTERID#", clientId);
            newEnv = newEnv.replace("#CLIENTHASH#", hash);
            dom = postSoapRequest("RegisterClient", newEnv, true);
            if( dom ) {
                registerResult = dom.selectSingleNode('//web.archive.org/web/20090307230110/http://registerclientresult').text;
                if( registerResult == 32001 )
                {
                    // Clear secure cookie
                    expDel = GMTStringMinus(10);
                    document.cookie = "secauth=;Path=/; expires=" + expDel + "; domain=" + __getDocDomain();

                    // Enroll succeeded
                    if( !enrollExisting ) {
                        // Its a new enroll, have to store the ID and secret
                        var resServer = dom.selectSingleNode("//web.archive.org/web/20090307230110/http://server").text;
                        var resId = dom.selectSingleNode("//web.archive.org/web/20090307230110/http://retid").text;
                        var resSecret = dom.selectSingleNode("//web.archive.org/web/20090307230110/http://retsecret").text;
                        output = msnmusax.Do("INITCLIENT", "{" + resId + "}" + "{" + resSecret + "}" + resServer);
                        if ("ACK" != output) {
                            // TODO: Figure out how to handle this failure case. May not be a way.
                            registerResult = -4;
                        } else {
                            clientEnrolled = true;
                            clientId = msnmusax.Do("GETID", "");
                            var resShouldSync = dom.selectSingleNode("//web.archive.org/web/20090307230110/http://shouldsync").text;
                            if( resShouldSync == "true" ) {
                                // Licenses waiting - sync
                                TrigPull();
                            }
                        }
                    }
                    else
                    {
                        clientEnrolled = true;
                    }
                }
                else if( registerResult == 0 )
                {
                    // Not logged in - secure login
                    TrigLogIn(defaultBuyPpcb, true);
                }
                else if( registerResult == 1 )
                {
                    // No account
                    redirectPage(SUBSCRIPTION_CHECK_URL + "?fbuy=1");
                }
                else if( registerResult == 2 )
                {
                    // Not billable
                    redirectPage(BAM_URL);
                }
                else if( registerResult == 201 )
                {
                    redirectPage(CUSTOMERSERVICE_URL + "#maxclientsreached");
                }
                else if( registerResult == 202 )
                {
                    // User should already be individualized (check before calling this)
                    // TODO: We may need to do async indiv
                    redirectPage(CUSTOMERSERVICE_URL + "#needtoindiv");
                }
                else if( registerResult == 206 )
                {
                    redirectPage(CUSTOMERSERVICE_URL + "#authlimitreached");
                }
                else
                {
                    redirectPage(CUSTOMERSERVICE_URL + "#enrollfailure");
                }
            }
            else
            {
                redirectPage(CUSTOMERSERVICE_URL + "#ssl");
            }
        }
    } 
    catch (e) {
        redirectPage(CUSTOMERSERVICE_URL + "#enrollfailure");
    }

    return clientEnrolled;
}
function UnenrollComputer()
{
    var retval = true;

    try {
        if (!CheckActiveX()) {
            retval = false;
        } else {
            var alreadyEnrolled = true;
            output = msnmusax.Do("GETID", "");
            var challenge = null;
            if ("NAK" == output) {
                alreadyEnrolled = false;
            } else {
                var newClientRegisteredForCurrentUser2Env = clientRegisteredForCurrentUser2Env.replace("#COMPUTERID#", output);
                dom = postSoapRequest("ClientRegisteredForCurrentUser2", newClientRegisteredForCurrentUser2Env, false);
                if (!dom) {
                    retval = false;
                } else {
                    resNode = dom.selectSingleNode("//web.archive.org/web/20090307230110/http://returnid");
                    if (!resNode) {
                        retval = false;
                    } else {
                        challenge = "{" + resNode.text + "}";
                        if (challenge == "{00000000-0000-0000-0000-000000000000}") {
                            alreadyEnrolled = false;
                        }
                    }
                }
            }

            var clientHash = "";
            var uninitResult = "";
            if (retval && alreadyEnrolled) {
                clientHash = msnmusax.Do("BEGINUNREG", challenge);
                var newBeginUnregisterClientEnv = beginUnregisterClientEnv.replace("#COMPUTERID#", output);
                newBeginUnregisterClientEnv = newBeginUnregisterClientEnv.replace("#HASH#", clientHash);
                dom = postSoapRequest("BeginUnregisterClient", newBeginUnregisterClientEnv, false);
                if (!dom) {
                    retval = false;
                } else {
                    resNode = dom.selectSingleNode("//web.archive.org/web/20090307230110/http://beginunregisterclientresponse");
                    if (!resNode) {
                        retval = false;
                    } else {
                        if ("NAK" == resNode.text) {
                            retval = false;
                        } else {
                            uninitResult = msnmusax.Do("UNREG", resNode.text);
                        }
                    }
                }
            }

            if (retval && alreadyEnrolled) {
                var newUnregisterClientEnv = unregisterClientEnv.replace("#COMPUTERID#", output);
                newUnregisterClientEnv = newUnregisterClientEnv.replace("#HASH#", uninitResult);
                dom = postSoapRequest("UnregisterClient", newUnregisterClientEnv, false);
                if (!dom) {
                    retval = false;
                } else {
                    resNode = dom.selectSingleNode('//web.archive.org/web/20090307230110/http://unregisterclientresponse');
                    if (!resNode) {
                        retval = false;
                    } else {
                        if ("true" != resNode.text) {
                            retval = false;
                        }
                    }
                }
            }
        }
    } catch (e) {
        retval = false;
    }
    
    return retval;
}
function UpdateUserComputerName(newMachineName)
{
    try {
        if (!CheckActiveX()) {
            return false;
        }
        
        output = msnmusax.Do("GETID", "");
        if ("NAK" != output) {
            var newUpdateUserComputerNameEnv = updateUserComputerNameEnv.replace("#COMPUTERID#", output);
            newUpdateUserComputerNameEnv = newUpdateUserComputerNameEnv.replace("#MACHINENAME#", newMachineName);
            dom = postSoapRequest("UpdateComputerName", newUpdateUserComputerNameEnv, false);
            if (dom) {
                resNode = dom.selectSingleNode('//web.archive.org/web/20090307230110/http://updatecomputernameresponse');
                if (resNode) {
                    if (resNode.text == "true") {
                        return true;
                    }
                }
            }
        }
    } catch (e) {
//ifdef debug
        __mdbgout("Exception caught in UpdateUserComputerName()");
//endif
    }
    
    return false;   
}
function IsIndividualized()
{
    var ret = false;
    try {
        var _wver = msnmusax.Do("GETDRMVERSION", "");
        var _wversplit = _wver.split(".");
        var _secver = msnmusax.Do("GETSECURITYVERSION", "");
        var _secversplit = _secver.split(".");
        if( _wversplit.length == 4 && _secversplit.length == 4)
        {
            if( _wversplit[0] >= 10 )
            {
                if( _secversplit[3] > 0
                    && ( _secversplit[0] > 2 || (_secversplit[0] == 2 && _secversplit[1] >= 3) ) )
                {
                    ret = true;
                }
            }
            else
            {
                if( _secversplit[3] > 0
                    && ( _secversplit[0] > 2 || (_secversplit[0] == 2 && _secversplit[1] >= 2) ) )
                {
                    ret = true;
                }
            }
        }
    } catch(e) {
    }
    return ret;
}
function DoIndiv()
{
    var ret = 0;
    if( IsIndividualized() != true )
    {
        dom = postSoapRequest("GetDate", getDateEnv, false);
        if (dom) 
        {
            resNode = dom.selectSingleNode('//web.archive.org/web/20090307230110/http://getdateresult');
            if (resNode) 
            {
                var date = new Date();
                var dateDiff = Math.abs(((date.getTime() / 1000) | 0) - parseInt(resNode.text));
                // 4+ days off
                if( dateDiff > 345600 )
                {
                    alert("MSN Music is unable to complete the purchase because your computer's internal clock is set incorrectly. Please set the correct date and time and try again. Your credit card has not been charged.");
                    ret = 2;
                    redirectPage(CUSTOMERSERVICE_URL + "#indivtimeoff");
                }
            } 
        }

        if( ret == 0 )
        {
            var axversion = msnmusax.Do("GETACTIVEXVERSION", "");

            try
            {
                msnmusax.Do("INDIVIDUALIZE", "FORCE");
                ret = 0
            }
            catch(e) {
                ret = 4;
                // Synchronous indiv result
                redirectPage(CUSTOMERSERVICE_URL + "indivres="+e.number+"&" + "#indivfailure");
            }
        }
    }
    return ret;
}
function OnCodeInstalled(subscribeToNewsletter)
{
    var arg;
    if( subscribeToNewsletter == true ) {
        arg = "true:";
    } else {
        arg = "false:";
    }
    
    arg = arg + "false";//minelibrary
    
    var newOnCodeInstalledEnv = onCodeInstalledEnv.replace("#ARG#", arg);
    dom = postSoapRequest("OnCodeInstalled", newOnCodeInstalledEnv);
    if (dom)
    {
        resNode = dom.selectSingleNode('//web.archive.org/web/20090307230110/http://oncodeinstalledresponse');
        if (resNode) {
            // TODO: succeeded
        }
    }
}
function DoAlert(str)
{
   try {
        if (!CheckActiveX(true, false, false)) {
            return false;
        }
        msnmusax.Mbx(str, "MSN Music", 17);
   } catch(e) {
        return false;
   }
}
function DoConfirm(str)
{
   var ret = false;
   try {
        if (!CheckActiveX(true, false, false)) {
            return false;
        }
        ret = (msnmusax.Mbx(str, "MSN Music", 52) == "6");
   } catch(e) {
   }
   return ret;
}
// dialog for users sent to buy a song on the site from now playing
function __ShowNotifyDialog(ele)
{
    // insert the dialog HTML now
    if (!document.all["npdialog"])
    {
        // there is quite a bit of thought in this HTML: the seemingly irrational position directive on the nhin (even the presence of nhin)
        // is to fool IE into believing nhin is outside of the filter, the filter was blocking the buttons from accepting clicks
        // do not adjust this HTML recklessly!
        ele.insertAdjacentHTML("afterEnd", "<span id=npdialog class=nhassle><table id=npout cellpadding=0 cellspacing=0 border=0 style='width: 410px; height: 260px; padding: 10px;'><tr><td>"+
                    "<table style='position:relative;top: -10px' cellpadding=0 cellspacing=0 border=0 class=nhin><tr><td>"+
                        "<tr><td class='tp10'><span class='txt4'>Ready to purchase?</span><br><br></td></tr><tr><td>If you've bought music from MSN before, you may need to re-enter your password if your login expired.<br><br></td></tr>"+
                        "<tr><td>If this is your first time, you need to sign up<br><br></td></tr>"+
                    "<tr><td class='tp5'><center><input name='npy' type=image src='"+ imgPre + "/i/nh_y_up.gif' onclick='npset(1)'>"+
                    " &nbsp; <input name='npn' type=image src='"+ imgPre + "/i/nh_n_up.gif' onclick='npset(0)'></center></td></tr>"+
                    "</table></tr></td></table></span>");
    }

    var nh = document.all["npdialog"];

    var body = document.body;
    var top = 0, lft = 0;
                
    // determine pixel location of the button on the page
    do {
        top += ele.offsetTop;
        lft += ele.offsetLeft;
                    
        ele = ele.offsetParent;
    } while (ele != null)

    // pop the noHassle dialog
    nh.style.display = "inline";
    nh.style.zIndex = 3;
    document.all["npout"].style.filter = "filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ imgPre + "/i/nh_bubble_lg.png')";

    nh.style.left = (body.clientWidth / 2) - (nh.clientWidth / 2);
    nh.style.top = (body.clientHeight / 2) - (nh.clientHeight / 2);
}
function npset(val)
{
    document.cookie = "bbuy=;Path=/; expires=" + expDel + "; domain=" + __getDocDomain();

    if(val == 1)
    {
        bc(GE("cn" + npbid.substr(2)), GE(npbid));
        GE(npbid).scrollIntoView(true);
    }
    
    document.all["npdialog"].style.display = "none";    
}
// Terest Dropdown code
function TerresDropChange (SelectState, SelectCity, expandNum)
{
    var xmldom = LoadTerresData();
    var Statenode = xmldom.firstChild.selectNodes("//web.archive.org/web/20090307230110/http://states/State[@abbr='" + SelectState.value + "']")[0];

    if( Statenode != null && Statenode.hasChildNodes)
    {
        var StateAbbr = Statenode.getAttribute("abbr");
        var ctrl = "<select id=SelectCity Style=\"width:150px\" onchange=\"TerresCityChange();\"> <option value=\"-1\">Choose City</option>";
            
        for(var y=0; y < Statenode.childNodes.length; y++)
        {
            ctrl += "<option value=\"" + Statenode.childNodes[y].getAttribute("id");
            ctrl += "\">" + Statenode.childNodes[y].getAttribute("name") + "</option>";
        }
        ctrl += "</select>";
        SelectCity.outerHTML = ctrl;
        
        // hide stations and sets focus on city drop down.
        TerresStationsVanish();
        GE('SelectCity').focus();
    }
}

var terresxml = null;

function LoadTerresData()
{
    if(terresxml == null)
    {
        var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        xmlhttp.open("GET", document.location.protocol + "//" + document.location.hostname + "/radio/Terres/GeoDrop.aspx", false);
        xmlhttp.send();

        terresxml = xmlhttp.responseXML;        
    }
    
    return terresxml;
}

// when the city is changed, if it is not "choose city", -1, then get rid of all the cities, then display "loading stations"
// then page is redirected.  Until client gets data from the server, they will show the message that their stations are loading
function TerresCityChange()
{
    if(GE('SelectCity').value != -1)
    {
        document.getElementById('Stations').style.display = 'inline';
        document.getElementById('Stations').innerHTML = "<table><tr><td style='padding-left:20px;padding-bottom:10px'>Loading Stations...</td></tr></table>";
        document.location='/radio/tuner/Default.aspx?it=-5&State=' + GE('SelectState').value + '&City=' + GE('SelectCity').value;
    }
}
function TerresStationsVanish()
{
    var stationSection = document.getElementById('Stations');
    stationSection.style.display = 'none';
}

//disp. floating signoutlinks
function dFL()
{
    if(GE("sFL") && GE("sFS"))
    {
        var fs = GE("sFS");
        var fl = GE("sFL");
        fl.style.visibility = 'visible';
        //fl.style.left = calcDist(fs, "left") -6;
        //fl.style.top  = calcDist(fs, "top") - 4;
    }   
}
function hFL()
{
    if(GE("sFL"))
            GE("sFL").style.visibility = 'hidden';
    if(GE("sFS"))
            GE("sFS").className = 'SignInLinkClass';        
}

//general flying script from obj a to obj b with decrements mentioned.
//keeping it seperate from buy button script
//recommended values jump = 15;shrnkHt=0;shrnkWd=0;delay = 30;
var gTmr, flCSS, flOn;
function gFly(oSrc, oDest, jump, shrnkHt, shrnkWd, delay)
{
    
    if(oSrc == null || oDest == null) return;
    //if(flOn) return;
    flOn = true;
    
    var sLeft, sTop, sWide, sHt, fLeft, fTop, fWide, fHt;
        
    //flying object
    var doc = document.body;
    var ifo = oSrc.cloneNode(true);
    ifo.cssClass = oSrc.CssClass;
    ifo.style.display = "none";
    doc.insertBefore(ifo);
    ifo.id = "fObjX";
    
    //start params
    sTop  = calcDist(oSrc, "top");
    sLeft = calcDist(oSrc, "left");
    sWide = oSrc.offsetWidth;
    sHt   = oSrc.offsetHeight;
    
    //finish params
    fTop  = calcDist(oDest, "top") + (oDest.offsetHeight/2);
    fLeft = calcDist(oDest, "left") + (oDest.offsetWidth/2);
    fWide = oDest.offsetWidth;
    fHt   = oDest.offsetHeight;
   
     try
     {
        flCSS = fObjX.style;
        flCSS.position = "absolute";   
        flCSS.overflow = "hidden";      
        flCSS.border = "1px SOLID #777";
        flCSS.left = sLeft;
        flCSS.top = sTop;
        flCSS.width = sWide;
        flCSS.height = sHt;
            
        var LDecr = (fLeft - sLeft)/jump;
        var TDecr = (fTop - sTop)/jump;
        var WDecr = shrnkWd;
        var HDecr = shrnkHt;
        recrMove(WDecr, HDecr, LDecr, TDecr, 0, jump, delay)
    }
    catch(e){}
}
function recrMove(WDecr, HDecr, LDecr, TDecr, i, j, d)
{
    flCSS.posTop += TDecr;
    flCSS.posWidth -= WDecr;
    flCSS.posHeight -= HDecr;
    flCSS.posLeft += LDecr;
    flCSS.display = "block";

    if(flCSS.posHeight == 0) flCSS.posHeight = -1; 

    if(++i < j)
    {
        gTmr = window.setTimeout("recrMove(" + WDecr + ", " + HDecr + ", " + LDecr + ", " + TDecr + ", " + i + ", " + j + ")", d);
    }
    else
    {
        fClnUp();
    }
}
function fClnUp()
{
    window.clearTimeout(gTmr);
    fObjX.removeNode(true);
    flOn = false;
}
/*passalong & context menu*/

function ruTo(d)
{
    switch(d)
    {
        case 1:
            redirectPage("/customerservice/download");
        break;
        case 2 :
            redirectPage("/customerservice/createplaylists");
        break;
        default:
            return false;
    }
}

function cmenu()
{
    var o = event.srcElement;
    var par = o.parentElement;
    var sTop  = calcDist(o, "top");
    var sLeft = calcDist(o, "left");
    
    var it = "";
    var cm = GE('contextMenus');
    if (typeof(cm) != "undefined") 
    {
        cm.item = par.item;
        cm.ctyp = par.ctyp;
        cm.className = "pmenu";
        cms = cm.style;
        cms.top = sTop + 15;
        
        //TODO:switch case erroring. will debug later.
        if(cm.ctyp == 1)
        {
            it = soMn;
            cms.left = sLeft - 65;
            cms.width = 85;
        }
        else if(cm.ctyp == 2)
        {
            it = alMn;
            cms.left = sLeft - 105;
            cms.width = 125;
        }
        else if(cm.ctyp == 13)        
        {
            it = plMn;
            cms.left = sLeft - 125;
            cms.width = 145;
        }
        
        if(typeof(it)!= "undefined" && it != "")
        {
           cms.visibility = "visible";
           cm.innerHTML = it;//cm.objid + " - " + cm.objtype;
        }
    }
}

function hmenu()
{
    var bl = GE('contextMenus');
    if(typeof(bl) != "undefined")
    {
        bl.innerHTML = "";
        bl.style.visibility = "hidden";
    }    
}

function sbud()
{
    var o = event.srcElement;
    var par = o.parentElement;
    var sTop  = calcDist(o, "top");
    var sLeft = calcDist(o, "left");
    var sWide = o.offsetWidth ? o.offsetWidth : 200;
    
    var bl = GE('buddyList');
    if(typeof(bl) != "undefined")
    {
        bl.item = par.item;
        bl.ctyp = par.ctyp;
        bl.className = "bmenu";
        var bls = bl.style;
        bls.left = sLeft + 1 + sWide;
        bls.top = sTop;
        bls.visibility = "visible";
    }
}

function hbud()
{
    var bl = GE('buddyList');
    if(typeof(bl) != "undefined")
        bl.style.visibility = "hidden";
}

function dbud()
{
    var bl = GE('buddyList');
    if(typeof(bl) != "undefined")
        bl.style.visibility = "visible";
}

function addBud()
{
   redirectPage("/user/contacts.aspx");
}

function sPA(eid, cid, ctyp)
{
    var newEnv;
    var retval = false;
    if(emailRegex.test(eid)) 
    {
        newEnv = passalongEnv;
        newEnv = newEnv.replace("#EMAIL#", eid);
        newEnv = newEnv.replace("#CONTENTID#", cid);
        newEnv = newEnv.replace("#CONTENTTYPE#", ctyp);
        try
        {
            dom = postCustomSoapRequest("SendItemToUser", "https://web.archive.org/web/20090307230110/http://entertainment.msn.com/services/", newEnv, PUBLICSERVICE_RELURL, false);
            if (!dom)
                retval = false;
            else
            {
                resNode = dom.selectSingleNode('//web.archive.org/web/20090307230110/http://senditemtouserresult');
                if (!resNode)
                    retval = false;
                else if ("true" == resNode.text) 
                    retval = true;
            }
        }
        catch(e){}
    }
    return retval;
}

function rPA(pid)
{
    var newEnv;
    var retval = false;
    if(typeof(pid)!= "undefined")
    {
        newEnv = removePassalongEnv;
        newEnv = newEnv.replace("#PASSALONGID#", pid);
        try
        {
            dom = postCustomSoapRequest("RemovePassalong", "https://web.archive.org/web/20090307230110/http://entertainment.msn.com/services/", newEnv, USERINFOSERVICE_RELURL, false);
            if (!dom)
                retval = false;
            else
            {
                resNode = dom.selectSingleNode('//web.archive.org/web/20090307230110/http://removepassalongresponse');
                if (!resNode)
                    retval = false;
                else if ("true" == resNode.text) 
                    retval = true;
            }
        }
        catch(e){}
    }
    
    if (retval)
    {
        // Take user to Inbox page and trigger refresh 
        location.href = "/user/?stab=5";
    }
    else
    {
        // BUGBUG : display error msg?
    }
    return retval;
}

function flagPL()
{
    var newEnv;
    var retval = false;
    
    try
    {
        var o = event.srcElement;
        var par = o.parentElement;
            
        newEnv = flagPlistEnv;
        newEnv = newEnv.replace("#LISTID#", par.item);
        dom = postCustomSoapRequest("FlagPlaylist", "https://web.archive.org/web/20090307230110/http://entertainment.msn.com/services/", newEnv, PUBLICSERVICE_RELURL, false);
        if (!dom)
            retval = false;
        else
        {
            resNode = dom.selectSingleNode('//web.archive.org/web/20090307230110/http://flagplaylistresult');
            if (!resNode)
                retval = false;
            else if ("true" == resNode.text) 
                retval = true;
        }
    }
    catch(e){}
    
    if(retval == true)
        alert("Playlist marked as Obscene");
    else    
        alert("Playlist could not be marked as Obscene");
}   

function sendP(bm)
{
    try
    {
        var o = event.srcElement;
        var par = o.parentElement;
        var eid;
        if(bm && o.innerText)
        {
           o.backText = o.innerText;
           eid = bm;
        }
        o.innerText = "Working...";
        eval('var status = sPA(eid, par.item, par.ctyp);');
        
        hbud();
        hmenu();
        
        if(status)
        {
            o.innerText = o.backText;
            sPStat("Sent", "Sent to " + bm, o, false);
        }
        else
        {
            o.innerText = o.backText;
            sPStat("Failed", "Failed to send to " + bm, o, true);
        }
        
    }
    catch(e){}
}
//status of the passalong
function sPStat(txt1, txt2, obj, showAlways)
{
   if(showAlways == false)
        checkPrivacyCookie();
   
   if(typeof(hidePrivacy) == "undefined" || hidePrivacy == false || showAlways == true)
   {
        if(GE('paPrivacy')) 
        {
                var sTop  = calcDist(obj, "top");
                var sLeft = calcDist(obj, "left");
    
                var o = GE('paPrivacy');
                o.style.visibility = 'visible';
                o.style.left = sLeft -100;
                o.style.top = sTop;
                var p1 = o.children[0];
                var p2 = o.children[1];
                var p3 = o.children[2];
                var p4 = o.children[3];
                if(typeof(p1)!= "undefined" && typeof(p2)!= "undefined")
                {
                    p1.innerText = "";
                    p1.innerText = txt1;
                    p2.innerText = "";
                    p2.innerText = txt2;
                }
                if(typeof(p3)!= "undefined"  && typeof(p4)!= "undefined")
                {
                    if(txt1 == "Failed")
                    {
                        p3.style.display = 'none';
                        p4.style.display = 'none';
                    }
                    else
                    {    
                       p3.style.display = 'block';
                       p4.style.display = 'block';
                    }
                }
        }
    }
}

function hPrivacy()
{
    var chk = GE('chPriv');
    if(typeof(chk)!= "undefined")
    {
        if(chk.checked)
        {
            hidePrivacy = true; //backup if cookie fails
            setPrivacyCookie(); //backup if setting fails
            setPrivacySetting();
        }
    }
    
    var o = GE('paPrivacy');
    if(typeof(o)!= "undefined")
        o.style.visibility = 'hidden';
}

function checkPrivacyCookie()
{
    if(typeof(hidePrivacy) == "undefined" || hidePrivacy == true)
        return false;
    var pCkie = GetCkVal("paPrv");
    if(pCkie != null && pCkie.length > 0 && pCkie != "undefined") hidePrivacy = (pCkie);
}

function setPrivacyCookie()
{
    document.cookie = "paPrv=true;Path=/; domain=" + __getDocDomain();
}

function setPrivacySetting()
{
   XmlHttpGet('http://' + document.location.hostname + '/user/paprivacy.aspx?hp=' + hidePrivacy);
}

function slvd(clj,btnClk,dfText1,dfText2)
{
    var s=document.forms["search"];
    if (s!=null && s.ss!=null)
    {
        if (s.ss.value!='' && s.ss.value!=dfText1 && s.ss.value!=dfText2)
        {
            if(btnClk && (event == null || event.button == 1))
            {
                if (clj)
                {
                    f(s, 'cm=SEARCH&amp;ce=SUBMIT');
                }
                else
                {
                    s.submit();
                }
            }
            else
            {
                s.submit(); 
            }
       }
       else if (s.ss.value!='' && s.ss.value==dfText1 && dfText2!=null && dfText2!='')
       {
            s.ss.value=dfText2;
       }
       else if (s.ss.value=='' && dfText2!=null && dfText2!='')
       {
            s.ss.value=dfText2;
       }
       else if (s.ss.value=='' && dfText1!=null && dfText1!='')
       {
            s.ss.value=dfText1;
       }
    }
  
    return false;
  
}

function blog()
{
    var u=window.location.href

    // Silly hoops to get what we want regardless of browser being used.
    var desc = null;
    try
    {
        desc = window.getSelection();
    }
    catch(e)
    {
        try
        {
            desc = document.getSelection();
        }
        catch(e)
        {
            try
            {
                var sel=document.selection.createRange();
                sel.expand("word");
                desc = sel.text;
            }
            catch(e)
            {
            }
        }
    }

    var title = document.title;

    if(typeof(desc) == "undefined" || desc == "")
        desc = "Check it out on MSN Entertainment";
        
    window.open("https://web.archive.org/web/20090307230110/http://spaces.msn.com/BlogIt.aspx?Title="+escape(title)+"&SourceURL="+escape(u)+"&description="+escape(desc));
}

// Extend the string object
String.prototype.lTrim = function () {return this.replace(/^\s*/, "");}
String.prototype.rTrim = function () {return this.replace(/\s*$/, "");}
String.prototype.trim = function () {return this.rTrim().lTrim();}
String.prototype.endsWith = function(sEnd) {return (this.substr(this.length-sEnd.length)==sEnd);}
String.prototype.startsWith = function(sStart) {return (this.substr(0,sStart.length)==sStart);}
String.prototype.format = function()
{
    var s = this;
    for (var i=0; i < arguments.length; i++)
    {
        s = s.replace("{" + (i) + "}", arguments[i]);
    }
    return(s);
}

function chkPSTyp(o)
{
    var val = o.options[o.selectedIndex].value;
    var t = GE("psTxSp");
    var c = GE("psCtSp");
    if(typeof(c)!= "undefined"  && typeof(t)!= "undefined")
    {
        if(val == "categoryplaylist")
        {
            c.style.display = "block";
            t.style.display = "none";
        }
        else
        {
            c.style.display = "none";
            t.style.display = "block";
        }
    }
}

function subPS()
{
    var o = GE("catid");
    var val = o.options[o.selectedIndex].value;
    var txt = o.options[o.selectedIndex].text;
    if(val != -1)
    {
        var form = document.forms["plsearch"];
        if(typeof(form) != "undefined")
        {
            var tb = form.ss;
            if(typeof(tb) != "undefined")
                tb.value = txt;
            form.submit();
        }
    }
}

function setTabCookie()
{
    try
    {
        if(typeof(current_title) != "undefined" && null != current_title && null != current_title.contentType)
        {
            expSet = GMTStringPlus(10);
            var ckStr = window.location.pathname + "|" + current_title.contentType + "|" + current_sort_params + "|" + current_page_params;
            document.cookie = "tabcookie=" + ckStr + ";Path=/; expires=" + expSet + ";domain=" + __getDocDomain();
        }
    }
    catch(e){}   
}

function chkUsr()
{
    if(!IsLoggedIn())
    {
        TrigLogIn('');
    }
}

function omBuyTrack(id,type, state)
{
    try
    {
        var obj = document.getElementById(id);
        var _type = "";
        var w=window;
        if(type == "al")
            _type = "album";
        else if(type == "so")
            _type = "song";
        else if(type == "pl")
            _type = "playlist";
        
        var s = s_gi(w.s_account);
        s.linkTrackVars = "eVar17,eVar18,eVar26,events";
        s.linkTrackEvents = "scCheckout,event7,scOpen,event8,purchase,event9";

        s.eVar17 = _type;
        if(state == "buystart")
        {
            __CheckNoHassleCookie();
            if(typeof(noHassle) != "undefined" && noHassle > 0)
            {
                s.eVar26 = "yes";
            }
            else
            {
                s.eVar26 = "no";
            }
            s.events = 'scOpen,event8';
        }
        else if(state == "buyconfirm")
        {
            s.events = 'scCheckout';
        }
        else if(state == "buycomplete")
        {
            s.eVar18 = "1";
            s.events = 'purchase,event9';
        }
        else if(state == "buyfailed")
        {
            s.events = 'event7';
        }
        s.tl(true, 'o', id);
        //s.t();
    }
    catch(e)
    {
    }
}

function Base64Encode(input) 
{
    // This code was adapted from Tyler Akins public domain base64 code.
    // Base64 code from Tyler Akins -- http://rumkin.com

    var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;

    do 
    {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) 
        {
            enc3 = enc4 = 64;
        } 
        else if (isNaN(chr3)) 
        {
            enc4 = 64;
        }

        output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
    } 
    while (i < input.length);

    return output;
}

function Base64Decode(input)
{
    // This code was adapted from Tyler Akins public domain base64 code.
    // Base64 code from Tyler Akins -- http://rumkin.com

    var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;

    // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    do 
    {
        enc1 = keyStr.indexOf(input.charAt(i++));
        enc2 = keyStr.indexOf(input.charAt(i++));
        enc3 = keyStr.indexOf(input.charAt(i++));
        enc4 = keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output = output + String.fromCharCode(chr1);

        if (enc3 != 64) 
        {
            output = output + String.fromCharCode(chr2);
        }

        if (enc4 != 64) 
        {
            output = output + String.fromCharCode(chr3);
        }
    }
    while (i < input.length);

    return output;
}

var pn ;
function mhover(obj)
{
    try{
    pn = obj.className;
    obj.className = pn + "_h";
    }
    catch(e){}
}

function mout(obj)
{
    try{
    obj.className = pn;
    }
    catch(e){}
}

/*get URL parameter*/
function gup(name)
{
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( window.location.href );
    if( results == null )
        return "";
    else
        return results[1];
}

function performSearch(searchType, searchTermControlId, formCode)
{
    try
    {
        var control = document.getElementById(searchTermControlId);
        if (control != null)
        {
            var searchTerm = control.value;
            if (searchTerm.trim().length > 0)
            {
                if ((searchType == 'msn') )
                {
                    // We don't need to remove special characters for MSN search.
                    searchTerm = encodeURIComponent(searchTerm);
                    location.href = 'https://web.archive.org/web/20090307230110/http://search.msn.com/results.aspx?q=' + searchTerm + '&FORM=' + formCode;
                }
                else
                {
                    var filter = gup("ft");
                    if(!filter.match(/^\d+$/))
                    {
                        filter = "";
                    }
                
                    // For Entertainment search, we need special characters removed.  If we don't do this, a script injection
                    //  exception is raised. 
                    var removeChars = ['<', '>'];
                    var removeRegEx = new RegExp('(\\' + removeChars.join('|\\') + ')', 'g');
                    searchTerm = searchTerm.replace(removeRegEx, "");
                    control.value = searchTerm;
                    searchTerm = encodeURIComponent(searchTerm);
                   
                    if (searchTerm.trim().length > 0)
                    {
                        if (searchType == 'entertainment')
                        {
                            //movie is default for ent type
                             location.href = '/search/entertainment/default.aspx?st=' + searchTerm + "&ft=" + filter;
                        }
                        if (searchType == 'tv')
                        {
                            location.href = '/search/tv/default.aspx?st=' + searchTerm + "&ft=" + filter;
                        }
                        if (searchType == 'movies')
                        {
                            location.href = '/search/movies/default.aspx?st=' + searchTerm + "&ft=" + filter;
                        }
                        if (searchType == 'music')
                        {
                            location.href = '/search/music/default.aspx?st=' + searchTerm + "&ft=" + filter;
                        }
                        if (searchType == 'web')
                        {
                            location.href = 'https://web.archive.org/web/20090307230110/http://search.live.com/results.aspx?q=' + searchTerm;
                        }
                        if (searchType == 'photos' && searchTerm != "Photo%20Search")
                        {
                            location.href = '/search/entertainment/default.aspx?ft=9&st=' + searchTerm;
                        }
                    }
                }
            }
        }
    }
    catch (e) 
    {
    }
}

//TODO: Remove this when Fonzie pages are migrated to GrandPrix.
function performSearchOld(searchType, searchTermControlId)
{
    try
    {
        var c = document.getElementById(searchTermControlId);
        if (c == null)
            return;
        
        var searchTerm = c.value;
        if (searchTerm.trim().length <= 0)
        {
            return;
        }

        if (searchType == 'msn')
        {
            //don't need to remove special chars for msn search
            searchTerm = escape(searchTerm);
            location.href = 'https://web.archive.org/web/20090307230110/http://search.msn.com/results.aspx?q=' + searchTerm;
        }
        else
        {
            //for entertainment search, we need special characters removed 
            //(otherwise asp.net script injection prevention exception is raised)

            var removeChars = ['<', '>'];
            var removeRegEx = new RegExp('(\\' + removeChars.join('|\\') + ')', 'g');
            searchTerm = searchTerm.replace(removeRegEx, "");

            c.value = searchTerm;
                
            if (searchTerm.trim().length <= 0)
            {
                return;
            }
            
            if (searchType == 'default entertainment')
            {
                location.href = '/search/movies/?st=' + searchTerm;
            }
            else if (searchType == 'tv show')
            {
                location.href = '/tv/search/?scope=title&query=' + searchTerm;
            }
        }
    }
    catch (e) 
    {
    }
}



function dvdlist_toggle(whole, link)
{
    var parent = document.getElementById(whole);
 
    if (parent != null)
    {
    
        if (parent.style.display == 'none')
        {
            parent.style.display = 'inline';
     }
        else
       {
            parent.style.display = 'none';
     }
    }

    var link_o = document.getElementById(link);
 
    if (link_o.src.indexOf("/i/grandprix/up.gif") >= 0)
    {
       link_o.src = imgPre+"/i/grandprix/down.gif";
    }
    else
    {
       link_o.src = imgPre+"/i/grandprix/up.gif";
    }
    
}


function showtimes_askzip(a,b,c,d)
{
  var parent = document.getElementById(a);
  if ( parent != null)
  {
    parent.style.display = 'none';
  }

  parent = document.getElementById(c);
  if ( parent != null)
  {
    parent.style.display = 'none';
  }

  parent = document.getElementById(b);

  if ( parent != null)
  {
    parent.style.display = 'inline';
  }

  parent = document.getElementById(d);

  if ( parent != null)
  {
    parent.style.display = 'none';
  }

}


function setCookie(sName, sValue)
{
  date = new Date();
  date.setMonth(date.getMonth() + 1);
  document.cookie = sName + "=" + escape(sValue) + "; expires=" + date.toGMTString();
}


function toggle(inlineLinkId, extendedTextId)
{
    var target = document.getElementById(extendedTextId);
    var parent = document.getElementById(inlineLinkId);

    if ((target == null) || (parent == null)) return;

    if (target.style.display == 'none')
    {
        target.style.display = 'inline';
        parent.style.display = 'none';
    }
    else
    {
        target.style.display = 'none';
        parent.style.display = 'inline';
    }
}
function onImgErr(img) 
{
    img.src = imgPre+"/i/celeb_75_75.jpg";
}
function onImgErr2(imageID) 
{
    var image = eval(imageID);
    image.src = imgPre+"/i/celeb_350_400.jpg";
    image.style.height='400px';
    image.style.width='350px';
}

_ErrImgs = ["/i/celeb_75_75.jpg", //pt Grid
            "/i/celeb_75_75.jpg", //pt home carousel
            "/i/celeb_75_75.jpg"];//pt popup
function photoErr(img, i)
{
    img.src = imgPre+_ErrImgs[i];
}

function getQueryPart(url)
{
    var queryPart = "";
    var queryIndex = url.indexOf("?");

    if (queryIndex >= 0)
    {
        queryPart = url.substr(queryIndex + 1);
    }
    else
    {
        var hashIndex = url.indexOf("#");
        if (hashIndex >= 0)
        {
            queryPart = url.substr(hashIndex + 1);
        }
    }

    return queryPart;
}

    function parseQueryString (url)
    {
        if (url == null)
            return "";
           

        if (typeof(url) != 'string')
            url = url.toString();

        var query = getQueryPart(url);
        if ((query) == null)
            return;
 

        return parseString(query, "&", "=");
    }

    function parseString(s, pairSeparator, keyValueSeparator)
    {
        pairSeparator = (pairSeparator == null) ? "&" : pairSeparator;
        keyValueSeparator = (keyValueSeparator == null) ? "=" : keyValueSeparator;

        var keyValues = s.split(pairSeparator);
        var retValue = new Object();

        for (var i = 0; i < keyValues.length; i++)
        {
            var keyValue = keyValues[i];
            var keyValuePairs = keyValue.split(keyValueSeparator);

            var key = keyValuePairs[0];
            var value = keyValuePairs[1];
            retValue[key] = value;
        }
        return retValue;
    }

//Rotating feature code.
var agt = navigator.userAgent.toLowerCase();
var is_ie = ((agt.indexOf("msie") != -1) && (agt.indexOf("opera") == -1));
var filterString = "DXImageTransform.Microsoft.Fade";
var enableFilter = is_ie;

function hover(e)
{
    if ((e.className != null))
    {
        e.classNameSaved = e.className;
        e.className = "snew";
    }
}

function hoverout(e)
{
    if (e.classNameSaved != null)
    {
        e.className = e.classNameSaved;
    }
}

function isFilterDone(e)
{
    if (e == null)
    {
        return true;
    }
    if (enableFilter)
    {
        var filter = getFilter(e);
        if (filter.status == 2)
        {
            return false;
        }
    }
    return true;
}

function getFilter(e)
{
    if (!hasFilter(e))
    {
        e.style.filter = "progid:" + filterString + "(duration=.5,overlap=1.0)";
    }
    return e.filters.item(filterString);
}

function hasFilter(e)
{
    if ((e.filters == null) || (e.filters.length <= 0))
    {
        return false;
    }
    return (e.filters.item(filterString) != null);
}

function fadeOut(e) 
{
    if (e == null)
    {
        return;
    }

    if (enableFilter)
    {
        // Make sure the filter is not playing.
        var filter = getFilter(e);
        if (filter.status != 2)
        {
            filter.Apply();
            e.style.visibility = 'hidden';
            filter.Play();
        }
    }
    else
    {
        e.style.visibility = 'hidden';
    }
}

function fadeIn(e) 
{
    if (e == null)
    {
        return;
    }

    if (enableFilter)
    {
        // Make sure the filter is not playing.
        var filter = getFilter(e);
        if (filter.status != 2)
        {
            filter.Apply();
            e.style.visibility = 'visible';
            filter.Play();
        }
    }
    else
    {
        e.style.visibility = 'visible';
    }
}

function getContentFrame(idPrefix, index)
{
    var id = idPrefix + index;
    return document.getElementById(id);
}

function rotateFeature(idPrefix, index, bAutoRotate)
{
    var rotationInterval = eval(idPrefix + "_Interval");
    var rfItemCount = eval(idPrefix + "_ItemCount");
    var timerId = eval(idPrefix + "_TimerId");
    //----------------------------------------------------------
    //initialize global variables
    //----------------------------------------------------------
    //total number of best bet items
    var itemCount = isNaN(rfItemCount) ? 0 : rfItemCount;
    if (itemCount <= 0)
    {
        return;
    }

    //auto-rotation interval in seconds
    var intervalSeconds = isNaN(rotationInterval) ? 5 : rotationInterval / 1000.0;

    //----------------------------------------------------------
    //normalize the input variables
    //----------------------------------------------------------
    if (index == null) index = 0;
    if (bAutoRotate == null) bAutoRotate = false;
    if (!bAutoRotate) enableFilter = false;

    //----------------------------------------------------------
    //cancel pending rotation if we were called with bAutoRotate = false
    //----------------------------------------------------------
    if (!bAutoRotate)
    {
        //when user clicks a button, this is set to false indicating
        //we need the timer to stop. Because of this we need to cancel
        //any existing timer that has already been set to go off.
        if (typeof(timerId) != "undefined")
        {
            clearTimeout(timerId);
        }
    }  

    //----------------------------------------------------------
    //show the chosen content panel
    //----------------------------------------------------------
    var fadeOutCtrl = null;
    var fadeInCtrl = getContentFrame(idPrefix, index);
    for (var i = 0; i < itemCount; i++)
    {
        var contentFrame = getContentFrame(idPrefix, i);
        if (contentFrame.style.visibility != 'hidden')
        {
            //found the previous chosen one
            fadeOutCtrl = contentFrame;
            break;
        }
    }

    //if we're in the middle of an animation... don't try to mess it up!!
    if (!isFilterDone(fadeOutCtrl) || !isFilterDone(fadeInCtrl))
        return false;

    if (fadeInCtrl == fadeOutCtrl)
    {
        //do nothing... its already shown
    }
    else
    {
        fadeOut(fadeOutCtrl);
        fadeIn(fadeInCtrl);
    }

    //----------------------------------------------------------
    //highlight the chosen button
    //----------------------------------------------------------
    if (bAutoRotate && (intervalSeconds > 0))
    {
        var nextIndex = (index + 1) % itemCount;
        eval(idPrefix + "_TimerId = setTimeout(\"rotateFeature('" + idPrefix + "', "+ nextIndex + ", true)\", "+ intervalSeconds * 1000 + ");");
    }
    
    var targetButtonId = idPrefix + 'Button' + index;
    for (var i = 0; i < itemCount; i++)
    {
        var sId = idPrefix + 'Button' + i;
        var cButton = document.getElementById(sId);
        if (cButton != null)
        {
            if (cButton.id == targetButtonId)
            {
                cButton.className = 'bbButtonHL';
            }
            else
            {
                cButton.className = 'bbButton';
            }
        }
    }
}

function getStyleRule(name)
{
    if (!document.styleSheets)
        return null;
    var sheets = document.styleSheets;
    for ( ss=0; ss< sheets.length; ss++ )
    {
        try
        {
            var theRules = new Array();
            if (sheets[ss].rules)
            {
                theRules = sheets[ss].rules
            }
            else if (sheets[ss].cssRules)
            {
                theRules = sheets[ss].cssRules
            }
            else
            {
                return null;
            }
            for (i=0; i< theRules.length; i++ )
            {
                if ( theRules[i].selectorText == name )
                {
                    return theRules[i];
                }
            }
        }
        catch(e)
        {
        }    
    }
    return null;
}

function setPageProperty(name, value)
{
    switch (name)
    {
        case 'bg_color':
            document.body.style.backgroundColor = value;
            break;
            
        case 'bg_image':
            document.body.style.backgroundImage = "url("+value+")";
            break;
            
        case 'bg_image_repeat':
            document.body.style.backgroundRepeat = value;
            break;
            
        case 'bg_style':
            document.body.style.background = value;
            break;
            
        case 'header_height':
            var e = document.getElementById("topSpacingDiv");
            if (e)
                e.style.marginTop = value+"px";
            break;
            
        case 'body_color':
            var e = document.getElementById("pageBody");
            if (e)
                e.style.backgroundColor = value;
            break;
            
        case 'body_image':
            var e = document.getElementById("pageBody");
            if (e)
                e.style.backgroundImage = "url("+value+")";
            break;

        case 'body_image_repeat':
            var e = document.getElementById("pageBody");
            if (e)
                e.style.backgroundRepeat = value;
            break;
        
        case 'body_style':
            var e = document.getElementById("pageBody");
            if (e)
                e.style.background = value;
            break;
            
        case 'logo_image':
            var e = document.getElementById("microsoftLogo");
            if (e)
                e.src = value;
            break;

        case 'header_menu_style':
            var e = document.getElementById("pageHeaderMenu");
            if (e)
                e.style.background = value;
            break;

        case 'header_search_style':
            var e = document.getElementById("pageHeaderSearch");
            if (e)
                e.style.background = value;
            break;

        case 'vertical_logo_style':
            var e = document.getElementById("verticalLogo");
            if (e)
                e.style.background = value;
            break;

        case 'msn_logo_image':
            var e = document.getElementById("msnLogo");
            if (e)
                e.src = value;
            break;
            
        case 'search_box_border':
            if ( !searchBoxControlId )
                break;
            var e = document.getElementById(searchBoxControlId);
            if (e)
                e.style.border = value;
            break;

        case 'skin_ad_style':
            var e = document.getElementById("skinAd");
            if (e)
                e.style.background = value;
            break;

        case 'body_border':
            var e = document.getElementById("pageBody");
            if (e)
                e.style.border = value;
            break;
            
        case 'nav_selection_style':
            var s = getStyleRule(".pageHeader_horizNavBarButtonSelected");
            if (s)
                s.style.background = value;
                
        case 'header_border':
            var e = document.getElementById("pageHeaderSearch");
            if (e)
                e.style.border = value;
            var e = document.getElementById("pageHeaderMenu");
            if (e)
                e.style.border = value;
            break;
    }
}


function MovieHomeShowtimeClick(form, id, buttonid)
{
    var oform = document.getElementById(form);
    if (id == 'fGo')
    {
        var a = document.getElementById(buttonid);
        a.value = 2;
    }
    oform.submit();
}

function MovieHomeShowtimeClickNoForm()
{
    var dropDown = document.getElementById('famsel');
    var id = dropDown.value;
    window.location = "/movies/movie.aspx?m=" + id +"&mp=s";
}

if (typeof msn == "undefined") var msn = new Object();

msn.flashControl = function(swf, id, w, h, ver)
{
    this.params = new Object();
    this.variables = new Object();
    this.attributes = new Array();
    if(swf) { this.setAttribute('swf', swf); }
    if(id) { this.setAttribute('id', id); }
    if(w) { this.setAttribute('width', w); }
    if(h) { this.setAttribute('height', h); }
}

msn.flashControl.prototype =
{
    setAttribute: function(name, value)
    {
        this.attributes[name] = value;
    },
    getAttribute: function(name)
    {
        return this.attributes[name];
    },
    addParam: function(name, value)
    {
        this.params[name] = value;
    },
    getParams: function()
    {
        return this.params;
    },
    addVariable: function(name, value)
    {
        this.variables[name] = value;
    },
    getVariable: function(name)
    {
        return this.variables[name];
    },
    getVariables: function()
    {
        return this.variables;
    },
    getVariablePairs: function()
    {
        var variablePairs = new Array();
        var key;
        var variables = this.getVariables();
        for(key in variables)
        {
            variablePairs[variablePairs.length] = key +"="+ variables[key];
        }
        return variablePairs;
    },
    getHTML: function()
    {
        var swfNode = "";
        if (navigator.plugins && navigator.mimeTypes && navigator.mimeTypes.length)
        {
            swfNode = '<embed type="application/x-shockwave-flash" src="'+ this.getAttribute('swf') +'" width="'+ this.getAttribute('width') +'" height="'+ this.getAttribute('height') +'" style="'+ this.getAttribute('style') +'"';
            swfNode += ' id="'+ this.getAttribute('id') +'" name="'+ this.getAttribute('id') +'" ';
            var params = this.getParams();
            for (var key in params)
            {
                swfNode += [key] +'="'+ params[key] +'" ';
            }
            var pairs = this.getVariablePairs().join("&");
            if (pairs.length > 0)
            {
                swfNode += 'flashvars="'+ pairs +'"';
            }
            swfNode += '/>';
        }
        else
        {
            swfNode = '<object id="'+ this.getAttribute('id') +'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://web.archive.org/web/20090307230110/http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="'+ this.getAttribute('width') +'" height="'+ this.getAttribute('height') +'" style="'+ this.getAttribute('style') +'">';
            swfNode += '<param name="movie" value="'+ this.getAttribute('swf') +'" />';
            var params = this.getParams();
            for (var key in params)
            {
                swfNode += '<param name="'+ key +'" value="'+ params[key] +'" />';
            }
            var pairs = this.getVariablePairs().join("&");
            if (pairs.length > 0)
            {
                swfNode += '<param name="flashvars" value="'+ pairs +'" />';
            }
            swfNode += "</object>";
        }
        return swfNode;
    },
    write: function(elementId)
    {
        var n = (typeof elementId == 'string') ? document.getElementById(elementId) : elementId;
        n.innerHTML = this.getHTML();
    }
}

function launchZuneClient(lnk)
{
    var ln = "zune://navigate?" + lnk;
    window.setTimeout(function(){window.location = ln;},500);
}

/* VE functions */
var zipcode=98052;
var method = "get";
var map = null;
var layer = null;
var respondDoc = null;
var vAdd = null;
var vLat = null;
var vLong = null;
var addrChanged = 1;
var url = "/services/showtimesgeorss.aspx?add=";
var INVALID_LOC_MSG="Invalid 'Zip Code', please try again...";
var MAP_LOAD_ERR_MSG="There was problem loading the map.";
var SHOWTIME_SRCH_MSG="Searching Theaters/Showtimes information...";
var THEATERS_FOUND_MSG="theater(s) found around this location.";
var LOC_BAD_MSG="Bad location";
var LOC_VALD_ERR="Error in location validation.";
var LOC_THEA_0="Theaters:0";
var NO_THEA_AVAIL_MSG="No theater/showtime information available for given location.";
var NO_THEA_WBSRV_MSG="No Theaters found for given location";
var VEDisambiguationControl = null;
var VEHomeLocation = null;
var homeIcon = "https://web.archive.org/web/20090307230110/http://entimg.msn.com/i/grandprix/VEHomeIcon.png";

function GetMap()         
{   
    try
    {         
        map = new VEMap('myMap');      
        map.onLoadMap = DefaultMapLoad;
        map.AttachEvent("onerror", onMapLoadError);
        map.LoadMap();
    }
    catch(e)
    {
        if(GE("VEModule") != null)
        {
            GE("VEModule").style.display="none"; 
        }
        
        var ua = window.navigator.userAgent;
        var safari=ua.indexOf ("Safari");
        if ( safari > -1 )   
        {
            if (GE("VEInfoMessageArea")!=null)
            {
                GE("VEInfoMessageArea").innerHTML="<span style='font-size:13px'>Sorry, this feature is unavailable for Safari.</span>";
            }
        }
        else
        {
            if (GE("VEInfoMessageArea")!=null)
            {
                GE("VEInfoMessageArea").innerHTML="<span style='font-size:13px'>Sorry, this feature is unavailable at this time.</span>";
            }
            
        }
        
    }
}

function AddMyLayer(type,zipcode, movieid, lat, longitude) 
 {
    try
    {
        UpdateMsg("VEMessagArea",SHOWTIME_SRCH_MSG);
        SetSpinner(1);
        if (layer!=null)
        {
            map.DeleteShapeLayer(layer);
            layer=null;
        }
        layer = new VEShapeLayer();
        var f_url = url+zipcode+"&movieid="+movieid;
        if(veApp)
        {
            f_url = f_url+"&isApp=1";
        }
        var veLayerSpec = new VEShapeSourceSpecification(type, f_url, layer);
        map.ImportShapeLayerData(veLayerSpec, onFeedLoad); 
        
        if(addrChanged)
        {
            UpdateMovieList();
            addrChanged = 0;
        }
    }
    catch(e)
    {
        UpdateMsg("VEMessagArea", "");
        SetSpinner(0);
    }
}
 
 function onFeedLoad(feed) 
 {
    if (feed!=null)
    {
       UpdateMsg("VEMessagArea", "");
       SetSpinner(0);
       
        var numShapes = layer.GetShapeCount();
        var shape;
        for(var i=0; i < numShapes ; ++i)
        {
            shape = feed.GetShapeByIndex(i);
            if(shape.IconId)
            {
                shape.SetCustomIcon("<img src='"+ shape.IconId+"'/>");
            }
        }
    }
 }
 function onMapLoadError()
 {
    map.ShowMessage(MAP_LOAD_ERR_MSG);
    UpdateMsg("VEMessagArea", "");
    SetSpinner(0);
 }
 
function DefaultMapLoad()
{
  var result=ValidateAddressSrv("default");
}

function SetSpinner(onOff)
{
    if(GE("VESpinner") != null)
    {
       if (onOff==0)
       {
         GE("VESpinner").style.display='none';
       }
       else
       {
         GE("VESpinner").style.display='inline';
       }
    }
     
}
function UpdateMsg(ctrl,msg)
{
    if(GE(ctrl) != null)
    {
       if(msg == "")
       {
         GE("VEMovieDropDown").style.display='inline';
       }
       else
       {
         GE("VEMovieDropDown").style.display='none';
       }
       GE(ctrl).innerText=msg;
    }
}
function UpdateMovieList()
{
    var drop = GE("VEMovieDropDown");
    var list = null;
    if(respondDoc)
    {
        list = respondDoc.getElementsByTagName("Movie");
    }
    
    if(drop != null && list != null && list.length > 0)
    {
       var optionHTML = "<select id='VEMovieDropDown' class='VEDropDown' style='display:none' name='mdpdwn' onchange='PostValidateReload();'><option value='0'>All Playing Movies</option>";
       for(var i=0; i<list.length; i++)
       {
           optionHTML += "<option value='" + list[i].getAttribute('id') + "'>" + list[i].firstChild.nodeValue + "</option>";
       }
       optionHTML += "</select>";
       drop.parentNode.innerHTML = optionHTML;
    }
}
function SetCtrlFocus(ctrl)
{
   if(GE(ctrl) != null)
    {
       GE(ctrl).focus();
    } 
}
function OnVEClick()
{
   // Deleting Old DisanbiguationControl
   if (VEDisambiguationControl != null)
   {
        map.DeleteControl(VEDisambiguationControl);
        VEDisambiguationControl = null;
   }
            
   address = document.getElementById('addressField').value;
   address=Trim(address);
   
   if ( address != null && address.length > 0)
   {  
      addrChanged = 1;
      var drop = GE("VEMovieDropDown");
      drop.selectedIndex = 0;
      var result=ValidateAddressSrv(address);
   }
   
   return;
}

function RunRegEx(exp, val)
{
  var re = new RegExp(exp);
  if (val.match(re))
  {
    return true;
  }
  else
  {
    return false;
  }
}

 function VEdisambiguate(a,b,c,d,e)
 {
        if ( c == null )
        {
            UpdateMsg("VEMessagArea",INVALID_LOC_MSG);
            SetSpinner(0);
        }
        else if ( c.length == 1)
        {
            ValidateLocation(c[0].Name, c[0].LatLong.Latitude, c[0].LatLong.Longitude);
        }
        else
        {
           // Determine to see if Custom DisAmbiguation Necessary
           // Only One High Match and The rest Low means you can go directly to the location.
           
           if ( c[0].MatchConfidence == 0 && c[1].MatchConfidence == 2)
           {
                  ValidateLocation(c[0].Name, c[0].LatLong.Latitude, c[0].LatLong.Longitude);
                  return;
           }
           
           // Create Custom Disambiguation
          
           if ( VEDisambiguationControl == null )
           {
               VEDisambiguationControl = document.createElement("div"); 
               VEDisambiguationControl.id = "VEDisambiguationControl";
               VEDisambiguationControl.className ="VEDisambiguationControlRoot"; 
               VEDisambiguationControl.style.top ="50px"; 
               VEDisambiguationControl.style.left = "220px"; 
          }
           
           VEDisambiguationControl.style.display ="block"; 
           
           var i = 0;
           var a  = "";
           var location = "";
           var html = "<div class ='VEDisambiguationBox'><div class='VEDisambiguationBoxHeader'>Select a Location</div>";
           html = html + "<div class='VEDisambiguationBoxItems'>";
           for ( i = 0; i < c.length; i++)
           {
              a = c[i].Name.replace(/'/g, "") + "&lat=" + c[i].LatLong.Latitude + "&long=" + c[i].LatLong.Longitude;
              location = c[i].Name.replace(/'/g, "");
              html = html + "<div class = 'VEDisambiguationItem' onclick='javascript:ValidateLocation(\"" + location + "\"," + c[i].LatLong.Latitude + "," + c[i].LatLong.Longitude + ")'>" + c[i].Name + "</div>";
           }
           html = html + "</div></div>";
           
           VEDisambiguationControl.innerHTML = html;
           map.AddControl(VEDisambiguationControl);
           addVEIframe(VEDisambiguationControl);
        
        }
        
     
 }
 
 function addVEIframe(el)
 {
    var ifr = document.createElement("iframe");
    ifr.id = "myShim";
    ifr.frameBorder = "0";
    ifr.style.position = "absolute";
    ifr.style.zIndex = "1";
    ifr.style.top  = el.offsetTop;
    ifr.style.left = el.offsetLeft;
    ifr.width  = el.offsetWidth;
    ifr.height = el.offsetHeight;
    el.shimElement = ifr;
    el.parentNode.insertBefore(ifr, el);
 }
         
 function ValidateLocation(name, lat, longitude)
 {
    try
    {
        var add = "";
        if ( VEDisambiguationControl != null)
        {
               map.DeleteControl(VEDisambiguationControl);
               VEDisambiguationControl = null;
        }
        
        if ( name != "")
        {
           add = name + "&lat=" + lat + "&long=" + longitude;
        }

        var result;
        var xml = createXMLHttp();
        var xmlurl = url+add+"&val=1";
        xml.open("GET", xmlurl, false);
        xml.send("");
        if(xml == null)
        {
            return;
        }
       var result;
       result=xml.responseXML.documentElement.getElementsByTagName("Location")[0].firstChild;
       
       if ( lat == -1 && longitude == -1)
       {
          lat = xml.responseXML.documentElement.getElementsByTagName("Latitude")[0].firstChild.nodeValue;
          longitude = xml.responseXML.documentElement.getElementsByTagName("Longitude")[0].firstChild.nodeValue; 
       }
       
       if (result!=null)
       {
          if (result.nodeValue==LOC_BAD_MSG)
           { 
             result = result.nodeValue;
           }
          
       }
       
       var theaterResults=xml.responseXML.documentElement.getElementsByTagName("Theaters")[0].firstChild;
       if (theaterResults!=null)
       {
           if (theaterResults.nodeValue==NO_THEA_WBSRV_MSG)
           {    
              result = NO_THEA_WBSRV_MSG;
           }
           else
           {
              result = "Theaters:"+theaterResults.nodeValue;
           }
       }
       
       var addressReturned = xml.responseXML.documentElement.getElementsByTagName("Address")[0].firstChild.nodeValue;
       var input = GE('addressField');
       if ( input != null && addressReturned != null)
       {
         input.value = addressReturned;
       }
    }
    catch(e)
    {
        result = LOC_VALD_ERR;
    }

    
    if (result==LOC_BAD_MSG || result==LOC_VALD_ERR)
    {
        if ( add != "")
        {
            UpdateMsg("VEMessagArea",INVALID_LOC_MSG);
            SetSpinner(0);
        }
    }
    else if (result==NO_THEA_WBSRV_MSG)
    {
      if ( add != "")
      {
          UpdateMsg("VEMessagArea",NO_THEA_AVAIL_MSG);
          SetSpinner(0);
      }
    }
    else
    {
       respondDoc = xml.responseXML.documentElement;
       var drop = GE('VEMovieDropDown');
       var movieid = drop.options[drop.selectedIndex].value;
       vAdd = add;
       vLat = lat;
       vLong = longitude;
       AddMyLayer(VEDataType.GeoRSS, add, movieid, lat, longitude);
    }
    
 }

function PostValidateReload()
{
    var drop = GE('VEMovieDropDown');
    var movieid = drop.options[drop.selectedIndex].value;
    AddMyLayer(VEDataType.GeoRSS, vAdd, movieid, vLat, vLong);
}


      
function ValidateAddressSrv(add)
{
    if ( add == "default")
    {
      ValidateLocation("", -1, -1);
    }
    else if (add != "")
    { 
        var appendAddress = ", North America";
        var  re = /^[0-9]{5}(\-[0-9]{1,4})?$/g;
        
        if ( add.match(re))
        {
            if ( add.indexOf("-") >= 1)
            {
               add = add.substring(0,add.indexOf("-"));
            }
            appendAddress = ", United States";
        }
        
        try
        {
            map.Find(null, add + appendAddress, null, null, null, null, null, null, false, false, VEdisambiguate); 
        }
        catch(e)
        {
            return LOC_VALD_ERR;
        }
     }
}


function expiryRedirect(url)
{
    setTimeout("location.href='" + url + "'"   , 5000);
}

/* cds-omniture tracking code */
//page level
function CDSTracking(objId,type,recs)
{
   if (null!=s)
   {  
        var tmp_s = s; 
        var site = s.prop1;
        var market = s.prop2;
        s = s_gi(k_CDSOmnitureSite);
        s.prop1 = site;
        s.prop2 = market;
        s.prop4 = objId; 
        s.prop5 = type;
        s.prop6 = recs; 
        s.prop10 = "Impression";
        s_code = s.t();
        if(s_code){document.write(s_code);} 
        s = tmp_s; 
  }
}

function cds_clickthru(recObjID, recType, origObjType,pos, uri)
{
    try 
    {
        if (s != null)
        {
            var site = s.prop1;
            var market = s.prop2;
            s = s_gi(k_CDSOmnitureSite);
            s.prop1 = site;
            s.prop2 = market;
            s.prop4 = article_id; //orig obj id:glb var 
            s.prop5 = origObjType;//orig type
            s.prop7 = recObjID;//rec obj id
            s.prop8 = recType; //rec obj type
            s.prop9 = pos; 
            s.prop10 = "Clickthrough"; 
            if (uri==null)
            {
              uri= encodeURI(document.location.href);
            }
            var linkType = (uri.indexOf(document.location.host) !== -1) ? 'o' : 'e';
            var s_code = s.tl(this, linkType, uri);
            if(s_code){document.write(s_code);} 
        }
    } catch(e) {}
    if (recType==0)
    {
        window.location = uri;
    }
}


function setupVideo(count, videoId)
{
	var parentDiv = GE('TBOVideo');
    parentDiv.style.display = 'block';
	SetTBOCssClass(count);
    Msn.Video.Build('TBOVideo','downlevel text description',{skin:'0',mkt:'en-us',pl:'false',playlistmin:'51',ap:'false', fr:'inline',ad:'false',c:'v', v:videoId,timePlaying:'180'},290,207);
}

function PlayTBOTrailer(count, videoId)
{
   SetTBOCssClass(count);
   if ( GE('TBOVideo_t') != null)
   {
      var a = GE('TBOVideo_pobj');
      a.vidPlayId(videoId);
      return false;
   }
   
   var parentDiv = GE('TBOVideo');
   parentDiv.style.display = 'block';
   setupVideo(count, videoId);
   
   return false;

 }

function SetTBOCssClass(count)
{
   var parentDiv = GE('TBOItems');
   var items = parentDiv.getElementsByTagName("div");
   var i = 0;
   var index = 0;
   var item;

   for ( i=0; i < items.length; i++)
   {
      item = items[i];
      if ( item.className == "HomeTBOItemRootDiv" || item.className == "HomeTBOItemRootDivSelected" || item.className == "HomeTBOItemRootDivBeforeSelected")
      {
          index++;
          if ( index == count)
          {
            item.className = "HomeTBOItemRootDivSelected"
          }
          else if (index == (count-1))
          {
             item.className = "HomeTBOItemRootDivBeforeSelected"
          }
          else
          {
            item.className = "HomeTBOItemRootDiv"
          }
      }
   }
 }
   
//***** CACHE UTILs *****
function Cache()
{
    var i = -1;
    var data = new Array();
    
    this.GetData = function(index)
    {
        if(index < data.length)
        {
            return data[index];
        }
        return "";
    }
    
    this.AddData = function(val)
    {
        data[++i] = val;
        return i;
    }
}
gCache = new Cache();
/**** Photos Pop up ****/
function PopUp()
{
    PopUp.prototype.isIE = document.all?true:false;
    PopUp.prototype.p = null;
    PopUp.prototype.o_next = null;
    PopUp.prototype.o_curr = null;
    PopUp.prototype.p_timer_show = null;
    PopUp.prototype.p_timer_hide = null;
    PopUp.prototype.p_id = null;
    PopUp.prototype.p_args = null;
    
    PopUp.prototype.showPop = showPop;
    PopUp.prototype.drawPop = drawPop;
    PopUp.prototype.checkMousePos = checkMousePos;
    PopUp.prototype.hidePop = hidePop;
    PopUp.prototype.getPopContent = getPopContent;
    PopUp.prototype.getPopHtml = getPopHtml;
    PopUp.prototype.popRespond = popRespond;
    PopUp.prototype.placePop = placePop;
    //popup specific
    PopUp.prototype.createPopHtml_1 = createPopHtml_1;  //thumbnail popup
    PopUp.prototype.showCaption = showCaption;
    PopUp.prototype.createPopHtml_2 = createPopHtml_2; //search popup
}
var gPop = new PopUp();

//Calling this function will set a timer to create a pop-up box next to any DOM object o.
function showPop(target, pId, args)
{
    with (PopUp.prototype)
    {
        if(target != null)
        {
            o_next = target;
            p_id = pId;
            p_args = args;
        
            if(p_timer_show != null)
            {
                window.clearTimeout(p_timer_show);
            }
            p_timer_show = window.setTimeout(drawPop,500);

            if (!isIE) document.captureEvents(Event.MOUSEMOVE);
            document.onmousemove = checkMousePos;
        }
    }
}

function drawPop()
{
    with (PopUp.prototype)
    {
        if(o_next != null)
        {
            //sets target
            o_curr = o_next;
            o_next = null;
            //create new pop up
            if(p != null && p.parentNode != null)
            {
                p.parentNode.removeChild(p);
            }
            p = document.createElement("div");
            document.body.appendChild(p);
            //display to waiting...
            getPopHtml(null, 0);
            p.style.zIndex = "2147483647";
            p.style.visibility = "visible";
            //fetch data
            getPopContent();
            p_timer_show = null;
        }
    }
}

function checkMousePos(e)
{
    with(PopUp.prototype)
    {
        var x;
        var y;
        if (!isIE)
        {
            x = e.pageX;
            y = e.pageY;
        }
        else
        {
            x = event.clientX + document.documentElement.scrollLeft;
            y = event.clientY + document.documentElement.scrollTop;
        }
        
        //a pop-up was going to be created, but no longer needed
        if(p_timer_show != null && o_next != null && !isAbove(x, y, o_next))
        {
            window.clearTimeout(p_timer_show);
            p_timer_show = null;
        }
        
        //a pop-up is visible
        if(o_curr != null)
        {
            //it was going to be dismissed, but the user need it again now
            if(p_timer_hide != null && (isAbove(x, y, o_curr) || isAbove(x, y, p)))
            {
                window.clearTimeout(p_timer_hide);
                p_timer_hide = null;
            }
            //user no longer need the pop up
            else if(p_timer_hide == null && !isAbove(x, y, o_curr) && !isAbove(x, y, p))
            {
                p_timer_hide = window.setTimeout(hidePop, 200);
            }
        }
        
        if(o_next == null && o_curr == null)
        {
            document.onmousemove = null;
        }
    }
}

function hidePop()
{
    with (PopUp.prototype)
    {
        if(p != null)
        {
            p.style.visibility = "hidden";
            p.parentNode.removeChild(p);
            p = null;
            o_curr = null;
        }
    }
}

function getPopContent()
{
    with (PopUp.prototype)
    {
        var cid = o_curr.getAttribute("cid");
        if(cid != null || cid == "")
        {
            var data = gCache.GetData(cid);
            if(data != null)
            {
                getPopHtml(data, 1);
                return;
            }
        }
        var ws_url = "";
        if(currWebHost)
        {
            ws_url += currWebHost;
        }
        switch(p_id)
        {
            case 1:
                ws_url += "/services/JSON/photos.aspx?service=getThumbs&type="+p_args[0]+"&id="+p_args[1]+"&count=10";
                break;
            case 2:
                ws_url += "/services/JSON/photos.aspx?service=photoData&photo="+p_args[0]+"&charCount=125";
                break;
        }
        callService(popRespond, ws_url);
    }
}

function popRespond(data)
{
    with (PopUp.prototype)
    {
        if(data != null && o_curr != null)
        {
            var cid = gCache.AddData(data);
            o_curr.setAttribute("cid", cid);
            getPopHtml(data, 1);
        }
    }
}

//status (0:waiting, 1:has data, -1:error)
function getPopHtml(data, status)
{
    with (PopUp.prototype)
    {
        if(p.getAttribute('placed') != 'true')
        {
            switch(p_id)
            {
                case 1: //thumbs popup
                    p.innerHTML = createPopHtml_1(data, status);
                    placePop(p,o_curr,0,-10);
                    break;
                case 2: //search popup
                    p.innerHTML = createPopHtml_2(data, status);
                    placePop(p,o_curr,0,30);
                    break;
            }
            p.setAttribute('placed', 'true');
        }
        else
        {
            var placeholder = GE('popHolder');
            switch(p_id)
            {
            case 1:
                placeholder.innerHTML = createPopHtml_1(data, status);
                break;
            case 2:
                placeholder.innerHTML = createPopHtml_2(data, status);
                break;
            }
        }
    }
}

//thumbnail popup
function createPopHtml_1(data, status)
{
    with (PopUp.prototype)
    {
        var pop = "";
        if(status == 1 && data && data.thumbsPack)
        {
            var thumbs = data.thumbsPack.thumbs;
            var summary = data.thumbsPack.summary;
            pop = "<div class='PhotoPopUpFrame'>";
            pop += "<div class='PhotoPopUpBody'>";
            pop += "<div class='PhotoPopUpHeader'>";
            pop += "<div class='fl wtxt'>1-" + summary.$count + " of " + summary.$total + " images</div>";
            pop += "<div class='PCloseBox' onclick='gPop.hidePop();'></div>";
            pop += "<a class='fr wtxt' href='javascript:gPop.hidePop();'>close</a>"
            pop += "</div>"; //header
            
            pop += "<div class='allThumbsDiv'>";
            for(var i=0; i<thumbs.length; i++)
            {
                pop += "<div class='thumbsPad'>";
                pop += "<img src=\"" + thumbs[i].$src + "\" class='PhotoPopUpThumb' onerror='photoErr(this, 2)' onmouseover=\"gPop.showCaption(\'" + thumbs[i].$caption + "\');this.className='PhotoPopUpThumbHover'\" onmouseout=\"this.className='PhotoPopUpThumb'\" onclick=\"document.location.href='" + thumbs[i].$href.replace("'","%27") + "'\"></img></div>";
            }
            pop += "</div>"; //thumbsPad
            
            pop += "<div class='PhotoPopUpCaption' /><div id='pop_caption' class='PhotoPopUpCaptionText'>" + summary.$name + "</div></div>"
            pop += "<a class='fr wtxt PhotoPopUpViewAll' href='" + summary.$href.replace("'","%27") + "'>view all " + unescape("%BB") + "</a>";
            pop += "</div></div><div class='PhotoPopUpBg'><img src='https://web.archive.org/web/20090307230110/http://entimg.msn.com/i/grandprix/popOverBgShadow.png'></img></div>";
        }
        else if(status == 0)
        {
            pop = "<div class='PhotoPopUpFrame'><div class='PhotoPopUpBody'><div class='PhotoPopUpSpinner'></div></div></div><div class='PhotoPopUpBg'><img src='https://web.archive.org/web/20090307230110/http://entimg.msn.com/i/grandprix/popOverBgShadow.png'></img></div>"
        }else
        {
            pop = "<div class='PhotoPopUpFrame'><div class='PhotoPopUpBody'><div class='wtxt text_center'>service unavailable</div></div></div><div class='PhotoPopUpBg'><img src='https://web.archive.org/web/20090307230110/http://entimg.msn.com/i/grandprix/popOverBgShadow.png'></img></div>";
        }
        return pop;
    }
}

//photo search pop up
function createPopHtml_2(data, status)
{
    with(PopUp.prototype)
    {
        var pop="";
        var o_w = p_args[1];
        var o_h = p_args[2];
        var h = 0;
        var w = 0;
        if(o_h > (3/4)*o_w)
        {
            h = 180;
            w = (180/o_h)*o_w;
            w = Math.round(w);
        }
        else
        {
            w = 240;
            h = (240/o_w)*o_h;
            h = Math.round(h);
        }
        if(status == 1 && data && data.photoData)
        {
            
            var photo = data.photoData.photo;
            pop = "<div class='SImgPopFrame' style='height:"+(h+10)+"px;width:"+(w+185)+"px;'>"
            pop += "<div class='SImgPopImg' style='width:"+w+"px;height:"+h+"px;'>"
            pop += "<a href='"+photo.$photoNavUrl+"'>"
            pop += "<img src='"+photoCatImgBaseUrl+"image.aspx?uuid="+p_args[0]+"&w=240&h=180&so=2' alt='Click to Enlarge'></img></a></div>"
            pop += "<div class='SImgPopDesc' style='width:170px;height:"+h+";'><div style='width:170px;height:"+(h-23)+";overflow:hidden;'>"+ photo.$photoCaption;
            pop += "<p>"+photo.$fullGalleryText+"</p></div>";
            pop += "<div style='position:absolute;bottom:5px;float:left;width:170px;overflow:hidden;'>\251 "+photo.$photoCopyright+"</div></div></div>";
        }
        else
        {
            pop = "<div class='SImgPopFrame' style='height:"+(h+10)+"px;width:"+(w+185)+"px;'><div class='SImgPopImg'>"
            pop += "<img src='"+photoCatImgBaseUrl+"image.aspx?uuid="+p_args[0]+"&w=240&h=180&so=2' alt='Click to Enlarge'></img></div></div>";
        }
        
        return pop;
    }
}

function showCaption(c)
{
    var captionDiv = GE("pop_caption");
    captionDiv.innerHTML= c;
}

//The default pop-up position is rhs of the object; when not enough space is available,
//the logic will pick the best possible position for the pop up
function placePop(pop,obj,xOffSet,yOffSet)
{
    with (PopUp.prototype)
    {
        var pos = findPos(obj);
        var absX = pos[0];
        var absY = pos[1];
            
        var dist = getDistToWindow(obj);
        var top = dist[0];
        var right = dist[1];
        var bottom = dist[2];
        var left = dist[3];
        
        var popRight = true;
        var arrowTop = 0;
        
        //pop.style.visibility = "hidden";
        pop.style.position = "absolute";

        if(left < right)
        {
            pop.style.left = (absX + obj.clientWidth - xOffSet) + "px";
        }
        else
        {
            pop.style.left = (absX - pop.clientWidth - 18 + xOffSet) + "px";
            popRight = false;
        }

        if(bottom > pop.clientHeight || top < bottom)
        {
            pop.style.top = absY + yOffSet + "px";
            arrowTop = "20px";
        }
        else if(bottom > 0)
        {
            pop.style.top = (absY + obj.clientHeight - pop.clientHeight - yOffSet) + "px";
            arrowTop = pop.clientHeight - 40 + "px";
        }
        else
        {
            pop.style.top = (absY + obj.clientHeight - pop.clientHeight + bottom - 3) + "px";
            arrowTop = pop.clientHeight - 25 + "px";
        }
        var currWidth = pop.clientWidth;
        if(currWidth != 0)
        {
            pop.style.width = pop.clientWidth + 18 + "px";
        }
        pop.innerHTML = "<div class='PhotoPopUpArrowLeft' style='position:relative; top:" + arrowTop + ";"+((popRight)? "":"visibility:hidden;")+"'></div><div id='popHolder'>" + pop.innerHTML 
                        + "</div><div class='PhotoPopUpArrowRight' style='position:relative; top:" + arrowTop + ";"+((popRight)? "visibility:hidden;":"")+"'></div>";
    }
}



//***** AJAX Utils ********
function callService(callback, path)
{
    xmlHttp = createXMLHttp();
    if (xmlHttp == null)
      {
          alert ("Your browser does not support AJAX!");
          return;
      }

    var cbw = new cbWrapper(callback);
    xmlHttp.onreadystatechange = cbw.Respond;
    xmlHttp.open("GET",path,true);
    xmlHttp.send(null);
}

//Server respond callback wrapper obj
function cbWrapper(callback)
{
    var cb = callback;
    cbWrapper.prototype.Respond = function()
    {
        if (xmlHttp.readyState==4)
        {
            var response = xmlHttp.responseText;
            if(response == null || response == "")
            {
                response = "[]";
            }
            var data = null;
            try{ data = eval( '(' + response + ')' ); }
            catch(err){}
            
            cb(data);
        }
    }
}

//******* Flash web service function ****
function flashCallService(callbackName, path)
{
    xmlHttp = createXMLHttp();
    if (xmlHttp == null)
      {
          alert ("Your browser does not support AJAX!");
          return;
      }

    var cbw = new flashCBWrapper(callbackName);
    xmlHttp.onreadystatechange = cbw.Respond;
    xmlHttp.open("GET",path,true);
    xmlHttp.send(null);
}

function flashCBWrapper(callback)
{
    var cb = callback;
    var flashId = "_flashControl";
    var flashObj;
    
    flashCBWrapper.prototype.Respond = function()
    {
        if (xmlHttp.readyState==4)
        {
            var response = xmlHttp.responseText;
            if(response == null || response == "")
            {
                response = "[]";
            }
            
            var data = null;            
            try{ data = eval( '(' + response + ')' ); }
            catch(err){}
           
            if(data)
            {
                if (navigator.appName.indexOf("Microsoft") != -1)
                {
                    flashObj = window[flashId];
                }
                else
                {
                    flashObj = document[flashId];
                }
                
                if(flashObj)
                {
                    flashObj[cb](data);
                }
            }
        }
    }
}

/***** POSITIONING Utils ****/
function isAbove(x, y, o)
{
    var pos = findPos(o);
    var xmin = pos[0];
    var ymin = pos[1];
    var xmax = xmin + o.clientWidth;
    var ymax = ymin + o.clientHeight;
    return (x > xmin && x < xmax && y > ymin && y < ymax);
}

//get x,y offset of the object relative to the DOCUMENT (page)
function findPos(obj)
{
    var curleft = curtop = 0;
    if (obj != null && obj.offsetParent != null)
    {
        curleft = obj.offsetLeft
        curtop = obj.offsetTop
        while (obj = obj.offsetParent)
        {
            curleft += obj.offsetLeft
            curtop += obj.offsetTop
        }
    }
    return [curleft,curtop];
}

function findRelativePos(obj)
{
    var leftText = obj.style.left;
    var topText = obj.style.top;
    var left = (leftText != "")? parseInt(leftText):0;
    var top = (topText != "")? parseInt(topText):0;
    return [left, top];
}

//get top, right, bottom, left distance away from the browser inner edge
function getDistToWindow(obj)
{
    //get obj's position in page
    var pos = findPos(obj);
    var absX = pos[0];
    var absY = pos[1];
    
    //figure out how much the user scrolled
    var scroll = getScrollingOffset();
    var scLeft = scroll[0];
    var scTop = scroll[1];
    
    //calculate top and left position in relative to the window
    var left = absX - scLeft;
    var top = absY - scTop;
    
    //get window size
    var win = getInnerDim();
    var winW = win[0];
    var winH = win[1];
    
    //calculate bottom and right distance to the window
    var right = winW - left - obj.clientWidth;
    var bottom = winH - top - obj.clientHeight;
    
    return [top, right, bottom, left];
}


//get inner width and height of the window/frame
function getInnerDim()
{
    var x,y;
    if (self.innerHeight) // all except Explorer
    {
        x = self.innerWidth;
        y = self.innerHeight;
    }
    else if (document.documentElement && document.documentElement.clientHeight)
        // Explorer 6 Strict Mode
    {
        x = document.documentElement.clientWidth;
        y = document.documentElement.clientHeight;
    }
    else if (document.body) // other Explorers
    {
        x = document.body.clientWidth;
        y = document.body.clientHeight;
    }
    return [x,y];
}

//how much the user scrolled
function getScrollingOffset()
{
    var x,y;
    if (self.pageYOffset) // all except Explorer
    {
        x = self.pageXOffset;
        y = self.pageYOffset;
    }
    else if (document.documentElement && document.documentElement.scrollTop)
        // Explorer 6 Strict
    {
        x = document.documentElement.scrollLeft;
        y = document.documentElement.scrollTop;
    }
    else if (document.body) // all other Explorers
    {
        x = document.body.scrollLeft;
        y = document.body.scrollTop;
    }
    return [x,y];
}

function getPageSize()
{
    var x,y;
    var sample1 = document.body.scrollHeight;
    var sample2 = document.body.offsetHeight
    if (sample1 > sample2) // all but Explorer Mac
    {
        x = document.body.scrollWidth;
        y = document.body.scrollHeight;
    }
    else // Explorer Mac;
         //would also work in Explorer 6 Strict, Mozilla and Safari
    {
        x = document.body.offsetWidth;
        y = document.body.offsetHeight;
    }
    return [x,y];
}


/****** CAROUSEL *******/

//Move object along x or y axis in a smooth fashion
function MoveObject(id, x_distance, y_distance)
{
    var fps = 80;        //frames/sec
    var duration = 1000; //ms
    
    if(navigator.userAgent.indexOf("Firefox") != -1)
    {
        fps = 12;
        duration = 1700;
    }else if(navigator.userAgent.indexOf("Safari") != -1)
    {
        fps = 40;
    }
    var framesTotal = fps*duration/1000;
    
    var movingFlag = GetIndex(id+"FLAG");
    if(movingFlag == 1)
    {
        return;
    }
    else
    {
        SetIndex(id+"FLAG", 1);
    }
    var frameCount = 0;
    var o = GE(id);
    var pos = findRelativePos(o);
    var x = pos[0];
    var y = pos[1];
    o.style.position = "relative";
    
    var interval;
    var factor;
    var moveABit = function()
    {
        frameCount++;
        factor = Math.sin(frameCount * 3.142 / 2 / framesTotal);
        o.style.left = x + factor * x_distance + "px";
        o.style.top = y + factor * y_distance + "px";
        
        if(frameCount >= framesTotal)
        {
            window.clearInterval(interval);
            frameCount = 0;
            SetIndex(id+"FLAG", 0);
            o.style.left = x + x_distance + "px";
            o.style.top = y + y_distance + "px";
        }
    }
    interval = window.setInterval(moveABit, 1000/fps);
}

function ShowCarouselPage(id, index)
{
    var frameCount = GetIndex(id+"FLAG");
    if(frameCount > 0)
    {
        return;
    }
    var currIndex = GetIndex(id);
    var parent = GE(id);
    if(parent != null)
    {
        var children = parent.childNodes;
        var dist = children[0].clientWidth * (currIndex - index);
        MoveObject(id, dist, 0);
        ToggleChildStyle(id, index);
        SetIndex(id, index);
    }
}

function ShowNextCarouselPage(id)
{
    var currIndex = GetIndex(id);
    var parent = GE(id);
    if(parent != null)
    {
        var children = parent.childNodes;
        if(currIndex+1 < children.length)
        {
            ShowCarouselPage(id, currIndex+1);
            //ShowCarouselPage also sets new index
        }
    }
}

function ShowPrevCarouselPage(id)
{
    var currIndex = GetIndex(id);
    var parent = GE(id);
    if(parent != null)
    {
        var children = parent.childNodes;
        if(currIndex-1 >= 0)
        {
            ShowCarouselPage(id, currIndex-1);
            //ShowCarouselPage also sets new index
        }
    }
}

function ToggleChildStyle(parentId, index)
{
    var parent = GE(parentId+'_ind');
    if( parent != null )
    {
        children = parent.childNodes;
        
        var cName = children[0].className;
        var p = cName.indexOf("On");
        if( p < 0 )
        {
            p = cName.indexOf("Off");
            if( p < 0)
            {
                p = cName.indexOf("Hover");
            }
        }
        cName = cName.substring(0, p);
        
        if( children.length > index )
        {
            for(var i = 0; i < children.length; i++)
            {
                children[i].className = cName + "Off";
            }
            children[index].className = cName + "On";
        }
    }
}

var toggleIndex = new Array();
function SetIndex(id, index)
{
    for(var i=0; i<toggleIndex.length; i++)
    {
        if(toggleIndex[i][0] == id)
        {
            toggleIndex[i][1] = index;
            return;
        }
    }
    var len = toggleIndex.length;
    toggleIndex[len][0] = id;
    toggleIndex[len][1] = index;
}

function GetIndex(id)
{
    for(var i=0; i<toggleIndex.length; i++)
    {
        if(toggleIndex[i][0] == id)
        {
            return toggleIndex[i][1];
        }
    }
    var len = toggleIndex.length;
    toggleIndex[len] = new Array();
    toggleIndex[len][0] = id;
    toggleIndex[len][1] = 0;
    return 0;
}


var commentsDom;
var photoGUID;
var photogalleryId;
var photogalleryUrl;
var photoMsgBoad;


function GetComments(photoId, galleryId, url, msgBoard )
{
	    
	    photoGUID = photoId;
		photogalleryId = galleryId;
		photogalleryUrl = url;
		photoMsgBoad = msgBoard;
	
		commentsDom = createXMLHttp();
		var xmlurl = "/services/NonCacheComments.aspx?photoId=" + photoId + "&url=" + url + "&gallery=" + galleryId + "&boardId=" + msgBoard;
		commentsDom.onreadystatechange = CommentsReady;
    	commentsDom.open("GET", xmlurl, true);
        commentsDom.send("");  
}

function CommentsReady()
{
	if (commentsDom == null || commentsDom.responseXML == null ||commentsDom.responseXML.documentElement == null || commentsDom.readyState != 4)
    {
		return; 
	}
	   
	    var result;
	    var comments;
		var boardLocation;
		var photoId;
     
	
       result=commentsDom.responseXML.documentElement.getElementsByTagName("Comments")[0].firstChild.nodeValue;
       photoId=commentsDom.responseXML.documentElement.getElementsByTagName("PhotoID")[0].firstChild.nodeValue;

	   if ( commentsDom.responseXML.documentElement.getElementsByTagName("BoardLocation")[0].firstChild != null)
	   {
		     boardLocation=commentsDom.responseXML.documentElement.getElementsByTagName("BoardLocation")[0].firstChild.nodeValue;
       }
	   else
	   {
	 	     boardLocation="";
       }
	  
	   var textDiv = document.getElementById('commentsText');
	   var linkDiv = document.getElementById('messageBoardsDiv');
	      
	   if (result != "0" )
	   {
		     textDiv.innerHTML = "Comments (" + result + ")";
	   }

  	   if ( boardLocation != null && boardLocation.length > 0)
	   {
		   	     linkDiv.onclick = function(){ClientSideVC(photoGUID, '5');reDirect(boardLocation)};
	   }
	   else
	   {
		        linkDiv.onclick = function(){ClientSideVC(photoGUID, '5');nonCachedMessageBoardsClick(photoId)};
	   }

}

function reDirect(loc)
{
	location.href = loc;
}

function nonCachedMessageBoardsClick(photoId)
{
	    var xml = createXMLHttp();
	    var xmlurl = "/services/NonCacheComments.aspx?photoId=" + photoGUID + "&url=" + photogalleryUrl  
			         +"&gallery=" + photogalleryId + "&boardId=" + photoMsgBoad + "&createthread=1";
    	xml.open("GET", xmlurl, false);
        xml.send("");      

        if ( xml.responseXML.documentElement.getElementsByTagName("BoardLocation")[0].firstChild != null)
	    {
			location.href = xml.responseXML.documentElement.getElementsByTagName("BoardLocation")[0].firstChild.nodeValue;
	    }
}

var vcpImg;
function ClientSideVC(guid, counter, ag)
{
	 vcpImg = new Array();
	 vcpImg[0] = new Image();
	 vcpImg[1] = new Image();
	 
	 if (ag == null || ag == "")
	 {
	      vcpImg[0].src = photoCatUsgBaseUrl + "usage.aspx?u=" + guid + "&t=" + counter;
	      vcpImg[1].src = photoCatUsgBaseUrl + "frauddetect.aspx?u=" + guid + "&t=" + counter;
	 }
	 else
	 {
	      vcpImg[0].src = photoCatUsgBaseUrl + "usage.aspx?u=" + guid + "&t=" + counter + "&ag=" + ag;
	      vcpImg[1].src = photoCatUsgBaseUrl + "frauddetect.aspx?u=" + guid + "&t=" + counter + "&ag=" + ag;
	 }
}




}
/*
     FILE ARCHIVED ON 23:01:10 Mar 07, 2009 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:12:19 Apr 14, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.658
  exclusion.robots: 0.087
  exclusion.robots.policy: 0.059
  cdx.remote: 0.057
  esindex: 0.008
  LoadShardBlock: 237.808 (3)
  PetaboxLoader3.datanode: 87.892 (4)
  PetaboxLoader3.resolve: 244.414 (2)
  load_resource: 420.496
*/
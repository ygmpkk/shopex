void function(){DropMenu=new Class({options:{periodical:!1,delay:500,postvar:"finderItems",varname:"items",height:250,relative:window,offset:{x:0,y:0}},initialize:function(a,b){if(a=$(a)){var b=$extend(this.options,b),c=$(b.menu)||$(a.get("dropmenu"));c&&a.addEvent("click",function(a){$(a.target).get("dropfor")&&a.stopPropagation();"x_btn_finder-tag"==this.get("id")&&$("finder-tag").fireEvent("show");a=$(this.get("dropfor"))||this;a.blur();if(a.hasClass("droping"))return a.removeClass("droping"),
c.hide();a.addClass("droping");a.fireEvent("dropmenu",{type:"dropmenu",target:a,menu:c});var f=a.getPosition(b.relative);c.get("initEd")||(c.setStyles({display:"block",visibility:"hidden","overflow-y":"auto"}),c.set("initEd","1"),c.offsetHeight>b.height&&c.setStyle("height",b.height),c.setStyle("visibility","visible"));c.setStyles({left:f.x+b.offset.x,top:f.y+a.getSize().size.y+b.offset.y,display:"block"});c.store("drophandle",a);(function(){document.body.addEvent("click",function(){c.retrieve("drophandle").removeClass("droping");
c.setStyle&&c.setStyle("display","none");this.removeEvent("click",arguments.callee)})}).delay(100)})}}})}();
var MessageBox=new Class({options:{delay:1,onFlee:$empty,FxOptions:{}},initialize:function(a,b,c){$extend(this.options,c);this.createBox(a,b)},flee:function(a){window.MessageBoxOnShow&&(window.MessageBoxOnShow(a,a.hasClass("success")),window.MessageBoxOnShow=$empty());var b=new Fx.Styles(a,this.options.FxOptions),c=this;a.addEvent("click",function(){this.hide()});(function(){b.start({left:0,opacity:0}).chain(function(){this.element.remove();c.options.onFlee&&c.options.onFlee.apply(c,[c]);if(window.MessageBoxOnFlee){window.MessageBoxOnFlee(a,
a.hasClass("success"));window.MessageBoxOnFlee=$empty()}})}).delay(1E3*this.options.delay)},createBox:function(a,b){var c=/<h4[^>]*>([\s\S]*?)<\/h4>/,d=a;d.test(c)&&d.replace(c,function(b,c){a=c;return""});var c=(new Element("div")).setStyles({position:"absolute",visibility:"hidden",width:200,height:"auto",opacity:0,zIndex:65535}).inject(document.body),f=this;c.addClass(b).setHTML("<h4>",a,"</h4>").amongTo(window).effect("opacity").start(1).chain(function(){f.flee(this.element)});return c}});
MessageBox.success=function(a,b){return new MessageBox(a||"\u64cd\u4f5c\u6210\u529f!","success",b)};MessageBox.error=function(a,b){b=b||{};b.delay||(b.delay=3);return new MessageBox(a||"\u64cd\u4f5c\u5931\u8d25!","error",b)};MessageBox.show=function(a,b){return a.contains("failedSplash")?new MessageBox(a||"\u64cd\u4f5c\u5931\u8d25!","error",b):new MessageBox(a||"\u64cd\u4f5c\u6210\u529f!","success",b)};
(function(){var a,b=function(){if(a)return a;var b="";$H({WM:"#000 #444 #666 #999 #ccc #eee #f3f3f3 #fff".split(" "),aN:"#f00 #f90 #ff0 #0f0 #0ff #00f #90f #f0f".split(" "),XM:"#f4cccc #fce5cd #fff2cc #d9ead3 #d0e0e3 #cfe2f3 #d9d2e9 #ead1dc #ea9999 #f9cb9c #ffe599 #b6d7a8 #a2c4c9 #9fc5e8 #b4a7d6 #d5a6bd #e06666 #f6b26b #ffd966 #93c47d #76a5af #6fa8dc #8e7cc3 #c27ba0 #cc0000 #e69138 #f1c232 #6aa84f #45818e #3d85c6 #674ea7 #a64d79 #990000 #b45f06 #bf9000 #38761d #134f5c #0b5394 #351c75 #741b47 #660000 #783f04 #7f6000 #274e13 #0c343d #073763 #20124d #4c1130".split(" ")}).each(function(a){b+=
'<div class="goog-palette"><table cellspacing="0" cellpadding="0"  class="goog-palette-table"><tbody class="goog-palette-body">';a.each(function(f,e){var g=f.hexToRgb();0==e&&(b+='<tr class="goog-palette-row">');b+='<td class="goog-palette-cell"><div title="'+g+'" style="background-color: '+g+';" class="goog-palette-colorswatch"/></td>';0==(e+1)%8&&(b=e+1==a.length?b+"</tr>":b+'</tr><tr class="goog-palette-row">')});b+="</tbody></table></div>"});return a=b};GoogColorPicker=new Class({Implements:[Events,
Options],options:{onSelect:Class.empty,onShow:Class.empty,offsets:{x:10,y:10}},initialize:function(a,b){this.setOptions(b);this.el=$(a);this.showing=!1;var f=this;this.el.addEvents({click:function(a){f.showPanel(a)},mouseleave:function(){f.selecting=!1;f.blurEl()},mouseenter:function(){f.selecting=!0}})},onSelect:function(a,b){this.fireEvent("select",[b,a,this.el]);this.selecting=!1;this.hidePanel()},blurEl:function(){this.hd=this.hidePanel.delay(850,this)},position:function(a){var b=window.getSize(),
f=window.getScroll(),e={x:this.gcp_panel.offsetWidth,y:this.gcp_panel.offsetHeight},g={x:"left",y:"top"},h;for(h in g){var j=a.page[h]+this.options.offsets[h];j+e[h]-f[h]>b[h]&&(j=a.page[h]-this.options.offsets[h]-e[h]);this.gcp_panel.setStyle(g[h],j)}},hidePanel:function(){this.selecting||this.gcp_panel&&this.gcp_panel.setStyle("visibility","hidden")},showPanel:function(a){var d=this,f=this.el.uid||Native.UID++;$("gcp_panel"+f)||(f=this.gcp_panel=$("gcp_panel"+f)||(new Element("div",{id:"gcp_panel"+
f,"class":"goog-palette-panel"})).setHTML(b()).inject($("tabernacle")),f.addEvents({mousemove:function(){d.selecting=!0},mouseleave:function(){d.selecting=!1;d.blurEl()}}),$ES(".goog-palette-cell",f).addEvents({mouseover:function(){this.addClass("goog-palette-cell-hover")},mouseleave:function(){this.removeClass("goog-palette-cell-hover")},click:function(){var a=this.getElement(".goog-palette-colorswatch").get("title"),b=a.rgbToHex();d.onSelect(a,b)}}));this.position(a);this.fireEvent("show",this.el,
this);this.gcp_panel.setStyle("visibility","visible")}})})();function getContent(a){return $(a).getParent(".dialogContent")||$(a).getParent(".main_content")||document.body}
var DatePickers=new Class({Implements:[Events,Options],options:{onShow:function(a){a.setStyle("visibility","visible")},onHide:function(a){a.setStyle("visibility","hidden").setStyle("left",-300)},showDelay:100,hideDelay:100,className:"x-calendar",offsets:{x:0,y:20},dateformat:"-",days:"SUN MON TUE WED THU FIR STA".split(" "),months:"\u4e00\u6708 \u4e8c\u6708 \u4e09\u6708 \u56db\u6708 \u4e94\u6708 \u516d\u6708 \u4e03\u6708 \u516b\u6708 \u4e5d\u6708 \u5341\u6708 \u5341\u4e00\u6708 \u5341\u4e8c\u6708".split(" "),weekFirstDay:1},
initialize:function(){var a=Array.link(arguments,{options:Object.type,elements:$defined});this.setOptions(a.options||null);this.lock=!1;this.datepicker=(new Element("div")).addEvents({mouseover:function(){this.lock=!0}.bind(this),mouseout:function(){this.lock=!1}.bind(this)}).inject($("tabernacle"));this.options.className&&this.datepicker.addClass(this.options.className);(new Element("div",{"class":"x-datepicker-top"})).inject(this.datepicker);this.container=(new Element("div",{"class":"x-datepicker"})).inject(this.datepicker).addEvent("click",
function(a){a.stopPropagation()});(new Element("div",{"class":"x-datepicker-bottom"})).inject(this.datepicker);this.datepicker.setStyles({position:"absolute",top:0,left:0,visibility:"hidden",zIndex:65535});a.elements&&(a.elements.each(function(a){a.store("bindColorPicker",!0)}),this.attach(a.elements))},attach:function(a){$$(a).each(function(a){var c=a.retrieve("datepicker:dateformat",a.get("accept"));c||(c=this.options.dateformat,a.store("datepicker:dateformat",c));var d=a.retrieve("datepicker:datevalue",
a.get("value"));d||(d=this.format(new Date,c),a.store("datepicker:datevalue",d));a.store("datepicker:current",this.unformat(d,c));c=a.retrieve("datepicker:focus",this.elementFocus.bindWithEvent(this,a));d=a.retrieve("datepicker:blur",this.elementBlur.bindWithEvent(this,a));a.addEvents({focus:c,blur:d});a.store("datepicker:native",a.get("accept"));a.erase("dateformat")},this);return this},detach:function(a){$$(a).each(function(a){a.removeEvent("onfocus",a.retrieve("datepicker:focus")||$empty);a.removeEvent("onblur",
a.retrieve("datepicker:blur")||$empty);a.eliminate("datepicker:focus").eliminate("datepicker:blur");var c=a.retrieve("datepicker:native");c&&a.set("dateformat",c)});return this},elementFocus:function(a,b){this.el=b;var c=b.retrieve("datepicker:current");this.curFullYear=c[0];this.curMonth=c[1];this.curDate=c[2];this.build();this.timer=$clear(this.timer);this.timer=this.show.delay(this.options.showDelay,this);this.position({page:b.getPosition()})},elementChange:function(){this.el.store("datepicker:current",
[this.curFullYear,this.curMonth,this.curDate]);this.el.set("value",this.format(new Date(this.curFullYear,this.curMonth,this.curDate),this.el.retrieve("datepicker:dateformat")));$clear(this.timer);this.timer=this.hide.delay(this.options.hideDelay,this)},elementBlur:function(){this.lock||($clear(this.timer),this.timer=this.hide.delay(this.options.hideDelay,this))},position:function(a){var b=window.getSize(),c=window.getScroll(),d={x:this.datepicker.offsetWidth,y:this.datepicker.offsetHeight},f={x:"left",
y:"top"},e;for(e in f){var g=a.page[e]+this.options.offsets[e];g+d[e]-c[e]>b[e]&&(g=a.page[e]-this.options.offsets[e]-d[e]);this.datepicker.setStyle(f[e],g)}},show:function(){this.fireEvent("show",this.datepicker)},hide:function(){this.fireEvent("hide",this.datepicker)},build:function(){$A(this.container.childNodes).each(Element.dispose);var a=(new Element("table")).set({cellpadding:"0",cellspacing:"0"}).inject(this.container);this.caption().inject(a);this.thead().inject(a);this.tbody().inject(a)},
navigate:function(a,b){switch(a){case "m":var c=this.curMonth+b;0>c||12==c?(this.curMonth=0>c?11:0,this.navigate("y",b)):this.curMonth=c;break;case "y":this.curFullYear+=b}this.el.store("datepicker:current",[this.curFullYear,this.curMonth,this.curDate]);this.el.focus()},caption:function(){var a=new Element("caption"),b=(new Element("a")).addClass("prev").appendText("<"),c=(new Element("a")).addClass("next").appendText(">"),d=(new Element("span")).addClass("year").inject(a);b.clone().addEvent("click",
function(){this.navigate("y",-1)}.bind(this)).inject(d);(new Element("span")).set("text",this.curFullYear).addEvent("mousewheel",function(a){a.stop();this.navigate("y",0>a.wheel?-1:1);this.build()}.bind(this)).inject(d);c.clone().addEvent("click",function(){this.navigate("y",1)}.bind(this)).inject(d);d=(new Element("span")).addClass("month").inject(a);b.clone().addEvent("click",function(){this.navigate("m",-1)}.bind(this)).inject(d);(new Element("span")).set("text",this.options.months[this.curMonth]).addEvent("mousewheel",
function(a){a.stop();this.navigate("m",0>a.wheel?-1:1);this.build()}.bind(this)).inject(d);c.clone().addEvent("click",function(){this.navigate("m",1)}.bind(this)).inject(d);return a},thead:function(){var a=new Element("thead"),b=(new Element("tr")).inject(a);for(i=0;7>i;i++)(new Element("th")).set("text",this.options.days[(this.options.weekFirstDay+i)%7].substr(0,3)).inject(b);return a},tbody:function(){var a=new Date(this.curFullYear,this.curMonth,1),b=(a.getDay()-this.options.weekFirstDay+7)%7,
c=(new Date(this.curFullYear,this.curMonth+1,0)).getDate(),d=(new Date(this.curFullYear,this.curMonth,0)).getDate(),a=this.el.get("value")?this.unformat(this.el.get("value"),this.el.retrieve("datepicker:dateformat")):!1,f=(new Date(a[0],a[1],a[2])).getTime(),a=new Date,a=(new Date(a.getFullYear(),a.getMonth(),a.getDate())).getTime(),e=new Element("tbody");e.addEvent("mousewheel",function(a){a.stop();this.navigate("m",0>a.wheel?-1:1);this.build()}.bind(this));for(var g=1;43>g;g++){0==(g-1)%7&&(tr=
(new Element("tr")).inject(e));var h=(new Element("td")).inject(tr),j=g-b,k=new Date(this.curFullYear,this.curMonth,j);1>j?(j=d+j,h.addClass("inactive")):j>c?(j-=c,h.addClass("inactive")):(k.getTime()==f?h.addClass("hilite"):k.getTime()==a&&h.addClass("today"),h.addEvents({click:function(a){this.curDate=a;this.elementChange()}.bind(this,j),mouseover:function(a){a.addClass("hilite")}.bind(this,h),mouseout:function(a,b){b.getTime()!=f&&a.removeClass("hilite")}.bind(this,[h,k])}).addClass("active"));
h.set("text",j)}return e},unformat:function(a,b){var c=a.split(b),d=Array(3);if(3>c.length||!c[0]||!c[1]||!c[2])return[(new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()];d[0]=c[0].toInt();d[1]=c[1].toInt()-1;d[2]=c[2].toInt();return d},format:function(a,b){if(a){var c=a.getDate();a.getDay();var d=a.getMonth()+1;return[a.getFullYear()+"",d,c].join(b)}return""}});Element.extend({makeCalable:function(a){if(!this.retrieve("bindColorPicker"))return new DatePickers([this],a)}});
var validatorMap=new Hash({required:["\u672c\u9879\u5fc5\u586b",function(a,b){return null!=b&&""!=b&&""!=b.trim()}],number:["\u8bf7\u5f55\u5165\u6570\u503c",function(a,b){return null==b||""==b||!isNaN(b)&&!/^\s+$/.test(b)}],params1:["\u53c2\u6570\u540d\u4e2d\u4e0d\u80fd\u542b\u6709\u5355\u5f15\u53f7\u6216\u53cc\u5f15\u53f7",function(a,b){return!/(?:\"|\')/.test(b)}],params2:["\u53c2\u6570\u7ec4\u540d\u79f0\u4e2d\u4e0d\u80fd\u542b\u6709\u5355\u5f15\u53f7\u6216\u53cc\u5f15\u53f7",function(a,b){return!/(?:\"|\')/.test(b)}],
msn:["\u8bf7\u8f93\u5165MSN",function(a,b){return null==b||""==b||/\S+@\S+/.test(b)}],skype:["\u8bf7\u8f93\u5165Skype",function(a,b){return null==b||""==b||!/\W/.test(b)||/^[a-zA-Z0-9]+$/.test(b)}],digits:["\u8bf7\u5f55\u5165\u6574\u6570",function(a,b){return null==b||""==b||!/[^\d]/.test(b)}],unsignedint:["\u8bf7\u5f55\u5165\u6b63\u6574\u6570",function(a,b){return null==b||""==b||!/[^\d]/.test(b)&&0<b}],unsigned:["\u8bf7\u8f93\u5165\u5927\u4e8e\u7b49\u4e8e0\u7684\u6570\u503c",function(a,b){return null==
b||""==b||!isNaN(b)&&!/^\s+$/.test(b)&&0<=b}],positive:["\u8bf7\u8f93\u5165\u5927\u4e8e0\u7684\u6570\u503c",function(a,b){return null==b||""==b||!isNaN(b)&&!/^\s+$/.test(b)&&0<b}],alpha:["\u8bf7\u5f55\u5165\u82f1\u6587\u5b57\u6bcd",function(a,b){return null==b||""==b||/^[a-zA-Z]+$/.test(b)}],alphaint:["\u8bf7\u5f55\u5165\u82f1\u6587\u5b57\u6bcd\u6216\u8005\u6570\u5b57",function(a,b){return null==b||""==b||!/\W/.test(b)||/^[a-zA-Z0-9]+$/.test(b)}],space:["\u8bf7\u786e\u8ba4\u5f55\u5165\u4e0d\u5305\u542b\u7a7a\u683c",
function(a,b){return/^\S+$/.test(b)}],alphanum:["\u8bf7\u5f55\u5165\u82f1\u6587\u5b57\u6bcd\u3001\u4e2d\u6587\u53ca\u6570\u5b57",function(a,b){return null==b||""==b||!/\W/.test(b)||/^[\u4e00-\u9fa5a-zA-Z0-9]+$/.test(b)}],date:["\u8bf7\u5f55\u5165\u65e5\u671f\u683c\u5f0fyyyy-mm-dd",function(a,b){return null==b||""==b||/^(19|20)[0-9]{2}-([1-9]|0[1-9]|1[012])-([1-9]|0[1-9]|[12][0-9]|3[01])+$/.test(b)}],email:["\u8bf7\u5f55\u5165\u6b63\u786e\u7684Email\u5730\u5740",function(a,b){return null==b||""==b||
/^([a-zA-Z0-9]+[_|\-\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(b)}],mobile:["\u8bf7\u5f55\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7\u7801",function(a,b){return null==b||""==b||/^1[3|4|5|8][0-9]\d{8}$/.test(b)}],tel:["\u8bf7\u5f55\u5165\u6b63\u786e\u7684\u56fa\u8bdd\u53f7\u7801",function(a,b){return null==b||""==b||/^\d{3,4}-\d{7,8}(?:$|-\d{4,6}$)/.test(b)}],text:["",function(){return!0}],select:["",function(){return!0}],radio:["",function(){return!0}],checkbox:["",
function(){return!0}],url:["\u8bf7\u5f55\u5165\u6b63\u786e\u7684\u7f51\u5740",function(a,b){return null==b||""==b||/^(http|https|ftp):\/\/([A-Z0-9][A-Z0-9_-]*)(:(\d+))?\/?/i.test(b)}],area:["\u8bf7\u9009\u62e9\u5b8c\u6574\u7684\u5730\u533a",function(a){return a.getElements("select").every(function(a){a=a.getValue();return""!=a&&"_NULL_"!=a})}],requiredcheckbox:["\u5fc5\u987b\u9009\u62e9\u4e00\u9879",function(a){var b=a.getParent().getElements("input[type=checkbox]");b.removeEvents("change").addEvent("change",
function(){validator.test(a.form,a)&&validator.removeCaution(a)});return b.some(function(a){return a.checked})}]}),validator=new Abstract({test:function(a,b){a=a||$(document.body);b=$(b);if("hidden"==b.get("type")){if(b.getParent()&&!b.getParent().isDisplay())return!0}else if(!b.isDisplay()&&"checkForm"!=b.get("vtype"))return!0;this.bindBlurWithValidator(a,b);var c=[],d=b.get("required"),f=b.get("vtype"),e=b.get("caution"),g=a?a.get("extra"):!1;f&&f.contains("&&")&&(f=f.split("&&"));d&&c.include("required");
f&&c.include(f);c=c.flatten();if(!c.every(function(a){var c=!0,d=validatorMap.get(a)||window[a];if(!d)return c;a=e||d[0];d=d[1];"function"==$type(d)&&(c=d(b,b.getValue()));c||this.showCaution(b,a);return c},this))return!1;if(g&&extra_validator){c=extra_validator[g];if(!c)return!0;f=c[f];if(!f)return!0;c=f[0];if(!(0,f[1])(a,b.getVlaue?b.getVlaue():b))return this.showCaution(b,c),!1}return!0},showCaution:function(a,b){var c=$(a).getNext();(!c||!c.get("name")||!c.get("name").contains("validationMsgBox"))&&
b&&""!=b.trim()&&(new Element("div",{"class":"x-vali-error",name:"validationMsgBox",html:b})).injectAfter(a)},removeCaution:function(a){if((a=$(a).getNext())&&a.get("name")&&a.get("name").contains("validationMsgBox"))return a.remove()},bindBlurWithValidator:function(a,b){$$(b,b.getFormElements()).removeEvents("blur").addEvent("blur",function(){this.removeCaution(b);this.test(a,b)}.bind(this))}}),Tags_opt=new Class({initialize:function(a,b){if(this.finderTag=a.finderTag)this.tagEvent(),this.sigId=
b,this.applyObj=$E(".btn-apply",$("finder-tag")),this.createObj=$E(".btn-create-tag",$("finder-tag")),this.manage=$E(".btn-tag-manage",$("finder-tag")),this.taginput=$E(".tag-editor-value",$("finder-tag")),this.tagmain=$E(".tag-editor-group",$("finder-tag")),this.url=a.url,this.bindEvent()},filterUrl:function(a){return!this.url?"index.php"+location.search.split("&")[0]+"&act="+a:this.url+"&act="+a},bindEvent:function(){this.taginput&&this.taginput.addEvent("click",function(a){a.stopPropagation()});
this.applyObj&&this.applyObj.addEvent("click",function(){this.finderTag.fireEvent("apply")}.bind(this));this.createObj&&this.createObj.addEvent("click",function(){this.newDialog()}.bind(this))},bindTagEvent:function(a){a.addEvent("click",function(a){a.stop();this.hasClass("selected_all")?(a=$E("ul[class=theme_tag] li[class=selected_none]").clone(),a.getFirst().replaces(this.getFirst()),this.removeClass("selected_all"),this.addClass("selected_none")):(a=$E("ul[class=theme_tag] li[class=selected_all]").clone(),
a.getFirst().replaces(this.getFirst()),this.removeClass("selected_none"),this.removeClass("selected_part"),this.addClass("selected_all"))})},newDialog:function(){var a=this;new Dialog(this.finderTag.getElement(".dialogTag").clone(),{width:350,height:200,title:"\u65b0\u5efa\u6807\u7b7e",onLoad:function(){this.dialog.getElement(".dialogTag").setStyle("display","block");this.dialog.getElement(".btnSmt").addEvent("click",function(){"function"!=$type(a.finderTag.fireEvent)?this.close():a.finderTag.fireEvent("createTag",
this)}.bind(this));this.dialog.getElement(".btnCancel").addEvent("click",function(){this.close()}.bind(this));this.dialog.getElement(".tag-editor-value").addEvent("keydown",function(a){13==a.code&&this.getElement(".btnSmt").fireEvent("click")}.bind(this.dialog))}})},selectedRow:function(){$("headBar")&&($("headBar").getChildren("form")[0]&&$("headBar").getChildren("form")[0].retrieve("rowselected"))&&(this.key=$H($("headBar").getChildren("form")[0].retrieve("rowselected")).getKeys()[0],this.value=
$H($("headBar").getChildren("form")[0].retrieve("rowselected")).getValues()[0]);this.value&&1>this.value.length&&(this.key=this.value=null)},filterParam:function(){var a=new String,b=/\w+(?=\/)/.exec(location.search);if(this.sigId)a="&"+b+"_id[]="+this.sigId;else{if(this.value&&this.value.contains("_ALL_"))return a="&"+this.key+"=_ALL_";this.value&&this.value.each(function(b){a+="&"+this.key+"="+b}.bind(this))}return a},toQueryString:function(){var a=[],b=[];this.finderTag.getElement("ul[class=tag-editor-group]").getElements("li").each(function(c){c.hasClass("selected_all")&&
a.include(c);c.hasClass("selected_part")&&b.include(c)});var c="_SET_TAGS_=";a.each(function(a){a=a.get("text").trim();c+="_S_ALL"+a+" "});b.each(function(a){a=a.get("text").trim();c+="_S_PAR"+a+" "});return c},tagEvent:function(){var a=this;this.finderTag.addEvents({show:function(){a.tagmain.setStyle("overflow","hidden");this.setStyle("overflow","hidden");a.selectedRow();var b=a.filterParam();thistag=this;var c=a.filterUrl("tagList");b.length||(b=null);(new Request({method:"post",url:c,onSuccess:function(b){if(b=
JSON.decode(b)){thistag.getElement("ul[class=tag-editor-group]").empty();10<b.length&&a.tagmain.setStyles({"overflow-y":"auto",height:"200px"});for(var c=0;c<b.length;c++){var e=$E("ul[class=theme_tag] li[class=selected_"+b[c].status+"]").clone();e.appendText(b[c].tag_name);e.inject(thistag.getElement("ul[class=tag-editor-group]"))}b=thistag.getElement("ul[class=tag-editor-group]").getElements("li");a.bindTagEvent(b)}}})).send(b)},apply:function(b){var c=a.filterUrl("setTag");a.selectedRow();if(a.url||
a.sigId||b)if(!a.value&&a.url)MessageBox.error("\u8bf7\u9009\u62e9\u8981\u64cd\u4f5c\u7684\u9879");else{var d=a.toQueryString();b&&(a.sigId=b);b=a.filterParam();W.page(c,{update:"messagebox",method:"post",data:d+b,onComplete:function(){if(a.url)for(var b in finderGroup)finderGroup[b].refresh();$("loadMask").hide()}})}},createTag:function(b){var c=b.dialog.getElement(".tag-editor-value").get("value").trim();if(c.contains(" ")||0==c.length)MessageBox.error("\u6807\u7b7e\u540d\u4e0d\u80fd\u4e3a\u7a7a\u4e14\u5176\u4e2d\u4e0d\u80fd\u6709\u7a7a\u683c\u7b26\u53f7!");
else if(this.getElement("ul[class=tag-editor-group]").getElements("li").some(function(a){return a.get("text").trim()==c}))MessageBox.error("\u6b64\u6807\u7b7e\u5df2\u5b58\u5728");else{var d=a.filterUrl("newTag");thistag=this;W.page(d,{update:"messagebox",method:"post",data:"tag_name="+c,onComplete:function(){b.close();a.selectedRow();var d=a.sigId||a.value&&0<a.value.length?$E("ul[class=theme_tag] li[class=selected_all]").clone():$E("ul[class=theme_tag] li[class=selected_none]").clone();d.appendText(c);
d.inject(thistag.getElement("ul[class=tag-editor-group]"));a.bindTagEvent(d);(a.value&&a.value.length||a.sigId)&&a.finderTag.fireEvent("apply")}})}}})}});
(function(){var a,b,c=function(c){if(!c){if(void 0!=a)return a;a=$("dialogProtoType").innerHTML;$("dialogProtoType").remove();return a}if(void 0!=b)return b;b=$("frameDialogProtoType").innerHTML;$("frameDialogProtoType").remove();return b};Dialog=new Class({Implements:[Options,Events],options:{onShow:$empty,onHide:$empty,onClose:$empty,onLoad:$empty,callback:!1,frameable:!1,width:750,height:400,dialogBoxWidth:10,title:"",dragable:!0,resizeable:!0,ajaksable:!0,singlon:!0,modal:!1,ajaxoptions:{update:!1,
evalScripts:!0,method:"get",autoCancel:!0}},initialize:function(a,b){if(!(this.currentRegionDialogs=$$(".dialog")).some(function(b){if(b.retrieve("serial")==a.toString().trim()&&"none"!=b.style.display)return b.inject(document.body),!0})){this.setOptions(b);b=this.options;this.UID=Native.UID++;var e=c(this.options.frameable);this.dialog=(new Element("div",{id:"dialog_"+this.UID,"class":"dialog",styles:{visibility:"hidden",zoom:1,opacity:0,zIndex:65534}})).setHTML(e).inject(document.body).store("serial",
a.toString().trim());this.options.callback&&this.dialog.store("callback",this.options.callback);this.dialog_head=$E(".dialog-head",this.dialog).addEvent("click",function(){1<$$(".dialog").length&&this.inject(document.body)}.bind(this.dialog));this.dialog_body=$E(".dialog-content-body",this.dialog);$E(".dialog-title",this.dialog_head).setText(b.title||"Dialog");$E(".dialog-btn-close",this.dialog_head).addEvents({click:function(a){a&&(new Event(a)).stop();this.close()}.bind(this),mousedown:function(a){(new Event(a)).stop()}});
b.dragable&&this.dragDialog();b.resizeable?this.dialog_body.makeResizable({handle:$E(".dialog-btn-resize",this.dialog),limit:{x:[200,0.9*window.getSize().x],y:[100,Math.max(window.getSize().y,window.getScrollSize().y)]},onDrag:function(){this.setDialogWidth()}.bind(this)}):$E(".dialog-btn-resize",this.dialog).hide();$extend(b.ajaxoptions,{update:this.dialog_body,elMap:{".mainHead":$E(".dialog-content-head",this.dialog),".mainFoot":$E(".dialog-content-foot",this.dialog)},onRequest:function(){this.setDialog_bodySize()}.bind(this),
onFailure:function(){this.close();alert("\u52a0\u8f7d\u5f39\u51fa\u5185\u5bb9\u5931\u8d25!")}.bind(this),onComplete:function(a){if("onComplete"in b)b.onComplete(a);this.onLoad.call(this,a)}.bind(this)});this.popup(a,b)}},onLoad:function(){var a=$E("*[isCloseDialogBtn]",this.dialog);a&&a.addEvent("click",this.close.bind(this));this.dialog.store("instance",this);this.show()},initContent:function(a,b,c){var b=b||this.options,g=this;if(!c){var h=arguments.callee;this.reload=function(){h(a,b,!0)}}if(b.frameable)this.dialog_body.set("src",
a).addEvent("load",function(){g.onLoad.call(g,this)});else if("string"==$type(a))b.ajaksable?W.page(a,b.ajaxoptions):(new Ajax(a,b.ajaxoptions)).request();else{try{this.dialog_body.empty().adopt(a)}catch(j){this.dialog_body.setHTML("\u5185\u5bb9\u52a0\u8f7d\u5931\u8d25.!")}c||this.onLoad.call(this)}},popup:function(a,b){(b.modal||b.singlon)&&MODALPANEL.show();$("loadMask").amongTo(window).show();this.fireEvent("onShow",this);this.initContent(a,b)},show:function(){this.setDialog_bodySize();$("loadMask").hide();
var a=this.currentRegionDialogs,b=a?a.length:0;b&&0<b?this.dialog.position($H(a[b-1].getPosition()).map(function(a){return a+20})).setOpacity(1):this.dialog.amongTo(window);this.fireEvent("onLoad",this)},close:function(){try{this.fireEvent("onClose",this.dialog)}catch(a){}this.dialog.style.display="none";window.ie&&$ES("iframe",this.dialog_body).remove();this.dialog.empty().remove();$("dialogdragghost_"+this.UID)&&$("dialogdragghost_"+this.UID).remove();if(0<this.currentRegionDialogs.length)return!1;
MODALPANEL.hide();return"nodialog"},hide:function(){this.fireEvent("onHide");this.close.call(this)},setDialog_bodySize:function(){this.dialog_body.setStyles({height:this.options.height-this.dialog_head.getSize().size.y-2*this.options.dialogBoxWidth,width:this.options.width-2*this.options.dialogBoxWidth});this.setDialogWidth()},setDialogWidth:function(){this.dialog.setStyle("width",this.dialog_body.getSize().size.x+2*this.options.dialogBoxWidth)},dragDialog:function(){var a=this.dialog,b=new Element("div",
{id:"dialogdragghost_"+this.UID});b.setStyles({position:"absolute",border:"2px #333333 dashed",cursor:"move",background:"#66CCFF",display:"none",opacity:0.3,zIndex:65535}).inject(document.body);this.addEvent("load",function(){b.setStyles(a.getCis())});new Drag(b,{handle:this.dialog_head,limit:{x:[0,window.getSize().x],y:[0,window.getSize().y]},onStart:function(){b.setStyles(a.getCis());b.show()},onComplete:function(){var c=b.getPosition();a.setStyles({top:c.y,left:c.x});b.hide()}})}})})();
function selectArea(a,b,c){if(a=$(a)){var d=a.value,f=a.getParent(),e=a.getNext(),g=a.getParent("*[package]"),h=g.getElement("input[type=hidden]"),j=function(a){var b=[],c=!0,d=$ES("select",g);d.each(function(a){"_NULL_"!=a.getValue()&&c?b.push($(a.options[a.selectedIndex]).get("text")):c=!1});"_NULL_"!=a.value?$E("input",g).value=g.get("package")+":"+b.join("/")+":"+a.value:$E("input",g).value=function(a){a=d.indexOf(a)-1;return 0<=a?g.get("package")+":"+b.join("/")+":"+d[a].value:""}(a)};"_NULL_"==
d&&e&&"span"==e.getTag()&&e.hasClass("x-areaSelect")?(a.nextSibling.empty(),j(a)):(d=$(a.options[a.selectedIndex]),d.get("has_c")?((new Request({onSuccess:function(b){var d=e&&"span"==e.getTag()&&e.hasClass("x-region-child")?e:(new Element("span",{"class":"x-region-child"})).inject(f);j(a);b?(d.set("html",b),h&&(h.retrieve("sel"+c,$empty)(),h.retrieve("onsuc",$empty)())):(a.getAllNext().remove(),j(a),h.retrieve("lastsel",$empty)(a))}})).get("index.php?ctl=default&act=sel_region&p[0]="+b+"&p[1]="+
c),$("shipping")&&$("shipping").setText("")):(a.getAllNext().remove(),j(a),!d.get("has_c")&&"_NULL_"!=d.value&&h.retrieve("lastsel",$empty)(a)))}}
Swiff.Uploader=new Class({Extends:Swiff,Implements:Events,options:{path:"Swiff.Uploader.swf",target:null,zIndex:9999,height:30,width:100,callBacks:null,params:{wMode:"opaque",menu:"false",allowScriptAccess:"always"},typeFilter:null,multiple:!0,queued:!0,verbose:!1,url:null,method:null,data:null,mergeData:!0,fieldName:null,fileSizeMin:1,fileSizeMax:null,allowDuplicates:!1,timeLimit:Browser.Platform.linux?0:30,buttonImage:null,policyFile:null,fileListMax:0,fileListSizeMax:0,instantStart:!1,appendCookieData:!1,
fileClass:null},initialize:function(a){this.addEvent("load",this.initializeSwiff,!0).addEvent("select",this.processFiles,!0).addEvent("complete",this.update,!0).addEvent("fileRemove",function(a){this.fileList.erase(a)}.bind(this),!0);this.setOptions(a);this.options.callBacks&&Hash.each(this.options.callBacks,function(a,b){this.addEvent(b,a)},this);this.options.callBacks={fireCallback:this.fireCallback.bind(this)};a=this.options.path;a.contains("?")||(a+="?noCache="+$time());this.options.container=
this.box=(new Element("span",{"class":"swiff-uploader-box"})).inject($(this.options.container)||document.body);if(this.target=$(this.options.target)){var b=window.getScroll();this.box.setStyles({position:"absolute",visibility:"visible",zIndex:this.options.zIndex,overflow:"hidden",height:1,width:1,top:b.y,left:b.x});this.parent(a,{params:{wMode:"transparent"},height:"100%",width:"100%"});this.target.addEvent("mouseenter",this.reposition.bind(this,[]));this.addEvents({buttonEnter:this.targetRelay.bind(this,
["mouseenter"]),buttonLeave:this.targetRelay.bind(this,["mouseleave"]),buttonDown:this.targetRelay.bind(this,["mousedown"]),buttonDisable:this.targetRelay.bind(this,["disable"])});this.reposition();window.addEvent("resize",this.reposition.bind(this,[]))}else this.parent(a);this.inject(this.box);this.fileList=[];this.size=this.uploading=this.bytesLoaded=this.percentLoaded=0;9>Browser.Plugins.Flash.version?this.fireEvent("fail",["flash"]):this.verifyLoad.delay(1E3,this)},verifyLoad:function(){this.loaded||
(this.object.parentNode?"none"==this.object.style.display?this.fireEvent("fail",["hidden"]):this.object.offsetWidth||this.fireEvent("fail",["empty"]):this.fireEvent("fail",["disabled"]))},fireCallback:function(a,b){if("file"==a.substr(0,4)){1<b.length&&this.update(b[1]);var c=b[0],d=this.findFile(c.id);this.fireEvent(a,d||c,5);if(d){var f=a.replace(/^file([A-Z])/,function(a,b){return b.toLowerCase()});d.update(c).fireEvent(f,[c],10)}}else this.fireEvent(a,b,5)},update:function(a){$extend(this,a);
this.fireEvent("queue",[this],10);return this},findFile:function(a){for(var b=0;b<this.fileList.length;b++)if(this.fileList[b].id==a)return this.fileList[b];return null},initializeSwiff:function(){this.remote("initialize",{width:this.options.width,height:this.options.height,typeFilter:this.options.typeFilter,multiple:this.options.multiple,queued:this.options.queued,url:this.options.url,method:this.options.method,data:this.options.data,mergeData:this.options.mergeData,fieldName:this.options.fieldName,
verbose:this.options.verbose,fileSizeMin:this.options.fileSizeMin,fileSizeMax:this.options.fileSizeMax,allowDuplicates:this.options.allowDuplicates,timeLimit:this.options.timeLimit,buttonImage:this.options.buttonImage,policyFile:this.options.policyFile});this.loaded=!0;this.appendCookieData()},targetRelay:function(a){this.target&&this.target.fireEvent(a)},reposition:function(a){a=a||this.target&&this.target.offsetHeight?this.target.getCoordinates(this.box.getOffsetParent()):{top:window.getScrollTop(),
left:0,width:40,height:40};this.box.setStyles(a);this.fireEvent("reposition",[a,this.box,this.target])},setOptions:function(a){a&&(a.url&&(a.url=Swiff.Uploader.qualifyPath(a.url)),a.buttonImage&&(a.buttonImage=Swiff.Uploader.qualifyPath(a.buttonImage)),this.parent(a),this.loaded&&this.remote("setOptions",a));return this},setEnabled:function(a){this.remote("setEnabled",a)},start:function(){this.fireEvent("beforeStart");this.remote("start")},stop:function(){this.fireEvent("beforeStop");this.remote("stop")},
remove:function(){this.fireEvent("beforeRemove");this.remote("remove")},fileStart:function(a){this.remote("fileStart",a.id)},fileStop:function(a){this.remote("fileStop",a.id)},fileRemove:function(a){this.remote("fileRemove",a.id)},fileRequeue:function(a){this.remote("fileRequeue",a.id)},appendCookieData:function(){var a=this.options.appendCookieData;if(a){var b={};document.cookie.split(/;\s*/).each(function(a){a=a.split("=");2==a.length&&(b[decodeURIComponent(a[0])]=decodeURIComponent(a[1]))});var c=
this.options.data||{};"string"==$type(a)?c[a]=b:$extend(c,b);this.setOptions({data:c})}},processFiles:function(a,b,c){var d=this.options.fileClass||Swiff.Uploader.File,f=[],e=[];a&&(a.each(function(a){var b=new d(this,a);b.validate()?(this.size+=a.size,this.fileList.push(b),e.push(b),b.render()):(b.remove.delay(10,b),f.push(b))},this),this.fireEvent("selectSuccess",[e],10));if(b||f.length)f.extend(b?b.map(function(a){return new d(this,a)},this):[]).each(function(a){a.invalidate().render()}),this.fireEvent("selectFail",
[f],10);this.update(c);this.options.instantStart&&e.length&&this.start()}});
$extend(Swiff.Uploader,{STATUS_QUEUED:0,STATUS_RUNNING:1,STATUS_ERROR:2,STATUS_COMPLETE:3,STATUS_STOPPED:4,log:function(){},unitLabels:{b:[{min:1,unit:"B"},{min:1024,unit:"kB"},{min:1048576,unit:"MB"},{min:1073741824,unit:"GB"}],s:[{min:1,unit:"s"},{min:60,unit:"m"},{min:3600,unit:"h"},{min:86400,unit:"d"}]},formatUnit:function(a,b,c){var d=Swiff.Uploader.unitLabels["bps"==b?"b":b],f="bps"==b?"/s":"",e;e=d.length;var g;if(1>a)return"0 "+d[0].unit+f;if("s"==b){f=[];for(e-=1;0<=e;e--)if(g=Math.floor(a/
d[e].min))if(f.push(g+" "+d[e].unit),a-=g*d[e].min,!a)break;return!1===c?f:f.join(c||", ")}for(e-=1;0<=e&&!(g=d[e].min,a>=g);e--);return(a/g).toFixed(1)+" "+d[e].unit+f}});Swiff.Uploader.qualifyPath=function(){var a;return function(b){(a||(a=new Element("a"))).href=b;return a.href}}();
Swiff.Uploader.File=new Class({Implements:Events,initialize:function(a,b){this.base=a;this.update(b)},update:function(a){return $extend(this,a)},validate:function(){var a=this.base.options;return a.fileListMax&&this.base.fileList.length>=a.fileListMax?(this.validationError="fileListMax",!1):a.fileListSizeMax&&this.base.size+this.size>a.fileListSizeMax?(this.validationError="fileListSizeMax",!1):!0},invalidate:function(){this.invalid=!0;this.base.fireEvent("fileInvalid",this,10);return this.fireEvent("invalid",
this,10)},render:function(){return this},setOptions:function(a){a&&(a.url&&(a.url=Swiff.Uploader.qualifyPath(a.url)),this.base.remote("fileSetOptions",this.id,a),this.options=$merge(this.options,a));return this},start:function(){this.base.fileStart(this);return this},stop:function(){this.base.fileStop(this);return this},remove:function(){this.base.fileRemove(this);return this},requeue:function(){this.base.fileRequeue(this)}});
var mceInstance=new Class({Implements:[Events,Options],options:{acitve:!1,maskOpacity:0.5,autoHeight:!1,cleanup:!0,includeBase:!0},initialize:function(a,b){this.seri=a;var c="mce_body_"+a;this.el=$(c);this.setOptions(b);this.input=$E("textarea",this.el).setProperty("ishtml","true");this.frmContainer=$(c+"_frm_container");var d=this,e=this.options.includeBase,f=0,g=this.frm=(new Element("iframe",{src:"blank.html?editor",id:c+"_frm",name:c+"_frm",frameborder:0,border:0})).addEvent("load",function(){if(!f){f=
1;var b=g.contentWindow,c='<base href="'+SHOPBASE+'">',c="<html><head>"+(e?c:"")+'<script>window.onerror=function(){return false;}<\/script><link rel="stylesheet" type="text/css" href=".'+SHOPADMINDIR+'wysiwyg_editor.css"/></head><body spellcheck="false" id="'+a+'">'+(d.cleanup(d.input.getProperty("value"))||"&nbsp;")+"</body></html>";b.document.open();b.document.write(c);b.document.close();b.document.designMode="on";b=new Window(b);(new Document(b.document)).addEvent("mousedown",d.active.bind(d));
d.win=b;d.doc=b.document;d.input.setAttribute("filled","true");this.removeEvent("load",arguments.callee)}});g.inject(this.frmContainer);this.input.getValue=function(){if(!this.input.getAttribute("filled"))return"textarea-unfilled";if("textarea"==this.editType)return this.input.value;var a=this.getValue();return this.input.value=a}.bind(this);this.options.autoHeight&&this.autoHeight.call(this);$(c)&&(this.el=$(c).setStyle("visibility","visible"))},autoHeight:function(){try{this.frm.setStyle("height",
this.doc.body.offsetHeight+50)}catch(a){}},setValue:function(){this.doc.body.innerHTML=this.input.value},getValue:function(){return this.cleanup(this.doc.body.innerHTML)},regexpReplace:function(a,b,c,d){if(null==a)return a;"undefined"==typeof d&&(d="g");return a.replace(RegExp(b,d),c)},cleanup:function(a){var b=[[/<br class\="webkit-block-placeholder">/gi,"<br />"],[/<span class="Apple-style-span">(.*)<\/span>/gi,"$1"],[/ class="Apple-style-span"/gi,""],[/<span style="">/gi,""],[/^([\w\s]+.*?)<div>/i,
"<p>$1</p><div>"],[/<div>(.+?)<\/div>/ig,"<p>$1</p>"]],c=[[/<em>\s*<\/em>/gi,""],[/<strong>\s*<\/strong>/gi,""],[/<br\s*\/?>/gi,"<br/>"],[/<br\/?>\s*<\/(h1|h2|h3|h4|h5|h6|li|p)/gi,"</$1"],[/<p>\s*<br\/?>\s*<\/p>/gi,"<p>\u00a0</p>"],[/<p>(&nbsp;|\s)*<\/p>/gi,"<p>\u00a0</p>"],[/<\/p>\s*<\/p>/g,"</p>"],[/<[^> ]*/g,function(a){return a.toLowerCase()}],[/<[^>]*>/g,function(a){return a=a.replace(/ [^=]+=/g,function(a){return a.toLowerCase()})}],[/<[^>]*>/g,function(a){return a=a.replace(/( [^=]+=)([^"][^ >]*)/g,
'$1"$2"')}]];c.extend([[/(<(?:img|input)[^\/>]*)>/g,"$1 />"]]);c.extend([[/<li>\s*<div>(.+?)<\/div><\/li>/g,"<li>$1</li>"],[/<span style="font-weight: bold;">(.*)<\/span>/gi,"<strong>$1</strong>"],[/<span style="font-style: italic;">(.*)<\/span>/gi,"<em>$1</em>"],[/<b\b[^>]*>(.*?)<\/b[^>]*>/gi,"<strong>$1</strong>"],[/<i\b[^>]*>(.*?)<\/i[^>]*>/gi,"<em>$1</em>"],[/<u\b[^>]*>(.*?)<\/u[^>]*>/gi,'<span style="text-decoration: underline;">$1</span>'],[/<p>[\s\n]*(<(?:ul|ol)>.*?<\/(?:ul|ol)>)(.*?)<\/p>/ig,
"$1<p>$2</p>"],[/<\/(ol|ul)>\s*(?!<(?:p|ol|ul|img).*?>)((?:<[^>]*>)?\w.*)$/g,"</$1><p>$2</p>"],[/<br[^>]*><\/p>/g,"</p>"],[/<p([^>]*)>(.*?)<\/p>(?!\n)/g,"<p$1>$2</p>\n"],[/<\/(ul|ol|p)>(?!\n)/g,"</$1>\n"],[/><li>/g,">\n\t<li>"],[/([^\n])<\/(ol|ul)>/g,"$1\n</$2>"],[/([^\n])<img/ig,"$1\n<img"],[/^\s*$/g,""]]);Browser.Engine.webkit&&c.extend(b);c.each(function(b){a=a.replace(b[0],b[1])});return a=a.trim()},active:function(){this.actived||(this.actived=!0,this.doc.addEvent("click",function(a){this.fireEvent("docClick",
new Event(a))}.bind(this)));this.fireEvent("active",this)},sleep:function(){}}),mceHandler=new Class({Implements:[Events,Options],initialize:function(a,b,c){try{this.el=$(a),$ES("img",this.el).each(function(a){new DropMenu(a)}),this.setOptions(c),b&&(b.length?b.each(this.addInstance.bind(this)):this.addInstance.call(this,b))}catch(d){alert(d.message)}"style_init"in this&&this.style_init()},addInstance:function(a){a.addEvent("active",this.active.bind(this));a.addEvent("docClick",this.docClick.bind(this))},
active:function(a){(this.inc=a)&&this.inc.sleep.call(this.inc)},docClick:function(a){this.currentEl=a.target||a.srcElement;this.fireEvent("click",a)},getRange:function(){return!this.inc?!1:this.range?this.range:window.ie?this.inc.doc.selection.createRange():this.inc.win.getSelection()},getSelection:function(){return window.ie?this.inc.doc.selection:this.inc.win.getSelection()},getRangeText:function(){return window.ie?this.inc.doc.selection.createRange().text:this.inc.win.getSelection().toString()},
exec:function(a,b){if(!this.busy&&(this.busy=!0,a&&this.inc)){this.dlg&&(window.ie&&this.range&&this.range.select(),this.dlg.hide(),this.dlg=null);switch(a){case "formatblock":this.inc.doc.execCommand("FormatBlock",!1,"<"+b+">");break;case "wrap":this.exec("insertHTML",b[0]+this.getRangetext()+b[1]);break;case "insertHTML":window.ie&&this.getSelection().clear();if(this.replaceEl&&this.replaceEl.tagName&&!this.replaceEl.tagName.match(/body/g))try{var c=this.inc.doc.createElement("div");c.innerHTML=
b;c=c.firstChild;this.replaceEl.parentNode.replaceChild(c,this.replaceEl)}catch(d){MessageBox.error(d)}finally{this.replaceEl=null}else window.ie?(this.inc.win.focus(),this.range=null,this.getRange().pasteHTML(b)):this.inc.doc.execCommand("inserthtml",!1,b);break;default:try{this.inc.doc.execCommand(a,!1,b)}catch(e){MessageBox.error(e)}}this.busy=!1}},mklink:function(){if(this.inc){this.replaceEl=null;var a=this.currentEl,b;if("body"!=a.tagName.toLowerCase()||this.getRangeText()){if(a&&a.tagName&&
"img"==a.tagName.toLowerCase())return MessageBox.error("\u5bf9\u4e0d\u8d77,\u76ee\u524d\u4e0d\u652f\u6301\u5bf9\u5df2\u63d2\u5165\u56fe\u7247\u589e\u52a0\u8d85\u8fde\u63a5.");a&&a.tagName&&"a"==a.tagName.toLowerCase()?(b={text:this.currentEl.innerHTML,href:this.currentEl.href,alt:this.currentEl.alt,title:this.currentEl.title,target:this.currentEl.target},this.replaceEl=a):b={text:this.getRangeText()};this.dialog("link",{height:null,width:450,ajaxoptions:{method:"post",data:b}})}}},editHTML:function(){var a=
this;if(this.inc){var b=$("mce_handle_htmledit_"+this.inc.seri),c=$("mce_handle_"+this.inc.seri);this.inc.input.getValue();b.show();c.hide();this.inc.frm.getSize();this.inc.input.show();this.inc.frmContainer.hide();b.getElement(".returnwyswyg").addEvent("click",function(){c.show();b.hide();a.inc.doc.body.innerHTML=a.inc.input.value.clean().trim();a.inc.input.hide();a.inc.frmContainer.show();a.inc.editType="wysiwyg";this.removeEvent("click",arguments.callee)});this.inc.editType="textarea"}},dialog:function(a,
b){this.inc&&(this.inc.win.focus(),this.range=null,this.range=this.getRange(),b=$cleanNull(b),this.dlg=new Dialog("index.php?ctl=editor&act="+a,$merge(b,{modal:!0})),window.curEditor=this)},queryValue:function(a,b){"align"==a&&(a="justifyRight");try{return b?this.inc.doc.queryCommandState(a):this.inc.doc.queryCommandValue(a)}catch(c){}},queryValues:function(){for(var a={},b="Bold Italic Underline strikeThrough subscript superscript insertOrderedList insertUnorderedList".split(" "),c=0;c<arguments.length;c++)a[arguments[c]]=
this.queryValue(arguments[c],b.contains(arguments[c]));return a}}),editor_style_1=new Abstract({style_init:function(){this.mce_handle=this.el;this.addEvent("click",this.status.bind(this));this.addEvent("click",function(){if(!this.$init){this.mce_handle.setOpacity(1);"&nbsp;"==this.inc.doc.body.innerHTML.substr(0,6)&&(this.inc.doc.body.innerHTML=this.inc.doc.body.innerHTML.slice(6));var a=this;$ES("img",this.mce_handle).addEvent("click",function(){this.inc.win.focus()}.bind(this));$E(".ft_select",
this.mce_handle).addEvent("change",function(){var b=this.getValue();if(b){window.ie&&a.range&&a.range.select();a.set("fontName",b)}});$E(".fs_select",this.mce_handle).addEvent("change",function(){var b=this.getValue();if(b){window.ie&&a.range&&a.range.select();a.set("fontSize",b)}});$$($E(".fontColorPicker",this.el),$E(".fontBGColorPicker",this.el),$E(".ft_select",this.mce_handle),$E(".fs_select",this.mce_handle)).addEvent("click",function(){this.range=null;if(window.ie&&this.getSelection().type.toLowerCase()!=
"none")this.range=this.getRange();if(!window.ie)this.range=this.getRange()}.bind(this));new GoogColorPicker($E(".fontColorPicker",this.el),{onSelect:function(a){window.ie&&this.range&&this.range.select();this.set("forecolor",a)}.bind(this),onShow:function(){window.ie&&this.range&&this.range.select()}.bind(this)});new GoogColorPicker($E(".fontBGColorPicker",this.el),{onSelect:function(a){if(window.ie){this.range&&this.range.select();return this.set("backColor",a)}this.set("hilitecolor",a)}.bind(this),
onShow:function(){window.ie&&this.range&&this.range.select()}.bind(this)})}this.$init=!0}.bind(this));this.styler=$ES(".x-section",this.el);this.stylerEl=$ES(".x-style",this.el);this.align=$ES(".x-align",this.el);this.setting=$ES(".x-enable",this.el)},status:function(a){new Event(a);this.target||(this.target=a.target.getElementsByTagName("body")[0]||a.target);a=this.target.style;"transparent"==a["background-color"]&&(a["background-color"]="#fff");this.styler.setStyle("background-color","transparent"==
a["background-color"]?"#fff":a["background-color"]);this.stylerEl.setStyle("color",a.color);var b=this.queryValues("Bold","Italic","Underline","strikeThrough","subscript","superscript","align","CreateLink","FontName","FontSize","ForeColor","FormatBlock","insertOrderedList","insertUnorderedList");"center"==b.align?(this.align[0].parentNode.className="",this.align[1].parentNode.className="in",this.align[2].parentNode.className=""):"right"==b.align?(this.align[0].parentNode.className="",this.align[1].parentNode.className=
"",this.align[2].parentNode.className="in"):(this.align[0].parentNode.className="left"==b.align?"in":"",this.align[1].parentNode.className="",this.align[2].parentNode.className="");this.setting.each(function(a){a.parentNode.className=b[a.getAttribute("value")]?"in":""})},set:function(a,b){if(this.inc&&this.inc.win){window.ie&&this.inc.win.focus();this.exec(a,b);try{this.status.call(this)}catch(c){}}}});
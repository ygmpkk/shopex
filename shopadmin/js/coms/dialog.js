(function(){var c,b;var a=function(d){if(!d){if(undefined!=c){return c}c=$("dialogProtoType").innerHTML;$("dialogProtoType").remove();return c}if(undefined!=b){return b}b=$("frameDialogProtoType").innerHTML;$("frameDialogProtoType").remove();return b};Dialog=new Class({Implements:[Options,Events],options:{onShow:$empty,onHide:$empty,onClose:$empty,onLoad:$empty,callback:false,frameable:false,width:750,height:400,dialogBoxWidth:10,title:"",dragable:true,resizeable:true,ajaksable:true,singlon:true,modal:false,ajaxoptions:{update:false,evalScripts:true,method:"get",autoCancel:true}},initialize:function(f,e){var d=this.currentRegionDialogs=$$(".dialog");if(d.some(function(i,h){if(i.retrieve("serial")==f.toString().trim()&&i.style.display!="none"){i.inject(document.body);return true}})){return}this.setOptions(e);e=this.options;this.UID=(Native.UID)++;var g=a(this.options.frameable);this.dialog=new Element("div",{id:"dialog_"+this.UID,"class":"dialog",styles:{visibility:"hidden",zoom:1,opacity:0,zIndex:65534}}).setHTML(g).inject(document.body).store("serial",f.toString().trim());if(this.options.callback){this.dialog.store("callback",this.options.callback)}this.dialog_head=$E(".dialog-head",this.dialog).addEvent("click",function(h){if($$(".dialog").length>1){this.inject(document.body)}}.bind(this.dialog));this.dialog_body=$E(".dialog-content-body",this.dialog);$E(".dialog-title",this.dialog_head).setText(e.title||"Dialog");$E(".dialog-btn-close",this.dialog_head).addEvents({click:function(h){if(h){h=new Event(h).stop()}this.close()}.bind(this),mousedown:function(h){new Event(h).stop()}});if(e.dragable){this.dragDialog()}if(e.resizeable){this.dialog_body.makeResizable({handle:$E(".dialog-btn-resize",this.dialog),limit:{x:[200,window.getSize().x*0.9],y:[100,Math.max(window.getSize().y,window.getScrollSize().y)]},onDrag:function(){this.setDialogWidth()}.bind(this)})}else{$E(".dialog-btn-resize",this.dialog).hide()}$extend(e.ajaxoptions,{update:this.dialog_body,elMap:{".mainHead":$E(".dialog-content-head",this.dialog),".mainFoot":$E(".dialog-content-foot",this.dialog)},onRequest:function(){this.setDialog_bodySize()}.bind(this),onFailure:function(){this.close();alert("加载弹出内容失败!")}.bind(this),onComplete:function(h){if("onComplete" in e){e.onComplete(h)}this.onLoad.call(this,h)}.bind(this)});this.popup(f,e)},onLoad:function(e){var d=$E("*[isCloseDialogBtn]",this.dialog);if(d){d.addEvent("click",this.close.bind(this))}this.dialog.store("instance",this);this.show()},initContent:function(g,f,h){f=f||this.options;var j=this;if(!h){var d=arguments.callee;this.reload=function(){d(g,f,true)}}if(f.frameable){this.dialog_body.set("src",g).addEvent("load",function(){j.onLoad.call(j,this)});return}if($type(g)=="string"){if(f.ajaksable){W.page(g,f.ajaxoptions)}else{new Ajax(g,f.ajaxoptions).request()}}else{try{this.dialog_body.empty().adopt(g)}catch(i){this.dialog_body.setHTML("内容加载失败.!")}if(!h){this.onLoad.call(this)}}},popup:function(e,d){if(d.modal||d.singlon){MODALPANEL.show()}$("loadMask").amongTo(window).show();this.fireEvent("onShow",this);this.initContent(e,d)},show:function(){this.setDialog_bodySize();$("loadMask").hide();var d=this.currentRegionDialogs;var e=d?d.length:0;if(e&&e>0){this.dialog.position($H(d[e-1].getPosition()).map(function(f){return f+=20})).setOpacity(1)}else{this.dialog.amongTo(window)}this.fireEvent("onLoad",this)},close:function(){try{this.fireEvent("onClose",this.dialog)}catch(d){}this.dialog.style.display="none";if(window.ie){$ES("iframe",this.dialog_body).remove()}this.dialog.empty().remove();$("dialogdragghost_"+this.UID)?$("dialogdragghost_"+this.UID).remove():"";if(this.currentRegionDialogs.length>0){return false}MODALPANEL.hide();return"nodialog"},hide:function(){this.fireEvent("onHide");this.close.call(this)},setDialog_bodySize:function(){this.dialog_body.setStyles({height:this.options.height-this.dialog_head.getSize().size.y-this.options.dialogBoxWidth*2,width:this.options.width-this.options.dialogBoxWidth*2});this.setDialogWidth()},setDialogWidth:function(){this.dialog.setStyle("width",this.dialog_body.getSize().size.x+this.options.dialogBoxWidth*2)},dragDialog:function(){var d=this.dialog;var e=new Element("div",{id:"dialogdragghost_"+this.UID});e.setStyles({position:"absolute",border:"2px #333333 dashed",cursor:"move",background:"#66CCFF",display:"none",opacity:0.3,zIndex:65535}).inject(document.body);this.addEvent("load",function(f){e.setStyles(d.getCis())});new Drag(e,{handle:this.dialog_head,limit:{x:[0,window.getSize().x],y:[0,window.getSize().y]},onStart:function(){e.setStyles(d.getCis());e.show()},onComplete:function(){var f=e.getPosition();d.setStyles({top:f.y,left:f.x});e.hide()}})}})})();
Element.extend({getCis:function(){return this.getCoordinates()}});String.extend({format:function(){if(0==arguments.length)return this;var a=arguments;return this.replace(/{(\d+)?}/g,function(b,c){return a[c.toInt()]||""})}});
var Scroller=new Class({Implements:[Events,Options],options:{area:20,velocity:1,onChange:function(a,b){this.element.scrollTo(a,b)}},initialize:function(a,b){this.setOptions(b);this.element=$(a);this.listener="element"!=$type(this.element)?$(this.element.getDocument().body):this.element;this.timer=null;this.coord=this.getCoords.bind(this)},start:function(){this.listener.addEvent("mousemove",this.coord)},stop:function(){this.listener.removeEvent("mousemove",this.coord);this.timer=$clear(this.timer)},
getCoords:function(a){this.page="body"==this.listener.get("tag")?a.client:a.page;this.timer||(this.timer=this.scroll.periodical(50,this))},scroll:function(){var a=this.element.getSize(),b=this.element.getScroll(),c=this.element.getPosition(),d={x:0,y:0},e;for(e in this.page)this.page[e]<this.options.area+c[e]&&0!=b[e]?d[e]=(this.page[e]-this.options.area-c[e])*this.options.velocity:this.page[e]+this.options.area>a[e]+c[e]&&a[e]+a[e]!=b[e]&&(d[e]=(this.page[e]-a[e]+this.options.area-c[e])*this.options.velocity);
(d.y||d.x)&&this.fireEvent("change",[b.x+d.x,b.y+d.y])}}),DragDropPlus=new Class({Implements:[Options,Events],options:{ddScope:window,onInitDrags:$empty,onInitDrops:$empty,onEdit:$empty,onDelete:$empty},initialize:function(a,b,c){this.dragSelecterString=a;this.dropSelecterString=b;this.drags=$$(a);this.drops=$$(b);this.setOptions(c);this.options.ddScope&&(this.winScroll=new Scroller(this.options.ddScope,{velocity:1}));if(this.drag_operate_box=$("drag_operate_box"))this.drag_operate_box.store("lock",
!1),this.drag_handle_box=$E(".drag_handle_box",this.drag_operate_box),this.dobFx=this.drag_operate_box.effects({fps:50,duration:200,link:"cancel"}),this.dragSign=$("drag_ghost_box").inject(document.body),this.initDOBBase(this.drops),this.initDrags(this.drags),this.initDrops(this.drops)},checkEmptyDropPanel:function(a){a&&a.hasClass(this.dropSelecterString.substring(1,this.dropSelecterString.length))&&(a.getElement(this.dragSelecterString)?a.getElement(".empty_drop_box")&&a.getElement(".empty_drop_box").remove():
a.getElement(".empty_drop_box")||((new Element("div",{"class":"empty_drop_box"})).setText("\u7a7a\u677f\u5757\u533a\u57df").inject(a),this.dragmoveInstance&&(a.store("droppanel",!0),this.dragmoveInstance.droppables.include(a))))},dragLeave:function(){},dargInject:function(a,b){var c=this.dragging;if(c){var d="inside";b.retrieve("droppanel")||(d=c.getAllPrevious().contains(b)?"before":"after");c.inject(b,d);this.checkEmptyDropPanel(a.retrieve("droped"));this.checkEmptyDropPanel(b);a.store("droped",
b);this.dragSign.setStyles(c.getCis())}},getDropables:function(){var a=this.dragging;return $A(this.drags).remove(a).concat(this.drops.filter(function(a){if($E(this.dragSelecterString,a))return a.store("droppanel",!1),!1;a.store("droppanel",!0);return!0}.bind(this)))},initDOBBase:function(a){var b=this.drag_operate_box,c=this.drag_handle_box,d=this;if(a){var e=this.winScroll;$E(".dhb_edit",c).addEvent("click",function(a){a.stop();this.fireEvent("onEdit",[b.retrieve("drag")],this)}.bind(this));$E(".dhb_del",
c).addEvent("click",function(a){a.stop();this.fireEvent("onDelete",[b.retrieve("drag")],this)}.bind(this));$E(".dhb_title",c).addEvents({mousedown:function(a){d.dragging=b.retrieve("drag");b.setStyle("left",b.getPosition().x+10);b.store("droped",d.dragging.getParent(d.dropSelecterString));b.store("lock",!0);d.dragmoveInstance=new Drag.Move(b,{handle:this,droppables:d.getDropables.call(d),snap:0,onEnter:d.dargInject.bind(d),onStart:function(){d.dragSign.setStyles($extend(d.dragging.getCis(),{visibility:"visible"}));
e&&e.start()},onComplete:function(){e&&e.stop();d.dobFx.start(d.dragging.getCis()).chain(function(){this.element.store("lock",!1)})}});d.dragmoveInstance.start(a)},mouseup:function(a){d.dragmoveInstance.stop(a);d.dragmoveInstance.cancel(a);d.dragmoveInstance.detach();d.dragSign&&d.dragSign.setStyle("visibility","hidden")}})}},initDrags:function(a){var b=this;a.each(function(c){b.fireEvent("onInitDrags",[c,a],this);c.addEvents({mouseenter:function(){var a=b.drag_operate_box;a.retrieve("lock")||($E(".dhb_title",
a).setHTML(c.get("title")||"&nbsp;"),a.setStyle("visibility","visible"),a.store("drag",this),a=c.getCis(),a=$merge(a,{height:a.height.limit(24,1E3)}),b.dobFx.start(a))}});$ES("a",c).removeEvents().addEvent("click",function(a){a.stop()});$ES("form",c).removeEvents().addEvent("submit",function(a){a.stop()})})},initDrops:function(a){var b=this;a.each(function(c){b.checkEmptyDropPanel(c);b.fireEvent("onInitDrops",[c,a],this)})}}),Widgets=new Class({Extends:DragDropPlus,initialize:function(a,b,c){this.parent(a,
b,c);this.drags.each(function(a){a.getProperty("ishtml")&&$E(".content-html",a).setHTML($E(".content-textarea",a).getValue())})},inject:function(a,b){this.addWidget(this.curEl,a,b?b:this.theme)},newWidget:function(a){this.curDrop=a;this.curdialog=new parent.Dialog(top.SHOPADMINDIR+"index.php?ctl=content/pages&act=widgets",{width:800,height:500,title:"\u589e\u52a0\u9875\u9762\u7248\u5757",modal:!0,resizeable:!0,onShow:function(){this.dialog_body.id="dialogContent"}})},htmlarea:function(){},ghostDrop:function(a,
b){this.drag_operate_box.setStyle("visibility","hidden").store("lock",!0);$("tempDropBox")&&$("tempDropBox").empty().remove();parent._showWidgets_tip("\u5728\u60a8\u9700\u8981\u653e\u5165\u7248\u5757\u7684\u84dd\u8272\u533a\u57df\u70b9\u51fb\u9f20\u6807\u5de6\u952e\u5373\u53ef\u6dfb\u52a0\u7248\u5757\u3002\u70b9\u51fb\u9f20\u6807\u53f3\u952e\u5219\u53d6\u6d88\u6dfb\u52a0\u7248\u5757\u64cd\u4f5c\u3002");this.tempDropBox=(new Element("div",{id:"tempDropBox"})).inject(document.body);try{this.drops.each(function(c,
e){if(c){var h=this,g=c.getCis();5<g.height&&5<g.width&&(g.height-=5,g.width-=5);(new Element("div",{"class":"widgets_drop_ghost",styles:$merge(g,{opacity:0.3}),text:"["+(e+1)+"]",title:"\u70b9\u51fb\u6b64\u5904\uff0c\u5c06["+a.name+"]\u7248\u5757\u6dfb\u52a0\u5230\u6b64\u533a\u57df"})).addEvents({mouseover:function(){this.addClass("widgets_drop_ghost_on")},mouseleave:function(){this.removeClass("widgets_drop_ghost_on")},click:function(){h.tempDropBox.empty();h.addWidget(c,a,b);h.drag_operate_box.store("lock",
false);parent._hideWidgets_tip()}}).inject(h.tempDropBox)}},this)}catch(c){alert(JSON.encode(c))}document.body.addEvent("contextmenu",function(a){a.stop();$("tempDropBox")&&$("tempDropBox").empty().remove();parent._hideWidgets_tip();this.drag_operate_box.store("lock",!1);document.body.removeEvent("contextmenu",arguments.callee)}.bind(this))},copyWidgets:function(){},addWidget:function(a,b,c){this.curdialog=new top.Dialog(top.SHOPADMINDIR+"index.php?ctl=system/template&act=doAddWidgets&p[0]="+b.name+
"&p[1]="+c,{modal:!0,title:"\u589e\u52a0\u7248\u5757:["+b.label+"]",ajaksable:!1});this.curDrop=a},editWidget:function(a){var b={modal:!0,title:"\u4fee\u6539\u7248\u5757:["+a.label+"]",ajaksable:!1};this.curWidget=$(a);if(a.get("ishtml"))return this.curdialog=new top.Dialog(top.SHOPADMINDIR+"index.php?ctl=content/pages&act=editHtml",$merge(b,{ajaksable:!0,ajaxoptions:{method:"post",data:"htmls="+encodeURIComponent($E(".content-html",a).getHTML().clean().trim())},title:"\u7f16\u8f91HTML"}));this.curdialog=
new top.Dialog(top.SHOPADMINDIR+"index.php?ctl=system/template&act=editWidgets&p[0]="+a.get("widgets_id")+"&p[1]="+a.get("widgets_theme"),b)},saveWidgets:function(){var a=[],b={};this.drops.each(function(c){$ES(".shopWidgets_box",c).each(function(b){a.push("widgets[{widgetsId}]={baseFile}:{baseSlot}:{baseId}".substitute({widgetsId:b.get("widgets_id"),baseFile:this.bf,baseSlot:this.bs,baseId:this.bi}));if(b.get("ishtml")){var c=$E(".content-html",b);a.push("html[{widgetsId}]={htmls}".substitute({widgetsId:b.get("widgets_id"),
htmls:encodeURIComponent(c.getHTML())}))}},{mce:this.mce,bf:c.get("base_file"),bs:c.get("base_slot"),bi:c.get("base_id")});b[c.get("base_file")]=1}.bind(this));for(f in b)a.push("files[]={file}".substitute({file:f}));(new XHR({method:"post",onRequest:function(){top.MODALPANEL.show();top.$("loadMask").amongTo(top.window).show()},onSuccess:function(a){try{a=Json.evaluate(a);for(dom in a)$chk($(dom))&&$chk(a[dom])&&$(dom).setProperty("widgets_id",a[dom]);top.MessageBox.success("\u4fdd\u5b58\u6210\u529f!")}catch(b){top.MessageBox.error("\u4fdd\u5b58\u5931\u8d25"+
b.message)}finally{top.MODALPANEL.hide(),top.$("loadMask").hide()}}})).send(top.SHOPADMINDIR+"index.php?ctl=system/template&act=widgetsSave",a.join("&"))}});
window.addEvent("domready",function(){parent.$("loadMask")&&parent.$("loadMask").hide().getElement(".loading_msg").set("text","\u6b63\u5728\u52a0\u8f7d...");parent.MODALPANEL&&parent.MODALPANEL.hide();this.shopWidgets=new Widgets(".shopWidgets_box",".shopWidgets_panel",{onEdit:function(a){shopWidgets.editWidget(a)},onDelete:function(a){if(confirm("\u786e\u5b9a\u5220\u9664\u6b64\u7248\u5757?")){var b=this.drag_operate_box,c=this;b.setStyle("visibility","hidden").store("lock",!0);var d=a.getParent();
a.effect("opacity").start(0).chain(function(){a.remove();b.store("lock",!1);c.checkEmptyDropPanel(d)})}}})});
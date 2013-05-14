<?php if(!function_exists('tpl_input_select')){ require(CORE_DIR.'/include_v5/smartyplugins/input.select.php'); } if(!function_exists('tpl_block_help')){ require(CORE_DIR.'/admin/smartyplugin/block.help.php'); } ?><form method="post" action="index.php?ctl=goods/virtualcat&act=doImport"> <div class="tableform"> <div class="division"> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr align="left" valign="middle"> <td width="48%"> <h4>选择商品分类源节点：</h4> <div id='virtualcatTree' class='x-tree-list' style="border:1px solid #2c6c8a; padding:5px; margin:5px 0 5px 0; "></div> <font class="fontcolorGray">注：请选择需要导入的商品分类目录</font></td> <td width="4%" align="center" style="vertical-align:middle; " ><h2 style="color:#2c6c8a;">>></h2></td> <td width="48%"> <h4>选择前台虚拟分类目标节点：</h4> <?php echo tpl_input_select(array('name' => "vCat_id",'value' => $this->_vars['cat']['parent_id'],'rows' => $this->_vars['catList'],'valueColumn' => "cat_id",'labelColumn' => "cat_name"), $this);?> </td> </tr> <tr align="left" valign="middle"> <td colspan="3"><span class='lnk' onclick='$("virtualcatTree").empty();initTreelist(4);$(this).remove();'>展开全部</span><br><input type="checkbox" name="defaultfilter" checked>同时将原商品分类添加为虚拟分类的过滤条件 &nbsp; &nbsp; <?php $this->_tag_stack[] = array('tpl_block_help', array()); tpl_block_help(array(), null, $this); ob_start(); ?>如果未选中此项，新导入的虚拟分类将没有任何过滤条件，即在商店前台点击该虚拟分类时会列出整个商店的全部商品<br /><br />如果勾选此项，新导入的虚拟分类将把原商品分类作为过滤条件，即前台该虚拟分类仅列出原商品分类下的商品<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_content = tpl_block_help($this->_tag_stack[count($this->_tag_stack) - 1][1], $_block_content, $this); echo $_block_content; array_pop($this->_tag_stack); $_block_content=''; ?></td> </tr> </table> </div> </div> <div class="table-action"> <button type="submit" class="btn"><span><span>开始导入</span></span></button> </div> </form> <script>
function initTreelist(step){
   new TreeList({
                           remoteURL:'index.php?ctl=goods/virtualcat&act=getGoodsCatById&{param}={value}',
                           remoteParamKey:'p[0]',
                           container:'virtualcatTree',
                           checkboxName:'cat[]',
                           showStep:step||1
  });
}
 initTreelist(1);
</script>
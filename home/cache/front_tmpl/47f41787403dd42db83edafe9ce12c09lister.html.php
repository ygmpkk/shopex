<?php if(!function_exists('tpl_block_area')){ require(CORE_DIR.'/admin/smartyplugin/block.area.php'); } if(!function_exists('tpl_function_pager')){ require(CORE_DIR.'/admin/smartyplugin/function.pager.php'); }  $o = &$this->model; $o->__table_define = array ( 'op_id' => array ( 'type' => 'number', 'required' => true, 'pkey' => true, 'extra' => 'auto_increment', 'label' => 'ID', 'width' => 30, 'editable' => false, 'hidden' => true, ), 'username' => array ( 'type' => 'varchar(20)', 'required' => true, 'default' => '', 'label' => '用户名', 'width' => 110, 'editable' => false, ), 'userpass' => array ( 'type' => 'varchar(32)', 'required' => true, 'default' => '', 'editable' => false, ), 'name' => array ( 'type' => 'varchar(30)', 'label' => '姓名', 'width' => 110, 'editable' => true, ), 'config' => array ( 'type' => 'longtext', 'editable' => false, ), 'favorite' => array ( 'type' => 'longtext', 'editable' => false, ), 'super' => array ( 'type' => 'intbool', 'default' => '0', 'required' => true, 'label' => '超级管理员', 'width' => 75, 'editable' => false, ), 'lastip' => array ( 'type' => 'varchar(20)', 'editable' => false, ), 'logincount' => array ( 'type' => 'number', 'default' => 0, 'required' => true, 'label' => '登陆次数', 'width' => 110, 'editable' => false, ), 'lastlogin' => array ( 'type' => 'time', 'default' => 0, 'required' => true, 'label' => '最后登陆时间', 'width' => 110, 'editable' => false, ), 'status' => array ( 'type' => 'intbool', 'default' => '1', 'label' => '启用', 'width' => 100, 'required' => true, 'editable' => true, ), 'disabled' => array ( 'type' => 'bool', 'default' => 'false', 'required' => true, 'editable' => false, ), 'op_no' => array ( 'type' => 'varchar(50)', 'label' => '编号', 'width' => 30, 'editable' => true, ), 'department' => array ( 'type' => 'varchar(50)', 'label' => '部门', 'width' => 75, 'editable' => true, ), 'memo' => array ( 'type' => 'text', 'label' => '备注', 'width' => 270, 'editable' => false, ), ); if(!function_exists('action_finder_lister')){ require(CORE_INCLUDE_DIR.'/core/action.finder_lister.php'); } action_finder_lister($this); $this->_vars['_finder']['id'] = 'op_id'; $this->_vars['_finder']['hasTag'] = ''; echo $this->_fetch_compile_include($this->_vars['_finder']['current_view'],array()); $o = null; $this->_tag_stack[] = array('tpl_block_area', array('inject' => ".mainFoot")); tpl_block_area(array('inject' => ".mainFoot"), null, $this); ob_start();  if( $this->_vars['_finder']['listViews'] ){ ?> <div class="finder-footer" id="finder-footer-<?php echo $this->_vars['_finder']['_name']; ?>"> <?php } ?> <!-- 分页区域 --> <div class='finder-page clearfix'> <div class='span-3'> <span style="cursor: pointer" id="finder-pageset-<?php echo $this->_vars['_finder']['_name']; ?>" dropmenu="finder-pagesel-<?php echo $this->_vars['_finder']['_name']; ?>"> 每页显示<i><?php echo $this->_vars['_finder']['plimit']; ?></i>条 <img src="images/transparent.gif" class="imgbundle" style="width:7px;height:5px;background-position:0 -71px;" /> </span> </div> <?php if( $this->_vars['_finder']['pager']['total'] > 1 ){ ?> <div class='span-5'> <form id="finder-pagejump-<?php echo $this->_vars['_finder']['_name']; ?>" class='clearfix' max="<?php echo $this->_vars['_finder']['pager']['total']; ?>"> <div class='span-auto'>跳转到第 <input type="text" class='x-input' style="width:20px; height:1em; padding:0" />页 </div> <div class='span-auto'> <em onclick='$(this).getParent("form").fireEvent("submit",{stop:$empty});' class='lnk'><span class='fontcolorBlack'>Go</span></em> </div> </form> </div> <?php } ?> <div class='span-auto'><?php echo tpl_function_pager(array('data' => $this->_vars['_finder']['pager']), $this);?></div> <?php if( $this->_vars['_finder']['statusStr'] ){ ?> <div class='span-auto'><?php echo $this->_vars['_finder']['statusStr']; ?></div> <?php } ?> <div class='span-auto textright'>共<i><?php echo $this->_vars['_finder']['count']; ?></i>条 <?php if( $this->_vars['finder']['statusStr'] ){ ?><span style="margin-left:150px;"><?php echo $this->_vars['finder']['statusStr']; ?></span><?php } ?> </div> </div> <?php if( $this->_vars['_finder']['listViews'] ){ ?> </div> <?php }  $_block_content = ob_get_contents(); ob_end_clean(); $_block_content = tpl_block_area($this->_tag_stack[count($this->_tag_stack) - 1][1], $_block_content, $this); echo $_block_content; array_pop($this->_tag_stack); $_block_content=''; ?> <!-- 全选 取消全选等 操作区域--> <?php $this->_tag_stack[] = array('tpl_block_area', array('inject' => ".mainHead")); tpl_block_area(array('inject' => ".mainHead"), null, $this); ob_start(); ?> <div class="finder-tip" id="finder-tip-<?php echo $this->_vars['_finder']['_name']; ?>" count=<?php echo $this->_vars['_finder']['count']; ?> style='display:none;'> <i class='selected'> 您当前选定了<em>0</em>条记录， <strong onclick="<?php echo $this->_vars['_finder']['var']; ?>.unselectAll()">点此取消选定</strong>。 <strong onclick="<?php echo $this->_vars['_finder']['var']; ?>.selectAll()">点此选定全部</strong> 的<span><?php echo $this->_vars['_finder']['count']; ?></span>条记录 </i> <i class='selectedall'> 您当前选定了全部的 <span><?php echo $this->_vars['_finder']['count']; ?></span>条记录， <strong onclick="<?php echo $this->_vars['_finder']['var']; ?>.unselectAll()">点此取消选定</strong> 全部记录 </i> </div> <?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_content = tpl_block_area($this->_tag_stack[count($this->_tag_stack) - 1][1], $_block_content, $this); echo $_block_content; array_pop($this->_tag_stack); $_block_content=''; ?><!-- 全选 取消全选等 操作区域 end --> <!-- 选择每页记录条数区域 --> <div id="finder-pagesel-<?php echo $this->_vars['_finder']['_name']; ?>" class="x-drop-menu"> <?php foreach ((array)$this->_vars['_finder']['plimit_in_sel'] as $this->_vars['pnumber']){ ?> <div class="item" onclick="<?php echo $this->_vars['_finder']['var']; ?>.request({method:'post',data:{plimit:<?php echo $this->_vars['pnumber']; ?>}})"> <input type="radio" <?php if( $this->_vars['_finder']['plimit'] == $this->_vars['pnumber'] ){ ?>checked="checked"<?php } ?> /> 每页<i><?php echo $this->_vars['pnumber']; ?></i>条 </div> <?php } ?> </div> <script>
if($('finder-pagejump-<?php echo $this->_vars['_finder']['_name']; ?>')){
	$('finder-pagejump-<?php echo $this->_vars['_finder']['_name']; ?>').addEvent('submit',function(e){
		e.stop();
		var v = $E('input',this).value.toInt();
		if(v<1)v=1;
		if(v>this.get('max')) v = this.get('max');
		<?php echo $this->_vars['_finder']['var']; ?>.page(v);
	});
}

new DropMenu($('finder-pageset-<?php echo $this->_vars['_finder']['_name']; ?>'),{offset:{y:-115}});
</script> 
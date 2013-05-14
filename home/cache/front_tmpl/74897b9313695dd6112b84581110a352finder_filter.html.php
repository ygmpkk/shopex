<?php if(!function_exists('tpl_modifier_paddingleft')){ require(CORE_DIR.'/include_v5/smartyplugins/modifier.paddingleft.php'); } if(!function_exists('tpl_function_counter')){ require(CORE_DIR.'/include_v5/smartyplugins/function.counter.php'); } ?><div class="division" style="margin-left:0; margin-right:0"> <div class="finder-filter-body " > <?php if( $this->_vars['filter']['type_id'] ){ ?> <input type="hidden" name="type_id" value="<?php echo $this->_vars['filter']['type_id']; ?>"/> <?php } ?> <table> <tr title="同时按住Ctrl可以多选"> <td ><label for="f_cat">商品分类</label> <select size="5" multiple="multiple" id="f_cat" title="同时按住Ctrl可以多选" name="cat_id[]"> <option style="font-weight:bold" value="_ANY_" <?php if( !$this->_vars['cat_id'] ){ ?>selected="selected"<?php } ?>>- 所有分类 -</option> <?php $this->_env_vars['foreach']["_s"]=array('total'=>count($this->_vars['filter']['cats']),'iteration'=>0);foreach ((array)$this->_vars['filter']['cats'] as $this->_vars['key'] => $this->_vars['cat']){ $this->_env_vars['foreach']["_s"]['first'] = ($this->_env_vars['foreach']["_s"]['iteration']==0); $this->_env_vars['foreach']["_s"]['iteration']++; $this->_env_vars['foreach']["_s"]['last'] = ($this->_env_vars['foreach']["_s"]['iteration']==$this->_env_vars['foreach']["_s"]['total']); ?> <option <?php if( $this->_env_vars['foreach']['_s']['iteration'] %2==1 ){ ?> class="row2"<?php } ?> value="<?php echo $this->_vars['cat']['cat_id']; ?>" <?php if( $this->_vars['cat']['cat_id']==$this->_vars['cat_id'] ){ ?>selected<?php } ?>><?php echo tpl_modifier_paddingleft($this->_vars['cat']['cat_name'],$this->_vars['cat']['step']*4-4,'&nbsp;'); ?></option> <?php } unset($this->_env_vars['foreach']["_s"]); ?> </select> </td> <td><label for="f_brand">品牌</label> <select id="f_brand" name="brand_id[]" size="5" multiple="multiple"> <option style="font-weight:bold" value="_ANY_" selected="selected">任意</option> <?php $this->_env_vars['foreach']["_s"]=array('total'=>count($this->_vars['filter']['brands']),'iteration'=>0);foreach ((array)$this->_vars['filter']['brands'] as $this->_vars['brand']){ $this->_env_vars['foreach']["_s"]['first'] = ($this->_env_vars['foreach']["_s"]['iteration']==0); $this->_env_vars['foreach']["_s"]['iteration']++; $this->_env_vars['foreach']["_s"]['last'] = ($this->_env_vars['foreach']["_s"]['iteration']==$this->_env_vars['foreach']["_s"]['total']); ?> <option<?php if( $this->_env_vars['foreach']['_s']['iteration'] %2==1 ){ ?> class="row2"<?php } ?> value="<?php echo $this->_vars['brand']['brand_id']; ?>"><?php echo $this->_vars['brand']['brand_name']; ?></option> <?php } unset($this->_env_vars['foreach']["_s"]); ?> </select> </td> <?php if( count($this->_vars['filter']['tags'])>0 ){ ?> <td><label for="f_tag">标签</label> <select id="f_tag" name="tag[]" size="5" multiple="multiple"> <option style="font-weight:bold" value="_ANY_" selected="selected">全部</option> <?php $this->_env_vars['foreach']["_s"]=array('total'=>count($this->_vars['filter']['tags']),'iteration'=>0);foreach ((array)$this->_vars['filter']['tags'] as $this->_vars['tag']){ $this->_env_vars['foreach']["_s"]['first'] = ($this->_env_vars['foreach']["_s"]['iteration']==0); $this->_env_vars['foreach']["_s"]['iteration']++; $this->_env_vars['foreach']["_s"]['last'] = ($this->_env_vars['foreach']["_s"]['iteration']==$this->_env_vars['foreach']["_s"]['total']); ?> <option<?php if( $this->_env_vars['foreach']['_s']['iteration'] %2==1 ){ ?> class="row2"<?php } ?> value="<?php echo $this->_vars['tag']['tag_id']; ?>"><?php echo $this->_vars['tag']['tag_name']; ?></option> <?php } unset($this->_env_vars['foreach']["_s"]); ?> </select> </td> <?php }  if( count($this->_vars['filter']['keywords'])>0 ){ ?> <td><label for="f_keywords">关键词</label> <select id="f_keywords" name="keywords[]" size="5" multiple="multiple"> <option style="font-weight:bold" value="_ANY_" selected="selected">任意</option> <?php $this->_env_vars['foreach']["_s"]=array('total'=>count($this->_vars['filter']['keywords']),'iteration'=>0);foreach ((array)$this->_vars['filter']['keywords'] as $this->_vars['keywords']){ $this->_env_vars['foreach']["_s"]['first'] = ($this->_env_vars['foreach']["_s"]['iteration']==0); $this->_env_vars['foreach']["_s"]['iteration']++; $this->_env_vars['foreach']["_s"]['last'] = ($this->_env_vars['foreach']["_s"]['iteration']==$this->_env_vars['foreach']["_s"]['total']); ?> <option<?php if( $this->_env_vars['foreach']['_s']['iteration'] %2==1 ){ ?> class="row2"<?php } ?> value="<?php echo $this->_vars['keywords']['keyword']; ?>"><?php echo $this->_vars['keywords']['keyword']; ?></option> <?php } unset($this->_env_vars['foreach']["_s"]); ?> </select> </td> <?php }  if( count($this->_vars['filter']['supplier'])> 0 ){ ?> <td><label for="f_tag">供应商</label> <select id="f_tag" name="supplier_id[]" size="5" multiple="multiple"> <option style="font-weight:bold" value="_ANY_" selected="selected">全部</option> <?php $this->_env_vars['foreach']["_s"]=array('total'=>count($this->_vars['filter']['supplier']),'iteration'=>0);foreach ((array)$this->_vars['filter']['supplier'] as $this->_vars['supplier']){ $this->_env_vars['foreach']["_s"]['first'] = ($this->_env_vars['foreach']["_s"]['iteration']==0); $this->_env_vars['foreach']["_s"]['iteration']++; $this->_env_vars['foreach']["_s"]['last'] = ($this->_env_vars['foreach']["_s"]['iteration']==$this->_env_vars['foreach']["_s"]['total']); ?> <option<?php if( $this->_env_vars['foreach']['_s']['iteration'] %2==1 ){ ?> class="row2"<?php } ?> value="<?php echo $this->_vars['supplier']['supplier_id']; ?>"><?php echo $this->_vars['supplier']['supplier_brief_name']; ?></option> <?php } unset($this->_env_vars['foreach']["_s"]); ?> </select> </td> <?php } ?> </tr> </table> <?php if( ($this->_vars['filter']['props'] && $this->_vars['filter']['type_id'] !="_ANY_") or $this->_vars['_finder']['data']['type_id']!="" ){  echo tpl_function_counter(array('start' => 0,'assign' => "result",'print' => false), $this); foreach ((array)$this->_vars['filter']['props'] as $this->_vars['key'] => $this->_vars['prop']){  if( $this->_vars['prop']['type'] == 'select' ){  if( ($this->_vars['result'] % 5) == 0 ){ ?> <table> <tr> <?php } ?> <td><label for="f_p_<?php echo $this->_vars['key']; ?>"><?php echo $this->_vars['prop']['name']; ?></label> <select id="f_p_<?php echo $this->_vars['key']; ?>" name="props[<?php echo $this->_vars['key']; ?>][]" size="5" multiple="multiple"> <option style="font-weight:bold" value="_ANY_" selected="selected">任意</option> <?php $this->_env_vars['foreach']["_s"]=array('total'=>count($this->_vars['prop']['options']),'iteration'=>0);foreach ((array)$this->_vars['prop']['options'] as $this->_vars['value'] => $this->_vars['item']){ $this->_env_vars['foreach']["_s"]['first'] = ($this->_env_vars['foreach']["_s"]['iteration']==0); $this->_env_vars['foreach']["_s"]['iteration']++; $this->_env_vars['foreach']["_s"]['last'] = ($this->_env_vars['foreach']["_s"]['iteration']==$this->_env_vars['foreach']["_s"]['total']); ?> <option<?php if( $this->_env_vars['foreach']['_s']['iteration'] %2==1 ){ ?> class="row2"<?php } ?> value="<?php echo $this->_vars['value']; ?>"><?php echo $this->_vars['item']; ?></option> <?php } unset($this->_env_vars['foreach']["_s"]); ?> </select> </td> <?php if( ($this->_vars['result'] % 5) == 4 ){ ?> </tr> </table> <?php }  echo tpl_function_counter(array('assign' => "result",'print' => false), $this); }  }  if( ($this->_vars['result'] % 5) != 0 ){ ?> </tr> </table> <?php }  } ?> </div></div> <div style="margin-top:-5px; width:300px"><span class="notice-inline-icon">以上选项，可以按住CTRL来进行多选</span></div>
<?php if( $this->_vars['item']['is_has_remote_pdts']!=='true' && $this->_vars['item']['pay_stat']==0 && $this->_vars['item']['ship_stat']==0 && $this->_vars['item']['stat']=='active' ){ ?> <a href="index.php?ctl=<?php echo $_GET['ctl']; ?>&act=showEdit&p[0]=<?php echo $this->_vars['item']['order_id']; ?>" target="_blank"><img src="images/transparent.gif" class="imgbundle" style="width:15px;height:16px;background-position:0 -133px;" />编辑</a> <?php }  if( $this->_vars['item']['is_has_remote_pdts']=='true' && $this->_vars['item']['stat']=='active' ){ ?> <a href="index.php?ctl=<?php echo $_GET['ctl']; ?>&act=edit_po&p[0]=<?php echo $this->_vars['item']['order_id']; ?>" target="_blank"><img src="images/transparent.gif" class="imgbundle" style="width:15px;height:16px;background-position:0 -133px;" />采购并编辑</a> <?php } ?>
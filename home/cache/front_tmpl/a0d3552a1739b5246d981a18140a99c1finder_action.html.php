<div id="member-messenger" class="x-drop-menu"> <ul class="group"> <?php foreach ((array)$this->_vars['messenger'] as $this->_vars['key'] => $this->_vars['item']){ ?> <li class="item" target='dialog' submit="index.php?ctl=member/messenger&act=write&p[0]=<?php echo $this->_vars['key']; ?>&finder=<?php echo $this->_vars['_finder']['var']; ?>"><?php echo $this->_vars['item']['name_show']; ?></li> <?php } ?> </ul> </div> <a href="index.php?ctl=member/member&act=showNew" wrapimg="true" type="link" target="_blank" class="btn btn-blank"><span><span><i class="finder-icon"><img src="images/transparent.gif" class="imgbundle icon" style="width:24px;height:24px;background-position:0 -316px;" /></i>添加会员</span></span></a> <button wrapimg="true" dropmenu_opts="<?php echo "relative:{$this->_vars['_finder']['var']}.action";?>" type="button" dropmenu="member-messenger" id=x_btn_member-messenger class="btn"><span><span><i class="finder-icon"><img src="images/transparent.gif" class="imgbundle icon" style="width:22px;height:24px;background-position:0 -524px;" /></i>群发<img src="images/transparent.gif" class="drop-handle" /></span></span></button><script>new DropMenu("x_btn_member-messenger",{<?php echo "relative:{$this->_vars['_finder']['var']}.action";?>});</script> <button wrapimg="true" target="dialog" submit="index.php?ctl=member/member&act=batchEdit" type="button" class="btn btn-large"><span><span><i class="finder-icon"><img src="images/transparent.gif" class="imgbundle icon" style="width:22px;height:24px;background-position:0 -548px;" /></i>批量编辑</span></span></button>
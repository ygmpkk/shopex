 <div class="guider"> <dl class="step step2" style="top:55px;"> <dt>统计报表</dt> <dd>本功能模块为您显示网店的统计信息，包括访问统计、销售统计和预存款统计。</dd> </dl> <div class="arrwrap" style="height:158px;"> <div class="tp"></div> <div class="bd"></div> <div class="ft"></div> </div> <div class="guider_sub"> <dl> <dt>1.访问统计</dt> <dd>通过本功能，可以统计到详细的网店访问量、访客来源、页面浏览量、当前在线用户等等。</dd> </dl> <dl> <dt>2.预付款统计</dt> <dd>记录每一位会员预付款进出的流水记录，可以按时间段查询网店预付款总流水情况。</dd> </dl> <dl> <dt>3.销售统计</dt> <dd>可以允许您对销售额、销售排行、销售转化率等多个指标进行查看。</dd> </dl> </div> </div> <div style="position:absolute;bottom:3px;margin-left:5px;width:650px;height:100px;border:1px solid #E9E2E2"> <?php $advMdl=$this->system->loadModel('system/adv'); echo $advMdl->loadadv($this->_vars['_request_']['action']['ident'],1);unset($advMdl);?> </div> 
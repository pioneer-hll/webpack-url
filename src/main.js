/**
 * Created by hll on 2017/10/10.
 */
var v1=document.querySelector("#v1");
var v2=document.querySelector("#v2");
var bt=document.querySelector("#bt");
var res=document.querySelector("#res");

bt.onclick=function(){
    var v1val=parseFloat(v1.value);
    var v2val=parseFloat(v2.value);

    var add=require('./calc.js');
    res.value=add(v1val,v2val);
}
require('../statics/css/site.css');

require('../statics/css/site1.scss');

require('../statics/css/site2.less');




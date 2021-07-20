$(document).ready(function(){
var cids = ['7416','247','12021','753','3611','702','2244','8146119','25622','992','6559','129726291','123218','54670067','67488','525','4224596','8111','134601','5904'];
// cids=['7416']
var rand = Math.floor(Math.random()*cids.length);
$('#rmolecule').attr("data-cid", cids[rand]);
})
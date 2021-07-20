$(document).ready(function(){
var cids = ['2244','8146119','5904','3036','5994','992','6559','129726291','123218','54670067','67488','525','76685216','5743','8418','8111','4510','134601','5904'];
// cids=['5288826']
var rand = Math.floor(Math.random()*cids.length);
$('#rmolecule').attr("data-cid", cids[rand]);
})
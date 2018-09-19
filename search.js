//TODO handle case where user tags another user
//TODO simulate clicking the 'Load more comments' button to get all the users
var opening = '<span>'
var closing = '</span>'
const emp = ''
$('.C4VMK').each(function(i, obj) {
    var user = obj.firstChild.innerHTML;
    var str = obj.innerHTML.toString();
    var indx = str.search(opening);
    var comment = str.slice(indx).replace(opening,emp).replace(closing,emp);
	console.log(user + ': ' + comment)
});


function isLoadButtonAvailable(){
    if($('.Z4IfV.oF4XW.sqdOP.yWX7d') != null){
        return true;
    }
    return false;
}

setInterval(function(){
    if(isLoadButtonAvailable()){
        $('.Z4IfV.oF4XW.sqdOP.yWX7d').click() 
    }
},1000)


while($('.Z4IfV.oF4XW.sqdOP.yWX7d') != 'undefined');
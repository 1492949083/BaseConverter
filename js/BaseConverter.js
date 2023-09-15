$(function(){
    
});




//计算
//十进制转二进制
function TenToTwo(input, output) {
    var value = $(input).val();
    var result = "";
    while(value > 0){
        result = value%2 + result;
        value = Math.floor(value/2);
    }
    var out = $(output).text(result); 
    return result;
}


function addition(){
    var count = document.getElementById('count').innerHTML;
    var count = parseInt(count);
    count++;
    document.getElementById('count').innerHTML = count;
}

function subtraction(){
    var count = document.getElementById('count').innerHTML;
    var count = parseInt(count);
    count--;
    document.getElementById('count').innerHTML = count;
}

function reset(){
    document.getElementById('count').innerHTML = 0;
}
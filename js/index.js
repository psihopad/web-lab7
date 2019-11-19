$(document).ready(function() {
         $('.slider').fullpage();
        });
document.getElementById("result").addEventListener('click', function(){
    console.log(document.getElementsByTagName('input')[2].value);
    console.log(document.getElementsByTagName('input')[3].value);
    console.log(document.getElementsByTagName('input')[4].value);
    console.log(document.getElementsByTagName('input')[5].value);
});
document.getElementById("result-two").addEventListener('click', function(){
    console.log(document.getElementsByTagName('input')[6].value);
    console.log(document.getElementsByTagName('input')[7].value);
});


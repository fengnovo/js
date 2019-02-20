// alert('Hello2');
window.onload = function () {
    var oDiv = document.getElementById('num');
    if(Worker){
        var wk = new Worker('webworkertest.js');
        wk.onmessage = function (e) {
            var data = e.data;
            console.log(data);
            oDiv.innerHTML = data.count;
        }
    }
}


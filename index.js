document.addEventListener('DOMContentLoaded', function() {
    var booton = document.createElement('button');
        booton.innerText = 'Add Block';
        booton.className = 'booton';
        document.body.appendChild(booton);
        booton.onclick = addBlock; 
    var bootonGuard = document.createElement('div');
        bootonGuard.className = 'guard';
        document.body.appenChild(bootonGuard);       
});


var addBlock = function () {
    var blockArray = document.getElementsByClassName('daBlocks');
        // for (var i = 0; i <= blockArray.length; i++) {
        // }  
        var block = document.createElement('div');
            block.className = 'daBlocks'; 
            block.setAttribute('id', blockArray.length.toString())
            block.innerText = block.id;   
            document.getElementsByClassName('guard').appendChild(block);    
            block.addEventListener('click', function() {
                block.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
            });
        
            block.addEventListener('dblclick', function(){
                var evenNumID = parseInt(block.id, 10);
                var oddNumID = parseInt(block.id, 10);
                    if (evenNumID % 2 == 0) {
                        evenNumID += 1;
                        var unluckyID = evenNumID.toString();
                        console.log(unluckyID);
                        var bye = document.getElementById(unluckyID);
                        if (bye == null) {
                            alert('Element Does Not Exist');
                        } else {
                             bye.parentNode.removeChild(bye);
                        }
                    } else if (oddNumID % 2 != 0) {
                        oddNumID -= 1;
                        var notluckyID = oddNumID.toString();
                        console.log(notluckyID);
                        var cya = document.getElementById(notluckyID);
                        if (cya == null) {
                            alert('Element Does Not Exist');
                        } else {    
                        cya.parentNode.removeChild(cya);
                        }
                    } 
            });        
}       

 
               
            
     

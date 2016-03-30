
document.addEventListener('DOMContentLoaded', function() {
    var booton = document.createElement('button');
        booton.innerText = 'Add Block';
        booton.className = 'booton';
        document.body.appendChild(booton);
    var guard = document.createElement('p');
        document.body.appendChild(guard);    
        booton.onclick = addBlock;

}); 


var addBlock = function () {
    var blockArray = document.getElementsByClassName('daBlocks');
        var block = document.createElement('div');
            block.className = 'daBlocks'; 
            block.setAttribute('id', blockArray.length.toString())
            block.innerText = block.id;   
            document.body.appendChild(block);    
            block.addEventListener('click', function() {
                block.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
            });
        
            block.addEventListener('dblclick', function(){
                var evenNumID = parseInt(block.id, 10);
                var oddNumID = parseInt(block.id, 10);
                    if (evenNumID % 2 == 0) {
                        var bye = document.getElementById(block.id).nextSibling;
                        if (bye == null) {
                            alert('Element Does Not Exist');
                        } else {
                             bye.parentNode.removeChild(bye);
                        }
                    } else if (oddNumID % 2 != 0) {
                        var cya = document.getElementById(block.id).previousSibling;
                        if (cya.previousSibling.className === 'booton') {
                            alert('Element Does Not Exist');
                        } else {    
                        cya.parentNode.removeChild(cya);
                        }
                    } 
            });        
}   
               
         
     

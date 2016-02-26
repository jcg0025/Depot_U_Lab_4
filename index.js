document.addEventListener('DOMContentLoaded', function() {
    var booton = document.createElement('button');
        booton.innerText = 'Add Block';
        booton.className = 'booton';
        document.body.appendChild(booton);
        booton.onclick = addBlock;        
});


var addBlock = function () {
    var blockArray = document.getElementsByClassName('daBlocks');
        for (var i = 0; i <= blockArray.length; i++) {
        }  
        var block = document.createElement('div');
            block.className = 'daBlocks'; 
            block.setAttribute('id', blockArray.length.toString())
            block.innerText = block.id;   
            document.body.appendChild(block);    
            block.addEventListener('click', function() {
                block.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
            });
        
            block.addEventListener('dblclick', function(){
                
            });        
}       


 
            //     var numID = parseInt(block.id, 10);
            // if (numID % 2 == 0) {
            //     numID += 1;
            //     var unluckyID = numID.toString();
            //     console.log(unluckyID);    
            
     

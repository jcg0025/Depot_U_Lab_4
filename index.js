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
}


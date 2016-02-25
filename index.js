document.addEventListener('DOMContentLoaded', function() {
    var booton = document.createElement('div');
        booton.innerText = 'Add Block';
        booton.style.color = 'blue';
        booton.style.textAlign ='center';
        document.body.appendChild(booton);
        booton.onclick = addBlock;
        
        
});

var addBlock = function () {
    var block = document.createElement('div');
    block.style.display = 'inline-block';
    block.style.marginRight = '20px';
    block.style.width = '100px';
    block.style.height = '100px';
    block.style.backgroundColor = 'black';
    document.body.appendChild(block);
}


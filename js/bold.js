document.getElementById('bold').addEventListener('click', function(){
        var grabTheArea = document.getElementById('text-area');
    if(grabTheArea.style.fontWeight === 'normal'){
        grabTheArea.style.fontWeight = 'bold'
    }
    else if(grabTheArea.style.fontWeight === 'bold'){
        grabTheArea.style.fontWeight = 'normal'
    }
    else{
        grabTheArea.style.fontWeight = 'bold';
    }
})
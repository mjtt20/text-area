document.getElementById('bold').addEventListener('click', function(){
        var grabTheArea = document.getElementById('text-area');
    if(grabTheArea.style.fontWeight === 'normal'){
        grabTheArea.style.fontWeight = 'bold'
    }
    else{
        grabTheArea.style.fontWeight = 'normal'
    }
})
document.getElementById('underline').addEventListener('click', function(){
    var grabTheArea = document.getElementById('text-area');
    if(grabTheArea.style.textDecoration === 'none'){
        grabTheArea.style.textDecoration = 'underline';
    }
    else{
        grabTheArea.style.textDecoration = 'none';
    }
})
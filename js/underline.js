document.getElementById('underline').addEventListener('click', function(){
    var grabTheArea = document.getElementById('text-area');
    if(grabTheArea.style.textDecoration === 'none'){
        grabTheArea.style.textDecoration = 'underline';
    }
    else if(grabTheArea.style.textDecoration === 'underline'){
        grabTheArea.style.textDecoration = 'none';
    }
    else{
        grabTheArea.style.textDecoration = 'underline';
    }
})
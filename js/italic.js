// document.getElementById('italic').addEventListener('click', function(){
//     var grabTheArea = document.getElementById('text-area');
//     if(grabTheArea.style.fontStyle === 'normal'){
//         grabTheArea.style.fontStyle = 'italic';
//     }
//     else{
//         grabTheArea.style.fontStyle = 'normal';
//     }
// })


document.getElementById('italic').addEventListener('click', function(){
    var grabTheArea = document.getElementById('text-area');
    if(grabTheArea.style.fontStyle === 'normal'){
        grabTheArea.style.fontStyle = 'italic';
    }
    else if(grabTheArea.style.fontStyle === 'italic'){
        grabTheArea.style.fontStyle = 'normal';
    }
    else{
        grabTheArea.style.fontStyle = 'italic';
    }
})
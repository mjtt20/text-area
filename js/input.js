document.getElementById('input-number').addEventListener('input', function(){
    var grabTheInputValue = document.getElementById('text-area');
    grabTheInputValue.style.fontSize = this.value + 'px';
})



document.getElementById('input-color').addEventListener('input', function(){
    var grabTheInputValue = document.getElementById('text-area');
    grabTheInputValue.style.color = this.value;
})
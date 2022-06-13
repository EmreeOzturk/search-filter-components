const li = document.querySelectorAll('li');

function select(){
    li.forEach(function(item){
        item.classList.remove('active');
        item.addEventListener('click', function(){
            item.classList.add('active');
            document.querySelector('.search-side input').value = item.innerText;
        });
    });
}








let img = document.querySelector('.img');
let joke= document.querySelector('#joke');

fetch('https://api.chucknorris.io/jokes/random')
.then(response => response.json())
.then(data => {
     joke.innerHTML = data.value
     img.src = 'https://picsum.photos/150/150'
});



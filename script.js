let navBar = document.getElementById('navigation');
let toggleButton = document.getElementById('bar');

toggleButton.addEventListener('click', function() {
    navBar.classList.toggle('activenav');
})
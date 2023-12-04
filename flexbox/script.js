const movimentavel = document.getElementById('movimentavel');

let isMouseDown = false;

movimentavel.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    movimentavel.style.cursor = 'grabbing';
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
    movimentavel.style.cursor = 'grab';
});

document.addEventListener('mousemove', (e) => {
    if (isMouseDown) {
        movimentavel.style.left = e.pageX - movimentavel.offsetWidth / 2 + 'px';
        movimentavel.style.top = e.pageY - movimentavel.offsetHeight / 2 + 'px';
    }
});

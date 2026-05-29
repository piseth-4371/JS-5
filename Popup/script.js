let popup = document.getElementById('popup');

console.log(popup.classList);
function openPopup(){
    popup.classList.replace('scale-[0.1]', 'scale-[1]');
    popup.classList.replace('invisible', 'visible');
    popup.classList.replace('top-0', 'top-1/2');
}

function closePopup(){
    popup.classList.replace('scale-[1]', 'scale-[0.1]');
    popup.classList.replace( 'visible', 'invisible');
    popup.classList.replace('top-1/2', 'top-0');
}
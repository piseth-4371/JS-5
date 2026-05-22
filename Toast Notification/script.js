let toastBox = document.querySelector(".toastBox");
let SuccessMassage = '<i class="fa-solid fa-circle-check mx-5 text-4xl text-green-700"></i>Successfully  Sumbited';
let ErrorMassage = '<i class="fa-solid fa-circle-xmark mx-5 text-4xl text-red-700"></i>Please fix the error!';
let InvalidMassage = '<i class="fa-solid fa-circle-exclamation mx-5 text-4xl text-yellow-700"></i>Invalid input, check again!';

function showToast(massage){
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = massage;
    toastBox.appendChild(toast);

    if(massage.includes('error')){
        toast.classList.add('after:bg-red-800');
    }
    if(massage.includes('Invalid')){
        toast.classList.add('after:bg-yellow-800');
    }

    setTimeout(() => {
        toast.remove();
    }, 4000);
}
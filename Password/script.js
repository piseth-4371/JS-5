const icon = document.getElementById('iconEye');
const pd = document.getElementById('password');



function showPassord(){
   
    if(icon.classList.item(1) == 'fi-ss-eye'){
        pd.type ='password';
        icon.classList.replace('fi-ss-eye', 'fi-ss-eye-crossed');
    }else{
        pd.type ='text';
        icon.classList.replace('fi-ss-eye-crossed', 'fi-ss-eye');
    }
    
}
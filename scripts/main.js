let updateThemeButton=document.querySelector('#updateTheme');
updateThemeButton.textContent=localStorage.getItem('buttonText')||"Toggle Dark-theme";
if(updateThemeButton.textContent=='Toggle Light-theme'){
    var element=document.body;
    element.classList.toggle("dark-mode");
}

function ThemeSwitch(){
    
    var element1=document.body;
    element1.classList.toggle("dark-mode");
    if(updateThemeButton.textContent=="Toggle Dark-theme"){
        updateThemeButton.textContent="Toggle Light-theme";
        localStorage.setItem('buttonText','Toggle Light-theme');
    }
    else{
        updateThemeButton.textContent="Toggle Dark-theme";
        localStorage.setItem('buttonText','Toggle Dark-theme');
    }
    
}
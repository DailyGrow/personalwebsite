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

var choice=document.querySelector('#CT Display');


function showtime(){
    var refresh=1000;
    
    mytime=setTimeout('display_ct()',refresh);
}

function display_ct(){
    
    var x=new Date();
    var str=document.querySelector('input[name="radioButton"]:checked').value;
    var res="";
    var s=x.toString();
    if(str=='Date'){
        var arr=s.split(" ");
        res=arr[0]+" "+arr[1]+" "+arr[2]+" "+arr[3];
        
    }
    else{
        var arr=s.split(" ");
        
        
        var ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';
        res=x.getHours()+":"+x.getMinutes()+":"+x.getSeconds()+ampm;
    }

    var idObject=document.getElementById("oldinput");
    if(idObject==null){
        let input=document.createElement("input");
        input.setAttribute("type","text");
        input.setAttribute("id","oldinput");
        input.value=res;
        //input.style.width="px";
        input.style.height="20px";
        input.style.marginLeft="20px";
    
        let currDiv=document.getElementById("CT-Display");
    //currDiv.insertAdjacentHTML('afterend',newDiv);
    
        currDiv.appendChild(input);
    }
    else{
        idObject.value=res;
    }
    
    
}
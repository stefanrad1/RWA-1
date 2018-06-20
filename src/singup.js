import Rx from 'rxjs/Rx'

export class SingUp{
    constructor(){
    }
    register(e,p){
        console.log(p,e)
        let obj=JSON.stringify({email:e,password:p});
        if(check(e,p)){
        fetch("http://localhost:3000/users?email="+e)
        .then(res=>{ return res.json()})
        .then(data=>{        
            if( data.length>0  )
            {
                alert("korisnik vec postoji");
            }
            else
            {
                fetch("http://localhost:3000/users",{
                    method:'POST',
                    headers:{
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                },
                body:obj
                })
                alert("Uspesno ste napravili nalog ulogujte se ");
                window.location.href="http://localhost:8080/login.html"
            }
        })
        .catch(err=>{console.log(err)})
    }
    else{
        alert("Popunite sva polja");
    }
    }
}

let btnReg=document.getElementById("submitReg");
if(btnReg!=null || btnReg!=undefined)
{
    let btnRegStream$=Rx.Observable.fromEvent(btnReg,'click');
    let enterStream$=Rx.Observable.fromEvent(document,'keyup').filter(data=>data.keyCode===13);
    let inStream$=Rx.Observable.merge(btnRegStream$,enterStream$)
    .subscribe((data)=>{
        let email=document.getElementById('email');
        let password=document.getElementById('password');
        let reg=new SingUp();
        reg.register(email.value,password.value);
     })
    
} 

function check(e,p){
    if(e!="" && p!="" )
    return true
    else
    return false
}
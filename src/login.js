import Rx from 'rxjs/Rx';

export class Login
{
    constructor(email,password)
    {
        this.email=email;
        this.pass=password;
    }
    logOut(){
        sessionStorage.clear();
        window.location='http://localhost:8080/login.html';
    }


    loginCheck()
    {
        let alerthtml=document.getElementById('alerthtml')
        if(alerthtml!=undefined && alerthtml!=null)
        {
            if(sessionStorage.getItem('email')!=null )
            {
                alerthtml.innerHTML="Welcome "+ sessionStorage.getItem('name');  
            }
            else    
            {
                window.location='http://localhost:8080/login.html';
            }
        }
    }
    get(email) 
    {
            return fetch("http://localhost:3000/users?email="+email)
    }
}


    let sub=document.getElementById('btnsub');
    console.log(sub);

    if(sub!=null || sub!=undefined)
    { 
    let btnStream=Rx.Observable.fromEvent(sub,'click');

    btnStream.subscribe((click)=>{
        let email=document.getElementById('emailinput');
        let pass=document.getElementById('passinput');
        let obj=new Login(email.value,pass.value);
        console.log(obj);
            obj.get(email.value)
            .then(function(res){return res.json()})
            .then(function(data)
            {
                if(data[0].email==email.value && data[1].password==pass.value)
                {
                    sessionStorage.setItem("email", data[0].email);
                    sessionStorage.setItem("password",data[1].password);
                    window.location.href="http://localhost:8080";
                }
                else{
                    alert('Pogresna e-mail adresa ili lozinka!')
                }
            })
            .catch(err=>{console.log(err)});
        })
    }

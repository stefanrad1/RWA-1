//import {ItemService} from "./ItemService.js";
//import Rx from 'rxjs';
//import {Login} from './login.js'
//import {SingUp} from './singup.js'

//var a=new ItemService();

document.getElementById("dodavanje").onclick=function()
{
    Dodaj();
}

function get(url)
{
    return fetch(url,{
        method:"POST",
        headers:{
            "Accept":"application/json, text/plain, */*",
            "Content-Type":"application/json"
        },
        body:l
        })
    }
    get("http://localhost:8080/")
    .then(function(data){return data.json()})


function Dodaj()
{
    let stavka=document.getElementById("stavka");

    var text=document.getElementById("search_bar").value+"  ";
    
    var par=document.createElement("p");
    par.innerHTML=text;
    par.className="single_post_title";
    par.id="stavke";
    stavka.appendChild(par);

    var zavrseno = document.createElement("button");
    zavrseno.innerHTML="Zavrseno!";
    zavrseno.className="btn btn-success";
    zavrseno.id="zavrseno";

    var nije_zavrseno = document.createElement("button");
    nije_zavrseno.innerHTML="Nije zavrseno!";
    nije_zavrseno.className="btn btn-danger";
    nije_zavrseno.id="nije_zavrseno";

    par.appendChild(zavrseno);
    par.appendChild(nije_zavrseno);

    zavrseno.onclick=function()
        {
            var that=this.parentNode;
            that.innerHTML="";
        }

    nije_zavrseno.onclick=function()
    {
        var that=this.parentNode;
        that.style.backgroundColor="Yellow";
    }
}


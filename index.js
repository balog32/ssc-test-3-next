const btnAdauga = document.getElementById('btnAdauga');
const btnGoleste = document.getElementById('btnGoleste');
const txtItem = document.getElementById('txtItem');
const txtFiltru = document.getElementById('txtFiltru');
const lista = document.getElementById('lista');

document.addEventListener('DOMContentLoaded' , onLoad);
function onLoad(){
    btnAdauga.addEventListener('click' , adaugaTask);
    btnGoleste.addEventListener("click" , golesteLista);
    lista.addEventListener("click" , onListClick);
    txtFiltru.addEventListener("keyup", onKeyUp);
}
function adaugaTask(e){
    if(!txtItem.value || txtItem.value==='"'){
        alert('Nu se pot adauga task-uri goale!'); 
        return;
      }else{
   
        let el = document.createElement('li');
        el.innerHTML = inputbox.value;
        lista.appendChild(el);
    }
  
}
function golesteLista(e){
    if(!confirm('Esti sigur ca vrei sa golesti lista?')){return;
    }
    lista.innerHTML='';
}
function onListClick(e){
    let tg = e.target,
        li = tg.closest('li');
    if(tg.nodeName=='I'){
       if(!confirm('Esti sigur(a) ca vrei sa stergi task-ul?')){ return;}

       li.remove();
    }else{
        const chk = li.querySelector('input[type="checkbox"]');
        chk.checked = !chk.checked;
    }
}
let time;
function onKeyUp(e){
    clearTimeout(time);
    time = setTimeout(onFilter(e),400);
}
function onFilter(e){
    let filtru = e.target.value.toLowerCase();
    let elemente = lista.querySelectorAll('li');
    elemente.forEach{i=>{
        const txt = i.children[i].textContent.toLowerCase();
        if(txt.indexof(filtru)>-1){
            i.style.display ="flex";
        }else{
            i.style.display ="none";
        }
    }};
}
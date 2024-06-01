const inputdata=document.querySelector('.inputbox input');
const outprint=document.querySelector('.unorderlist');
function additems(){
  if( inputdata.value === ''){
    alert('Please Enter the some data ');
  }else{
    let li=document.createElement('li');
    li.innerHTML=inputdata.value;
    outprint.appendChild(li);
    let span=document.createElement('span');
    span.innerHTML='&#215;';
    li.appendChild(span);
    li.addEventListener('click',function(){
     const checke= li.classList.contains('listitems');
      if(checke)
      li.classList.remove('listitems');
      else li.classList.add('listitems');
    })
    span.addEventListener('click',function(){
      li.style.display='none';
    })
  }
  inputdata.value="";
}


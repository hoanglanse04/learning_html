0
let btnSearch = document.getElementById('btnSearch');
let txtFruit = document.getElementById('txtFruit');
let notify = document.getElementById('notify');
let imgViews = document.getElementById('imgViews');
let form = document.getElementById('form');

let newItem = document.createElement('p');
newItem.textContent="Please enter fruit";
newItem.style.backgroundColor = 'red';
newItem.style.fontWeight='500';

let listFruit = ['apple','strawberry','orange'];
imgViews.style.height='30rem';
imgViews.style.width='30rem';
imgViews.style.objectFit='cover';

const handleClick = (e) =>{
  e.preventDefault();
  let fruit = txtFruit.value;
  if(fruit == '')
  {
  
    form.insertBefore(newItem, form.firstChild);
  }
  else{
    if(listFruit.includes(fruit)){
      notify.textContent=fruit;
      imgViews.src =`./assets/img/${fruit}.jpg`;
    }
    else{
      notify.textContent=`${fruit} not exist`;
      notify.style.backgroundColor='yellow';
      form.removeChild(newItem);

    
    }
  }
}


btnSearch.addEventListener('click' ,handleClick
);

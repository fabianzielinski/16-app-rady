let advicesArray = [];

const btnAdd = document.querySelector('.add');
const btnCln = document.querySelector('.clean');
const btnAdv = document.querySelector('.showAdvice');
const btnOpt = document.querySelector('.showOptions');
const h1 = document.querySelector('h1');


const addFunction = (e)=> {
    e.preventDefault();
    const input = document.querySelector('input');
    const newAdvice = input.value;
    if(input.value.length){
        for(advice of advicesArray){
            if(advice === newAdvice){
                input.value = '';
                alert('To imie już jest!!!');
                return
            }
        }
        advicesArray.push(newAdvice);
        console.log(advicesArray);
        input.value = '';
    };
};

const cleanFunction = ()=> {
    console.log('clik clean');
    advicesArray = [];    
};

const showAdvice = ()=> {
    h1.textContent = '';
    const index = Math.floor(Math.random() * advicesArray.length);
    h1.textContent = advicesArray[index];
};

const showOptions = ()=> {
    // h1.textContent = advicesArray;
    alert('Zawartość tablicy :  '+ advicesArray.join('---'));
};

btnAdd.addEventListener('click', addFunction);
btnCln.addEventListener('click', cleanFunction);
btnAdv.addEventListener('click', showAdvice);
btnOpt.addEventListener('click', showOptions);
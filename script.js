const todoList = JSON.parse(localStorage.getItem('task')) || [];



renderTodoList();
function renderTodoList(){

    let todoListHTML='';    
   
    todoList.forEach(function(todo,index){
    
        const html=`
        <div class=todo-number-${index}
        <div class='test'>${todo.name} </div>
        <div class='test2'>${todo.dueDate}</div>
        </div>
        
        <button class="deleteBtn js-delete-todo-button" 
        ">X</button>`;
       
       
        todoListHTML+=html; 
       
    });

    document.querySelector('.js-todo-list')
    .innerHTML=todoListHTML;

    document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButtons,index) =>{
        deleteButtons.addEventListener('click',() => {
            todoList.splice(index,1);
            localStorage.setItem('task', JSON.stringify(todoList));
        renderTodoList();
        });
    });
}






// for (let i=0;i<todoList.length;i++)
// {

// }

function addTodo2(){
    const  inputElement=document.querySelector('.inputTodo2'); //input wok
    const dateInputElement=document.querySelector('.js-due-date-input');
    const dueDate=dateInputElement.value;
    const name=inputElement.value; //getting the value

    if(inputElement.value !='' && dateInputElement.value !=''){

        
        todoList.push({
            name:name,
            dueDate: dueDate
        }); 
        document.querySelector('.message').style.display="none";
        
    }else{
        
        document.querySelector('.message').innerHTML='Answer all the fields!';
        document.querySelector('.message').style.display="flex";
    }
   




    //  document.querySelector('.js-output').innerHTML=`${todoList}`;
   
        localStorage.setItem('task', JSON.stringify(todoList));
    renderTodoList(); //calling the function
    inputElement.value=''; //setting the textbox
    dateInputElement.value='';

  
 }

 

 document.querySelector('.addIt').addEventListener('click',
    ()=> { addTodo2();
        
 });

    const today = new Date().toISOString().split('T')[0];
    document.querySelector('.js-due-date-input').setAttribute('min',today);

function showDate(){
    const dates = new Date();

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const dayName = days[dates.getDay()];
    const monthName = months[dates.getMonth()];
    const day = String(dates.getDate()).padStart(2, '0');
    const year = dates.getFullYear();
    const hours = String(dates.getHours()).padStart(2, '0');
    const minutes = String(dates.getMinutes()).padStart(2, '0');
    const seconds = String(dates.getSeconds()).padStart(2, '0');
    
    const formattedDate = `${dayName} ${monthName} ${day} ${year} ${hours}:${minutes}:${seconds}`;

    document.querySelector('.dateToday').innerHTML=formattedDate;
}
    

window.setInterval(showDate,1000);


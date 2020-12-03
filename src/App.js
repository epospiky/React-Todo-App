import react, {useEffect, useState} from 'react';
import Todo from './component/Todo';
import AddTodoForm from './component/AddTodoForm';
import CompletedTodo from './component/CompletedTodo';


const App =()=>{
  const initialTodo = [
                        {id:1, title:"Press up at 6:30am", done:false},
                        {id:2, title:"Call Monica at 7:00am", done:false},
                        {id:3, title:"Watch 'The Morning Ginger' show", done:false},
                        {id:4, title:"Go to the gym", done:false}
                      ];
  const [currentTodo, setTodo] = useState(
    useEffect(
      ()=>{
        const localTodo = JSON.parse(localStorage.getItem('currentTodos'))
        if(localTodo){
          setTodo(localTodo)
        }

      },[]) || initialTodo);  
  useEffect(()=>{localStorage.setItem('currentTodos', JSON.stringify(currentTodo))}, [currentTodo])

  const addTodo = (title)=>{
      setTodo([...currentTodo,{title}])
  }     

  const removeTodo = (index) => {
    const newTodo = [...currentTodo];
    newTodo.splice(index, 1)
    setTodo(newTodo)
  }
  const completeTodo = index =>{
    const newTodo = [...currentTodo];
    newTodo[index].done = true
    setTodo(newTodo)
  }
  const undo = index =>{
    const newTodo = [...currentTodo]
    newTodo[index].done = false
    setTodo(newTodo)
  } 
  const completeList = currentTodo.filter(completedlist=>completedlist.done === true)
  const activeList = currentTodo.filter(activeList => activeList.done === false)
  return(
    <div className="bg-indigo-400 min-h-screen">
      <div className="px-4 py-4  lg:px-20 pt-12">
        <div className="md:float-left mb-6 md:mb-auto">
          <h1 className="text-center text-gray-800 font-bold text-2xl mb-2 ">Todo List</h1> 
          {activeList.length < 1?<h1 className="py-2 mb-12 text-xl text-gray-600" >List is empty! Please Add Some Todo...</h1>:''} 
          {currentTodo.map((todo, index)=>(
          <Todo key={index} index={index} todo={todo} removeTodo={removeTodo} completeTodo = {completeTodo}/>
          )
          )}

          <AddTodoForm addTodo={addTodo}/>
        </div>
      
        <div className="md:float-right ">          
          <h1 className="text-center text-gray-800 font-bold text-2xl mb-2">Completed Todos </h1>

          { 
          completeList.length < 1?<h1 className="text-xl text-gray-600" >You haven't completed any todos...</h1>:''
          } 
          
          {
          currentTodo.map((completedTodo, index) => completedTodo.done?
            <CompletedTodo key={index} index={index} completedTodo={completedTodo} removeTodo = {removeTodo} undo={undo}/>:'')
          }

        </div>
        <div className="md:clear-both"></div>
      </div>
    </div>
  )

}
export default App;
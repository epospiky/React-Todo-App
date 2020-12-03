import react from 'react';

const Todo =({todo, index, removeTodo, completeTodo})=>{
    return(
    <>  
        <div style={{display:todo.done ? 'none': ''}}>
            <ul>
                <li className="text-base mb-2 font-medium text-gray-700 flex justify-between ">
                    <span className="inline-block">{todo.title}</span>
                    <div className="inline-block">
                        <button className="text-right ml-2 px-3 bg-gray-100 text-xl text-green-400 focus:outline-none" title="Complete Todo" onClick={()=>completeTodo(index)}><i className="fa fa-check"></i></button>
                        <button className="ml-2 px-3 bg-gray-100 text-xl text-red-400 focus:outline-none" title="Delete Todo" onClick={()=>removeTodo(index)}><i className="fa fa-trash"></i></button>
                    </div>
                    
                </li>
            </ul>

        </div>
    </>
    )
}
export default Todo;
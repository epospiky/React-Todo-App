
import React from 'react'

function CompletedTodo({completedTodo, index, undo, removeTodo}) {
    return (
        <div>
            <ul>
                <li className="text-base mb-2 font-medium text-gray-700 flex justify-between">
                    <span>{completedTodo.title}</span>
                    <div className="inline-block">
                        <button className="ml-2 px-3 bg-gray-100 text-xl text-yellow-300 focus:outline-none" title="Undo todo" onClick={()=>{undo(index)}}><i className="fa fa-undo"></i></button>
                        <button className="ml-2 px-3 bg-gray-100 text-xl text-red-400 focus:outline-none" title="Delete tooo" onClick={()=>{removeTodo(index)}}><i className="fa fa-trash"></i></button>
                    </div>
                </li>
            </ul>
            
        </div>
    )
}

export default CompletedTodo

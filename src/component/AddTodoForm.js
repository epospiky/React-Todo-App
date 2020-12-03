import react, {useState} from 'react';

const AddTodoForm = ({addTodo}) => {

    const [value, setValue] = useState('');
    
    const handleSubmit= e =>{
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <input className="px-3 py-1 text-lg  border-2 border-gray-200 focus:outline-none focus:border-green-400 "  type="text" placeholder="Add todo..." value={value} onChange={e => setValue(e.target.value)}/>
            <button className="px-3 pb-2 bg-gray-100 text-lg text-green-400 focus:outline-none" title="Add todo"><i className=" font-black text-2xl ">+</i> Add Todo</button>
        </form>
    );
}
export default AddTodoForm;
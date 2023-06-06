import React,{useState} from 'react';

const CreateArea=(props)=>{

    const [note,setNote]=useState({
        title:"",
        content:""
    });

    const handleChange=(event)=>{
        const {name,value}=event.target;
        setNote(prevNote=>{
            if(name==="title"){
                return{
                    title:value,
                    content:prevNote.content
                }
            }else if(name==="content"){
                return{
                    title:prevNote.title,
                    content:value
                }
            }
        })
    }

    const submitNote=(event)=>{
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        });
        event.preventDefault();
    }


    return(
        <form action="">
            <input type="text" name='title' placeholder='Title' onChange={handleChange} value={note.title} />
            <textarea name='content' placeholder='Take a note...' rows='3' onChange={handleChange} value={note.content}/>
            <button onClick={submitNote}>+</button>
        </form>
    );
}

export default CreateArea;
import React, { useState } from "react";
import Header from './Header';
import Note from './Note';
import Footer from "./Footer";
import CreateArea from "./CreateArea";

const App=()=>{

    const [notes,setNotes]=useState([]);

    const addNote=(newNote)=>{
        setNotes(prevNotes=>{
            return [...prevNotes,newNote];
        })
    }

    const handleDelete=(id)=>{
        setNotes(prevNotes=>{
            return(
                prevNotes.filter((note,index)=>{
                    return index!==id;
                })
            )
        })
    }


    return(
        <>
            <Header />

            <CreateArea onAdd={addNote}/>
            {
                notes.map((noteItem,index)=>{
                    return (
                        <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={handleDelete}/>
                    );
                })
            }
            
            <Footer />
        </>
    );
}

export default App;
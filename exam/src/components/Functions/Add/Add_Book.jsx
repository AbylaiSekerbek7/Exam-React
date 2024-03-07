import React, { useState } from 'react'
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import "./Add_Book.css"

const Add_Book = () => {
  const [newBook, setNewBook] = useState(
    {
      id: uuidv4(),
      title: "",
      author: "",
      genre: "",
      url: "#",
      year: ""
    }
  );

  const handleAdd = async () => {
    await axios.post("http://localhost:3001/books", newBook).then((res) => {
     setNewBook({id: uuidv4()});
    });
    alert("Succefully Added!");
  }

  return (
    <>
      <div className='add-container'>
        <form onSubmit={(e) => {e.preventDefault(); handleAdd(); }}>
          <input onChange={(e) => setNewBook({...newBook, title: e.target.value})} type="text" placeholder='Enter Title'/>
          <input onChange={(e) => setNewBook({...newBook, author: e.target.value})} type="text" placeholder='Enter Author'/>
          <input type="text" placeholder='Enter Genre'/>
          <input onChange={(e) => setNewBook({...newBook, url: e.target.value})} type="text" placeholder='Enter Book URL'/>
          <input type="text" placeholder='Enter Year'/>
          <button type='submit'>Add new Book</button>
        </form>
      </div>
    </>
  )
}

export default Add_Book
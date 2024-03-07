import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [term, setTerm] = useState("")

  useEffect(() => {
    axios.get("http://localhost:3001/books").then((res) => {
      setBooks(res.data);
    });
  }, []);

  console.log(books);

  const SearchValue = () => {
    const searched = books.filter((book) => {
      book.title.toLocaleLowerCase() === term.toLocaleLowerCase() ||
      book.author.toLocaleLowerCase() === term.toLocaleLowerCase() ||
      book.genre.toLocaleLowerCase() === term.toLocaleLowerCase()
    });
    console.log(searched);
  }

  const onChangeSearchValue = (event) => {
    setTerm(event.target.value);
  }

  return (
    <>
      <div className="box">
        <form name="search" onSubmit={(e) => {e.preventDefault(); SearchValue()}}>
          <input type="text" className="input" name="txt" onChange={onChangeSearchValue()} onMouseOut="this.value = ''; this.blur();" placeholder="Search by Title, Author, Genre"/>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div id="large-th">
        <div className="container">
          <h1>List of Books</h1>
          <br />
          <div className="choose">
            <Link href="#list-th">
              <i className="fa fa-th-list" aria-hidden="true"></i>
            </Link>
            <Link href="#large-th">
              <i className="fa fa-th-large" aria-hidden="true"></i>
            </Link>
          </div>
          <div id="list-th">
            {books?.map((book) => (
                <div className="book" key={book.id}>
                    <div className="cover">
                        <Link to={`/book/${book.id}`}><img src={book.poster} alt="Book image" /></Link>
                    </div>
                    <div className="description">
                        <p className="title">{book.title} <br /> 
                            <span className="author">{book.author}</span>
                        </p>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
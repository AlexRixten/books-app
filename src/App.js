import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import BookList from './components/bookList/BookList'
import Book from './components/book/Book';

function App() {

  const [name, setName] = useState('')
  const [books, setBooks] = useState([])
  const [freeBook, setFreeBook] = useState([])
  const url = `https://www.googleapis.com/books/v1/volumes?q=${name}`


  useEffect(() => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&maxResults=40`).then((response) => {
      setFreeBook(response.data)
    })
  }, [])

  const searchBook = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setBooks(response.data.items)
      })
      setName('')
    }
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<BookList searchBook={searchBook} name={name} setName={setName} books={books} />} />
          <Route path="/:bookId" element={<Book book={books} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react'
import BookCard from '../bookCard/BookCard'
import Search from '../search/Search'
import './bookList.css'

export default function BookList(props) {

  return (
    <>
      <div className='main'>
        <div className="container">
          <header>
            <h2 className="headerTitle">MY<span>BOOK</span></h2>
          </header>
          <main>
            <h1 className="mainTitle">read and add your insight</h1>
            <p className="mainDescr">find your favorite book and read it here for free</p>
          </main>
          <Search searchBook={props.searchBook} name={props.name} setName={props.setName} />
        </div>
      </div>
      {Object.values(props.books).length ? <div className='bookList'>
        <div className="container">
          <div className="bookListWrapper">
            {props.books.map(item => <BookCard key={item.id} item={item} />)}
          </div>
        </div>
      </div> : <div className='Title'>Пока нет ни одной книги...</div>}

    </>
  )
}

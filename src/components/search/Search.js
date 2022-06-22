import React from 'react'
import './search.css'

export default function Search(props) {
    return (
        <div className='search'>
           <input 
            value={props?.name}
            onChange={event => props.setName(event.target.value)}
            onKeyPress={props?.searchBook}
            placeholder='Type author, book name, subject...'
            type="text" />
        </div>
    )
}

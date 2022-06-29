import React from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import './bookCard.css'
import { Link } from 'react-router-dom';

export default function BookCard(props) {
  return (
    <Link className='link' to={"/books-app/" + props.item.id}>
      <div className='bookCard'>
        <img src={props.item.volumeInfo.imageLinks?.thumbnail ? props.item.volumeInfo.imageLinks?.thumbnail : require('../../assets/none.webp')} alt="icon" className="bookCardImg" />
        <div className='bookCardInfo'>
          <h3 className="bookCardTitle">{props.item.volumeInfo.title}</h3>
          <p className='bookCardAuthor'>by {props.item.volumeInfo.authors}</p>
          <div className='bookCardMark'>
            <span className="bookCardRating">
              <Box
                sx={{
                  width: 150,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Rating
                  style={{ color: "#000" }}
                  name="text-feedback"
                  value={props.item.volumeInfo.averageRating}
                  readOnly
                  precision={0.5}
                />
              </Box>
            </span>
            {/* <span className="bookCardVotes">1,988,288 voters</span> */}
          </div>
          <p className='bookCardDescr'> {props.item.volumeInfo.description?.slice(0, 100)} </p>
        </div>
      </div>
    </Link>
  )
}

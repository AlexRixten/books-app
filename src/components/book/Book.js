import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { ArrowBack } from '@mui/icons-material';
import './book.css'
import { Link, NavLink, useParams } from 'react-router-dom';

export default function Book(props) {
    const { bookId } = useParams()
    const [book, setBook] = useState()
    useEffect(() => {
        Object.values(props.book).filter((item, index) => {
            if (item.id === bookId) {
                setBook(props.book[index])
            }
        })
    }, [])

    return (
        <div className='book'>
            <div className="container">
                <div className="bookTop">
                    <Link to="/">
                        <ArrowBack className='linkIcon' />
                    </Link>
                </div>
                <div className="bookWrapper">
                    <div className="bookLeft">
                        <div className="bookLeftTop">
                            <img src={book?.volumeInfo.imageLinks?.thumbnail || require('../../assets/none.webp')} alt="" className="bookLeftTopImg" />
                            <div className="bookLeftTopName">
                                <div className="bookLeftTopNameTop">
                                    <h1 className="bookLeftTopTitle">{book?.volumeInfo.title}</h1>
                                    <div className="bookLeftTopNameInfo">
                                        <span className="bookLeftTopAutor">by {book?.volumeInfo.authors}</span>
                                        <span className="bookLeftTopDate">{book?.volumeInfo.publishedDate}</span>

                                    </div>
                                    <div className='bookLeftTopMark'>
                                        {book?.volumeInfo.ratingsCount ? <span className="bookLeftTopRating">
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
                                                    value={book?.volumeInfo.averageRating}
                                                    readOnly
                                                    precision={0.5}
                                                />
                                            </Box>
                                        </span> : null}
                                        {/* <div className='bookLeftTopMarkInfo'>
                                            <span className="bookLeftTopReads">4M Read</span>
                                            <span className="bookLeftTopVotes">1,988,288 voters</span>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="bookLeftTopNameBottom">
                                    <Link className='bookLink' to="#" >Buy now</Link>
                                    <Link className='bookLink' to="#" style={{ border: '1px solid #FF971D', background: 'transparent', color: '#FF971D'}} >read book</Link>
                                </div>
                            </div>
                        </div>
                        <div className="bookLeftBottom">
                            <div className="bookLeftBottomDescr">
                                <h2 className="bookLeftBottomTitle">Synopsis</h2>
                                <p className="bookLeftBottomDescription">{book?.volumeInfo.description}</p>
                            </div>
                            <div className="bookLeftBottomGenre">
                                {book?.volumeInfo.categories.map((item, index) =>
                                    <div key={index} className="bookLeftBottomGenreItem">{item}</div>
                                )}
                            </div>
                            <div className="bookLeftBottomInfo">
                                <p className="bookLeftBottomTitle">Additional Information</p>
                                <div className='bookLeftBottomInfoWrapper'>
                                    {book?.volumeInfo.publisher ? <div className="bookLeftBottomInfoItem">
                                        <p className="bookLeftBottomInfoTitle">Publisher</p>
                                        <span className="bookLeftBottomInfoDescr">{book?.volumeInfo.publisher}</span>
                                    </div> : null}
                                    {book?.volumeInfo.publishedDate ? <div className="bookLeftBottomInfoItem">
                                        <p className="bookLeftBottomInfoTitle">Published date</p>
                                        <span className="bookLeftBottomInfoDescr">{book?.volumeInfo.publishedDate}</span>
                                    </div> : null}
                                   {book?.volumeInfo.language  ? <div className="bookLeftBottomInfoItem">
                                        <p className="bookLeftBottomInfoTitle">Language</p>
                                        <span className="bookLeftBottomInfoDescr">{book?.volumeInfo.language}</span>
                                    </div> : null}
                                    { book?.volumeInfo.categories ? <div className="bookLeftBottomInfoItem">
                                        <p className="bookLeftBottomInfoTitle">Genre</p>
                                        <span className="bookLeftBottomInfoDescr">{book?.volumeInfo.categories}</span>
                                    </div> : null}
                                    {book?.volumeInfo.pageCount ? <div className="bookLeftBottomInfoItem">
                                        <p className="bookLeftBottomInfoTitle">Page</p>
                                        <span className="bookLeftBottomInfoDescr">{book?.volumeInfo.pageCount}</span>
                                    </div> : null}
                                    {book?.volumeInfo.description ? <div className="bookLeftBottomInfoItem">
                                        <p className="bookLeftBottomInfoTitle">Description</p>
                                        <span className="bookLeftBottomInfoDescr">{book?.volumeInfo.description ? 'done' : 'none'}</span>
                                    </div> : null}
                                </div>
                                <Link to="#" className="bookLink" style={{
                                    width: '100%', marginTop: 80, border: '1px solid #FF971D',
                                    borderRadius: 10, background: 'transparent', color: '#FF971D'
                                }}>See comment</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

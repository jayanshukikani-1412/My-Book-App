import React from 'react';
import { useContext } from 'react';
import BooksContext from '../Context/booksContext';
import BookShow from './BookShow';

const BookList = () => {
    const {books} = useContext(BooksContext);

    const renderedBooks = books.map((book) => {
        return (
            <BookShow
                key={book.id}
                book={book}
            />
        )
    })
    return (
        <div className='book-list'>
            {renderedBooks}
        </div>
    )
}

export default BookList

import React, { useState, useContext } from 'react'
import BooksContext from '../Context/booksContext';

const BookEdit = ({book,onSubmit}) => {
    const [title, setTitle] = useState(book.title);
    const {editBookById} = useContext(BooksContext);

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
        editBookById(book.id, title);
    }

    return (
        <form className='book-edit' onSubmit={handleSubmit  }>
            <label>Title</label>
            <input
                type="text"
                className='input'
                value={title}
                onChange={handleChange} />
            <button className='button is-primary'>save</button>
        </form>
    )
}

export default BookEdit

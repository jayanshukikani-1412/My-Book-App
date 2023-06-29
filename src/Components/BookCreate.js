import React, { useState } from 'react'

const BookCreate = ({ onCreate }) => {
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const HandleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle('');
    }

    return (
        <div className='book-create'>
            <h3>Add a Book</h3>
            <form onSubmit={HandleSubmit}>
                <label htmlFor="">Title</label>
                <input
                    className='input'
                    type="text"
                    value={title}
                    onChange={handleChange} />
                <button className='button'>Create</button>
            </form>
        </div>
    )
}

export default BookCreate

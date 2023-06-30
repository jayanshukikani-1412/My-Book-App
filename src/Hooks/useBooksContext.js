import { useContext } from "react";
import BooksContext from "../Context/booksContext";

const useBooksContext = () => {
    return useContext(BooksContext);
}

export default useBooksContext
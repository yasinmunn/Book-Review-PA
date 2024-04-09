import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";
import anyNameIsValid from "prop-types";
import { useLoaderData } from "react-router-dom";

const BookSection = ({ bookLink }) => {
    const [books, setBooks] = useState([]);


    useEffect(() => {
        fetch(`/${bookLink}.json`)
            .then((res) => res.json())
            .then((data) => setBooks(data));
    }, [bookLink]);

    return (
        <div>
            
            <h1 className="text-5xl font-semibold mb-10 text-center">Books</h1>
            <div className="grid lg:grid-cols-3 gap-6">
                {books.map((book) => (
                    <BookCard key={book.bookId} book={book}></BookCard>
                ))}
            </div>
        </div>
    );
};
BookSection.propTypes = {
    bookLink: anyNameIsValid.string,
};

export default BookSection;

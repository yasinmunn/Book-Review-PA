import { useEffect, useState } from "react";
import { getStoredReadBooks, getStoredWishlistBooks } from "../../utility/localStorage";
import { useLoaderData } from "react-router-dom";
import ReadAndWishlistBooks from "../ReadAndWishlistBooks/ReadAndWishlistBooks";
import { IoIosArrowDropdown } from "react-icons/io";
import "./ListedBooks.css";

const ListedBooks = () => {
    const books = useLoaderData();
    const [allReadBooks, setAllReadBooks] = useState([]);
    const [allWishlistBooks, setAllWishlistBooks] = useState([]);

    useEffect(() => {
        const storedReadBooks = getStoredReadBooks();

        const readBooks = [];
        for (const id of storedReadBooks) {
            const book = books.find((bk) => bk.bookId === id);
            if (book) {
                readBooks.push(book);
            }
        }
        setAllReadBooks(readBooks);
    }, []);

    useEffect(() => {
        const storedWishlistBooks = getStoredWishlistBooks();

        const wishlistBooks = [];
        for (const id of storedWishlistBooks) {
            const book = books.find((bk) => bk.bookId === id);
            if (book) {
                wishlistBooks.push(book);
            }
        }
        setAllWishlistBooks(wishlistBooks);
    }, []);


    const handleSorting = (type) => {
        if (type === "rating") {

            const readingRatingSort = [...allReadBooks];
            readingRatingSort.sort((a, b) => b.rating - a.rating);
            setAllReadBooks(readingRatingSort);

            const wishlistRatingSort = [...allWishlistBooks];
            wishlistRatingSort.sort((a, b) => b.rating - a.rating);
            setAllWishlistBooks(wishlistRatingSort);
        } else if (type === "page") {
            const readingPageSort = [...allReadBooks];
            readingPageSort.sort((a, b) => b.totalPages - a.totalPages);
            setAllReadBooks(readingPageSort);

            const wishlistPageSort = [...allWishlistBooks];
            wishlistPageSort.sort((a, b) => b.totalPages - a.totalPages);
            setAllWishlistBooks(wishlistPageSort);
        } else if (type === "publish-year") {
            const readingPublishSort = [...allReadBooks];
            readingPublishSort.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            setAllReadBooks(readingPublishSort);
            const wishlistPublishSort = [...allWishlistBooks];
            wishlistPublishSort.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            setAllWishlistBooks(wishlistPublishSort);
        }
    };

    return (
        <div>
            <h2 className="text-5xl font-semibold text-center p-8 bg-[#1313130D]">Books</h2>
            <div className="text-center">
                <div className="dropdown">
                    <summary tabIndex={0} role="button" className="btn btn-accent bg-green-500 hover:bg-green-200 text-white hover:text-black
                     mt-6 text-xl ">
                        Sort By
                        <IoIosArrowDropdown />
                    </summary>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-80 text-xl">
                        <li className="hover:bg-green-200 rounded" onClick={() => handleSorting("rating")}>
                            <a>Rating</a>
                        </li>
                        <li className="hover:bg-green-200 rounded" onClick={() => handleSorting("page")}>
                            <a>Number of pages</a>
                        </li>
                        <li className="hover:bg-green-200 rounded" onClick={() => handleSorting("publish-year")}>
                            <a>Publisher year</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl" aria-label="Read Books" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {allReadBooks.map((book) => (
                        <ReadAndWishlistBooks key={book.bookId} book={book}></ReadAndWishlistBooks>
                    ))}
                </div>
                <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl" aria-label="Wishlist Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {allWishlistBooks.map((book) => (
                        <ReadAndWishlistBooks key={book.bookId} book={book}></ReadAndWishlistBooks>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;

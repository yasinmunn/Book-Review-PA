import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getStoredReadBooks, saveReadBooks, saveWishlistBooks } from "../../utility/localStorage";

const BookCardDetails = () => {
    const books = useLoaderData();
    const { idJame } = useParams();
    const idJameInt = parseInt(idJame);
    const book = books.find((book) => book.bookId === idJameInt);

    const handleReadButtonToast = () => {
        const isAddOnRead = saveReadBooks(idJameInt);
        if (isAddOnRead) {
            toast.success("Books Added to ReadList", {
                position: "top-right",
                autoClose: 2000,
            });
        }

        else {
            toast.warn("You have Already Read this book!", {
                position: "top-right",
                autoClose: 2000,
            });
        }
    };

    const handleWishlistButtonToast = () => {
        const storedReadBooks = getStoredReadBooks();
        const isIncludes = storedReadBooks.find((bookId) => bookId === idJameInt);
        if (isIncludes) {
            toast.warn("You have Already Read this book!", {
                position: "top-right",
                autoClose: 2000,
            });
            return;
        }

        const isAddOnWishlist = saveWishlistBooks(idJameInt);
        if (!isAddOnWishlist) {
            toast.warn("You have Already Wishlist this book!", {
                position: "top-right",
                autoClose: 2000,
            });
        } else {
            toast.success("Books Added to Wishlist", {
                position: "top-right",
                autoClose: 2000,
            });
        }
    };

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl mt-14">
                <figure className="bg-[#1313130F] lg:p-6 lg:w-[50vh] ">
                    <img className="" src={book.image} alt="Book" />
                </figure>

                <div className="card-body lg:w-[60%] justify-center pl-20">
                    <h2 className="text-xl font-semibold text-green-500 mb-4">Book Number: {idJame}</h2>
                    <h2 className="card-title text-4xl font-semibold">{book.bookName}</h2>
                    <h2 className="text-xl mb-4">
                        By: <b>{book.author}</b>
                    </h2>
                    <hr />
                    <b className="text-xl mb-4">{book.category}</b>
                    <hr />
                    <h2 className="text-xl mb-4">
                        <b>Review:</b> {book.review}
                    </h2>

                    <div className="flex gap-2 text-green-500 text-xl mb-4 items-center">
                        <b className="text-black">Tags:</b>
                        {book.tags.map((tag, idx) => (
                            <button className="bth bg-green-50 text-green px-7 py-2 rounded " key={idx}>
                                #{tag}
                            </button>
                        ))}
                    </div>
                    <hr />

                    <div className="text-xl flex gap-12">
                        <div>
                            <h2>Number of Pages:</h2>
                            <h2>Publisher:</h2>
                            <h2>Year of Publishing:</h2>
                            <h2>Rating:</h2>
                        </div>
                        <div>
                            <h2>
                                <b>{book.totalPages}</b>
                            </h2>
                            <h2>
                                <b>{book.publisher}</b>
                            </h2>
                            <h2>
                                <b>{book.yearOfPublishing}</b>
                            </h2>
                            <h2>
                                <b>{book.rating}</b>
                            </h2>
                        </div>
                    </div>
                    <div className="card-actions mt-7">
                        <button onClick={handleReadButtonToast} className="rounded-xl border mr-4 font-normal hover:bg-green-700  hover:text-white  px-8 py-4">
                            Read
                        </button>
                        <button onClick={handleWishlistButtonToast} className="rounded-xl hover:bg-[#12b4dd] bg-[#438292] px-8 py-4 text-white hover:text-white font-normal">
                            Wishlist
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookCardDetails;

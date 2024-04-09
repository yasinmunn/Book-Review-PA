import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { LuMapPin } from "react-icons/lu";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineFindInPage } from "react-icons/md";

const ReadAndWishlistBooks = ({ book }) => {
    const { bookId, image } = book;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl p-6 mb-6  border-red-100 border-2">
           <div className="max-w-[200px] flex items-center rounded-md">
           <figure className="bg-[#1313130D] p-6 ">
                <img src={image} alt="Book" />
            </figure>
           </div>
            <div className="card-body text-lg w-[100%]">
                <h2 className="card-title text-3xl">{book.bookName}</h2>
                <p className="mb-3 font-normal">
                    <b>By:</b> {book.author}
                </p>
                <div className="lg:flex gap-4 items-center mb-2">
                    <b>Tag</b>
                    {book.tags.map((tag, idx) => (
                        <button className="bth bg-green-100 text-green px-7 py-2 rounded font-normal" key={idx}>
                            <b>#{tag}</b>
                        </button>
                    ))}
                    <b className="justify-start flex font-normal items-center gap-3">
                        <LuMapPin />
                        Year of Publishing: {book.yearOfPublishing}
                    </b>
                </div>

                <div className="lg:flex gap-4">
                    <span className="flex justify-center items-center gap-2">
                        <FaUserFriends />
                        Publisher: {book.publisher}
                    </span>
                    <span className="flex justify-center items-center gap-2">
                        <MdOutlineFindInPage />
                        Page: {book.totalPages}
                    </span>
                </div>
                <hr className="mt-2 mb-2" />

                <div className="lg:flex gap-6">
                    <button className="bg-[#FFAC33] p-3 rounded-2xl">Category: {book.category}</button>
                    <button className="bg-[#328EFF26] p-3 rounded-2xl">Rating: {book.rating}</button>
                    <NavLink to={`/${book.type}/${bookId}`}>
                        <button className="btn btn-success text-white text-lg">View Details</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

ReadAndWishlistBooks.propTypes = {
    book: PropTypes.object,
};

export default ReadAndWishlistBooks;

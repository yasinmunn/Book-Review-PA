import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div className="mb-28 rounded-3xl block lg:flex justify-between items-center p-6 lg:px-32 lg:py-16 bg-[#1313130F]">
            <div className="max-w-2xl leading-[3rem]">
                <h1 className="text-4xl lg:text-6xl font-semibold font-serif">Books To Freshen Up Your Bookshelf</h1>
                <NavLink to={"/listedBooks"}>
                    <button className="mt-10 bg-[#23BE0A] px-7 py-5 text-xl text-white font-bold rounded-md">View The List</button>
                </NavLink>
            </div>
            <div className="mt-5 lg:w-1/2 flex justify-center">
                <img src="/bannerBook.png" alt=""></img>
            </div>
        </div>
    );
};

export default Banner;

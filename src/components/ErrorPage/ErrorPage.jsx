import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center text-9xl">
            <h2>Oops!!! 404</h2>
            <Link to={"/"}>
                <button className="btn btn-warning">Go back to Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;

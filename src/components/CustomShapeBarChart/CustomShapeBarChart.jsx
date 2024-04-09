import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from "recharts";
import { getStoredReadBooks } from "../../utility/localStorage";
import { useLoaderData } from "react-router-dom";

function CustomShapeBarChart() {
    const colors = ["#00C49F", "#FFBB28", "#0088FE", "#FFBB28", "#FF8042", "red", "#00C49F", "#FFBB28", "pink", "#FF8042", "#00C49F", "#FF8042", "pink", "#FFBB28", "#0088FE"];

    const books = useLoaderData();
    const [allReadBooks, setAllReadBooks] = useState([]);
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


    const getPath = (x, y, width, height) =>
        `M${x},${y + height}
        C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    const CustomTooltip = ({ payload, label, active }) => {
        if (active) {
            return (
                <div className="custom-tooltip">
                    <div className="text-black text-sm font-bold">
                        <p>Book Name:--- {`${label}`} </p>
                        <p className="text-green-600"> Page:--- {`${payload[0].value}`}</p>
                    </div>
                </div>
            );
        }

        return null;
    };

    if (allReadBooks.length === 0) {
        return <h2 className="text-7xl text-center">Read Books is Empty.</h2>;
    }
    return (
        <div>
            <BarChart width={1000} height={300} data={allReadBooks}>
                <Bar dataKey="totalPages" fill="#FF69B4" shape={<TriangleBar />} label={{ position: "top" }}>
                    {books.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>

                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Tooltip content={<CustomTooltip />}></Tooltip>
            </BarChart>
        </div>
    );
}

export default CustomShapeBarChart;

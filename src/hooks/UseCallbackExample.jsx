import { useEffect, useState, useCallback } from 'react';

const List = ({ getItems }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getItems());
        console.log("Updating items ... ")
    }, [getItems]);

    return items.map((item, index) => <div key={index}>{item}</div>);
};
const UseCallbackExample = () => {

    const [number, setNumber] = useState(1);
    const [colorChange, setColorChange] = useState(false);

    // using useMemo for heavy or slow function
    const getItems = useCallback(() => {
        return [number, number + 1, number + 2]
    }, [number]);

    // using useMemo for refrential equality
    // refrential equality means if the value is same then it will not re-render
    const appStyle = {
        backgroundColor: colorChange ? 'orange' : ''
    };

    return (
        <div className="container">
            <div style={appStyle} className="w-full flex flex-col gap-4 items-center justify-center mt-4">
                <div role="alert" className="w-1/2 text-center shadow-lg border-s-4 border-e-4 border-green-700 bg-green-50 p-4">
                    <div className="flex justify-center items-center gap-2 text-green-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                            <path
                                fillRule="evenodd"
                                d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                clipRule="evenodd"
                            />
                        </svg>

                        <strong className="font-medium"> آشنایی با هوک useMemo </strong>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col items-center justify-center gap-4">

                    <input
                        type="number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        placeholder="عددی وارد کن"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                        onClick={() => setColorChange(!colorChange)}
                        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        رنگ رو تغییر بده
                    </button>
                    <div style={appStyle} className='text-center mx-auto'>
                        <List getItems={getItems} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UseCallbackExample;
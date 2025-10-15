import { useState, useEffect, useLayoutEffect } from 'react';

/*
* Note
* -- steps before useEffect function runs in react
* 1- User takes action -> clicking some button
* 2- React changes the state 
* 3- React handles DOM mutations
* 4- Browser prints the DOM changes to browser screen
* 5- After browser prints the DOM changes to screen, then the useEffect function fires
*/

/*
* Note
* -- useLayoutEffect function runs before the browser prints the DOM changes to screen
* -- useLayoutEffect function runs synchronously after all DOM mutations
* -- useLayoutEffect function runs before useEffect function
*/

const UseLayoutEffectExample = () => {

    const [count, setCount] = useState(1);

    useEffect(() => {
        console.log("first useEffect function is running ... 🏃‍♂️");
    }, [count]);

    useEffect(() => {
        console.log("second useEffect function is running ... 🏃‍♂️");
    }, [count]);

    useLayoutEffect(() => {
        console.log(`(useLayoutEffect) function is running ... 🏃‍♂️`);
    }, [count]);

    return (
        <div className="container">
            <div className="w-full flex flex-col gap-4 items-center justify-center mt-4">
                <div role="alert" className="w-1/2 text-center shadow-lg border-s-4 border-e-4 border-green-700 bg-green-50 p-4">
                    <div className="flex justify-center items-center gap-2 text-green-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                            <path
                                fillRule="evenodd"
                                d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                clipRule="evenodd"
                            />
                        </svg>

                        <strong className="font-medium"> آشنایی با هوک useLayoutEffect </strong>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col items-center justify-center gap-4">
                    <button
                        onClick={() => setCount(count + 1)}
                        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        اضافه کن
                    </button>
                    <input type="number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        value={count}
                        onChange={(e) => setCount(e.target.value)} />
                    <button
                        onClick={() => setCount(count - 1)}
                        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        کم کن
                    </button>
                </div>
            </div>

        </div>
    )
}

export default UseLayoutEffectExample;
import {  useRef, useEffect, useState } from 'react';

const UseRefExample = () => {

    const inputRef = useRef(null);

    const [name, setName] = useState('');
    const prevName = useRef(null);
    const renderCount = useRef(1);
    const inputFocus = () => {
        inputRef.current.focus();
    }

    useEffect(()=>{
        prevName.current = name;
    }, [name])

    useEffect(()=>{
        renderCount.current = renderCount.current + 1;
    })

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

                        <strong className="font-medium"> آشنایی با هوک useRef </strong>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col items-center justify-center gap-4">
                    <p>
                        نام ورودی برابر است با : 
                        <span className="font-bold text-white bg-blue-600 rounded-md">
                            {name}
                        </span>
                    </p>
                    <p>
                        نام ورودی قبلی برابر است با : 
                        <span className="font-bold text-white bg-blue-600 rounded-md">
                            {prevName.current}
                        </span>
                    </p>
                    <p>
                        تعداد رندر انجام شده تا به الان : 
                        <span className="font-bold text-white bg-blue-600 rounded-md">
                            {renderCount.current}
                        </span>
                    </p>
                    <label htmlFor="Email" className="relative w-full shadow-lg">
                        <input
                            
                            onChange={(e) => setName(e.target.value)}
                            ref={inputRef}
                            type="text"
                            placeholder="اسم بده عزیزم"
                            className="peer mt-0.5 w-full px-4 py-2 h-10 rounded border-gray-300 shadow-sm sm:text-sm"
                        />
                    </label>

                    <button
                        onClick={inputFocus}
                        className="w-full inline-block shadow-lg rounded-sm border border-blue-600 bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
                        href="#"
                    >
                        تمرکز کن
                    </button>
                </div>
            </div>

        </div>
    )
}

export default UseRefExample;
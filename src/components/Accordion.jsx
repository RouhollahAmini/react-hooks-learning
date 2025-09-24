const Accordion = ({ children, title }) => {

    return (
        <div class="border border-gray-400 divide-y divide-gray-200 rounded-xl mt-5 shadow-2xl">
            <details class="p-6 group" close>
                <summary class="flex items-center justify-between cursor-pointer">
                    <h5 class="text-lg font-medium text-gray-900">
                        {title}
                    </h5>

                    <span class="relative flex-shrink-0 ml-1.5 w-5 h-5">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span>
                </summary>

                <p class="mt-4 leading-relaxed text-gray-700">
                    {children}
                </p>
            </details>
        </div>
    );
};
export default Accordion;
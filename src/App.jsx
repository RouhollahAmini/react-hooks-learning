import Accordion from './components/Accordion';
import { UseRefExample, UseMemoExample, UseCallbackExample, UseReducerExample } from './hooks';

import './App.css'

function App() {

    return (
        <div className='container bg-gray-100 rounded-xl'>
            <div className='p-2'>
                <h2 className='text-2xl'>
                    یادگیری هوک های ری اکت 🚀
                </h2>
            </div>
            <hr className='bg-gray-600/40 shadow-lg' />
            <Accordion title='مثال هوک useRef'>
                <UseRefExample />
            </Accordion>
            <Accordion title='مثال هوک useMemo'>
                <UseMemoExample />
            </Accordion>
            <Accordion title='مثال هوک useCallback' >
                <UseCallbackExample />
            </Accordion>
            <Accordion title='مثال هوک useReducer'>
                <UseReducerExample />
            </Accordion>
        </div>
    )
}

export default App

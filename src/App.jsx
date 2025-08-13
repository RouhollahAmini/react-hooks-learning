import UseRefExample from './hooks/UseRefExample';

import './App.css'

function App() {

    return (
        <div className='container'>
            <div className='p-2'>
                <h2 className='text-2xl'>
                    یادگیری هوک های ری اکت 🚀
                </h2>
            </div>
            <hr className='bg-gray-600/40 shadow-lg' />
            <UseRefExample />
        </div>
    )
}

export default App

import React, { useState } from 'react'
import data from './data'

function Hero() {
    const [showForm, setShowForm] = useState(false)
    const [formData, setFormData] = useState({
        modelName: "",
        modelType: "",
        llm: "",
        modelDescription: ""
    })
    const [search, setSearch] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: 'modelName', direction: 'ascending' });
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const smallDescription = (description) => {
        const words = description.split(' ');
        if (words.length > 2) {
            return words.slice(0, 2).join(' ') + '...';
        }
        return description;
    };

    const handleButtonClick = () => {
        setShowForm(!showForm)
    }

    const handleCancel = () => {
        setFormData({
            modelName: "",
            modelType: "",
            llm: "",
            modelDescription: "" 
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        setFormData({
            modelName: "",
            modelType: "",
            llm: "",
            modelDescription: "" 
        })
        setShowForm(false)
    }

    const handleSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    }

    const sortedModels = [...data.models].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });

    const filteredModels = sortedModels.filter((item) => {
        if (!search) return true;

        const searchTerm = search.toString().toLowerCase().trim();
        const modelName = (item.modelName || '').toLowerCase();
        const modelId = (item.id || '').toString().toLowerCase();
        return modelName.includes(searchTerm) || modelId.includes(searchTerm);
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredModels.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredModels.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const pageNumbers = []
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
        1
    }

    return (
        <div className='w-screen h-screen px-6 pt-6 bg-slate-50 shadow-lg'>
            <div className='flex justify-between bg-white py-6 shadow-lg'>
                <h1 className='text-lg pl-6'>Model Library</h1>
                <button onClick={handleButtonClick} className='bg-indigo-600 mr-5 px-4 py-2 rounded-md text-white '>+ Create New Model</button>
            </div>
            {showForm && (
                <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 '>
                    <div className='fixed inset-0 flex items-center justify-center z-50 '>
                        <div className='flex flex-col justify-center w-[45vh] rounded-md m-auto p-4 bg-white'>
                            <div className='flex justify-between items-center border-b-2 pb-2 px-3'>
                                <h2 className='text-md font-medium pb-2'>Create new Model</h2>
                                <button className='pb-2' onClick={handleButtonClick}><img src="/close.svg" alt="close" /></button>
                            </div>
                            <form name='form' id='form' onSubmit={handleSubmit}>
                                <div className='mb-4 pt-4'>
                                    <label className='block text-gray-700 text-xs mb-1' htmlFor='modelName'>
                                        Model Name
                                    </label>
                                    <input
                                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline'
                                        id='modelName'
                                        type='text'
                                        name='modelName'
                                        value={formData.modelName}
                                        placeholder='Enter Model Name'
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label className='block text-gray-700 text-xs font-normal mb-1' htmlFor='modelName'>
                                        Model Type
                                    </label>
                                    <select onChange={handleChange} name='modelType' value={formData.modelType} className='shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-400 leading-tight focus:outline-none focus:shadow-outline'>
                                        <option value="" disabled>Select</option>
                                        <option value="supervised">Supervised Learning</option>
                                        <option value="unupervised">Unupervised Learning</option>
                                        <option value="semisupervised">Semi-Supervised Learning</option>
                                        <option value="ensemble">Ensemble Models</option>
                                        <option value="genrative">Generative Models</option>
                                    </select>
                                </div>
                                <div className='mb-4'>
                                    <label className='block text-gray-700 text-xs font-normal mb-1' htmlFor='modelName'>
                                        LLM
                                    </label>
                                    <select onChange={handleChange} name='llm' value={formData.llm} className='shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline' >
                                        <option value="" disabled>Select LLM</option>
                                        <option value="gpt-4">GPT-4</option>
                                        <option value="palm">PaLM</option>
                                        <option value="lamda">LaMDA</option>
                                        <option value="bloom">Bloom</option>
                                        <option value="t5">T5</option>
                                        <option value="llama">LLaMA</option>
                                        <option value="opt">OPT</option>
                                        <option value="claude">Claude</option>
                                    </select>
                                </div>
                                <div className='mb-4'>
                                    <label className='block text-gray-700 text-xs font-normal mb-1' htmlFor='modelDescription'>
                                        Model Description
                                    </label>
                                    <textarea
                                        className='shadow appearance-none border rounded text-sm w-full h-24 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                        id='modelDescription'
                                        placeholder='Enter Model Description'
                                        name='modelDescription'
                                        value={formData.modelDescription}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='flex gap-4 items-center justify-between'>
                                    <button
                                        className='bg-indigo-200 hover:bg-blue-700 py-2 text-sm font-thin text-white w-1/2 rounded-md focus:outline-none focus:shadow-outline'
                                        type='button'
                                        onClick={handleCancel}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className='bg-indigo-600 text-sm font-thin hover:bg-yellow-700 py-2 text-white w-1/2 rounded-md focus:outline-none focus:shadow-outline'
                                        type='submit'
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            <div className='flex items-center pl-6 pb-6 bg-white gap-4 z-10'>
                <div className='relative w-9/12 bg-white'>
                    <input
                        type="text"
                        placeholder="Search by Name, ID"
                        onChange={(e) => setSearch(e.target.value)}
                        className="bg-gray-100 appearance-none rounded w-full py-4 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline pl-10"
                    />
                    <svg
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        aria-hidden="true"
                    >
                        <path d="m19 19-3.5-3.5"></path>
                        <circle cx="11" cy="11" r="6"></circle>
                    </svg>
                </div>
                <button className='flex items-center gap-1 rounded-sm bg-gray-100 px-3 py-3'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.3302 16.5929H4.02944" stroke="#767676" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13.1405 6.90037H19.4412" stroke="#767676" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.72629 6.84625C8.72629 5.5506 7.66813 4.5 6.36314 4.5C5.05816 4.5 4 5.5506 4 6.84625C4 8.14191 5.05816 9.19251 6.36314 9.19251C7.66813 9.19251 8.72629 8.14191 8.72629 6.84625Z" stroke="#767676" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M20 16.5537C20 15.2581 18.9427 14.2075 17.6377 14.2075C16.3319 14.2075 15.2737 15.2581 15.2737 16.5537C15.2737 17.8494 16.3319 18.9 17.6377 18.9C18.9427 18.9 20 17.8494 20 16.5537Z" stroke="#767676" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className='text-gray-400 text-sm'>Filters</span>
                </button>
                <button className='flex items-center gap-2 bg-gray-100 px-6 py-3 rounded'>
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 3H3C1.89543 3 1 3.89543 1 5V17C1 18.1046 1.89543 19 3 19H15C16.1046 19 17 18.1046 17 17V5C17 3.89543 16.1046 3 15 3Z" stroke="#767676" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13 1V5" stroke="#767676" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5 1V5" stroke="#767676" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M1 9H17" stroke="#767676" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 13H9" stroke="#767676" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 13V16" stroke="#767676" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <span className='text-gray-400 text-sm'>January 9-January 17</span>
                </button>
            </div>
            {/* // data Table */}
            <div className="relative overflow-x-auto sm:rounded-lg bg-white">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400 border-b-2">
                        <tr>
                            <th scope="col" className="px-6 py-3 flex gap-1 cursor-pointer" onClick={() => handleSort('modelName')}>
                                <h3 className='font-normal text-sm'>Model Name</h3>
                                <img src="/arrowupdown.svg" alt="" />
                            </th>
                            <th scope="col" className="px-6 py-3 cursor-pointer" onClick={() => handleSort('modelType')}>
                                <h3 className='font-normal text-sm'>Model Type</h3>
                            </th>
                            <th scope="col" className="px-6 py-3 cursor-pointer" onClick={() => handleSort('description')}>
                                <h3 className='font-normal text-sm'>Description</h3>
                            </th>
                            <th scope="col" className="px-6 py-3 cursor-pointer" onClick={() => handleSort('createdOn')}>
                                <h3 className='font-normal text-sm'>Created On</h3>
                            </th>
                            <th scope="col" className="px-6 py-3 cursor-pointer" onClick={() => handleSort('lastTrainedOn')}>
                                <h3 className='font-normal text-sm'>Last Trained On</h3>
                            </th>
                            <th scope="col" className="px-10 py-3 cursor-pointer" onClick={() => handleSort('status')}>
                                <h3 className='font-normal text-sm'>Status</h3>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <h3 className='font-normal text-sm'>Action</h3>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {currentItems.map((model) => (
                            <tr key={model.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 whitespace-nowrap ">
                                    <h3 className='font-normal text-black'>{model.modelName}</h3>
                                    <p className='text-gray-400 font-light text-xs '>{model.id}</p>
                                </th>
                                <td className="px-6 py-4 font-normal text-slate-800">
                                    {model.modelType}
                                </td>
                                <td className="px-6 py-4 text-slate-800">
                                    {smallDescription(model.description)}
                                </td>
                                <td className="px-6 py-4 text-slate-800">
                                    {model.createdOn}
                                </td>
                                <td className="px-6 py-4 text-slate-800">
                                    {model.lastTrainedOn}
                                </td>
                                <td className="px-6 py-4">
                                    {model.status === "active" ? (<button className='bg-green-100 px-6 py-2 rounded-md text-green-600'>Active</button>) : (<button className='bg-red-100 px-5 py-2 rounded-md text-red-600'>Inactive</button>)}
                                </td>
                                <td className="px-12 py-4">
                                    <img src="/action.svg" alt="" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-between pt-16 px-5">
                    <div>
                        <span className='text-sm  text-gray-500'>Showing {currentPage} to {itemsPerPage} of 40 results</span>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={handlePreviousPage}
                            disabled={currentPage === 1}
                            className="px-4 py-2  rounded disabled:opacity-50"
                        >
                           <img src="/arrowback.svg" alt="" />
                        </button>
                        {pageNumbers.map(number => (
                            <button
                                key={number}
                                onClick={() => handlePageClick(number)}
                                className={`px-4 py-3 text-blue-600 text-sm rounded-full ${currentPage === number ? 'bg-blue-600 text-slate-50' : ''}`}
                            >
                                {number}
                            </button>
                        ))}
                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 rounded disabled:opacity-50"
                        >
                          <img src="/Arrow.svg" alt="" />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero
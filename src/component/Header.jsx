const Header = () => {
    return (
        <header className="flex justify-between items-center p-3 pb-1">
            <span>LOGO</span>
            <div className="flex-grow px-2">
                <h2>Untitled Document</h2>
                <div className="flex items-center text-sm space-x-1 -ml-1 h-8 text-gray-800">
                    <p className="cursor-pointer hover:bg-gray-200 transition ease-out p-2 rounded-lg ">File</p>
                    <p className="cursor-pointer hover:bg-gray-200 transition ease-out p-2 rounded-lg ">Edit</p>
                    <p className="cursor-pointer hover:bg-gray-200 transition ease-out p-2 rounded-lg ">View</p>
                    <p className="cursor-pointer hover:bg-gray-200 transition ease-out p-2 rounded-lg ">Insert</p>
                    <p className="cursor-pointer hover:bg-gray-200 transition ease-out p-2 rounded-lg ">Format</p>
                    <p className="cursor-pointer hover:bg-gray-200 transition ease-out p-2 rounded-lg ">Tools</p>
                </div>
            </div>

            <button className="hidden md:!inline-flex px-6 py-3 bg-blue-200 rounded-3xl">Share</button>

            <img
                src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=766&q=80"
                className='cursor-pointer rounded-full h-10 w-10 ml-2'
                alt='img'
            />

        </header>
    )
}

export default Header
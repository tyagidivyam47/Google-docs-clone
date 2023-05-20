import { AiOutlineStar, AiOutlineLock } from "react-icons/ai";
import { BsChatRightText } from "react-icons/bs";
import { SiGooglemeet } from "react-icons/si";
const Header = () => {
    return (
        <header className="flex justify-between items-center p-3 pb-1">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#2196f3" d="M37,45H11c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h19l10,10v29C40,43.657,38.657,45,37,45z" /><path fill="#bbdefb" d="M40 13L30 13 30 3z" /><path fill="#1565c0" d="M30 13L40 23 40 13z" /><path fill="#e3f2fd" d="M15 23H33V25H15zM15 27H33V29H15zM15 31H33V33H15zM15 35H25V37H15z" /></svg>
            </span>
            <div className="flex-grow px-2">
                <div className="flex">
                    <h2>Untitled Document </h2>
                    <span className="ml-6 mt-1 cursor-pointer">
                        <AiOutlineStar />
                    </span>
                </div>

                <div className="flex items-center text-sm space-x-1 -ml-1 h-8 text-gray-800">
                    <p className="cursor-pointer hover:bg-gray-200 transition ease-out p-2 rounded-lg ">File</p>
                    <p className="cursor-pointer hover:bg-gray-200 transition ease-out p-2 rounded-lg ">Edit</p>
                    <p className="cursor-pointer hover:bg-gray-200 transition ease-out p-2 rounded-lg ">View</p>
                    <p className="cursor-pointer hover:bg-gray-200 transition ease-out p-2 rounded-lg ">Insert</p>
                    <p className="cursor-pointer hover:bg-gray-200 transition ease-out p-2 rounded-lg ">Format</p>
                    <p className="cursor-pointer hover:bg-gray-200 transition ease-out p-2 rounded-lg ">Tools</p>
                </div>
            </div>


            <span className="cursor-pointer hover:bg-gray-300 p-2 rounded-full transition">
                <BsChatRightText />
            </span>
            <span className="ml-8 mr-8 cursor-pointer hover:bg-gray-300 p-2 rounded-full transition">
                <SiGooglemeet />
            </span>

            <button className="hidden md:!inline-flex px-6 py-3 bg-blue-200 rounded-3xl text-base hover:bg-blue-300 transition">
                <span className="mr-3 mt-1 font-bold">
                    <AiOutlineLock />
                </span>
                Share
            </button>

            <img
                src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=766&q=80"
                className='cursor-pointer rounded-full h-10 w-10 ml-2'
                alt='img'
            />

        </header>
    )
}

export default Header
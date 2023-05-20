import { SiGooglekeep, SiGooglehangouts } from "react-icons/si";
import { FcGoogle, FcDocument } from "react-icons/fc";
import { AiOutlinePlus } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

const Sidebar = () => {
    return (
        <div className="mr-4 pl-2">

            <div className="text-3xl mb-11 mt-3 cursor-pointer hover:bg-gray-300 p-2 rounded-full transition">
                <FcGoogle/>
            </div>
           <div className="text-yellow-400 text-3xl mb-11 mt-3 cursor-pointer hover:bg-gray-300 p-2 rounded-full transition">
             <SiGooglekeep />
            </div>

            <div className="text-green-800 text-3xl mb-11 cursor-pointer hover:bg-gray-300 p-2 rounded-full transition">
                <SiGooglehangouts/>
            </div>

            <div className="text-red-600 text-3xl mb-11 cursor-pointer hover:bg-gray-300 p-2 rounded-full transition">
                <MdLocationOn/>
            </div>

            <div className="text-blue-500 text-3xl mb-11 cursor-pointer hover:bg-gray-300 p-2 rounded-full transition">
                <FcDocument/>
            </div>

            <div className="text-black text-3xl pt-16 mb-11 cursor-pointer hover:bg-gray-300 p-2 rounded-full transition">
                <AiOutlinePlus />
            </div>
        </div>
    )
}

export default Sidebar
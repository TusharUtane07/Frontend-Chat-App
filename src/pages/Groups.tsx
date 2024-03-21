import { CiSearch } from "react-icons/ci";
import user from "../assests/user.jpeg";
import { FiPlus } from "react-icons/fi";

const Groups = () => {
	return (
		<div className="bg-[#F8FAFF] w-full md:w-[300px] pl-2">
			<div className="">
				<h1 className=" mt-2 text-2xl font-semibold">Chats</h1>
			</div>
			<div className="bg-[#EAF2FE] rounded-xl flex items-center gap-3 h-10 px-4 mr-4 ml-2 mt-3 ">
				<div>
					<CiSearch />
				</div>
				<div className="">Search</div>
			</div>
			<div className="mt-4 mb-2 flex items-center justify-center gap-2 ">
				<p className="text-center">Create new group</p>
				<FiPlus />
			</div>
			<p className="bg-black h-[1px] mr-6 ml-4"></p>
			<div className="mt-2">
				<div className=" bg-white ml-2 mr-4 mt-4 rounded-xl  h-16 flex items-center justify-evenly">
					<img src={user} alt="" className="w-10 object-cover rounded-full" />
					<div>
						<p>Animal Kingdom</p>
						<p className="text-xs">you: hi, pink</p>
					</div>
					<div className="text-xs">09:36</div>
				</div>
			</div>
		</div>
	);
};

export default Groups;

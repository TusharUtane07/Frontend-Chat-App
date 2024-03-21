import { CiSearch } from "react-icons/ci";
import user from "../assests/user.jpeg";

const Messages = () => {
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
			<div className="mt-2">
				<p className="">All chats</p>
			</div>
			<div className="mt-2">
				<div className=" bg-white ml-2 mr-4 rounded-xl  h-16 flex items-center justify-evenly">
					<img src={user} alt="" className="w-10 object-cover rounded-full" />
					<div>
						<p>Pink Panda</p>
						<p className="text-xs">you: hi, pink</p>
					</div>
					<div className="text-xs">09:36</div>
				</div>
			</div>
		</div>
	);
};

export default Messages;

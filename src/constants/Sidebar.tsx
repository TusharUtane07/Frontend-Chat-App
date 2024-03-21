import { MdMessage, MdOutlineMessage } from "react-icons/md";
import logo from "../assests/logo.png";
import { HiOutlineUserGroup, HiUserGroup } from "react-icons/hi";
import { BiPhoneCall, BiSolidPhoneCall } from "react-icons/bi";
import { IoSettings, IoSettingsOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const Sidebar = () => {
	return (
		<div className="w-10 h-screen border-r-2 border-black">
			<div>
				<img src={logo} alt="" />
			</div>
			<div>
				<div>
					<MdOutlineMessage />
					<MdMessage />
				</div>
				<div>
					<HiOutlineUserGroup />
					<HiUserGroup />
				</div>
				<div>
					<BiPhoneCall />
					<BiSolidPhoneCall />
				</div>
				<div></div>
				<div>
					<IoSettingsOutline />
					<IoSettings />
				</div>
			</div>
			<div>
				<FaUser />
			</div>
		</div>
	);
};

export default Sidebar;

import { MdMessage, MdOutlineMessage } from "react-icons/md";
import logo from "../assests/logo.png";
import { HiOutlineUserGroup, HiUserGroup } from "react-icons/hi";
import { BiPhoneCall, BiSolidPhoneCall } from "react-icons/bi";
import { IoSettings, IoSettingsOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import line from "../assests/Line.png";

const Sidebar = () => {
	const [activeLink, setActiveLink] = useState<string>("");

	const handleSetActiveLink = (link: string) => {
		setActiveLink(link);
	};

	return (
		<div className="border-r-2 border-black bg-[#F0F4FA] sticky h-screen top-0 ">
			<div className="w-[50px]">
				<div>
					<NavLink to={"/"}>
						<img src={logo} alt="logo" className="p-2" />
					</NavLink>
				</div>
				<div className="flex items-center flex-col text-xl mt-8 gap-10">
					<div>
						<NavLink
							to={"/"}
							className={activeLink === "/" ? "active" : ""}
							onClick={() => handleSetActiveLink("/")}>
							{activeLink === "/" ? (
								<div className="bg-[#5B96F7] px-2 py-2 rounded-xl text-white">
									<MdMessage />
								</div>
							) : (
								<div className="px-2 py-2 rounded-xl">
									<MdOutlineMessage />
								</div>
							)}
						</NavLink>
					</div>
					<div>
						<NavLink
							to={"/groups"}
							className={activeLink === "/groups" ? "active" : ""}
							onClick={() => handleSetActiveLink("/groups")}>
							{activeLink === "/groups" ? (
								<div className="bg-[#5B96F7] px-2 py-2 rounded-xl text-white">
									<HiUserGroup />
								</div>
							) : (
								<div className="px-2 py-2 rounded-xl">
									<HiOutlineUserGroup />
								</div>
							)}
						</NavLink>
					</div>
					<div>
						<NavLink
							to={"/call"}
							className={activeLink === "/call" ? "active" : ""}
							onClick={() => handleSetActiveLink("/call")}>
							{activeLink === "/call" ? (
								<div className="bg-[#5B96F7] px-2 py-2 rounded-xl text-white">
									<BiSolidPhoneCall />
								</div>
							) : (
								<div className="px-2 py-2 rounded-xl">
									<BiPhoneCall />
								</div>
							)}
						</NavLink>
					</div>

					<div>
						<NavLink
							to={"/settings"}
							className={activeLink === "/settings" ? "active" : ""}
							onClick={() => handleSetActiveLink("/settings")}>
							{activeLink === "/settings" ? (
								<div className="bg-[#5B96F7] px-2 py-2 rounded-xl text-white">
									<IoSettings />
								</div>
							) : (
								<div className="px-2 py-2 rounded-xl">
									<IoSettingsOutline />
								</div>
							)}
						</NavLink>
					</div>
					<div className="bottom-3 absolute">
						<NavLink
							to={"profile/id"}
							className={activeLink === "/profile/id" ? "active" : ""}
							onClick={() => handleSetActiveLink("/profile/id")}>
							<FaUser />
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;

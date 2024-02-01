import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";

export const Navbar = () => {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h2>TDT</h2>
			<h3>To Do Tracker</h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">Print</a>
				<a href="/#">History</a>
				<a href="/#">Weekly to Do !!</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}
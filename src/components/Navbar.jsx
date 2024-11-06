import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
const Navbar = () => {
	const [nav, setNav] = useState(false);
	return (
		<div className=' w-full h-[90px] bg-black'>
			<div className=' max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
				<div>
					<h1 className=' text-[#00d8ff]'>DEFI</h1>
				</div>
				<div className=' hidden md:flex'>
					<ul className=' flex text-white items-center'>
						<li>Platform</li>
						<li>Developers</li>
						<li>Community</li>
						<li>About</li>
						<button className=' ml-4'>Use Defi</button>
					</ul>
				</div>
				<div onClick={() => setNav(!nav)} className=' block md:hidden'>
					{nav ? (
						<AiOutlineClose size={30} className=' text-white' />
					) : (
						<AiOutlineMenu size={30} className=' text-white' />
					)}
				</div>

				{/* mobile menu */}
				<div
					className={
						nav
							? ' w-full absolute top-[90px] text-white left-0  bg-black flex justify-center text-center'
							: 'hidden'
					}
				>
					<ul className=''>
						<li className=' text-2xl'>Platform</li>
						<li className=' text-2xl'>Developers</li>
						<li className=' text-2xl'>Community</li>
						<li className=' text-2xl'>About</li>
						<button className=' my-8'>Use Defi</button>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

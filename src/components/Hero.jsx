import heroVid from '../assets/video.mp4'
const Hero = () => {
  return (
		
			<div className=' w-full h-[90vh] top-[90px]'>
				<video
					className=' h-full w-full object-cover -z-10 absolute'
					src={heroVid}
					autoPlay
					loop
					muted
				/>
				<div className='w-full h-[90%] flex justify-center items-center text-white flex-col text-center'>
					<h1>Decentralized</h1>
					<h1 className=' py-4'>
						<span className=' text-[#00d8ff]'>Trading</span> Protocol
					</h1>
					<p className=' text-xl py-4 text-center'>
						Guaranteed liquidity trading for millions of users and top Ethereum
						applications.
					</p>
					<div>
						<button className=' m-2'>Use Defi</button>
						<button className=' m-2'>FAQ</button>
					</div>
				</div>
				<div>
					<p className=' text-center text-white text-2xl'>
						Total Volume Secured: $42,104,783,662.47
					</p>
				</div>
			</div>
		
	);
};

export default Hero;
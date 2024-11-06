
const Subscribe = () => {
  return (
		<div className=' bg-black text-white w-full text-center px-4 py-16'>
			<h1>Join Our DeFi Community</h1>
			<div className=' py-4'>
				<input
					className='p-3 rounded-3xl mr-4 text-black'
					type='email'
					placeholder='Enter your email'
				/>
				<button>Sign Up</button>
			</div>
			<div className=' flex justify-center items-center py-2'>
				<input type='checkbox' />
				<p className=' px-4 font-bold text-xl'>
					Yes, I agree to receive email communications from DeFi.
				</p>
			</div>
		</div>
	);
};

export default Subscribe;
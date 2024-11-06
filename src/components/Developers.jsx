import terminal from '../assets/terminal.png'
const Developers = () => {
  return (
		<div className=' bg-black text-white w-full'>
			<div className='max-w-[1240px] px-4 py-16 text-center'>
				<div>
					<h1 className=' py-4'>Superpowers for DEFI developers.</h1>
				</div>
				<div>
					<p>
						
						Checkout the <span className='blue'>documentation</span>, the
						<span className='blue'>quick start</span> or a guide below to
						integrate your project with thousands of tokens and billions of
						liquidity.
					</p>
				</div>
        <div className=' flex justify-center w-full py-16'>
          <img className=' max-w-[250px] shadow-lg shadow-cyan-500/50' src={terminal} alt="img" />
        </div>
			</div>
		</div>
	);
};

export default Developers;
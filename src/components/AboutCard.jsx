
const AboutCard = (props) => {
  return (
		<div className=' flex flex-col border text-left  px-8 py-12 rounded-2xl'>
			<div>
				<div className=' bg-[#00d8ff] inline-flex p-2 rounded-full text-black'>
					{props.icon}
				</div>
				<h3 className=' text-xl font-bold py-4'>
            {props.heading}
				</h3>
				<p>
            {props.text}
				</p>
			</div>
    
		</div>
	);
};

export default AboutCard;
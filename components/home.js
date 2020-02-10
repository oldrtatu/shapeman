import '../styles/home.css';

const HomePage = () => (
	<React.Fragment>
		<div className="landing_page">
			<div className="landing_content_wrapper">
				<img className="first_dot" src={require('../images/dots.png')} />
				<div className="main_line">We design & build Digital products, brands and experience</div>
				<img className="second_dot" src={require('../images/dots.png')} />
				<div className="get_button">GET IN TOUCH</div>
			</div>
		</div>
        <div className="our_work">
            <div className="head_line">SELECTED WORK</div>
        </div>
	</React.Fragment>
);

export default HomePage;

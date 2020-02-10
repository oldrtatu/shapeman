import Head from 'next/head';
import '../styles/navbar.css';
class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			class: 'menu',
			status: 'close'
		};
	}

	handleSideMenu = () => {
		switch (this.state.status) {
			case 'open':
				this.setState({
					class: 'menu',
					status: 'close'
				});
				break;
			case 'close':
				this.setState({
					class: 'menu active',
					status: 'open'
				});
				break;
			default:
				break;
		}
	};

	render() {
		return (
			<React.Fragment>
				<Head>
					<title>Shapeman Technologies</title>
				</Head>
				<nav className="desktop_nav">
					<div id="logo_name">SHAPEMAN</div>
					<ul className="nav_list">
						<li className="nav_options">WORK</li>
						<li className="nav_options">SERVICES</li>
						<li className="nav_options_last">LET'S TALK</li>
					</ul>
				</nav>
				<nav className="mobile_nav">
					<div className="burger_container" onClick={() => this.handleSideMenu()}>
						<img alt="Menu" className="icon_image" src={require('../images/menu.png')} />
					</div>
					<div id="mobile_logo_name">SHAPEMAN</div>
				</nav>
				<div className={this.state.class}>
					<div className="side_menu_header">
						<div id="mobile_logo">SHAPEMAN</div>
						<div className="close_container" onClick={() => this.handleSideMenu()}>
							<img alt="Menu" className="close_image" src={require('../images/close.png')} />
						</div>
					</div>
					<ul className="side_menu_list">
						<li className="side_menu_options">WORK</li>
						<li className="side_menu_options">SERVICES</li>
						<li className="side_menu_options">LET'S TALK</li>
					</ul>
				</div>
			</React.Fragment>
		);
	}
}

export default NavBar;

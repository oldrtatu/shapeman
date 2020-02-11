import '../styles/footer.css';

const Footer = () => (
	<div className="footer">
		<div className="footer_services">
			<div className="footer_services_heading">Services</div>
			<div className="footer_services_container">
				<div className="services_name">UI/UX Design</div>
				<div className="services_name">IOS App development</div>
				<div className="services_name">Android App development</div>
				<div className="services_name">Website development</div>
				<div className="services_name">Consultancy</div>
				<div className="services_name">Desktop App development</div>
			</div>
		</div>
		<div className="contact">
			<div className="contact_heading">Contact</div>
            <div className="contact_container">
                <div className="contact_lines">hello@shapeman.co</div>
                <div className="contact_lines">+91 9414573503</div>
                <div className="contact_lines">Adani M2K Oyster Grande, Sector - 102</div>
                <div className="contact_lines">Gurugram - 122505</div>
            </div>
		</div>
        <div className="footer_line_break"></div>
        <div className="copyright">Copyright @ Shapeman Technologies Private Limited - 2020</div>
	</div>
);

export default Footer;

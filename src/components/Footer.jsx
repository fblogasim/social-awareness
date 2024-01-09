export default function Footer(){
	return(
		<>
			 <footer className="bg-dark text-light py-4">
        <div className="container">
          <div className="row">
            {/* About Us */}
            <div className="col-md-6 mb-4">
              <h5>About Us</h5>
              <p>We are dedicated to raising awareness about social issues and making a positive impact on the world.</p>
            </div>
            {/* Quick Links */}
            <div className="col-md-3 mb-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Get Involved</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            {/* Contact Information */}
            <div className="col-md-3 mb-4">
              <h5>Contact Us</h5>
              <address>
                <p>Email: info@socialawareness.org</p>
                <p>Phone: +123 456 7890</p>
                <p>Address: 123 Awareness Street, Cityville, Country</p>
              </address>
            </div>
          </div>
          <div style={{float: 'right'}}><p className="small">@Copyright Info</p></div>
        </div>
      </footer>
		</>

		);
}
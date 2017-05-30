import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
		<footer id="footer">
			<div className="text-center padder clearfix">
				<p>
					<small>© X Finances 2017</small>
					<br/><br/>
					<a href="#" className="btn btn-xs btn-circle btn-twitter">
						<i className="fa fa-twitter"></i>
					</a>
					<a href="#" className="btn btn-xs btn-circle btn-facebook">
						<i className="fa fa-facebook"></i>
					</a>
					<a href="#" className="btn btn-xs btn-circle btn-gplus">
						<i className="fa fa-google-plus"></i>
					</a>
				</p>
			</div>
		</footer>
  );
};

export default Footer;

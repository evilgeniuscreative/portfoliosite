import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { softwareLogos, title, description, linkText, link } = props;

	console.log('softwareLogos', softwareLogos);

	const theLogos = softwareLogos.map((logo) => {
		return (
			<span
				className="project-logo"
				key="{logo.id}"
				title={logo.software}
			>
				<img src={logo.img} alt={logo.software} />
			</span>
		);
	});
	console.log("const", theLogos);

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link} target="_blank">
					<div className="project-container">
					<div className="project-logo-wrap">
						{theLogos}
						</div>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<div className="project-link-text">{linkText}</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;

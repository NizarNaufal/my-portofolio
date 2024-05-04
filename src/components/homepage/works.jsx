import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./telkom.jpeg"
								alt="telkom"
								className="work-image"
							/>
							<div className="work-title">Telkom Indonesia</div>
							<div className="work-subtitle">
								Mid Software Engineer - Android
							</div>
							<div className="work-duration">2021 - Present</div>
						</div>

						<div className="work">
							<img
								src="./dvoretsky.jpeg"
								alt="dvoretsky"
								className="work-image"
							/>
							<div className="work-title">PT Keamanan Teknologi Siber ( Dvoretsky Group )</div>
							<div className="work-subtitle">
								Lead Mobile Engineer
							</div>
							<div className="work-duration">2019 - 2021</div>
						</div>

						<div className="work">
							<img
								src="./enesis_group_logo.jpeg"
								alt="enesis"
								className="work-image"
							/>
							<div className="work-title">Enesis Group</div>
							<div className="work-subtitle">
								Software Engineer - Android
							</div>
							<div className="work-duration">2018 - 2019</div>
						</div>

						<div className="work">
							<img
								src="./ptkti.jpeg"
								alt="kti"
								className="work-image"
							/>
							<div className="work-title">PT Korea Telecom Indonesia</div>
							<div className="work-subtitle">
								Software Engineer - Android
							</div>
							<div className="work-duration">2017 - 2018</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;

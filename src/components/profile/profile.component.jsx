import React from "react";
import "./profile.style.css";

import { useParams } from "react-router-dom";
import Card from "../card/card.component";

const Profile = (props) => {
	const id = useParams();
	const candidate = props.candidates.filter((item) => item.id == id.id);
	return (
		<div className="profile">
			<div className="card">
				<Card candidate={candidate[0]} />
			</div>
			<div className="buttons">
				<button
					onClick={() => props.handleAcceptance(id.id)}
					className="button"
					id="shortlist"
				>
					Short List
				</button>
				<button
					onClick={() => props.handleRejection(id.id)}
					className="button"
					id="reject"
				>
					Reject
				</button>
			</div>
		</div>
	);
};

export default Profile;

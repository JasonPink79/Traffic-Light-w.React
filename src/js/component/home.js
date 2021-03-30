import React, { useState } from "react";

export function TrafficLight() {
	const [color, setColor] = useState("red");
	return (
		<div className="d-flex">
			<div className="d-flex flex-column align-items-center justify-content-center">
				<div className="trafficstick"></div>
				<div className="lightbox d-flex flex-column align-items-center justify-content-center">
					<div
						className={
							color === "red" ? "light red selected" : "light red"
						}
						onClick={() => setColor("red")}></div>

					<div
						className={
							color === "yellow"
								? "light yellow selected"
								: "light yellow"
						}
						onClick={() => setColor("yellow")}></div>

					<div
						className={
							color === "green"
								? "light green selected"
								: "light green"
						}
						onClick={() => setColor("green")}></div>
				</div>
			</div>
			<div className="d-flex flex-column align-items-center justify-content-center">
				<div className="signalbox d-flex align-items-center justify-content-center">
					<i
						className={
							color === "red"
								? "far fa-hand-paper"
								: color === "yellow"
								? "fas fa-exclamation-triangle"
								: "fas fa-walking"
						}></i>
				</div>
				<div className="signalpole"></div>
			</div>
		</div>
	);
}

import React, { useState } from "react";
import { Minus, Plus } from "./Icon";
import './Styling.scss'

const FAQ = ({ data, id, icon }) => {
	const [open, setOpen] = useState(0);
	return (
		<>
			<div className="accordion" id={id}>
				{data?.map(({ title, text, icon }, i) => (
					<div
						className={`accordion-item __accordion-item ${
							open == i ? "active" : ""
						}`}
						key={i}
					>
						<h2 className="accordion-header">
							<button
								className={`accordion-button d-flex ${
									open == i ? "" : "collapsed"
								}`}
								type="button"
								data-bs-toggle="collapse"
								data-bs-target={`#accordion-${id}-${i}`}
								aria-expanded="true"
								onClick={() => (open == i ? setOpen(null) : setOpen(i))}
							>
								<span className="serial">
									{icon ? <img src={icon} alt="" /> : `${i + 1}.`}
								</span>{" "}
								{title}
								<span className="ms-auto">
									{open !== i ? <Plus /> : <Minus />}
								</span>
							</button>
						</h2>
						<div
							id={`accordion-${id}-${i}`}
							className={`accordion-collapse collapse ${
								open == i ? "show" : ""
							}`}
							data-bs-parent={`#${id}`}
						>
							<div className="accordion-body">
							
									<p>{text}</p>
							
								
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default FAQ;

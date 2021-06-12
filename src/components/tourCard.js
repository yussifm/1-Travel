import React, { useState } from "react";

const TourCard = ({ Tdata, loader, remove, Refresh }) => {
	const [readMore, setReadMore] = useState(false);

	if (Tdata.length === 0) {
		return (
			<>
				<div>
					<button onClick={() => Refresh()} className="btn btn-refresh">
						Refresh
					</button>
				</div>
			</>
		);
	}

	return (
		<>
			<h2>{loader && "Loading ...."}</h2>

			{Tdata.map((data) => {
				const { id, image, name, info, price } = data;
				return (
					<div key={id}>
						<article>
							<img src={image} alt={name} />
							<div className='title'>
								<h3>{name}</h3>
								<h5>{price}</h5>
							</div>

							<p>
								{readMore ? info : `${info.substring(0, 200)} ....`}
								<button
									className="btn btn-more"
									onClick={() => setReadMore(!readMore)}
								>
									{readMore ? "Show Less" : "Read More"}
								</button>
							</p>

							<button className="btn btn-delete" onClick={() => remove(id)}>
								Not interested
							</button>
						</article>
					</div>
				);
			})}
		</>
	);
};

export default TourCard;

export const ActivityCard = ({ activity }) => {
	return (
		<>
			<h4 className="card-title">{activity.activity}</h4>
			<h5>
				<span className="badge badge-primary badge-pill text-capitalize">
					{activity.type}
				</span>
			</h5>
			<div className="container">
				<div className="row">
					<div
						className="col-sm lead font-weight-bolder text-muted"
						data-toggle="tooltip"
						data-placement="bottom"
						title="Participants"
					>
						<i className="bi bi-people px-2 "></i>
						{activity.participants}
					</div>
					<div
						className="col-sm lead font-weight-bolder text-muted"
						data-toggle="tooltip"
						data-placement="bottom"
						title="Accessibility"
					>
						<i className="bi bi-universal-access-circle px-2"></i>
						{activity.accessibility}
					</div>
					<div
						className="col-sm lead font-weight-bolder text-muted"
						data-toggle="tooltip"
						data-placement="bottom"
						title="Price"
					>
						<i className="bi bi-currency-dollar px-2"></i>
						{activity.price}
					</div>
				</div>
			</div>
			<div className="d-flex justify-content-center">
				<a href={activity.link} className="btn btn-info mt-3">
					More Info
					<span className="pl-2">
						<i className="bi bi-box-arrow-up-right"></i>
					</span>
				</a>
			</div>
		</>
	);
};

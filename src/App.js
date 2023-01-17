import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActivityCard } from "./components/activityCard";
import {
	filterProduct,
	getRandomProduct,
} from "./redux/actions/activityActions";

function App() {
	const initialFilter = { type: "", price: undefined, participants: undefined };
	const activity = useSelector((state) => state.activity.activity);
	const dispatch = useDispatch();
	const [isFiltered, setIsFiltered] = useState(false);
	const [filterProps, setFilterProps] = useState(initialFilter);

	const activityTypes = [
		"education",
		"recreational",
		"social",
		"diy",
		"charity",
		"cooking",
		"relaxation",
		"music",
		"busywork",
	];

	const generateActivity = () => {
		if (isFiltered) {
			if (filterProps.price > 1) setFilterProps({ ...filterProps, price: 1 });
			else if (filterProps.price < 0)
				setFilterProps({ ...filterProps, price: 0 });
			if (filterProps.participants < 0)
				setFilterProps({ ...filterProps, participants: 0 });

			dispatch(filterProduct(filterProps));
		} else dispatch(getRandomProduct());
	};

	return (
		<div className="container mx-auto mt-5 w-50">
			<div className="p-5 border shadow">
				<div className="custom-control custom-switch mb-3">
					<input
						type="checkbox"
						name="option"
						id="switchOption"
						value={isFiltered}
						className="custom-control-input"
						onChange={() => {
							setIsFiltered(!isFiltered);
							setFilterProps(initialFilter);
						}}
					/>
					<label
						htmlFor="switchOption"
						className="custom-control-label text-muted"
					>
						Generate Filtered Activity
					</label>
					{isFiltered ? (
						<form className="row mt-2">
							<div className="col form-group">
								<label
									htmlFor="filterByType"
									className="font-weight-bold text-muted"
								>
									Type
								</label>
								<select
									name="type"
									id="filterByType"
									className="form-control"
									defaultValue=""
									placeholder="Select a type"
									onChange={(val) =>
										setFilterProps({ ...filterProps, type: val.target.value })
									}
								>
									<option value="" key="...">
										...
									</option>
									{activityTypes.map((type) => (
										<option value={type} key={type}>
											{type}
										</option>
									))}
								</select>
							</div>
							<div className="col form-group">
								<label
									htmlFor="filterByParticipants"
									className="font-weight-bold text-muted"
								>
									Participants
								</label>
								<input
									type="number"
									name="participants"
									id="filterByParticipants"
									min={0}
									value={filterProps.participants}
									className="form-control"
									placeholder="Participants"
									onChange={(val) =>
										setFilterProps({
											...filterProps,
											participants: val.target.value,
										})
									}
								/>
							</div>
							<div className="col form-group">
								<label
									htmlFor="filterByPrice"
									className="font-weight-bold text-muted"
								>
									Price
								</label>
								<input
									type="number"
									name="price"
									id="filterByPrice"
									max={1}
									min={0}
									value={filterProps.price}
									step={0.05}
									className="form-control"
									placeholder="Price"
									onChange={(val) =>
										setFilterProps({ ...filterProps, price: val.target.value })
									}
								/>
							</div>
						</form>
					) : (
						<></>
					)}
				</div>
				<div className="container text-center">
					<button
						type="button"
						className="btn btn-outline-primary mx-auto"
						onClick={generateActivity}
					>
						Generate Activity
					</button>
				</div>
			</div>
			<div className="card my-5">
				<h3 className="px-5 pt-3">Activity</h3>
				<hr className="mx-4 my-2" />
				<div className="card-body px-5">
					{activity.key && activity.key !== null ? (
						<ActivityCard activity={activity} />
					) : (
						<h3 className="card-title">No activity to display.</h3>
					)}
				</div>
			</div>
		</div>
	);
}

export default App;

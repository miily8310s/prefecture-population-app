import { FC } from "react";

type CircleSpinnerProps = {
	description: string;
};

export const CircleSpinner: FC<CircleSpinnerProps> = (props) => {
	return (
		<div className="circle-spinner" role="status">
			<span className="visually-hidden">{props.description}</span>
		</div>
	);
};

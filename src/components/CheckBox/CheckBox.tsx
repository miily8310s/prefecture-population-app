import { FC } from "react";

type CheckBoxProps = {
	id: number;
	name: string;
	onChange: (value: boolean, data: { id: number; name: string }) => void;
};

export const CheckBox: FC<CheckBoxProps> = (props) => {
	return (
		<label>
			<input
				type="checkbox"
				onChange={(e) =>
					props.onChange(e.target.checked, {
						id: props.id,
						name: props.name,
					})
				}
			/>
			{props.name}
		</label>
	);
};

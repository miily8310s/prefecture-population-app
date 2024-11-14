import { FC } from "react";
import { Prefecture } from "../../types/prefecture";
import { CheckBox } from "./CheckBox";

type CheckBoxFieldProps = {
	title: string;
	prefectures: Prefecture[];
	onChange: (value: boolean, data: { id: number; name: string }) => void;
};

export const PrefectureCheckBoxField: FC<CheckBoxFieldProps> = (props) => {
	return (
		<fieldset className="field">
			<legend>{props.title}</legend>
			<ul className="checkboxes">
				{props.prefectures.map((prefecture) => (
					<li key={prefecture.prefCode}>
						<CheckBox
							id={prefecture.prefCode}
							name={prefecture.prefName}
							onChange={props.onChange}
						/>
					</li>
				))}
			</ul>
		</fieldset>
	);
};

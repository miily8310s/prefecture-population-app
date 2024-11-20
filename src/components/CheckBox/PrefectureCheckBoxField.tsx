import { FC, MouseEventHandler } from "react";
import { Prefecture } from "../../types/prefecture";
import { CheckBox } from "./CheckBox";

type CheckBoxFieldProps = {
	title: string;
	prefectures: Prefecture[];
	onAllCheck: MouseEventHandler<HTMLButtonElement>;
	onAllReset: MouseEventHandler<HTMLButtonElement>;
	isCheckedPrefecture: (currentCode: number) => boolean;
	onChange: (value: boolean, data: { id: number; name: string }) => void;
};

export const PrefectureCheckBoxField: FC<CheckBoxFieldProps> = (props) => {
	return (
		<fieldset className="field">
			<legend>{props.title}</legend>
			<div className="buttons">
				<button onClick={props.onAllCheck}>すべてにチェック</button>
				<button onClick={props.onAllReset}>チェックをリセット</button>
			</div>
			<ul className="checkboxes">
				{props.prefectures.map((prefecture) => (
					<li key={prefecture.prefCode}>
						<CheckBox
							id={prefecture.prefCode}
							name={prefecture.prefName}
							checked={props.isCheckedPrefecture(prefecture.prefCode)}
							onChange={props.onChange}
						/>
					</li>
				))}
			</ul>
		</fieldset>
	);
};

export default PrefectureCheckBoxField;

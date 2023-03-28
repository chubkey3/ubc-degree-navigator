import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import theme from "../../../theme";

const ChooseRoute = ({ data, setData, selected, setSelected }) => {
	const useHover = () => {
		const [isHover, setIsHover] = useState(false);

		const handleMouseEnter = () => {
			setIsHover(true);
		};

		const handleMouseLeave = () => {
			setIsHover(false);
		};

		return [isHover, handleMouseEnter, handleMouseLeave];
	};

	const [isHover1, handleMouseEnter1, handleMouseLeave1] = useHover();
	const [isHover2, handleMouseEnter2, handleMouseLeave2] = useHover();

	const option = {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 24,
		padding: 39,
		borderRadius: 10,
		borderColor: theme.colors.primaryDark,
		width: "50%",
	};

	return (
		<div className="container" style={container}>
			<div className="header" style={header}>
				<h1 className="title" style={title}>
					Add your transfer credits
				</h1>
				<p className="subTitle" style={subTitle}>
					Do you have any Transfer credits from high school (AP, IB, or A-level
					courses) or another post-secondary institution, including studying
					aboard?
				</p>
			</div>

			<div
				className="option"
				style={{
					...option,
					...{
						backgroundColor:
							selected === "yes" || isHover1
								? "#EBF2FF"
								: theme.colors.primaryLightBackground,
						borderWidth: isHover1 ? 1 : 0,
					},
				}}
				onMouseEnter={handleMouseEnter1}
				onMouseLeave={handleMouseLeave1}
				onClick={() => setSelected("yes")}
			>
				<p></p>
				<p style={text}>Yes</p>
				<ArrowForwardIcon style={{ width: 20, height: 20 }} />
			</div>

			<div
				className="option"
				style={{
					...option,
					...{
						backgroundColor:
							selected === "no" || isHover2
								? "#EBF2FF"
								: theme.colors.primaryLightBackground,
						borderWidth: isHover2 ? 1 : 0,
					},
				}}
				onMouseEnter={handleMouseEnter2}
				onMouseLeave={handleMouseLeave2}
				onClick={() => setSelected("no")}
			>
				<p></p>
				<p style={text}>No</p>
				<ArrowForwardIcon style={{ width: 20, height: 20 }} />
			</div>
		</div>
	);
};

const container = {
	display: "flex",
	flexDirection: "column",
};

const header = {
	marginBottom: 50,
};

const title = {
	fontFamily: theme.fonts.headerOne,
	color: theme.colors.textDark,
	fontWeight: theme.fonts.headerOne,
	fontSize: 32,
	paddingBottom: 16,
};

const subTitle = {
	fontFamily: theme.fonts.headerThreeMedium,
	color: theme.colors.textDark,
	fontWeight: theme.fonts.headerThreeMedium,
	fontSize: 18,
};

const text = {
	fontFamily: theme.fonts.buttons,
	color: theme.colors.textDark,
	fontWeight: theme.fonts.buttons,
	fontSize: 18,
};

export default ChooseRoute;

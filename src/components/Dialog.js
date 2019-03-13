import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { mapToCssModules, tagPropType } from "../utils/utils";

const propTypes = {
	tag: tagPropType,
	rounded: PropTypes.bool,
	dark: PropTypes.bool,
	align: PropTypes.string,
	className: PropTypes.string,
	cssModule: PropTypes.object
};

const defaultProps = {
	tag: "dialog"
};

const Dialog = props => {
	const {
		align,
		dark,
		rounded,
		className,
		cssModule,
		tag: Tag,
		...attributes
	} = props;

	const classes = mapToCssModules(
		classNames(
			className,
			`nes-dialog`,
			dark ? `is-dark` : ``,
			rounded ? `is-rounded` : ``
		),
		cssModule
	);

	const stylePosition = () => {
		let position = "";
		switch (align) {
			case "top-center":
				position = "0 auto auto auto";
				break;
			case "top-right":
				position = "0 0 auto auto";
				break;
			case "top-left":
				position = "0 auto auto 0";
				break;
			case "centered":
				position = "auto auto auto auto";
				break;
			case "center-right":
				position = "auto 0 auto auto";
				break;
			case "center-left":
				position = "auto auto auto 0";
				break;
			case "bottom-left":
				position = "auto 0 0 0";
				break;
			case "bottom-center":
				position = "auto auto 0 auto";
				break;
			case "bottom-right":
				position = "auto 0 0 auto";
				break;
		}
		return position;
	};

	return (
		<Tag
			{...attributes}
			className={classes}
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				bottom: 0,
				right: 0,
				margin: stylePosition()
			}}
		/>
	);
};

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;

export default Dialog;

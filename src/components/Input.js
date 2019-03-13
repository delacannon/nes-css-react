import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { mapToCssModules, tagPropType } from "../utils/utils";

const propTypes = {
	tag: tagPropType,
	dark: PropTypes.bool,
	type: PropTypes.string,
	className: PropTypes.string,
	cssModule: PropTypes.object
};

const defaultProps = {
	type: "text",
	tag: "input"
};

const Input = props => {
	const { type, dark, className, cssModule, tag: Tag, ...attributes } = props;

	const checkInput = ["radio", "checkbox"].indexOf(type) > -1;

	let inputTypeClass = "nes-input";

	if (checkInput) {
		inputTypeClass = `nes-${type}`;
	}

	const classes = mapToCssModules(
		classNames(className, inputTypeClass, dark ? `is-dark` : false),
		cssModule
	);

	return <Tag {...attributes} className={classes} type={type} />;
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;

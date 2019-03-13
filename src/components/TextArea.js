import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { mapToCssModules, tagPropType } from "../utils/utils";

const propTypes = {
	tag: tagPropType,
	color: PropTypes.string,
	className: PropTypes.string,
	cssModule: PropTypes.object
};

const defaultProps = {
	color: "",
	tag: "textarea"
};

const TextArea = props => {
	const { color, className, cssModule, tag: Tag, ...attributes } = props;

	const classes = mapToCssModules(
		classNames(className, "nes-textarea", color ? `is-${color}` : ``),
		cssModule
	);

	return <Tag {...attributes} className={classes} />;
};

TextArea.propTypes = propTypes;
TextArea.defaultProps = defaultProps;

export default TextArea;

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
	tag: "span"
};

const Text = props => {
	const { color, className, cssModule, tag: Tag, ...attributes } = props;

	const classes = mapToCssModules(
		classNames(className, "nes-text", color ? `is-${color}` : ``),
		cssModule
	);

	return (
		<p>
			<Tag {...attributes} className={classes} />
		</p>
	);
};

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;

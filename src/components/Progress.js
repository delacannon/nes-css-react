import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { mapToCssModules, tagPropType } from "../utils/utils";

const propTypes = {
	tag: tagPropType,
	color: PropTypes.string,
	rounded: PropTypes.bool,
	className: PropTypes.string,
	cssModule: PropTypes.object
};

const defaultProps = {
	color: "",
	tag: "progress"
};

const Progress = props => {
	const {
		color,
		rounded,
		className,
		cssModule,
		tag: Tag,
		...attributes
	} = props;

	const classes = mapToCssModules(
		classNames(
			className,
			"nes-progress",
			rounded ? "is-rounded" : false,
			color ? `is-${color}` : ``
		),
		cssModule
	);

	return <Tag {...attributes} className={classes} />;
};

Progress.propTypes = propTypes;
Progress.defaultProps = defaultProps;

export default Progress;

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { mapToCssModules, tagPropType } from "../utils/utils";

const propTypes = {
	tag: tagPropType,
	name: PropTypes.string,
	size: PropTypes.string,
	className: PropTypes.string,
	cssModule: PropTypes.object
};

const defaultProps = {
	color: "",
	tag: "i"
};

const Icon = props => {
	const { size, name, className, cssModule, tag: Tag, ...attributes } = props;

	const classes = mapToCssModules(
		classNames(
			className,
			"nes-icon",
			size ? `is-${size}` : `is-medium`,
			name ? `${name}` : ``
		),
		cssModule
	);

	return <Tag {...attributes} className={classes} />;
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;

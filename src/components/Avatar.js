import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { mapToCssModules, tagPropType } from "../utils/utils";

const propTypes = {
	size: PropTypes.string,
	rounded: PropTypes.bool,
	className: PropTypes.string,
	cssModule: PropTypes.object
};

const defaultProps = {
	tag: "img"
};

const Avatar = props => {
	const {
		size,
		rounded,
		className,
		cssModule,
		required,
		tag: Tag,
		...attributes
	} = props;

	const classes = mapToCssModules(
		classNames(
			className,
			`nes-avatar`,
			size ? `is-${size}` : false,
			rounded ? `is-rounded` : false
		),
		cssModule
	);

	return (
		<Tag
			{...attributes}
			className={classes}
			style={{ imageRendering: "pixelated" }}
		/>
	);
};

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;

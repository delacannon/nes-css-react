import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { mapToCssModules, tagPropType } from "../utils/utils";

const propTypes = {
	tag: tagPropType,
	color: PropTypes.string,
	dark: PropTypes.bool,
	required: PropTypes.bool,
	className: PropTypes.string,
	cssModule: PropTypes.object
};

const defaultProps = {
	color: "",
	tag: "span"
};

const BadgeLabel = props => {
	const {
		dark,
		color,
		splited,
		className,
		cssModule,
		tag: Tag,
		...attributes
	} = props;

	const classes = mapToCssModules(
		classNames(
			className,
			dark ? `is-dark` : ``,
			color ? `is-${color}` : ``
		),
		cssModule
	);

	return <Tag {...attributes} className={classes} />;
};

BadgeLabel.propTypes = propTypes;
BadgeLabel.defaultProps = defaultProps;

export default BadgeLabel;

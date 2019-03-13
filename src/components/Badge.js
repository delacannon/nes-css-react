import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { mapToCssModules, tagPropType } from "../utils/utils";

const propTypes = {
	tag: tagPropType,
	splited: PropTypes.bool,
	icon: PropTypes.bool,
	required: PropTypes.bool,
	className: PropTypes.string,
	cssModule: PropTypes.object
};

const defaultProps = {
	tag: "a"
};

const Badge = props => {
	const {
		icon,
		splited,
		className,
		cssModule,
		tag: Tag,
		...attributes
	} = props;

	const classes = mapToCssModules(
		classNames(
			className,
			`nes-badge`,
			splited ? `is-splited` : ``,
			icon ? `is-icon` : ``
		),
		cssModule
	);

	return <Tag {...attributes} className={classes} href="#" />;
};

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export default Badge;

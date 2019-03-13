import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { mapToCssModules, tagPropType } from "../utils/utils";

const propTypes = {
	tag: tagPropType,
	direction: PropTypes.string,
	className: PropTypes.string,
	cssModule: PropTypes.object,
	innerRef: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.string,
		PropTypes.func
	])
};

const defaultProps = {
	tag: "div"
};

const Balloon = props => {
	const {
		direction,
		className,
		cssModule,
		tag: Tag,
		innerRef,
		...attributes
	} = props;

	const classes = mapToCssModules(
		classNames(
			className,
			"nes-balloon",
			direction ? `from-${direction}` : ``
		),
		cssModule
	);

	return <Tag {...attributes} className={classes} ref={innerRef} />;
};

Balloon.propTypes = propTypes;
Balloon.defaultProps = defaultProps;

export default Balloon;

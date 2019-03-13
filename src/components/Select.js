import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { mapToCssModules, tagPropType } from "../utils/utils";

const propTypes = {
	tag: tagPropType,
	color: PropTypes.string,
	required: PropTypes.bool,
	className: PropTypes.string,
	cssModule: PropTypes.object
};

const defaultProps = {
	color: "",
	required: false,
	tag: "div"
};

const Select = props => {
	const {
		color,
		className,
		cssModule,
		required,
		tag: Tag,
		...attributes
	} = props;

	const classes = mapToCssModules(
		classNames(className, "nes-select", color ? `is-${color}` : ``),
		cssModule
	);

	return (
		<Tag {...attributes} className={classes}>
			<select {...required}>{props.children}</select>
		</Tag>
	);
};

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;

import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { mapToCssModules, tagPropType } from "../utils/utils";

const propTypes = {
	tag: tagPropType,
	border: PropTypes.bool,
	center: PropTypes.bool,
	dark: PropTypes.bool,
	className: PropTypes.string,
	cssModule: PropTypes.object,
	innerRef: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.string,
		PropTypes.func
	])
};

const defaultProps = {
	color: "",
	tag: "table"
};

const Table = props => {
	const {
		border,
		center,
		dark,
		className,
		cssModule,
		tag: Tag,
		innerRef,
		...attributes
	} = props;

	const classes = mapToCssModules(
		classNames(
			className,
			"nes-table",
			center ? "is-centered" : false,
			border ? "is-bordered" : false,
			dark ? "is-dark" : false
		),
		cssModule
	);

	return <Tag {...attributes} className={classes} innerRef={innerRef} />;
};

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;

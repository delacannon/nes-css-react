import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { mapToCssModules, tagPropType } from "../utils/utils";

const propTypes = {
	tag: tagPropType,
	dark: PropTypes.bool,
	align: PropTypes.string,
	rounded: PropTypes.bool,
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

const Container = props => {
	const {
		className,
		cssModule,
		align,
		dark,
		rounded,
		tag: Tag,
		innerRef,
		...attributes
	} = props;

	const hasTitle = [...props.children].filter(
		c => c.type.displayName === "ContainerTitle"
	);

	const alignPosition =
		hasTitle.length > 0 &&
		[...hasTitle.map(e => (e.props.align === "" ? `` : align))][0];

	const classes = mapToCssModules(
		classNames(
			className,
			"nes-container",
			dark ? "is-dark" : false,
			hasTitle.length > 0 ? "with-title" : "",
			alignPosition !== "" ? `is-${alignPosition}` : "",
			rounded ? "is-rounded" : false
		),
		cssModule
	);

	return <Tag {...attributes} className={classes} ref={innerRef} />;
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;

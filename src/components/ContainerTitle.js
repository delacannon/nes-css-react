import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { mapToCssModules, tagPropType } from "../utils/utils";

const propTypes = {
	tag: tagPropType,
	align: PropTypes.string,
	className: PropTypes.string,
	cssModule: PropTypes.object
};

const defaultProps = {
	align: "",
	tag: "p"
};

const ContainerTitle = props => {
	const { align, className, cssModule, tag: Tag, ...attributes } = props;

	const classes = mapToCssModules(classNames(className, "title"), cssModule);

	return <Tag {...attributes} className={classes} align={align} />;
};

ContainerTitle.propTypes = propTypes;
ContainerTitle.defaultProps = defaultProps;

export default ContainerTitle;

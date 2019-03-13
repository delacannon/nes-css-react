import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { mapToCssModules, tagPropType } from "../utils/utils";

const propTypes = {
	tag: tagPropType,
	circle: PropTypes.bool,
	className: PropTypes.string,
	cssModule: PropTypes.object
};

const defaultProps = {
	circle: false,
	tag: "ul"
};

const List = props => {
	const { circle, className, cssModule, tag: Tag, ...attributes } = props;

	const classes = mapToCssModules(
		classNames(className, "nes-list", circle ? `is-circle` : `is-disc`),
		cssModule
	);

	return <Tag {...attributes} className={classes} />;
};

List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default List;

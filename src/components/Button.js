import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { mapToCssModules, tagPropType } from "../utils/utils";

const propTypes = {
	active: PropTypes.bool,
	color: PropTypes.string,
	disabled: PropTypes.bool,
	className: PropTypes.string,
	tag: tagPropType,
	onClick: PropTypes.func,
	innerRef: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.func,
		PropTypes.string
	]),
	"aria-label": PropTypes.string,
	cssModule: PropTypes.object,
	close: PropTypes.bool
};

const defaultProps = {
	color: "",
	tag: "button"
};

class Button extends Component {
	constructor(props) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	onClick(e) {
		if (this.props.disabled) {
			e.preventDefault();
			return;
		}

		if (this.props.onClick) {
			this.props.onClick(e);
		}
	}

	render() {
		let {
			active,
			className,
			cssModule,
			"aria-label": ariaLabel,
			color,
			tag: Tag,
			size,
			innerRef,
			close,
			disabled,
			...attributes
		} = this.props;

		const btnOutlineColor = !disabled ? `is-${color}` : `is-disabled`;

		const classes = mapToCssModules(
			classNames(
				className,
				{ close },
				close || "nes-btn",
				close || btnOutlineColor,
				{
					active,
					disabled: this.props.disabled
				}
			),
			cssModule
		);

		if (attributes.href && Tag === "button") {
			Tag = "a";
		}

		const defaultAriaLabel = close ? "Close" : null;

		return (
			<Tag
				type={
					Tag === "button" && attributes.onClick
						? "button"
						: undefined
				}
				{...attributes}
				onClick={this.onClick}
				className={classes}
				ref={innerRef}
				aria-label={ariaLabel || defaultAriaLabel}
			/>
		);
	}
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;

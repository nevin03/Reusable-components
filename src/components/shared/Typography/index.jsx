import PropTypes from "prop-types";

const variants = {
  h1: "text-4xl font-bold",
  h2: "text-3xl font-semibold",
  h3: "text-2xl font-semibold",
  h4: "text-xl font-medium",
  p: "text-base",
  small: "text-sm text-gray-600",
};

function Typography({ variant = "p", children, className = "", ...rest }) {
  const Component = variant === "p" || variant === "small" ? "p" : variant;
  const style = `${variants[variant]} ${className}`;
  return (
    <Component className={style} {...rest}>
      {children}
    </Component>
  );
}

Typography.propTypes = {
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "p", "small"]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
export default Typography;

import PropTypes from "prop-types";

const baseStyle =
  "font-semibold py-2 px-4 rounded transition duration-300 focus:outline-none focus:ring-2 inline-flex items-center justify-center";

const styles = {
  solid: {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-400",
    success: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-400",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-400",
  },
  outlined: {
    primary:
      "border border-blue-600 text-blue-600 hover:bg-blue-100 focus:ring-blue-300",
    secondary:
      "border border-gray-600 text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
    success:
      "border border-green-600 text-green-600 hover:bg-green-100 focus:ring-green-300",
    danger:
      "border border-red-600 text-red-600 hover:bg-red-100 focus:ring-red-300",
  },
  ghost: {
    primary: "text-blue-600 hover:bg-blue-100 focus:ring-blue-300",
    secondary: "text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
    success: "text-green-600 hover:bg-green-100 focus:ring-green-300",
    danger: "text-red-600 hover:bg-red-100 focus:ring-red-300",
  },
  link: {
    primary: "text-blue-600 underline hover:text-blue-800",
    secondary: "text-gray-700 underline hover:text-gray-900",
    success: "text-green-600 underline hover:text-green-800",
    danger: "text-red-600 underline hover:text-red-800",
  },
  soft: {
    primary: "bg-blue-100 text-blue-700 hover:bg-blue-200 focus:ring-blue-300",
    secondary:
      "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-300",
    success:
      "bg-green-100 text-green-700 hover:bg-green-200 focus:ring-green-300",
    danger: "bg-red-100 text-red-700 hover:bg-red-200 focus:ring-red-300",
  },
};

// Spinner component
const Spinner = () => (
  <svg
    className="animate-spin h-4 w-4 text-current"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
    ></path>
  </svg>
);

function Button({
  children,
  onClick = () => {},
  type = "button",
  variant = "solid",
  color = "primary",
  className = "",
  loading = false,
  disabled = false,
  ...rest
}) {
  const style = `${baseStyle} ${
    styles[variant]?.[color] || styles.solid.primary
  } ${className} ${loading || disabled ? "opacity-50 cursor-not-allowed" : ""}`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={style}
      disabled={loading || disabled}
      {...rest}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <Spinner />
          <span>Loading...</span>
        </span>
      ) : (
        children
      )}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  variant: PropTypes.oneOf(["solid", "outlined", "ghost", "link", "soft"]),
  color: PropTypes.oneOf(["primary", "secondary", "success", "danger"]),
  className: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Button;

const Button = ( {children,className, ...props }) => {
  return (
    <div>
        <button className={`px-5 py-4 border border-white rounded-full ${className}`} {...props}>
            {children}
        </button>
    </div>
  )
}

export default Button
import "./button.style.css"


const Button = ({children, type, size, as, className, href}) => {
// Size can be "sm", "lg", "xl"
  const types = {
    primary:"primary",
    secondary:"secondary",
  }
  let Component = as || "button"

  return (
    <Component className={`button text-center text-decoration-none ${types[type]} ${size?? "sm"} ${className}`} href={as?href:''} >
      {children}
    </Component>
  );
};

export default Button;
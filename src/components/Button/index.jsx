import "./button.style.css"


const Button = ({children, type, size, as, className, href, onClick}) => {
// Size can be "sm", "lg", "xl"
  const types = {
    primary:" text-xs border border-gray-400 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 gap-3",

    secondary:"font-bold text-sm bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:ring focus:ring-gray-300 focus:shadow-none gap-3",
    
    tertiary: "text-sm text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
  }

  let Component = as || "button"

  return (
    <Component className={`flex justify-center items-center font-bold uppercase transition-all py-3 px-6 rounded-lg text-decoration-none whitespace-nowrap ${types[type]} ${size?? "sm"} ${className}`} href={as?href:''} onClick={onClick}>
      {children}
    </Component>
  );
};

export default Button;

interface ButtonProps {
  variant: "primary" | "secondary" | "Auth";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: any;
  endIcon?: any;
  onClick?: () => void;
  fullWidth?: boolean;
    loading?: boolean;
}

const variantStyles = {
  primary: "bg-purple-300 text-purple-600 ",
  secondary: "bg-purple-500 text-white ",
  Auth:"bg-black text-white",
};

const sizeVariant = {
  sm: "py-1 px-2",
  md: "py-2 px-4",
  lg: "py-4 px-6",
};

const defaultStyles = " rounded-md m-1 flex  font-light";

export const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick}
      className={`${variantStyles[props.variant]} ${defaultStyles} 
      ${sizeVariant[props.size]} +  ${props.fullWidth ? " flex justify-center w-full":" "} +  ${props.loading ? " opacity-45" : ""} ` }disabled={props.loading}
    >
      <div className=" flex itaems-center">
        <div className="pr-2 ">{props.startIcon}</div>
        {props.text}
        <div className="pl-2 ">{props.endIcon}</div>
      </div>
    </button>
  );
};

{
  /* <Button variant="primary" size="md" onClick={()=>{

  }} text="abc"/>; */
}

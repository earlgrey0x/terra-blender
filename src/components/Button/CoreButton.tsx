export interface CoreButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string;
  label?: string;
}

export const CoreButton: React.FC<CoreButtonProps> = ({
  icon,
  label,
  ...props
}) => {
  return <button {...props}>{label}</button>;
};

declare module "*.css";

declare module "@/components/ui/toast" {
  import type { FC, ReactNode } from "react";
  
  export type ToastActionElement = ReactNode;
  export type ToastProps = {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    title?: ReactNode;
    description?: ReactNode;
    action?: ToastActionElement;
  };
  
  const Toast: FC<ToastProps>;
  export default Toast;
}

import { toast } from "react-hot-toast";
import ToastComponent from "../Toast";

export const customToast = (
  error: "Wait" | "Adderss" | "Success" | "Failed",
  status: string,
  content: string
) => {
  return toast.custom(
    <ToastComponent isVisible={true} error={error} status={status} content={content} />
  );
};

import React, { useCallback, useEffect, useState } from "react";
import DefaultIcon from "../../assets/icons/transation-icon.svg";
import AdderssIcon from "../../assets/icons/sol-status.svg";
import SucessIcon from "../../assets/icons/sucess-transation.svg";
import FailedIcon from "../../assets/icons/failed-transation.svg";
import classNames from "../../utils/className";
// import { Container } from './styles';

interface ToastProps {
  status?: string;
  duration?: number;
  error: "Wait" | "Adderss" | "Success" | "Failed";
  content: string;
  isVisible: boolean;
  onClose?: () => void;
}

const ToastComponent: React.FC<ToastProps> = ({
  status,
  error,
  content,
  duration,
  isVisible,
  onClose,
}) => {
  const [toastVisible, setVisibleToast] = useState(false);

  useEffect(() => {
    setVisibleToast(isVisible);
    const timer = setTimeout(() => {
      setVisibleToast(false);
      if (onClose) {
        onClose();
      }
    }, duration || 5000);

    return () => clearTimeout(timer);
  }, [duration, onClose, isVisible]);

  const toastIcon = useCallback((error: string) => {
    switch (error) {
      case "Wait":
        return DefaultIcon;
      case "Adderss":
        return AdderssIcon;
      case "Success":
        return SucessIcon;

      case "Failed":
        return FailedIcon;
    }
  }, []);

  return (
    <div
      className={classNames(
        toastVisible ? "fixed active" : "hidden",
        "defaultToast w-full max-w-[240px] mx-auto flex items-center"
      )}
    >
      <div
        className={classNames(
          toastVisible && "active",
          "effectToast w-full relative"
        )}
      >
        <div className="w-full content-toast flex items-center pl-[15px] h-[54px] pr-5 tracking-[-0.24px] absolute top-0 left-0 right-0 bottom-0">
          <div className="w-fit rounded-full mr-3">
            <img
              className={classNames(
                error === "Wait" &&
                  "animate-spin animate-infinite animate-duration-[1000ms] animate-delay-200 animate-ease-out animate-normal",
                "mt-1"
              )}
              width={38}
              height={38}
              src={toastIcon(error)}
              alt=""
            />
          </div>

          <div className="mb-1">
            <span className="text-xs font-semibold text-[#8D8B90]">
              {status}
            </span>
            <p className="text-[#E9E7EC] text-sm font-bold truncate w-full max-w-[150px]">
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToastComponent;

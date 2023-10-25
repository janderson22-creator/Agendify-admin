import ChangeIcon from "../../assets/icons/change-image.svg";
import React, { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import classNames from "../../utils/className";
import ToastComponent from "../Toast";

interface Props {
  height: number;
  width: number;
  rounded: number;
  image: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
}

const ImageUpload: React.FC<Props> = ({
  height,
  width,
  rounded,
  image,
  setImage,
}) => {
  const [iconImageEffect, setIconImageEffect] = useState(false);

  const handleImageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      if (file.size >= 524288) {
        toast.custom(
          <ToastComponent
            isVisible={true}
            error="Failed"
            status="500KB limit"
            content="Image Size Exceeded"
          />
        );
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result?.toString();
        if (!base64String) return;

        setImage(base64String);
      };
      reader.readAsDataURL(file);
    },
    [setImage]
  );

  return (
    <div
      style={{ width: width, height: height }}
      onMouseEnter={() => setIconImageEffect(true)}
      onMouseLeave={() => setIconImageEffect(false)}
      className="relative flex justify-center items-center"
    >
      <input
        id="image-upload"
        type="file"
        accept=".png, .jpg, .jpeg"
        onChange={handleImageChange}
        className="absolute top-0 left-0 w-full h-full opacity-0 z-10"
      />

      <div
        style={{ borderRadius: rounded }}
        className="w-full h-full flex items-center justify-center"
      >
        <img
          className={classNames(
            "absolute top-0 bottom-0 left-0 right-0 m-auto z-[1] opacity-100 transition-all duration-500 cursor-pointer",
            iconImageEffect ? "opacity-100 scale-[1.5]" : "opacity-50"
          )}
          src={ChangeIcon}
          alt="change_image"
        />

        {image && (
          <img
            style={{
              width: width - 20,
              height: height - 20,
              borderRadius: rounded,
            }}
            className="object-cover opacity-100"
            src={image}
            alt="avatar_group"
          />
        )}
      </div>
    </div>
  );
};

export default ImageUpload;

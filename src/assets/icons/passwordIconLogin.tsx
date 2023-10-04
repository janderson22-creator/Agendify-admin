interface Props {
  color: boolean;
}

export const PasswordIconLogin: React.FC<Props> = ({ color }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.83337 12.5C6.52782 12.5 7.1181 12.2569 7.60421 11.7708C8.09032 11.2847 8.33337 10.6944 8.33337 10C8.33337 9.30556 8.09032 8.71528 7.60421 8.22917C7.1181 7.74306 6.52782 7.5 5.83337 7.5C5.13893 7.5 4.54865 7.74306 4.06254 8.22917C3.57643 8.71528 3.33337 9.30556 3.33337 10C3.33337 10.6944 3.57643 11.2847 4.06254 11.7708C4.54865 12.2569 5.13893 12.5 5.83337 12.5ZM5.83337 15C4.44449 15 3.26393 14.5139 2.29171 13.5417C1.31949 12.5694 0.833374 11.3889 0.833374 10C0.833374 8.61111 1.31949 7.43056 2.29171 6.45833C3.26393 5.48611 4.44449 5 5.83337 5C6.95837 5 7.94115 5.31944 8.78171 5.95833C9.62171 6.59722 10.2084 7.38889 10.5417 8.33333H17.5L19.1667 9.95833L15.8334 13.3333L14.1667 11.6667L12.5 13.3333L10.8334 11.6667H10.5417C10.1945 12.6667 9.59032 13.4722 8.72921 14.0833C7.8681 14.6944 6.90282 15 5.83337 15Z"
      fill={color ? '#F5F5FC' : '#646466'}
    />
  </svg>
);
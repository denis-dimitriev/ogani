import { CloseIco } from "@app/assets/icons";
import { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLDivElement & HTMLButtonElement> {
  type: "info" | "success" | "warning" | "danger";
  message: string;
}

function Alert({ type, message, className, onClick }: Props) {
  switch (type) {
    case "info":
      return (
        <div className={`${className} max-w-[320px] animate-fadeInX`}>
          <div className="flex w-full rounded-lg shadow-lg">
            <div className="flex items-center rounded-l-lg bg-blue-500 px-6 py-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current text-white"
                viewBox="0 0 16 16"
                width="20"
                height="20"
              >
                <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm6.5-.25A.75.75 0 017.25 7h1a.75.75 0 01.75.75v2.75h.25a.75.75 0 010 1.5h-2a.75.75 0 010-1.5h.25v-2h-.25a.75.75 0 01-.75-.75zM8 6a1 1 0 100-2 1 1 0 000 2z"></path>
              </svg>
            </div>
            <div className="flex w-full items-center justify-between rounded-r-lg border border-gray-200 border-l-transparent bg-white px-4 py-2">
              <p>{message}</p>
              <button type="button" onClick={onClick}>
                <CloseIco className="h-[20px] w-[20px]" />
              </button>
            </div>
          </div>
        </div>
      );
    case "success":
      return (
        <div className={`${className} max-w-[320px] animate-fadeInX`}>
          <div className="flex w-full rounded-lg shadow-lg">
            <div className="flex items-center rounded-l-lg bg-green-600 px-6 py-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current text-white"
                viewBox="0 0 16 16"
                width="20"
                height="20"
              >
                <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
              </svg>
            </div>
            <div className="flex w-full items-center justify-between rounded-r-lg border border-gray-200 border-l-transparent bg-white px-4 py-2">
              <p>{message}</p>
              <button type="button" onClick={onClick}>
                <CloseIco className="h-[20px] w-[20px]" />
              </button>
            </div>
          </div>
        </div>
      );
    case "warning":
      return (
        <div className={`${className} max-w-[320px] animate-fadeInX`}>
          <div className="flex w-full rounded-lg shadow-lg">
            <div className="flex items-center rounded-l-lg bg-yellow-600 px-6 py-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="fill-current text-white"
                width="20"
                height="20"
              >
                <path d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path>
              </svg>
            </div>
            <div className="flex w-full items-center justify-between rounded-r-lg border border-gray-200 border-l-transparent bg-white px-4 py-2">
              <p>{message}</p>
              <button type="button" onClick={onClick}>
                <CloseIco className="h-[20px] w-[20px]" />
              </button>
            </div>
          </div>
        </div>
      );
    case "danger":
      return (
        <div className={`${className} max-w-[320px] animate-fadeInX`}>
          <div className="flex w-full rounded-lg shadow-lg">
            <div className="flex items-center rounded-l-lg bg-red-600 px-6 py-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="fill-current text-white"
                width="20"
                height="20"
              >
                <path d="M4.47.22A.75.75 0 015 0h6a.75.75 0 01.53.22l4.25 4.25c.141.14.22.331.22.53v6a.75.75 0 01-.22.53l-4.25 4.25A.75.75 0 0111 16H5a.75.75 0 01-.53-.22L.22 11.53A.75.75 0 010 11V5a.75.75 0 01.22-.53L4.47.22zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5H5.31zM8 4a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 018 4zm0 8a1 1 0 100-2 1 1 0 000 2z"></path>
              </svg>
            </div>
            <div className="flex w-full items-center justify-between rounded-r-lg border border-gray-200 border-l-transparent bg-white px-4 py-2">
              <p>{message}</p>
              <button type="button" onClick={onClick}>
                <CloseIco className="h-[20px] w-[20px]" />
              </button>
            </div>
          </div>
        </div>
      );
    default:
      return <></>;
  }
}

export default Alert;

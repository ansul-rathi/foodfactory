// import React from 'react'
// import { CheckCircle, X } from 'lucide-react'

// export function Banner() {
//   return (
//     <>
//       <div className="rounded-md border-l-4 border-green-500 bg-green-100 p-4">
//         <div className="flex items-center justify-between space-x-4">
//           <div>
//             <CheckCircle className="h-6 w-6 text-green-600" />
//           </div>
//           <div>
//             <p className="text-sm font-medium text-green-600">
//               This is some informational text that you can use to show some success content
//             </p>
//           </div>
//           <div>
//             <X className="h-6 w-6 cursor-pointer text-green-600" />
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

import React from "react";

export function Banner() {
  const bannerStyle = {
    borderRadius: "0.375rem", // 6px
    borderLeftWidth: "4px",
    borderLeftColor: "#10B981", // green-500
    backgroundColor: "#CCFBF1", // green-100
    padding: "1rem", // 16px
  };

  const flexContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem", // 16px
  };

  const iconStyle = {
    height: "24px", // 1.5rem
    width: "24px", // 1.5rem
    color: "#059669", // green-600
  };

  const textStyle = {
    fontSize: "0.875rem", // 14px
    fontWeight: "500",
    color: "#059669", // green-600
  };

  const cursorPointerStyle = {
    ...iconStyle,
    cursor: "pointer",
  };

  // Custom SVG for CheckCircle
  const CheckCircleSVG = () => (
    <svg
      style={iconStyle}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 011.414 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L9 12.586l7.293-7.293z"
        clipRule="evenodd"
      />
    </svg>
  );

  // Custom SVG for X (close icon)
  const XSVG = () => (
    <svg
      style={cursorPointerStyle}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <>
      <div style={bannerStyle}>
        <div style={flexContainerStyle}>
          <div>
            <CheckCircleSVG />
          </div>
          <div>
            <p style={textStyle}>
              This is some informational text that you can use to show some
              success content
            </p>
          </div>
          <div>
            <XSVG />
          </div>
        </div>
      </div>
    </>
  );
}

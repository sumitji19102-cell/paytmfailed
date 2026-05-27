export default function MerchantScreen() {
  return (
    <div className="w-full h-screen bg-[#ECECEC] relative overflow-hidden font-sans">
      
      {/* Back Button */}
      <div className="absolute top-6 left-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.2}
          stroke="currentColor"
          className="w-7 h-7 text-[#1D1D1D]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </div>

      {/* Main Card */}
      <div className="absolute left-1/2 top-[43%] -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-[390px] bg-[#F5F5F5] rounded-[26px] px-5 pt-16 pb-7 shadow-sm">
        
        {/* Icon Circle */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2">
          <div className="w-[70px] h-[70px] rounded-full bg-[#E7F4FA] border border-[#DDEAF0] flex items-center justify-center">
            
            {/* Milk Icon */}
            <svg
              width="42"
              height="42"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 3H15V5L17 7V21H7V7L9 5V3Z"
                stroke="#0A5DA8"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M9 3H15"
                stroke="#0A5DA8"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M7 12C8.2 11.4 8.8 11.4 10 12C11.2 12.6 11.8 12.6 13 12C14.2 11.4 14.8 11.4 16 12C16.4 12.2 16.7 12.3 17 12.35"
                stroke="#0A5DA8"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* UPI ID */}
        <h1 className="text-center text-[18px] font-semibold text-[#1B1B1B] ">
          7070100669@myapgb
        </h1>

        {/* Business Box */}
        <div className="mt-3 bg-[#E8EDF3] rounded-[22px] py-3 px-4 text-center border border-[#E0E6EC]">
          <p className="text-[17px] font-medium text-[#7B7B7B]">
            Business Name
          </p>

          <h2 className="text-[18px] leading-[34px] font-semibold text-[#111111] mt-1">
            Shaik Meeravali
          </h2>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-[310px] left-1/2 -translate-x-1/2 w-[90%] max-w-[420px] text-center">
        <p className="text-[13px] leading-[18px] font-medium text-[#3D3D3D]">
          This merchant receives money through payment requests. To
          pay again, please visit their app/website.
        </p>
      </div>
    </div>
  );
}
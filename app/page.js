export default function MerchantScreen() {
  return (
    <div className="w-full min-h-screen bg-[#ECECEC] font-sans flex flex-col">

      {/* Header */}
      <div className="flex items-center px-5 pt-6">
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

      {/* Main Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-5 -mt-20">

        {/* Card Wrapper */}
        <div className="w-full max-w-[390px] flex flex-col items-center">

          {/* Profile Icon */}
          <div className="w-[72px] h-[72px] rounded-full bg-[#E8CFF1] border-[4px] border-[#E7E0E8] flex items-center justify-center mb-[-35px] z-10 shadow-sm">

            <span className="text-[#9B4FAF] text-[28px] font-semibold uppercase">
              CS
            </span>

          </div>

          {/* Main Card */}
          <div className="w-full bg-[#F5F5F5] rounded-[24px] px-5 pt-14 pb-5 shadow-sm flex flex-col items-center">

            {/* UPI ID */}
            <h1 className="text-[18px] font-semibold text-[#1F1F1F] tracking-[-0.2px]">
              8529112775@ikwik
            </h1>

            {/* Business Box */}
            <div className="w-full mt-5 bg-[#E7EBF1] border border-[#DDE3EA] rounded-[20px] py-4 flex flex-col items-center">

              <p className="text-[16px] text-[#7A7A7A] font-medium">
                Business Name
              </p>

              <h2 className="text-[18px] text-[#1E1E1E] font-semibold mt-1">
                Chetan Sharma
              </h2>

            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-5 max-w-[430px] text-center px-3">
          <p className="text-[13px] leading-[18px] text-[#3C3C3C] font-medium">
            This merchant receives money through payment requests.
            To pay again, please visit their app/website.
          </p>
        </div>

      </div>
    </div>
  );
}
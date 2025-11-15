export default function AadsBanner() {
  return (
    <div className="w-full flex flex-col items-center relative z-[99998]">
      <iframe
        data-aa="2417318"
        src="//acceptable.a-ads.com/2417318/?size=Adaptive"
        style={{ border: 0, padding: 0 }}
        className="w-[70%] h-auto overflow-hidden block mx-auto"
      ></iframe>

      <a
        target="_blank"
        href="https://aads.com/campaigns/new/?source_id=2417318&source_type=ad_unit&partner=2417318"
        className="text-sm text-[#263238] px-3 py-1 bg-[#F8F8F9] no-underline rounded-b-md mt-1"
      >
        Advertise here
      </a>
    </div>
  );
}

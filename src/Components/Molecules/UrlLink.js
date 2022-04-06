function UrlLink(props) {
  const { logo, url } = props;

  return (
    <div className="ml-[1.8rem] mt-[1.875rem]">
      <div
        className="flex bg-[#F5F6F9] ml-[1rem] mr-[1rem] w-screeen h-fit pt-[0.625rem] pb-[0.625rem] pl-[0.938rem]
            box-border rounded 
            "
      >
        <img src={logo} alt="logo" className="w-[1rem] h-[1rem]"></img>
        <div className="text-sm text-[#593CE5] font-noto2 ml-[1.375rem] text-ellipsis">
          {url}
        </div>
      </div>
    </div>
  );
}

export default UrlLink;

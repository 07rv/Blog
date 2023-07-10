const banner = () => {
  return (
    <div className="bg-black banner">
      sdxfcbgvnc
      <div className="solar-system">
        <div id="sun"></div>

        <div className="orbit mercury-orbit"></div>
        <div className="mercury-spin">
          <div id="mercury"></div>
        </div>

        <div className="orbit venus-orbit"></div>
        <div className="venus-spin">
          <div id="venus"></div>
        </div>

        <div className="orbit earth-orbit"></div>
        <div className="earth-spin">
          <div className="orbit moon-orbit"></div>
          <div className="moon-spin">
            <div id="moon"></div>
          </div>

          <img id="earth" src={"/images/earth.png"} />
        </div>
      </div>
    </div>
  );
};

export default banner;

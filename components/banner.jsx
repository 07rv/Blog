const banner = () => {
  return (
    <div className="bg-black banner">
      sdxfcbgvnc
      <div class="solar-system">
        <div id="sun"></div>

        <div class="orbit mercury-orbit"></div>
        <div class="mercury-spin">
          <div id="mercury"></div>
        </div>

        <div class="orbit venus-orbit"></div>
        <div class="venus-spin">
          <div id="venus"></div>
        </div>

        <div class="orbit earth-orbit"></div>
        <div class="earth-spin">
          <div class="orbit moon-orbit"></div>
          <div class="moon-spin">
            <div id="moon"></div>
          </div>

          <img id="earth" src={"/images/earth.jpeg"} />
        </div>
      </div>
    </div>
  );
};

export default banner;

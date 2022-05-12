import "../App.scss";

const LandingPage = () => {
  return (
    <div className='land'>
      <div className='landing'>
        <h1 className='landing__title'>Welcome to AGI' BASK</h1>
        <p className='landing__subtitle'>
          The community you need to find your next green mission.
        </p>
      </div>
      <div className='land__border'>
        <button className='land__border__button'>Get Started ↠</button>
      </div>
    </div>
  );
};

export default LandingPage;

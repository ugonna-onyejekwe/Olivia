import "./achievements.scss";

export const Achievements = () => {
  return (
    <div className="achievements">
      <div className="container">
        <div className="box">
          <h3>
            5K+ <span>users</span>
          </h3>
          <p>Olivia stores has garnered more than 5K+ successful sign-ups.</p>
        </div>
        <div className="box">
          <h3>
            {" "}
            46 <span>countries</span>
          </h3>
          <p>Users exist in over 46 countries.</p>
        </div>
        <div className="box">
          <h3>
            3K+ <span>orders</span>
          </h3>
          <p>
            Over 3K+ orders have been successfully processed on Olivia stores.
          </p>
        </div>
        <div className="box">
          <h3>
            1B+ <span>transactions</span>
          </h3>
          <p>Olivia stores has processed transactions of over 1B+ in volume.</p>
        </div>
      </div>
    </div>
  );
};

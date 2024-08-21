import "./enterOTP.scss";

export const EnterOTP = () => {
  const email = "ugonna@gmail.com";

  return (
    <div className="form_con enterEmail_section">
      <div className="header">
        <h3>Verifiy email</h3>
        <p className="steps">
          Step <span>2</span> of 3
        </p>
        <p className="subheader">
          Enter OTP code sent to <span>{email}</span>
        </p>
      </div>

      <form action="#">
        <div className="input_section">
          <div className="input_box">
            <input type="email" placeholder="Enter OTP" />
          </div>
          {false && <p className="error">Email has been used</p>}{" "}
        </div>

        <div className="btns">
          <button>verify</button>
        </div>
      </form>
    </div>
  );
};

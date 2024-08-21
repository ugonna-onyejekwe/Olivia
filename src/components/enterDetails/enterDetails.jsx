import { MdOutlineRemoveRedEye } from "react-icons/md";
import "./enterDetails.scss";

export const EnterDetails = () => {
  return (
    <div className="form_con enterDetails_section">
      <div className="header">
        <h3>Enter your details</h3>
        <p className="steps">
          Step <span>3</span> of 3
        </p>
        <p className="subheader">
          Enter your details to get your account ready
        </p>
      </div>

      <form action="#">
        {/* name section1 */}
        <div className="col">
          <div className="input_section">
            <div className="input_box">
              <input type="text" placeholder="Your first name" />
            </div>
            {false && <p className="error">Email has been used</p>}{" "}
          </div>

          <div className="input_section">
            <div className="input_box">
              <input type="text" placeholder="Your last name" />
            </div>
            {false && <p className="error">Email has been used</p>}{" "}
          </div>
        </div>

        {/* section2 */}
        <div className="col">
          <div className="input_section">
            <div className="input_box">
              <input type="password" placeholder="Password" />

              <span>
                <MdOutlineRemoveRedEye />
              </span>
            </div>
            {false && <p className="error">Email has been used</p>}{" "}
          </div>

          <div className="input_section">
            <div className="input_box">
              <input type="password" placeholder="Comfirm password" />
              <span>
                <MdOutlineRemoveRedEye />
              </span>
            </div>
            {false && <p className="error">Email has been used</p>}{" "}
          </div>
        </div>

        {/* section3 */}
        <div className="input_section">
          <div className="input_box">
            <input
              type="email"
              placeholder="Your referrer email/ID (optional)"
            />
          </div>
          {false && <p className="error">Email has been used</p>}{" "}
        </div>

        {/*  section4 */}
        <div className="col">
          <div className="input_section">
            <div className="input_box">
              <input type="text" placeholder="Your company's name" />
            </div>
            {false && <p className="error">Email has been used</p>}{" "}
          </div>

          <div className="input_section">
            <div className="input_box">
              <input type="text" placeholder="Enter company's address" />
            </div>
            {false && <p className="error">Email has been used</p>}{" "}
          </div>
        </div>

        {/*section5  */}
        <div className="col">
          <div className="input_section">
            <div className="input_box">
              <input type="text" placeholder="company's phone no." />
            </div>
            {false && <p className="error">Email has been used</p>}{" "}
          </div>

          <div className="input_section">
            <div className="input_box">
              <select type="text" placeholder="Select your business category">
                <option value="" selected disabled>
                  Select your business category
                </option>
              </select>
            </div>
            {false && <p className="error">Email has been used</p>}{" "}
          </div>
        </div>

        {/*section6  */}
        <div className="input_section">
          <div className="input_box">
            <textarea type="text" placeholder="About company" />
          </div>
          {false && <p className="error">Email has been used</p>}{" "}
        </div>

        <div className="btns">
          <button>create my account</button>
        </div>
      </form>
    </div>
  );
};

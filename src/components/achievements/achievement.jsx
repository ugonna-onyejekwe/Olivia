import { useEffect, useState } from "react";
import "./achievements.scss";
import { oliviaApi } from "../../api/baseurls";
import numeral from "numeral";
import { BeatLoader } from "react-spinners";
import { LineLoader } from "../inputs";

export const Achievements = () => {
  const [utilsData, setUtilsData] = useState({
    countries: "",
    orders: "",
    signups: "",
    processed: "",
  });

  const formatted = Number(utilsData.processed);
  const formattedOrder = Number(utilsData.orders);
  const formattedSignUp = Number(utilsData.signups);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await oliviaApi.get("utils/website");
        setUtilsData({
          ...utilsData,
          countries: response.data.countries,
          orders: response.data.ordersProcessed,
          signups: response.data.signups,
          processed: response.data.transactionsProcessed,
        });
        console.log(response.data, "utils");
      } catch (error) {
        console.log(error.message);
      }
    };

    getData();
  }, []);

  return (
    <div className="achievements">
      <div className="container">
        <div className="box">
          <h3>
            {utilsData.signups ? formattedSignUp : <LineLoader />}{" "}
            <span>users</span>
          </h3>
          <p>
            Olivia stores has garnered more than{" "}
            {utilsData.signups ? formattedSignUp : <LineLoader />} successful
            sign-ups.
          </p>
        </div>

        <div className="box">
          <h3>
            {" "}
            {utilsData.countries ? utilsData.countries : <LineLoader />}{" "}
            <span>countries</span>
          </h3>
          <p>
            Users exist in over{" "}
            {utilsData.countries ? utilsData.countries : <LineLoader />}{" "}
            countries.
          </p>
        </div>

        <div className="box">
          <h3>
            {utilsData.orders ? (
              numeral(formattedOrder).format("0.0a")
            ) : (
              <LineLoader />
            )}{" "}
            <span>orders</span>
          </h3>
          <p>
            Over{" "}
            {utilsData.orders ? (
              numeral(formattedOrder).format("0.0a")
            ) : (
              <LineLoader />
            )}{" "}
            orders have been successfully processed on Olivia stores.
          </p>
        </div>

        <div className="box">
          <h3>
            {utilsData.processed ? (
              numeral(formatted).format("0.0a")
            ) : (
              <LineLoader />
            )}{" "}
            <span>processed</span>
          </h3>
          <p>
            Olivia stores has processed transactions of over{" "}
            {utilsData.processed ? (
              numeral(formatted).format("0.0a")
            ) : (
              <LineLoader />
            )}{" "}
            in volume.
          </p>
        </div>
      </div>
    </div>
  );
};

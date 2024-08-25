import { useEffect, useState } from "react";
import "./achievements.scss";
import { oliviaApi } from "../../api/baseurls";
import numeral from "numeral";

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
            {numeral(formattedSignUp).format("0.0a")} <span>users</span>
          </h3>
          <p>Olivia stores has garnered more than 5K+ successful sign-ups.</p>
        </div>
        <div className="box">
          <h3>
            {" "}
            {utilsData.countries} <span>countries</span>
          </h3>
          <p>Users exist in over 46 countries.</p>
        </div>
        <div className="box">
          <h3>
            {numeral(formattedOrder).format("0.0a")} <span>orders</span>
          </h3>
          <p>
            Over 3K+ orders have been successfully processed on Olivia stores.
          </p>
        </div>
        <div className="box">
          <h3>
            {numeral(formatted).format("0.0a")} <span>processed</span>
          </h3>
          <p>Olivia stores has processed transactions of over 1B+ in volume.</p>
        </div>
      </div>
    </div>
  );
};

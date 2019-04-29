import React from "react";
import { FetchGasPriceApi } from "../Components/Api/UseApi";
// import { ItemTitle, ItemValue, ItemSubTitle } from "../Components/Styles/Style";
import { ItemTitle, ItemValue, ItemSubTitle, ItemSub } from "../Components/Styles/StyleTwo";
// import { ItemTitle, ItemValue, ItemSubTitle } from "../Components/Styles/StyleThree";


const GasPrice = () => {
  const { results, loading, error } = FetchGasPriceApi();

  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          <ItemTitle>GasPrice</ItemTitle>
          <ItemSubTitle>{`Fast (< 1 min to confirm)`}</ItemSubTitle>
          <ItemValue>{results && results.length > 0 && results}<ItemSub>{" "}GWei</ItemSub></ItemValue>
          <div>{error && error}</div>
        </div>
      )}
    </>
  );
};

export default GasPrice;

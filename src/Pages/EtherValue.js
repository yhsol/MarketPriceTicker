import React from "react";
import { FetchEtherBalance, FetchEtherPrice } from "../Components/Api/UseApi";
// import { ItemTitle, ItemSubTitle, ItemValueSmall } from "../Components/Style";
import { ItemTitle, ItemSubTitle, ItemValueSmall, ItemSub } from "../Components/Styles/StyleTwo";
// import { ItemTitle, ItemSubTitle, ItemValueSmall } from "../Components/StyleThree";
// import Web3 from "web3";



const EtherValue = () => {
  const { results, loading, error } = FetchEtherBalance();
  const { priceResults, priceloading, priceerror } = FetchEtherPrice();
  // let web3 = window.web3;
  // var value = web3.fromWei(results, "ether");
  console.log(results);
  const currentValue = results * priceResults;

  
  return (
    <>
      {loading ? (
        "Loading..."
        ) : (
          <div>
          <ItemTitle>EtherValue</ItemTitle>
          <ItemSubTitle>balance</ItemSubTitle>
          <ItemValueSmall>
            {results}<ItemSub>{" "}(ETH)</ItemSub>
          {/* {console.log(results)} */}
          </ItemValueSmall>
          <ItemSubTitle>price</ItemSubTitle>
          <ItemValueSmall>
            {currentValue} <ItemSub>{" "}(USD)</ItemSub>
          </ItemValueSmall>
          <div>{error && error}</div>
        </div>
      )}
    </>
  );
};

export default EtherValue;

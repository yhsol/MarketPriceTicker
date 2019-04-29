import React from "react";
import { FetchBrnApi, FetchEtherPrice } from "../Components/Api/UseApi";
// import { ItemTitle, ItemSub, ItemValue, ItemSubTitle } from "../Components/Styles/Style";
import { ItemTitle, ItemSub, ItemValue, ItemSubTitle, ItemValueSmall } from "../Components/Styles/StyleTwo";
// import { ItemTitle, ItemSub, ItemValue, ItemSubTitle } from "../Components/Styles/StyleThree";


const BRN = () => {
  const { results, loading, error } = FetchBrnApi();
  const { priceResults } = FetchEtherPrice();
  
  return (
    <>
      {loading ? (
        "Loading..."
        ) : (
          <div>
          <ItemTitle>
            BRN<ItemSub>LATEST PRICE</ItemSub>
          </ItemTitle>
          <ItemValue>
            {results && results.length > 0 && results[0].price}<ItemSub>{" "}(ETH)</ItemSub>
          {/* {console.log(results)} */}
          </ItemValue>
          <ItemValueSmall>
          {results && results.length > 0 && results[0].price * priceResults}<ItemSub>{" "}(USD)</ItemSub>
          {/* {console.log(results)} */}
          </ItemValueSmall>

          <ItemSubTitle>
          {results && results.length > 0 && results[0].time}
          </ItemSubTitle>
          <div>{error && error}</div>
        </div>
      )}
    </>
  );
};

export default BRN;

import React from "react";
import { FetchBrnApi } from "../Components/Api/UseApi";
// import { ItemTitle, ItemSub, ItemValue, ItemSubTitle } from "../Components/Styles/Style";
import { ItemTitle, ItemSub, ItemValue, ItemSubTitle } from "../Components/Styles/StyleTwo";
// import { ItemTitle, ItemSub, ItemValue, ItemSubTitle } from "../Components/Styles/StyleThree";


const BRN = () => {
  const { results, loading, error } = FetchBrnApi();

  
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

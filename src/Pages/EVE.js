import React from "react";
import { FetchEveApi } from "../Components/Api/UseApi";
// import { ItemTitle, ItemSub, ItemValue, ItemSubTitle } from "../Components/Styles/Style";
import { ItemTitle, ItemSub, ItemValue, ItemSubTitle } from "../Components/Styles/StyleTwo";
// import { ItemTitle, ItemSub, ItemValue, ItemSubTitle } from "../Components/Styles/StyleThree";

const EVE = () => {
  const { results, loading, error } = FetchEveApi();

  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          <ItemTitle>
            EVE<ItemSub>LATEST PRICE</ItemSub>
          </ItemTitle>
          <ItemValue>
            {results && results.length > 0 && results[0].price}<ItemSub>{" "}(ETH)</ItemSub>
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

export default EVE;

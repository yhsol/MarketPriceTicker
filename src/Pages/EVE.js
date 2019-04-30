import React from "react";
import { FetchEveApi, FetchEtherPrice, FetchKrw, FetchUsdtPrice } from "../Components/Api/UseApi";
// import { ItemTitle, ItemSub, ItemValue, ItemSubTitle } from "../Components/Styles/Style";
import { ItemTitle, ItemSub, ItemValue, ItemSubTitle, ItemValueSmall } from "../Components/Styles/StyleTwo";
// import { ItemTitle, ItemSub, ItemValue, ItemSubTitle } from "../Components/Styles/StyleThree";

const EVE = () => {
  const { results, loading, error } = FetchEveApi();
  const { usdtResults } = FetchUsdtPrice();
  const { krwResults } = FetchKrw();

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
            {results && results.length > 0 && results[0].price}<ItemSub>{" "}(USDT)</ItemSub>
          </ItemValue>
          <ItemValueSmall>
            {results && results.length > 0 && results[0].price * usdtResults * krwResults}<ItemSub>{" "}(KRW)</ItemSub>
          </ItemValueSmall>
          <ItemSubTitle>
          {results && results.length > 0 && results[0].time}
          </ItemSubTitle>
          <div>{error}</div>
        </div>
      )}
    </>
  );
};

export default EVE;

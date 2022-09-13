const { Spot } = require("@danswar/binance-connector-node");
const { handler } = require("./index");
const {
  BNB_CONVERTIBLES_RESPONSE,
  DUST_TRANSFER_RESPONSE,
  BNB_CONVERTIBLES_EMPTY_RESPONSE
} = require("./mocks");

jest.mock("@danswar/binance-connector-node");

describe("test", () => {
  const dustTransfer = jest.spyOn(Spot.prototype, "dustTransfer");

  const bnbConvertibleAssets = jest.spyOn(
    Spot.prototype,
    "bnbConvertibleAssets"
  );

  beforeEach(() => {
    Spot.mockClear();
    dustTransfer.mockClear().mockImplementation(() => DUST_TRANSFER_RESPONSE);
    bnbConvertibleAssets
      .mockClear()
      .mockImplementation(() => BNB_CONVERTIBLES_RESPONSE);
  });

  it("should create only one instance of the API client", async () => {
    await handler();
    expect(Spot).toHaveBeenCalledTimes(1);
  });

  it("should call api if there is dust to convert", async () => {
    bnbConvertibleAssets.mockImplementation(() => BNB_CONVERTIBLES_RESPONSE);
    await handler();
    expect(dustTransfer).toHaveBeenCalledWith(["USDT"]);
  });

  it("shouldn't call api if there is not dust to convert", async () => {
    bnbConvertibleAssets.mockImplementationOnce(
      () => BNB_CONVERTIBLES_EMPTY_RESPONSE
    );
    await handler();
    expect(dustTransfer).toHaveBeenCalledTimes(0);
  });
});

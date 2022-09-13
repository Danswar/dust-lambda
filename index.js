const { Spot } = require("@danswar/binance-connector-node");

exports.handler = async () => {
  const client = new Spot(process.env.APP_KEY, process.env.APP_SECRET);

  const { data: { details } } = await client.bnbConvertibleAssets();
  console.log(details);
  const assets = details.map(({ asset }) => asset);

  if (assets.length) {
    const { data } = await client.dustTransfer(assets);
    console.log(data);
  }
};

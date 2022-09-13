const BNB_CONVERTIBLES_RESPONSE = {
  data: {
    details: [
      {
        asset: "USDT",
        assetFullName: "USDT",
        amountFree: "0.82104606",
        toBTC: "0.00004046",
        toBNB: "0.00293755",
        toBNBOffExchange: "0.0028788",
        exchange: "0.00005875"
      }
    ],
    totalTransferBtc: "0.00004046",
    totalTransferBNB: "0.00293755",
    dribbletPercentage: "0.02"
  }
};

const BNB_CONVERTIBLES_EMPTY_RESPONSE = {
  data: {
    details: [],
    totalTransferBtc: "0.0000000",
    totalTransferBNB: "0.0000000",
    dribbletPercentage: "0.02"
  }
};

const DUST_TRANSFER_RESPONSE = {
  data: {
    totalTransfered: "0.00294961",
    totalServiceCharge: "0.00005899",
    transferResult: [
      {
        tranId: 116888846337,
        fromAsset: "USDT",
        amount: "0.82104606",
        transferedAmount: "0.00294961",
        serviceChargeAmount: "0.00005899",
        operateTime: 1663103140046
      }
    ]
  }
};

module.exports = {
  BNB_CONVERTIBLES_RESPONSE,
  BNB_CONVERTIBLES_EMPTY_RESPONSE,
  DUST_TRANSFER_RESPONSE
};

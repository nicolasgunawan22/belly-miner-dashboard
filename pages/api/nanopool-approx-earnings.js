export default function handler(req, res) {
  const data = {
    status: true,
    data: {
      minute: {
        coins: 0.0015561371656488436,
        dollars: 0.007142669590328192,
        yuan: 0.051181351378190465,
        euros: 0.006535776095725143,
        rubles: 0.6481622522360563,
        bitcoins: 9.949941037158706e-8,
        pounds: 0.005586532424679348,
      },
      hour: {
        coins: 0.09336822993893061,
        dollars: 0.4285601754196915,
        yuan: 3.070881082691428,
        euros: 0.3921465657435086,
        rubles: 38.889735134163374,
        bitcoins: 0.000005969964622295223,
        pounds: 0.33519194548076087,
      },
      day: {
        coins: 2.2408375185343345,
        dollars: 10.285444210072596,
        yuan: 73.70114598459426,
        euros: 9.411517577844206,
        rubles: 933.353643219921,
        bitcoins: 0.00014327915093508535,
        pounds: 8.044606691538261,
      },
      week: {
        coins: 15.685862629740342,
        dollars: 71.99810947050817,
        yuan: 515.9080218921598,
        euros: 65.88062304490944,
        rubles: 6533.475502539447,
        bitcoins: 0.0010029540565455975,
        pounds: 56.31224684076783,
      },
      month: {
        coins: 67.22512555603004,
        dollars: 308.56332630217787,
        yuan: 2211.034379537828,
        euros: 282.34552733532615,
        rubles: 28000.60929659763,
        bitcoins: 0.004298374528052561,
        pounds: 241.33820074614783,
      },
      prices: {
        price_btc: 0.00006394,
        price_usd: 4.59,
        price_rur: 416.52,
        price_eur: 4.2,
        price_cny: 32.89,
        price_gbp: 3.59,
      },
    },
  };

  res.status(200).json(data);
}

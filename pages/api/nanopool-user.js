export default function handler(req, res) {
  const data = {
    status: true,
    data: {
      account: '0x994afb59a864748462b2cfa7f619bfae3fac8a08',
      unconfirmed_balance: '0.00000000',
      balance: '0.59268855',
      hashrate: '3230.0',
      avgHashrate: {
        h1: '2731.3',
        h3: '2787.1',
        h6: '2753.1',
        h12: '2734.2',
        h24: '2791.2',
      },
      workers: [
        {
          id: '1080ti',
          uid: 554951,
          hashrate: '17.0',
          lastshare: 1710233067,
          rating: 45912,
          h1: '36.8',
          h3: '12.3',
          h6: '6.1',
          h12: '3.1',
          h24: '12.9',
        },
        {
          id: '12_RX580_Pulse',
          uid: 545785,
          hashrate: '374.0',
          lastshare: 1710233059,
          rating: 492748,
          h1: '357.0',
          h3: '373.1',
          h6: '384.4',
          h12: '385.1',
          h24: '390.2',
        },
        {
          id: '3070',
          uid: 581093,
          hashrate: '119.0',
          lastshare: 1710232904,
          rating: 18890,
          h1: '45.3',
          h3: '15.1',
          h6: '7.6',
          h12: '3.8',
          h24: '9.8',
        },
        {
          id: 'AMD_RX_VEGA_64',
          uid: 566014,
          hashrate: '255.0',
          lastshare: 1710233085,
          rating: 241492,
          h1: '164.3',
          h3: '170.9',
          h6: '178.0',
          h12: '186.8',
          h24: '195.3',
        },
        {
          id: 'Asus_RX580_Strix',
          uid: 545678,
          hashrate: '272.0',
          lastshare: 1710233083,
          rating: 353214,
          h1: '269.2',
          h3: '299.4',
          h6: '294.2',
          h12: '281.9',
          h24: '283.5',
        },
        {
          id: 'B250_Mining',
          uid: 547488,
          hashrate: '510.0',
          lastshare: 1710233083,
          rating: 573338,
          h1: '439.2',
          h3: '448.6',
          h6: '447.2',
          h12: '449.1',
          h24: '452.5',
        },
        {
          id: 'B250_Mining_1',
          uid: 545592,
          hashrate: '697.0',
          lastshare: 1710233068,
          rating: 571782,
          h1: '388.2',
          h3: '433.5',
          h6: '424.1',
          h12: '432.6',
          h24: '440.0',
        },
        {
          id: 'B250_Mining2',
          uid: 545925,
          hashrate: '510.0',
          lastshare: 1710233089,
          rating: 572460,
          h1: '396.7',
          h3: '450.5',
          h6: '436.3',
          h12: '445.8',
          h24: '435.2',
        },
        {
          id: 'dan',
          uid: 586123,
          hashrate: '68.0',
          lastshare: 1710232997,
          rating: 3060,
          h1: '68.0',
          h3: '63.3',
          h6: '65.2',
          h12: '41.3',
          h24: '32.7',
        },
        {
          id: 'RX580_MSI',
          uid: 545585,
          hashrate: '170.0',
          lastshare: 1710233075,
          rating: 410140,
          h1: '334.3',
          h3: '328.7',
          h6: '323.5',
          h12: '321.3',
          h24: '326.7',
        },
        {
          id: 'RX_580_Pulse',
          uid: 545576,
          hashrate: '238.0',
          lastshare: 1710233058,
          rating: 246924,
          h1: '232.3',
          h3: '191.7',
          h6: '186.5',
          h12: '183.5',
          h24: '190.3',
        },
        {
          id: 'test1',
          uid: 581110,
          hashrate: '0.0',
          lastshare: 1710155805,
          rating: 39286,
          h1: '0.0',
          h3: '0.0',
          h6: '0.0',
          h12: '0.0',
          h24: '22.3',
        },
      ],
    },
  };

  res.status(200).json(data);
}

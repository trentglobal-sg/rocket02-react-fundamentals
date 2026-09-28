export default function App() {

  const shops = [
    "Uniqlo",
    "Starbucks",
    "Luckin",
    "Toastbox",
    "NTUC Fairprice"
  ];

  function renderShops() {
    const shopJSX = [];

    // for (let [i,s] of shops.entries()) {
    //   shopJSX.push(<li key={i}>{s}</li>)
    // }

    for (let i =0; i < shops.length; i++) {
      shopJSX.push(<li key={i}>{shops[i]}</li>)
    }

    return shopJSX;
  }



  const events = [
    {
      title: "Lucky Draw",
      date: "29th Septemebr"
    },
    {
      title: "Free parking",
      date: "1st October"
    },
    {
      title: "Voucher giveaway",
      date: "2nd October"
    }
  ]

  return <>
    <div className="container">
      <h1>Directory</h1>
      <ul>
        {renderShops()}
      </ul>
      <h1>Events</h1>
      <ul className="list-group">
        {
          events.map(function (event, index) {
            return <li className="list-group-item" key={index}>{event.title} ({event.date})</li>
          })
        }
      </ul>
    </div>
  </>
}
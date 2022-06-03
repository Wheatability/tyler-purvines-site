export default function handler(req, res) {
  res.status(200).json({
    days: [
      {
        "day": "mon",
        "amount": genRand(10.00, 25.00)
      },
      {
        "day": "tue",
        "amount": genRand(20.00, 40.00)
      },
      {
        "day": "wed",
        "amount": genRand(40.00, 60.00)
      },
      {
        "day": "thu",
        "amount": genRand(25.00, 35.00)
      },
      {
        "day": "fri",
        "amount": genRand(10.00, 25.00)
      },
      {
        "day": "sat",
        "amount": genRand(15.00, 40.00)
      },
      {
        "day": "sun",
        "amount": genRand(22.00, 35.00)
      }
    ]
  })
}

// 227.94
function genRand(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2)
}
export default function handler(req, res) {
  const data = {
    status: true,
    data: 0.592688545608382,
  };

  res.status(200).json(data);
}

export default function handler(req, res) {
  console.log("how are you")
  res.status(200).json({ success: "gotcha" });
}
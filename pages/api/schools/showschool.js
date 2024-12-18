import dbconnection from "../../../configuration/db";

export default async function handler(req, res) {
  try {
    const query = "SELECT * FROM schools";
    const [data] = await dbconnection.execute(query);
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

import dbconnection from "../../../configuration/db";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
  try {
    const { name, address, city, state, contact, image, email_id } = req.body;
    const values = [name, address, city, state, contact, image, email_id];
    const insertQuery = `INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const [results] = await dbconnection.execute(insertQuery, values);
    res.status(201).json({ results: results });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

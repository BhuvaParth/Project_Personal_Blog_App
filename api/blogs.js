import { readFileSync } from 'fs';
import { join } from 'path';

export default function handler(req, res) {
  const jsonData = readFileSync(join(process.cwd(), 'db.json'));
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(jsonData);
}

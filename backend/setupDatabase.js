import { readFileSync } from 'fs';
import { connect } from './config/db.js';

export async function setupDatabase() {
  const client = await connect();
  try {
    const sql = readFileSync('setup.sql').toString();
    await client.query(sql);
    console.log('Database setup complete');
  } catch (err) {
    console.error(err);
  } finally {
    client.release();
  }
}
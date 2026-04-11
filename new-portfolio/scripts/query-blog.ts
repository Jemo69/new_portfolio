import { createClient } from '@libsql/client';

const client = createClient({ 
  url: 'libsql://new-portfolio-jemo69.aws-us-west-2.turso.io',
  authToken: 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NTkzNjQ0MTcsImlkIjoiYmE0Y2U1ZjktNjViNC00YTdiLWI1YjctNzMwMGM3Y2UyODc5IiwicmlkIjoiZTZiZDY4MTgtYWJkMC00NDc3LTg1NDgtMDBmOGQ0ZjViMzM1In0.5N2r4FRlrwbCTYoHRTxiiO7nGeavfrMMd4KzACTYjQn7UYKsYdcPOFKXOpWoZy6WyysPQE2AcwXObKc00m1xDQ'
});

async function main() {
  const result = await client.execute('SELECT * FROM blog ORDER BY id DESC');
  console.log('All blog posts:');
  console.log(JSON.stringify(result.rows, null, 2));
}

main();
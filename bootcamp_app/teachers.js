const { Pool } = require('pg');

const pool = new Pool({
  user : 'labber',
  password : '123',
  host : 'localhost',
  database : 'bootcampx'
});

const queryString = `
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM assistance_requests
JOIN teachers ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
ORDER BY teacher;`;

const cohortName = process.argv[2] || "JUL02";
//Store all potentially malicious values in an array.
const values = [`%${cohortName}%`];

pool.query(queryString, values)
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
})
.catch(err => console.error(err.stack));
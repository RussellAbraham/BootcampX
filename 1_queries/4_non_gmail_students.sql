SELECT name, id, email, cohort_id
FROM students
WHERE (email NOT LIKE '%@gmail.com' OR email IS NULL) AND phone IS NULL;

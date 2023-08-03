# BootcampX

A lighthouse labs exercise using PostgreSQL Server

## Example Startup

Add the tables to the database.

- From your psql session, type `\i migrations/students_cohorts.sql`
- Now enter `\dt` into your `psql` session to make sure the two tables have been created.

Take a look at all of the data in the students and cohorts tables.

In `psql`, enter the following commands:

```sql
SELECT * FROM students;
SELECT * FROM cohorts;
```

Run the `cohorts.sql` and `students.sql` files against the bootcampx database.

Inside the psql session, run the following commands:

```
\i seeds/cohorts.sql
\i seeds/students.sql
```

Now try running the following command:

```sql
SELECT count(*) FROM students;
```

We've got 192 students to query against.
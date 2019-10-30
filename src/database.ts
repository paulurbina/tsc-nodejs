import { Pool } from 'pg'

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'cognitiva',
    database: 'tsdb',
    port: 5432  
})
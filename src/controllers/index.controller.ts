import { Request, Response } from 'express'

import { pool } from '../database'
import { QueryResult } from 'pg'

export const getUsers = async (req: Request, res: Response ): Promise<Response> => {

    try {
        const response: QueryResult = await pool.query('SELECT * FROM users')
        return res.status(200).json(response.rows)
    } catch (error) {
        console.log(error)
        return res.status(500).json('internal server error')
    }
}

export const getUserbyId = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id)
        const response: QueryResult = await pool.query('SELECT * FROM users WHERE id = $1', [id])
        return res.json(response.rows)
    } catch (error) {
        console.log(error)
        return res.status(500).json('internal server error')
    }
}

export const createUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { name, email } = req.body
        const response: QueryResult = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email])
        return res.json({
            message: 'Message created successfully',
            user: {
                name, email
            }
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json('internal server error')
    }
}

export const updateUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id)
        const { name, email } = req.body
        await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id])
        return res.json(`User ${id} updated successfully`)
    } catch (error) {
        console.log(error)
        return res.status(500).json('internal server error')
    }
}

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id)
        await pool.query('DELETE FROM users WHERE id = $1', [id])
        return res.json(`User ${id} delete successfully`)
    } catch (error) {
        console.log(error)
        return res.status(500).json('internal server error')
    }
}
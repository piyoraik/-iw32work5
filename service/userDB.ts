import mysql from 'mysql2/promise'
import { dbsetting } from '../config'
import { UserType } from '../Types/UserType'

const TABLE = 't01_users'

export const fetchAll = async () => {
  try {
    const connection = await mysql.createConnection(dbsetting)
    const sql = `SELECT * FROM ${TABLE}`
    const [rows] = await connection.execute(sql)
    return {
      response: 200,
      rows,
    }
  } catch (err) {
    return {
      response: 400,
      err,
    }
  }
}

export const fetchOne = async (params: string) => {
  try {
    const connection = await mysql.createConnection(dbsetting)
    const sql = `SELECT * FROM ${TABLE} WHERE id = ? LIMIT 1`
    const [rows] = await connection.execute(sql, [params])
    if (Object.keys(rows).length === 0) throw 'データが見つかりませんでした。'
    return {
      response: 200,
      rows,
    }
  } catch (err) {
    return {
      response: 400,
      err,
    }
  }
}

export const postUser = async (req: UserType) => {
  try {
    const connection = await mysql.createConnection(dbsetting)
    const sql = `INSERT INTO ${TABLE} (id, username, email, password) VALUES (?, ?, ?, ?)`
    const [rows] = await connection.execute(sql, [
      req.id,
      req.username,
      req.email,
      req.password,
    ])
    return {
      response: 200,
      rows,
    }
  } catch (err) {
    return {
      response: 400,
      err,
    }
  }
}

export const updateUser = async (req: UserType) => {
  try {
    const connection = await mysql.createConnection(dbsetting)
    const sql = `UPDATE ${TABLE} SET username = ?, email = ?, password = ? WHERE id = ?`
    const [rows] = await connection.execute(sql, [
      req.username,
      req.email,
      req.password,
      req.id,
    ])
    return {
      response: 200,
      rows,
    }
  } catch (err) {
    return {
      response: 400,
      err,
    }
  }
}

export const deleteUser = async (id: string) => {
  try {
    const connection = await mysql.createConnection(dbsetting)
    const sql = `DELETE FROM ${TABLE} WHERE id = ?`
    const [rows] = await connection.execute(sql, [id])
    return {
      response: 200,
      rows,
    }
  } catch (err) {
    return {
      response: 400,
      err,
    }
  }
}

import { pool } from '../config/database.js'

const createTripDestination = async (req, res) => {
    try {
        const { trip_id, destination_id } = req.body

        const results = await pool.query(
            `INSERT INTO trips_destinations (trip_id, destination_id)
            VALUES($1, $2)
            RETURNING *`,
            [trip_id, destination_id]
        )

        res.status(201).json(results.rows[0])
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

const getTripsDestinations = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM trips_destinations ORDER BY trip_id ASC, destination_id ASC')
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

// all trips that include a given destination
const getAllTrips = async (req, res) => {
    try {
        const destination_id = parseInt(req.params.destination_id)

        const results = await pool.query(
            `SELECT trips.* FROM trips
            JOIN trips_destinations ON trips_destinations.trip_id = trips.id
            WHERE trips_destinations.destination_id = $1
            ORDER BY trips.id ASC`,
            [destination_id]
        )

        res.status(200).json(results.rows)
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

// all destinations on a given trip
const getAllDestinations = async (req, res) => {
    try {
        const trip_id = parseInt(req.params.trip_id)

        const results = await pool.query(
            `SELECT destinations.* FROM destinations
            JOIN trips_destinations ON trips_destinations.destination_id = destinations.id
            WHERE trips_destinations.trip_id = $1
            ORDER BY destinations.id ASC`,
            [trip_id]
        )

        res.status(200).json(results.rows)
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

export default {
    createTripDestination,
    getTripsDestinations,
    getAllTrips,
    getAllDestinations
}

const express = require('express')
const router = express.Router()
const db = require('../db')

// GET all sites
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM sites ORDER BY created_at DESC')
    res.json({ success: true, data: rows })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

// GET single site
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM sites WHERE id = ?', [req.params.id])
    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Site not found' })
    }
    res.json({ success: true, data: rows[0] })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

// GET stats summary
router.get('/stats/summary', async (req, res) => {
  try {
    const [total] = await db.query('SELECT COUNT(*) as total FROM sites')
    const [verified] = await db.query('SELECT COUNT(*) as verified FROM sites WHERE status = "Verified"')
    const [pending] = await db.query('SELECT COUNT(*) as pending FROM sites WHERE status = "Pending"')
    const [sequestration] = await db.query('SELECT SUM(co2) as total_co2 FROM sites')

    res.json({
      success: true,
      data: {
        totalSites: total[0].total,
        verifiedSites: verified[0].verified,
        pendingSites: pending[0].pending,
        totalSequestration: sequestration[0].total_co2,
        tokensMinted: verified[0].verified,
      }
    })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

module.exports = router
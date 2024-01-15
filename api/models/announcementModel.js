const db = require('../db');

const createAnnouncement = async (announcementData) => {
  try {
    const { initiator_id, title, category, about } = announcementData;

    const query = `
      INSERT INTO announcement_table
      (initiator_id, title, category, about)
      VALUES (?, ?, ?, ?);
    `;

    const [result] = await db.execute(query, [initiator_id, title, category, about]);

    return { message: 'Announcement created successfully', announcementId: result.insertId };
  } catch (error) {
    console.error('Error creating announcement:', error);
    throw new Error('Internal Server Error');
  }
};

module.exports = { createAnnouncement };

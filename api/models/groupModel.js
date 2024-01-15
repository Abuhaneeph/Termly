const db = require('../db')

const createGroup = async (groupData) => {
    try {
        const {
            initiator_id,
            groupName,
            groupTenor,
            groupAmount,
            groupParticipants,
            groupType
        } = groupData;

        // Check if the initiator can create a group based on the group_limit
        const { canCreateGroup, groupCount, group_limit } = await checkGroupLimit(initiator_id);

        if (!canCreateGroup) {
            return { success: false, message: `Cannot create more groups. Reached the limit of ${group_limit} groups.` };
        }

        const query = `
            INSERT INTO groups
                (initiator_id, groupName, groupTenor, groupAmount, groupParticipants, groupType)
            VALUES (?, ?, ?, ?, ?, ?)
        `;

        const [result] = await db.execute(query, [
            initiator_id,
            groupName,
            groupTenor,
            groupAmount,
            groupParticipants,
            groupType
        ]);

        return { success: true, message: 'Group created successfully', groupId: result.insertId, groupCount, group_limit };
    } catch (error) {
        console.error('Error creating group:', error);
        throw new Error('Internal Server Error');
    }
};

const getGroupLimit = async (initiator_id) => {
    try {
        const query = `
            SELECT group_limit
            FROM initiators
            WHERE initiators_id = ?
        `;

        const [result] = await db.execute(query, [initiator_id]);

        if (result.length > 0) {
            return result[0].group_limit;
        } else {
            // Return a default group_limit or handle the case where the initiator_id is not found
            return /* Default group_limit or handle the case accordingly */;
        }
    } catch (error) {
        console.error('Error getting group limit:', error);
        throw new Error('Internal Server Error');
    }
};

const checkGroupLimit = async (initiator_id) => {
    try {
        // Get the group_limit from the initiators_table
        const group_limit = await getGroupLimit(initiator_id);

        // Check the group count for the initiator
        const queryCount = `
            SELECT COUNT(*) AS groupCount
            FROM groups
            WHERE initiator_id = ?
        `;

        const [resultCount] = await db.execute(queryCount, [initiator_id]);

        const groupCount = resultCount[0].groupCount;

        // Check if the group count exceeds the group_limit
        const canCreateGroup = groupCount < group_limit;

        return { canCreateGroup, groupCount, group_limit };
    } catch (error) {
        console.error('Error checking group limit:', error);
        throw new Error('Internal Server Error');
    }
};
module.exports = {
    createGroup,checkGroupLimit
};

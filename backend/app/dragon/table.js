const pool = require('../../databasePool');
const DragonTraitTable = require('../dragonTrait/table');

class DragonTable {
  static storeDragon(dragon) {
    const { birthDate, nickName, generationId } = dragon;

    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO dragon(birthday, nickname, "generationId")
        VALUES($1, $2, $3) RETURNING id`,
        [birthDate, nickName, generationId],
        (error, response) => {
          if (error) return reject(error);

            const dragonId = response.rows[0].id;

            Promise.all(dragon.traits.map(({ traitType, traitValue }) => {
              return DragonTraitTable.storeDragonTrait({
                dragonId, traitType, traitValue
              });
            }))
            .then(() => {
              resolve({ dragonId });
            })
            .catch((err) => {
              reject(err);
            });

        }
      );
    });
  }

  static getDragon({ dragonId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT birthday, nickname, "generationId"
        FROM dragon
        WHERE dragon.id = $1`,
        [ dragonId ],
        (error, response) => {
          if (error) reject(error);

          if (response.rows.length === 0) reject(new Error('No dragon found.'));

          resolve(response.rows[0]);
        }
      );
    });
  }
}

module.exports = DragonTable;
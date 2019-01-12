const pool = require('../../databasePool');
const DragonTable = require('./table');
const Dragon = require('./index');

const getDragonWithTraits = ({ dragonId }) => {
  return Promise.all([
    DragonTable.getDragon({ dragonId }),
    new Promise((resolve, reject) => {
      pool.query(
        `SELECT "traitType", "traitValue"
        FROM trait
        INNER JOIN dragonTrait ON trait.id = dragonTrait."traitId"
        WHERE dragonTrait."dragonId" = $1`,
        [ dragonId ],
        (error, response) => {
          if (error) reject(error);

          resolve(response.rows);
        }
      );
    })
  ])
  .then(([dragon, dragonTraits]) => {
    return new Dragon({
      dragonId: dragonId,
      nickName: dragon.nickname,
      birthDate: dragon.birthday,
      generationId: dragon.generationId,
      traits: dragonTraits,
    });
  })
  .catch(error => {
    return error;
  });
};

module.export = getDragonWithTraits;
const database = require('../utils/database');

class Player{
   static onSave(name , dateOfBirth , photoUrl ,birthplace , career , matches , score , fifties , centuries , wickets , average){
        return database.execute("INSERT INTO player(name,dateOfBirth,photoUrl,birthplace , career,matches,score,fifties,centuries , wickets,average) VALUES(? , ? , ? , ? , ? , ? , ? , ? , ?,?,?)",[name , dateOfBirth,photoUrl,birthplace,career,matches,score , fifties , centuries , wickets , average])

    }
    static getByName(name){
        return database.execute('SELECT * FROM player WHERE name = ?',[name]);
    }
    static getById(id){
        return database.execute('SELECT * FROM player WHERE id = ?',[id]);
    }
    static async updateById(id, name, dateOfBirth, photoUrl, birthplace, career, matches, score, fifties, centuries, wickets, average) {
        try {
          const result = await database.execute('UPDATE player SET name = ?, dateOfBirth = ?, birthplace = ?, career = ?, matches = ?, score = ?, fifties = ?, centuries = ?, wickets = ?, average = ? WHERE id = ?', [name, dateOfBirth, birthplace, career, matches, score, fifties, centuries, wickets, average, id]);
          console.log('Rows affected:', result[0].affectedRows);
          return result;
        } catch (error) {
          console.error('Error updating player:', error);
          throw error;
        }
      }
}
module.exports = Player;
const Player = require("../models/player");

exports.postPlayer = (req , res , next) => {
    const { name,dateOfBirth , photoUrl , birthplace, career , matches,score,fifties , centuries , wickets , average } = req.body;
    Player.onSave(name,dateOfBirth , photoUrl , birthplace, career , matches,score,fifties , centuries , wickets , average).then(result => {
        res.send(result);
    })
    .catch(err => {
        console.log(err);
    })
console.log(name , req.body);
}

exports.getByName = (req , res , next) => {
    const name = req.params.playerName;
    Player.getByName(name)
    .then(([result , metaData]) => {
        res.json(result[0]);
    })
    .catch(err => {
        console.log(err);
        res.json(err);
    })
}

exports.getById = (req , res ,next) => {
    const id = req.params.id;
    Player.getById(id)
    .then((result, metaData) => {
       res.json(result[0]);
    })
    .catch(err => {
        console(err);
    })
}

exports.updateById = (req , res ,next) => {
    const { id ,name,dateOfBirth , photoUrl , birthplace, career , matches,score,fifties , centuries , wickets , average } = req.body;
    console.log(req.body)
    Player.updateById(id ,name,dateOfBirth , photoUrl , birthplace, career , matches,score,fifties , centuries , wickets , average)
    .then(([result,metaData]) => {
       console.log('then' , result); 
       res.json(result);
    }
    
    )
    .catch(err => {
        console.log(err , 'error');
        res.status(400).json(err);   
    })
}
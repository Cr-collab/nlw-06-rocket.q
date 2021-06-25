const Database = require('../db/config')

module.exports = {
    async create(req,res){

        const db = await Database();
        const pass = req.body.password;
        
        let roomId = 1;
         
        for(var i = 0; i < 5; i++)
        {
             roomId += Math.floor(Math.random()*10).toString();
             
        }

        console.log()

        

        await db.run(`INSERT INTO rooms (
            id,
            pass
        )VALUES(
            ${parseInt(roomId)}, 
            ${pass}
        )`);

        await db.close(``);

        res.redirect(`/room/${roomId}`)

    }
}
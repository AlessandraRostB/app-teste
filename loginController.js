const connection = require('../config/db');

require("dotenv").config();

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

async function login(request, response) {
  
    const query = "SELECT * FROM usuarios WHERE `email` = ?";
    
    const params = Array(
        request.body.email
    );

    connection.query(query, params, (err, results) => {
        try {            
            if (results.length > 0) {                
                bcrypt.compare(request.body.senha, results[0].senha, (err, result) => {
                    if (err) {                        
                        return response.status(401).send({
                            msg: 'Email or password is incorrect!'
                        });
                    } else if(result) {
                        const id = results[0].id;
                        const token = jwt.sign({ userId: id },'the-super-strong-secrect',{ expiresIn: 300 });
                        results[0]['token'] = token; 
                        
                        response
                        .status(200)
                        .json({
                            success: true,
                            message: `Sucesso! Usuário conectado.`,
                            data: results
                        });
                    }
                })
                
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível realizar a remoção. Verifique os dados informados`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) { 
            response.status(400).json({
                    succes: false,
                    message: "Ocorreu um erro. Não foi possível deletar usuário!",
                    query: err,
                    sqlMessage: err
                });
        }
    });
}

module.exports = {
    login
}
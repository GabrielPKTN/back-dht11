/**********************************************************************
 * Objetivo: Arquivo responsável pelo funcionamento da API
 * Data: 16/04/2026
 * Developer: Gabriel Lacerda Correia
 * Versão: 1.0.0
 *********************************************************************/

//Responsável pelo funcionamento da API
const express = require('express')

// Responsável pelas permissões da API
const cors = require('cors')

// Retorna a porta do servidor atual ou colocamos uma porta local
const PORT = process.env.PORT || 8080

// Criando instância da classe express
const app = express()

// Configuração de permissões de requisição
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept']
}))

// Middleware para permitir JSON no body
app.use(express.json());

app.listen(PORT, () => {
    console.log("Está vivo...!!!")
})
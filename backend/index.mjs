import express from 'express'
import cors from 'cors'
import mysql from 'mysql2/promise'

const conexao = await mysql.createConnection({
    host: '184.72.192.43',
    user: 'geracao',
    password: 'MySql@Equipe2024!',
    database: 'dripstore'
})

const porta = 3000


const app = express()
app.use(cors())
app.use(express.json())

app.get('/usuarios', async (req, res) => {
  try {
    const [rows] = await conexao.execute('SELECT * FROM usuarios');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao buscar usuários');
  }
});


app.listen(porta, () => {
    console.log('O servidor está rodando na porta 3000')
})
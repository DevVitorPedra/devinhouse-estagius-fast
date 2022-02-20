import App from './index'
const port = process.env.PORT || 5000

App.listen(port, ()=>{
    console.log('Rodando na porta: ',port)
})
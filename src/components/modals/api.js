export default{
    Enviar: async(Titulo, Descricao, message) => {
        let task = {
            Titulo, 
            Descricao, 
            message
        };
        let requisicao = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'}, 
            body: JSON.stringify(task)
        }
        const response = await fetch('http://localhost/todo');
        const data = await response.json();
        return data.message;
    }
}
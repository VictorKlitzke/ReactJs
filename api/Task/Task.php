<?php 

function resposta($code,$ok,$message){
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Content-Type: application/json");

    http_response_code($code);
    echo (json_decode([
        'ok' => $ok,
        'message' => $message
    ]))

    die;
}
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        resposta(200, true, '')
    }

    if($_SERVER[REQUEST_METHOD] != 'POST'){
        resposta(400, false, 'Método Invalido');
    }

$conexao = new PDO('mysql:host=localhost;dbnome=task', 'root', '');
$body = file_get_contents('php://input');
    if(!$body)
        resposta(400, false, 'Corpo da requisiçao invalido');
$body = json_decode($body);

$body ->Titulo = filter_var($body ->Titulo, FILTER_SANITIZE_STRING);
$body ->Descricao = filter_var($body ->Descricao, FILTER_SANITIZE_STRING);
$body ->message = filter_var($body ->message, FILTER_SANITIZE_STRING);

    if(!$body->titulo || !$body->descrocao || !$body->message){
        resposta(400, false , 'Dados invalidos')
    }

$sql = $conexao->prepare('INSERT INTO task_admin (Titulo, Descricao, message) VALUES (:Titulo, :Descricao, :message)');
$sql->bindParam('Titulo', $body->Titulo);
$sql->bindParam('Descricao', $body->Descricao);
$sql->execute();

resposta(200, true, 'Tarefa salva com sucesso')
?>

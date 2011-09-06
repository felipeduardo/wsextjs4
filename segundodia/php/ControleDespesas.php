<?php

require_once 'Db/Base.php';

class ControleDespesa extends Base {

    private     $valor = null;
    private     $data = null;
    protected   $table = "controle_despesa";
    
    public function insert() {
        
        $data = json_decode($_POST['data']);
        
        $db = $this->getDb();
        $stm = $db->prepare('Insert into ' . $this->getTable() . ' (valor, data, tipo_despesa_id) Values(:valor, :data, :tipo_despesa_id)');
        $stm->bindValue(':valor', $data->valor);
        $stm->bindValue(':data', $data->data);
        $stm->bindValue(':tipo_despesa_id', $data->tipo_despesa_id);
        $stm->execute();

        $result = $stm->fetch(\PDO::FETCH_ASSOC);

        $insert = $db->lastInsertId();
        
        $msg = $insert ? 'Registro(s) inserido(s) com sucesso' : 'Erro ao inserir o registro, tente novamente.';
        
        $newData = $data;
        $newData->id = $insert;
        $newData->data = date('Y-m-d', strtotime($data->data)); 

        echo json_encode(array(
            "success" => $insert,
            "message" => $msg,
            "data" => $newData
        ));
    }

    public function update() {
        
        $data = json_decode($_POST['data']);
        
        $db = $this->getDb();
        $stm = $db->prepare('update ' . $this->getTable() . ' set valor=:valor, data=:data, tipo_despesa_id=:tipo_despesa_id where id=:id');
        $stm->bindValue(':id', $data->id);
        $stm->bindValue(':valor', $data->valor);
        $stm->bindValue(':data', $data->data);
        $stm->bindValue(':tipo_despesa_id', $data->tipo_despesa_id);
        $update = $stm->execute();
        
        $msg = $update ? 'Registro(s) atualizado(s) com sucesso' : 'Erro ao atualizar, tente novamente.';
        
        $data->data = date('Y-m-d', strtotime($data->data)); 

        echo json_encode(array(
            "success" => $update,
            "message" => $msg,
            "data" => $data
        ));
    }
}

new ControleDespesa();
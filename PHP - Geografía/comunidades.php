<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="estilos.css">
    <title>Comunidades</title>
</head>
<body>

    <?php 

        include 'configBBDD.php'; //Incluimos los datos de la conexión

        

        $conn = mysqli_connect ($servername, $username, $password, $database) or die ("No ha sido posible establecer la conexión");

        $consulta = "select nombre from comunidades order by nombre;";
        $resultado = mysqli_query($conn,$consulta);
        $num_filas = mysqli_num_rows ($resultado);

        if ($num_filas > 0 ){
    ?>
    <form action="provincias.php">
        <label for="comunidad">Elija la comunidad deseada</label>
        <select name="comunidad" id="comunidad">
            <?php
                while ($fila=mysqli_fetch_assoc($resultado))
                    echo "<option id='{$fila ["nombre"]}' value='{$fila ["nombre"]}'>{$fila ["nombre"]}</option>";
            ?>
        </select>
        <button>Buscar provincias</button>
    </form>
    <?php
        }
        else
            echo "No hay datos en la tabla";
    ?>
    
</body>
</html>
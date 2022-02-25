<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Provincias</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>

    <?php 

        include 'configBBDD.php'; //Incluimos los datos de la conexión
        
        $_GET["comunidad"]; //Rescatamos el nombre de la comunidad

        $conn = mysqli_connect ($servername, $username, $password, $database) or die ("No ha sido posible establecer la conexión");

        $consulta = "select provincias.nombre 
                        from provincias, comunidades 
                        where provincias.id_comunidad = comunidades.id_comunidad
                        and comunidades.nombre = '{$_GET["comunidad"]}'
                        order by provincias.nombre;";


        $resultado = mysqli_query($conn,$consulta);
        $num_filas = mysqli_num_rows ($resultado);

        if ($num_filas > 0 ){
    ?>
    <form action="localidades.php">
    <label for="provincia">Elija la comunidad deseada</label>
        <select name="provincia" id="provincia">
            <?php
                while ($fila=mysqli_fetch_assoc($resultado))
                    echo "<option id='{$fila ["nombre"]}' value='{$fila ["nombre"]}'>{$fila ["nombre"]}</option>";
            ?>
        </select>
        
        <button>Buscar logalidades</button>
    </form>
    <?php
        }
        else
            echo "No hay datos en la tabla";
    ?>
    
</body>
</html>
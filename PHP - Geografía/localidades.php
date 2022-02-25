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
        
        $_GET["provincia"]; //Rescatamos el nombre de la comunidad

        $conn = mysqli_connect ($servername, $username, $password, $database) or die ("No ha sido posible establecer la conexión");

        $consulta = "select localidades.nombre 
                        from provincias, localidades
                        where provincias.nombre = '{$_GET["provincia"]}'
                        and localidades.n_provincia = provincias.n_provincia
                        order by localidades.nombre;";


        $resultado = mysqli_query($conn,$consulta);
        $num_filas = mysqli_num_rows ($resultado);

        if ($num_filas > 0 ){
    ?>
    <form action="comunidades.php">
    <label for="provincias">Elija la comunidad deseada</label>
        <select name="localidades" id="localidades">
            <?php
                while ($fila=mysqli_fetch_assoc($resultado))
                    echo "<option id='{$fila ["nombre"]}' value='{$fila ["nombre"]}'>{$fila ["nombre"]}</option>";
            ?>
        </select>
        
        <button>Volver a comunidades</button>
    </form>
    <?php
        }
        else
            echo "No hay datos en la tabla";
    ?>
    
</body>
</html>
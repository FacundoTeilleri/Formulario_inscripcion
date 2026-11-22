<?php
$Curso = $_POST['Curso'] ?? 'No indicado';
$Nombre = $_POST['Nombre'] ?? 'No indicado';
$Apellido = $_POST['Apellido'] ?? 'No indicado';
$Dni = $_POST['Dni'] ?? 'No indicado';
$Domicilio = $_POST['Domicilio'] ?? 'No indicado';
$Telefono = $_POST['Telefono'] ?? 'No indicado';
$Email = $_POST['Email'] ?? 'No indicado';
$Plan = $_POST['Plan'] ?? 'No indicado';
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmación de inscripción</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="confirm.css">
</head>

<body>
    <main class="contenedor">
        <section class="bloque-confirmacion">
            <div class="tarjeta">
                <header class="encabezado">
                    <div class="icono-circulo">
                        <span>✓</span>
                    </div>

                    <span class="etiqueta">CONFIRMACIÓN</span>
                    <h1>¡Registro exitoso!</h1>
                    <p>Tu inscripción fue recibida correctamente.</p>
                </header>

                <section class="datos">
                    <h2>Datos enviados</h2>

                    <ul class="lista-datos">
                        <li>
                            <span>Curso</span>
                            <strong><?php echo htmlspecialchars($Curso, ENT_QUOTES, 'UTF-8'); ?></strong>
                        </li>
                        <li>
                            <span>Nombre</span>
                            <strong><?php echo htmlspecialchars($Nombre, ENT_QUOTES, 'UTF-8'); ?></strong>
                        </li>
                        <li>
                            <span>Apellido</span>
                            <strong><?php echo htmlspecialchars($Apellido, ENT_QUOTES, 'UTF-8'); ?></strong>
                        </li>
                        <li>
                            <span>DNI</span>
                            <strong><?php echo htmlspecialchars($Dni, ENT_QUOTES, 'UTF-8'); ?></strong>
                        </li>
                        <li>
                            <span>Domicilio</span>
                            <strong><?php echo htmlspecialchars($Domicilio, ENT_QUOTES, 'UTF-8'); ?></strong>
                        </li>
                        <li>
                            <span>Teléfono</span>
                            <strong><?php echo htmlspecialchars($Telefono, ENT_QUOTES, 'UTF-8'); ?></strong>
                        </li>
                        <li>
                            <span>Email</span>
                            <strong><?php echo htmlspecialchars($Email, ENT_QUOTES, 'UTF-8'); ?></strong>
                        </li>
                        <li>
                            <span>Plan social</span>
                            <strong><?php echo htmlspecialchars($Plan, ENT_QUOTES, 'UTF-8'); ?></strong>
                        </li>
                    </ul>
                </section>

                <div class="acciones">
                    <a href="index.html" class="boton">Volver al inicio</a>
                </div>
            </div>

            <footer class="footer-confirmacion">
                <p>CFP Nº 401 - Lanús</p>
            </footer>
        </section>
    </main>
</body>
</html>
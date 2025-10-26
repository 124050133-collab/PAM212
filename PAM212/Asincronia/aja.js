const enviarDatos = () => {
      if (nombre.trim() === '' || correo.trim() === '' ) {
        Alert.alert('Error', 'Por favor completa todos los campos');
        alert('Error: Por favor completa todos los campos');
        setMensaje('Faltan campos por llenar');
      } else {
        Alert.alert('¡Éxito!', 'Datos enviados correctamente');
        alert('¡Éxito! Datos enviados correctamente');
        setMensaje('Datos enviados correctamente');
      }
    };

    <Button title="Enviar" onPress={enviarDatos} />
              
              <Text style={styles.mensaje}>{mensaje}</Text>
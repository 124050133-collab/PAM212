import { useEffect, useState, useCallback } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    ActivityIndicator,
    Alert,
    Modal
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { UsuarioController } from "../controllers/UsuarioController";

const controller = new UsuarioController();

export default function UsuarioView() {

    const [usuarios, setUsuarios] = useState([]);
    const [nombre, setNombre] = useState("");
    const [cargando, setCargando] = useState(true);
    const [procesando, setProcesando] = useState(false);

    // Modal edición
    const [modalVisible, setModalVisible] = useState(false);
    const [usuarioEditado, setUsuarioEditado] = useState(null);
    const [nuevoNombre, setNuevoNombre] = useState("");

    const cargarUsuarios = useCallback(async () => {
        try {
            setCargando(true);

            const data = await controller.obtenerUsuarios();
            setUsuarios(data);

            console.log("Usuarios cargados:", data.length);
        } catch (e) {
            Alert.alert("Error", e.message);
        } finally {
            setCargando(false);
        }
    }, []);

    useEffect(() => {
        const iniciar = async () => {
            await controller.initialize();
            await cargarUsuarios();
        };

        iniciar();
        controller.addListener(cargarUsuarios);

        return () => controller.removeListener(cargarUsuarios);
    }, [cargarUsuarios]);

    const agregar = async () => {
        if (procesando) return;

        try {
            setProcesando(true);

            const creado = await controller.crearUsuario(nombre);

            Alert.alert("Usuario creado", `ID generado: ${creado.id}`);
            setNombre("");

        } catch (err) {
            Alert.alert("Error", err.message);
        } finally {
            setProcesando(false);
        }
    };

    const abrirEdicion = (usuario) => {
        setUsuarioEditado(usuario);
        setNuevoNombre(usuario.nombre);
        setModalVisible(true);
    };

    const confirmarEdicion = async () => {
        if (!nuevoNombre.trim()) {
            Alert.alert("Error", "El nombre no puede estar vacío");
            return;
        }

        try {
            setProcesando(true);
            await controller.actualizarUsuario(usuarioEditado.id, nuevoNombre);
            setModalVisible(false);
        } catch (err) {
            Alert.alert("Error", err.message);
        } finally {
            setProcesando(false);
        }
    };

    const eliminar = (usuario) => {
        Alert.alert(
            "Eliminar",
            "¿Seguro que deseas eliminar este usuario?",
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Eliminar",
                    style: "destructive",
                    onPress: async () => {
                        try {
                            await controller.eliminarUsuario(usuario.id);
                        } catch (err) {
                            Alert.alert("Error", err.message);
                        }
                    }
                }
            ]
        );
    };

    const renderItem = ({ item, index }) => (
        <View style={styles.item}>
            <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.nombre}</Text>
                <Text style={styles.itemId}>ID: {item.id}</Text>
            </View>

            <TouchableOpacity onPress={() => abrirEdicion(item)}>
                <MaterialIcons name="edit" size={28} color="#333" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => eliminar(item)}>
                <MaterialIcons name="delete" size={28} color="#333" />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>GESTIÓN DE USUARIOS</Text>

            <View style={styles.panel}>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre del usuario"
                    value={nombre}
                    onChangeText={setNombre}
                />

                <TouchableOpacity style={styles.boton} onPress={agregar}>
                    <Text style={styles.botonTxt}>
                        {procesando ? "Procesando..." : "Agregar"}
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.panel}>
                {cargando ? (
                    <ActivityIndicator size="large" />
                ) : (
                    <FlatList
                        style={{ maxHeight: 300 }}
                        data={usuarios}
                        keyExtractor={(i) => i.id.toString()}
                        renderItem={renderItem}
                    />
                )}
            </View>

            {/* Modal */}
            <Modal visible={modalVisible} transparent animationType="slide">
                <View style={styles.modalFondo}>
                    <View style={styles.modalCaja}>
                        <Text style={styles.modalTitulo}>Editar Usuario</Text>

                        <TextInput
                            style={styles.input}
                            value={nuevoNombre}
                            onChangeText={setNuevoNombre}
                        />

                        <View style={styles.modalBtns}>
                            <TouchableOpacity style={styles.boton} onPress={confirmarEdicion}>
                                <Text style={styles.botonTxt}>Guardar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.boton}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.botonTxt}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f6f6f6",
    },
    titulo: {
        fontSize: 22,
        textAlign: "center",
        fontWeight: "bold",
        marginVertical: 20
    },
    panel: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 12,
        marginBottom: 20
    },
    input: {
        backgroundColor: "#eef1f5",
        borderRadius: 10,
        padding: 12,
        marginBottom: 10
    },
    boton: {
        backgroundColor: "#007bff",
        padding: 12,
        borderRadius: 10,
        alignItems: "center"
    },
    botonTxt: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16
    },
    item: {
        flexDirection: "row",
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        marginBottom: 12,
        alignItems: "center",
        justifyContent: "space-between"
    },
    itemInfo: {
        flex: 1,
        marginRight: 10
    },
    itemName: {
        fontSize: 17,
        fontWeight: "bold"
    },
    itemId: {
        fontSize: 13,
        color: "#555"
    },
    modalFondo: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center"
    },
    modalCaja: {
        width: "85%",
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 12
    },
    modalTitulo: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15,
        textAlign: "center"
    },
    modalBtns: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    }
});

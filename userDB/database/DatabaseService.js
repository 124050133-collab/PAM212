import { Platform } from "react-native";
import * as SQLite from "expo-sqlite";

class DatabaseService {

    constructor() {
        this.db = null;
        this.storageKey = "Usuarios";
    }

    async initialize() {
        if (Platform.OS === "web") {
            console.log("BD Web: LocalStorage");
            return;
        }

        console.log("BD Móvil: SQLite");

        this.db = await SQLite.openDatabaseAsync("miapp.db");
        await this.db.execAsync(`
            CREATE TABLE IF NOT EXISTS usuarios(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre TEXT NOT NULL,
                fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP
            );
        `);
    }

    async getAll() {
        if (Platform.OS === "web") {
            const info = localStorage.getItem(this.storageKey);
            return info ? JSON.parse(info) : [];
        }

        return await this.db.getAllAsync(`SELECT * FROM usuarios ORDER BY id DESC`);
    }

    async add(nombre) {
        if (Platform.OS === "web") {
            const lista = await this.getAll();

            const nuevo = {
                id: Date.now(),
                nombre,
                fecha_creacion: new Date().toISOString()
            };

            lista.unshift(nuevo);
            localStorage.setItem(this.storageKey, JSON.stringify(lista));

            return nuevo;
        }

        const result = await this.db.runAsync(
            "INSERT INTO usuarios(nombre) VALUES(?)",
            nombre
        );

        return {
            id: result.lastInsertRowId,
            nombre,
            fecha_creacion: new Date().toISOString()
        };
    }

    async update(id, nombre) {
        if (Platform.OS === "web") {
            const lista = await this.getAll();
            const pos = lista.findIndex(u => u.id === id);

            if (pos !== -1) {
                lista[pos].nombre = nombre;
                localStorage.setItem(this.storageKey, JSON.stringify(lista));
                return lista[pos];
            }
            return null;
        }

        await this.db.runAsync(
            "UPDATE usuarios SET nombre = ?",
            [nombre, id]
        );

        return {
            id,
            nombre,
            fecha_creacion: new Date().toISOString()
        };
    }

    async delete(id) {
        if (Platform.OS === "web") {
            const current = await this.getAll();
            const filtered = current.filter(item => item.id !== id);
            localStorage.setItem(this.storageKey, JSON.stringify(filtered));
            return true;
        }

        await this.db.runAsync(
            "DELETE FROM usuarios WHERE id=?",
            [id]
        );

        return true;
    }
}

export default new DatabaseService();

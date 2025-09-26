function verificarUsuario(usuario){
    return new Promise ((resolver, reject) => {
        if(usuario === "admin"){
             resolver("Acceso concedido");
        }else{
            reject("Acceso denegado");
        } 
    });
}

verificarUsuario("admin")
.then(res => console.log(res))
.catch(err => console.log(err));


verificarUsuario("Ivan")
.then(res => console.log(res))
.catch(err => console.log(err));

const operacion = (num1: number, num2: number, op: string) => {
    return new Promise((resolve, reject) => {
        import(`./${op}`)
        .then(data => {
            let operacion = new data.default(num1, num2)
            resolve(operacion.resultado());
        })
        .catch(() => {
            reject(new Error("operacion no valida"))
        })
    })
}

const operaciones = async () => {
    await operacion(1, 1, "Suma").then(resultado=> console.log(resultado)).catch(e=> console.log(e.message));
    await operacion(1, 1, "Resta").then(resultado=> console.log(resultado)).catch(e=> console.log(e.message));
    await operacion(1, 1, "Multiplicacion").then(resultado=>console.log(resultado)).catch(e=> console.log(e.message));
}

operaciones();


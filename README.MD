Tiempo estimado en concluir la practica 15 minutos.

**Dependencias del proyecto**:
---
    Jest
    Express
---

**Rutas**
API REST

-Obtener todos los usuarios:
---
    localhost:4000/v1/students
---

-Obtener email de los usuarios que tienes la propiedad haveCertifition:
---
    localhost:4000/v1/students/email
---

-Obtener usuarios con una cantidad mima de 500:
---
    Retorna los usuarios que tengan minimo 500 credits
    localhost:4000/v1/students/credits

    Recibe podemos pasar la cantidad de creditos minimos a traves del query
    localhost:4000/v1/students/credits?credits=200
---
    
**Componentes**
---
    Reader

    const fs = require("fs");

    class Reader {
        
        static readJsonFile(filePath) {
            return JSON.parse(fs.readFileSync(filePath, "utf8"));
        }
    }

    Nos permite leer archivos JSON
---

**Explorers**
---
    Explorers
    const Reader = require("./Reader");
    class Explorers {
        static getAllExplorers() {
            return Reader.readJsonFile('./explorers.json');
        }

        static haveCertification() {
            const explorers = Explorers.getAllExplorers();
            return (explorers.map(explorer => explorer.haveCertification ? explorer.email : null)).filter(email => email !== null);
        }

        static minCredits(credits){
            const explorers = Explorers.getAllExplorers();
            return explorers.filter(explorer => explorer.credits >= credits);
        }


    }
    Utilizando la clase Reader podremos acceder al archivo JSON que usamos como DB.
---

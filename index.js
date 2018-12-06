const cron = require("node-cron");

cron.schedule("* * * * *", () => console.log("Executando a tarefa a cada 1 minuto"));

/*
    * * * * * *
    | | | | | |
    | | | | | day of week
    | | | | month
    | | | day of month
    | | hour
    | minute
    second (opcional)
*/

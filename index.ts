import express, { Express } from "express";
const app: Express = express();

function main(): void {
    app.get('/', (req, res) => {
        res.send("Hello there")
    });
    app.listen(3000);
}

main()
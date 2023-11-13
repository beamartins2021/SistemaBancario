import { app } from "./app";
import { createAccount } from "./endpoints/createAccount";
import { getAccount } from "./endpoints/getAccount";

app.get("/account", getAccount)
app.post("/account", createAccount)
app.put("/account", () => { })
app.delete("/account", () => { })

app.get("/account/:cpf/balance", () => { })
app.put("/account/:cpf/transaction", () => { })

import { Table } from "../components/Table.jsx";
import { Form } from "../components/Form.jsx";

export function Login() {
    return(
        <div className="flex flex-col h-screen bg-cyan-300 justify-evenly w-screen">
      
      <header className="flex flex-row justify-around">
        <h1 className="text-9xl ">SEED HACK 🐱</h1>
      </header>

      <div className="flex flex-col">
        <Form></Form>
        {/* <Table></Table> */}
      </div>
    </div>
    )
}
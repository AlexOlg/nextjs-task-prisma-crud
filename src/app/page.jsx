import Navbar from "@/components/NavBar";
import { prisma } from "./libs/prisma";
import TaskCard from "@/components/TaskCard";


async function loadTasks () {

  //Con esta forma obtengo los datos haciendo una peticion HTTP /api/task
  // const res = await fetch('http://localhost:3000/api/tasks')
  // const data = await res.json()
  // console.log(data)

  //Con esta hacemos la peticion directamente desde la base de datos
  return await prisma.task.findMany()
}

export default async function HomePage() {

  const tasks = await loadTasks()
  return (
    <section className="container mx-auto">
      <h1 className="text-black flex flex-row justify-center my-4">*Click en tarea para editar</h1>
      <div className="grid grid-cols-2 gap-3 mt-10">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task}/>
          ))}
      </div>
    </section>
  )
}

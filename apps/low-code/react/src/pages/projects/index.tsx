import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="text-xl font-bold text-white m-4">页面列表</div>
      <div className="flex flex-wrap justify-start gap-4 mx-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => {
          return (
            <Link
              key={id}
              to={`/editor/${id}`}
              className="bg-white text-black text-[30px] rounded-md w-[100px] h-[100px] cursors-pointer hover:opacity-70 text-center leading-[100px]"
            >
              p-{id}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Projects

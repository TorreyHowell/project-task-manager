import { FiMoreHorizontal } from 'react-icons/fi'

function Home() {
  return (
    <div className="grid md:grid-cols-3">
      <div></div>
      <ul className="list-none">
        <li className="rounded-lg py-3 px-3 bg-slate-800 hover:bg-zinc-900">
          <div className="flex ">
            <div className="flex-auto">
              <label className="mr-4">
                <input type="checkbox" className="checkbox align-middle" />
              </label>
            </div>

            <div className="flex-auto overflow-hidden">
              <p className="font-bold  text-lg truncate">
                Clean Dishes as;ldfj;lasfd
              </p>
            </div>

            <div className="flex-auto text-right ml-2">
              <button className="btn btn-ghost btn-xs align-middle">
                <FiMoreHorizontal className="text-xl " />
              </button>
            </div>
          </div>
        </li>

        <li className="rounded-lg py-3 px-3 bg-slate-800 hover:bg-zinc-900 mt-1">
          <div className="flex ">
            <div className="flex-auto">
              <label className="mr-4">
                <input type="checkbox" className="checkbox align-middle" />
              </label>
            </div>

            <div className="flex-auto overflow-hidden">
              <p className="font-bold  text-lg truncate">
                Clean Dishes as;ldfj;lasfd
              </p>
            </div>

            <div className="flex-auto text-right ml-2">
              <button className="btn btn-ghost btn-xs align-middle">
                <FiMoreHorizontal className="text-xl" />
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Home

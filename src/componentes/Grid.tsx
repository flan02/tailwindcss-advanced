

export default function Grid() {
    return (
        <>
            <br /><br />
            <h1 className="text-bold text-2xl text-center">Grid</h1>
            <div className="grid grid-cols-3 gap-x-4 my-4">
                <div className="bg-red-400 border">A</div>
                <div className="bg-red-500 border">A</div>
                <div className="bg-red-600 border">A</div>
                <div className="bg-red-400 border">A</div>
                <div className="bg-red-500 border">A</div>
                <div className="bg-red-600 border">A</div>
            </div>
            <div className="grid grid-cols-1 gap-x-4 my-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-blue-400 border">B</div>
                <div className="bg-blue-500 border">B</div>
                <div className="bg-blue-600 border">B</div>
                <div className="bg-blue-400 border">B</div>
                <div className="bg-blue-500 border">B</div>
                <div className="bg-blue-600 border">B</div>
            </div>
            <div className="grid grid-cols-4 gap-2 my-4">
                <div className="bg-green-400 col-span-2">C</div>
                <div className="bg-green-500 ">C</div>
                <div className="bg-green-600 ">C</div>
                <div className="bg-green-400 col-span-4">C</div>
            </div>
            <div className="grid grid-cols-12 gap-x-1 my-2">
                <div className="bg-orange-500">D</div>
                <div className="bg-orange-500">D</div>
                <div className="bg-orange-500">D</div>
                <div className="bg-orange-500">D</div>
                <div className="bg-orange-500">D</div>
                <div className="bg-orange-500">D</div>
                <div className="bg-orange-500">D</div>
                <div className="bg-orange-500">D</div>
                <div className="bg-orange-500">D</div>
                <div className="bg-orange-500">D</div>
                <div className="bg-orange-500">D</div>
                <div className="bg-orange-500">D</div>
            </div>
            <h2 className="text-bold text-center text-4xl my-4">Identicas formas de hacer lo mismo</h2>
            <div className="grid grid-cols-12 gap-x-1">
                <div className="bg-orange-500 col-span-4">D</div>
                <div className="bg-orange-500 col-span-4">D</div>
                <div className="bg-orange-500 col-span-4">D</div>
            </div>
            <div className="grid grid-cols-3 gap-x-1">
                <div className="bg-orange-500">D</div>
                <div className="bg-orange-500">D</div>
                <div className="bg-orange-500">D</div>
            </div>
            <hr />
            <h2 className="text-bold text-center text-4xl my-4">Col Start | Col End - Si hay (n) columnas tenemos (n+1) posiciones para ubicarlas</h2>
            <div className="grid grid-cols-4 gap-x-1 my-4 text-white">
                <div className="bg-slate-800 col-start-2">col 1</div>
                <div className="bg-slate-800">col 2</div>
                <div className="bg-slate-800 col-start-1">col 3</div>
                <div className="bg-slate-800">col 4</div>
            </div>
            <div className="grid grid-cols-4 gap-x-1 my-4 text-white">
                <div className="bg-purple-500 col-end-2">col 1</div>
                <div className="bg-purple-500">col 2</div>
                <div className="bg-purple-500 col-end-5">col 3</div>
                <div className="bg-purple-500">col 4</div>
            </div>
            <h2 className="text-bold text-center text-4xl my-4">Grid template row</h2>
            <div className="grid grid-rows-4 gap-y-2">
                <div className="bg-emerald-600 row-span-2">A</div>
                <div className="bg-emerald-600">B</div>
                <div className="bg-emerald-600">C</div>
                <div className="bg-emerald-600">D</div>
            </div>
        </>
    )
}


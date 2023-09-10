

function Flexbox() {
    return (
        <>
            <h1 className="my-4 text-4xl text-center">Flexbox</h1>
            <h2>items sin flex</h2>
            <div className="">
                <div className="bg-blue-200 p-4 m-2">item 1</div>
                <div className="bg-blue-200 p-4 m-2">item 2</div>
                <div className="bg-blue-200 p-4 m-2">item 3</div>
            </div>
            <br />
            <h2>items con flex row</h2>
            <div className="flex justify-center bg-cyan-100 h-64 items-center">
                <div className="bg-blue-500 p-4 m-2">item 1</div>
                <div className="bg-blue-500 p-4 m-2">item 2</div>
                <div className="bg-blue-500 p-4 m-2">item 3</div>
            </div>
            <div className="flex flex-wrap bg-cyan-50 h-64 content-end border border-black">
                <div className="bg-blue-500 p-4 m-2 flex-grow-2">item 4</div>
                <div className="bg-blue-500 p-4 m-2 flex-grow">item 5</div>
                <div className="bg-blue-500 p-4 m-2">item 6</div>
            </div >
            <br />
            <div className="h-64 flex flex-row-reverse items-start justify-between flex-wrap bg-cyan-100">
                <div className="bg-red-500 p-4 m-2">item 1</div>
                <div className="bg-red-500 p-4 m-2 self-end">item 2</div>
                <div className="bg-red-500 p-4 m-2 self-center">item 3</div>
            </div>
            <h2>personalizamos el tamaño de los hijos</h2>
            <div className="h-64 flex flex-wrap items-start bg-cyan-200 border border-black">
                <div className="bg-red-400 p-4 m-2">item 1</div>
                <div className="bg-red-400 p-4 m-2 flex-1">distinto tamaño de elemento</div>
                <div className="bg-red-400 p-4 m-2">item 3</div>
            </div>
            <h2>flex columnas</h2>
            <div className="flex flex-col">
                <div className="bg-blue-800 p-4 m-2">item 1</div>
                <div className="bg-blue-500 p-4 m-2">item 2</div>
                <div className="bg-blue-500 p-4 m-2">item 3</div>
            </div>
            <div className="flex flex-col-reverse">
                <div className="bg-blue-900 p-4 m-2">item 1</div>
                <div className="bg-blue-500 p-4 m-2">item 2</div>
                <div className="bg-blue-500 p-4 m-2">item 3</div>
            </div>
            <br /><br />
        </>

    )
}

export default Flexbox
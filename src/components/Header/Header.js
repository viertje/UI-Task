import { Link } from "react-router-dom"

export default function Header(){

    return (
        <>
            <div className="mb-8 w-full bg-gradient-to-r from-cyan-800 to-indigo-900 flex justify-between p-4 items-center border-b-2 border-white">
                <Link className="mx-32 text-xl" to="/">Fan Artikel Webshop</Link>

                <div className="flex gap-8 mx-32 text-xl">
                    <Link to="/ListPage">ListPage</Link>
                    <Link to="/SBB">SBB</Link>
                    <Link to="/merchstore">Merch</Link>
                    <Link to="/OrderPage">Order</Link>
                </div>

            </div>
        </>
    )
}
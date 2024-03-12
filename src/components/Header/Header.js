import { Link } from "react-router-dom"

export default function Header(){

    return (
        <>
            <div className="w-full bg-blue-950 flex justify-between p-4">
                <Link to="/">Very cool website</Link>
                <div className="mx-4">
                    <input className="rounded-md placeholder" placeholder="search" type="text" />
                </div>
                <div className="flex gap-4">
                    <Link to="/blogs">Blog</Link>
                    <Link to="/contact">Contact</Link>
                </div>

            </div>
        </>
    )
}
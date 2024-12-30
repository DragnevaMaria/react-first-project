import { Link, useNavigate } from "react-router-dom"

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <div>
        <h1>404 - Page Not Found</h1>
        <br />
        <br />
        <Link to={"/"}>
            <p>link to go to default page</p>
        </Link>
        <br />
        <p 
          style={{ cursor: "pointer" }} 
          onClick={() => {
              navigate(-1)
          }}>
          ⇐ link to return to previous page
        </p>
    </div>
  )
}

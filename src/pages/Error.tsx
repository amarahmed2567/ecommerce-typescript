import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";
import { Container } from "react-bootstrap";
const Error = () => {

  const error:any = useRouteError();
    console.log(error)
  return (
    <Container className="notFound">
      <h1>{error.status}</h1>
      <p>{error.statusText}</p>
      <Link to="/" replace={true}>
        How about going back to safety?
      </Link>
    </Container>
  )
}

export default Error
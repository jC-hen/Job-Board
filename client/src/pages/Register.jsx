import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo } from "../components";
import { FormRow } from "../components";
const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="john" />
        <FormRow
          type="text"
          name="lastName"
          labelText="last name"
          defaultValue="smith"
        />
        <FormRow type="text" name="location" defaultValue="earth" />
        <FormRow type="text" name="email" defaultValue="john@gmail.com" />
        <FormRow
          type="password"
          name="password"
          labelText="name"
          defaultValue="secret123"
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Aready a member?{" "}
          <Link to="/login" className="member-btn">
            login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;

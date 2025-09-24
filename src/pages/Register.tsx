import { set } from "mongoose";
import { useActionState, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [data, action, isPending] = useActionState(registerUser, undefined);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isMatching, setIsMatching] = useState(true);

  async function registerUser(previousState: unknown, formData: FormData) {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirm-password") as string;

    if (password !== confirmPassword) {
      return { status: "Passwords do not match" };
    }

    try {
      const response = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password }),
      });

      if (!response.ok) {
        return { status: "error" };
      }

      if (response.headers.get("x-auth-token")) {
        localStorage.setItem(
          "x-auth-token",
          response.headers.get("x-auth-token") as string
        );

        navigate("/");
      }
    } catch (err) {
      return console.log(err);
    }
  }

  return (
    <>
      <div className="flex justify-center items-center h-[100vh] ">
        <div>
          <form
            action={action}
            className="loginForm min-w-[400px] h-fit flex flex-col p-[25px] gap-[40px]"
          >
            <h1 className="text-center font-bold text-[35px]">Sign Up</h1>
            {data?.status && (
              <span className="text-center">Invalid username or password</span>
            )}
            {!isMatching && (
              <span className="text-center">Passwords do not match</span>
            )}
            <input
              id="username"
              name="username"
              minLength={5}
              maxLength={25}
              required
              placeholder="Username"
              className="text-center focus:placeholder:opacity-0 rounded-[30px] border-black border-2 py-[10px] text-[20px] "
            />
            <input
              id="password"
              name="password"
              type="password"
              minLength={5}
              maxLength={255}
              required
              placeholder="Password"
              className="text-center focus:placeholder:opacity-0 rounded-[30px] border-black border-2 py-[10px] text-[20px]"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              onBlur={() => {
                if (password !== confirmPassword) {
                  setIsMatching(false);
                }
              }}
              onFocus={() => {
                setIsMatching(true);
              }}
              value={password}
            />
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              minLength={5}
              maxLength={255}
              required
              placeholder="Confirm Password"
              className="text-center focus:placeholder:opacity-0 rounded-[30px] border-black border-2 py-[10px] text-[20px] "
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              onBlur={() => {
                if (password !== confirmPassword) {
                  setIsMatching(false);
                }
              }}
              onFocus={() => {
                setIsMatching(true);
              }}
              value={confirmPassword}
            />
            <button
              type="submit"
              disabled={isPending && isMatching}
              className="bg-amber-300 rounded-[30px] py-[10px] hover:bg-amber-200 cursor-pointer text-[20px]"
            >
              Sign Up
            </button>
          </form>
          <p
            onClick={() => {
              navigate("/login");
            }}
            className="text-center underline hover:cursor-pointer hover:opacity-[50%]"
          >
            Already a user?
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;

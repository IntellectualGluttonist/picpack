import { useActionState, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [data, action, isPending] = useActionState(registerUser, undefined);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isMatching, setIsMatching] = useState(true);
  const [pseudoIndex, setPseudoIndex] = useState(0);
  const [imgPreview, setImgPreview] = useState<string | null>(null);

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
            className="loginForm min-w-[400px] h-fit p-[25px]"
          >
            <h1 className="text-center font-bold text-[35px]">Sign Up</h1>
            <div className="min-h-[400px] flex justify-center items-center">
              {pseudoIndex == 0 && (
                <div className="flex flex-col gap-[40px] min-w-[400px]">
                  {data?.status && (
                    <span className="text-center">
                      Invalid username or password
                    </span>
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
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    className="text-center focus:placeholder:opacity-0 rounded-[30px] border-black border-2 py-[10px] text-[20px]"
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
                    type="button"
                    className="bg-amber-300 rounded-[30px] py-[10px] hover:bg-amber-200 cursor-pointer text-[20px]"
                    onClick={() => {
                      setPseudoIndex(pseudoIndex + 1);
                    }}
                  >
                    &#8594;
                  </button>
                </div>
              )}

              {pseudoIndex == 1 && (
                <div className="flex flex-col min-w-[400px] gap-3">
                  <div className="flex flex-col justify-center items-center">
                    <label>Profile Picture</label>
                    <div className="w-[300px] h-[300px] outline-1">
                      {imgPreview && <img src={imgPreview} />}
                      {!imgPreview && (
                        <label htmlFor="upload_image">
                          <svg width="50" height="50" viewBox="0 0 50 50">
                            <line
                              x1="10"
                              y1="25"
                              x2="40"
                              y2="25"
                              stroke="black"
                              stroke-width="2"
                            />
                            <line
                              x1="25"
                              y1="10"
                              x2="25"
                              y2="40"
                              stroke="black"
                              stroke-width="2"
                            />
                          </svg>
                        </label>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="file"
                      id="upload_image"
                      name="upload_image"
                      accept="image/png, image/jpeg"
                      className="hidden"
                    />

                    <button
                      type="button"
                      className="bg-amber-300 rounded-[30px] py-[10px] hover:bg-amber-200 cursor-pointer text-[20px] flex-1"
                      onClick={() => {
                        setPseudoIndex(pseudoIndex - 1);
                      }}
                    >
                      &#8592;
                    </button>
                    <button
                      type="button"
                      className="bg-amber-300 rounded-[30px] py-[10px] hover:bg-amber-200 cursor-pointer text-[20px] flex-1"
                      onClick={() => {}}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              )}
            </div>
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

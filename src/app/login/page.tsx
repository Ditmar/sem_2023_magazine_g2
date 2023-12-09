"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import image from "./logo.png";
import styles from "./styles.module.scss";

const LoginPage = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors([]);

    const responseNextAuth = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (responseNextAuth?.error) {
      setErrors(responseNextAuth.error.split(","));
      return;
    }

    router.push("/dashboard");
  };

  return (
    <>
      <div className={styles.Login}>
        <div className={styles.imagen}></div>
        <form onSubmit={handleSubmit} className={styles.sign_in_htm}>
        <div className={styles.group}>
          <label htmlFor="user" className={styles.label}>Email</label>
          <input  type="email" placeholder="" name="email"  className={styles.input_field}value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div className={styles.group}>
          <label htmlFor="user" className={styles.label}>password</label>
          <input type="password" placeholder="" name="password" className={styles.input_field}value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
          <div className={styles.body_button}>
            <button type="submit" className={styles.button}>
              INICIAR
            </button>
          </div>
        </form>

        {errors.length > 0 && (
          <div className="alert alert-danger mt-2">
            <ul className="mb-0">
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
export default LoginPage;
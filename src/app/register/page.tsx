"use client";

import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./styles.module.scss";
import imageg from "./google.png";

const RegisterPage = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors([]);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );

    const responseAPI = await res.json();

    if (!res.ok) {
      setErrors(responseAPI.message);
      return;
    }

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
    <div className={styles.register}>
      <div className={styles.imagen}></div>
      <div>
      <div className={styles.ButtonGoogle}>
      <div className={styles.imagen_google}></div>
        <button onClick={() => signIn('google')} className='text-white'>Google</button>
      </div>
      <div className={styles.ButtonFacebook}>
        <div className={styles.imagen_facebook}></div> 
        <button onClick={() => signIn('facebook')} className='text-white'>Facebook</button>
    </div>
    <div className={styles.Button}>
    </div>
      </div>
      <div className={styles.Register}>
        <form onSubmit={handleSubmit}>
        <div className={styles.group}>
          <label htmlFor="user" className={styles.label}>Nombre</label>
          <input  type="text" placeholder="" name="name"  className={styles.input_field} value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className={styles.group}>
          <label htmlFor="user" className={styles.label}>Email</label>
          <input  type="email" placeholder="" name="email"  className={styles.input_field}value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div className={styles.group}>
          <label htmlFor="user" className={styles.label}>Contraseña</label>
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
    </div>
  );
};
export default RegisterPage;
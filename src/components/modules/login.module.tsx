"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@melo/components/ui/Input.component";
import { Button } from "@melo/components/ui/Button.component";
import styles from "./login.module.css";

const LoginModule: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const accessToken = data.accessToken;
        const refreshToken = data.refreshToken;

        if (accessToken && refreshToken) {
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          router.push("/dashboard");
        } else {
          setError("Error al recibir tokens de acceso.");
        }
      } else {
        const errorData = await response.json();
        setError(
          errorData.message ||
            "Error de inicio de sesión. Credenciales incorrectas."
        );
      }
    } catch (e: any) {
      setError("Error de conexión con el servidor.");
      console.error("Error de inicio de sesión:", e);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.loginTitle}>melo</h2>{" "}
      {/* Título basado en la imagen */}
      <p className={styles.loginSubtitle}>
        Las finanzas de tu empresa, en un solo lugar.
      </p>{" "}
      {/* Subtítulo basado en la imagen */}
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        {error && <div className={styles.errorMessage}>{error}</div>}{" "}
        {/* Mostrar mensaje de error */}
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.formLabel}>
            Correo
          </label>{" "}
          {/* Etiqueta "Correo" basada en la imagen */}
          <Input
            type="email"
            id="email"
            placeholder="mateo@eppmelo.com" // Placeholder basado en la imagen
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.formInput}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.formLabel}>
            Contraseña
          </label>{" "}
          {/* Etiqueta "Contraseña" basada en la imagen */}
          <Input
            type="password"
            id="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.formInput}
            required
          />
        </div>
        <div className={styles.formActions}>
          <a href="/recovery-password" className={styles.forgotPasswordLink}>
            Olvide mi contraseña
          </a>{" "}
          {/* Enlace "Olvide mi contraseña" */}
          <Button type="submit" className={styles.loginButton}>
            Iniciar sesión
          </Button>{" "}
        </div>
        <div className={styles.signupLinkContainer}>
          <p className={styles.signupText}>¿Aún no estás registrado?</p>
          <a href="/signup" className={styles.signupButton}>
            Regístrate
          </a>{" "}
        </div>
      </form>
    </div>
  );
};

export default LoginModule;

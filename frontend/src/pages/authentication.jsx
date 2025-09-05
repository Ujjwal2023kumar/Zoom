import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';


export default function Authentication() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [formState, setFormState] = useState(0); // 0: Login, 1: Register
    const [showMessage, setShowMessage] = useState(false);
    const { handleRegister, handleLogin } = useContext(AuthContext);

    const handleAuth = async (e) => {
        e.preventDefault();
        try {
            if (formState === 0) {
                await handleLogin(username, password);
            } else {
                const result = await handleRegister(name, username, password);
                setUsername("");
                setMessage(result);
                setShowMessage(true);
                setError("");
                setFormState(0);
                setPassword("");
                setName("");
            }
        } catch (err) {
            let msg = err?.response?.data?.message || "Authentication failed.";
            setError(msg);
        }
    };

    return (
        <section className="container mt-5 mb-5 d-flex justify-content-center">
            <div className="row w-100">
                <div className="col-md-6 offset-md-3">
                    <div className="card shadow">
                        <div className="card-body">
                            <h3 className="text-center mb-4">{formState === 0 ? "Sign In" : "Sign Up"}</h3>
                            <div className="d-flex justify-content-center mb-3">
                                <button className={`btn btn${formState === 0 ? "-dark" : "-secondary"} mx-1`} onClick={() => setFormState(0)}>
                                    Sign In
                                </button>
                                <button className={`btn btn${formState === 1 ? "-dark" : "-secondary"} mx-1`} onClick={() => setFormState(1)}>
                                    Sign Up
                                </button>
                            </div>
                            <form onSubmit={handleAuth}>
                                {formState === 1 && (
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Full Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            value={name}
                                            onChange={e => setName(e.target.value)}
                                            required
                                        />
                                    </div>
                                )}
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        value={username}
                                        onChange={e => setUsername(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                {error && <div className="alert alert-danger py-1">{error}</div>}
                                <div className="d-flex justify-content-center mt-3"><button class="btn btn-dark" type='submit'>{formState === 0 ? "Login" : "Register"}</button></div>
                            </form>
                            {showMessage && (
                                <div className="alert alert-success mt-3" role="alert">
                                    {message}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

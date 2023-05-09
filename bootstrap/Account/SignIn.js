import React, { useState } from 'react';

export default function SignIn() {
    const initialState = {
        email: "",
        password: "",
        log: false
    }
    const [data, setData] = useState(initialState);

    const handleSubmit = e => {
        e.preventDefault();

        fetch('http://localhost/react/my-first-app/src/feldolgozo.php', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( data )
        })
    }

    const handleChange = e => {
        if(e.target.type === "checkbox") {
            setData({ ...data, [e.target.name]: e.target.checked });
        }
        else {
            setData({ ...data, [e.target.name]: e.target.value });
        }
    }

    return <main className="container my-5 overflow-hidden" style={{ height: "78.5vh" }}>
        <section className="row">
            <article className="col-12 text-center">
                <h2 className='mb-5'>Sign In</h2>
            </article>
        </section>
        <section className='row'>
            <article className="col-12 col-sm-10 col-md-8 col-lg-6 col-xxl-5 mx-auto">
                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="email" name="email" placeholder="E-mail" onChange={handleChange} />
                        <label htmlFor="email">E-mail</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={handleChange} />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="form-check mb-3">
                        <input className='form-check-input' type="checkbox" name="log" id="log" onClick={handleChange} />
                        <label htmlFor="log" className="form-check-label">Log in permanently</label>
                    </div>
                    <div className="mb-3 d-flex justify-content-center">
                        <button type='submit' className='btn btn-primary'>Login</button>
                    </div>
                </form>
            </article>
        </section>
    </main>
}
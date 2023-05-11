import React, { useState } from 'react';

export default function SignUp() {
    const initialState = {
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
        date: "",
        terms: false,
        gender: ""
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

    return <main className="container my-5 overflow-hidden">
        <section className="row">
            <article className="col text-center">
                <h2 className='mb-5'>Sign Up</h2>
            </article>
        </section>
        <section className='row'>
            <article className="col-12 col-sm-10 col-md-8 col-lg-6 col-xxl-5 mx-auto">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" name="username" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input type="email" className="form-control" id="email" name="email" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" placeholder="at least 8 characters" onChange={handleChange} />
                        <span className='small'>Passwords must be at least 8 characters.</span>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password_confirmation" className="form-label">Re-enter password</label>
                        <input type="password" className="form-control" id="password_confirmation" name="password_confirmation" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="date" className="form-label">Birthdate</label>
                        <input type="date" className="form-control" id="date" name="date" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <h3 className='h6'>Gender</h3>
                    </div>
                    <div className="form-check form-check-inline mb-3">
                        <input className='form-check-input' type="radio" name="gender" id="woman" value="woman" onChange={handleChange} />
                        <label htmlFor="woman" className="form-check-label">Woman</label>
                    </div>
                    <div className="form-check form-check-inline mb-3">
                        <input className='form-check-input' type="radio" name="gender" id="man" value="man" onChange={handleChange} />
                        <label htmlFor="man" className="form-check-label">Man</label>
                    </div>
                    <div className="form-check form-check-inline mb-3">
                        <input className='form-check-input' type="radio" name="gender" id="notrespond" value="notrespond" onChange={handleChange} />
                        <label htmlFor="notrespond" className="form-check-label">Prefer not to respond</label>
                    </div>
                    <div className="form-check my-5">
                        <input className='form-check-input' type="checkbox" name="terms" id="terms" onClick={handleChange} />
                        <label htmlFor="terms" className="form-check-label">I accept the Terms and Conditions.</label>
                    </div>
                    <div className="mb-3 d-flex justify-content-center">
                        <button type='reset' className='btn btn-outline-danger me-2'>Reset</button>
                        <button type='submit' className='btn btn-primary'>Create account</button>
                    </div>
                </form>
            </article>
        </section>
    </main>
}
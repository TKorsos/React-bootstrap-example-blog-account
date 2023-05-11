import React from 'react';
import essaouira from './img/essaouira-morocco.jpg';
import trabant from './img/green-trabant.jpg';
import neom from './img/neom.jpg';
import tienko from './img/tienko-dima.jpg';

export default function Blog() {
    return <main className="container my-5 overflow-hidden">
        <section className='row'>
            <article className="col">
                <h2 className='text-center my-5'>Blogs</h2>
            </article>
        </section>
        <section className="row row-cols-1 row-cols-md-2 row-cols-xl-4 my-5">
            <article className='col mb-5 mb-xl-0'>
                <div className="card text-center h-100">
                    <img src={essaouira} className="card-img-top" alt="Essaouira, Morocco"  style={{ height: "15rem" }} />
                    <h3 className="card-header">
                    Essaouira
                    </h3>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <article>
                            Photo by <a href="https://unsplash.com/@ana_insomnia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anastasiia Malai</a> on <a href="https://unsplash.com/photos/rgUYaKFKSDs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                        </article>
                    </div>
                    <div className="card-footer text-body-secondary">
                        2 days ago
                    </div>
                </div>
            </article>
            <article className='col mb-5 mb-xl-0'>
                <div className="card text-center h-100">
                    <img src={trabant} className="card-img-top" alt="Green Trabant"  style={{ height: "15rem" }} />
                    <h3 className="card-header">
                        Trabant
                    </h3>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <article>
                            Photo by <a href="https://unsplash.com/@andjsch?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Andreas Schantl</a> on <a href="https://unsplash.com/photos/irBBfxBI7ig?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                        </article>
                    </div>
                    <div className="card-footer text-body-secondary">
                        21 hours ago
                    </div>
                </div>
            </article>
            <article className='col mb-5 mb-md-0'>
                <div className="card text-center h-100">
                    <img src={neom} className="card-img-top" alt="Neom, Saudi-Arabia"  style={{ height: "15rem" }} />
                    <h3 className="card-header">
                        Neom
                    </h3>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <article>
                            Photo by <a href="https://unsplash.com/@neom?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">NEOM</a> on <a href="https://unsplash.com/photos/ecw2GLQqVus?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                        </article>
                    </div>
                    <div className="card-footer text-body-secondary">
                        1 days ago
                    </div>
                </div>
            </article>
            <article className='col'>
                <div className="card text-center h-100">
                    <img src={tienko} className="card-img-top" alt="Tienko Dima"  style={{ height: "15rem" }} />
                    <h3 className="card-header">
                        Tienko
                    </h3>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <article>
                            Photo by <a href="https://unsplash.com/fr/@damabima?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tienko Dima</a> on <a href="https://unsplash.com/photos/uYoVf9I6ANI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                        </article>
                    </div>
                    <div className="card-footer text-body-secondary">
                        4 days ago
                    </div>
                </div>
            </article>
        </section>
        <section className='row'>
            <article className="col">
                <h2 className='text-center my-5'>Articles</h2>
            </article>
        </section>
        <section className="row row-cols-1 row-cols-md-2 row-cols-lg-3 my-5">
            <article className='col mb-5'>
                <div className="card text-center">
                    <h4 className="card-header">
                        Featured
                    </h4>
                    <div className="card-body">
                        <h5 className="card-title">Article 1</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div className="card-footer text-body-secondary">
                        Last updated 3 mins ago
                    </div>
                </div>
            </article>
            <article className='col mb-5'>
                <div className="card text-center">
                    <h4 className="card-header">
                        Featured
                    </h4>
                    <div className="card-body">
                        <h5 className="card-title">Article 2</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div className="card-footer text-body-secondary">
                        Last updated 4 mins ago
                    </div>
                </div>
            </article>
            <article className='col mb-5'>
                <div className="card text-center">
                    <h4 className="card-header">
                        Featured
                    </h4>
                    <div className="card-body">
                        <h5 className="card-title">Article 3</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div className="card-footer text-body-secondary">
                        Last updated 35 mins ago
                    </div>
                </div>
            </article>
            <article className='col mb-5 mb-lg-0'>
                <div className="card text-center">
                    <h4 className="card-header">
                        Featured
                    </h4>
                    <div className="card-body">
                        <h5 className="card-title">Article 4</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div className="card-footer text-body-secondary">
                        Last updated 1 mins ago
                    </div>
                </div>
            </article>
            <article className='col mb-5 mb-md-0'>
                <div className="card text-center">
                    <h4 className="card-header">
                        Featured
                    </h4>
                    <div className="card-body">
                        <h5 className="card-title">Article 5</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div className="card-footer text-body-secondary">
                        Last updated 11 mins ago
                    </div>
                </div>
            </article>
            <article className='col'>
                <div className="card text-center">
                    <h4 className="card-header">
                        Featured
                    </h4>
                    <div className="card-body">
                        <h5 className="card-title">Article 6</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div className="card-footer text-body-secondary">
                        Last updated 6 mins ago
                    </div>
                </div>
            </article>
        </section>
    </main>
}
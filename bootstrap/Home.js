import React from 'react';
import essaouira from './img/essaouira-morocco.jpg';
import trabant from './img/green-trabant.jpg';
import neom from './img/neom.jpg';

export default function Home() {
    return <>
        <main className="container my-5 overflow-hidden">
            <section className="row my-5">
                <article className='col-md-5 text-md-center mx-auto'>
                    <h1 className='mb-3 text-center'>Home</h1>
                    <p className='lead fs-4'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium repellat aut facere ducimus rem magni, consequuntur, exercitationem suscipit temporibus, corporis dolor obcaecati ea quam blanditiis minima architecto eum. Aut, deserunt?
                    </p>
                </article>
            </section>
            <section className="row my-5">
                <article className='col-12 col-xxl-8 order-1 order-xxl-0'>
                    <div id="carouselExampleInterval" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner" style={{ height: "36rem" }}>
                            <div className="carousel-item active" data-bs-interval="5000">
                                <img src={essaouira} className="d-block w-100" alt="Essaouira, Morocco" />
                            </div>
                            <div className="carousel-item" data-bs-interval="5000">
                                <img src={trabant} className="d-block w-100" alt="Green Trabant" style={{ height: "36rem" }} />
                            </div>
                            <div className="carousel-item" data-bs-interval="5000">
                                <img src={neom} className="d-block w-100" alt="Neom, Sauid-Arabia" />
                            </div>
                        </div>
                    </div>
                </article>
                <article className='col-12 col-xxl-4 ps-xxl-4 order-0 order-xxl-1 mb-5 mb-xxl-0'>
                    <h2>Lorem 1</h2>
                    <p className='fs-5'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente et dolores quia molestiae atque molestias non dignissimos cumque suscipit maiores maxime numquam fugit mollitia consectetur amet aliquid est, ad deleniti dolorum animi odit quae. Illum consectetur exercitationem doloremque!
                    </p>
                    <h2>Lorem 2</h2>
                    <p className='fs-4'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente et dolores quia molestiae atque molestias non dignissimos cumque suscipit maiores maxime numquam fugit mollitia consectetur amet aliquid est, ad deleniti dolorum animi odit.
                    </p>
                </article>
            </section>
            <section className="row row-cols-1 row-cols-md-3 my-5">
                <article className='col mb-5 mb-md-0'>
                    <h2>Blockquote</h2>
                    <figure>
                        <blockquote className="blockquote">
                            <p>A well-known quote, contained in a blockquote element.</p>
                        </blockquote>
                        <figcaption className="blockquote-footer mt-2">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </figcaption>
                    </figure>
                </article>
                <article className='col mb-5 mb-md-0'>
                    <h2>Info 1</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sed nam similique obcaecati sit cum consequatur sunt saepe possimus voluptatibus, illum at? Qui magnam quos officiis voluptatibus. Perspiciatis, magni sint.
                    </p>
                </article>
                <article className='col mb-5 mb-md-0'>
                    <h2>Info 2</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci repellendus temporibus consequuntur consequatur vero, delectus tempore, nisi eveniet quasi veniam aspernatur ducimus quis optio sit exercitationem tenetur doloribus maxime at aperiam.
                    </p>
                </article>
            </section>
            <section className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 my-5">
                <article className='col text-center mb-5 mb-lg-0'>
                    <div className="card text-center h-100">
                        <h3 className="card-header text-bg-dark">
                            Featured
                        </h3>
                        <div className="card-body">
                            <h4 className="card-title">
                                Lorem 3
                            </h4>
                            <p className="card-text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, placeat.
                            </p>
                        </div>
                        <div className="card-footer text-body-secondary">
                            Lorem Footer
                        </div>
                    </div>
                </article>
                <article className='col text-center mb-5 mb-lg-0'>
                    <div className="card text-center h-100">
                        <h3 className="card-header text-bg-dark">
                            Featured
                        </h3>
                        <div className="card-body">
                            <h4 className="card-title">
                                Lorem 4
                            </h4>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, maiores?
                            </p>
                        </div>
                        <div className="card-footer text-body-secondary">
                            Lorem Footer
                        </div>
                    </div>
                </article>
                <article className='col text-center mb-5 mb-sm-0'>
                    <div className="card text-center h-100">
                        <h3 className="card-header text-bg-dark">
                            Featured
                        </h3>
                        <div className="card-body">
                            <h4 className="card-title">
                                Lorem 5
                            </h4>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, veniam.
                            </p>
                        </div>
                        <div className="card-footer text-body-secondary">
                            Lorem Footer
                        </div>
                    </div>
                </article>
                <article className='col text-center'>
                    <div className="card text-center h-100">
                        <h3 className="card-header text-bg-dark">
                            Featured
                        </h3>
                        <div className="card-body">
                            <h4 className="card-title">
                                Lorem 6
                            </h4>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, beatae.
                            </p>
                        </div>
                        <div className="card-footer text-body-secondary">
                            Lorem Footer
                        </div>
                    </div>
                </article>
            </section>
        </main>
    </>
}
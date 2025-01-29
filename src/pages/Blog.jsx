


import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_URL, BRAND } from '../utils/api';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import DOMPurify from 'dompurify'
import parse from 'html-react-parser'


const BlogPage = () => {
    const { slug } = useParams()

    const navigate = useNavigate()

    const [blog, setBlog] = useState({})

    useEffect(() => {
        axios.get(`${API_URL}/blog/${slug}`)
            .then(r => r.data)
            .then(response => setBlog(response.blog))
            .catch(reason => {
                if (reason.status === 404)
                    navigate('/404', {
                        state: {
                            message: 'Blog not found!'
                        }
                    })
            })
    }, [slug])

    return (
        <div className="blog-page">
            <Helmet>
            {parse(blog?.meta_tags ?? '')}
            </Helmet>

            <Header />

            <section className="blog-section my-5">
                <div className="container">
                    <img src={blog?.image_url} alt={blog?.title} className="img-fluid d-block mx-auto mb-4" />

                    <h1 className="gray-font fw-semibold text-center mb-5">{blog?.title}</h1>

                    <div className="row g-2 align-items-center justify-content-between mb-3">
                        <div className="col-md-auto">
                            <div className="d-flex gap-3 align-items-center">
                                <h6 className="gray-font fw-bold m-0">Category:</h6>
                                <div className="badge rounded-pill bg-green px-3 py-2">{blog?.category?.name}</div>
                            </div>
                        </div>
                        <div className="col-md-auto">
                            <div className="d-flex gap-3 align-items-center">
                                <h6 className="gray-font fw-bold m-0">Tag(s):</h6>
                                <div>
                                    <div className="d-flex flex-wrap gap-2 align-items-center ">
                                    {blog?.tags?.map((tag, index) => (
                                            <div className="badge rounded-pill bg-green px-3 py-2" key={index}>{tag.name}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="gray-font">
                        {parse(DOMPurify.sanitize(blog.content))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}


export default BlogPage

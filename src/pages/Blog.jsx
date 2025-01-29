


import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_URL, BRAND } from '../utils/api';
import { Link } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

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
                <title>Blog - AMZ Book Publishing</title>
                <link rel="canonical" href="https://amzbookpublishing.net/blogs" />
                <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Blogs - AMZ Book Publishing" />              
                <meta property="og:description" content="Explore content creation tips for agencies, SEO best practices, and guides for freelance writers." />
                <meta property="og:url" content="https://amzbookpublishing.net/blogs" />
                <meta property="og:site_name" content="AMZBookPublishing" />
                <meta property="article:publisher" content="https://www.facebook.com/AmzBookPublishingUS" />
                <meta property="article:modified_time" content="2024-08-20T07:39:16+00:00" />
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

                    <p className="gray-font fw-light">{blog?.content}</p>
                </div>
            </section>

            <Footer />
        </div>
    )
}


export default BlogPage

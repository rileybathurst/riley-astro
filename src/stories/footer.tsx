// this is the Footer.tsx file
import React from 'react';

export const Footer = () => {

    return (
        <footer className="site-footer">
            <div className="footer_info">
                <div className="footer_copyright">
                    <ul>
                        <li>
                            <a href="/" rel="home">Home</a>
                        </li>
                        <li>
                            2009 - {new Date().getFullYear()}
                        </li>
                        <li>
                            <a href="/now">Now</a>
                        </li>
                    </ul>
                </div>{/* .footer_copyright */}

                <nav id="bottom-menu" className="">
                    <ul>
                        {/* // TODO need to build search */}
                        {/* <li key="search"><Link to='/search'>Search</Link></li> */}
                        <li><a href="/project">Projects</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li>
                            <a href="/styleguide">Styleguides</a>
                        </li>
                        {
                            /* I can do something more interesting with this as a show whats available maybe an accordian or work in with what I already have */
                        }
                    </ul>
                </nav>

                {/* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address */}
                <address className="footer_contact">
                    {/* // TODO: add some more details to this ie subject */}
                    <p>
                        <a href={`mailto:email`}>
                            email
                        </a>
                    </p>
                    <p>
                        530 386 6296
                    </p>
                </address>
            </div>

            <div className="background-primary background-primary__social-icons">
                <div className="social-icons">
                    <div className="fp-box">
                        <a href={`https://www.instagram.com/`}>
                            {/* <Instagram /> */}
                        </a>
                    </div>
                    <div className="fp-box">
                        <a href={`https://www.linkedin.com/`}>
                            {/* <LinkedIn /> */}
                        </a>
                    </div>
                    {/* // TODO: add a link to /rss.xml */}
                    <div>

                    </div>
                    <div className="fp-box">
                        <a href={`https://github.com/`}>
                            {/* <GitHub /> */}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
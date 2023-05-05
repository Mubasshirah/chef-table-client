import React from 'react';
import Header from '../shared/Header/Header';

import Blogs from '../Pages/blogs/Blogs';
import Footer from '../shared/Footer/Footer';

const BlogLayout = () => {
    return (
        <div className='mt-5' style={{backgroundImage:'url("https://img.freepik.com/free-vector/abstract-white-bokeh-glowing-lights-background_1017-24049.jpg")',backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat' }}>
            <Header></Header>
           <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default BlogLayout;
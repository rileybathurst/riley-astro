// basic layout of all parts of the site
// controls max width and columns

import React from 'react';

export const Gutters = () => {

return (
<section className='gutters'>

    <div className='fore'
        style={{ backgroundColor: 'lightgray' }}
    >
        Fore
    </div>

    <article className='cover'
        style={{ backgroundColor: 'peachpuff' }}
    >
        Gutters
    </article>

    <div className='spine'
        style={{ backgroundColor: 'lightgray' }}
    >
        Spine
    </div>
</section>
);
};
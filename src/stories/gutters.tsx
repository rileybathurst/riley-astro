// basic layout of all parts of the site
// controls max width and columns

import React from 'react';

export const Gutters = () => {

  return (
    <React.Fragment>
      <h1>.Gutters</h1>
      <section className='gutters'>

        <div
          className='fore denali'
          style={{ backgroundColor: 'lightgray' }}
        >
          Fore
        </div>

        <article
          className='cover'
          style={{ backgroundColor: 'peachpuff' }}
        >
          Cover Full
        </article>

        <div
          className='spine'
          style={{ backgroundColor: 'lightgray' }}
        >
          Spine
        </div>
      </section>

      <hr />

      <section className='gutters'>

        <div
          className='fore denali'
          style={{ backgroundColor: 'lightgray' }}
        >
          Fore
        </div>

        <article
          className='cover split'
        >
          <div
            style={{ backgroundColor: 'peachpuff' }}
          >
            Cover split
          </div>
          <div
            style={{ backgroundColor: 'coral' }}
          >
            Cover split
          </div>
        </article>

        <div
          className='spine'
          style={{ backgroundColor: 'lightgray' }}
        >
          Spine
        </div>
      </section>
    </React.Fragment>
  );
};
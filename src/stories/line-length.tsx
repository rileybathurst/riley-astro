// this is the LineLength.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';

export const LineLength = () => {

return (
    <>

<section className='gutters'>
    <div className='fore'
        style={{ backgroundColor: 'lightgray' }}
    >
        Fore
    </div>

    <div className='cover condor'
        style={{ backgroundColor: 'peachpuff' }}
    >
        {/* * nice line length */}
        <div 
            className='condor'
            style={{ backgroundColor: 'coral' }}
        >
        Line Length {faker.lorem.paragraph()}
        </div>
    </div>

    <div className='spine'
        style={{ backgroundColor: 'lightgray' }}
    >
        Spine
    </div>

</section>

<hr />

<section className='gutters gutter-spread'>
    <div 
        className='fore'
        style={{ backgroundColor: 'lightgray' }}
    >
        Fore
    </div>

        <div 
            className='one condor'
            style={{ backgroundColor: 'coral', 
                gridColumn: 2,
                // placeSelf: 'end'
            }}
        >
        Line Length {faker.lorem.paragraph()}
        </div>
        <div 
            className='two condor'
            style={{ backgroundColor: 'coral', 
                gridColumn: 3,
                // placeSelf: 'start'

            }}
        >
        Line Length {faker.lorem.paragraph()}
        </div>

    <div className='spine'
        style={{ backgroundColor: 'lightgray' }}
    >
        Spine
    </div>

</section>
</>
);
};
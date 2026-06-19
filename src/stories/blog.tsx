// this is the Name.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';

interface BlogProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Blog = ({
  primary = false,
  ...props
}: BlogProps) => {

  return (
    // <Layout title="Now">
    <main className="gutters">
      <h1 className="fore">Now</h1>

      <section className="cover">
        {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map(() => (
          <div key={faker.string.uuid()} className="split">
            <article >
              {faker.lorem.paragraphs({ min: 1, max: 5 }).split("\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <hr />
            </article>
            <div >
              {/* // TODO: */}
              now.image
            </div>
          </div>
        ))}
      </section>
    </main >
    // </Layout>
  );
};
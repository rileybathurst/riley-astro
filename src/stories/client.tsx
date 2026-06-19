// this is the Page.tsx file
import { Footer } from './footer';
import { Header } from './header';
import { faker } from '@faker-js/faker';

export const Client = () => {

    return (
        <>
            <Header />
            <div className='gutters'>
                <main
                    className='cover container'
                >
                    <h1 className="upright">Clients</h1>
                    <section>
                        <ul>
                            {Array.from({ length: 10 }).map(() => (
                                <li>
                                    <a href={faker.internet.url()}>
                                        {faker.company.name()}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>
                </main>
            </div >
            <Footer />
        </>
    );
}



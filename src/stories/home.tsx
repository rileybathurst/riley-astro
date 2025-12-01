// this is the Page.tsx file
import { Footer } from './footer';
import { Header } from './header';

export const Home = () => {

    return (
        <>
            <Header />
            <div className='gutters'>
                <main
                    className='cover'
                >
                    Home

                    <h2>Clients</h2>

                    <h3><a href="https://www.palisadestahoe.com">Palisades Tahoe</a></h3>
                    <h3><a href="https://www.monsterenergy.com">Monster Energy</a></h3>

                    <hr />

                    <h2>Portfolio</h2>
                    <h3><a href="/Web">Web</a></h3>
                    <h3><a href="/Video">Video</a></h3>
                    <h3><a href="/Photo">Photo</a></h3>
                </main>
            </div>
            <Footer />
        </>
    );
}



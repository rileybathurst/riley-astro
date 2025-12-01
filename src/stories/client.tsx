// this is the Page.tsx file
import { Footer } from './footer';
import { Header } from './header';

export const Client = () => {

    return (
        <>
            <Header />
            <div className='gutters'>
                <main
                    className='cover'
                    style={{
                        backgroundColor: 'blue'
                    }}
                >
                    test
                </main>
            </div>
            <Footer />
        </>
    );
}



import useIsDesktop from '../hooks/useIsDesktop';
import logo from '../assets/Logo.png'
export default function Home() {
    const isDesktop = useIsDesktop()
    return (
        <>
            <section id='hero' className='align-content-center'
                style={{
                    height: '100vh',

                }}>
                <div className='ms-lg-5'
                    style={{
                        paddingLeft: isDesktop ? '' : "20px"
                    }}>
                    <h1 className="text-light poppins"
                        style={{
                            maxWidth: "500px"
                        }}>
                        Allier le génie logiciel à la créativité des jeux indépendants.
                    </h1>
                    <span className="text-light text-decoration-underline raleway">EXPLORE MY UNIVERSE</span>
                </div>
            </section>
            <section id='hero' className='align-content-center bg-red'
                style={{
                    height: '100vh'
                }}>
                <div className='ms-lg-5'>
                    <h1 className="text-light poppins"
                        style={{
                            maxWidth: "300px"
                        }}>
                        We empower brands to inspire people
                    </h1>
                    <span className="text-light text-decoration-underline raleway">EXPLORE OUR UNIVERSE</span>
                </div>
            </section>
            <section id='hero' className='align-content-center section-trigger bg-yellow2'
                style={{
                    height: '100vh'
                }}>
                <div className='ms-lg-5'>
                    <h1 className="text-light poppins"
                        style={{
                            maxWidth: "300px"
                        }}>
                        We empower brands to inspire people
                    </h1>
                    <span className="text-light text-decoration-underline raleway">EXPLORE OUR UNIVERSE</span>
                </div>
            </section>
        </>
    )
}
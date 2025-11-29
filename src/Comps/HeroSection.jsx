import useIsDesktop from '../hooks/useIsDesktop'; 
import MiniTitleWithBar from '../Comps/MiniTitleWithBar'
export default function HeroSection({contentMiniBar, firstTitle, secondTitle}) {
    const isDesktop = useIsDesktop(); 
    return (
        <>
            <section id='hero' className='align-content-center'
                style={{
                    height: '100vh'
                }}>
                <div className='d-flex flex-column justify-content-between gap-5'
                    style={{
                        height: '100%',
                        padding: isDesktop ? "10rem 5rem" : "4rem 20px"
                    }}>
                    <div>
                        <div className='position-relative ps-0 mb-3 text-light'>
                            <MiniTitleWithBar content={contentMiniBar} />
                        </div>
                        <h1 className="text-light poppins align-self-start"
                            style={{
                                maxWidth: "400px"
                            }}>

                            {firstTitle}
                        </h1>
                    </div>

                    <h1 className="text-light poppins align-self-end"
                        style={{
                            maxWidth: "400px"
                        }}>
                        {secondTitle}
                    </h1>
                </div>

            </section>
        </>
    )
}
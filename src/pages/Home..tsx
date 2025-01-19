import pic from "../assets/react.svg"
export function Home(){
    return(
        <>
            <section id="home">
                <div id="carouselExampleIndicators" className="relative w-full">

                    <div className="relative overflow-hidden">
                        <h1>Home Page</h1>
                        <img src={pic} className="block w-full"/>
                    </div>

                </div>
            </section>
        </>
    )
}

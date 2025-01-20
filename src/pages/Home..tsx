import HomePic from "../assets/city super home.jpg";

export function Home() {
    return (
        <>
            <section id="home" className="ml-64"> {/* Add margin to accommodate the navbar width */}

                        <img
                            src={HomePic}
                            className="w-[1500px] h-[600px] "
                            alt="City Super Home"
                        />


            </section>
        </>
    );
}

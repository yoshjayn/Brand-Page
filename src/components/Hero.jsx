const Hero = () =>{
    return (
        <main className="hero container">
            <div className="hero-cont">
                <h1>Your Feet Deserves The Best</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, nisi nobis. Vitae ut nulla, rem id, laudantium deleniti vero tenetur veniam rerum assumenda a quae.
                </p>
            <div className="hero-click">
            <button>Shop Now</button>
            <button>Category</button>
            </div>
            <div className="shopping">
                {/* <p>Also Available On</p> */}
            <div className="icons">
                <img src="/images/shop.png" alt="whole image"></img>
            </div>
            </div>
            </div>
            <div className="hero-image">
            <img src="/images/shoe_image.png" alt="shoe image"></img>
            </div>
        </main>
    )
}
export default Hero;
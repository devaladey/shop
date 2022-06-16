function CallToAction() {
    return ( 
        <>
            <section className="calltoaction">
                <div className="calltoaction-inner">
                    <h2>Do you need more tips?</h2>
                    <p>Sign up free and get the latest tips.</p>
                    <form>
                        <input type="email" placeholder="Your Email" />
                        <button>Yes i want</button>
                    </form>
                </div>
            </section>
            <section className="calltoaction-contact">
                <div className="card">
                    <span className="icon"></span>
                    <h3>Call Us 24x7</h3>
                    <p>09012714169</p>
                </div>
                <div className="card">
                    <span className="icon"></span>
                    <h3>Headquater</h3>
                    <p>idera street surulere</p>
                </div>
                <div className="card">
                    <span className="icon"></span>
                    <h3>Fax</h3>
                    <p>07085643233</p>
                </div>
            </section>
        </>
     );
}

export default CallToAction;


const Home = () => {

    const handleClick = () => {

    }
    let today = new Date().toLocaleDateString('en-us', { weekday:"long"});

    return ( 
        <div className="Home">
            <h2>Homepage</h2>
                <br/>
                <p>
                    Welcome to my homepage on this fine {today}!
                </p>
                <br/>
                <p>
                    I am using this webpage to learn react.
                </p>
                <br/>
                <p>
                    Plan is for the POEMS page to fetch a random poem and picture of the poet from some cloud storage and display on the page.
                </p>
        </div>
     );
}
 
export default Home;
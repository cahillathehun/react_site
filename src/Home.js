

const Home = () => {

    const handleClick = () => {

    }
    let today = new Date().toLocaleDateString('en-us', { weekday:"long"});

    return ( 
        <div className="Home">
            <h2>Homepage</h2>
                <br/>
                <p>
                    Welcome to my page on this fine {today} morning/afternoon/evening!
                </p>
                <br/>
                <p>
                    I am using this webpage to learn react and arse about with hosting on Firebase and gitworkflows/ ops mgmt etc.
                </p>
                <br/>
                <p>
                    You can get in contact with me using via the LinkedIn link in the top corner there.
                </p>
                <br/>
                
                <p>
                    Plan is for the POEMS page to fetch a random poem and picture of the poet from some cloud storage and display on the page.
                </p>
        </div>
     );
}
 
export default Home;
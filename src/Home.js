
const Home = () => {
    let today = new Date().toLocaleDateString('en-us', { weekday:"long"});
    return (
        <div className="Home">
            <h2>Homepage</h2>
                <br/>
                <p>
                    Welcome to my page on this {today} morning/afternoon/evening!
                </p>
                <br/>
                <p>
                    I am using this webpage to learn react and arse about with hosting on Firebase and gitworkflows/ ops mgmt etc.
                </p>
                <br/>
                <p>
                    You can get in contact with me using via the LinkedIn link in the top right corner there.
                </p>
                <br/>
                <p>
                    The source code for this site is on my GitHub, also in the top right hand corner. Made using react and hosted on Firebase. App is redeployed every time there is a push to main or PR to main.
                </p>
                <br/>
        </div>
     );
}
export default Home;

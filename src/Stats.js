import * as d3 from "d3";

function getData() {
  return d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/2014_apple_stock.csv");
}
function Stats() {
  var csv_file = getData()
  console.log(csv_file);


    return (

    <div className="Stats">
        <h2>STATS</h2>
            <div className="statsContent">
                <br/>


                <p>Below is where graphs showing different stats about Entry Level jobs that require a certain number of years experience</p>


            </div>
    </div>
  );
}

export default Stats;

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


            </div>
    </div>
  );
}

export default Stats;

import { useState } from "react";

const {Storage} = require('@google-cloud/storage');

const bucketName = 'cloud-samples-data';
const fileName = 'bigquery/us-states/us-states.csv';
const destFileName = './'

async function downloadFile() {
  const options = {
    destination: destFileName,
  };
await storage.bucket().file(fileName).download(options);

console.log(`gs://${bucketName}/${fileName} downloaded to ${destFileName}.`);
}

function Stats() {

  const storage_client = new Storage({
    projectId: 'react-site-project'
  })


    return (

    <div className="Stats">
        <h2>STATS</h2>
            <div className="poemContent">
                <br/>


                <p>Below is where graphs showing different stats about Entry Level jobs that require a certain number of years experience</p>


            </div>
    </div>
  );
}

export default Poems;

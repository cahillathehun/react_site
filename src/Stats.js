import { useState } from "react";

const {Storage} = require('@google-cloud/storage');

const bucketName = 'latest-csv';
const fileName = 'sample.csv';
const destFileName = './mycsv.csv'

async function downloadFile() {
  const storage_client = new Storage({
    projectId: 'react-site-project'
  })
  const options = {
    destination: destFileName,
  };
await storage.bucket().file(fileName).download(options);

console.log(`gs://${bucketName}/${fileName} downloaded to ${destFileName}.`);
}

function Stats() {

  downloadFile()


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

export default Stats;

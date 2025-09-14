//     //     import Papa from 'papaparse';
//     // import React, { useEffect, useState } from 'react';

//     //     function LeftFrame() {
//     //     const [disasters, setDisasters] = useState([]);

//     //     // Parse the CSV file and load the data
//     //     useEffect(() => {
//     //         Papa.parse('/tweets_data.csv', {
//     //         download: true,
//     //         header: true,
//     //         complete: (result) => {
//     //             // Sort the disaster data by date in descending order
//     //             const sortedData = result.data.sort((a, b) => new Date(a.date) - new Date(b.date));
//     //             setDisasters(sortedData); // Set sorted data in state
//     //         },
//     //         });
//     //     }, []);

//     //     return (
//     //         <div className="left-frame">
//     //         <h2>Disaster Tweets (Latest First)</h2>
//     //         <div id="disaster-data">
//     //             {/* Iterate over sorted disaster data and display it */}
//     //             {disasters.map((disaster, index) => (
//     //             <div key={index} className="disaster-item">
//     //                 <strong>Tweet:</strong> {disaster['tweet']} <br />
//     //                 <strong>Location:</strong> {disaster['location']} <br />
//     //                 <strong>Date:</strong> {disaster['date']} <br />
//     //                 <strong>Urgency:</strong> {disaster['urgency']} <br />
//     //                 <hr />
//     //             </div>
//     //             ))}
//     //         </div>
//     //         </div>
//     //     );
//     //     }

//     //     export default LeftFrame;



    import Papa from 'papaparse';
import React, { useEffect, useState } from 'react';

    function LeftFrame() {
    const [disasters, setDisasters] = useState([]);

    // Parse the CSV file and load the data
    useEffect(() => {
        Papa.parse('/tweets_data.csv', {
        download: true,
        header: true,
        complete: (result) => {
            // Sort the disaster data by date in descending order
            const sortedData = result.data.sort((a, b) => new Date(b.date) - new Date(a.date));
            setDisasters(sortedData); // Set sorted data in state
        },
        });
    }, []);

    return (
        <div className="left-frame">
        <h2>Disaster Tweets</h2>
        <div id="disaster-data">
            {/* Iterate over sorted disaster data and display it */}
            {disasters.map((disaster, index) => (
            <div key={index} className="disaster-item">
                <strong>Tweet:</strong> {disaster['tweet']} <br />
                <strong>Location:</strong> {disaster['location']} <br />
                <strong>Date:</strong> {disaster['date']} <br />
                <strong>Urgency:</strong> {disaster['urgency']} <br />
                <strong>Disaster:</strong> {disaster['disaster']} <br/>
                <hr />
            </div>
            ))}
        </div>
        </div>
    );
    }

    export default LeftFrame;


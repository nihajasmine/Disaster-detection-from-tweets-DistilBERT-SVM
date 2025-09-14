    // // import React from 'react';

    // // function RightFrame() {
    // // return (
    // //     <div className="right-frame">
    // //     <div className="upper-right">
    // //         <h2>Disaster Visualization</h2>
    // //         <iframe
    // //         src="https://public.tableau.com/views/Book1_17457706806660/Sheet1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
    // //         width="100%"
    // //         height="100%"  // This should take up the entire height of the right frame
    // //         frameBorder="0"
    // //         title="Tableau Visualization"
    // //         ></iframe>
    // //     </div>
        
    // //     <div className="lower-right">
    // //         <h2>Additional Information</h2>
    // //         {/* This section can display extra content related to disasters */}
    // //         <p>This section can later display any extra information related to the disasters.</p>
    // //     </div>
    // //     </div>
    // // );
    // // }

    // // export default RightFrame;


    // import React from 'react';

    // function RightFrame() {
    // return (
    //     <div className="right-frame">
    //     <div className="upper-right">
    //         <h2>Disaster Visualization</h2>
    //         <iframe
    //         src="https://public.tableau.com/views/Book1_17457706806660/Sheet1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
    //         width="100%"
    //         height="100%"  // Ensuring the iframe occupies the full height of the right frame
    //         frameBorder="0"
    //         title="Tableau Visualization"
    //         ></iframe>
            
    //     </div>
        
    //     <div className="lower-right">
    //         <h2>Additional Information</h2>
    //         <p>This section can later display any extra information related to the disasters.</p>
    //     </div>
    //     </div>
    // );
    // }

    // export default RightFrame;


//     import React, { useEffect } from 'react';

// function RightFrame() {
//     useEffect(() => {
//         // Initialize the Tableau embed script when the component mounts
//         const script = document.createElement('script');
//         script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
//         script.async = true;
//         document.body.appendChild(script);

//         script.onload = () => {
//         const divElement = document.getElementById('viz1745771324945');
//         const vizElement = divElement.getElementsByTagName('object')[0];
//         vizElement.style.width = '100%';
//         vizElement.style.height = `${divElement.offsetWidth * 0.75}px`;
//         };

//         return () => {
//         // Cleanup the script when component unmounts
//         document.body.removeChild(script);
//         };
//     }, []);

//     return (
//         <div className="right-frame">
//         <div className="upper-right">
//             <h2>Disaster Visualization</h2>
//             {/* Tableau Placeholder */}
//             <div
//             className="tableauPlaceholder"
//             id="viz1745771324945"
//             style={{ position: 'relative', width: '100%' }}
//             >
//             <noscript>
//                 <a href="#">
//                 <img
//                     alt="Sheet 1"
//                     src="https://public.tableau.com/static/images/Bo/Book1_17457706806660/Sheet1/1_rss.png"
//                     style={{ border: 'none' }}
//                 />
//                 </a>
//             </noscript>
//             <object className="tableauViz" style={{ display: 'none' }}>
//                 <param name="host_url" value="https://public.tableau.com/" />
//                 <param name="embed_code_version" value="3" />
//                 <param name="site_root" value="" />
//                 <param name="name" value="Book1_17457706806660/Sheet1" />
//                 <param name="tabs" value="no" />
//                 <param name="toolbar" value="yes" />
//                 <param name="static_image" value="https://public.tableau.com/static/images/Bo/Book1_17457706806660/Sheet1/1.png" />
//                 <param name="animate_transition" value="yes" />
//                 <param name="display_static_image" value="yes" />
//                 <param name="display_spinner" value="yes" />
//                 <param name="display_overlay" value="yes" />
//                 <param name="display_count" value="yes" />
//                 <param name="language" value="en-US" />
//                 <param name="filter" value="publish=yes" />
//             </object>
//             </div>
//         </div>
//         </div>
//     );
//     }

//     export default RightFrame;


import React, { useEffect } from 'react';

function RightFrame() {
    useEffect(() => {
        // Initialize the Tableau embed script when the component mounts
        const script = document.createElement('script');
        script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
        const divElement = document.getElementById('viz1745771324945');
        const vizElement = divElement.getElementsByTagName('object')[0];
        // Set the width to 100% and adjust height to be more appropriate
        vizElement.style.width = '100%';
        vizElement.style.height = '500px'; // Increased the height for a larger view
        };

        return () => {
        // Cleanup the script when component unmounts
        document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="right-frame">
        <div className="upper-right">
            <h2>Density Map</h2>
            {/* Tableau Placeholder */}
            <div
            className="tableauPlaceholder"
            id="viz1745771324945"
            style={{ position: 'relative', width: '100%', height: '500px' }} // Adjust the height here too
            >
            <noscript>
                <a href="#">
                <img
                    alt="Sheet 1"
                    src="https://public.tableau.com/static/images/Bo/Book1_17457706806660/Sheet1/1_rss.png"
                    style={{ border: 'none' }}
                />
                </a>
            </noscript>
            <object className="tableauViz" style={{ display: 'none', width: '100%', height: '500px' }}>
                <param name="host_url" value="https://public.tableau.com/" />
                <param name="embed_code_version" value="3" />
                <param name="site_root" value="" />
                <param name="name" value="Book1_17457706806660/Sheet1" />
                <param name="tabs" value="no" />
                <param name="toolbar" value="yes" />
                <param name="static_image" value="https://public.tableau.com/static/images/Bo/Book1_17457706806660/Sheet1/1.png" />
                <param name="animate_transition" value="yes" />
                <param name="display_static_image" value="yes" />
                <param name="display_spinner" value="yes" />
                <param name="display_overlay" value="yes" />
                <param name="display_count" value="yes" />
                <param name="language" value="en-US" />
                <param name="filter" value="publish=yes" />
            </object>
            </div>
        </div>
        </div>
    );
    }

    export default RightFrame;

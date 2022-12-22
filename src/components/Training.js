import React from 'react';

const Training = () => {
    return (
        <div className='w-75 mx-auto my-5'>
            <h2 className="fs-1 fw-bold  text-center text-primary">Watch our videos</h2>
            <div className="row mx-auto">
                <iframe className="p-4 col-lg-6 col-12" width="25%" height="360" src="https://www.youtube.com/embed/TNsyyvCizhU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className="p-4 col-lg-6 col-12" width="25%" height="360" src="https://www.youtube.com/embed/qF1Xu2ImGC4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </div>
        </div>
    );
};

export default Training;
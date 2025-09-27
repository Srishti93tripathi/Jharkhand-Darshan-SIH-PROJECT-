import React, { useRef, useEffect } from 'react';

const Video = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!videoRef.current) return;

            const video = videoRef.current;
            const rect = video.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate visible height
            const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
            const videoHeight = rect.height;

            // If at least 50% of video is visible → unmute, else mute
            if (visibleHeight > videoHeight / 2) {
                video.muted = false;
                video.play();
            } else {
                video.muted = true;
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="video-container">
            {/* Background Video */}
            <video ref={videoRef} autoPlay loop muted playsInline className="bg-video">
                <source src="../../video/jharkhand.mp4" type="video/mp4" />
            </video>

            {/* Overlay Content */}
            <div className="overlay d-flex align-items-center justify-content-center text-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8 col-sm-10 col-12 text-white">
                            <h1 className="mb-3">Explore the Jharkhand</h1>
                            <p className="mb-4">Find the best destinations with just one click.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;

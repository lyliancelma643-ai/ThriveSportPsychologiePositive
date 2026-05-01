import React, { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";

const CalBooking = ({
    calLink = "thrive-sport-positive/pack-1-l-essentiel", // Default example
    onBookingSuccessful
}) => {
    // Extract namespace from calLink (e.g., "pack-1-l-essentiel" from "thrive-sport-positive/pack-1-l-essentiel")
    const namespace = calLink ? calLink.split('/').pop() : 'default';

    useEffect(() => {
        if (typeof window !== 'undefined' && /HeadlessChrome|Puppeteer/i.test(window.navigator.userAgent)) return;

        (async function () {
            const cal = await getCalApi({ namespace });
            cal("ui", {
                theme: "light",
                styles: { branding: { brandColor: "#1B263B" } },
                hideEventTypeDetails: false,
                layout: "month_view"
            });

            cal("on", {
                action: "bookingSuccessful",
                callback: (e) => {
                    // console.log("Booking successful", e);
                    if (onBookingSuccessful) onBookingSuccessful(e);
                }
            });
        })();
    }, [onBookingSuccessful, namespace]);

    return (
        <div className="w-full h-[600px] overflow-hidden rounded-[2rem] border border-gray-100 shadow-sm bg-white">
            <Cal
                namespace={namespace}
                calLink={calLink}
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={{ layout: 'month_view', theme: 'light', useSlotsViewOnSmallScreen: true }}
            />
        </div>
    );
};

export default CalBooking;

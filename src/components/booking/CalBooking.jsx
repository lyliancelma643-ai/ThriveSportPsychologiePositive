import React, { useEffect, useRef } from 'react';

const CalBooking = ({
    calLink = "thrive-sport-positive/pack-1-l-essentiel", // Default example
    onBookingSuccessful
}) => {
    // Extract namespace from calLink (e.g., "pack-1-l-essentiel" from "thrive-sport-positive/pack-1-l-essentiel")
    const namespace = calLink ? calLink.split('/').pop() : 'default';
    const containerId = `my-cal-inline-${namespace}`;
    const scriptInjectedRef = useRef(false);

    useEffect(() => {
        if (typeof window !== 'undefined' && /HeadlessChrome|Puppeteer/i.test(window.navigator.userAgent)) return;
        
        if (scriptInjectedRef.current) return;
        scriptInjectedRef.current = true;

        // Injecting the raw Cal.com script logic exactly as requested
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.innerHTML = `
            (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
            Cal("init", "${namespace}", {origin:"https://app.cal.com"});

            Cal.ns["${namespace}"]("inline", {
                elementOrSelector: "#${containerId}",
                config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
                calLink: "${calLink}",
            });

            Cal.ns["${namespace}"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
        `;
        document.body.appendChild(script);

        // Ensure we still trigger the payment step on success
        const checkCalAndAddListener = setInterval(() => {
            if (window.Cal && window.Cal.ns && window.Cal.ns[namespace]) {
                window.Cal.ns[namespace]("on", {
                    action: "bookingSuccessful",
                    callback: (e) => {
                        if (onBookingSuccessful) onBookingSuccessful(e);
                    }
                });
                clearInterval(checkCalAndAddListener);
            }
        }, 500);

        return () => {
            clearInterval(checkCalAndAddListener);
            if (script.parentNode) script.parentNode.removeChild(script);
        };
    }, [namespace, calLink, containerId, onBookingSuccessful]);

    return (
        <div className="w-full h-[600px] overflow-hidden rounded-[2rem] border border-gray-100 shadow-sm bg-white">
            <div style={{ width: "100%", height: "100%", overflow: "scroll" }} id={containerId}></div>
        </div>
    );
};

export default CalBooking;

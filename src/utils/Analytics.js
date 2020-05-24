export default class Analytics {

    static shouldSendAnalyticsEvents = () => process.env.NODE_ENV === "production"

    static init = () => {
        //  Global site tag (gtag.js) - Google Analytics 

        if (this.shouldSendAnalyticsEvents() && !window["dataLayer"]) {
            const script = document.createElement('script');
            script.src = 'https://www.googletagmanager.com/gtag/js?id=G-FG51BK6SF0';
            script.async = true;
            script.onload = function () {
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                    window.dataLayer.push(arguments);
                }
                gtag('js', new Date());
                gtag('config', 'G-FG51BK6SF0');
            }
            document.body.appendChild(script);
        }
    }



    static track = (...args) => {
        if (this.shouldSendAnalyticsEvents() && window.gtag) {
            window.gtag(...args)
        }
    }
}
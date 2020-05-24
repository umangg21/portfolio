export default class Analytics {
    static shouldSendAnalyticsEvents = () => process.env.NODE_ENV === "production"

    static track = (...args) => {
        if (this.shouldSendAnalyticsEvents() && window.gtag) {
            window.gtag(...args)
        }
    }
}
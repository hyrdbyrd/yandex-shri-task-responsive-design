export const Event = {
    desktop: () => require('./desktop/Event@desktop').Event,
    mobile: () => require('./mobile/Event@mobile').Event
}

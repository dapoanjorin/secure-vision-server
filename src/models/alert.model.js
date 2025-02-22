class Alert {
    constructor(type, description, severity) {
        this.type = type;
        this.description = description;
        this.severity = severity;
        this.timestamp = new Date();
    }
}

module.exports = Alert;

export class ExternalClientNotFoundError extends Error {
    constructor() {
        super('External client not found');
    }
}

export class ExternalClientTimeoutError extends Error {
    constructor() {
        super('External client service timeout');
    }
}

export class ExternalClientUnavailableError extends Error {
    constructor() {
        super('External client service unavailable');
    }
}

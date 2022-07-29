/* eslint-disable no-undef */
export type onEventPayload = {
    eventType: string
    data: any
}

export type FetchOptions = {
    url: string,
    requestOptions: {
        mode: RequestMode | undefined,
        method: string,
        headers: any,
        body: onEventPayload
    };
    successStatusCode: number;
}

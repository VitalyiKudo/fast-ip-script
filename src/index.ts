/* eslint-disable no-return-assign */
// Tools
import { customFetch } from './tools';

// Types
import { onEventPayload } from './types';

export const onEvent = async (payload: onEventPayload) => {
    await customFetch<boolean>({
        successStatusCode: 201,
        url:               `${process.env.API_URL}/events`,
        requestOptions:    {
            mode:    'no-cors',
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: payload,
        },
    });
};

export const onLoad = async () => {
    await fetch('https://ipapi.co/json/')
        .then((res) => res.json())
        .then(async (data) => {
            await fetch('http://localhost:4000/views', {
                method: 'POST',
                body:   JSON.stringify({
                    ip:      data.ip,
                    country: data.country,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        });
};

if (window) {
    window.mScript = {
        onLoad,
        onEvent,
    };
}

window.addEventListener('load', onLoad);

exports.onEvent = onEvent;
exports.onLoad = onLoad;

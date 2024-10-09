import ApiError from './ApiError.ts'

const API_URL = 'https://jsonplaceholder.typicode.com/pikary/api';

type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' ;

interface Config {
    headers?: Record<string, string>;
    signal?: AbortSignal;
    [key: string]: any;
}

interface ApiResponse<ReturnType> {
    data: ReturnType;
    headers: Headers;
    statusCode: number;
}


const baseRequest = async <ReturnType>(
    method: Method,
    url: string,
    body: any = null,
    config: Config = {}
): Promise<ApiResponse<ReturnType> | undefined> => {
    try {
        const req = await fetch(`${API_URL}/${url}`, {
            method,
            body: body ? JSON.stringify(body) : null,
            headers: {
                'Content-Type': 'application/json',
                // Authorization: `Bearer ${localStorage.getItem('access_token') || ''}`,
                ...config.headers,
            },
            signal: config.signal,
            ...config,
        });

        if (!req.ok) {
            const resbody = await req.text();
            throw new ApiError(req.status,resbody)
        }
        const result = await req.json();

        return { data: result, headers: req.headers, statusCode: req.status };
    } catch (e: any) {
        console.error(e);
        throw e;
    }
};

export default baseRequest;
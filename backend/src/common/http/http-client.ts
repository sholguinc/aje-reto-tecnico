export interface HttpClient {
    get<T>(path: string): Promise<T>;
    post<T, B = unknown>(path: string, body: B): Promise<T>;
    put<T, B = unknown>(path: string, body: B): Promise<T>;
    patch<T, B = unknown>(path: string, body: B): Promise<T>;
    delete<T>(path: string): Promise<T>;
}

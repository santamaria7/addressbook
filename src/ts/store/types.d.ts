type Action = {
    type: string;
    payload: Record<string, any> | string | number | boolean | (string | number | boolean)[]
}
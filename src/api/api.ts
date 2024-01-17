async function sendRequest(url: string, method: string, data?: object) {
    const headers = {
        'Content-Type': 'application/json',
        // Outros cabeçalhos, se necessário
    };

    const options: RequestInit = {
        method: method,
        headers: headers,
        body: data ? JSON.stringify(data) : undefined,
    };

    const response = await fetch(`http://localhost:3333${url}`, options);
    const responseData = await response.json();

    if (!response.ok) {
        throw new Error(responseData.message || 'Erro na requisição');
    }

    return responseData;
}

export { sendRequest }
async function sendRequest(url: string, method: string, data?: object) {
    const headers = {
        'Content-Type': 'application/json',
        // Outros cabeçalhos, se necessário
    };

    let endpoint = `http://localhost:3333${url}`;

    // Adicionar ID à URL para métodos DELETE
    if (method === 'DELETE' && data && typeof data === 'string') {
        endpoint += `?id=${data}`;
    }

    const options: RequestInit = {
        method: method,
        headers: headers,
        body: data && method !== 'DELETE' ? JSON.stringify(data) : undefined,
    };

    const response = await fetch(endpoint, options);
    const responseData = await response.json();

    if (!response.ok) {
        throw new Error(responseData.message || 'Erro na requisição');
    }

    return responseData;
}

export { sendRequest };
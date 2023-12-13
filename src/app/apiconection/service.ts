type RequestParams = {
    method: string;
    headers?: HeadersInit;
    body?: BodyInit | null;
  };
  
  type FetchOptions = {
    responseType: 'json' | 'blob';
  };
  
  async function fetchService<T>(
    url: string,
    params: RequestParams,
    options: FetchOptions
  ): Promise<T> {
    try {
      const response = await fetch(url, params);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      return options.responseType === 'json' ? await response.json() : await response.blob();
    } catch (error) {
      console.error('Fetching error:', error);
      throw error;
    }
  }
  
  async function getJsonData<T>(url: string): Promise<T> {
    return fetchService<T>(url, { method: 'GET' }, { responseType: 'json' });
  }
  
  async function getFile(url: string): Promise<Blob> {
    return fetchService<Blob>(url, { method: 'GET' }, { responseType: 'blob' });
  }
  
  export { getJsonData, getFile };

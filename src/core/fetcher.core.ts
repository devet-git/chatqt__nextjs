import { EApi } from '@/constants/api.const';

class Fetcher {
  public async get(path: string) {
    const res = await this.fetcher(path, 'GET');
    return res;
  }
  public async post(path: string, data: any) {
    const res = await this.fetcher(path, 'POST', data);
    return res;
  }
  public async put(path: string, data: any) {
    const res = await this.fetcher(path, 'PUT', data);
    return res;
  }
  public async delete(path: string) {
    const res = await this.fetcher(path, 'DELETE');
    return res;
  }

  private async fetcher(
    path: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    data?: any
  ): Promise<any> {
    const res = await fetch(EApi.BaseUrl + path, {
      method: method,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    console.log(res);

    if (!res.ok) return null;
    return await res.json();
  }
}
const fetcher = new Fetcher();
export default fetcher;

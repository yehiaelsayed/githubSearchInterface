import * as httpClient from '../utils/httpClient'
import config from '../config/config'
import { ResultItem } from '../types/index'


export async function searchGitHub(query: string, type: string): Promise<ResultItem[]> {
  try {
    const res = await httpClient.httpPost(config.gitHubSearchApi, { query, type });
    if (res.status === 200) {
      const data = res.data.data as Array<any>
      const result: ResultItem[] = [];
      data.map((item) => {

        let resultItem: ResultItem = {
          id: item.id,
          pageUrl: item.pageUrl,
          stars: item.stars,
          name: item.name,
          avtarUrl: item.avatar_url
        }
        result.push(resultItem)
      });
      console.log(result);
      return result;
    } else {
      throw new Error(res.statusText);
    }
  } catch (err) {
    throw err;
  }
}
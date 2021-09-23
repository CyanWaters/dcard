import axios from "axios";

const GITHUB_URL = "https://api.github.com";
const SERACH_URL = `${GITHUB_URL}/search/repositories`;

export const searchRepoFromGitHub = async (repoName, count, page) => {
  const URL = `${SERACH_URL}?q=${repoName}&per_page=${count}&page=${page}`;
  try {
    const { data: repos = {} } = await axios.get(URL);
    const totalCount = repos?.total_count || 0;
    const items = repos?.items || [];
    return { items, totalCount };
  } catch (e) {
    return { errorMessage: e?.message || e, error: true };
  }
};

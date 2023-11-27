import { Octokit } from '@octokit/rest';

// can't fingure out how to change octokit type to accomodate I'm returning a binary, so using any :(
export const getArrayBuffer = async (): Promise<any> => {
  const octokit = new Octokit({});

  const res = await octokit.repos.getReleaseAsset({
    owner: 'Harrisman05',
    repo: 'flip-tricks-ascii',
    asset_id: 137501506,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
      accept: 'application/octet-stream',
    },
  });

  const arrayBuffer = res.data;
  return arrayBuffer;
};

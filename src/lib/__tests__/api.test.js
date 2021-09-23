import React from "react";
import moxios from "moxios";
import axios from "axios";

import { mockAPIData } from "../__mocks__";
import { searchRepoFromGitHub, SERACH_URL } from "../api";

beforeAll(() => {
  jest.setTimeout(30000);
});

beforeEach(() => {
  // install the axios mock before each test/describe
  moxios.install();
});

afterEach(() => {
  // uninstall the axios mock after each test/describe
  moxios.uninstall();
});

test("call searchRepoFromGitHub should be well", async () => {
  const repoName = "react";
  const count = 30;
  const page = 1;
  const items = [
    {
      id: 85590724,
      node_id: "MDEwOlJlcG9zaXRvcnk4NTU5MDcyNA==",
      name: "ECDICT",
      full_name: "skywind3000/ECDICT",
      private: false,
      owner: {
        login: "skywind3000",
        id: 3035071,
        node_id: "MDQ6VXNlcjMwMzUwNzE=",
        avatar_url: "https://avatars.githubusercontent.com/u/3035071?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/skywind3000",
        html_url: "https://github.com/skywind3000",
        followers_url: "https://api.github.com/users/skywind3000/followers",
        following_url:
          "https://api.github.com/users/skywind3000/following{/other_user}",
        gists_url: "https://api.github.com/users/skywind3000/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/skywind3000/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/skywind3000/subscriptions",
        organizations_url: "https://api.github.com/users/skywind3000/orgs",
        repos_url: "https://api.github.com/users/skywind3000/repos",
        events_url: "https://api.github.com/users/skywind3000/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/skywind3000/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/skywind3000/ECDICT",
      description: "Free English to Chinese Dictionary Database",
      fork: false,
      url: "https://api.github.com/repos/skywind3000/ECDICT",
      forks_url: "https://api.github.com/repos/skywind3000/ECDICT/forks",
      keys_url: "https://api.github.com/repos/skywind3000/ECDICT/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/skywind3000/ECDICT/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/skywind3000/ECDICT/teams",
      hooks_url: "https://api.github.com/repos/skywind3000/ECDICT/hooks",
      issue_events_url:
        "https://api.github.com/repos/skywind3000/ECDICT/issues/events{/number}",
      events_url: "https://api.github.com/repos/skywind3000/ECDICT/events",
      assignees_url:
        "https://api.github.com/repos/skywind3000/ECDICT/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/skywind3000/ECDICT/branches{/branch}",
      tags_url: "https://api.github.com/repos/skywind3000/ECDICT/tags",
      blobs_url:
        "https://api.github.com/repos/skywind3000/ECDICT/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/skywind3000/ECDICT/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/skywind3000/ECDICT/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/skywind3000/ECDICT/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/skywind3000/ECDICT/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/skywind3000/ECDICT/languages",
      stargazers_url:
        "https://api.github.com/repos/skywind3000/ECDICT/stargazers",
      contributors_url:
        "https://api.github.com/repos/skywind3000/ECDICT/contributors",
      subscribers_url:
        "https://api.github.com/repos/skywind3000/ECDICT/subscribers",
      subscription_url:
        "https://api.github.com/repos/skywind3000/ECDICT/subscription",
      commits_url:
        "https://api.github.com/repos/skywind3000/ECDICT/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/skywind3000/ECDICT/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/skywind3000/ECDICT/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/skywind3000/ECDICT/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/skywind3000/ECDICT/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/skywind3000/ECDICT/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/skywind3000/ECDICT/merges",
      archive_url:
        "https://api.github.com/repos/skywind3000/ECDICT/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/skywind3000/ECDICT/downloads",
      issues_url:
        "https://api.github.com/repos/skywind3000/ECDICT/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/skywind3000/ECDICT/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/skywind3000/ECDICT/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/skywind3000/ECDICT/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/skywind3000/ECDICT/labels{/name}",
      releases_url:
        "https://api.github.com/repos/skywind3000/ECDICT/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/skywind3000/ECDICT/deployments",
      created_at: "2017-03-20T15:03:10Z",
      updated_at: "2021-09-20T09:00:55Z",
      pushed_at: "2021-02-12T05:20:11Z",
      git_url: "git://github.com/skywind3000/ECDICT.git",
      ssh_url: "git@github.com:skywind3000/ECDICT.git",
      clone_url: "https://github.com/skywind3000/ECDICT.git",
      svn_url: "https://github.com/skywind3000/ECDICT",
      homepage: "",
      size: 71618,
      stargazers_count: 2914,
      watchers_count: 2914,
      language: "Python",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 622,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 49,
      license: {
        key: "mit",
        name: "MIT License",
        spdx_id: "MIT",
        url: "https://api.github.com/licenses/mit",
        node_id: "MDc6TGljZW5zZTEz",
      },
      allow_forking: true,
      forks: 622,
      open_issues: 49,
      watchers: 2914,
      default_branch: "master",
      score: 1.0,
    },
  ];
  const total_count = 1;
  const data = { items, total_count };
  const URL = `${SERACH_URL}?q=${repoName}&per_page=${count}&page=${page}`;
  mockAPIData(URL);
  const getSpySuccess = jest.spyOn(axios, "get").mockImplementation(() => {
    return new Promise((resolve, reject) => {
      return resolve({
        data,
      });
    });
  });
  const repo = await searchRepoFromGitHub(repoName, count, page);
  expect(getSpySuccess).toBeCalledWith(URL);
  expect(repo.items).toStrictEqual(items);
  expect(repo.totalCount).toBe(total_count);
});

test("call searchRepoFromGitHub should be well", async () => {
  const repoName = "react";
  const count = 30;
  const page = 1;
  const errorMessage = "Error la";
  const URL = `${SERACH_URL}?q=${repoName}&per_page=${count}&page=${page}`;
  mockAPIData(URL);
  const getSpySuccess = jest.spyOn(axios, "get").mockImplementation(() => {
    return new Promise((resolve, reject) => {
      return reject({
        message: errorMessage,
      });
    });
  });
  const repo = await searchRepoFromGitHub(repoName, count, page);
  expect(getSpySuccess).toBeCalledWith(URL);
  expect(repo.error).toBeTruthy();
  expect(repo.errorMessage).toBe(errorMessage);
});

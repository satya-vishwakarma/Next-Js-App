import { Injectable } from '@nestjs/common';

import axios from 'axios';

@Injectable()
export class AppService {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  async getHello() {
    try {
      const header = {
        Authorization: `Basic c2F0eWEtdmlzaHdha2FybWE6Z2hwX2lBemhVR1VqaUVrejBacVgzSElmbjBUSEJ5QXk5MzFncWlLUA==`,
      };

      const baseUrl = 'https://api.github.com/repos/satya-vishwakarma';

      const saveShaLatestCommit = await axios.get(
        `${baseUrl}/form_builder/git/refs/heads/main`,
        //   { headers: header },
      );

      // /repos/:user/:repo/git/commits/{{sha-latest-commit}}
      const shaBaseTree = await axios.get(
        `${baseUrl}/form_builder/git/commits/${saveShaLatestCommit.data.object.sha}`,
        //  { headers: header },
      );

      // /repos/:user/:repo/git/trees
      const saveShaNewTree = await axios.post(
        `${baseUrl}/form_builder/git/trees`,
        {
          base_tree: shaBaseTree.data.tree.sha,

          tree: [
            {
              path: 'sam.json',
              mode: '100644',
              type: 'blob',
              content: JSON.stringify([{ name: 'satish' }]),
            },
            {
              path: 'sam2.json',
              mode: '100644',
              type: 'blob',
              content: JSON.stringify([{ name: 'satish1' }]),
            },
            {
              path: 'sam3.json',
              mode: '100644',
              type: 'blob',
              content: JSON.stringify([{ name: 'satish2' }]),
            },
          ],
        },
        { headers: header },
      );

      ///repos/:user/:repo/git/commits
      const saveShaNewCommit = await axios.post(
        `${baseUrl}/form_builder/git/commits`,
        {
          parents: [saveShaLatestCommit.data.object.sha],
          tree: saveShaNewTree.data.sha,
          message: 'update json file',
        },
        { headers: header },
      );

      //5. POST /repos/:user/:repo/git/refs/heads/master

      const merge = await axios.post(
        `${baseUrl}/form_builder/git/refs/heads/main`,
        {
          sha: saveShaNewCommit.data.sha,
        },
        { headers: header },
      );

      return {
        1: saveShaLatestCommit.data.object.sha,
        2: shaBaseTree.data.tree.sha,
        3: saveShaNewTree.data.sha,
        4: saveShaNewCommit.data.sha,
        5: merge.data,
      };
    } catch (error) {
      console.log(error);
      return error.data;
    }

    //shaBaseTree,
  }
}

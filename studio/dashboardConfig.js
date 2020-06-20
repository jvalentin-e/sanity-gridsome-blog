export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eee5169b11b6daacc724aca',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-n48tyn3u',
                  apiId: '4b195935-a7d8-4281-b1d3-f01c144b02b7'
                },
                {
                  buildHookId: '5eee5169028bddfc7693e5d7',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-kxos3piy',
                  apiId: '29c3af71-86ae-47bb-b95c-8079134772b4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jvalentin-e/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-kxos3piy.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

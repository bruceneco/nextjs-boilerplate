module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Component generator',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name:'
      },
      {
        type: 'input',
        name: 'path',
        message: 'Relative path:'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../components/{{path}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../components/{{path}}/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
        templateFile: 'templates/component.styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../components/{{path}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/component.stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../components/{{path}}/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/component.test.tsx.hbs'
      },
      {
        type: 'add',
        path: '../components/{{path}}/{{pascalCase name}}/index.ts',
        templateFile: 'templates/component.index.ts.hbs'
      }
    ]
  })
}

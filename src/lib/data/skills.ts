export const enum SkillId {
  Flutter = 'flutter',
  Dart = 'dart',
  TypeScript = 'typescript',
  PostgresQL = 'postgresql',
  Riverpod = 'riverpod',
  GraphQL = 'graphql',
  GoRouter = 'go-router',
  Drift = 'drift',
  Ferry = 'ferry',
  NestJS = 'nestjs',
  NestjsQuery = 'nestjs-query',
  Provider = 'provider',
  Svelte = 'svelte',
  BuiltValue = 'built_value',
  Freezed = 'freezed',
  SQLite = 'sqlite',
  Python = 'python',
  Firebase = 'firebase',
  GithubActions = 'github-actions',
  VSCode = 'vscode',
  React = 'react',
}

export type Skill = {
  id: SkillId;
  name: string;
  url: string;
}

export const skills: Skill[] = [
  { id: SkillId.Flutter, name: 'Flutter', url: 'https://flutter.dev/' },
  { id: SkillId.Dart, name: 'Dart', url: 'https://dart.dev/' },
  { id: SkillId.TypeScript, name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
  { id: SkillId.PostgresQL, name: 'PostgresQL', url: 'https://www.postgresql.org/' },
  { id: SkillId.Riverpod, name: 'Riverpod', url: 'https://riverpod.dev/' },
  { id: SkillId.GraphQL, name: 'GraphQL', url: 'https://graphql.org/' },
  { id: SkillId.GoRouter, name: 'go_router', url: 'https://pub.dev/packages/go_router' },
  { id: SkillId.Drift, name: 'Drift', url: 'https://drift.simonbinder.eu/' },
  { id: SkillId.Ferry, name: 'Ferry', url: 'https://ferrygraphql.com/' },
  { id: SkillId.NestjsQuery, name: 'Nestjs-query', url: 'https://tripss.github.io/nestjs-query/' },
  { id: SkillId.NestJS, name: 'NestJS', url: 'https://nestjs.com/' },
  { id: SkillId.Provider, name: 'Provider', url: 'https://pub.dev/packages/provider' },
  { id: SkillId.Svelte, name: 'Svelte', url: 'https://svelte.dev/' },
  { id: SkillId.BuiltValue, name: 'Built value', url: 'https://pub.dev/packages/built_value' },
  { id: SkillId.Freezed, name: 'Freezed', url: 'https://pub.dev/packages/freezed' },
  { id: SkillId.SQLite, name: 'SQLite', url: 'https://www.sqlite.org/index.html' },
  { id: SkillId.Python, name: 'Python', url: 'https://www.python.org/' },
  { id: SkillId.Firebase, name: 'Firebase', url: 'https://firebase.google.com/' },
  { id: SkillId.GithubActions, name: 'Github actions', url: 'https://github.com/features/actions' },
  { id: SkillId.VSCode, name: 'VSCode', url: 'https://code.visualstudio.com/' },
  { id: SkillId.React, name: 'React', url: 'https://react.dev/' },
];


export const skillFromId = (ids: SkillId[]): Skill[] => {
  return ids.map((id) => skills.find((skill) => skill.id === id)!);
}

export const getSelectedSkills = (url: URL): SkillId[] => {
  return url.searchParams.getAll('skill') as SkillId[];
}

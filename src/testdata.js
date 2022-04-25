const doms = [
  {
    id: 8,
    name: "go.benjiv.com",
    validated: true,
    token:
      "gopkgs_domain_token=uDay4ctb+Q7oGshNvjO1GqjlgDzyo/MjGwJvte8tcaDxorEZ1buauNIMd0iOZpGzv5nwd9c6Bnl3MVECtkYcSw==",
    modules: [
      {
        docs: "https://benjiv.com/",
        path: "hammer",
        repo: "https://benjiv.com/hammer",
        type: "git",
        website: "https://benjiv.com/",
      },
      {
        path: "demo",
        repo: "https://benjiv.com/demo",
        type: "git",
      },
    ],
  },
  {
    id: 9,
    name: "go.atomizer.io",
    validated: true,
    token:
      "gopkgs_domain_token=uDay4ctb+Q7oGshNvjO1GqjlgDzyo/MjGwJvte8tcaDxorEZ1buauNIMd0iOZpGzv5nwd9c6Bnl3MVECtkYcSw==",
    modules: [
      {
        docs: "https://atomizer.io/docs",
        path: "engine",
        repo: "https://atomizer.io/engine",
        type: "git",
      },
      {
        docs: "https://atomizer.io/docs",
        path: "amqp",
        repo: "https://atomizer.io",
        type: "git",
      },
    ],
  },
  {
    id: 10,
    name: "go.devnw.com",
    validated: true,
    token:
      "gopkgs_domain_token=uDay4ctb+Q7oGshNvjO1GqjlgDzyo/MjGwJvte8tcaDxorEZ1buauNIMd0iOZpGzv5nwd9c6Bnl3MVECtkYcSw==",
    modules: [
      {
        docs: "https://devnw.com/alog/docs",
        path: "alog",
        repo: "https://devnw.com",
        type: "git",
      },
      {
        docs: "https://devnw.com/docs",
        path: "dns",
        repo: "https://devnw.com/",
        type: "git",
      },
    ],
  },
  {
    id: 1,
    name: "example.com",
    description: "This is an example domain.",
    validated: true,
    token:
      "gopkgs_domain_token=uDay4ctb+Q7oGshNvjO1GqjlgDzyo/MjGwJvte8tcaDxorEZ1buauNIMd0iOZpGzv5nwd9c6Bnl3MVECtkYcSw==",
    modules: [
      {
        id: 1,
        path: "module1",
        type: "git",
        repo: "https://github.com/example/module1",
        website: "https://example.com",
        docs: "https://example.com/docs",
      },
      {
        id: 1,
        path: "module2",
        type: "git",
        repo: "https://github.com/example/module1",
        website: "https://example.com",
        docs: "https://example.com/docs",
      },
      {
        id: 1,
        path: "module3",
        type: "git",
        repo: "https://github.com/example/module1",
        website: "https://example.com",
        docs: "https://example.com/docs",
      },
      {
        id: 1,
        path: "module4",
        type: "git",
        repo: "https://github.com/example/module1",
        website: "https://example.com",
        docs: "https://example.com/docs",
      },
    ],
  },
  {
    id: 2,
    name: "example.org",
    description: "This is an example domain.",
    token:
      "gopkgs_domain_token=uDay4ctb+Q7oGshNvjO1GqjlgDzyo/MjGwJvte8tcaDxorEZ1buauNIMd0iOZpGzv5nwd9c6Bnl3MVECtkYcSw==",
    modules: [
      {
        id: 1,
        path: "module1",
        type: "git",
        repo: "https://github.com/example_org/module1",
        website: "https://example.org",
        docs: "https://example.org/docs",
      },
      {
        id: 1,
        path: "module2",
        type: "git",
        repo: "https://github.com/example_org/module1",
        website: "https://example.org",
        docs: "https://example.org/docs",
      },
    ],
  },
  {
    id: 2,
    name: "example.net",
    description: "This is an example domain.",
    token:
      "gopkgs_domain_token=uDay4ctb+Q7oGshNvjO1GqjlgDzyo/MjGwJvte8tcaDxorEZ1buauNIMd0iOZpGzv5nwd9c6Bnl3MVECtkYcSw==",
    modules: [
      {
        id: 1,
        path: "module1",
        type: "git",
        repo: "https://github.com/example_net/module1",
        website: "https://example.net",
        docs: "https://example.net/docs",
      },
      {
        id: 1,
        path: "module2",
        type: "git",
        repo: "https://github.com/example_net/module1",
        website: "https://example.net",
        docs: "https://example.net/docs",
      },
    ],
  },
  {
    id: 3,
    name: "example.info",
    description: "This is an example domain.",
    token:
      "gopkgs_domain_token=uDay4ctb+Q7oGshNvjO1GqjlgDzyo/MjGwJvte8tcaDxorEZ1buauNIMd0iOZpGzv5nwd9c6Bnl3MVECtkYcSw==",
    validated: true,
    modules: [
      {
        id: 1,
        path: "module1",
        type: "git",
        repo: "https://github.com/example_net/module1",
        website: "https://example.net",
        docs: "https://example.net/docs",
      },
      {
        id: 1,
        path: "module2",
        type: "git",
        repo: "https://github.com/example_net/module1",
        website: "https://example.net",
        docs: "https://example.net/docs",
      },
    ],
  },
];

export default doms;

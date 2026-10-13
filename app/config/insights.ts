export interface HomepageInsight {
  category: string;
  title: string;
  summary: string;
  readTime: string;
  to: string;
  featured?: boolean;
}

export const homepageInsights: readonly HomepageInsight[] = [
  {
    category: 'Infrastructure & Cost',
    title: 'How website infrastructure affects cost, performance and control',
    summary:
      'A practical look at the technology behind a website, where recurring costs come from, and why the right setup depends on what the business actually needs.',
    readTime: 'Practical guide',
    to: '/insights',
    featured: true,
  },

  {
    category: 'Websites & Technology',
    title: 'What does a business website actually need?',
    summary:
      'Separate useful technology from unnecessary complexity before deciding what should be built.',
    readTime: 'Business guide',
    to: '/insights',
  },

  {
    category: 'Project Planning',
    title: 'Questions worth answering before development begins',
    summary:
      'A clearer requirement can improve technology choices, project scope and long-term maintainability.',
    readTime: 'Planning guide',
    to: '/insights',
  },

  {
    category: 'Technology Decisions',
    title: 'More technology does not always mean a better system',
    summary:
      'Understand when added complexity creates real value and when it simply creates more things to operate.',
    readTime: 'Decision guide',
    to: '/insights',
  },
];

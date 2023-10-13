export const resourcesBreadcrumbs = [
  {
    text: 'MiniPupper Control',
    href: '/dashboard',
  },
  {
    text: 'My MiniPuppers',
    href: '/my-minipuppers',
  },
];

export const resourceDetailBreadcrumbs = [
  ...resourcesBreadcrumbs,
  {
    text: 'MyFavoriteTomato123456',
    href: '#',
  },
];

export const resourceManageTagsBreadcrumbs = [
  ...resourceDetailBreadcrumbs,
  {
    text: 'Manage tags',
    href: '#',
  },
];

export const resourceEditBreadcrumbs = [
  ...resourceDetailBreadcrumbs,
  {
    text: 'Edit',
    href: '#',
  },
];

export const resourceCreateBreadcrumbs = [
  ...resourcesBreadcrumbs,
  {
    text: 'Upload File',
    href: '#',
  },
];

export const readFromS3Breadcrumbs = [
  ...resourceDetailBreadcrumbs,
  {
    text: 'Run simulation',
    href: '#',
  },
];

export const writeToS3Breadcrumbs = [
  ...resourceDetailBreadcrumbs,
  {
    text: 'Create simulation',
    href: '#',
  },
];

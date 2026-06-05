import { assetUrl } from '../utils/assetUrl'

/** public/projects/{id}/1.{ext} — sol | 2 — orta | 3 — sağ */
export const projectScreens = (id, ext = 'webp') =>
  [1, 2, 3].map((n) => assetUrl(`projects/${id}/${n}.${ext}`))

export const PROJECTS_META = [
  {
    id: 'plan4m',
    title: 'Plan4M',
    year: '2024',
    accent: 'cyan',
    stack: ['React Native', 'TypeScript', 'Redux'],
    featured: true,
    stores: {
      appStore: 'https://apps.apple.com/tr/app/plan4m-salon-pt-yönetimi/id6471654614?l=tr',
      playStore: 'https://play.google.com/store/apps/details?id=com.inch35.plan4m&hl=tr',
    },
    website: 'https://plan4m.com',
  },
  {
    id: 'easyfinai',
    title: 'EasyFinAI',
    year: '2025',
    accent: 'purple',
    stack: ['Expo', 'OpenAI', 'Zustand'],
    stores: {
      appStore: 'https://apps.apple.com/tr/app/easyfinai-ai-finans-asistanı/id6756588815?l=tr',
      playStore: 'https://play.google.com/store/apps/details?id=com.easyfinai.app&hl=tr',
    },
    website: 'https://easyfinai.com',
  },
  {
    id: 'futbo',
    title: 'Futbo',
    year: '2024',
    accent: 'blue',
    stack: ['React Native', 'GraphQL', 'Maps'],
    stores: {
      appStore: 'https://apps.apple.com/tr/app/futbo-kulüp-yönetimi/id6504250422?l=tr',
      playStore: 'https://play.google.com/store/apps/details?id=com.inch35.futbo&hl=tr',
    },
    website: 'https://futboapp.com',
  },
  {
    id: 'vgen',
    title: 'V-Gen',
    year: '2024',
    accent: 'green',
    stack: ['RN CLI', 'WebSocket', 'Charts'],
    stores: {
      appStore: 'https://apps.apple.com/tr/app/v-gen/id6737760470?l=tr',
      playStore: 'https://play.google.com/store/apps/details?id=com.vtcenerji.vgen&hl=tr',
    },
  },
  {
    id: 'cartech',
    title: 'Cartech AI',
    year: '2025',
    accent: 'amber',
    stack: ['Vision AI', 'Camera', 'Upload'],
    stores: {
      appStore: 'https://apps.apple.com/tr/app/cartech-ai/id6743794904?l=tr',
      playStore: 'https://play.google.com/store/apps/details?id=com.inch35.cartechai&hl=tr',
    },
  },
]

export const getProjectsWithScreens = () =>
  PROJECTS_META.map((p) => ({
    ...p,
    screens: projectScreens(p.id),
  }))

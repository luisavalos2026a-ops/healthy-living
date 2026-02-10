export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    category: string;
    slug: string;
    imageUrl?: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'The Power of Mindfulness Meditation',
        excerpt: 'Discover how 10 minutes a day can transform your mental clarity and reduce stress levels.',
        content: `
      <p>Mindfulness meditation is more than just a buzzword; it's a scientifically proven practice that can reshape your brain and improve your quality of life. In today's fast-paced world, taking a moment to pause and breathe is essential.</p>
      
      <h2>Why Meditate?</h2>
      <p>Studies show that regular meditation can reduce cortisol levels, lower blood pressure, and improve sleep quality. It allows you to become an observer of your thoughts rather than being ruled by them.</p>
      
      <h2>Getting Started</h2>
      <p>You don't need a quiet retreat or expensive equipment. Simply find a comfortable seat, close your eyes, and focus on your breath. When your mind wanders (and it will), gently bring your attention back to your breathing.</p>
    `,
        author: 'Dr. Emily Chen',
        date: 'February 8, 2026',
        category: 'Mental Health',
        slug: 'power-of-mindfulness',
    },
    {
        id: '2',
        title: '5 Superfoods to Boost Your Immunity',
        excerpt: 'Strengthen your body\'s natural defenses with these nutrient-rich foods easily found in your grocery store.',
        content: `
      <p>Your immune system is your body's first line of defense. fueling it with the right nutrients is key to staying healthy, especially during flu season.</p>
      
      <h2>1. Citrus Fruits</h2>
      <p>Packed with Vitamin C, these fruits help build up your immune system. Lemons, limes, oranges, and grapefruits are excellent choices.</p>
      
      <h2>2. Ginger</h2>
      <p>Ginger may help decrease inflammation, which can help reduce a sore throat and inflammatory illnesses. It may also help with nausea.</p>
      
      <h2>3. Spinach</h2>
      <p>Rich in Vitamin C and numerous antioxidants and beta carotene, which may both increase the infection-fighting ability of our immune systems.</p>
    `,
        author: 'Sarah Johnson, Nutritionist',
        date: 'February 5, 2026',
        category: 'Nutrition',
        slug: '5-superfoods-immunity',
    },
    {
        id: '3',
        title: 'Strength Training for Beginners',
        excerpt: 'A complete guide to starting your strength training journey safely and effectively.',
        content: `
      <p>Strength training isn't just for bodybuilders. It's crucial for bone density, metabolism, and functional movement as we age.</p>
      
      <h2>Start Light</h2>
      <p>Focus on form first. Use bodyweight or light dumbbells to master the movements before adding heavy loads.</p>
      
      <h2>Compound Movements</h2>
      <p>Prioritize exercises that work multiple muscle groups at once, such as squats, deadlifts, and push-ups. These give you the most bang for your buck.</p>
    `,
        author: 'Mike Ross, CPT',
        date: 'January 28, 2026',
        category: 'Fitness',
        slug: 'strength-training-beginners',
    },
    {
        id: '4',
        title: 'Better Sleep, Better Life',
        excerpt: 'Unlocking the secrets to a restful night\'s sleep and waking up refreshed.',
        content: `
      <p>Sleep is the foundation of health. Without it, our bodies cannot repair themselves, and our minds cannot process the day's events.</p>
      
      <h2>Sleep Hygiene</h2>
      <p>Create a routine. Go to bed and wake up at the same time every day, even on weekends. Keep your bedroom cool, dark, and quiet.</p>
    `,
        author: 'Dr. Emily Chen',
        date: 'January 20, 2026',
        category: 'Wellness',
        slug: 'better-sleep-better-life',
    },
];

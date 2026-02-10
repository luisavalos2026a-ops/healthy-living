export interface Recipe {
    id: string;
    title: string;
    description: string;
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
    prepTime: string;
    category: 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack';
    dietary: ('Vegan' | 'Gluten-Free' | 'Keto' | 'Paleo' | 'Vegetarian')[];
    imageUrl?: string;
}

export const recipes: Recipe[] = [
    {
        id: '1',
        title: 'Quinoa & Avocado Salad',
        description: 'A refreshing and nutrient-dense salad perfect for a quick lunch.',
        calories: 350,
        protein: 12,
        fat: 18,
        carbs: 45,
        prepTime: '15 mins',
        category: 'Lunch',
        dietary: ['Vegan', 'Gluten-Free'],
    },
    {
        id: '2',
        title: 'Grilled Salmon with Asparagus',
        description: 'Rich in Omega-3 fatty acids and protein, this dinner is a heart-healthy choice.',
        calories: 450,
        protein: 35,
        fat: 22,
        carbs: 5,
        prepTime: '25 mins',
        category: 'Dinner',
        dietary: ['Gluten-Free', 'Keto'],
    },
    {
        id: '3',
        title: 'Berry Protein Smoothie Bowl',
        description: 'Start your day with a burst of antioxidants and protein.',
        calories: 300,
        protein: 20,
        fat: 8,
        carbs: 35,
        prepTime: '10 mins',
        category: 'Breakfast',
        dietary: ['Vegetarian', 'Gluten-Free'],
    },
    {
        id: '4',
        title: 'Zucchini Noodles with Pesto',
        description: 'A low-carb alternative to pasta that doesn\'t skimp on flavor.',
        calories: 280,
        protein: 8,
        fat: 24,
        carbs: 10,
        prepTime: '20 mins',
        category: 'Dinner',
        dietary: ['Vegetarian', 'Keto', 'Gluten-Free'],
    },
];

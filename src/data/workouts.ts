export interface WorkoutPlan {
    id: string;
    title: string;
    description: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    duration: string;
    frequency: string;
    focus: string[];
}

export const workoutPlans: WorkoutPlan[] = [
    {
        id: '1',
        title: 'Couch to 5K',
        description: 'A gentle introduction to running that alternates walking and jogging.',
        level: 'Beginner',
        duration: '9 weeks',
        frequency: '3 days/week',
        focus: ['Cardio', 'Endurance'],
    },
    {
        id: '2',
        title: 'Full Body Foundations',
        description: 'Master the basic movement patterns with bodyweight exercises.',
        level: 'Beginner',
        duration: '4 weeks',
        frequency: '3 days/week',
        focus: ['Strength', 'Mobility'],
    },
    {
        id: '3',
        title: 'HIIT Metabolism Booster',
        description: 'High-intensity interval training designed to burn fat and build stamina.',
        level: 'Intermediate',
        duration: '6 weeks',
        frequency: '4 days/week',
        focus: ['Cardio', 'Weight Loss'],
    },
    {
        id: '4',
        title: 'Powerlifting Basics',
        description: 'Focus on the "big three" lifts: Squat, Bench Press, and Deadlift.',
        level: 'Intermediate',
        duration: '8 weeks',
        frequency: '4 days/week',
        focus: ['Strength', 'Hypertrophy'],
    },
    {
        id: '5',
        title: 'Marathon Prep',
        description: 'A rigorous training schedule for experienced runners aiming for 26.2 miles.',
        level: 'Advanced',
        duration: '16 weeks',
        frequency: '5-6 days/week',
        focus: ['Endurance', 'Mental Toughness'],
    },
    {
        id: '6',
        title: 'Advanced Calisthenics',
        description: 'Master gravity-defying moves like the muscle-up and front lever.',
        level: 'Advanced',
        duration: '12 weeks',
        frequency: '5 days/week',
        focus: ['Strength', 'Skill', 'Control'],
    },
];

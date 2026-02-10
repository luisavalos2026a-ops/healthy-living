'use client';

import { useState } from 'react';
import { recipes } from '@/data/recipes';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { Clock, Flame } from 'lucide-react';
import styles from './recipes.module.css';

export default function Recipes() {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [selectedDiet, setSelectedDiet] = useState<string>('All');

    const categories = ['All', ...new Set(recipes.map(r => r.category))];
    const diets = ['All', 'Vegan', 'Gluten-Free', 'Keto', 'Paleo', 'Vegetarian'];

    const filteredRecipes = recipes.filter(recipe => {
        const categoryMatch = selectedCategory === 'All' || recipe.category === selectedCategory;
        const dietMatch = selectedDiet === 'All' || recipe.dietary.includes(selectedDiet as any);
        return categoryMatch && dietMatch;
    });

    return (
        <main>
            <Section className="text-center" variant="muted">
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-text-main)' }}>
                    Healthy Recipes
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                    Nutritious meals designed to fuel your body and delight your taste buds.
                </p>
            </Section>

            <Section>
                <div className={styles.controls}>
                    <select
                        className={styles.select}
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat} Recipes</option>
                        ))}
                    </select>

                    <select
                        className={styles.select}
                        value={selectedDiet}
                        onChange={(e) => setSelectedDiet(e.target.value)}
                    >
                        {diets.map(diet => (
                            <option key={diet} value={diet}>{diet} Diet</option>
                        ))}
                    </select>
                </div>

                <div className={styles.recipeGrid}>
                    {filteredRecipes.map((recipe) => (
                        <Card key={recipe.id} hoverable className={styles.recipeCard}>
                            <div className={styles.image}>[Recipe Image]</div>
                            <div className={styles.category}>{recipe.category}</div>
                            <h3 className={styles.title}>{recipe.title}</h3>
                            <p className={styles.description}>{recipe.description}</p>

                            <div className={styles.tags}>
                                {recipe.dietary.map(tag => (
                                    <span key={tag} className={styles.tag}>{tag}</span>
                                ))}
                            </div>

                            <div className={styles.metrics}>
                                <div className={styles.metric}>
                                    <Flame size={16} />
                                    {recipe.calories} kcal
                                </div>
                                <div className={styles.metric}>
                                    <Clock size={16} />
                                    {recipe.prepTime}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {filteredRecipes.length === 0 && (
                    <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginTop: '3rem' }}>
                        No recipes found matching your criteria. Try adjusting the filters.
                    </p>
                )}
            </Section>
        </main>
    );
}
